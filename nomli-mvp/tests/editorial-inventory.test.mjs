import test from "node:test";
import assert from "node:assert/strict";
import {
  categoryRailItems,
  deriveInventoryPresentation,
  foodCategoryItems,
  renderCompactInventoryTile,
} from "../web/inventory-presentation.js";
const daysLeft = (item) => item.left;

test("broad rail has eight representative groups and partitions all 32 categories exactly once", () => {
  const rail = categoryRailItems();
  const categories = foodCategoryItems();
  const groupedIds = rail.flatMap((group) => group.categories);
  assert.equal(rail.length, 8);
  assert.deepEqual(
    rail.slice(0, 4).map(({ id }) => id),
    ["produce", "dairy-eggs", "proteins", "grains"],
  );
  assert.ok(
    rail.every(({ representativeCategoryId, categories: ids }) =>
      ids.includes(representativeCategoryId),
    ),
  );
  assert.equal(categories.length, 32);
  assert.equal(groupedIds.length, 32);
  assert.equal(new Set(groupedIds).size, 32);
  assert.deepEqual(
    new Set(groupedIds),
    new Set(categories.map(({ id }) => id)),
  );
});
test("all 32 category entries render in one group exactly once", () => {
  const items = Object.fromEntries(
    foodCategoryItems().map(({ id }) => [
      id,
      { name: id, categoryId: id, qty: 1 },
    ]),
  );
  const result = deriveInventoryPresentation({ items });
  const renderedIds = result.groups.flatMap((group) =>
    group.items.map(({ id }) => id),
  );
  assert.equal(result.entries.length, 32);
  assert.equal(renderedIds.length, 32);
  assert.equal(new Set(renderedIds).size, 32);
  assert.deepEqual(new Set(renderedIds), new Set(Object.keys(items)));
});
test("broad and original category filters both work", () => {
  const items = {
    tomato: { name: "Tomato", categoryId: "vegetables", qty: 1 },
    apple: { name: "Apple", categoryId: "fruit", qty: 1 },
    milk: { name: "Milk", categoryId: "dairy", qty: 1 },
  };
  assert.deepEqual(
    deriveInventoryPresentation({ items, category: "produce" }).entries.map(
      ({ id }) => id,
    ),
    ["tomato", "apple"],
  );
  assert.deepEqual(
    deriveInventoryPresentation({ items, category: "vegetables" }).entries.map(
      ({ id }) => id,
    ),
    ["tomato"],
  );
});
test("filtering retains zero quantity and never mutates source", () => {
  const items = {
    zero: {
      name: "Tomato",
      qty: 0,
      storage: "Fridge",
      categoryId: "vegetables",
      expiry: "2026-01-01",
      left: 1,
    },
    milk: {
      name: "Milk",
      qty: 1,
      storage: "Fridge",
      categoryId: "dairy",
      expiry: "2026-01-04",
      left: 4,
    },
  };
  const before = structuredClone(items);
  assert.deepEqual(
    deriveInventoryPresentation({
      items,
      storage: "Fridge",
      sort: "quantity",
      daysLeft,
    }).entries.map(({ id }) => id),
    ["zero", "milk"],
  );
  assert.deepEqual(items, before);
  assert.equal(
    deriveInventoryPresentation({ items, useSoon: true, daysLeft }).entries
      .length,
    0,
  );
});
test("unknown category safely falls back to Other food", () => {
  const result = deriveInventoryPresentation({
    items: { mystery: { name: "???", qty: 2, categoryId: "not-real" } },
  });
  assert.equal(result.entries[0].categoryId, "other");
  assert.equal(result.groups[0].id, "other");
});
test("tile escapes, splits unlinked bilingual name, and hides redundant retail line", () => {
  const html = renderCompactInventoryTile({
    id: 'x" onclick="bad',
    item: { name: "Milk / حليب", qty: 0, unit: "L" },
    thumbnail: () => '<span class="ingredient-thumb"></span>',
  });
  assert.match(html, />Milk<\/b>/);
  assert.match(html, /lang="ar"[^>]*>حليب/);
  assert.match(html, />0 L</);
  assert.doesNotMatch(html, /onclick="bad/);
  assert.doesNotMatch(html, /inventory-retail-name/);
  assert.match(html, /data-action="item-edit"/);
});
