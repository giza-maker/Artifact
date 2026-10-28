import test from "node:test";
import assert from "node:assert/strict";
import { syncCookingInventory } from "../web/cooking-inventory-sync.js";
import { assessRecipe } from "../web/cook-domain.js";
import { COOK_INGREDIENTS, COOK_RECIPES } from "../web/cook-catalog.js";

const eggs = (extra = {}) => ({
  name: "Eggs Medium 30 pieces",
  qty: 30,
  unit: "pieces",
  storage: "Fridge",
  expiry: "2027-01-01",
  expiryProvenance: "printed",
  gramsPerUnit: null,
  photoId: "photo-eggs",
  cents: 12000,
  ...extra,
});
const base = (item = eggs()) => ({
  items: { stock: item },
  profile: { allergies: [] },
  tools: {},
  meals: [{ id: "meal-old", ingredientId: "egg" }],
  receipts: [{ id: "receipt-old", totalMinor: 12000 }],
  backups: [{ id: "backup-old", payload: "opaque" }],
});

test("links packaged eggs without changing stock and covers four recipe eggs", () => {
  const original = base();
  const result = syncCookingInventory(original);
  const linked = result.state.items.stock;

  assert.deepEqual(result.linkedItemIds, ["stock"]);
  assert.deepEqual(result.categorizedItemIds, ["stock"]);
  assert.deepEqual(result.pendingItemIds, []);
  assert.equal(linked.ingredientId, "egg");
  assert.equal(linked.categoryId, "eggs");
  assert.equal(linked.qty, 30);
  assert.equal(linked.unit, "pieces");
  assert.equal(original.items.stock.ingredientId, undefined);

  const recipe = COOK_RECIPES.find((entry) => entry.id === "herb_omelette");
  const assessment = assessRecipe(result.state, recipe, {
    ingredients: COOK_INGREDIENTS,
    now: "2026-10-28",
  });
  const requirement = assessment.requirements.find(
    (entry) => entry.ingredientId === "egg",
  );
  assert.equal(requirement.qty, 4);
  assert.equal(requirement.have, 4);
  assert.equal(requirement.missing, 0);
});

test("re-run is idempotent and preserves state identity when unchanged", () => {
  const first = syncCookingInventory(base());
  const second = syncCookingInventory(first.state);
  assert.equal(second.state, first.state);
  assert.deepEqual(second.linkedItemIds, []);
  assert.deepEqual(second.categorizedItemIds, []);
  assert.deepEqual(second.pendingItemIds, []);
});

test("explicit opt-out prevents cooking link but still allows categorization", () => {
  const result = syncCookingInventory(
    base(eggs({ cookingLinkDisabled: true })),
  );
  assert.equal(result.state.items.stock.ingredientId, undefined);
  assert.equal(result.state.items.stock.categoryId, "eggs");
  assert.deepEqual(result.linkedItemIds, []);
  assert.deepEqual(result.pendingItemIds, ["stock"]);
});

test("valid manual ingredient and category links are preserved", () => {
  const original = base(
    eggs({ ingredientId: "tomato", categoryId: "vegetables" }),
  );
  const result = syncCookingInventory(original);
  assert.equal(result.state, original);
  assert.equal(result.state.items.stock.ingredientId, "tomato");
  assert.equal(result.state.items.stock.categoryId, "vegetables");
});

test("unknown stale cooking link is repaired only on a unique match", () => {
  const original = base(eggs({ ingredientId: "removed-catalog-id" }));
  const result = syncCookingInventory(original);
  assert.equal(result.state.items.stock.ingredientId, "egg");
  assert.deepEqual(result.linkedItemIds, ["stock"]);
});

test("active cooking freezes every synchronization result", () => {
  const original = { ...base(), cooking: { id: "cook-active" } };
  const result = syncCookingInventory(original);
  assert.equal(result.state, original);
  assert.deepEqual(result.linkedItemIds, []);
  assert.deepEqual(result.categorizedItemIds, []);
  assert.deepEqual(result.pendingItemIds, []);
});

test("unsupported plant milk remains pending and never becomes coconut milk", () => {
  const original = base(
    eggs({ name: "Plant Milk 1L", qty: 1, unit: "l", photoId: "plant" }),
  );
  const result = syncCookingInventory(original);
  assert.equal(result.state.items.stock.ingredientId, undefined);
  assert.equal(result.state.items.stock.categoryId, "plant_based");
  assert.deepEqual(result.linkedItemIds, []);
  assert.deepEqual(result.pendingItemIds, ["stock"]);
});

test("copy-on-write patches only identity fields", () => {
  const original = base();
  const untouched = original.items.stock;
  const snapshot = structuredClone(original);
  const result = syncCookingInventory(original);

  assert.deepEqual(original, snapshot);
  assert.deepEqual(result.state.meals, snapshot.meals);
  assert.deepEqual(result.state.receipts, snapshot.receipts);
  assert.deepEqual(result.state.backups, snapshot.backups);
  for (const key of [
    "name",
    "qty",
    "unit",
    "storage",
    "expiry",
    "expiryProvenance",
    "gramsPerUnit",
    "photoId",
    "cents",
  ]) {
    assert.deepEqual(result.state.items.stock[key], untouched[key], key);
  }
});
