import test from 'node:test';
import assert from 'node:assert/strict';
import { renderIngredientLinkFields, readIngredientLink } from '../web/cook-linking.js';

const fields = values => ({ get: key => values[key] ?? null });

test('suggestions never select an ingredient, including ambiguous product names', () => {
  for (const name of ['Tomato', 'Chicken', 'cooked chicken breast']) {
    const html = renderIngredientLinkFields({ name });
    assert.match(html, /<option value="" selected>Not linked for cooking/);
    assert.equal((html.match(/ selected/g) ?? []).length, 1);
  }
  const ambiguous = renderIngredientLinkFields({ name: 'Chicken' });
  assert.match(ambiguous, /label="Suggestions"/);
  assert.match(ambiguous, /value="chicken_breast"/);
  assert.match(ambiguous, /value="chicken_thigh"/);
  assert.doesNotMatch(renderIngredientLinkFields({ name: 'cooked chicken breast' }), /label="Suggestions"/);
});

test('only explicitly supplied catalog IDs select options; all ingredients appear once', () => {
  const html = renderIngredientLinkFields({ name: 'Tomato', ingredientId: 'tomato' });
  assert.match(html, /value="tomato" selected/);
  assert.equal((html.match(/value="tomato"/g) ?? []).length, 1);
  assert.match(renderIngredientLinkFields({ ingredientId: 'unknown' }), /value="" selected/);
});

test('field prefixes escape markup; labels wrap native controls', () => {
  const html = renderIngredientLinkFields({ prefix: '"><img src=x onerror=alert(1)>', name: '<script>bad</script>' });
  assert.doesNotMatch(html, /<img|<script|name="">/);
  assert.match(html, /name="&quot;&gt;&lt;img/);
  assert.equal((html.match(/<label class="field">/g) ?? []).length, 2);
  assert.equal((html.match(/<span class="details">/g) ?? []).length, 2);
  assert.match(html, /step="any"/);
  assert.match(html, /never guess weights/);
});

test('weight input enables only current count-family units, does not preserve invalid values', () => {
  for (const unit of ['count', 'pieces', 'bunches', 'cloves', 'slices']) {
    const html = renderIngredientLinkFields({ unit, gramsPerUnit: 12.5 });
    assert.doesNotMatch(html, / disabled/);
    assert.match(html, /value="12.5"/);
  }
  for (const unit of ['g', 'kg', 'ml', 'l', 'unknown']) {
    const html = renderIngredientLinkFields({ unit, gramsPerUnit: 12.5 });
    assert.match(html, /value="" disabled/);
  }
});

test('reader validates IDs, weights, prefix, and current unit without automatic matching', () => {
  assert.deepEqual(readIngredientLink(fields({ ingredientId: 'tomato', gramsPerUnit: '12.5' }), { unit: 'pieces' }),
    { ingredientId: 'tomato', gramsPerUnit: 12.5 });
  assert.deepEqual(readIngredientLink(fields({ xingredientId: 'garlic', xgramsPerUnit: '3' }), { prefix: 'x', unit: 'cloves' }),
    { ingredientId: 'garlic', gramsPerUnit: 3 });
  assert.throws(() => readIngredientLink(fields({ ingredientId: 'Chicken' }), { unit: 'count' }), /known cooking ingredient/);
  assert.throws(() => readIngredientLink(fields({ ingredientId: {} }), { unit: 'count' }), /known cooking ingredient/);
  for (const raw of ['no', 'Infinity', '-5', '0', '1000000001', '1e999', '0x10', {}]) {
    assert.throws(() => readIngredientLink(fields({ gramsPerUnit: raw }), { unit: 'count' }), /grams per unit|Grams per unit/);
  }
  for (const raw of ['', ' ', null]) {
    assert.equal(readIngredientLink(fields({ gramsPerUnit: raw }), { unit: 'count' }).gramsPerUnit, null);
  }
  for (const unit of ['g', 'kg', 'ml', 'l', undefined, 'unknown']) {
    assert.throws(() => readIngredientLink(fields({ gramsPerUnit: '12' }), { unit }), /only supported/);
    assert.equal(readIngredientLink(fields({ gramsPerUnit: '' }), { unit }).gramsPerUnit, null);
  }
  assert.equal(readIngredientLink(fields({ gramsPerUnit: '1000000000' }), { unit: 'count' }).gramsPerUnit, 1e9);
  assert.deepEqual(readIngredientLink(fields({ name: 'Tomato' }), { unit: 'count' }),
    { ingredientId: null, gramsPerUnit: null });
});
