import { COOK_INGREDIENTS, getIngredient } from "./cook-catalog.js";

export const FOOD_CATEGORIES = Object.freeze(
  [
    {
      id: "rice_grains",
      en: "Rice & grains",
      ar: "الأرز والحبوب",
      atlasIndex: 0,
      defaultStorage: "Pantry",
    },
    {
      id: "pasta",
      en: "Pasta",
      ar: "المكرونة",
      atlasIndex: 1,
      defaultStorage: "Pantry",
    },
    {
      id: "oil",
      en: "Oil",
      ar: "الزيوت",
      atlasIndex: 2,
      defaultStorage: "Pantry",
    },
    {
      id: "dairy",
      en: "Dairy",
      ar: "منتجات الألبان",
      atlasIndex: 3,
      defaultStorage: "Fridge",
    },
    {
      id: "eggs",
      en: "Eggs",
      ar: "البيض",
      atlasIndex: 4,
      defaultStorage: "Fridge",
    },
    {
      id: "meat",
      en: "Meat",
      ar: "اللحوم",
      atlasIndex: 5,
      defaultStorage: "Fridge",
    },
    {
      id: "poultry",
      en: "Poultry",
      ar: "الدواجن",
      atlasIndex: 6,
      defaultStorage: "Fridge",
    },
    {
      id: "fish",
      en: "Fish & seafood",
      ar: "الأسماك والمأكولات البحرية",
      atlasIndex: 7,
      defaultStorage: "Fridge",
    },
    {
      id: "vegetables",
      en: "Vegetables",
      ar: "الخضروات",
      atlasIndex: 8,
      defaultStorage: "Fridge",
    },
    {
      id: "fruit",
      en: "Fruit",
      ar: "الفاكهة",
      atlasIndex: 9,
      defaultStorage: "Fridge",
    },
    {
      id: "legumes",
      en: "Legumes",
      ar: "البقوليات",
      atlasIndex: 10,
      defaultStorage: "Pantry",
    },
    {
      id: "spices",
      en: "Spices",
      ar: "التوابل",
      atlasIndex: 11,
      defaultStorage: "Spices",
    },
    {
      id: "bakery",
      en: "Bakery",
      ar: "المخبوزات",
      atlasIndex: 12,
      defaultStorage: "Pantry",
    },
    {
      id: "drinks",
      en: "Drinks",
      ar: "المشروبات",
      atlasIndex: 13,
      defaultStorage: "Pantry",
    },
    {
      id: "condiments",
      en: "Sauces & condiments",
      ar: "الصلصات والتوابل السائلة",
      atlasIndex: 14,
      defaultStorage: "Pantry",
    },
    {
      id: "other",
      en: "Other food",
      ar: "أطعمة أخرى",
      atlasIndex: 15,
      defaultStorage: "Pantry",
    },
  ].map(Object.freeze),
);

const categoryIndex = new Map(
  FOOD_CATEGORIES.map((category) => [category.id, category]),
);

export function getFoodCategory(id) {
  return typeof id === "string" ? (categoryIndex.get(id) ?? null) : null;
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/([\p{L}])([\p{N}])/gu, "$1 $2")
    .replace(/([\p{N}])([\p{L}])/gu, "$1 $2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

const aliases = {
  pasta: [
    "pasta",
    "macaroni",
    "spaghetti",
    "vermicelli",
    "orzo",
    "noodle",
    "مكرونه",
    "معكرونه",
    "شعريه",
    "لسان عصفور",
  ],
  rice_grains: [
    "rice",
    "basmati",
    "bulgur",
    "couscous",
    "oats",
    "quinoa",
    "barley",
    "ارز",
    "رز",
    "بسمتي",
    "برغل",
    "كسكسي",
    "كسكس",
    "شوفان",
    "كينوا",
    "شعير",
  ],
  oil: ["oil", "زيت"],
  eggs: ["egg", "eggs", "بيض", "بيضه"],
  dairy: [
    "milk",
    "yogurt",
    "yoghurt",
    "cheese",
    "butter",
    "cream",
    "labneh",
    "حليب",
    "لبن",
    "زبادي",
    "جبن",
    "جبنه",
    "زبد",
    "قشطه",
    "لبنه",
  ],
  poultry: [
    "chicken",
    "turkey",
    "duck",
    "poultry",
    "دجاج",
    "فراخ",
    "ديك رومي",
    "بط",
  ],
  fish: [
    "fish",
    "tuna",
    "salmon",
    "shrimp",
    "prawn",
    "seafood",
    "سمك",
    "تونه",
    "سلمون",
    "جمبري",
    "روبيان",
  ],
  meat: [
    "beef",
    "meat",
    "lamb",
    "mutton",
    "veal",
    "steak",
    "لحم",
    "لحمه",
    "بقري",
    "ضاني",
    "كفته",
  ],
  legumes: [
    "lentil",
    "lentils",
    "chickpea",
    "chickpeas",
    "beans",
    "bean",
    "عدس",
    "حمص",
    "فاصوليا",
    "فول",
    "لوبيا",
  ],
  spices: [
    "spice",
    "salt",
    "pepper",
    "cumin",
    "paprika",
    "cinnamon",
    "turmeric",
    "بهار",
    "توابل",
    "ملح",
    "فلفل اسود",
    "كمون",
    "بابريكا",
    "قرفه",
    "كركم",
  ],
  bakery: [
    "bread",
    "toast",
    "pita",
    "croissant",
    "عيش",
    "خبز",
    "توست",
    "كرواسون",
  ],
  drinks: [
    "pepsi",
    "coca cola",
    "coke",
    "7up",
    "seven up",
    "sprite",
    "juice",
    "water",
    "soda",
    "بيبسي",
    "كوكاكولا",
    "كوكا كولا",
    "سفن",
    "سبرايت",
    "عصير",
    "مياه",
    "ماء",
    "مشروب",
  ],
  condiments: [
    "sauce",
    "ketchup",
    "mayonnaise",
    "mustard",
    "vinegar",
    "tahini",
    "صلصه",
    "كاتشب",
    "مايونيز",
    "مسترده",
    "خل",
    "طحينه",
    "دبس",
  ],
  fruit: [
    "apple",
    "banana",
    "orange",
    "lemon",
    "lime",
    "date",
    "mango",
    "grape",
    "strawberry",
    "تفاح",
    "موز",
    "برتقال",
    "ليمون",
    "تمر",
    "بلح",
    "مانجو",
    "عنب",
    "فراوله",
  ],
  vegetables: [
    "tomato",
    "cucumber",
    "onion",
    "garlic",
    "potato",
    "carrot",
    "pepper",
    "lettuce",
    "spinach",
    "vegetable",
    "طماطم",
    "خيار",
    "بصل",
    "ثوم",
    "بطاطس",
    "بطاطا",
    "جزر",
    "فلفل",
    "خس",
    "سبانخ",
    "خضار",
  ],
};

const aliasEntries = Object.entries(aliases).flatMap(([categoryId, values]) =>
  values.map((value) => ({ categoryId, value: normalize(value) })),
);

function containsAlias(name, alias) {
  return ` ${name} `.includes(` ${alias} `);
}

function catalogCategory(ingredient) {
  if (!ingredient) return null;
  if (ingredient.id === "egg") return "eggs";
  if (ingredient.id === "pasta_dry") return "pasta";
  if (ingredient.id.startsWith("chicken_") || /turkey|duck/.test(ingredient.id))
    return "poultry";
  return (
    {
      produce: "vegetables",
      herb: "vegetables",
      fruit: "fruit",
      frozen: "vegetables",
      pulse: "legumes",
      grain: "rice_grains",
      baking: "rice_grains",
      bakery: "bakery",
      dairy_eggs: "dairy",
      meat: "meat",
      seafood: "fish",
      oil: "oil",
      spice: "spices",
      condiment: "condiments",
      canned: "condiments",
      sweetener: "condiments",
      seed_nut: "other",
      pantry: "other",
      basic: "drinks",
    }[ingredient.category] ?? "other"
  );
}

const catalogNames = COOK_INGREDIENTS.map((ingredient) => ({
  ingredient,
  names: [
    ingredient.name.en,
    ingredient.name.ar,
    ...(ingredient.aliases.en ?? []),
    ...(ingredient.aliases.ar ?? []),
  ]
    .map(normalize)
    .filter(Boolean),
}));

function result(categoryId, source, normalizedName) {
  const category = getFoodCategory(categoryId) ?? getFoodCategory("other");
  const frozen =
    containsAlias(normalizedName, "frozen") ||
    containsAlias(normalizedName, "مجمد") ||
    containsAlias(normalizedName, "مجمده");
  return {
    category,
    source,
    suggestedStorage:
      frozen && ["meat", "poultry", "fish"].includes(category.id)
        ? "Freezer"
        : category.defaultStorage,
  };
}

export function inferFoodCategory({ name, ingredientId, categoryId } = {}) {
  const normalizedName = normalize(name);
  if (getFoodCategory(categoryId))
    return result(categoryId, "user", normalizedName);

  const ingredient = getIngredient(ingredientId);
  if (ingredient)
    return result(catalogCategory(ingredient), "ingredient", normalizedName);

  const catalogMatch =
    normalizedName &&
    catalogNames.find(({ names }) =>
      names.some((candidate) => containsAlias(normalizedName, candidate)),
    );
  if (catalogMatch)
    return result(
      catalogCategory(catalogMatch.ingredient),
      "name",
      normalizedName,
    );

  const aliasMatch =
    normalizedName &&
    aliasEntries.find(({ value }) => containsAlias(normalizedName, value));
  return result(
    aliasMatch?.categoryId ?? "other",
    aliasMatch ? "name" : "fallback",
    normalizedName,
  );
}
