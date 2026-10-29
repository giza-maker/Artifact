import test from "node:test";
import assert from "node:assert/strict";
import recipes from "../content/recipes.json" with { type: "json" };
import {
  NUTRITION_FOODS,
  NUTRITION_SOURCE_VERSION,
  estimateIngredientCalories,
  estimateRecipeCalories,
} from "../web/nutrition.js";

test("reference catalog has unique, traceable USDA rows", () => {
  assert.match(NUTRITION_SOURCE_VERSION, /USDA FoodData Central SR Legacy/);
  assert.equal(
    new Set(NUTRITION_FOODS.map((food) => food.ingredientId)).size,
    NUTRITION_FOODS.length,
  );
  for (const food of NUTRITION_FOODS) {
    assert.ok(Number.isInteger(food.fdcId));
    assert.ok(Number.isFinite(food.kcalPer100g) && food.kcalPer100g >= 0);
    assert.match(food.sourceUrl, new RegExp(`/food-details/${food.fdcId}/`));
  }
});

test("weight energy math supports fractions and kilograms", () => {
  assert.equal(
    estimateIngredientCalories({ ingredientId: "tomato", qty: 50, unit: "g" })
      .kcal,
    9,
  );
  assert.equal(
    estimateIngredientCalories({ ingredientId: "tomato", qty: 0.5, unit: "kg" })
      .kcal,
    90,
  );
});

test("raw and cooked identities remain distinct", () => {
  const dry = estimateIngredientCalories({
    ingredientId: "red_lentil_dry",
    qty: 100,
    unit: "g",
  });
  const cooked = estimateIngredientCalories({
    ingredientId: "brown_lentil_cooked",
    qty: 100,
    unit: "g",
  });
  assert.equal(dry.kcal, 358);
  assert.equal(cooked.kcal, 116);
});

test("USDA count weights and explicit override are applied", () => {
  assert.equal(
    estimateIngredientCalories({ ingredientId: "egg", qty: 1, unit: "piece" })
      .kcal,
    71.5,
  );
  assert.equal(
    estimateIngredientCalories({
      ingredientId: "egg",
      qty: 1,
      unit: "pieces",
      gramsPerUnit: 60,
    }).kcal,
    85.8,
  );
  assert.equal(
    estimateIngredientCalories({
      ingredientId: "lemon",
      qty: 0.5,
      unit: "piece",
    }).kcal,
    8.41,
  );
});

test("volume conversion only works where USDA portion evidence exists", () => {
  assert.ok(
    Math.abs(
      estimateIngredientCalories({
        ingredientId: "olive_oil",
        qty: 10,
        unit: "ml",
      }).kcal - 80.5670886076,
    ) < 1e-9,
  );
  const unsupported = estimateIngredientCalories({
    ingredientId: "tomato",
    qty: 10,
    unit: "ml",
  });
  assert.equal(unsupported.complete, false);
  assert.equal(unsupported.kcal, null);
  assert.match(unsupported.reason, /volume conversion/);
});

test("count overrides cannot bypass unit or value validation", () => {
  assert.equal(
    estimateIngredientCalories({
      ingredientId: "egg",
      qty: 1,
      unit: "donuts",
      gramsPerUnit: 50,
    }).complete,
    false,
  );
  for (const gramsPerUnit of [-1, 0, Number.NaN, Number.POSITIVE_INFINITY]) {
    const result = estimateIngredientCalories({
      ingredientId: "egg",
      qty: 1,
      unit: "piece",
      gramsPerUnit,
    });
    assert.equal(result.complete, false);
  }
});

test("zero energy is valid and missing is never treated as zero", () => {
  assert.deepEqual(
    estimateIngredientCalories({ ingredientId: "salt", qty: 4, unit: "g" }),
    {
      kcal: 0,
      complete: true,
      reason: null,
      sourceUrl:
        "https://fdc.nal.usda.gov/fdc-app.html#/food-details/173468/nutrients",
    },
  );
  const missing = estimateIngredientCalories({
    ingredientId: "zaatar_blend",
    qty: 4,
    unit: "g",
  });
  assert.equal(missing.kcal, null);
  assert.equal(missing.complete, false);
});

test("invalid quantities are incomplete", () => {
  for (const qty of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
    const result = estimateIngredientCalories({
      ingredientId: "tomato",
      qty,
      unit: "g",
    });
    assert.equal(result.complete, false);
    assert.equal(result.kcal, null);
  }
  const overflow = estimateIngredientCalories({
    ingredientId: "tomato",
    qty: Number.MAX_VALUE,
    unit: "kg",
  });
  assert.equal(overflow.complete, false);
  assert.equal(overflow.kcal, null);
});

test("recipe totals scale while per-serving energy stays constant", () => {
  const recipe = {
    servings: 4,
    ingredients: [
      { id: "tomato", qty: 400, unit: "g" },
      { id: "olive_oil", qty: 10, unit: "ml" },
    ],
  };
  const full = estimateRecipeCalories(recipe);
  const half = estimateRecipeCalories(recipe, 2);
  assert.equal(full.complete, true);
  assert.ok(Math.abs(full.totalKcal - 152.5670886076) < 1e-9);
  assert.ok(Math.abs(half.totalKcal - 76.2835443038) < 1e-9);
  assert.equal(half.perServingKcal, full.perServingKcal);
});

test("partial recipes expose known subtotal and missing ingredient", () => {
  const result = estimateRecipeCalories({
    servings: 2,
    ingredients: [
      { id: "tomato", qty: 100, unit: "g" },
      { id: "unknown_food", qty: 50, unit: "g" },
    ],
  });
  assert.equal(result.complete, false);
  assert.equal(result.totalKcal, null);
  assert.equal(result.perServingKcal, null);
  assert.equal(result.knownKcal, 18);
  assert.deepEqual(
    result.missing.map((item) => item.ingredientId),
    ["unknown_food"],
  );
});

test("empty and malformed recipe ingredient entries are incomplete", () => {
  const empty = estimateRecipeCalories({ servings: 2, ingredients: [] });
  assert.equal(empty.complete, false);
  assert.equal(empty.totalKcal, null);
  const malformed = estimateRecipeCalories({
    servings: 2,
    ingredients: [null],
  });
  assert.equal(malformed.complete, false);
  assert.equal(malformed.missing.length, 1);
});

test("curated recipe coverage is explicit", () => {
  assert.equal(recipes.recipes.length, 20);
  const results = recipes.recipes.map((recipe) => ({
    id: recipe.id,
    result: estimateRecipeCalories(recipe),
  }));
  assert.equal(results.filter(({ result }) => result.complete).length, 17);
  assert.deepEqual(
    results.filter(({ result }) => !result.complete).map(({ id }) => id),
    ["zaatar_labneh_toast", "chicken_rice_one_pot", "beef_kofta_pan"],
  );
});
