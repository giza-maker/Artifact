import test from "node:test";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";

test("count requirements reserve converted pieces before mass demand in either recipe order", () => {
  const s = state();
  s.items = {
    piece: {
      name: "Tomato",
      ingredientId: "tomato",
      qty: 1,
      unit: "pieces",
      gramsPerUnit: 100,
      expiry: "2026-10-27",
    },
    mass: {
      name: "Tomato",
      ingredientId: "tomato",
      qty: 100,
      unit: "g",
      expiry: "2026-10-28",
    },
  };
  const lines = [
    { id: "tomato", qty: 100, unit: "g" },
    { id: "tomato", qty: 1, unit: "pieces" },
  ];
  for (const ingredients of [lines, [...lines].reverse()]) {
    const result = assess(s, { ...recipe, ingredients });
    assert.equal(result.stockReady, true);
    assert.deepEqual(
      result.requirements.map((x) => x.unit),
      ingredients.map((x) => x.unit),
    );
    assert.deepEqual(
      result.requirements
        .find((x) => x.unit === "g")
        .allocations.map((x) => x.id),
      ["mass"],
    );
    assert.deepEqual(
      result.requirements
        .find((x) => x.unit === "pieces")
        .allocations.map((x) => x.id),
      ["piece"],
    );
  }
});

test("resumed session rejects positive use after live expiry, allowing zero use atomically", () => {
  const s = state();
  s.items.a.expiry = "2026-10-27";
  const session = review(s),
    before = structuredClone(session);
  assert.throws(
    () =>
      commitCookedMeal(session, {
        sessionId: "s",
        used: [{ id: "a", qty: 1 }],
        confirmed: true,
        now: "2026-10-28",
      }),
    /expiry date has passed/,
  );
  assert.deepEqual(session, before);
  const result = commitCookedMeal(session, {
    sessionId: "s",
    used: [{ id: "a", qty: 0 }],
    confirmed: true,
    now: "2026-10-28",
  });
  assert.equal(result.meal.date, "2026-10-28");
  assert.equal(result.state.items.a.qty, 6);
});

test("serving, quantity, unit and ID bounds reject invalid inputs", () => {
  const s = state();
  for (const servings of [0, 1.5, 13, Infinity, "2"]) {
    assert.throws(() => assess(s, recipe, { servings }));
    assert.throws(() =>
      startCookingSession(s, recipe, { servings, sessionId: "s", now }),
    );
  }
  for (const ingredient of [
    { id: "egg", qty: 0, unit: "count" },
    { id: "egg", qty: 1e308, unit: "count" },
    { id: "egg", qty: 1, unit: "bag" },
    { id: {}, qty: 1, unit: "count" },
  ])
    assert.throws(() => assess(s, { ...recipe, ingredients: [ingredient] }));
  assert.throws(() =>
    assess(s, {
      ...recipe,
      ingredients: [
        { id: "egg", qty: 6e8, unit: "count" },
        { id: "egg", qty: 6e8, unit: "count" },
      ],
    }),
  );
  for (const sessionId of ["", "bad id", "x".repeat(129), {}, null]) {
    assert.throws(() => startCookingSession(s, recipe, { sessionId, now }));
    assert.throws(() =>
      commitCookedMeal(s, { sessionId, used: [], confirmed: true, now }),
    );
  }
  assert.throws(() =>
    startCookingSession({ ...s, meals: [{ id: "s" }] }, recipe, {
      sessionId: "s",
      now,
    }),
  );
});

test("local calendar day handles UTC midnight boundary; fixed dates stay fixed", () => {
  const moduleUrl = new URL("../web/cook-domain.js", import.meta.url).href;
  const source = `import { assessRecipe, startCookingSession, commitCookedMeal } from ${JSON.stringify(moduleUrl)};
    const state = ${JSON.stringify(state())}; state.items.a.expiry = '2026-10-26';
    const recipe = ${JSON.stringify(recipe)};
    const now = '2026-10-27T01:00:00Z';
    const assessed = assessRecipe(state, recipe, { now });
    const session = startCookingSession(state, recipe, { sessionId: 's', now });
    session.cooking.phase = 'review';
    const result = commitCookedMeal(session, { sessionId: 's', used: [{id:'a',qty:1}], confirmed:true, now });
    console.log(JSON.stringify({ready:assessed.stockReady,date:result.meal.date,startedAt:session.cooking.startedAt,fixed:assessRecipe(state,recipe,{now:'2026-10-27'}).stockReady}));`;
  const result = JSON.parse(
    execFileSync(process.execPath, ["--input-type=module", "-e", source], {
      env: { ...process.env, TZ: "America/Los_Angeles" },
      encoding: "utf8",
    }),
  );
  assert.deepEqual(result, {
    ready: true,
    date: "2026-10-26",
    startedAt: "2026-10-27T01:00:00.000Z",
    fixed: false,
  });
});
import {
  assessRecipe,
  startCookingSession,
  commitCookedMeal,
  undoCookedMeal,
  normalizeCookUnit,
} from "../web/cook-domain.js";
const now = "2026-10-27T12:00:00Z";
const recipe = {
  id: "r",
  name: "Meal",
  servings: 2,
  ingredients: [{ id: "egg", qty: 4, unit: "count" }],
  requiredTools: ["pan"],
  allergens: [],
};
const state = () => ({
  items: {
    a: {
      name: "Egg",
      ingredientId: "egg",
      qty: 6,
      unit: "pieces",
      expiry: "2026-10-28",
    },
  },
  profile: { allergies: [] },
  tools: { pan: true },
  meals: [],
  cooking: null,
});
const assess = (s, r = recipe, extra = {}) =>
  assessRecipe(s, r, { now, ...extra });
const review = (s = state()) => {
  const result = startCookingSession(s, recipe, { sessionId: "s", now });
  return { ...result, cooking: { ...result.cooking, phase: "review" } };
};
const commit = (s = review(), qty = 3) =>
  commitCookedMeal(s, {
    sessionId: "s",
    used: [{ id: "a", qty }],
    confirmed: true,
    now,
  });
test("unit aliases, mass and volume conversions; no guessed conversions", () => {
  assert.equal(normalizeCookUnit("piece"), "pieces");
  for (const [stock, unit, qty, ready] of [
    ["kg", "g", 500, true],
    ["l", "ml", 500, true],
    ["g", "ml", 1, false],
    ["slice", "count", 1, false],
  ]) {
    const s = state();
    s.items.a.unit = stock;
    s.items.a.qty = 1;
    assert.equal(
      assess(s, { ...recipe, ingredients: [{ id: "egg", qty, unit }] })
        .stockReady,
      ready,
    );
  }
});
test("explicit linked count weight bridges mass only", () => {
  const s = state();
  const r = { ...recipe, ingredients: [{ id: "egg", qty: 200, unit: "g" }] };
  assert.equal(assess(s, r).stockReady, false);
  s.items.a.gramsPerUnit = 50;
  assert.equal(assess(s, r).requirements[0].allocations[0].qty, 4);
  delete s.items.a.ingredientId;
  assert.equal(assess(s, r).stockReady, false);
});
test("FEFO splits lots and aggregates repeated ingredients without overallocating", () => {
  const s = state();
  s.items.a.qty = 3;
  s.items.b = { ...s.items.a, qty: 2, expiry: "2026-10-27" };
  const r = {
    ...recipe,
    ingredients: [
      { id: "egg", qty: 3, unit: "count" },
      { id: "egg", qty: 3, unit: "count" },
    ],
  };
  const a = assess(s, r);
  assert.equal(a.requirements.length, 1);
  assert.equal(a.missing[0].missing, 1);
  assert.deepEqual(
    a.requirements[0].allocations.map((x) => [x.id, x.qty]),
    [
      ["b", 2],
      ["a", 3],
    ],
  );
});
test("expiry strictly before today excluded; tools and catalog allergies separate", () => {
  const s = state();
  s.items.a.expiry = "2026-10-26";
  assert.equal(assess(s).blockedItems.length, 1);
  s.items.a.expiry = "2026-10-27";
  s.tools = {};
  s.profile.allergies = ["egg"];
  const a = assess(s, recipe, {
    ingredients: [{ id: "egg", dietary: { allergenTags: ["egg"] } }],
  });
  assert.equal(a.stockReady, true);
  assert.equal(a.ready, false);
  assert.deepEqual(a.excluded, ["egg"]);
  assert.deepEqual(a.missingTools, ["pan"]);
});
test("session freezes servings and allocations; no stock mutation; rejects insufficient stock", () => {
  const s = state(),
    before = structuredClone(s);
  const next = startCookingSession(s, recipe, {
    sessionId: "s",
    servings: 3,
    now,
  });
  assert.equal(next.cooking.servings, 3);
  assert.equal(next.cooking.allocations[0].qty, 6);
  assert.deepEqual(s, before);
  assert.throws(() =>
    startCookingSession(s, recipe, { sessionId: "s", servings: 4, now }),
  );
  assert.deepEqual(s, before);
  assert.throws(() =>
    startCookingSession(next, recipe, { sessionId: "x", now }),
  );
});
test("actual zero use accepted; commit replay permanent even after undo; conflict rejected", () => {
  const result = commit(review(), 0);
  assert.equal(result.state.items.a.qty, 6);
  assert.equal(commit(result.state, 0).replayed, true);
  assert.throws(() => commit(result.state, 1));
  const undone = undoCookedMeal(result.state, "s", { confirmed: true });
  assert.equal(commit(undone.state, 0).replayed, true);
});
test("stale identity, missing item and invalid review fail atomically", () => {
  for (const change of [
    (s) => (s.items.a.ingredientId = "other"),
    (s) => (s.items.a.unit = "g"),
    (s) => (s.items.a.gramsPerUnit = 50),
    (s) => delete s.items.a,
    (s) => (s.items.a.qty = 1),
    (s) => (s.cooking.phase = "prep"),
  ]) {
    const s = review();
    change(s);
    const before = structuredClone(s);
    assert.throws(() => commit(s));
    assert.deepEqual(s, before);
  }
  const s = review();
  for (const used of [
    [],
    [
      { id: "a", qty: 1 },
      { id: "a", qty: 1 },
    ],
    [{ id: "b", qty: 1 }],
    [{ id: "a", qty: -1 }],
    [{ id: "a", qty: Infinity }],
  ])
    assert.throws(() =>
      commitCookedMeal(s, { sessionId: "s", used, confirmed: true, now }),
    );
  assert.throws(() =>
    commitCookedMeal(s, { sessionId: "s", used: [{ id: "a", qty: 1 }], now }),
  );
});
test("undo preserves topups and other deltas; repeated undo adds nothing", () => {
  const result = commit();
  result.state.items.a = { ...result.state.items.a, qty: 10 };
  const undone = undoCookedMeal(result.state, "s", { confirmed: true });
  assert.equal(undone.state.items.a.qty, 13);
  assert.equal(
    undoCookedMeal(undone.state, "s", { confirmed: true }).state.items.a.qty,
    13,
  );
});
test("undo failures atomic; legacy meals unsupported; meal cap never evicts", () => {
  const s = commit().state;
  s.items.a.unit = "kg";
  const before = structuredClone(s);
  assert.throws(() => undoCookedMeal(s, "s", { confirmed: true }));
  assert.deepEqual(s, before);
  assert.throws(() =>
    undoCookedMeal({ ...state(), meals: [{ id: "legacy" }] }, "legacy", {
      confirmed: true,
    }),
  );
  const full = review();
  full.meals = Array.from({ length: 2000 }, (_, id) => ({ id }));
  assert.throws(() => commit(full));
  assert.equal(full.meals.length, 2000);
});
