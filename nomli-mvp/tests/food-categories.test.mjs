import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  FOOD_CATEGORIES,
  getFoodCategory,
  inferFoodCategory,
} from "../web/food-categories.js";

const foodArtCatalog = JSON.parse(
  fs.readFileSync(
    new URL("../content/food-art-catalog.json", import.meta.url),
    "utf8",
  ),
);

test("category contract keeps legacy order and uses safe atlas fallback for new categories", () => {
  assert.deepEqual(
    FOOD_CATEGORIES.map((entry) => entry.id),
    [
      "rice_grains",
      "pasta",
      "oil",
      "dairy",
      "eggs",
      "meat",
      "poultry",
      "fish",
      "vegetables",
      "fruit",
      "legumes",
      "spices",
      "bakery",
      "drinks",
      "condiments",
      "other",
      "nuts_seeds",
      "dried_fruit",
      "snacks",
      "sweets",
      "baking",
      "sweeteners",
      "breakfast",
      "tea_coffee",
      "frozen",
      "canned",
      "deli",
      "ready_meals",
      "plant_based",
      "baby_food",
      "spreads",
      "seafood",
    ],
  );
  assert.ok(
    FOOD_CATEGORIES.slice(0, 16).every(
      (entry, index) => entry.atlasIndex === index,
    ),
  );
  assert.ok(
    FOOD_CATEGORIES.slice(16).every((entry) => entry.atlasIndex === 15),
  );
  assert.ok(
    FOOD_CATEGORIES.every(
      (entry) => entry.en && entry.ar && entry.defaultStorage,
    ),
  );
  const artIds = new Set(foodArtCatalog.items.map(({ id }) => id));
  assert.equal(getFoodCategory("other").representativeArtId, undefined);
  assert.ok(
    FOOD_CATEGORIES.filter(({ id }) => id !== "other").every(
      ({ representativeArtId }) => artIds.has(representativeArtId),
    ),
  );
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
    assert.deepEqual(Object.keys(inference).sort(), [
      "category",
      "source",
      "suggestedStorage",
    ]);
  }
});

test("uses valid user override first, then known cooking ingredient", () => {
  assert.equal(
    inferFoodCategory({
      name: "Rice",
      ingredientId: "egg",
      categoryId: "drinks",
    }).category.id,
    "drinks",
  );
  assert.equal(
    inferFoodCategory({
      name: "Rice",
      ingredientId: "egg",
      categoryId: "invented",
    }).category.id,
    "eggs",
  );
  assert.equal(
    inferFoodCategory({ name: "Rice", ingredientId: "not-a-catalog-id" })
      .category.id,
    "rice_grains",
  );
  assert.equal(
    inferFoodCategory({ ingredientId: "olive_oil" }).category.id,
    "oil",
  );
});

test("unknown or ambiguous names safely fall back to other", () => {
  for (const name of ["", "Acme special 42"]) {
    const inference = inferFoodCategory({ name });
    assert.equal(inference.category.id, "other", name);
    assert.equal(inference.source, "fallback", name);
    assert.equal(inference.suggestedStorage, "Pantry");
  }
});

test("storage is only a suggestion and explicit frozen animal food selects freezer", () => {
  assert.equal(
    inferFoodCategory({ name: "Frozen salmon fillet" }).suggestedStorage,
    "Freezer",
  );
  assert.equal(
    inferFoodCategory({ name: "سمك مجمد" }).suggestedStorage,
    "Freezer",
  );
  assert.equal(
    inferFoodCategory({ name: "Salmon fillet" }).suggestedStorage,
    "Fridge",
  );
  assert.equal(
    inferFoodCategory({ name: "Frozen peas" }).suggestedStorage,
    "Freezer",
  );
  assert.equal(inferFoodCategory({ name: "Pepsi" }).suggestedStorage, "Pantry");
});

test("infers expanded categories using longest specific aliases", () => {
  const cases = [
    ["Roasted almonds", "nuts_seeds"],
    ["Dried apricot", "dried_fruit"],
    ["Potato chips", "snacks"],
    ["Milk chocolate", "sweets"],
    ["Powdered milk", "dairy"],
    ["Brown sugar", "sweeteners"],
    ["Corn flakes", "breakfast"],
    ["Green tea", "tea_coffee"],
    ["Frozen food", "frozen"],
    ["Canned tomato", "canned"],
    ["Smoked turkey cold cuts", "deli"],
    ["Microwave ready meal", "ready_meals"],
    ["Plant based vegan burger", "plant_based"],
    ["Infant formula", "baby_food"],
    ["Peanut butter", "nuts_seeds"],
    ["Fresh shrimp", "fish"],
  ];
  for (const [name, categoryId] of cases)
    assert.equal(inferFoodCategory({ name }).category.id, categoryId, name);
});

test("all artwork primary English and Arabic names infer a compatible category", () => {
  for (const item of foodArtCatalog.items) {
    for (const name of [item.en, item.ar]) {
      const inferred = inferFoodCategory({ name }).category.id;
      assert.ok(
        item.categoryIds.includes(inferred),
        `${name}: inferred ${inferred}, expected one of ${item.categoryIds.join(", ")}`,
      );
    }
  }
});

test("specific catalog phrases beat generic aliases", () => {
  for (const [name, categoryId] of [
    ["Orange juice", "drinks"],
    ["Bell pepper", "vegetables"],
    ["Canned tomato", "canned"],
    ["Powdered milk", "dairy"],
    ["Peanut butter", "nuts_seeds"],
  ])
    assert.equal(inferFoodCategory({ name }).category.id, categoryId, name);
});
