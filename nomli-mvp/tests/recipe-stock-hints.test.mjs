import test from "node:test";
import assert from "node:assert/strict";
import {
  getRecipeStockHints,
  linkRecipeStock,
} from "../web/recipe-stock-hints.js";
import { assessRecipe } from "../web/cook-domain.js";

const requirement = (extra = {}) => ({
  ingredientId: "egg",
  name: "Egg",
  qty: 4,
  unit: "count",
  have: 0,
  missing: 4,
  allocations: [],
  ...extra,
});
const assessment = (req = requirement(), extra = {}) => ({
  missing: [req],
  blockedItems: [],
  incompatibleItems: [],
  ...extra,
});
const item = (extra = {}) => ({
  name: "Unknown Brand Eggs 12 pack",
  qty: 12,
  unit: "pieces",
  expiry: "2026-11-01",
  ...extra,
});

test("confirmed direct match supplies a recipe without changing Kitchen quantities", () => {
  const original = {
    items: { eggs: item({ qty: 30, categoryId: "other" }) },
    tools: {},
    profile: { allergies: [] },
  };
  const recipe = {
    id: "eggs",
    servings: 1,
    ingredients: [{ id: "egg", qty: 4, unit: "pieces" }],
  };
  const before = assessRecipe(original, recipe, { now: "2026-10-28" });
  assert.equal(before.requirements[0].missing, 4);
  assert.throws(
    () =>
      linkRecipeStock(original, before, {
        itemId: "eggs",
        ingredientId: "egg",
      }),
    /Confirm/,
  );
  const linked = linkRecipeStock(original, before, {
    itemId: "eggs",
    ingredientId: "egg",
    confirmed: true,
    now: "2026-10-28",
  });
  assert.equal(linked.items.eggs.qty, 30);
  assert.equal(linked.items.eggs.categoryId, "other");
  assert.equal(original.items.eggs.ingredientId, undefined);
  assert.equal(
    assessRecipe(linked, recipe, { now: "2026-10-28" }).requirements[0].missing,
    0,
  );
});

test("direct matches never retarget valid identities or hide processing qualifiers", () => {
  const cases = [
    { name: "Unknown Brand Eggs", ingredientId: "milk", unit: "pieces" },
    { name: "Unknown brand almond milk", unit: "ml" },
    { name: "مراعي حليب جوزالهند", unit: "ml" },
    { name: "صدر دجاج مطبوخ", unit: "g" },
  ];
  const targets = [
    ["egg", "Egg", "pieces"],
    ["milk", "Milk", "ml"],
    ["milk", "Milk", "ml"],
    ["chicken_breast", "Chicken breast", "g"],
  ];
  for (const [index, value] of cases.entries()) {
    const [ingredientId, name, unit] = targets[index];
    const a = assessment(requirement({ ingredientId, name, unit }));
    const state = { items: { x: item(value) } };
    const hint = getRecipeStockHints(state, a, { now: "2026-10-28" })[0];
    assert.ok(!hint || !hint.canLink, value.name);
    assert.throws(
      () =>
        linkRecipeStock(state, a, {
          itemId: "x",
          ingredientId,
          confirmed: true,
          now: "2026-10-28",
        }),
      /needs review/,
    );
  }
});

test("contained candidate explains unknown-brand eggs and permits safe explicit link", () => {
  assert.deepEqual(
    getRecipeStockHints({ items: { eggs: item() } }, assessment(), {
      now: "2026-10-28",
    }),
    [
      {
        itemId: "eggs",
        ingredientId: "egg",
        name: "Unknown Brand Eggs 12 pack",
        qty: 12,
        unit: "pieces",
        reason: "unlinked",
        canLink: true,
      },
    ],
  );
});

test("category alone never suggests generic food", () => {
  const generic = item({ name: "Generic food", categoryId: "eggs" });
  assert.deepEqual(
    getRecipeStockHints({ items: { generic } }, assessment()),
    [],
  );
});

test("bunch-to-mass needs explicit weight", () => {
  const req = requirement({
    ingredientId: "parsley",
    name: "Parsley",
    unit: "g",
  });
  const herb = item({ name: "Parsley", unit: "bunches" });
  assert.equal(
    getRecipeStockHints({ items: { herb } }, assessment(req))[0].canLink,
    false,
  );
  herb.gramsPerUnit = 30;
  assert.equal(
    getRecipeStockHints({ items: { herb } }, assessment(req))[0].canLink,
    true,
  );
});

test("expired unlinked candidate stays visible but cannot link", () => {
  const expired = item({ expiry: "2026-10-27" });
  const hint = getRecipeStockHints({ items: { expired } }, assessment(), {
    now: "2026-10-28",
  })[0];
  assert.equal(hint.reason, "expired");
  assert.equal(hint.canLink, false);
});

test("linked assessment failures report expired and units exactly", () => {
  const expired = item({ name: "Eggs", ingredientId: "egg" });
  const wrongUnit = item({ name: "Eggs", ingredientId: "egg", unit: "ml" });
  const hints = getRecipeStockHints(
    { items: { expired, wrongUnit } },
    assessment(requirement(), {
      blockedItems: [{ id: "expired" }],
      incompatibleItems: [{ id: "wrongUnit" }],
    }),
  );
  assert.deepEqual(
    hints.map(({ itemId, reason, canLink }) => ({ itemId, reason, canLink })),
    [
      { itemId: "expired", reason: "expired", canLink: false },
      { itemId: "wrongUnit", reason: "units", canLink: false },
    ],
  );
});

test("opt-out allows explicit relink confirmation; active allocation blocks it", () => {
  const stock = item({ cookingLinkDisabled: true });
  assert.equal(
    getRecipeStockHints({ items: { stock } }, assessment())[0].canLink,
    true,
  );
  const active = {
    items: { stock },
    cooking: { allocations: [{ id: "stock" }] },
  };
  const hint = getRecipeStockHints(active, assessment())[0];
  assert.equal(hint.reason, "opted-out");
  assert.equal(hint.canLink, false);
});

test("unsafe retail qualifier requires review", () => {
  const frozen = item({ name: "Frozen eggs" });
  assert.equal(
    getRecipeStockHints({ items: { frozen } }, assessment())[0].canLink,
    false,
  );
});

test("returns at most twenty hints without mutating inputs", () => {
  const state = {
    items: Object.fromEntries(
      Array.from({ length: 25 }, (_, index) => [`egg-${index}`, item()]),
    ),
  };
  const a = assessment();
  const before = structuredClone({ state, a });
  assert.equal(getRecipeStockHints(state, a).length, 20);
  assert.deepEqual({ state, a }, before);
});
