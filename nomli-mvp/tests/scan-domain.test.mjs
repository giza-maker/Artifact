import test from "node:test";
import assert from "node:assert/strict";
import {
  ScanDomainError,
  commitScanDraft,
  reviewScanDraft,
  validateScanDraft,
} from "../web/scan-domain.js";

const fingerprint = "a".repeat(64);
const baseState = () => ({
  version: 1,
  items: {},
  receipts: [],
  shopping: [],
});

function rawLine(overrides = {}) {
  return {
    lineId: "milk-line",
    name: "Milk",
    ingredientId: "milk",
    quantity: 1,
    unit: "l",
    lineTotalMinor: 4500,
    expiry: null,
    expiryProvenance: null,
    storage: "Fridge",
    ...overrides,
  };
}

function draft(overrides = {}) {
  return reviewScanDraft({
    version: 1,
    kind: "receipt",
    fingerprint,
    merchant: "Market",
    currency: "EGP",
    receiptDate: "2026-10-26",
    totalMinor: 4500,
    lines: [rawLine()],
    ...overrides,
  }, { catalog: ["milk"] });
}

test("untrusted draft keeps unknowns null and removes ungrounded ids", () => {
  const reviewed = reviewScanDraft({
    kind: "groceries",
    fingerprint,
    lines: [rawLine({ ingredientId: "invented", quantity: "1", unit: "carton", storage: "Counter", expiry: "2027-01-01", expiryProvenance: "estimated" })],
  });
  assert.equal(reviewed.lines[0].ingredientId, null);
  assert.equal(reviewed.lines[0].quantity, null);
  assert.equal(reviewed.lines[0].unit, null);
  assert.equal(reviewed.lines[0].storage, null);
  assert.equal(reviewed.lines[0].expiry, null);
  assert.equal(reviewed.lines[0].expiryProvenance, null);
});

test("model ambiguity warnings survive normalization", () => {
  const reviewed = reviewScanDraft({
    kind: "groceries",
    fingerprint,
    warnings: ["Photo is blurred."],
    lines: [rawLine({ warnings: ["Package size is ambiguous."] })],
  }, { catalog: ["milk"] });
  assert.deepEqual(reviewed.warnings, ["Photo is blurred."]);
  assert.deepEqual(reviewed.lines[0].warnings, ["Package size is ambiguous."]);
});

test("unknown stock fields and missing confirmation block all mutation", () => {
  const state = baseState();
  const uncertain = draft({ lines: [rawLine({ quantity: null })] });
  assert.throws(() => commitScanDraft(state, uncertain, { confirmed: true }), (error) => error.code === "REVIEW_REQUIRED");
  assert.throws(() => commitScanDraft(state, draft()), (error) => error.code === "REVIEW_REQUIRED");
  assert.deepEqual(state, baseState());
});

test("commit is immutable and fingerprint replay imports once", () => {
  const state = baseState();
  const first = commitScanDraft(state, draft(), { confirmed: true });
  assert.equal(Object.keys(state.items).length, 0);
  assert.equal(Object.keys(first.state.items).length, 1);
  assert.equal(first.state.receipts.length, 1);
  const replay = commitScanDraft(first.state, draft(), { confirmed: true });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state, first.state);
  assert.equal(replay.state.receipts.length, 1);
  const conflict = draft({ merchant: "Other market" });
  assert.throws(() => commitScanDraft(first.state, conflict, { confirmed: true }), (error) => error.code === "IDEMPOTENCY_CONFLICT");
  assert.equal(first.state.receipts.length, 1);
});

test("invalid later line makes import all-or-nothing", () => {
  const state = baseState();
  const invalid = draft({
    totalMinor: 9000,
    lines: [rawLine(), rawLine({ lineId: "bad-line", name: "Oil", ingredientId: null, unit: "ml", storage: null })],
  });
  assert.throws(() => commitScanDraft(state, invalid, { confirmed: true }), (error) => error.code === "REVIEW_REQUIRED");
  assert.deepEqual(state, baseState());
});

test("explicit merge converts compatible quantities and rejects dimensions", () => {
  const state = baseState();
  state.items.milk = { name: "Milk", qty: 500, unit: "ml", storage: "Fridge", expiry: null, expiryProvenance: null };
  const result = commitScanDraft(state, draft(), { confirmed: true, mergeTargets: { "milk-line": "milk" } });
  assert.equal(result.state.items.milk.qty, 1500);
  assert.equal(state.items.milk.qty, 500);
  const mass = draft({ fingerprint: "b".repeat(64), lines: [rawLine({ unit: "kg" })] });
  assert.throws(() => commitScanDraft(state, mass, { confirmed: true, mergeTargets: { "milk-line": "milk" } }), (error) => error.code === "INCOMPATIBLE_UNITS");
  assert.equal(state.items.milk.qty, 500);
});

test("money stays integer, currency preserved, unknown finance excluded", () => {
  const imported = commitScanDraft(baseState(), draft(), { confirmed: true });
  assert.equal(imported.financeExcluded, false);
  assert.equal(imported.state.receipts[0].currency, "EGP");
  assert.equal(imported.state.receipts[0].totalMinor, 4500);
  const unknown = draft({ fingerprint: "c".repeat(64), currency: null, totalMinor: null, lines: [rawLine({ lineTotalMinor: null })] });
  assert.throws(() => commitScanDraft(baseState(), unknown, { confirmed: true }), (error) => error.code === "FINANCE_REVIEW_REQUIRED");
  const excluded = commitScanDraft(baseState(), unknown, { confirmed: true, excludeFinance: true });
  assert.equal(excluded.financeExcluded, true);
  assert.equal(excluded.state.receipts[0].financeExcluded, true);
  assert.throws(() => validateScanDraft({ ...draft(), totalMinor: 1.5 }), (error) => error instanceof ScanDomainError);
});

test("receipt total includes additional tax and subtracts receipt discount", () => {
  const taxed = draft({
    fingerprint: "f".repeat(64),
    currency: "AED",
    totalMinor: 3962,
    taxMinor: 189,
    discountMinor: 0,
    lines: [rawLine({ lineTotalMinor: 3773 })],
  });
  const taxedResult = commitScanDraft(baseState(), taxed, { confirmed: true });
  assert.equal(taxedResult.financeExcluded, false);
  assert.equal(taxedResult.state.receipts[0].taxMinor, 189);
  assert.equal(taxedResult.state.receipts[0].discountMinor, 0);

  const discounted = draft({
    fingerprint: "1".repeat(64),
    totalMinor: 4300,
    taxMinor: 300,
    discountMinor: 500,
    lines: [rawLine({ lineTotalMinor: 4500 })],
  });
  assert.equal(commitScanDraft(baseState(), discounted, { confirmed: true }).financeExcluded, false);
});

test("unknown receipt adjustments require explicit finance exclusion", () => {
  const unknownTax = draft({ fingerprint: "2".repeat(64), taxMinor: null });
  assert.throws(
    () => commitScanDraft(baseState(), unknownTax, { confirmed: true }),
    (error) => error.code === "FINANCE_REVIEW_REQUIRED",
  );
  const excluded = commitScanDraft(baseState(), unknownTax, { confirmed: true, excludeFinance: true });
  assert.equal(excluded.financeExcluded, true);
  assert.equal(excluded.state.receipts[0].taxMinor, null);
});

test("unsupported currency requires review or explicit finance exclusion", () => {
  const unsupported = draft({ fingerprint: "e".repeat(64), currency: "ZZZ" });
  assert.throws(
    () => commitScanDraft(baseState(), unsupported, { confirmed: true }),
    (error) => error.code === "FINANCE_REVIEW_REQUIRED",
  );
  const result = commitScanDraft(baseState(), unsupported, { confirmed: true, excludeFinance: true });
  assert.equal(result.financeExcluded, true);
  assert.equal(result.state.receipts[0].currency, "ZZZ");
});

test("explicit exclusion skips non-food line", () => {
  const mixed = draft({
    totalMinor: 5000,
    lines: [rawLine(), rawLine({ lineId: "soap", name: "Soap", ingredientId: null, quantity: 1, unit: "count", storage: "Pantry", lineTotalMinor: 500 })],
  });
  assert.throws(() => commitScanDraft(baseState(), mixed, { confirmed: true, excludedLineIds: ["soap"] }), (error) => error.code === "TOTAL_MISMATCH");
  const result = commitScanDraft(baseState(), mixed, { confirmed: true, excludedLineIds: ["soap"], excludeFinance: true });
  assert.equal(Object.values(result.state.items).some((item) => item.name === "Soap"), false);
  assert.equal(result.state.receipts[0].lines.length, 1);
  assert.equal(result.financeExcluded, true);
});

test("grocery scan does not create phantom receipt", () => {
  const groceries = draft({ kind: "groceries", currency: null, totalMinor: null, lines: [rawLine({ lineTotalMinor: null })] });
  const result = commitScanDraft(baseState(), groceries, { confirmed: true });
  assert.equal(result.state.receipts.length, 0);
  assert.equal(result.state.scanImports.length, 1);
});

test("expiry scan updates existing item only, retains earliest expiry, adds no stock", () => {
  const state = baseState();
  state.items.milk = { name: "Milk", qty: 2, unit: "l", storage: "Fridge", expiry: "2026-11-01", expiryProvenance: "user" };
  const later = draft({ kind: "expiry", lines: [rawLine({ quantity: null, unit: null, storage: null, expiry: "2026-12-01", expiryProvenance: "printed" })] });
  const kept = commitScanDraft(state, later, { confirmed: true, mergeTargets: { "milk-line": "milk" } });
  assert.equal(kept.state.items.milk.qty, 2);
  assert.equal(kept.state.items.milk.expiry, "2026-11-01");
  assert.equal(kept.state.items.milk.expiryProvenance, "user");
  const earlier = draft({ fingerprint: "d".repeat(64), kind: "expiry", lines: [rawLine({ quantity: null, unit: null, storage: null, expiry: "2026-10-30", expiryProvenance: "printed" })] });
  const updated = commitScanDraft(state, earlier, { confirmed: true, mergeTargets: { "milk-line": "milk" } });
  assert.equal(updated.state.items.milk.qty, 2);
  assert.equal(updated.state.items.milk.expiry, "2026-10-30");
  assert.equal(updated.state.items.milk.expiryProvenance, "printed");
  assert.equal(updated.state.receipts.length, 0);
  assert.throws(() => commitScanDraft(state, earlier, { confirmed: true }), (error) => error.code === "REVIEW_REQUIRED");
});

test("merge enforces state quantity maximum", () => {
  const state = baseState();
  state.items.milk = { name: "Milk", qty: 1e9, unit: "ml", storage: "Fridge", expiry: null, expiryProvenance: null };
  assert.throws(
    () => commitScanDraft(state, draft(), { confirmed: true, mergeTargets: { "milk-line": "milk" } }),
    (error) => error.code === "INVALID_QUANTITY",
  );
  assert.equal(state.items.milk.qty, 1e9);
});

test("persisted review signatures are always exactly 64 hex characters", () => {
  for (let index = 0; index < 256; index += 1) {
    const reviewed = draft({
      fingerprint: index.toString(16).padStart(64, "0"),
      merchant: `Market ${index} ${"x".repeat(index % 37)}`,
      lines: [rawLine({ name: `Milk ${index}`, quantity: index + 1 })],
    });
    const result = commitScanDraft(baseState(), reviewed, { confirmed: true });
    assert.match(result.state.scanImports[0].signature, /^[a-f0-9]{64}$/);
  }
});

test("import history cap blocks new imports but permits replay", () => {
  const state = baseState();
  state.scanImports = Array.from({ length: 2000 }, (_, index) => ({
    fingerprint: index.toString(16).padStart(64, "0"),
    financeExcluded: true,
  }));
  const existing = draft({ fingerprint: state.scanImports[0].fingerprint });
  assert.equal(commitScanDraft(state, existing, { confirmed: true }).replayed, true);
  const fresh = draft({ fingerprint: "f".repeat(63) + "e" });
  assert.throws(
    () => commitScanDraft(state, fresh, { confirmed: true }),
    (error) => error.code === "EXPORT_LIMIT" && /Export or archive/.test(error.message),
  );
  assert.equal(state.receipts.length, 0);
});

