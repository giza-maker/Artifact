import test from "node:test";
import assert from "node:assert/strict";
import { commitScanDraft, reviewScanDraft } from "../web/scan-domain.js";
import { createStateStore } from "../web/state-store.js";

const fingerprint = "a".repeat(64);
const data = {
  tools: [{ id: "knife", on: true }],
  recipes: [{ id: "salad", steps: [] }],
};
const memory = (entries = {}) => {
  const values = new Map(Object.entries(entries));
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
};
const baseState = () => ({
  version: 1,
  route: "kitchen",
  items: {},
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
const draft = (lineCount = 1) =>
  reviewScanDraft({
    kind: "receipt",
    fingerprint,
    merchant: "Market",
    currency: "EGP",
    receiptDate: "2026-10-26",
    totalMinor: lineCount * 100,
    lines: Array.from({ length: lineCount }, (_, index) => ({
      lineId: `line-${index + 1}`,
      name: `Item ${index + 1}`,
      ingredientId: null,
      quantity: 1,
      unit: "count",
      lineTotalMinor: 100,
      expiry: null,
      expiryProvenance: null,
      storage: "Pantry",
    })),
  });

test("committed scan survives reload and still blocks duplicate import", async () => {
  const storage = memory();
  const store = createStateStore({ data, storage });
  const committed = commitScanDraft(baseState(), draft(), { confirmed: true });
  await store.save(committed.state);
  const loaded = (await store.load()).state;
  const replay = commitScanDraft(loaded, draft(), { confirmed: true });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state.receipts.length, 1);
  assert.equal(Object.keys(replay.state.items).length, 1);
});

test("reviewed category survives save, reload, and backup", async () => {
  const storage = memory();
  const store = createStateStore({ data, storage });
  const reviewed = draft();
  reviewed.lines[0].categoryId = "other";
  const committed = commitScanDraft(baseState(), reviewed, { confirmed: true }).state;
  await store.save(committed);
  const loaded = (await store.load()).state;
  const itemId = Object.keys(loaded.items)[0];
  assert.equal(loaded.items[itemId].categoryId, "other");
  assert.equal(loaded.receipts[0].lines[0].categoryId, "other");
  const restored = store.parseBackup(store.exportBackup(loaded));
  assert.equal(restored.items[itemId].categoryId, "other");
  assert.equal(restored.receipts[0].lines[0].categoryId, "other");
});

test("501st scan can merge existing stock, persist, and replay once", async () => {
  const storage = memory();
  const store = createStateStore({ data, storage });
  const initial = baseState();
  initial.items.existing = {
    name: "Item 1",
    qty: 2,
    unit: "count",
    storage: "Pantry",
    expiry: null,
    expiryProvenance: null,
  };
  initial.scanImports = Array.from({ length: 500 }, (_, index) => ({
    fingerprint: index.toString(16).padStart(64, "0"),
    signature: (index + 1).toString(16).padStart(64, "0"),
    financeExcluded: false,
  }));
  const nextDraft = draft();
  nextDraft.fingerprint = "f".repeat(64);
  const committed = commitScanDraft(initial, nextDraft, {
    confirmed: true,
    mergeTargets: { "line-1": "existing" },
  });
  assert.equal(committed.state.scanImports.length, 501);
  assert.equal(Object.keys(committed.state.items).length, 1);
  assert.equal(committed.state.items.existing.qty, 3);

  await store.save(committed.state);
  const loaded = (await store.load()).state;
  assert.equal(loaded.scanImports.length, 501);
  const replay = commitScanDraft(loaded, nextDraft, {
    confirmed: true,
    mergeTargets: { "line-1": "existing" },
  });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state.items.existing.qty, 3);
  assert.equal(replay.state.receipts.length, 1);
});

test("scan receipt metadata and import records are validated", () => {
  const store = createStateStore({ data, storage: memory() });
  const valid = commitScanDraft(baseState(), draft(), {
    confirmed: true,
  }).state;
  assert.doesNotThrow(() => store.exportBackup(valid));
  for (const currency of ["egp", "EURO", 123]) {
    const candidate = structuredClone(valid);
    candidate.receipts[0].currency = currency;
    assert.throws(() => store.exportBackup(candidate), /currency/i);
  }
  for (const field of ["fingerprint", "signature"]) {
    const candidate = structuredClone(valid);
    candidate.scanImports[0][field] = "bad";
    assert.throws(() => store.exportBackup(candidate), new RegExp(field, "i"));
  }
  const unknownFlag = structuredClone(valid);
  unknownFlag.scanImports[0].financeExcluded = "no";
  assert.throws(() => store.exportBackup(unknownFlag), /finance/i);
  const unknownField = structuredClone(valid);
  unknownField.scanImports[0].device = "local";
  assert.throws(() => store.exportBackup(unknownField), /unknown field/i);
  const invalidDate = structuredClone(valid);
  invalidDate.receipts[0].receiptDate = "2026-02-30";
  assert.throws(() => store.exportBackup(invalidDate), /date/i);
  const invalidTotal = structuredClone(valid);
  invalidTotal.receipts[0].totalMinor = -1;
  assert.throws(() => store.exportBackup(invalidTotal), /total/i);
  const invalidCents = structuredClone(valid);
  invalidCents.receipts[0].lines[0].cents = -1;
  assert.throws(() => store.exportBackup(invalidCents), /amount/i);
});

test("only finance-excluded scan receipts may persist unknown line amount", () => {
  const store = createStateStore({ data, storage: memory() });
  const reviewed = draft();
  reviewed.totalMinor = null;
  reviewed.lines[0].lineTotalMinor = null;
  const valid = commitScanDraft(baseState(), reviewed, { confirmed: true, excludeFinance: true }).state;
  assert.equal(valid.receipts[0].lines[0].cents, null);
  assert.doesNotThrow(() => store.parseBackup(store.exportBackup(valid)));

  for (const mutate of [
    (receipt) => { receipt.source = "manual"; },
    (receipt) => { receipt.financeExcluded = false; },
  ]) {
    const invalid = structuredClone(valid);
    mutate(invalid.receipts[0]);
    assert.throws(() => store.exportBackup(invalid), /amount/i);
  }
});

test("M1 state and backup remain accepted while malformed scan data rejects", async () => {
  const storage = memory({
    "nomli-kitchen-state-v1": JSON.stringify(baseState()),
  });
  const store = createStateStore({ data, storage });
  assert.deepEqual((await store.load()).state.scanImports, []);
  const oldBackup = JSON.stringify({
    format: "nomli-backup",
    version: 1,
    exportedAt: "2026-10-26T00:00:00.000Z",
    state: baseState(),
  });
  assert.deepEqual(store.parseBackup(oldBackup), baseState());
  const malformed = JSON.parse(oldBackup);
  malformed.state.scanImports = [
    { fingerprint, signature: "b".repeat(64), financeExcluded: false },
    { fingerprint: "x" },
  ];
  assert.throws(
    () => store.parseBackup(JSON.stringify(malformed)),
    /fingerprint|signature|finance/i,
  );
});

test("large compact receipt and secret-like state fields are handled safely", () => {
  const store = createStateStore({ data, storage: memory() });
  const committed = commitScanDraft(baseState(), draft(35), {
    confirmed: true,
  }).state;
  assert.doesNotThrow(() => store.parseBackup(store.exportBackup(committed)));
  assert.equal(committed.scanImports[0].signature.length, 64);
  for (const field of ["scanConfig", "deviceToken", "apiKey"]) {
    const candidate = structuredClone(committed);
    candidate[field] = "secret";
    assert.throws(
      () => store.exportBackup(candidate),
      /credential|secret|configuration/i,
    );
  }
});
