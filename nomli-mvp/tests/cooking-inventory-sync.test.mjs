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

test("active cooking freezes allocated stock but still reports it pending", () => {
  const original = {
    ...base(),
    cooking: {
      id: "cook-active",
      allocations: [
        {
          id: "stock",
          ingredientId: "egg",
          name: "Eggs Medium 30 pieces",
          qty: 4,
          unit: "pieces",
          gramsPerUnit: null,
        },
      ],
    },
  };
  const snapshot = structuredClone(original);
  const result = syncCookingInventory(original);
  assert.equal(result.state, original);
  assert.equal(result.state.items.stock, original.items.stock);
  assert.deepEqual(
    result.state.cooking.allocations,
    snapshot.cooking.allocations,
  );
  assert.equal(result.state.items.stock.qty, 30);
  assert.deepEqual(result.linkedItemIds, []);
  assert.deepEqual(result.categorizedItemIds, []);
  assert.deepEqual(result.pendingItemIds, ["stock"]);
  assert.deepEqual(original, snapshot);
});

test("active cooking repairs non-allocated stock without changing allocations or quantities", () => {
  const allocated = eggs({ name: "Unlinked allocated eggs", qty: 12 });
  const original = {
    ...base(allocated),
    items: {
      stock: allocated,
      available: eggs({ qty: 18 }),
    },
    cooking: {
      id: "cook-active",
      allocations: [
        {
          id: "stock",
          ingredientId: "egg",
          name: "Unlinked allocated eggs",
          qty: 4,
          unit: "pieces",
          gramsPerUnit: null,
        },
      ],
    },
  };
  const allocations = original.cooking.allocations;
  const snapshot = structuredClone(original);
  const result = syncCookingInventory(original);

  assert.notEqual(result.state, original);
  assert.equal(result.state.items.stock, original.items.stock);
  assert.equal(result.state.cooking, original.cooking);
  assert.equal(result.state.cooking.allocations, allocations);
  assert.equal(result.state.items.available.ingredientId, "egg");
  assert.equal(result.state.items.available.categoryId, "eggs");
  assert.equal(result.state.items.stock.qty, 12);
  assert.equal(result.state.items.available.qty, 18);
  assert.deepEqual(result.linkedItemIds, ["available"]);
  assert.deepEqual(result.categorizedItemIds, ["available"]);
  assert.deepEqual(result.pendingItemIds, ["stock"]);
  assert.deepEqual(original, snapshot);
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
