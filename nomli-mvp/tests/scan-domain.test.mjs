import test from "node:test";
import assert from "node:assert/strict";
import {
  ScanDomainError,
  normalizePhotoRegion,
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

test("unknown excluded scan price stays null while explicit zero stays zero", () => {
  const unknown = draft({
    fingerprint: "7".repeat(64),
    totalMinor: null,
    lines: [rawLine({ lineTotalMinor: null })],
  });
  const unknownResult = commitScanDraft(baseState(), unknown, { confirmed: true, excludeFinance: true });
  assert.equal(unknownResult.state.receipts[0].lines[0].cents, null);

  const free = draft({
    fingerprint: "8".repeat(64),
    totalMinor: 0,
    lines: [rawLine({ lineTotalMinor: 0 })],
  });
  assert.equal(commitScanDraft(baseState(), free, { confirmed: true }).state.receipts[0].lines[0].cents, 0);
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


test("inherited merge mappings never select a stock target", () => {
  for (const lineId of ["constructor", "toString", "__proto__"]) {
    const reviewed = draft({ kind: "groceries", lines: [rawLine({ lineId })] });
    const result = commitScanDraft(baseState(), reviewed, { confirmed: true });
    assert.equal(result.importedItemIds.length, 1);
    assert.equal(result.state.items[result.importedItemIds[0]].qty, 1);
  }
});

test("expiry merge rejects inherited stock properties without prototype mutation", () => {
  const state = baseState();
  const before = structuredClone(state);
  const reviewed = draft({ kind: "expiry", lines: [rawLine({ quantity: null, unit: null, storage: null, expiry: "2026-12-01", expiryProvenance: "printed" })] });
  const descriptors = Object.getOwnPropertyDescriptors(Object.prototype);
  try {
    assert.throws(
      () => commitScanDraft(state, reviewed, { confirmed: true, mergeTargets: { "milk-line": "__proto__" } }),
      (error) => error.code === "INVALID_MERGE_TARGET",
    );
    assert.deepEqual(Object.getOwnPropertyDescriptors(Object.prototype), descriptors);
    assert.deepEqual(state, before);
  } finally {
    for (const key of Object.getOwnPropertyNames(Object.prototype)) {
      if (!Object.hasOwn(descriptors, key)) delete Object.prototype[key];
    }
  }
});

test("repeated scan review keeps bounded diagnostics unique and preserves provider warnings", () => {
  const providerWarnings = Array.from({ length: 100 }, (_, index) => `Provider warning ${index}`);
  let reviewed = {
    kind: "receipt", fingerprint, currency: null, totalMinor: null, taxMinor: null,
    discountMinor: null, warnings: providerWarnings,
    lines: [rawLine({ quantity: null, unit: null, storage: null, ingredientId: "ungrounded", warnings: providerWarnings })],
  };
  const lineDiagnostics = ["Quantity requires review.", "Unit requires review.", "Storage requires review.", "Ingredient match was not grounded and was removed."];
  const rootDiagnostics = ["Currency requires review; finance import excluded.", "Receipt total requires review; finance import excluded.", "Receipt tax or discount requires review; finance import excluded."];
  let first;
  for (let pass = 0; pass < 5; pass++) {
    reviewed = reviewScanDraft(reviewed);
    for (const [warnings, diagnostics] of [[reviewed.lines[0].warnings, lineDiagnostics], [reviewed.warnings, rootDiagnostics]]) {
      assert.ok(warnings.length <= 100);
      assert.ok(warnings.includes(providerWarnings[0]));
      for (const diagnostic of diagnostics) assert.equal(warnings.filter((value) => value === diagnostic).length, 1);
    }
    assert.equal(reviewed.lines[0].quantity, null);
    assert.equal(reviewed.lines[0].unit, null);
    assert.equal(reviewed.lines[0].storage, null);
    if (!first) first = structuredClone(reviewed);
    else assert.deepEqual(reviewed, first);
  }
});

test("normalizing reviewed unknowns does not duplicate review warnings", () => {
  const first = draft({ currency: null, totalMinor: null, taxMinor: null, discountMinor: null, warnings: ["Blurred receipt."], lines: [rawLine({ quantity: null, unit: null, storage: null, warnings: ["Blurred label."] })] });
  const second = reviewScanDraft(reviewScanDraft(first, { catalog: ["milk"] }), { catalog: ["milk"] });
  assert.deepEqual(second, first);
});


test("photo regions require finite numeric in-image boxes and never coerce provider data", () => {
  assert.deepEqual(normalizePhotoRegion({ x: 0, y: 0, width: 1, height: 1 }), { x: 0, y: 0, width: 1, height: 1 });
  for (const region of [undefined, null, [], {}, { x: 0, y: 0, width: 0, height: 1 }, { x: -.1, y: 0, width: 1, height: 1 }, { x: 0, y: 0, width: 1, height: Infinity }, { x: NaN, y: 0, width: 1, height: 1 }, { x: "0", y: 0, width: 1, height: 1 }, { x: 0, y: .6, width: 1, height: .5 }]) {
    assert.equal(normalizePhotoRegion(region), null);
  }
});


test("region metadata changes replay the same grocery fingerprint without stock mutation", () => {
  const original = draft({ kind: "groceries" });
  const withRegion = draft({ kind: "groceries", lines: [rawLine({ photoRegion: { x: .1, y: .2, width: .3, height: .4 } })] });
  const first = commitScanDraft(baseState(), original, { confirmed: true });
  const replay = commitScanDraft(first.state, withRegion, { confirmed: true });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state, first.state);
  assert.deepEqual(replay.importedItemIds, []);
  const regionFirst = commitScanDraft(baseState(), withRegion, { confirmed: true });
  assert.equal(commitScanDraft(regionFirst.state, original, { confirmed: true }).replayed, true);
  const changedQuantity = draft({ kind: "groceries", lines: [rawLine({ quantity: 2, photoRegion: withRegion.lines[0].photoRegion })] });
  assert.throws(() => commitScanDraft(first.state, changedQuantity, { confirmed: true }), error => error.code === "IDEMPOTENCY_CONFLICT");
});

test("reviewed category imports as presentation metadata without changing replay identity", () => {
  const categorized = draft({ lines: [rawLine({ categoryId: "dairy" })] });
  const first = commitScanDraft(baseState(), categorized, { confirmed: true });
  const itemId = first.importedItemIds[0];
  assert.equal(first.state.items[itemId].categoryId, "dairy");
  assert.equal(first.state.receipts[0].lines[0].categoryId, "dairy");

  const recategorizedReplay = draft({ lines: [rawLine({ categoryId: "drinks" })] });
  const replay = commitScanDraft(first.state, recategorizedReplay, { confirmed: true });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state, first.state);
  assert.equal(replay.state.items[itemId].categoryId, "dairy");
  assert.equal(replay.state.items[itemId].qty, 1);
  assert.equal(replay.state.receipts.length, 1);
});

test("merge fills missing category but preserves existing explicit category", () => {
  const state = baseState();
  state.items.uncategorized = { name: "Milk", qty: 1, unit: "l", storage: "Fridge", expiry: null };
  state.items.explicit = { name: "Milk", qty: 1, unit: "l", storage: "Fridge", expiry: null, categoryId: "drinks" };
  const reviewed = draft({ lines: [rawLine({ categoryId: "dairy" })] });
  const filled = commitScanDraft(state, reviewed, { confirmed: true, mergeTargets: { "milk-line": "uncategorized" } });
  assert.equal(filled.state.items.uncategorized.categoryId, "dairy");
  const otherDraft = draft({ fingerprint: "9".repeat(64), lines: [rawLine({ categoryId: "dairy" })] });
  const preserved = commitScanDraft(state, otherDraft, { confirmed: true, mergeTargets: { "milk-line": "explicit" } });
  assert.equal(preserved.state.items.explicit.categoryId, "drinks");
});

test("invalid provider category falls back to unclassified review metadata", () => {
  const reviewed = draft({ lines: [rawLine({ categoryId: "invented" })] });
  assert.equal(reviewed.lines[0].categoryId, null);
  const result = commitScanDraft(baseState(), reviewed, { confirmed: true });
  assert.equal(Object.hasOwn(result.state.items[result.importedItemIds[0]], "categoryId"), false);
});
