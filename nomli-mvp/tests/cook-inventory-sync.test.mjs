import test from "node:test";
import assert from "node:assert/strict";
import { reviewScanDraft, commitScanDraft } from "../web/scan-domain.js";
import { applyScanCookingLinks } from "../web/scan-cooking-links.js";
import {
  COOK_INGREDIENTS,
  suggestIngredientLinks,
} from "../web/cook-catalog.js";
import {
  assessRecipe,
  startCookingSession,
  commitCookedMeal,
  undoCookedMeal,
} from "../web/cook-domain.js";

const emptyKitchen = () => ({
  items: {},
  receipts: [],
  meals: [],
  scanImports: [],
  profile: { allergies: [] },
  tools: {},
  cooking: null,
});

const scanLine = (name, quantity, unit) => ({
  lineId: "line-1",
  name,
  ingredientId: null,
  quantity,
  unit,
  lineTotalMinor: null,
  expiry: null,
  expiryProvenance: null,
  storage: "Fridge",
  warnings: [],
});

function importConfirmedSuggestion({
  name,
  quantity,
  unit,
  fingerprint,
  expectedIngredientId,
}) {
  const draft = reviewScanDraft(
    {
      kind: "groceries",
      fingerprint,
      lines: [scanLine(name, quantity, unit)],
      warnings: [],
    },
    { catalog: COOK_INGREDIENTS },
  );
  const suggestions = suggestIngredientLinks(draft.lines[0].name);
  assert.equal(
    suggestions.length,
    1,
    `${name} should have one safe cooking-link suggestion to confirm`,
  );
  if (expectedIngredientId)
    assert.equal(suggestions[0].id, expectedIngredientId, name);
  const committed = commitScanDraft(emptyKitchen(), draft, { confirmed: true });
  return applyScanCookingLinks(committed, {
    draft,
    links: {
      "line-1": { ingredientId: suggestions[0].id, gramsPerUnit: null },
    },
  }).state;
}

test("confirmed Eggs Medium scan supplies piece recipe and preserves atomic deduction units", () => {
  const state = importConfirmedSuggestion({
    name: "Eggs Medium 30pcs",
    quantity: 30,
    unit: "pieces",
    fingerprint: "e".repeat(64),
    expectedIngredientId: "egg",
  });
  const recipe = {
    id: "four-eggs",
    name: "Four eggs",
    servings: 1,
    ingredients: [{ id: "egg", qty: 4, unit: "pieces" }],
  };

  const assessment = assessRecipe(state, recipe, { now: "2026-10-28" });
  assert.equal(assessment.stockReady, true);
  assert.equal(assessment.missing.length, 0);
  assert.deepEqual(
    assessment.requirements[0].allocations.map(({ qty, unit }) => ({
      qty,
      unit,
    })),
    [{ qty: 4, unit: "pieces" }],
  );
  assert.equal(state.items["scan-line-1"].qty, 30);
  assert.equal(state.items["scan-line-1"].unit, "pieces");

  const imported = structuredClone(state);
  const started = startCookingSession(state, recipe, {
    sessionId: "cook-four-eggs",
    now: "2026-10-28T12:00:00Z",
  });
  assert.deepEqual(state, imported);
  assert.equal(started.cooking.phase, "prep");
  const review = {
    ...started,
    cooking: {
      ...started.cooking,
      phase: "review",
      prepared: ["egg"],
      toolsConfirmed: true,
    },
  };
  const committed = commitCookedMeal(review, {
    sessionId: "cook-four-eggs",
    used: [{ id: "scan-line-1", qty: 4 }],
    confirmed: true,
    now: "2026-10-28T12:05:00Z",
  });
  assert.equal(committed.state.items["scan-line-1"].qty, 26);
  assert.equal(review.items["scan-line-1"].qty, 30);

  const replay = commitCookedMeal(committed.state, {
    sessionId: "cook-four-eggs",
    used: [{ id: "scan-line-1", qty: 4 }],
    confirmed: true,
    now: "2026-10-28T12:06:00Z",
  });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state.items["scan-line-1"].qty, 26);

  const undone = undoCookedMeal(committed.state, "cook-four-eggs", {
    confirmed: true,
  });
  assert.equal(undone.state.items["scan-line-1"].qty, 30);

  const changedIdentity = structuredClone(review);
  changedIdentity.items["scan-line-1"].ingredientId = "milk";
  const beforeRejectedCommit = structuredClone(changedIdentity);
  assert.throws(
    () =>
      commitCookedMeal(changedIdentity, {
        sessionId: "cook-four-eggs",
        used: [{ id: "scan-line-1", qty: 4 }],
        confirmed: true,
        now: "2026-10-28T12:05:00Z",
      }),
    /Stock changed or insufficient/,
  );
  assert.deepEqual(changedIdentity, beforeRejectedCommit);
});

test("packaging words and plurals retain safe produce identity through scan and cook", () => {
  for (const [index, fixture] of [
    ["Bell Peppers 1kg", "bell_pepper"],
    ["Carrots tray 1kg", "carrot"],
    ["Zucchini 1kg", "courgette"],
    ["Courgette 1kg", "courgette"],
    ["جزر صينية ١ كغ", "carrot"],
  ].entries()) {
    const state = importConfirmedSuggestion({
      name: fixture[0],
      quantity: 1,
      unit: "kg",
      fingerprint: String(index + 1).repeat(64),
      expectedIngredientId: fixture[1],
    });
    const assessment = assessRecipe(
      state,
      {
        id: `produce-${index}`,
        servings: 1,
        ingredients: [{ id: fixture[1], qty: 250, unit: "g" }],
      },
      { now: "2026-10-28" },
    );
    assert.equal(assessment.stockReady, true, fixture[0]);
    assert.equal(assessment.requirements[0].allocations[0].qty, 0.25);
  }
});

test("Arabic packaged eggs retain count identity through scan and cook", () => {
  const state = importConfirmedSuggestion({
    name: "بيض متوسط ٣٠ قطعة",
    quantity: 30,
    unit: "pieces",
    fingerprint: "a".repeat(64),
    expectedIngredientId: "egg",
  });
  const assessment = assessRecipe(
    state,
    {
      id: "arabic-eggs",
      servings: 1,
      ingredients: [{ id: "egg", qty: 4, unit: "pieces" }],
    },
    { now: "2026-10-28" },
  );
  assert.equal(assessment.stockReady, true);
  assert.equal(assessment.requirements[0].allocations[0].qty, 4);
});

test("ambiguous plant milk never auto-confirms dairy milk", () => {
  assert.deepEqual(suggestIngredientLinks("Plant milk 1L"), []);
  assert.deepEqual(
    suggestIngredientLinks("Coconut milk 1L").map(({ id }) => id),
    ["coconut_milk"],
  );
});
