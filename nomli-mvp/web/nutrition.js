import nutritionCatalog from "../content/nutrition.json" with { type: "json" };

export const NUTRITION_SOURCE_VERSION = nutritionCatalog.sourceVersion;
export const NUTRITION_SOURCES = Object.freeze({
  dataset: nutritionCatalog.datasetUrl,
  documentation: "https://fdc.nal.usda.gov/data-documentation/",
});

export const NUTRITION_FOODS = Object.freeze(
  nutritionCatalog.foods.map((food) =>
    Object.freeze({
      ...food,
      sourceUrl: `https://fdc.nal.usda.gov/fdc-app.html#/food-details/${food.fdcId}/nutrients`,
    }),
  ),
);

const foodsByIngredient = new Map(
  NUTRITION_FOODS.map((food) => [food.ingredientId, food]),
);
const unitAliases = new Map([
  ["grams", "g"],
  ["kilogram", "kg"],
  ["kilograms", "kg"],
  ["milliliter", "ml"],
  ["milliliters", "ml"],
  ["litre", "l"],
  ["liter", "l"],
  ["litres", "l"],
  ["liters", "l"],
  ["pieces", "piece"],
  ["slices", "slice"],
  ["cloves", "clove"],
]);
const countUnits = new Set(["count", "piece", "clove", "slice", "bunch"]);

function normalizedUnit(unit) {
  const value = String(unit ?? "")
    .trim()
    .toLowerCase();
  return unitAliases.get(value) ?? value;
}

function incomplete(reason, sourceUrl) {
  return {
    kcal: null,
    complete: false,
    reason,
    ...(sourceUrl ? { sourceUrl } : {}),
  };
}

export function estimateIngredientCalories({
  ingredientId,
  qty,
  unit,
  gramsPerUnit,
} = {}) {
  if (!Number.isFinite(qty) || qty < 0)
    return incomplete("Quantity must be a finite, non-negative number.");
  const food = foodsByIngredient.get(ingredientId);
  if (!food)
    return incomplete(
      `No nutrition reference for ingredient: ${ingredientId ?? "unknown"}.`,
    );
  const sourceUrl = food.sourceUrl;
  const normalized = normalizedUnit(unit);
  let grams;
  if (normalized === "g") grams = qty;
  else if (normalized === "kg") grams = qty * 1000;
  else if (normalized === "ml" || normalized === "l") {
    if (!Number.isFinite(food.gramsPerMl) || food.gramsPerMl <= 0)
      return incomplete(
        `No sourced volume conversion for ${ingredientId}.`,
        sourceUrl,
      );
    grams = qty * (normalized === "l" ? 1000 : 1) * food.gramsPerMl;
  } else {
    if (!countUnits.has(normalized))
      return incomplete(
        `Unsupported unit "${unit}" for ${ingredientId}.`,
        sourceUrl,
      );
    if (
      gramsPerUnit !== undefined &&
      (!Number.isFinite(gramsPerUnit) || gramsPerUnit <= 0)
    )
      return incomplete(
        "gramsPerUnit must be a finite positive number.",
        sourceUrl,
      );
    const override = gramsPerUnit === undefined ? null : gramsPerUnit;
    const reference = food.gramsPerUnit?.[normalized];
    const unitGrams = override ?? reference;
    if (!Number.isFinite(unitGrams) || unitGrams <= 0)
      return incomplete(
        `No sourced weight for unit "${unit}" of ${ingredientId}.`,
        sourceUrl,
      );
    grams = qty * unitGrams;
  }
  const kcal = (grams * food.kcalPer100g) / 100;
  if (!Number.isFinite(grams) || !Number.isFinite(kcal))
    return incomplete(
      "Quantity conversion exceeds supported numeric range.",
      sourceUrl,
    );
  return { kcal, complete: true, reason: null, sourceUrl };
}

export function estimateRecipeCalories(recipe, servings = recipe?.servings) {
  const baseServings = recipe?.servings;
  if (
    !Number.isFinite(baseServings) ||
    baseServings <= 0 ||
    !Number.isFinite(servings) ||
    servings <= 0
  ) {
    return {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [
        {
          ingredientId: null,
          reason:
            "Recipe and requested servings must be finite positive numbers.",
        },
      ],
      knownKcal: 0,
    };
  }
  if (!Array.isArray(recipe.ingredients)) {
    return {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [
        { ingredientId: null, reason: "Recipe ingredients must be an array." },
      ],
      knownKcal: 0,
    };
  }
  if (recipe.ingredients.length === 0) {
    return {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [
        {
          ingredientId: null,
          reason: "Recipe must contain at least one ingredient.",
        },
      ],
      knownKcal: 0,
    };
  }
  const scale = servings / baseServings;
  let knownBaseKcal = 0;
  const missing = [];
  for (const value of recipe.ingredients) {
    const ingredient = value && typeof value === "object" ? value : {};
    const ingredientId = ingredient.id ?? ingredient.ingredientId;
    const result = estimateIngredientCalories({
      ingredientId,
      qty: ingredient.qty ?? ingredient.quantity,
      unit: ingredient.unit,
      gramsPerUnit: ingredient.gramsPerUnit,
    });
    if (result.complete) knownBaseKcal += result.kcal;
    else missing.push({ ingredientId, reason: result.reason });
  }
  const knownKcal = knownBaseKcal * scale;
  if (!Number.isFinite(knownKcal)) {
    return {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [
        ...missing,
        {
          ingredientId: null,
          reason: "Recipe scaling exceeds supported numeric range.",
        },
      ],
      knownKcal: 0,
    };
  }
  const complete = missing.length === 0;
  return {
    totalKcal: complete ? knownKcal : null,
    perServingKcal: complete ? knownKcal / servings : null,
    complete,
    missing,
    knownKcal,
  };
}
