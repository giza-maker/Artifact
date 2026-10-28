import ingredientCatalog from "../content/ingredients.json" with { type: "json" };
import recipeCatalog from "../content/recipes.json" with { type: "json" };
import { resolveCookingIdentity } from "./food-identity.js";

export const COOK_INGREDIENTS = ingredientCatalog.ingredients;
const ingredientIndex = new Map(
  COOK_INGREDIENTS.map((entry) => [entry.id, entry]),
);
const units = {
  piece: "pieces",
  slice: "slices",
  clove: "cloves",
  bunch: "bunches",
};

export function getIngredient(id) {
  return ingredientIndex.get(id) ?? null;
}
export function ingredientLabel(id) {
  return getIngredient(id)?.name.en ?? id;
}
export function toolLabel(id) {
  return String(id)
    .replace(/_/g, " ")
    .replace(/^\w/, (letter) => letter.toUpperCase());
}
const relativeImage = (path) =>
  typeof path === "string" &&
  /^\/?images\/[\w./-]+$/.test(path) &&
  !path.includes("..")
    ? path.replace(/^\//, "")
    : null;

export const COOK_RECIPES = recipeCatalog.recipes.map((recipe) => ({
  id: recipe.id,
  name: recipe.name.en,
  nameAr: recipe.name.ar,
  time: recipe.prepMinutes + recipe.cookMinutes,
  prepMinutes: recipe.prepMinutes,
  cookMinutes: recipe.cookMinutes,
  servings: recipe.servings,
  difficulty: recipe.difficulty,
  cuisine: recipe.cuisine,
  image: relativeImage(recipe.image),
  cardImage: relativeImage(recipe.cardImage ?? recipe.image),
  requiredTools: recipe.tools.filter((id) => !id.endsWith("_optional")),
  allergens: [
    ...new Set(
      recipe.ingredients.flatMap(
        (item) => getIngredient(item.ingredientId)?.dietary.allergenTags ?? [],
      ),
    ),
  ],
  ingredients: recipe.ingredients.map((item) => ({
    id: item.ingredientId,
    qty: item.quantity,
    unit: units[item.unit] ?? item.unit,
  })),
  steps: recipe.steps.map((text, index) => ({
    title: `Step ${index + 1}`,
    text,
  })),
}));

export const COOK_TOOLS = [
  ...new Set(COOK_RECIPES.flatMap((recipe) => recipe.requiredTools)),
].map((id) => ({ id, name: toolLabel(id), on: false }));

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}
const searchEntries = COOK_INGREDIENTS.map((entry) => ({
  entry,
  names: [
    entry.name.en,
    entry.name.ar,
    ...(entry.aliases.en ?? []),
    ...(entry.aliases.ar ?? []),
  ].map(normalize),
}));

// Suggestions are never a saved link: callers must require an explicit selection.
export function suggestIngredientLinks(name, { limit = 5 } = {}) {
  const query = normalize(name);
  const count = Number.isFinite(limit)
    ? Math.max(0, Math.min(20, Math.floor(limit)))
    : 5;
  if (!query || !count) return [];
  const identity = resolveCookingIdentity({ name });
  if (identity.status === "matched")
    return [getIngredient(identity.ingredientId)];
  // Strip packaging quantities only, preserving preparation/type words.
  const tokens = query
    .replace(/\b\d+(?:\s+\d+)?\s*(?:kg|g|ml|l|pack|packs|pieces|pcs)\b/g, " ")
    .replace(/\b(?:pack of|multipack|pack|packs|x)\b/g, " ")
    .split(/\s+/)
    .filter((token) => token && !/^\d+$/.test(token));
  if (!tokens.length) return [];
  return searchEntries
    .map(({ entry, names }) => {
      const score = Math.max(
        ...names.map((candidate) => {
          if (candidate === query) return 1000;
          const candidateTokens = candidate.split(" ");
          if (!tokens.every((token) => candidateTokens.includes(token)))
            return 0;
          return 100 + tokens.length / candidateTokens.length;
        }),
      );
      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id))
    .slice(0, count)
    .map((result) => result.entry);
}
