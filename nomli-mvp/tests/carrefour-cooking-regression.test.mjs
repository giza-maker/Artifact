import test from "node:test";
import assert from "node:assert/strict";
import fixture from "../fixtures/carrefour-cooking-regression.json" with { type: "json" };
import { reviewScanDraft, commitScanDraft } from "../web/scan-domain.js";
import { applyScanCookingLinks } from "../web/scan-cooking-links.js";
import { syncCookingInventory } from "../web/cooking-inventory-sync.js";
import { resolveCookingIdentity } from "../web/food-identity.js";
import { COOK_INGREDIENTS, COOK_RECIPES } from "../web/cook-catalog.js";
import {
  assessRecipe,
  startCookingSession,
  commitCookedMeal,
  undoCookedMeal,
} from "../web/cook-domain.js";

const fingerprint = "c".repeat(64);
const emptyKitchen = () => ({
  items: {},
  receipts: [],
  scanImports: [],
  meals: [],
  profile: { allergies: [] },
  tools: Object.fromEntries(
    COOK_RECIPES.find(({ id }) => id === "herb_omelette").requiredTools.map(
      (id) => [id, true],
    ),
  ),
  cooking: null,
});

function receiptDraft() {
  return reviewScanDraft(
    {
      version: 1,
      kind: "receipt",
      fingerprint,
      merchant: fixture.source.merchant,
      currency: fixture.receipt.currency,
      receiptDate: null,
      totalMinor: fixture.receipt.totalMinor,
      taxMinor: fixture.receipt.taxMinor,
      discountMinor: fixture.receipt.discountMinor,
      lines: fixture.lines.map((line) => ({
        lineId: line.lineId,
        name: line.name,
        ingredientId: null,
        quantity: line.quantity,
        unit: line.unit,
        lineTotalMinor: line.lineTotalMinor,
        expiry: null,
        expiryProvenance: null,
        storage: line.storage,
        categoryId: line.categoryId,
        warnings: [],
      })),
      warnings: [],
    },
    { catalog: COOK_INGREDIENTS },
  );
}

function explicitLinks(weights = {}) {
  return Object.fromEntries(
    fixture.lines.map((line) => [
      line.lineId,
      {
        ingredientId: line.ingredientId,
        gramsPerUnit: weights[line.lineId] ?? null,
      },
    ]),
  );
}

const quantities = (state) =>
  Object.fromEntries(
    Object.entries(state.items).map(([id, item]) => [id, item.qty]),
  );
const finance = (state) => structuredClone(state.receipts);
const requirement = (assessment, id) =>
  assessment.requirements.find(({ ingredientId }) => ingredientId === id);

test("exact bilingual Carrefour transcription survives receipt import and cooking-link repair", () => {
  assert.equal(
    fixture.lines.reduce((sum, line) => sum + line.lineTotalMinor, 0),
    fixture.receipt.subtotalMinor,
  );
  for (const line of fixture.lines) {
    assert.ok(fixture.source.allText.includes(line.name));
    const [englishLabel, arabicLabel] = line.name.split(" / ");
    const identityLabels = [
      line.name,
      `${englishLabel}/${arabicLabel}`,
      `${englishLabel}／${arabicLabel}`,
      ...line.labelAliases,
    ];
    for (const label of identityLabels) {
      const identity = resolveCookingIdentity({ name: label });
      assert.equal(identity.status, "matched", label);
      assert.equal(identity.ingredientId, line.ingredientId, label);
      assert.deepEqual(identity.candidates, [line.ingredientId], label);
    }
    for (const alias of line.labelAliases)
      assert.ok(alias.length > 0, `${line.lineId} keeps non-empty label alias`);
  }

  for (const name of [
    "Milk / حليب لوز",
    "Salt / طحينة",
    "Raw chicken breast / صدر دجاج مطبوخ",
    "Egg / بياض بيض",
    "UnknownMilk",
    "MilkUnknown",
    "UnknownEgg",
    "EggUnknown",
  ]) {
    assert.notEqual(
      resolveCookingIdentity({ name }).status,
      "matched",
      `${name} contains disagreeing identities`,
    );
  }

  const draft = receiptDraft();
  const committed = commitScanDraft(emptyKitchen(), draft, { confirmed: true });
  for (const item of Object.values(committed.state.items))
    assert.equal(item.ingredientId, undefined);
  const beforeSyncQty = quantities(committed.state);
  const beforeSyncFinance = finance(committed.state);
  const synced = syncCookingInventory(committed.state);

  assert.deepEqual(quantities(synced.state), beforeSyncQty);
  assert.deepEqual(synced.state.receipts, beforeSyncFinance);
  assert.deepEqual(
    Object.fromEntries(
      fixture.lines.map((line) => [
        line.lineId,
        synced.state.items[`scan-${line.lineId}`].ingredientId,
      ]),
    ),
    Object.fromEntries(
      fixture.lines.map((line) => [line.lineId, line.ingredientId]),
    ),
  );
  assert.equal(synced.state.receipts[0].name, "Carrefour Mall Egypt");
  assert.equal(synced.state.receipts[0].totalMinor, 24362);
  assert.equal(synced.state.receipts[0].taxMinor, 2992);
  assert.equal(synced.state.receipts[0].discountMinor, 0);
  assert.deepEqual(
    synced.state.receipts[0].lines.map(({ name, qty, cents }) => ({
      name,
      qty,
      cents,
    })),
    fixture.lines.map((line) => ({
      name: line.name,
      qty: line.quantity,
      cents: line.lineTotalMinor,
    })),
  );
  assert.equal(synced.state.items["scan-salt"].categoryId, "condiments");

  const recipe = COOK_RECIPES.find(({ id }) => id === "herb_omelette");
  const initial = assessRecipe(synced.state, recipe, {
    ingredients: COOK_INGREDIENTS,
    now: "2026-10-28",
  });
  for (const [id, qty] of [
    ["egg", 4],
    ["salt", 2],
    ["black_pepper", 1],
    ["olive_oil", 10],
  ]) {
    assert.equal(requirement(initial, id).qty, qty, id);
    assert.equal(requirement(initial, id).have, qty, id);
  }
  for (const id of ["parsley", "mint"]) {
    const item = synced.state.items[`scan-${id}`];
    assert.equal(item.ingredientId, id);
    assert.equal(item.unit, "bunches");
    assert.equal(item.gramsPerUnit, undefined);
    assert.equal(requirement(initial, id).have, 0);
    assert.ok(
      initial.incompatibleItems.some((entry) => entry.id === `scan-${id}`),
    );
  }

  const measured = applyScanCookingLinks(
    { ...committed, state: synced.state },
    {
      draft,
      links: explicitLinks(fixture.measuredDomainExample.gramsPerUnit),
    },
  );
  assert.deepEqual(quantities(measured.state), beforeSyncQty);
  assert.deepEqual(measured.state.receipts, beforeSyncFinance);
  const ready = assessRecipe(measured.state, recipe, {
    ingredients: COOK_INGREDIENTS,
    now: "2026-10-28",
  });
  assert.equal(ready.stockReady, true);
  assert.equal(requirement(ready, "parsley").have, 15);
  assert.equal(requirement(ready, "mint").have, 5);

  const started = startCookingSession(measured.state, recipe, {
    sessionId: "carrefour-herb-omelette",
    now: "2026-10-28T12:00:00Z",
  });
  const review = {
    ...started,
    cooking: { ...started.cooking, phase: "review" },
  };
  const used = ready.requirements.flatMap(({ allocations }) =>
    allocations.map(({ id, qty }) => ({ id, qty })),
  );
  assert.deepEqual(Object.fromEntries(used.map(({ id, qty }) => [id, qty])), {
    "scan-eggs": 4,
    "scan-parsley": 0.5,
    "scan-mint": 0.25,
    "scan-salt": 2,
    "scan-pepper": 1,
    "scan-oil": 10,
  });
  const cooked = commitCookedMeal(review, {
    sessionId: "carrefour-herb-omelette",
    used,
    confirmed: true,
    now: "2026-10-28T12:08:00Z",
  });
  assert.equal(cooked.state.items["scan-eggs"].qty, 26);
  assert.equal(cooked.state.items["scan-parsley"].qty, 0.5);
  assert.equal(cooked.state.items["scan-mint"].qty, 0.75);
  assert.deepEqual(cooked.state.receipts, beforeSyncFinance);

  const undone = undoCookedMeal(cooked.state, "carrefour-herb-omelette", {
    confirmed: true,
  });
  assert.deepEqual(quantities(undone.state), beforeSyncQty);
  assert.deepEqual(undone.state.receipts, beforeSyncFinance);
});
