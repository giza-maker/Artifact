import { COOK_INGREDIENTS, getIngredient } from "./cook-catalog.js";
import { getCookingCategoryId } from "./food-identity.js";
import foodArtCatalog from "../content/food-art-catalog.json" with { type: "json" };

export const FOOD_CATEGORIES = Object.freeze(
  [
    {
      id: "rice_grains",
      en: "Rice & grains",
      ar: "الأرز والحبوب",
      atlasIndex: 0,
      representativeArtId: "basmati_rice",
      defaultStorage: "Pantry",
    },
    {
      id: "pasta",
      en: "Pasta",
      ar: "المكرونة",
      atlasIndex: 1,
      representativeArtId: "vermicelli",
      defaultStorage: "Pantry",
    },
    {
      id: "oil",
      en: "Oil",
      ar: "الزيوت",
      atlasIndex: 2,
      representativeArtId: "olive_oil",
      defaultStorage: "Pantry",
    },
    {
      id: "dairy",
      en: "Dairy",
      ar: "منتجات الألبان",
      atlasIndex: 3,
      representativeArtId: "milk",
      defaultStorage: "Fridge",
    },
    {
      id: "eggs",
      en: "Eggs",
      ar: "البيض",
      atlasIndex: 4,
      representativeArtId: "eggs",
      defaultStorage: "Fridge",
    },
    {
      id: "meat",
      en: "Meat",
      ar: "اللحوم",
      atlasIndex: 5,
      representativeArtId: "beef_steak",
      defaultStorage: "Fridge",
    },
    {
      id: "poultry",
      en: "Poultry",
      ar: "الدواجن",
      atlasIndex: 6,
      representativeArtId: "chicken_breast",
      defaultStorage: "Fridge",
    },
    {
      id: "fish",
      en: "Fish & seafood",
      ar: "الأسماك والمأكولات البحرية",
      atlasIndex: 7,
      representativeArtId: "fish_fillet",
      defaultStorage: "Fridge",
    },
    {
      id: "vegetables",
      en: "Vegetables",
      ar: "الخضروات",
      atlasIndex: 8,
      representativeArtId: "tomato",
      defaultStorage: "Fridge",
    },
    {
      id: "fruit",
      en: "Fruit",
      ar: "الفاكهة",
      atlasIndex: 9,
      representativeArtId: "apple",
      defaultStorage: "Fridge",
    },
    {
      id: "legumes",
      en: "Legumes",
      ar: "البقوليات",
      atlasIndex: 10,
      representativeArtId: "chickpeas",
      defaultStorage: "Pantry",
    },
    {
      id: "spices",
      en: "Spices",
      ar: "التوابل",
      atlasIndex: 11,
      representativeArtId: "cumin",
      defaultStorage: "Spices",
    },
    {
      id: "bakery",
      en: "Bakery",
      ar: "المخبوزات",
      atlasIndex: 12,
      representativeArtId: "sliced_bread",
      defaultStorage: "Pantry",
    },
    {
      id: "drinks",
      en: "Drinks",
      ar: "المشروبات",
      atlasIndex: 13,
      representativeArtId: "cola",
      defaultStorage: "Pantry",
    },
    {
      id: "condiments",
      en: "Sauces & condiments",
      ar: "الصلصات والتوابل السائلة",
      atlasIndex: 14,
      representativeArtId: "tahini",
      defaultStorage: "Pantry",
    },
    {
      id: "other",
      en: "Other food",
      ar: "أطعمة أخرى",
      atlasIndex: 15,
      defaultStorage: "Pantry",
    },
    {
      id: "nuts_seeds",
      en: "Nuts & seeds",
      ar: "المكسرات والبذور",
      atlasIndex: 15,
      representativeArtId: "almonds",
      defaultStorage: "Pantry",
    },
    {
      id: "dried_fruit",
      en: "Dried fruit",
      ar: "الفواكه المجففة",
      atlasIndex: 15,
      representativeArtId: "dried_fruit_mix",
      defaultStorage: "Pantry",
    },
    {
      id: "snacks",
      en: "Snacks",
      ar: "الوجبات الخفيفة",
      atlasIndex: 15,
      representativeArtId: "potato_chips",
      defaultStorage: "Pantry",
    },
    {
      id: "sweets",
      en: "Sweets",
      ar: "الحلويات",
      atlasIndex: 15,
      representativeArtId: "chocolate_bar",
      defaultStorage: "Pantry",
    },
    {
      id: "baking",
      en: "Baking",
      ar: "مستلزمات الخبز",
      atlasIndex: 15,
      representativeArtId: "white_flour",
      defaultStorage: "Pantry",
    },
    {
      id: "sweeteners",
      en: "Sweeteners",
      ar: "المحليات",
      atlasIndex: 15,
      representativeArtId: "honey",
      defaultStorage: "Pantry",
    },
    {
      id: "breakfast",
      en: "Breakfast",
      ar: "الإفطار",
      atlasIndex: 15,
      representativeArtId: "cornflakes",
      defaultStorage: "Pantry",
    },
    {
      id: "tea_coffee",
      en: "Tea & coffee",
      ar: "الشاي والقهوة",
      atlasIndex: 15,
      representativeArtId: "arabic_coffee",
      defaultStorage: "Pantry",
    },
    {
      id: "frozen",
      en: "Frozen food",
      ar: "الأطعمة المجمدة",
      atlasIndex: 15,
      representativeArtId: "frozen_mixed_veg",
      defaultStorage: "Freezer",
    },
    {
      id: "canned",
      en: "Canned food",
      ar: "الأطعمة المعلبة",
      atlasIndex: 15,
      representativeArtId: "canned_beans",
      defaultStorage: "Pantry",
    },
    {
      id: "deli",
      en: "Deli",
      ar: "اللحوم الباردة",
      atlasIndex: 15,
      representativeArtId: "turkey_slices",
      defaultStorage: "Fridge",
    },
    {
      id: "ready_meals",
      en: "Ready meals",
      ar: "الوجبات الجاهزة",
      atlasIndex: 15,
      representativeArtId: "ready_soup",
      defaultStorage: "Fridge",
    },
    {
      id: "plant_based",
      en: "Plant-based",
      ar: "بدائل نباتية",
      atlasIndex: 15,
      representativeArtId: "tofu",
      defaultStorage: "Fridge",
    },
    {
      id: "baby_food",
      en: "Baby food",
      ar: "أغذية الأطفال",
      atlasIndex: 15,
      representativeArtId: "baby_food_jar",
      defaultStorage: "Pantry",
    },
    {
      id: "spreads",
      en: "Spreads",
      ar: "الأطعمة القابلة للدهن",
      atlasIndex: 15,
      representativeArtId: "peanut_butter",
      defaultStorage: "Pantry",
    },
    {
      id: "seafood",
      en: "Seafood",
      ar: "المأكولات البحرية",
      atlasIndex: 15,
      representativeArtId: "shrimp",
      defaultStorage: "Fridge",
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
  nuts_seeds: [
    "nuts",
    "nut",
    "almonds",
    "almond",
    "walnuts",
    "walnut",
    "cashews",
    "cashew",
    "pistachios",
    "pistachio",
    "seeds",
    "مكسرات",
    "لوز",
    "جوز",
    "كاجو",
    "فستق",
    "بذور",
  ],
  dried_fruit: [
    "dried fruit",
    "dried apricot",
    "dried figs",
    "raisins",
    "prunes",
    "فواكه مجففه",
    "مشمش مجفف",
    "تين مجفف",
    "زبيب",
    "قراصيا",
  ],
  snacks: [
    "potato chips",
    "tortilla chips",
    "popcorn",
    "pretzels",
    "crackers",
    "crisps",
    "chips",
    "شيبسي",
    "فشار",
    "مقرمشات",
    "بسكويت مالح",
  ],
  sweets: [
    "chocolate",
    "candy",
    "toffee",
    "gummy",
    "marshmallow",
    "حلوى",
    "حلوي",
    "شوكولاته",
    "توفي",
    "ملبن",
  ],
  baking: [
    "baking powder",
    "baking soda",
    "cake mix",
    "corn starch",
    "cornstarch",
    "flour",
    "yeast",
    "cocoa powder",
    "بيكنج بودر",
    "دقيق",
    "خميره",
    "نشا",
    "كاكاو خام",
  ],
  sweeteners: [
    "brown sugar",
    "powdered sugar",
    "icing sugar",
    "maple syrup",
    "artificial sweetener",
    "sugar",
    "honey",
    "سكر",
    "سكر بودره",
    "عسل",
    "محلي",
  ],
  breakfast: [
    "breakfast cereal",
    "corn flakes",
    "cornflakes",
    "granola",
    "muesli",
    "cereal",
    "حبوب افطار",
    "كورن فليكس",
    "جرانولا",
    "موسلي",
  ],
  tea_coffee: [
    "coffee beans",
    "ground coffee",
    "instant coffee",
    "tea bags",
    "green tea",
    "black tea",
    "coffee",
    "tea",
    "قهوه",
    "بن",
    "نسكافيه",
    "شاي",
  ],
  frozen: [
    "frozen food",
    "frozen meal",
    "frozen vegetables",
    "frozen fruit",
    "مجمدات",
    "طعام مجمد",
    "وجبه مجمده",
    "خضار مجمد",
  ],
  canned: [
    "canned tomato",
    "canned tuna",
    "canned beans",
    "canned food",
    "tinned tomato",
    "tinned tuna",
    "tomato can",
    "طماطم معلبه",
    "تونه معلبه",
    "فول معلب",
    "معلبات",
    "معلب",
  ],
  deli: [
    "cold cuts",
    "deli meat",
    "luncheon meat",
    "smoked turkey",
    "roast beef slices",
    "salami",
    "mortadella",
    "بسطرمه",
    "لانشون",
    "تركي مدخن",
    "سلامي",
    "مرتديلا",
  ],
  ready_meals: [
    "ready meal",
    "prepared meal",
    "microwave meal",
    "meal kit",
    "وجبه جاهزه",
    "اكل جاهز",
    "وجبه سريعه التحضير",
  ],
  plant_based: [
    "plant based",
    "vegan burger",
    "vegan sausage",
    "meat substitute",
    "tofu",
    "tempeh",
    "بديل اللحوم",
    "برجر نباتي",
    "سجق نباتي",
    "توفو",
  ],
  baby_food: [
    "baby food",
    "infant formula",
    "baby formula",
    "baby cereal",
    "طعام اطفال",
    "حليب اطفال",
    "لبن اطفال",
    "سيريلاك",
  ],
  spreads: [
    "peanut butter",
    "hazelnut spread",
    "chocolate spread",
    "fruit spread",
    "jam",
    "marmalade",
    "زبد فول سوداني",
    "زبدة فول سوداني",
    "مربي",
    "سبريد",
    "نوتيلا",
  ],
  seafood: [
    "seafood",
    "shrimp",
    "prawn",
    "crab",
    "lobster",
    "squid",
    "calamari",
    "mussels",
    "جمبري",
    "روبيان",
    "كابوريا",
    "سلطعون",
    "استاكوزا",
    "سبيط",
    "كاليماري",
    "بلح البحر",
  ],
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
    "powdered milk",
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
    "لبن بودره",
    "حليب بودره",
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
  fish: ["fish", "tuna", "salmon", "سمك", "تونه", "سلمون"],
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
  values.map((value) => ({
    categoryId,
    value: normalize(value),
    catalog: false,
  })),
);

const foodArtNameEntries = foodArtCatalog.items.flatMap((item) =>
  [item.en, item.ar, ...(item.aliases?.en ?? []), ...(item.aliases?.ar ?? [])]
    .map(normalize)
    .filter(Boolean)
    .map((value) => ({
      categoryId: item.categoryIds[0],
      value,
      catalog: true,
    })),
);

const nameEntries = [...foodArtNameEntries, ...aliasEntries].sort(
  (a, b) =>
    b.value.length - a.value.length || Number(b.catalog) - Number(a.catalog),
);

function containsAlias(name, alias) {
  return ` ${name} `.includes(` ${alias} `);
}

function catalogCategory(ingredient) {
  return ingredient ? getCookingCategoryId(ingredient.id) : null;
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
    suggestedStorage: frozen ? "Freezer" : category.defaultStorage,
  };
}

export function inferFoodCategory({ name, ingredientId, categoryId } = {}) {
  const normalizedName = normalize(name);
  if (getFoodCategory(categoryId))
    return result(categoryId, "user", normalizedName);

  const ingredient = getIngredient(ingredientId);
  if (ingredient)
    return result(catalogCategory(ingredient), "ingredient", normalizedName);

  const nameMatch =
    normalizedName &&
    nameEntries.find(({ value }) => containsAlias(normalizedName, value));
  if (nameMatch) return result(nameMatch.categoryId, "name", normalizedName);

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

  return result("other", "fallback", normalizedName);
}
