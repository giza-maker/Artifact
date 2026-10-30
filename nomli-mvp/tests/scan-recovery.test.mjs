import test from "node:test";
import assert from "node:assert/strict";
import {
  captureScanReview,
  restoreScanReview,
  validateScanRecovery,
} from "../web/scan-recovery.js";
import { reviewScanDraft } from "../web/scan-domain.js";

test("recovery rejects a cross-source draft and an empty review", () => {
  const record = {
    id: `r_${"1".repeat(32)}`,
    source: "receipt-paper",
    stage: "review",
    draft: draft(),
    form: null,
    sourceAssetId: null,
    crops: [],
  };
  assert.throws(
    () => validateScanRecovery({ ...record, source: "groceries" }),
    /kind/,
  );
  assert.throws(
    () => validateScanRecovery({ ...record, draft: null }),
    /requires/,
  );
});

function draft() {
  return reviewScanDraft({
    kind: "receipt",
    fingerprint: "a".repeat(64),
    merchant: "متجر",
    currency: "EGP",
    totalMinor: 1250,
    lines: [
      {
        lineId: "milk-1",
        name: "حليب",
        quantity: 2,
        unit: "count",
        storage: "Fridge",
        lineTotalMinor: 1250,
      },
    ],
  });
}

function input(name, value = "") {
  return { name, value, checked: false, disabled: false, dataset: {} };
}

function formWith(elements) {
  const named = Object.fromEntries(
    elements.map((element) => [element.name, element]),
  );
  named.namedItem = (name) => named[name] ?? null;
  return { elements: named, querySelectorAll: () => [] };
}

test("capture preserves raw localized edits and manual metadata but never confirmation", () => {
  const quantity = input("quantity-milk-1", "١٢٫٥");
  const cost = input("cost-milk-1", "not valid yet");
  const cooking = input("cook-milk-1-ingredientId", "milk");
  cooking.dataset.userTouched = "1";
  cooking.dataset.cookOptout = "1";
  const confirmed = input("confirmed");
  confirmed.checked = true;
  const form = formWith([quantity, cost, cooking, confirmed]);
  const snapshot = captureScanReview(
    form,
    { snapshot: () => ({ index: 1, reviewed: [true] }) },
    draft(),
  );

  assert.equal(snapshot.fields["quantity-milk-1"].value, "١٢٫٥");
  assert.equal(snapshot.fields["cost-milk-1"].value, "not valid yet");
  assert.deepEqual(snapshot.fields["cook-milk-1-ingredientId"], {
    value: "milk",
    userTouched: true,
    cookOptout: true,
  });
  assert.equal(Object.hasOwn(snapshot.fields, "confirmed"), false);
});

test("restore keeps invalid text editable, resets confirmation, and emits no events", () => {
  const quantity = input("quantity-milk-1");
  const confirmed = input("confirmed");
  confirmed.checked = true;
  const form = formWith([quantity, confirmed]);
  let restored;
  const result = restoreScanReview(
    form,
    {
      restore: (state) => {
        restored = state;
      },
    },
    {
      fields: { "quantity-milk-1": { value: "still invalid" } },
      wizard: { index: 0, reviewed: [false] },
    },
    draft(),
  );

  assert.equal(quantity.value, "still invalid");
  assert.equal(confirmed.checked, false);
  assert.deepEqual(restored, { index: 0, reviewed: [false] });
  assert.deepEqual(result.warnings, []);
});

test("validated recovery is cloned and rejects secrets and cross-draft crops", () => {
  const record = {
    id: `r_${"1".repeat(32)}`,
    source: "receipt-paper",
    stage: "review",
    draft: draft(),
    form: { fields: {}, wizard: { index: 0, reviewed: [false] } },
    sourceAssetId: `r_${"2".repeat(32)}`,
    crops: [
      {
        lineId: "milk-1",
        assetId: `r_${"3".repeat(32)}`,
        region: { x: 0, y: 0, width: 0.5, height: 0.5 },
      },
    ],
  };
  const safe = validateScanRecovery(record);
  record.draft.lines[0].name = "changed";
  assert.equal(safe.draft.lines[0].name, "حليب");
  assert.throws(
    () => validateScanRecovery({ ...record, token: "secret" }),
    /unsupported field/i,
  );
  assert.throws(
    () =>
      validateScanRecovery({
        ...record,
        crops: [{ ...record.crops[0], lineId: "another-scan" }],
      }),
    /does not belong/i,
  );
});
