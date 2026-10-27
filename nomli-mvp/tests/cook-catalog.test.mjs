import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import raw from '../content/recipes.json' with { type: 'json' };
import catalog from '../content/ingredients.json' with { type: 'json' };
import { COOK_INGREDIENTS, COOK_RECIPES, COOK_TOOLS, getIngredient,
  ingredientLabel, toolLabel, suggestIngredientLinks } from '../web/cook-catalog.js';

test('all curated recipes normalize without changing ingredients or instructions', () => {
  assert.equal(COOK_RECIPES.length, 20);
  assert.equal(COOK_INGREDIENTS, catalog.ingredients);
  assert.equal(COOK_INGREDIENTS.length, 88);
  const units = { piece: 'pieces', slice: 'slices', clove: 'cloves', bunch: 'bunches' };
  for (const [index, recipe] of COOK_RECIPES.entries()) {
    const source = raw.recipes[index];
    assert.equal(recipe.name, source.name.en);
    assert.equal(recipe.nameAr, source.name.ar);
    assert.equal(recipe.time, source.prepMinutes + source.cookMinutes);
    assert.equal(recipe.servings, source.servings);
    assert.deepEqual(recipe.ingredients, source.ingredients.map(item => ({
      id: item.ingredientId, qty: item.quantity, unit: units[item.unit] ?? item.unit,
    })));
    assert.deepEqual(recipe.steps.map(step => step.text), source.steps);
    assert.deepEqual(recipe.requiredTools, source.tools.filter(id => !id.endsWith('_optional')));
    for (const ingredient of recipe.ingredients) {
      assert.ok(getIngredient(ingredient.id), ingredient.id);
      assert.ok(ingredient.qty > 0);
    }
    const expectedAllergens = [...new Set(source.ingredients.flatMap(item =>
      getIngredient(item.ingredientId).dietary.allergenTags))];
    assert.deepEqual(recipe.allergens, expectedAllergens);
    assert.equal('allergenFree' in recipe, false);
    for (const image of [recipe.image, recipe.cardImage]) {
      if (image === null) continue;
      assert.match(image, /^images\//);
      assert.ok(!image.includes('..'));
      assert.ok(existsSync(new URL(`../web/public/${image}`, import.meta.url)), image);
    }
  }
});

test('tool catalog contains every required tool, defaults off, excludes optional tools', () => {
  assert.deepEqual(COOK_TOOLS.map(tool => tool.id), [...new Set(COOK_RECIPES.flatMap(r => r.requiredTools))]);
  assert.ok(COOK_TOOLS.every(tool => tool.on === false && tool.name && !tool.id.endsWith('_optional')));
  assert.equal(toolLabel('cutting_board'), 'Cutting board');
});

test('labels and unknown ingredient lookups are stable', () => {
  assert.equal(ingredientLabel('tomato'), 'Tomato');
  assert.equal(ingredientLabel('unknown'), 'unknown');
  assert.equal(getIngredient('unknown'), null);
});

test('suggestions rank exact names and English/Arabic aliases, normalize Arabic spelling', () => {
  assert.equal(suggestIngredientLinks('Tomato')[0].id, 'tomato');
  assert.equal(suggestIngredientLinks('tomatoes')[0].id, 'tomato');
  assert.equal(suggestIngredientLinks('بَـنْدُورَة')[0].id, 'tomato');
  assert.equal(suggestIngredientLinks('ارز بسمتي جاف')[0].id, 'rice_basmati_dry');
  assert.equal(suggestIngredientLinks('Tomatoes 6 pack')[0].id, 'tomato');
  assert.equal(suggestIngredientLinks('olive oil 2 x 500 ml')[0].id, 'olive_oil');
});

test('suggestions remain bounded, ambiguous, conservative, and never mutate catalog', () => {
  const before = JSON.stringify(COOK_INGREDIENTS);
  const chicken = suggestIngredientLinks('Chicken');
  assert.ok(chicken.some(entry => entry.id === 'chicken_breast'));
  assert.ok(chicken.some(entry => entry.id === 'chicken_thigh'));
  assert.ok(chicken.length > 1);
  assert.equal(suggestIngredientLinks('Chicken', { limit: 1 }).length, 1);
  for (const name of ['', null, undefined, 'nothing resembling food', 'cooked chicken breast', '500 ml']) {
    assert.deepEqual(suggestIngredientLinks(name), []);
  }
  assert.deepEqual(suggestIngredientLinks('Chicken', { limit: 0 }), []);
  assert.equal(JSON.stringify(COOK_INGREDIENTS), before);
});
