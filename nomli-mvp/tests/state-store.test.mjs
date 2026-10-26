import test from "node:test";
import assert from "node:assert/strict";
import { createStateStore } from "../web/state-store.js";

const data = { tools: [{ id: "knife", on: true }], recipes: [{ id: "salad" }] };
const memory = (entries = {}) => {
  const values = new Map(Object.entries(entries));
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
};
const state = (items = {}) => ({
  version: 1,
  route: "kitchen",
  items,
  tools: { knife: true },
  sort: "expiry",
  storage: "All",
  servings: {},
  swaps: {},
  matchOnly: false,
  recipe: "salad",
  cooking: null,
  meals: [],
  shopping: [],
  receipts: [],
  budget: 160000,
  profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
  chat: [],
});
const item = (overrides = {}) => ({
  name: "Rice",
  qty: 1.25,
  unit: "kg",
  storage: "Pantry",
  expiry: null,
  expiryProvenance: "estimated",
  estimated: true,
  low: 0.25,
  category: "Grains",
  ...overrides,
});

test("fresh install is empty, without fake activity", async () => {
  const { state: loaded } = await createStateStore({
    data,
    storage: memory(),
  }).load();
  assert.deepEqual(loaded.items, {});
  for (const field of ["meals", "shopping", "receipts", "chat"])
    assert.deepEqual(loaded[field], []);
  assert.deepEqual(loaded.tools, { knife: true });
});

test("legacy migration retains custom items and preferences", async () => {
  const legacy = state({
    "custom-rice": item({ printedExpiry: "2027-01-02" }),
  });
  legacy.sort = "name";
  legacy.profile.household = 4;
  const storage = memory({ "nomli-kitchen-mvp-v1": JSON.stringify(legacy) });
  const result = await createStateStore({ data, storage }).load();
  assert.equal(result.state.items["custom-rice"].printedExpiry, "2027-01-02");
  assert.equal(result.state.profile.household, 4);
  assert.equal(
    JSON.parse(storage.values.get("nomli-kitchen-state-v1")).sort,
    "name",
  );
});

test("native Preferences is source of truth", async () => {
  const nativeState = state({ native: item({ name: "Native" }) });
  const storage = memory({
    "nomli-kitchen-state-v1": JSON.stringify(state({ web: item() })),
  });
  const native = {
    isNative: true,
    loadDraft: async () => nativeState,
    saveDraft: async () => {},
  };
  const result = await createStateStore({ data, native, storage }).load();
  assert.deepEqual(Object.keys(result.state.items), ["native"]);
});

test("corrupt store stays untouched and never seeds sample stock", async () => {
  const storage = memory({ "nomli-kitchen-state-v1": "{broken" });
  const store = createStateStore({ data, storage });
  const result = await store.load();
  assert.deepEqual(result.state.items, {});
  assert.equal(result.recoveryRequired, true);
  assert.match(result.notice, /left unchanged/);
  assert.equal(storage.values.get("nomli-kitchen-state-v1"), "{broken");
  await assert.rejects(store.save(result.state), /Confirm reset/);
  assert.equal(storage.values.get("nomli-kitchen-state-v1"), "{broken");
  await store.replace(result.state);
  assert.deepEqual(
    JSON.parse(storage.values.get("nomli-kitchen-state-v1")).items,
    {},
  );
  await store.save(result.state);
});

test("failed writes reject", async () => {
  const storage = {
    getItem: () => null,
    setItem: () => {
      throw new Error("disk full");
    },
  };
  await assert.rejects(
    createStateStore({ data, storage }).save(state()),
    /disk full/,
  );
});

test("writes serialize and snapshot caller state", async () => {
  const events = [];
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  const native = {
    isNative: true,
    loadDraft: async () => null,
    saveDraft: async (_key, value) => {
      if (!events.length) await gate;
      events.push(value.items.x.qty);
    },
  };
  const store = createStateStore({ data, native });
  const value = state({ x: item({ qty: 1 }) });
  const first = store.save(value);
  value.items.x.qty = 2;
  const second = store.save(value);
  value.items.x.qty = 99;
  release();
  await Promise.all([first, second]);
  assert.deepEqual(events, [1, 2]);
});

test("backup roundtrip preserves fractional/base units, unknown expiry, metadata", () => {
  const original = state({
    rice: item(),
    herbs: item({
      name: "Herbs",
      qty: 0.5,
      unit: "bunches",
      locationNote: "top shelf",
    }),
  });
  const store = createStateStore({
    data,
    storage: memory(),
    now: () => new Date("2026-10-26T00:00:00Z"),
  });
  assert.deepEqual(store.parseBackup(store.exportBackup(original)), original);
});

test("bad, oversized, polluted, invalid-unit and invalid-date backups reject", () => {
  const store = createStateStore({ data, storage: memory() });
  assert.throws(() => store.parseBackup("{"), /valid JSON/);
  assert.throws(
    () => store.parseBackup("x".repeat(1024 * 1024 + 1)),
    /size limit/,
  );
  const polluted = store
    .exportBackup(state())
    .replace('"items":{}', '"items":{"__proto__":{"name":"x"}}');
  assert.throws(() => store.parseBackup(polluted), /forbidden property/);
  assert.throws(
    () => store.exportBackup(state({ x: item({ unit: "cups" }) })),
    /unsupported unit/,
  );
  assert.throws(
    () => store.exportBackup(state({ x: item({ expiry: "2026-02-30" }) })),
    /invalid expiry/,
  );
});

test("nested consumer data is validated before import", () => {
  const store = createStateStore({ data, storage: memory() });
  const invalids = [
    Object.assign(state(), {
      shopping: [{ id: "rice", reason: 4, got: false }],
    }),
    Object.assign(state(), {
      receipts: [
        {
          source: "x",
          name: "X",
          lines: [{ id: "rice", name: "Rice", qty: 1, cents: 2.5 }],
        },
      ],
    }),
    Object.assign(state(), { chat: [{ q: "hello", a: null }] }),
    Object.assign(state(), {
      meals: [{ id: "m1", rid: "salad", date: "bad", used: [] }],
    }),
    Object.assign(state(), { tools: { knife: "yes" } }),
    Object.assign(state(), { servings: { salad: Infinity } }),
    Object.assign(state(), { swaps: { "salad:rice": 4 } }),
    Object.assign(state(), {
      cooking: { rid: "salad", step: -1, seconds: 10, running: false },
    }),
  ];
  for (const candidate of invalids)
    assert.throws(() => store.exportBackup(candidate));
});

test("oversized and excessive quantities reject for persisted state", async () => {
  const huge = state({ x: item({ qty: 1e9 + 1 }) });
  await assert.rejects(
    createStateStore({ data, storage: memory() }).save(huge),
    /no greater/,
  );
  const storage = memory({
    "nomli-kitchen-state-v1": JSON.stringify({
      ...state(),
      padding: "x".repeat(1024 * 1024),
    }),
  });
  const result = await createStateStore({ data, storage }).load();
  assert.equal(result.recoveryRequired, true);
  assert.match(result.notice, /size limit/);
});

test("All is filter-only, never valid item storage", () => {
  const store = createStateStore({ data, storage: memory() });
  assert.throws(
    () => store.exportBackup(state({ x: item({ storage: "All" }) })),
    /storage location/,
  );
});

test("render-consumed optional fields reject unsafe types", () => {
  const store = createStateStore({ data, storage: memory() });
  assert.throws(
    () => store.exportBackup(Object.assign(state(), { search: 1 })),
    /search is invalid/,
  );
  assert.throws(
    () => store.exportBackup(state({ x: item({ low: "1" }) })),
    /low-stock/,
  );
  for (const field of ["category", "photo", "locationNote"])
    assert.throws(
      () => store.exportBackup(state({ x: item({ [field]: 1 }) })),
      new RegExp(field),
    );
  const valid = Object.assign(
    state({ x: item({ category: "Grains", photo: "rice.webp" }) }),
    { search: "rice" },
  );
  assert.deepEqual(store.parseBackup(store.exportBackup(valid)), valid);
});
