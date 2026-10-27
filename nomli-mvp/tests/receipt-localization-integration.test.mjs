import test from "node:test";
import assert from "node:assert/strict";
import { parseScanQuantity } from "../web/scan-review-fields.js";
import { parseMinorAmount } from "../web/scan-money.js";
import { commitScanDraft, reviewScanDraft } from "../web/scan-domain.js";
import { createStateStore } from "../web/state-store.js";

const data = {
  tools: [{ id: "knife", on: true }],
  recipes: [{ id: "salad", steps: [] }],
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

function memory() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

function reviewedReceipt({ fingerprint, currency, total, lines }) {
  return reviewScanDraft({
    kind: "receipt",
    fingerprint,
    merchant: "سوق Market",
    currency,
    receiptDate: "2026-10-28",
    totalMinor: parseMinorAmount(total, currency),
    lines: lines.map((line, index) => ({
      lineId: `line-${index + 1}`,
      name: line.name,
      ingredientId: null,
      quantity: parseScanQuantity(line.quantity),
      unit: line.unit,
      lineTotalMinor: parseMinorAmount(line.total, currency),
      expiry: null,
      expiryProvenance: null,
      storage: line.storage ?? "Pantry",
    })),
  });
}

test("localized reviewed SAR receipt commits atomically, persists, and replays once across digit glyphs", async () => {
  const fingerprint = "a".repeat(64);
  const arabic = reviewedReceipt({
    fingerprint,
    currency: "SAR",
    total: "٢٣٫٠٠",
    lines: [
      { name: "طماطم Tomatoes", quantity: "١٫٥", unit: "kg", total: "١٢٫٠٠" },
      { name: "Fresh milk حليب 1L", quantity: "٢", unit: "count", total: "١١٫٠٠", storage: "Fridge" },
    ],
  });
  const original = baseState();
  const committed = commitScanDraft(original, arabic, { confirmed: true });

  assert.deepEqual(original, baseState());
  assert.equal(committed.replayed, false);
  assert.equal(Object.keys(committed.state.items).length, 2);
  assert.equal(committed.state.receipts.length, 1);
  assert.equal(committed.state.receipts[0].totalMinor, 2300);
  assert.deepEqual(committed.state.receipts[0].lines.map(({ qty, cents }) => ({ qty, cents })), [
    { qty: 1.5, cents: 1200 },
    { qty: 2, cents: 1100 },
  ]);

  const storage = memory();
  const store = createStateStore({ data, storage });
  await store.save(committed.state);
  const loaded = (await store.load()).state;
  const alternateGlyphs = reviewedReceipt({
    fingerprint,
    currency: "SAR",
    total: "23.00",
    lines: [
      { name: "طماطم Tomatoes", quantity: "۱.۵", unit: "kg", total: "12.00" },
      { name: "Fresh milk حليب 1L", quantity: "2", unit: "count", total: "۱۱.۰۰", storage: "Fridge" },
    ],
  });
  const replay = commitScanDraft(loaded, alternateGlyphs, { confirmed: true });

  assert.equal(replay.replayed, true);
  assert.equal(replay.state, loaded);
  assert.equal(Object.keys(replay.state.items).length, 2);
  assert.equal(replay.state.receipts.length, 1);
  assert.equal(replay.state.receipts[0].totalMinor, 2300);
});

test("invalid localized grouping or currency precision blocks before any commit", () => {
  const state = baseState();
  for (const [currency, total] of [["SAR", "١٢٬٣٤٫٥٦"], ["SAR", "23.001"], ["JPY", "٢٣٫٠"]]) {
    assert.throws(() => reviewedReceipt({
      fingerprint: "b".repeat(64),
      currency,
      total,
      lines: [{ name: "Item", quantity: "١", unit: "count", total }],
    }), TypeError);
  }
  assert.deepEqual(state, baseState());
});

test("KWD three-decimal and JPY zero-decimal receipts retain exact minor totals", () => {
  for (const sample of [
    { fingerprint: "c".repeat(64), currency: "KWD", total: "۳٫۲۵۷", expected: 3257 },
    { fingerprint: "d".repeat(64), currency: "JPY", total: "٢٣٠٠", expected: 2300 },
  ]) {
    const draft = reviewedReceipt({
      ...sample,
      lines: [{ name: `Exact ${sample.currency}`, quantity: "١", unit: "count", total: sample.total }],
    });
    const result = commitScanDraft(baseState(), draft, { confirmed: true });
    assert.equal(result.state.receipts[0].totalMinor, sample.expected);
    assert.equal(result.state.receipts[0].lines[0].cents, sample.expected);
  }
});
