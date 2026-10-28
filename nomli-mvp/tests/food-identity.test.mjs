import test from "node:test";
import assert from "node:assert/strict";

import {
  normalizeRetailFoodName,
  resolveCookingIdentity,
} from "../web/food-identity.js";
import ingredientCatalog from "../content/ingredients.json" with { type: "json" };
import { inferFoodCategory } from "../web/food-categories.js";

test("normalizes retail pack text without erasing food type", () => {
  assert.equal(normalizeRetailFoodName("Eggs Medium30pcs"), "eggs");
  assert.equal(normalizeRetailFoodName("بيض متوسط ٣٠قطعة"), "بيض");
  assert.equal(normalizeRetailFoodName("Carrots Tray"), "carrots");
  assert.equal(normalizeRetailFoodName("جزر صينية"), "جزر");
  assert.equal(normalizeRetailFoodName("Bell Peppers1kg"), "bell peppers");
  assert.equal(normalizeRetailFoodName("Carrots tray1.5kg"), "carrots");
  assert.equal(normalizeRetailFoodName("جزر١٫٥كجم"), "جزر");
  assert.equal(
    normalizeRetailFoodName("Vitamin B12 Eggs"),
    "vitamin b 12 eggs",
  );
});

test("matches exact canonical and safe illustrated food types", () => {
  for (const [name, ingredientId] of [
    ["Eggs Medium 30pcs", "egg"],
    ["بيض متوسط ٣٠قطعة", "egg"],
    ["Bell Peppers", "bell_pepper"],
    ["Carrots Tray", "carrot"],
    ["Zucchini", "courgette"],
    ["جزر صينية", "carrot"],
    ["فلفل رومي", "bell_pepper"],
    ["Bell Peppers1kg", "bell_pepper"],
    ["جزر١٫٥كجم", "carrot"],
  ]) {
    const result = resolveCookingIdentity({ name });
    assert.equal(result.status, "matched", name);
    assert.equal(result.ingredientId, ingredientId, name);
    assert.deepEqual(result.candidates, [ingredientId], name);
    assert.equal(typeof result.foodTypeId, "string", name);
  }
});

test("display category cannot veto an exact name or create identity alone", () => {
  assert.equal(
    resolveCookingIdentity({ name: "Eggs", categoryId: "eggs" }).status,
    "matched",
  );
  const conflict = resolveCookingIdentity({
    name: "Eggs",
    categoryId: "vegetables",
  });
  assert.equal(conflict.status, "matched");
  assert.equal(conflict.ingredientId, "egg");
  assert.deepEqual(conflict.candidates, ["egg"]);
  assert.equal(
    resolveCookingIdentity({ categoryId: "eggs" }).status,
    "unmatched",
  );
});

test("bilingual retail forms require complete agreement, including compact OCR text", () => {
  for (const [name, ingredientId] of [
    ["MintBunch / نعناع", "mint"],
    ["ParsleyBunch | بقدونس", "parsley"],
    ["OliveOilExtraVirgin250ml / زيتزيتونبكرممتاز٢٥٠مل", "olive_oil"],
    ["SaltTable700g / ملحطعام٧٠٠جم", "salt"],
    ["BlackPepperGround50g / فلفلاسودمطحون٥٠جم", "black_pepper"],
  ]) {
    assert.equal(
      resolveCookingIdentity({ name }).ingredientId,
      ingredientId,
      name,
    );
  }
  for (const name of [
    "Eggs /",
    "/ Eggs",
    "Salt / Pepper",
    "ملح / طح",
    "Chocolate milk / حليب",
    "Milk chocolate / حليب",
    "Olive oil / زيت سمسم",
    "SuperMintBunch / نعناع",
    "MintBunchTea / نعناع",
    "OliveOilExtraVirginBlend / زيت زيتون بكر ممتاز",
  ])
    assert.notEqual(resolveCookingIdentity({ name }).status, "matched", name);
});

test("keeps formulation, preparation, species, and unknown-brand ambiguity for review", () => {
  for (const name of [
    "Chocolate milk",
    "Milk chocolate",
    "Butter beans",
    "Canned chickpeas",
    "Fresh chickpeas",
    "Cooked chickpeas canned",
    "Fish fillet",
    "Frozen fish fillet",
    "Whole wheat bread",
    "Acme Eggs",
    "Almond milk",
    "Macaroni",
    "Wrap",
    "Garbanzo beans",
    "Cannellini beans",
    "Flatbread",
    "White cheese",
  ]) {
    const result = resolveCookingIdentity({ name });
    assert.notEqual(result.status, "matched", name);
    assert.equal(result.ingredientId, null, name);
  }
});

test("canonical primary names match every displayed inventory category", () => {
  for (const ingredient of ingredientCatalog.ingredients) {
    for (const name of [ingredient.name.en, ingredient.name.ar]) {
      const categoryId = inferFoodCategory({
        name,
        ingredientId: ingredient.id,
      }).category.id;
      const result = resolveCookingIdentity({ name, categoryId });
      assert.equal(
        result.status,
        "matched",
        `${ingredient.id}/${name}/${categoryId}`,
      );
      assert.equal(result.ingredientId, ingredient.id, name);
    }
  }
});

test("supports explicit safe special display categories", () => {
  for (const categoryId of ["plant_based", "canned"])
    assert.equal(
      resolveCookingIdentity({ name: "Coconut milk", categoryId }).ingredientId,
      "coconut_milk",
    );
  assert.equal(
    resolveCookingIdentity({ name: "Dry pasta", categoryId: "pasta" })
      .ingredientId,
    "pasta_dry",
  );
  assert.notEqual(
    resolveCookingIdentity({ name: "Plant milk" }).status,
    "matched",
  );
});

test("explicit disable and hostile inputs fail closed", () => {
  assert.deepEqual(
    resolveCookingIdentity({ name: "Eggs", cookingLinkDisabled: true }),
    {
      ingredientId: null,
      foodTypeId: null,
      status: "unmatched",
      candidates: [],
    },
  );
  for (const name of [
    null,
    {},
    "",
    "x".repeat(100_000),
    "<script>egg</script>",
  ]) {
    const result = resolveCookingIdentity({ name });
    assert.notEqual(result.status, "matched");
    assert.equal(result.ingredientId, null);
  }
});
