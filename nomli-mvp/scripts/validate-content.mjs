import { readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve(import.meta.dirname, "..");
const json = async (name) =>
  JSON.parse(await readFile(path.join(root, name), "utf8"));
const ingredients = (await json("content/ingredients.json")).ingredients;
const recipes = (await json("content/recipes.json")).recipes;
const receipts = (await json("fixtures/receipts.json")).receipts;
const voices = await json("content/voice-commands.json");
const ids = new Map(ingredients.map((x) => [x.id, x]));
assert.equal(ids.size, ingredients.length, "duplicate ingredient IDs");
assert.equal(
  new Set(recipes.map((x) => x.id)).size,
  recipes.length,
  "duplicate recipes",
);
assert.ok(ingredients.length >= 80 && recipes.length >= 20);
for (const recipe of recipes) {
  assert.ok(recipe.servings > 0 && recipe.steps.length > 0);
  for (const item of recipe.ingredients) {
    const ingredient = ids.get(item.ingredientId);
    assert.ok(ingredient, `${recipe.id}: unknown ${item.ingredientId}`);
    assert.ok(item.quantity > 0 && Number.isFinite(item.quantity));
    assert.ok(
      item.unit === ingredient.canonicalUnit ||
        ingredient.compatibleConversions.some((x) => x.unit === item.unit),
      `${recipe.id}: incompatible unit`,
    );
  }
  if (recipe.image)
    await access(
      path.join(root, "web/public", recipe.image.replace(/^\//, "")),
    );
}
for (const receipt of receipts) {
  const result = receipt.expectedExtraction;
  assert.ok(
    result.lines.every(
      (x) => ids.has(x.ingredientId) && Number.isSafeInteger(x.lineTotalMinor),
    ),
  );
  assert.equal(
    result.lines.reduce((n, x) => n + x.lineTotalMinor, 0),
    result.subtotalMinor,
  );
  assert.equal(result.subtotalMinor + result.taxMinor, result.totalMinor);
  assert.equal(receipt.printedExpiry, null);
}
assert.ok(voices);
console.log(
  `Content PASS: ${ingredients.length} ingredients, ${recipes.length} recipes, ${receipts.length} receipt fixtures.`,
);
