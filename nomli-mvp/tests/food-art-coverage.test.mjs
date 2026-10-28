import assert from "node:assert/strict";
import test from "node:test";
import catalog from "../content/food-art-catalog.json" with { type: "json" };
import { FOOD_CATEGORIES } from "../web/food-categories.js";
import { getFoodArtwork } from "../web/food-art.js";

const artworkId = (name, categoryId) => getFoodArtwork({ name, categoryId }).id;

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase("und")
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/([^\p{L}\p{N}]+)/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

test("272 catalog artworks cover all 32 food sections", () => {
  assert.equal(catalog.items.length, 272);
  assert.equal(FOOD_CATEGORIES.length, 32);

  const categoryIds = new Set(FOOD_CATEGORIES.map(({ id }) => id));
  for (const item of catalog.items) {
    assert.ok(item.categoryIds.length > 0, `${item.id}: category required`);
    for (const categoryId of item.categoryIds) {
      assert.ok(
        categoryIds.has(categoryId),
        `${item.id}: unknown category ${categoryId}`,
      );
    }
  }
});

test("every artwork resolves from its own bilingual label in its primary section", () => {
  for (const item of catalog.items) {
    const categoryId = item.categoryIds[0];
    assert.equal(
      artworkId(item.en, categoryId),
      item.id,
      `${item.id}: ${item.en}`,
    );
    assert.equal(
      artworkId(item.ar, categoryId),
      item.id,
      `${item.id}: ${item.ar}`,
    );
  }
});

test("normalized aliases have no ambiguous owners inside the same section", () => {
  const owners = new Map();
  for (const item of catalog.items) {
    const values = [item.en, item.ar, ...item.aliases.en, ...item.aliases.ar];
    for (const value of values) {
      const alias = normalize(value);
      if (!alias) continue;
      const entries = owners.get(alias) ?? [];
      entries.push({ id: item.id, categoryIds: item.categoryIds });
      owners.set(alias, entries);
    }
  }

  const conflicts = [];
  for (const [alias, entries] of owners) {
    const ids = [...new Set(entries.map(({ id }) => id))];
    if (ids.length < 2) continue;
    const overlapping = entries.some((left, index) =>
      entries
        .slice(index + 1)
        .some(
          (right) =>
            left.id !== right.id &&
            left.categoryIds.some((categoryId) =>
              right.categoryIds.includes(categoryId),
            ),
        ),
    );
    if (overlapping)
      conflicts.push(`${JSON.stringify(alias)} -> ${ids.join(", ")}`);
  }

  assert.deepEqual(
    conflicts,
    [],
    `ambiguous catalog aliases:\n${conflicts.join("\n")}`,
  );
});

test("common Gulf and Egyptian receipt aliases remain distinct", () => {
  const cases = [
    ["أرز الساعة 1 كجم", "rice_grains", "basmati_rice"],
    ["لسان عصفور 400 جم", "pasta", "orzo"],
    ["Pepsi 330ml", "drinks", "cola"],
    ["7UP 330ml", "drinks", "lemon_lime_soda"],
  ];
  for (const [name, categoryId, expected] of cases) {
    assert.equal(artworkId(name, categoryId), expected, name);
  }
});

test("fresh, dried, frozen, and canned qualifiers select prepared artwork", () => {
  const cases = [
    ["Fresh milk", "dairy", "milk"],
    ["Dried apricots", "dried_fruit", "dried_apricots"],
    ["Frozen peas", "frozen", "frozen_peas"],
    ["Canned beans", "canned", "canned_beans"],
    ["Canned chickpeas", "canned", "canned_chickpeas"],
    ["Dry chickpeas", "legumes", "chickpeas"],
    ["Frozen fish fillet", "frozen", "frozen_fish_fillet"],
    ["Fish fillet", "fish", "fish_fillet"],
  ];
  for (const [name, categoryId, expected] of cases) {
    assert.equal(artworkId(name, categoryId), expected, name);
  }
});

test("compound food names resolve product, not ingredient or garnish", () => {
  const cases = [
    ["Chocolate milk", "dairy", "milk"],
    ["Milk chocolate", "sweets", "chocolate_bar"],
    ["Orange juice", "drinks", "orange_juice"],
    ["Coconut milk", "plant_based", "plant_milk"],
    ["Sugar free cola", "drinks", "cola"],
    ["Baby spinach", "vegetables", "spinach"],
    ["Almond milk", "plant_based", "plant_milk"],
  ];
  const mismatches = cases.flatMap(([name, categoryId, expected]) => {
    const actual = artworkId(name, categoryId);
    return actual === expected
      ? []
      : [`${name}: expected ${expected}, received ${actual}`];
  });

  const butterBeans = artworkId("Butter beans", "legumes");
  if (!["white_beans", "fava_beans"].includes(butterBeans)) {
    mismatches.push(
      `Butter beans: expected white_beans/fava_beans, received ${butterBeans}`,
    );
  }
  assert.notEqual(butterBeans, "butter");
  assert.deepEqual(mismatches, [], mismatches.join("\n"));
});

test("legacy name-only routing still handles common unambiguous products", () => {
  const cases = [
    ["Pepsi", "cola"],
    ["7UP", "lemon_lime_soda"],
    ["أرز الساعة", "basmati_rice"],
    ["لسان عصفور", "orzo"],
    ["Orange juice", "orange_juice"],
    ["Frozen fish fillet", "frozen_fish_fillet"],
  ];
  for (const [name, expected] of cases) {
    assert.equal(getFoodArtwork({ name }).id, expected, name);
  }
});
