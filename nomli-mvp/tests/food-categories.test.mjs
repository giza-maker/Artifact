import test from "node:test";
import assert from "node:assert/strict";
import { FOOD_CATEGORIES, getFoodCategory, inferFoodCategory } from "../web/food-categories.js";

test("category contract is stable, bilingual, and aligned to the 16-cell atlas", () => {
  assert.deepEqual(FOOD_CATEGORIES.map((entry) => entry.id), [
    "rice_grains", "pasta", "oil", "dairy", "eggs", "meat", "poultry", "fish",
    "vegetables", "fruit", "legumes", "spices", "bakery", "drinks", "condiments", "other",
  ]);
  assert.ok(FOOD_CATEGORIES.every((entry, index) => entry.atlasIndex === index && entry.en && entry.ar && entry.defaultStorage));
  assert.equal(getFoodCategory("pasta"), FOOD_CATEGORIES[1]);
  assert.equal(getFoodCategory("unknown"), null);
  assert.equal(getFoodCategory("../pasta"), null);
});

test("infers branded Arabic and English receipt names without creating cooking identity", () => {
  const cases = [
    ["أرز الساعة 1كجم", "rice_grains"],
    ["شعرية الملكة400جم", "pasta"],
    ["لسان عصفور الملكة400جم", "pasta"],
    ["بيبسي2لتر", "drinks"],
    ["سفن2لتر", "drinks"],
    ["زيت عباد الشمس 1 لتر", "oil"],
    ["Basmati rice 2 kg", "rice_grains"],
    ["Fresh chicken breast", "poultry"],
  ];
  for (const [name, id] of cases) {
    const inference = inferFoodCategory({ name });
    assert.equal(inference.category.id, id, name);
    assert.equal(inference.source, "name");
    assert.deepEqual(Object.keys(inference).sort(), ["category", "source", "suggestedStorage"]);
  }
});

test("uses valid user override first, then known cooking ingredient", () => {
  assert.equal(inferFoodCategory({ name: "Rice", ingredientId: "egg", categoryId: "drinks" }).category.id, "drinks");
  assert.equal(inferFoodCategory({ name: "Rice", ingredientId: "egg", categoryId: "invented" }).category.id, "eggs");
  assert.equal(inferFoodCategory({ name: "Rice", ingredientId: "not-a-catalog-id" }).category.id, "rice_grains");
  assert.equal(inferFoodCategory({ ingredientId: "olive_oil" }).category.id, "oil");
});

test("unknown or ambiguous names safely fall back to other", () => {
  for (const name of ["", "Acme special 42", "زيتون أخضر"]) {
    const inference = inferFoodCategory({ name });
    assert.equal(inference.category.id, "other", name);
    assert.equal(inference.source, "fallback", name);
    assert.equal(inference.suggestedStorage, "Pantry");
  }
});

test("storage is only a suggestion and explicit frozen animal food selects freezer", () => {
  assert.equal(inferFoodCategory({ name: "Frozen salmon fillet" }).suggestedStorage, "Freezer");
  assert.equal(inferFoodCategory({ name: "سمك مجمد" }).suggestedStorage, "Freezer");
  assert.equal(inferFoodCategory({ name: "Salmon fillet" }).suggestedStorage, "Fridge");
  assert.equal(inferFoodCategory({ name: "Frozen peas" }).suggestedStorage, "Fridge");
  assert.equal(inferFoodCategory({ name: "Pepsi" }).suggestedStorage, "Pantry");
});
