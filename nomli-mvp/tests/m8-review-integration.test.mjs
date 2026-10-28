import test from "node:test";
import assert from "node:assert/strict";
import {
  parseReviewedScanMoney,
  validateScanReviewFields,
} from "../web/scan-review-fields.js";
import { commitScanDraft, reviewScanDraft } from "../web/scan-domain.js";
import { scanFile } from "../web/scan-client.js";

const config = {
  apiUrl: "https://scanner.example.test",
  deviceToken: "n".repeat(48),
};
const jpeg = new Uint8Array([255, 216, 255, 224, 0, 0, 1, 2]);
const scanFileInput = () =>
  new File([jpeg], "review.jpg", { type: "image/jpeg" });

async function scanFingerprint(kind) {
  const prefix = new TextEncoder().encode(`${kind}:`);
  const bytes = new Uint8Array(prefix.length + jpeg.length);
  bytes.set(prefix);
  bytes.set(jpeg, prefix.length);
  return Buffer.from(await crypto.subtle.digest("SHA-256", bytes)).toString(
    "hex",
  );
}

function providerDraft(kind, fingerprint) {
  return {
    version: 1,
    kind,
    fingerprint,
    merchant: kind === "receipt" ? "Market" : null,
    currency: null,
    receiptDate: null,
    totalMinor: null,
    taxMinor: null,
    discountMinor: null,
    lines: [
      {
        lineId: "milk-line",
        name: "Milk",
        ingredientId: null,
        quantity: kind === "expiry" ? null : 1,
        unit: kind === "expiry" ? null : "l",
        lineTotalMinor: null,
        expiry: null,
        expiryProvenance: null,
        storage: kind === "expiry" ? null : "Fridge",
        warnings: [],
      },
    ],
    warnings: [],
  };
}

test("reviewed money preserves exact minor units and only suppresses invalid finance when explicitly excluded", () => {
  assert.equal(parseReviewedScanMoney("١٬٢٣٤٫٥٦", "EGP"), 123456);
  assert.equal(parseReviewedScanMoney("0.00", "EGP"), 0);
  assert.throws(() => parseReviewedScanMoney("not money", "EGP"), TypeError);
  assert.equal(
    parseReviewedScanMoney("not money", "EGP", { excludeFinance: true }),
    null,
  );
  assert.equal(
    parseReviewedScanMoney("", "EGP", { excludeFinance: true }),
    null,
  );
});

test("stock-only review ignores unknown finance but still validates required quantity and optional positive weight", () => {
  const field = (value, attribute) => ({
    value,
    disabled: false,
    validity: "stale",
    hasAttribute: (name) => name === attribute,
    setCustomValidity(message) {
      this.validity = message;
    },
  });
  const unknownCost = field("unknown", "data-scan-money");
  const quantity = field("0", "data-scan-quantity");
  const optionalBlankWeight = field("", "data-scan-weight");
  const invalidWeight = field("0", "data-scan-weight");
  const form = {
    elements: { scanCurrency: { value: "ZZZ" } },
    dataset: {},
    querySelectorAll: () => [
      unknownCost,
      quantity,
      optionalBlankWeight,
      invalidWeight,
    ],
  };

  validateScanReviewFields(form, { stockOnly: true });

  assert.equal(unknownCost.validity, "");
  assert.match(quantity.validity, /greater than zero/);
  assert.equal(optionalBlankWeight.validity, "");
  assert.match(invalidWeight.validity, /greater than zero/);
});

test("reviewed receipt with category and unknown finance imports stock without inventing spend, then category-only replay is inert", () => {
  const fingerprint = "a".repeat(64);
  const reviewed = reviewScanDraft({
    ...providerDraft("receipt", fingerprint),
    lines: [
      {
        ...providerDraft("receipt", fingerprint).lines[0],
        categoryId: "dairy",
      },
    ],
  });
  const initial = { version: 1, items: {}, receipts: [], shopping: [] };

  const imported = commitScanDraft(initial, reviewed, {
    confirmed: true,
    excludeFinance: true,
  });
  const itemId = imported.importedItemIds[0];
  assert.equal(imported.financeExcluded, true);
  assert.equal(imported.state.items[itemId].categoryId, "dairy");
  assert.equal(imported.state.receipts[0].financeExcluded, true);
  assert.equal(imported.state.receipts[0].totalMinor, null);
  assert.equal(imported.state.receipts[0].lines[0].cents, null);

  const recategorized = reviewScanDraft({
    ...providerDraft("receipt", fingerprint),
    lines: [
      {
        ...providerDraft("receipt", fingerprint).lines[0],
        categoryId: "drinks",
      },
    ],
  });
  const replay = commitScanDraft(imported.state, recategorized, {
    confirmed: true,
    excludeFinance: true,
  });
  assert.equal(replay.replayed, true);
  assert.equal(replay.state, imported.state);
  assert.equal(replay.state.items[itemId].qty, 1);
  assert.equal(replay.state.items[itemId].categoryId, "dairy");
  assert.equal(replay.state.receipts.length, 1);
});

test("grocery and receipt scans opt into categories and bound legacy 422 fallback to one retry", async () => {
  for (const kind of ["groceries", "receipt"]) {
    const payloads = [];
    const fingerprint = await scanFingerprint(kind);
    const result = await scanFile({
      file: scanFileInput(),
      kind,
      config,
      fetchImpl: async (_url, options) => {
        payloads.push(JSON.parse(options.body));
        if (payloads.length === 1)
          return Response.json(
            { error: { code: "invalid_request" } },
            { status: 422 },
          );
        return Response.json({ draft: providerDraft(kind, fingerprint) });
      },
    });
    assert.equal(payloads[0].foodCategories, true);
    assert.equal(Object.hasOwn(payloads[1], "foodCategories"), false);
    assert.equal(payloads.length, 2);
    assert.equal(result.kind, kind);

    let rejectedCalls = 0;
    await assert.rejects(
      scanFile({
        file: scanFileInput(),
        kind,
        config,
        fetchImpl: async () => {
          rejectedCalls += 1;
          return Response.json(
            { error: { code: "invalid_request" } },
            { status: 422 },
          );
        },
      }),
    );
    assert.equal(rejectedCalls, 2);
  }
});

test("expiry scans do not request category metadata or gain a legacy retry", async () => {
  const payloads = [];
  const fingerprint = await scanFingerprint("expiry");
  const draft = await scanFile({
    file: scanFileInput(),
    kind: "expiry",
    config,
    fetchImpl: async (_url, options) => {
      payloads.push(JSON.parse(options.body));
      return Response.json({ draft: providerDraft("expiry", fingerprint) });
    },
  });
  assert.equal(payloads.length, 1);
  assert.equal(Object.hasOwn(payloads[0], "foodCategories"), false);
  assert.equal(draft.kind, "expiry");

  let calls = 0;
  await assert.rejects(
    scanFile({
      file: scanFileInput(),
      kind: "expiry",
      config,
      fetchImpl: async () => {
        calls += 1;
        return Response.json(
          { error: { code: "invalid_request" } },
          { status: 422 },
        );
      },
    }),
  );
  assert.equal(calls, 1);
});
