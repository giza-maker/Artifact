import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const ingredients = JSON.parse(
  readFileSync(new URL("../content/ingredients.json", import.meta.url)),
).ingredients;
const artwork = JSON.parse(
  readFileSync(new URL("../content/food-art-catalog.json", import.meta.url)),
).items;

const artById = new Map(artwork.map((item) => [item.id, item]));
const cookingIds = new Set(ingredients.map((item) => item.id));

test("every artwork type has an explicit valid cooking mapping policy", () => {
  assert.equal(artwork.length, 272);

  for (const item of artwork) {
    assert.equal(
      Object.hasOwn(item, "cookingIngredientId"),
      true,
      `${item.id} must explicitly declare cookingIngredientId`,
    );
    assert.ok(
      item.cookingIngredientId === null ||
        cookingIds.has(item.cookingIngredientId),
      `${item.id} references unknown cooking ingredient ${item.cookingIngredientId}`,
    );
  }
});

test("high-value retail types map to semantically identical cooking ingredients", () => {
  const expected = {
    eggs: "egg",
    bell_pepper: "bell_pepper",
    carrot: "carrot",
    zucchini: "courgette",
    eggplant: "aubergine",
    arugula: "rocket",
    cilantro: "coriander_leaf",
    basmati_rice: "rice_basmati_dry",
    minced_beef: "beef_mince",
    tuna_can: "tuna_canned",
    frozen_peas: "green_pea_frozen",
  };

  for (const [artId, cookingIngredientId] of Object.entries(expected)) {
    assert.equal(artById.get(artId)?.cookingIngredientId, cookingIngredientId);
  }
});

test("ambiguous processing, formulation, and species stay unlinked", () => {
  const blocked = [
    "plant_milk",
    "yogurt",
    "chickpeas",
    "brown_lentils",
    "white_beans",
    "fish_fillet",
    "frozen_fish_fillet",
    "canned_tomatoes",
    "pasta_sauce",
    "ready_soup",
    "chicken_nuggets",
  ];

  for (const artId of blocked) {
    assert.equal(
      artById.get(artId)?.cookingIngredientId,
      null,
      `${artId} must require explicit product/form review`,
    );
  }
});

test("mapping remains deliberately narrower than artwork catalog", () => {
  const mapped = artwork.filter((item) => item.cookingIngredientId !== null);
  assert.equal(mapped.length, 63);
  assert.ok(mapped.length < ingredients.length);
});
