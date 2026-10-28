import test from "node:test";
import assert from "node:assert/strict";
import { applyRecipeStockMeasurement } from "../web/recipe-stock-measurement.js";
import { getRecipeRequirementStockStatus } from "../web/recipe-stock-hints.js";
import { assessRecipe } from "../web/cook-domain.js";

const item = {
  id: "parsley-lot",
  name: "Parsley",
  qty: 1,
  unit: "bunches",
  ingredientId: "parsley",
  categoryId: "produce",
  cents: 499,
};
const state = () => ({
  items: { [item.id]: structuredClone(item) },
  receipts: [{ id: "r" }],
});

test("measurement changes only gramsPerUnit and preserves stock and finance fields", () => {
  const original = state();
  const next = applyRecipeStockMeasurement(original, {
    itemId: item.id,
    gramsPerUnit: 30,
    snapshot: JSON.stringify(original.items[item.id]),
  });
  assert.deepEqual(next.items[item.id], { ...item, gramsPerUnit: 30 });
  assert.deepEqual(next.receipts, original.receipts);
  assert.equal(original.items[item.id].gramsPerUnit, undefined);
});

test("measurement rejects stale snapshots and lots allocated to active cooking", () => {
  const original = state();
  assert.throws(
    () =>
      applyRecipeStockMeasurement(original, {
        itemId: item.id,
        gramsPerUnit: 20,
        snapshot: JSON.stringify({ ...item, qty: 2 }),
      }),
    /changed/,
  );
  original.cooking = { allocations: [{ id: item.id, qty: 0.5 }] };
  assert.throws(
    () =>
      applyRecipeStockMeasurement(original, {
        itemId: item.id,
        gramsPerUnit: 20,
        snapshot: JSON.stringify(original.items[item.id]),
      }),
    /allocated/,
  );
});

test("measurement rejects invalid values and non-count stock", () => {
  const original = state();
  const command = {
    itemId: item.id,
    snapshot: JSON.stringify(original.items[item.id]),
  };
  assert.throws(
    () =>
      applyRecipeStockMeasurement(original, { ...command, gramsPerUnit: 0 }),
    /greater than 0/,
  );
  original.items[item.id].unit = "g";
  assert.throws(
    () =>
      applyRecipeStockMeasurement(original, {
        ...command,
        snapshot: JSON.stringify(original.items[item.id]),
        gramsPerUnit: 30,
      }),
    /no longer needs/,
  );
});

test("stock status matches assessed have for kg and measured count conversions", () => {
  const measuredState = {
    items: {
      kilos: {
        name: "Parsley bag",
        qty: 1,
        unit: "kg",
        ingredientId: "parsley",
      },
      bunch: {
        name: "Parsley bunch",
        qty: 1,
        unit: "bunches",
        ingredientId: "parsley",
        gramsPerUnit: 30,
      },
    },
    profile: {},
  };
  const massRecipe = {
    id: "parsley-mass",
    servings: 1,
    ingredients: [{ id: "parsley", name: "Parsley", qty: 1030, unit: "g" }],
  };
  const mass = assessRecipe(measuredState, massRecipe, { now: "2026-10-28" });
  const massStatus = getRecipeRequirementStockStatus(
    measuredState,
    mass,
    mass.requirements[0],
  );
  assert.equal(massStatus.qtyHave, mass.requirements[0].have);
  assert.equal(massStatus.qtyHave, 1030);

  const countRecipe = {
    id: "parsley-count",
    servings: 1,
    ingredients: [{ id: "parsley", name: "Parsley", qty: 1, unit: "bunches" }],
  };
  const fromMass = {
    items: {
      grams: {
        name: "Parsley",
        qty: 30,
        unit: "g",
        ingredientId: "parsley",
        gramsPerUnit: 30,
      },
    },
    profile: {},
  };
  const count = assessRecipe(fromMass, countRecipe, { now: "2026-10-28" });
  const countStatus = getRecipeRequirementStockStatus(
    fromMass,
    count,
    count.requirements[0],
  );
  assert.equal(countStatus.qtyHave, count.requirements[0].have);
  assert.equal(countStatus.qtyHave, 1);
});
