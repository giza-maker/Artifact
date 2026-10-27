import test from "node:test";
import assert from "node:assert/strict";
import {
  buildAssistantContext,
  validateAssistantContext,
  normalizeAssistantRequest,
  normalizeAssistantResponse,
  reviewAssistantProposal,
  applyAssistantProposal,
} from "../web/assistant-domain.js";
import { COOK_RECIPES } from "../web/cook-catalog.js";
const recipe = COOK_RECIPES[0];
const state = () => ({
  items: {
    lot: {
      name: "Unknown food",
      qty: 2,
      unit: "pieces",
      storage: "Fridge",
      ingredientId: null,
      gramsPerUnit: null,
      expiry: "2020-01-01",
    },
  },
  profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
  tools: { knife: true },
  servings: {},
  recipe: recipe.id,
  cooking: null,
  route: "assistant",
});
const quantity = {
  type: "set_quantity",
  itemId: "lot",
  quantity: 3,
  reason: "User reported three",
};
const reply = (p) => ({
  answer: "Review before applying.",
  warnings: [],
  proposals: p,
});
test("context preserves unlinked expired stock without mutating state", () => {
  const s = state(),
    before = structuredClone(s);
  const c = buildAssistantContext(s, { now: "2026-10-27" });
  assert.equal(c.today, "2026-10-27");
  assert.equal(c.inventory[0].ingredientId, null);
  assert.equal(c.inventory[0].expiry, "2020-01-01");
  c.profile.allergies.push("milk");
  assert.deepEqual(s, before);
});
test("strict bounded schemas reject extra fields, bad dates, links, quantities and history", () => {
  const c = buildAssistantContext(state());
  for (const mutate of [
    (x) => (x.secret = "x"),
    (x) => (x.inventory[0].expiry = "2026-02-30"),
    (x) => (x.inventory[0].ingredientId = "made-up"),
    (x) => (x.inventory[0].qty = Infinity),
    (x) => (x.inventory[0].gramsPerUnit = -1),
    (x) => (x.servings.unknown = 2),
    (x) => x.inventory.push(x.inventory[0]),
  ]) {
    const x = structuredClone(c);
    mutate(x);
    assert.throws(() => validateAssistantContext(x));
  }
  assert.throws(() =>
    normalizeAssistantRequest({
      question: "x",
      history: Array(7).fill({ q: "q", a: "a" }),
      context: c,
    }),
  );
  assert.throws(() =>
    normalizeAssistantRequest({
      question: "x",
      history: [{ q: "q", a: "a", bad: 1 }],
      context: c,
    }),
  );
  assert.throws(() => validateAssistantContext(JSON.parse('{"__proto__":{}}')));
  assert.equal(
    normalizeAssistantRequest({ question: "x", history: [], context: c })
      .question,
    "x",
  );
});
test("response grounds proposals and rejects duplicate, malformed and active-cooking mutations", () => {
  const c = buildAssistantContext(state());
  assert.equal(
    normalizeAssistantResponse(reply([quantity]), c).proposals.length,
    1,
  );
  for (const ps of [
    [{ ...quantity, itemId: "absent" }],
    [quantity, quantity],
    [{ ...quantity, quantity: -1 }],
    [{ ...quantity, unit: "g" }],
    [{ type: "open_recipe", recipeId: "invented", servings: 2, reason: "x" }],
  ])
    assert.throws(() => normalizeAssistantResponse(reply(ps), c));
  c.cooking = {
    id: "session",
    rid: recipe.id,
    servings: 2,
    phase: "prep",
    plannedUsage: [],
    step: 0,
  };
  assert.throws(() => normalizeAssistantResponse(reply([quantity]), c));
  assert.doesNotThrow(() => normalizeAssistantResponse(reply([]), c));
});
test("recipe proposals respect catalog allergens", () => {
  const s = state();
  const r = COOK_RECIPES.find((x) => x.allergens.length);
  assert.ok(r);
  s.profile.allergies = [r.allergens[0]];
  assert.throws(() =>
    normalizeAssistantResponse(
      reply([
        {
          type: "open_recipe",
          recipeId: r.id,
          servings: 2,
          reason: "Try this",
        },
      ]),
      buildAssistantContext(s),
    ),
  );
});
test("review and apply require confirmation, preserve fields and block replay", () => {
  const s = state(),
    before = structuredClone(s),
    c = buildAssistantContext(s);
  const review = reviewAssistantProposal(s, quantity, { context: c });
  assert.ok(Object.isFrozen(review.context.inventory[0]));
  assert.throws(() => applyAssistantProposal(s, review, {}));
  assert.throws(() =>
    applyAssistantProposal(s, structuredClone(review), { confirmed: true }),
  );
  const next = applyAssistantProposal(s, review, { confirmed: true });
  assert.equal(next.items.lot.qty, 3);
  assert.equal(next.items.lot.expiry, s.items.lot.expiry);
  assert.deepEqual(s, before);
  assert.throws(() =>
    applyAssistantProposal(next, review, { confirmed: true }),
  );
  assert.equal(
    applyAssistantProposal(s, review, { confirmed: true }).items.lot.qty,
    3,
  );
});
test("stale stock quantity, unit, ingredient link and cooking block review/apply atomically", () => {
  for (const mutate of [
    (s) => (s.items.lot.qty = 4),
    (s) => (s.items.lot.unit = "g"),
    (s) => (s.items.lot.ingredientId = recipe.ingredients[0].id),
    (s) =>
      (s.cooking = {
        id: "session",
        rid: recipe.id,
        servings: 2,
        phase: "prep",
        plannedUsage: [],
        step: 0,
      }),
  ]) {
    const s = state(),
      c = buildAssistantContext(s),
      r = reviewAssistantProposal(s, quantity, { context: c });
    mutate(s);
    const before = structuredClone(s);
    assert.throws(() => reviewAssistantProposal(s, quantity, { context: c }));
    assert.throws(() => applyAssistantProposal(s, r, { confirmed: true }));
    assert.deepEqual(s, before);
  }
});
test("open recipe applies selection only; quantity no-op rejected", () => {
  const s = state(),
    c = buildAssistantContext(s);
  assert.throws(() =>
    reviewAssistantProposal(s, { ...quantity, quantity: 2 }, { context: c }),
  );
  const r = reviewAssistantProposal(
    s,
    {
      type: "open_recipe",
      recipeId: recipe.id,
      servings: 4,
      reason: "Review recipe",
    },
    { context: c },
  );
  s.route = "kitchen";
  const next = applyAssistantProposal(s, r, { confirmed: true });
  assert.equal(next.recipe, recipe.id);
  assert.equal(next.servings[recipe.id], 4);
  assert.equal(next.route, "recipe");
  assert.equal(next.items, s.items);
});

test("context bounds known tools, household and cooking step", () => {
  const s = state();
  s.tools.legacyUnknown = true;
  const c = buildAssistantContext(s);
  assert.deepEqual(c.tools, ["knife"]);
  assert.throws(() => validateAssistantContext({ ...c, tools: ["invented"] }));
  assert.throws(() =>
    validateAssistantContext({
      ...c,
      profile: { ...c.profile, household: 13 },
    }),
  );
  const cooking = {
    id: "session",
    rid: recipe.id,
    servings: 2,
    phase: "prep",
    plannedUsage: [],
    step: recipe.steps.length,
  };
  assert.throws(() => validateAssistantContext({ ...c, cooking }));
  assert.doesNotThrow(() =>
    validateAssistantContext({
      ...c,
      cooking: { ...cooking, step: recipe.steps.length - 1 },
    }),
  );
});
test("failed persistence rollback permits same review retry; successful apply rejects replay", async () => {
  const { createStateStore } = await import("../web/state-store.js");
  let failWrite = true;
  const storage = {
    getItem: () => null,
    setItem: () => {
      if (failWrite) throw new Error("disk full");
    },
  };
  const store = createStateStore({
    data: { tools: [{ id: "knife", on: true }], recipes: COOK_RECIPES },
    storage,
  });
  let live = (await store.load()).state;
  live.items.lot = {
    ...state().items.lot,
    low: 0,
    category: "Other",
    estimated: false,
    expiryProvenance: "user",
  };
  const original = live,
    context = buildAssistantContext(live),
    review = reviewAssistantProposal(live, quantity, { context });
  const next = applyAssistantProposal(live, review, { confirmed: true });
  live = next;
  await assert.rejects(store.save(live));
  live = original;
  assert.equal(live.items.lot.qty, 2);
  failWrite = false;
  live = applyAssistantProposal(live, review, { confirmed: true });
  await store.save(live);
  assert.equal(live.items.lot.qty, 3);
  assert.throws(() =>
    applyAssistantProposal(live, review, { confirmed: true }),
  );
});
test("recipe changes reject stale replay while an already selected recipe can reopen safely", () => {
  const s = state(),
    context = buildAssistantContext(s);
  const review = reviewAssistantProposal(
    s,
    {
      type: "open_recipe",
      recipeId: recipe.id,
      servings: 4,
      reason: "Cook four portions",
    },
    { context },
  );
  const next = applyAssistantProposal(s, review, { confirmed: true });
  assert.throws(() =>
    applyAssistantProposal(next, review, { confirmed: true }),
  );
  const second = reviewAssistantProposal(
    next,
    {
      type: "open_recipe",
      recipeId: recipe.id,
      servings: 4,
      reason: "Already selected",
    },
    { context: buildAssistantContext(next) },
  );
  next.route = "assistant";
  const reopened = applyAssistantProposal(next, second, { confirmed: true });
  assert.equal(reopened.route, "recipe");
  assert.equal(reopened.servings[recipe.id], 4);
  assert.equal(reopened.items, next.items);
  assert.deepEqual(applyAssistantProposal(reopened, second, { confirmed: true }), reopened);
});

test("active cooking context retains frozen plan despite changed or deleted live lots", () => {
  const s = state();
  const planned = {
    id: "lot",
    name: "Planned food",
    qty: 1,
    unit: "pieces",
    ingredientId: recipe.ingredients[0].id,
    gramsPerUnit: 100,
  };
  s.cooking = {
    id: "session",
    rid: recipe.id,
    servings: 2,
    phase: "prep",
    step: 0,
    allocations: [planned],
  };
  const before = structuredClone(s.cooking.allocations);
  s.items.lot.qty = 0;
  s.items.lot.ingredientId = COOK_RECIPES.find(
    (x) => x.ingredients[0].id !== planned.ingredientId,
  ).ingredients[0].id;
  let c = buildAssistantContext(s);
  assert.deepEqual(c.cooking.plannedUsage, before);
  c.cooking.plannedUsage[0].qty = 99;
  assert.deepEqual(s.cooking.allocations, before);
  delete s.items.lot;
  c = buildAssistantContext(s);
  assert.deepEqual(c.cooking.plannedUsage, before);
  assert.throws(() =>
    normalizeAssistantResponse(
      reply([
        {
          type: "open_recipe",
          recipeId: recipe.id,
          servings: 2,
          reason: "Try",
        },
      ]),
      c,
    ),
  );
  for (const mutate of [
    (x) => x.cooking.plannedUsage.push({ ...planned }),
    (x) => (x.cooking.plannedUsage[0].qty = 0),
    (x) => (x.cooking.plannedUsage[0].ingredientId = "invented"),
    (x) => (x.cooking.plannedUsage[0].gramsPerUnit = -1),
  ]) {
    const invalid = structuredClone(c);
    mutate(invalid);
    assert.throws(() => validateAssistantContext(invalid));
  }
});

test("legacy valid state bounds profile and known servings without mutating original", () => {
  const s = state();
  s.profile.household = 100;
  s.servings = { oldRecipe: 100, [recipe.id]: 1.5 };
  s.items.lot.ingredientId = "oldIngredient";
  const before = structuredClone(s),
    c = buildAssistantContext(s);
  assert.equal(c.profile.household, 12);
  assert.deepEqual(c.servings, { [recipe.id]: 2 });
  assert.equal(c.inventory[0].ingredientId, null);
  assert.equal(c.inventory[0].qty, 2);
  assert.deepEqual(s, before);
});
