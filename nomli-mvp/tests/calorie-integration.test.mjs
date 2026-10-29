import test from "node:test";
import assert from "node:assert/strict";
import recipes from "../content/recipes.json" with { type: "json" };
import fixture from "../fixtures/carrefour-cooking-regression.json" with { type: "json" };
import { createCalorieEntry } from "../web/calorie-log.js";
import { estimateRecipeCalories } from "../web/nutrition.js";
import { COOK_INGREDIENTS, COOK_RECIPES } from "../web/cook-catalog.js";
import {
  assessRecipe,
  startCookingSession,
  commitCookedMeal,
  undoCookedMeal,
} from "../web/cook-domain.js";
import { createStateStore } from "../web/state-store.js";
import { buildAssistantContext } from "../web/assistant-domain.js";

const omelette = COOK_RECIPES.find(({ id }) => id === "herb_omelette");
const recipeData = recipes.recipes.find(({ id }) => id === omelette.id);

function memory() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

function kitchenState() {
  const items = Object.fromEntries(
    fixture.lines.map((line) => [
      `scan-${line.lineId}`,
      {
        name: line.name,
        qty: line.quantity,
        unit: line.unit,
        storage: line.storage,
        expiry: null,
        ingredientId: line.ingredientId,
        ...(fixture.measuredDomainExample.gramsPerUnit[line.lineId]
          ? {
              gramsPerUnit:
                fixture.measuredDomainExample.gramsPerUnit[line.lineId],
            }
          : {}),
      },
    ]),
  );
  return {
    version: 1,
    route: "calories",
    items,
    tools: Object.fromEntries(omelette.requiredTools.map((id) => [id, true])),
    sort: "expiry",
    storage: "All",
    servings: {},
    swaps: {},
    matchOnly: false,
    recipe: omelette.id,
    cooking: null,
    meals: [],
    shopping: [],
    receipts: [
      {
        source: "fixture",
        name: fixture.source.merchant,
        currency: fixture.receipt.currency,
        totalMinor: fixture.receipt.totalMinor,
        taxMinor: fixture.receipt.taxMinor,
        discountMinor: fixture.receipt.discountMinor,
        lines: fixture.lines.map((line) => ({
          id: line.lineId,
          name: line.name,
          qty: line.quantity,
          cents: line.lineTotalMinor,
        })),
      },
    ],
    calories: { goalKcal: 2100, entries: [] },
    budget: 160000,
    profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
    chat: [],
  };
}

test("all 17 complete recipes can be logged as immutable nutrition snapshots without kitchen effects", () => {
  const complete = recipes.recipes
    .map((recipe) => ({ recipe, estimate: estimateRecipeCalories(recipe) }))
    .filter(({ estimate }) => estimate.complete);
  assert.equal(complete.length, 17);

  const state = kitchenState();
  const kitchenBefore = structuredClone({
    items: state.items,
    receipts: state.receipts,
    cooking: state.cooking,
    meals: state.meals,
  });
  const portions = [0.5, 1.5];
  state.calories.entries = complete.flatMap(({ recipe, estimate }, index) =>
    portions.map((servings, portionIndex) =>
      createCalorieEntry({
        id: `recipe-${index}-${portionIndex}`,
        date: "2026-10-29",
        name: recipe.name.en,
        kcal: estimate.perServingKcal,
        servings,
        source: "recipe",
        recipeId: recipe.id,
      }),
    ),
  );

  assert.equal(state.calories.entries.length, 34);
  for (let index = 0; index < complete.length; index++) {
    const { recipe, estimate } = complete[index];
    for (let portionIndex = 0; portionIndex < portions.length; portionIndex++) {
      const entry = state.calories.entries[index * 2 + portionIndex];
      assert.equal(entry.recipeId, recipe.id);
      assert.equal(entry.kcal, estimate.perServingKcal);
      assert.equal(entry.servings, portions[portionIndex]);
    }
  }
  assert.deepEqual(
    {
      items: state.items,
      receipts: state.receipts,
      cooking: state.cooking,
      meals: state.meals,
    },
    kitchenBefore,
  );
});

test("cooking commit and undo never add, remove, or recalculate diary entries", () => {
  const state = kitchenState();
  const estimate = estimateRecipeCalories(recipeData);
  state.calories.entries.push(
    createCalorieEntry({
      id: "private-portion",
      date: "2026-10-29",
      name: "Private herb omelette portion",
      kcal: estimate.perServingKcal,
      servings: 0.5,
      source: "recipe",
      recipeId: omelette.id,
    }),
  );
  const diary = structuredClone(state.calories);
  const assessment = assessRecipe(state, omelette, {
    ingredients: COOK_INGREDIENTS,
    now: "2026-10-29",
  });
  assert.equal(assessment.stockReady, true);
  const started = startCookingSession(state, omelette, {
    sessionId: "calorie-integration-cook",
    now: "2026-10-29T12:00:00Z",
  });
  const review = {
    ...started,
    cooking: { ...started.cooking, phase: "review" },
  };
  const used = review.cooking.allocations.map(({ id, qty }) => ({ id, qty }));
  const cooked = commitCookedMeal(review, {
    sessionId: "calorie-integration-cook",
    used,
    confirmed: true,
    now: "2026-10-29T12:10:00Z",
  });
  assert.deepEqual(cooked.state.calories, diary);
  const undone = undoCookedMeal(cooked.state, "calorie-integration-cook", {
    confirmed: true,
  });
  assert.deepEqual(undone.state.calories, diary);
});

test("backup keeps diary snapshot and goal while assistant context excludes both", () => {
  const state = kitchenState();
  const estimate = estimateRecipeCalories(recipeData);
  state.calories.entries.push(
    createCalorieEntry({
      id: "private-food-entry",
      date: "2026-10-29",
      name: "Private midnight food",
      kcal: estimate.perServingKcal,
      servings: 1.5,
      source: "recipe",
      recipeId: omelette.id,
    }),
  );
  const store = createStateStore({
    data: recipes,
    storage: memory(),
    now: () => new Date("2026-10-29T00:00:00Z"),
  });
  const restored = store.parseBackup(store.exportBackup(state));
  assert.deepEqual(restored.calories, state.calories);

  const context = buildAssistantContext(state, { now: "2026-10-29" });
  assert.equal(Object.hasOwn(context, "calories"), false);
  const serialized = JSON.stringify(context);
  assert.equal(serialized.includes("private-food-entry"), false);
  assert.equal(serialized.includes("Private midnight food"), false);
  assert.equal(serialized.includes("2100"), false);
});
