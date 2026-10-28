import ingredientCatalog from "../content/ingredients.json" with { type: "json" };
import foodArtCatalog from "../content/food-art-catalog.json" with { type: "json" };

const MAX_INPUT_LENGTH = 2_000;
const SIZE_WORDS = new Set([
  "small",
  "medium",
  "large",
  "xl",
  "jumbo",
  "صغير",
  "صغيرة",
  "متوسط",
  "متوسطة",
  "كبير",
  "كبيرة",
]);
const PACK_WORDS = new Set([
  "pack",
  "packs",
  "tray",
  "trays",
  "box",
  "boxes",
  "carton",
  "cartons",
  "pc",
  "pcs",
  "piece",
  "pieces",
  "count",
  "ct",
  "dozen",
  "عبوة",
  "عبوات",
  "علبة",
  "علب",
  "صينية",
  "صواني",
  "كرتونة",
  "كرتون",
  "قطعة",
  "قطع",
  "حبة",
  "حبات",
]);
const QUANTITY_UNITS = new Set([
  "g",
  "kg",
  "ml",
  "l",
  "gram",
  "grams",
  "kilogram",
  "kilograms",
  "liter",
  "liters",
  "litre",
  "litres",
  "جم",
  "جرام",
  "غ",
  "غرام",
  "كجم",
  "كغ",
  "مل",
  "لتر",
]);
// Catalog aliases normally describe the same cooking identity. These aliases
// intentionally omit a species/type distinction required by the canonical ID.
const UNSAFE_CANONICAL_ALIASES = new Set([
  "fish fillet",
  "فيليه سمك",
  "macaroni",
  "مكرونة",
  "معكرونة",
  "wrap",
  "garbanzo beans",
  "cannellini beans",
  "flatbread",
  "white cheese",
  "جبنة بيضاء",
]);
const digitMap = new Map(
  [..."٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹"].map((digit, index) => [
    digit,
    String(index % 10),
  ]),
);

function baseNormalize(value) {
  if (typeof value !== "string" || value.length > MAX_INPUT_LENGTH) return "";
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[٠-٩۰-۹]/g, (digit) => digitMap.get(digit))
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[٫,](?=\d)/g, ".")
    .replace(/([\p{L}])(\p{N})/gu, "$1 $2")
    .replace(/(\p{N})([\p{L}])/gu, "$1 $2")
    .replace(/[^\p{L}\p{N}.]+/gu, " ")
    .replace(/\.(?!\d)|(?<!\d)\./g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function normalizeRetailFoodName(value) {
  const normalized = baseNormalize(value);
  if (!normalized) return "";
  const tokens = normalized.split(" ");
  const kept = [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (SIZE_WORDS.has(token)) continue;
    if (PACK_WORDS.has(token)) {
      if (kept.at(-1) === "of") kept.pop();
      continue;
    }
    if (/^\d+(?:\.\d+)?$/.test(token) && PACK_WORDS.has(tokens[index + 1])) {
      index += 1;
      continue;
    }
    if (
      /^\d+(?:\.\d+)?$/.test(token) &&
      QUANTITY_UNITS.has(tokens[index + 1])
    ) {
      index += 1;
      continue;
    }
    if (token === "of" && PACK_WORDS.has(tokens[index - 1])) continue;
    kept.push(token);
  }
  return kept.join(" ");
}

function pluralizeEnglish(value) {
  const words = value.split(" ");
  const last = words.at(-1);
  if (!last || !/^[a-z]+$/.test(last)) return null;
  if (/(?:s|x|z|ch|sh)$/.test(last)) words[words.length - 1] = `${last}es`;
  else if (/[^aeiou]y$/.test(last))
    words[words.length - 1] = `${last.slice(0, -1)}ies`;
  else words[words.length - 1] = `${last}s`;
  return words.join(" ");
}

const ingredients = ingredientCatalog.ingredients;
const ingredientById = new Map(ingredients.map((entry) => [entry.id, entry]));
const artItems = foodArtCatalog.items;
const exactIngredientIds = new Map();
const primaryIngredientIds = new Map();
const aliasIngredientIds = new Map();
const exactArtItems = new Map();

function add(map, key, value) {
  if (!key) return;
  const values = map.get(key) ?? [];
  if (!values.includes(value)) values.push(value);
  map.set(key, values);
}

function addNameVariants(map, rawName, value) {
  const name = baseNormalize(rawName);
  if (!name) return;
  add(map, name, value);
  const plural = pluralizeEnglish(name);
  if (plural) add(map, plural, value);
}

for (const ingredient of ingredients) {
  for (const name of [ingredient.name.en, ingredient.name.ar]) {
    addNameVariants(exactIngredientIds, name, ingredient.id);
    addNameVariants(primaryIngredientIds, name, ingredient.id);
  }
  for (const name of [
    ...(ingredient.aliases?.en ?? []),
    ...(ingredient.aliases?.ar ?? []),
  ]) {
    if (!UNSAFE_CANONICAL_ALIASES.has(baseNormalize(name))) {
      addNameVariants(exactIngredientIds, name, ingredient.id);
      addNameVariants(aliasIngredientIds, name, ingredient.id);
    }
  }
}

for (const item of artItems) {
  // Primary labels are curated food types. Broad illustration aliases are not
  // canonical identity evidence (for example, an alias may describe packaging).
  for (const name of [item.en, item.ar])
    addNameVariants(exactArtItems, name, item);
}

const categoriesByIngredient = new Map();
for (const item of artItems) {
  if (!ingredientById.has(item.cookingIngredientId)) continue;
  const categories =
    categoriesByIngredient.get(item.cookingIngredientId) ?? new Set();
  for (const categoryId of item.categoryIds ?? []) categories.add(categoryId);
  categoriesByIngredient.set(item.cookingIngredientId, categories);
}
const DISPLAY_CATEGORY = {
  produce: "vegetables",
  herb: "vegetables",
  fruit: "fruit",
  frozen: "frozen",
  pulse: "legumes",
  grain: "rice_grains",
  baking: "baking",
  bakery: "bakery",
  dairy_eggs: "dairy",
  meat: "meat",
  seafood: "seafood",
  oil: "oil",
  spice: "spices",
  condiment: "condiments",
  canned: "canned",
  sweetener: "sweeteners",
  seed_nut: "nuts_seeds",
  pantry: "other",
  basic: "drinks",
};
export function getCookingCategoryId(ingredientId) {
  const ingredient = ingredientById.get(ingredientId);
  if (!ingredient) return null;
  if (ingredientId === "egg") return "eggs";
  if (ingredientId === "pasta_dry") return "pasta";
  if (ingredientId.startsWith("chicken_") || /turkey|duck/.test(ingredientId))
    return "poultry";
  return DISPLAY_CATEGORY[ingredient.category] ?? "other";
}
for (const ingredient of ingredients) {
  const categories = categoriesByIngredient.get(ingredient.id) ?? new Set();
  categories.add(getCookingCategoryId(ingredient.id));
  if (ingredient.id === "egg") categories.add("eggs");
  if (ingredient.id === "pasta_dry") categories.add("pasta");
  if (ingredient.id.startsWith("chicken_") || /turkey|duck/.test(ingredient.id))
    categories.add("poultry");
  if (ingredient.id === "coconut_milk") categories.add("plant_based");
  categoriesByIngredient.set(ingredient.id, categories);
}

function compatibleCategory(ingredientId, categoryId) {
  return (
    !categoryId ||
    categoriesByIngredient.get(ingredientId)?.has(categoryId) === true
  );
}

function containedCandidates(name) {
  if (!name) return [];
  const padded = ` ${name} `;
  const found = new Set();
  for (const [candidateName, ids] of exactIngredientIds) {
    if (candidateName.length < 3 || !padded.includes(` ${candidateName} `))
      continue;
    for (const id of ids) found.add(id);
  }
  return [...found].sort();
}

const empty = () => ({
  ingredientId: null,
  foodTypeId: null,
  status: "unmatched",
  candidates: [],
});

export function resolveCookingIdentity({
  name,
  categoryId = null,
  cookingLinkDisabled = false,
} = {}) {
  if (cookingLinkDisabled) return empty();
  const normalized = normalizeRetailFoodName(name);
  if (!normalized) return empty();

  const artMatches = exactArtItems.get(normalized) ?? [];
  const foodType = artMatches.length === 1 ? artMatches[0] : null;
  const primaryIds = primaryIngredientIds.get(normalized) ?? [];
  const aliasIds = aliasIngredientIds.get(normalized) ?? [];
  const genericArtVeto =
    artMatches.length > 0 &&
    artMatches.every((item) => !ingredientById.has(item.cookingIngredientId));
  const unsafeAlias = UNSAFE_CANONICAL_ALIASES.has(normalized);
  const exact = new Set(primaryIds);
  if (!genericArtVeto && !unsafeAlias) for (const id of aliasIds) exact.add(id);
  if (!unsafeAlias)
    for (const item of artMatches)
      if (ingredientById.has(item.cookingIngredientId))
        exact.add(item.cookingIngredientId);
  const exactCandidates = [...exact].sort();

  if (exactCandidates.length === 1) {
    const ingredientId = exactCandidates[0];
    if (compatibleCategory(ingredientId, categoryId)) {
      const linkedType =
        foodType?.cookingIngredientId === ingredientId
          ? foodType
          : (artItems.find(
              (item) => item.cookingIngredientId === ingredientId,
            ) ?? null);
      return {
        ingredientId,
        foodTypeId: linkedType?.id ?? foodType?.id ?? null,
        status: "matched",
        candidates: [ingredientId],
      };
    }
    return {
      ingredientId: null,
      foodTypeId: foodType?.id ?? null,
      status: "review",
      candidates: [ingredientId],
    };
  }

  const candidates = exactCandidates.length
    ? exactCandidates
    : containedCandidates(normalized);
  if (foodType || candidates.length)
    return {
      ingredientId: null,
      foodTypeId: foodType?.id ?? null,
      status: "review",
      candidates,
    };
  return empty();
}
