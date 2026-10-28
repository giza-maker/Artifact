import test from "node:test";
import assert from "node:assert/strict";

import { assessRecipe } from "../web/cook-domain.js";
import { syncCookingInventory } from "../web/cooking-inventory-sync.js";
import { resolveCookingIdentity } from "../web/food-identity.js";

const eggStock = (extra = {}) => ({
  name: "Eggs Medium 30pcs",
  qty: 30,
  unit: "pieces",
  storage: "Fridge",
  ...extra,
});

const kitchen = (item) => ({
  items: { eggs: item },
  profile: { allergies: [] },
  tools: {},
});

test("unique exact egg name outranks every display category", () => {
  for (const categoryId of ["eggs", "dairy", "other", "vegetables"]) {
    const result = resolveCookingIdentity({
      name: "Eggs Medium 30pcs",
      categoryId,
    });

    assert.equal(result.status, "matched", categoryId);
    assert.equal(result.ingredientId, "egg", categoryId);
    assert.deepEqual(result.candidates, ["egg"], categoryId);
  }
});

test("sync links exact eggs from another display category and preserves all 30 pieces", () => {
  const original = kitchen(eggStock({ categoryId: "other" }));
  const result = syncCookingInventory(original);

  assert.deepEqual(result.linkedItemIds, ["eggs"]);
  assert.equal(result.state.items.eggs.ingredientId, "egg");
  assert.equal(result.state.items.eggs.categoryId, "other");
  assert.equal(result.state.items.eggs.qty, 30);
  assert.equal(result.state.items.eggs.unit, "pieces");
  assert.equal(original.items.eggs.ingredientId, undefined);
  assert.equal(original.items.eggs.qty, 30);

  const assessment = assessRecipe(
    result.state,
    {
      id: "thirty-eggs",
      name: "Thirty eggs",
      servings: 1,
      ingredients: [{ id: "egg", qty: 30, unit: "pieces" }],
    },
    { now: "2026-10-28" },
  );
  const requirement = assessment.requirements[0];

  assert.equal(assessment.stockReady, true);
  assert.equal(requirement.have, 30);
  assert.equal(requirement.missing, 0);
  assert.equal(result.state.items.eggs.qty, 30);
});

test("display category cannot create identity for ambiguous or missing names", () => {
  for (const categoryId of ["dairy", "eggs"]) {
    const result = resolveCookingIdentity({
      name: "Plant milk",
      categoryId,
    });
    assert.equal(result.ingredientId, null, categoryId);
    assert.notEqual(result.status, "matched", categoryId);
  }

  for (const categoryId of ["dairy", "eggs"]) {
    const result = resolveCookingIdentity({ categoryId });
    assert.equal(result.ingredientId, null, categoryId);
    assert.equal(result.status, "unmatched", categoryId);
  }
});

test("explicit cooking-link opt-out still defeats exact-name identity", () => {
  const identity = resolveCookingIdentity({
    name: "Eggs Medium 30pcs",
    categoryId: "other",
    cookingLinkDisabled: true,
  });
  assert.equal(identity.ingredientId, null);
  assert.equal(identity.status, "unmatched");

  const result = syncCookingInventory(
    kitchen(eggStock({ categoryId: "other", cookingLinkDisabled: true })),
  );
  assert.equal(result.state.items.eggs.ingredientId, undefined);
  assert.deepEqual(result.linkedItemIds, []);
  assert.deepEqual(result.pendingItemIds, ["eggs"]);
});

test("Arabic packaged egg name resolves despite joined count and colloquial spelling", () => {
  const result = resolveCookingIdentity({
    name: "بيض متوسط٣٠قطعه",
    categoryId: "other",
  });

  assert.equal(result.status, "matched");
  assert.equal(result.ingredientId, "egg");
  assert.deepEqual(result.candidates, ["egg"]);
});
