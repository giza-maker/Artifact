const VALID_TECHNIQUES = new Set([
  "prep",
  "mix",
  "stovetop",
  "oven",
  "blend",
  "assemble",
  "rest",
]);

// Editorial metadata only. Instructions always come from the recipe passed by
// the caller, so this layer cannot silently replace the source recipe.
const GUIDE = {
  tomato_cucumber_salad: [
    ["Dice vegetables", "prep", ["tomato", "cucumber", "red_onion"]],
    ["Add the parsley", "assemble", ["parsley"]],
    ["Dress and toss", "mix", ["lemon", "olive_oil", "salt"]],
  ],
  shakshuka_simple: [
    [
      "Soften onion and pepper",
      "stovetop",
      ["olive_oil", "onion", "bell_pepper"],
      [
        ["6 min", 360],
        ["8 min", 480],
      ],
      "Medium heat",
    ],
    [
      "Build the tomato sauce",
      "stovetop",
      ["garlic", "cumin", "paprika", "tomato_passata", "salt"],
      [
        ["30 sec", 30],
        ["8 min", 480],
      ],
    ],
    ["Cook the eggs", "stovetop", ["egg"]],
  ],
  red_lentil_soup: [
    [
      "Rinse and soften",
      "stovetop",
      ["red_lentil_dry", "onion", "carrot", "olive_oil"],
      [["6 min", 360]],
    ],
    [
      "Add aromatics and lentils",
      "stovetop",
      ["garlic", "cumin", "turmeric", "red_lentil_dry", "water"],
      [["30 sec", 30]],
    ],
    [
      "Simmer and finish",
      "blend",
      ["salt", "lemon"],
      [
        ["20 min", 1200],
        ["25 min", 1500],
      ],
    ],
  ],
  hummus_bowl: [
    [
      "Process the base",
      "blend",
      ["chickpea_cooked", "tahini", "lemon", "garlic", "salt"],
    ],
    ["Adjust the texture", "blend", ["water"]],
    ["Finish the bowl", "assemble", ["olive_oil", "paprika"]],
  ],
  mujaddara_quick: [
    [
      "Cook the rice",
      "stovetop",
      ["rice_basmati_dry", "water", "cumin", "salt"],
    ],
    ["Brown the onions", "stovetop", ["onion", "olive_oil"]],
    ["Fold and finish", "mix", ["brown_lentil_cooked", "salt", "onion"]],
  ],
  fatteh_chickpea: [
    [
      "Crisp the pita",
      "oven",
      ["bread_pita"],
      [["Check at 6 min", 360]],
      "190 C",
    ],
    [
      "Warm and whisk",
      "mix",
      ["chickpea_cooked", "yogurt_plain", "tahini", "lemon", "garlic", "salt"],
    ],
    [
      "Layer the fatteh",
      "assemble",
      ["bread_pita", "chickpea_cooked", "yogurt_plain", "olive_oil", "paprika"],
    ],
  ],
  zaatar_labneh_toast: [
    ["Toast the bread", "stovetop", ["bread_sliced"]],
    ["Spread and season", "assemble", ["labneh", "zaatar_blend"]],
    ["Add oil and cucumber", "assemble", ["olive_oil", "cucumber"]],
  ],
  herb_omelette: [
    [
      "Chop and beat",
      "mix",
      ["egg", "parsley", "mint", "salt", "black_pepper"],
    ],
    [
      "Add eggs to the pan",
      "stovetop",
      ["olive_oil", "egg"],
      [],
      "Medium-low heat",
    ],
    ["Lift, fold, and finish", "stovetop", ["egg"]],
  ],
  chicken_rice_one_pot: [
    [
      "Brown chicken and onion",
      "stovetop",
      ["chicken_thigh", "olive_oil", "onion"],
    ],
    [
      "Add rice and stock",
      "stovetop",
      [
        "garlic",
        "mixed_spice",
        "turmeric",
        "rice_basmati_dry",
        "chicken_stock",
      ],
    ],
    [
      "Simmer and rest",
      "rest",
      ["chicken_thigh", "rice_basmati_dry", "salt"],
      [["Rest 5 min", 300]],
    ],
  ],
  sheet_pan_chicken_veg: [
    [
      "Heat oven and cut",
      "prep",
      ["chicken_breast", "courgette", "bell_pepper", "red_onion"],
      [],
      "210 C",
    ],
    [
      "Season and spread",
      "mix",
      ["olive_oil", "lemon", "paprika", "salt", "black_pepper"],
    ],
    [
      "Roast and turn",
      "oven",
      ["chicken_breast", "courgette", "bell_pepper", "red_onion"],
      [["Turn after 18 min", 1080]],
    ],
  ],
  fish_tahini_tray: [
    [
      "Arrange fish and onion",
      "oven",
      ["white_fish_fillet", "onion"],
      [],
      "200 C",
    ],
    [
      "Whisk tahini sauce",
      "mix",
      ["tahini", "lemon", "water", "garlic", "cumin", "salt"],
    ],
    ["Sauce and bake", "oven", ["white_fish_fillet", "tahini"]],
  ],
  tuna_white_bean_salad: [
    [
      "Drain and slice",
      "prep",
      ["tuna_canned", "white_bean_cooked", "cherry_tomato", "red_onion"],
    ],
    ["Add the parsley", "assemble", ["parsley"]],
    ["Dress gently", "mix", ["lemon", "olive_oil", "salt"]],
  ],
  bulgur_chickpea_pilaf: [
    [
      "Soften and season",
      "stovetop",
      ["onion", "olive_oil", "tomato_paste", "cumin"],
      [["1 min", 60]],
    ],
    [
      "Add bulgur and stock",
      "stovetop",
      ["bulgur_dry", "chickpea_cooked", "vegetable_stock", "salt"],
    ],
    ["Cover, rest, and fluff", "rest", ["bulgur_dry"], [["Rest 5 min", 300]]],
  ],
  couscous_roast_veg: [
    [
      "Season and roast",
      "oven",
      ["aubergine", "courgette", "bell_pepper", "olive_oil", "cumin", "salt"],
      [],
      "220 C",
    ],
    [
      "Cover the couscous",
      "rest",
      ["couscous_dry", "water", "salt"],
      [["8 min", 480]],
    ],
    [
      "Fluff and fold",
      "mix",
      ["couscous_dry", "aubergine", "courgette", "bell_pepper", "mint"],
    ],
  ],
  tomato_basil_pasta: [
    ["Cook and drain pasta", "stovetop", ["pasta_dry"]],
    [
      "Simmer the sauce",
      "stovetop",
      ["garlic", "olive_oil", "tomato_passata"],
      [["12 min", 720]],
    ],
    [
      "Toss pasta with sauce",
      "mix",
      ["pasta_dry", "basil", "salt", "black_pepper"],
    ],
  ],
  pea_spinach_rice: [
    [
      "Rinse rice and cook garlic",
      "stovetop",
      ["rice_basmati_dry", "garlic", "olive_oil"],
      [["30 sec", 30]],
    ],
    [
      "Cover and simmer",
      "stovetop",
      ["rice_basmati_dry", "water", "green_pea_frozen", "salt"],
    ],
    [
      "Wilt spinach and fluff",
      "rest",
      ["spinach", "black_pepper"],
      [["3 min", 180]],
    ],
  ],
  sweet_potato_chickpea_tray: [
    [
      "Season the tray",
      "oven",
      [
        "sweet_potato",
        "chickpea_cooked",
        "red_onion",
        "olive_oil",
        "cumin",
        "paprika",
        "salt",
      ],
      [],
      "210 C",
    ],
    [
      "Roast in one layer",
      "oven",
      ["sweet_potato", "chickpea_cooked", "red_onion"],
    ],
    ["Whisk and spoon sauce", "mix", ["tahini", "lemon", "water"]],
  ],
  beef_kofta_pan: [
    [
      "Chop and mix",
      "mix",
      ["beef_mince", "onion", "parsley", "mixed_spice", "salt", "black_pepper"],
    ],
    [
      "Shape and warm pan",
      "prep",
      ["beef_mince", "olive_oil"],
      [],
      "Medium heat",
    ],
    ["Brown the kofta", "stovetop", ["beef_mince"]],
  ],
  mushroom_spinach_wrap: [
    [
      "Brown mushrooms",
      "stovetop",
      ["mushroom", "olive_oil", "garlic"],
      [["Garlic 30 sec", 30]],
    ],
    ["Wilt the spinach", "stovetop", ["spinach", "black_pepper"]],
    [
      "Fill, roll, and toast",
      "assemble",
      ["tortilla_wheat", "feta", "mushroom", "spinach"],
    ],
  ],
  date_oat_breakfast: [
    ["Pit and chop", "prep", ["date_fruit", "almond"]],
    [
      "Simmer until creamy",
      "stovetop",
      ["oats_rolled", "milk", "date_fruit", "cinnamon"],
    ],
    ["Top the bowls", "assemble", ["almond"]],
  ],
};

const sourceText = (recipe, stepIndex) => {
  const step = recipe?.steps?.[stepIndex];
  return typeof step === "string"
    ? step
    : typeof step?.text === "string"
      ? step.text
      : "";
};
const splitInstructions = (text) =>
  text
    ? (text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [text]).map((x) => x.trim())
    : [];

export function getCookingStepGuide(recipe, stepIndex) {
  const text = sourceText(recipe, stepIndex);
  const entry =
    Number.isInteger(stepIndex) && stepIndex >= 0
      ? GUIDE[recipe?.id]?.[stepIndex]
      : null;
  if (!entry)
    return {
      title:
        recipe?.steps?.[stepIndex]?.title || `Step ${Number(stepIndex) + 1}`,
      technique: "prep",
      ingredientIds: [],
      instructions: splitInstructions(text),
      timerPresets: [],
    };
  const [title, technique, ids, timers = [], heatCue] = entry;
  return {
    title,
    technique: VALID_TECHNIQUES.has(technique) ? technique : "prep",
    // Do not filter authored IDs here: catalog tests must expose stale or
    // misspelled guide metadata instead of silently hiding it at runtime.
    ingredientIds: [...ids],
    instructions: splitInstructions(text),
    timerPresets: timers.map(([label, seconds]) => ({ label, seconds })),
    ...(heatCue ? { heatCue } : {}),
  };
}

// Amounts come only from the session snapshot created at preparation time.
// Each value is the whole-recipe frozen requirement, never a per-step portion.
export function getCurrentStepAmounts(recipe, stepIndex, session) {
  const ids = new Set(getCookingStepGuide(recipe, stepIndex).ingredientIds);
  return (session?.requirements ?? [])
    .filter((x) => ids.has(x?.ingredientId))
    .map(({ ingredientId, qty, unit }) => ({ ingredientId, qty, unit }));
}
