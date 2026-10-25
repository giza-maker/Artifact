import test from "node:test";
import assert from "node:assert/strict";
import { AssistantToolSchemas } from "../server/contracts.mjs";
import {
  DomainError,
  commitConsumption,
  convertQuantity,
  createDomainState,
  importReviewedReceipt,
  previewConsumption,
  verifyReceiptTotal,
} from "../server/domain.mjs";

const receipt = {
  receiptId: "r-1",
  idempotencyKey: "receipt-key-1",
  reviewed: true,
  currency: "EGP",
  lines: [
    { ingredientId: "flour", quantity: 1, unit: "kg", lineTotalMinor: 12000 },
    { ingredientId: "eggs", quantity: 6, unit: "count", lineTotalMinor: 6000 },
  ],
  taxMinor: 1400,
  discountMinor: 400,
  totalMinor: 19000,
};

test("currency totals use integer minor units", () => {
  assert.deepEqual(verifyReceiptTotal(receipt), {
    valid: true,
    linesMinor: 18000,
    expectedTotalMinor: 19000,
    declaredTotalMinor: 19000,
  });
  assert.throws(() => verifyReceiptTotal({ ...receipt, totalMinor: 19000.5 }));
});

test("rejects reserved identifiers, zero receipt quantities and unsafe monetary bounds", () => {
  assert.throws(() =>
    importReviewedReceipt(createDomainState(), {
      ...receipt,
      idempotencyKey: "__proto__",
    }),
  );
  assert.throws(() =>
    verifyReceiptTotal({ ...receipt, totalMinor: Number.MAX_SAFE_INTEGER }),
  );
  assert.throws(() =>
    verifyReceiptTotal({
      ...receipt,
      lines: [{ ...receipt.lines[0], quantity: 0 }],
    }),
  );
});

test("unit conversion accepts compatible dimensions only", () => {
  assert.equal(convertQuantity(1.5, "kg", "g"), 1500);
  assert.equal(convertQuantity(2, "l", "ml"), 2000);
  assert.throws(
    () => convertQuantity(1, "kg", "ml"),
    (error) => error.code === "INCOMPATIBLE_UNITS",
  );
  assert.throws(
    () => convertQuantity(1, "pack", "count"),
    (error) => error.code === "AMBIGUOUS_UNIT",
  );
});

test("reviewed receipt atomically updates stock, expenses, and shopping", () => {
  const before = createDomainState({
    shopping: [{ ingredientId: "flour" }, { ingredientId: "milk" }],
  });
  const result = importReviewedReceipt(before, receipt);
  assert.equal(result.state.inventory.flour.quantity, 1000);
  assert.equal(result.state.inventory.eggs.quantity, 6);
  assert.equal(result.state.expenses.length, 1);
  assert.deepEqual(result.state.shopping, [{ ingredientId: "milk" }]);
  assert.equal(before.inventory.flour, undefined);
  assert.equal(before.expenses.length, 0);
});

test("receipt mismatch and missing review leave original state unchanged", () => {
  const before = createDomainState();
  assert.throws(
    () => importReviewedReceipt(before, { ...receipt, totalMinor: 1 }),
    (error) => error instanceof DomainError && error.code === "TOTAL_MISMATCH",
  );
  assert.throws(
    () => importReviewedReceipt(before, { ...receipt, reviewed: false }),
    (error) => error.code === "REVIEW_REQUIRED",
  );
  assert.deepEqual(before, createDomainState());
});

test("receipt idempotency replays same transaction; rejects conflicting payload", () => {
  const first = importReviewedReceipt(createDomainState(), receipt);
  const duplicate = importReviewedReceipt(first.state, receipt);
  assert.equal(duplicate.state, first.state);
  assert.equal(duplicate.transaction, first.transaction);
  assert.equal(duplicate.replayed, true);
  assert.throws(
    () => importReviewedReceipt(first.state, { ...receipt, totalMinor: 19001 }),
    (error) => error.code === "IDEMPOTENCY_CONFLICT",
  );
});

test("consumption preview aggregates then commit occurs once", () => {
  const stocked = importReviewedReceipt(createDomainState(), receipt).state;
  const command = {
    consumptionId: "cook-1",
    idempotencyKey: "cook-key-1",
    reviewed: true,
    items: [
      { ingredientId: "flour", quantity: 250, unit: "g" },
      { ingredientId: "flour", quantity: 0.25, unit: "kg" },
    ],
  };
  assert.deepEqual(previewConsumption(stocked, command).items[0], {
    ingredientId: "flour",
    quantity: 500,
    unit: "g",
    availableQuantity: 1000,
    sufficient: true,
  });
  const first = commitConsumption(stocked, command);
  assert.equal(first.state.inventory.flour.quantity, 500);
  const duplicate = commitConsumption(first.state, command);
  assert.equal(duplicate.state, first.state);
  assert.equal(duplicate.state.inventory.flour.quantity, 500);
});

test("insufficient stock prevents every consumption mutation", () => {
  const stocked = importReviewedReceipt(createDomainState(), receipt).state;
  const before = structuredClone(stocked);
  assert.throws(
    () =>
      commitConsumption(stocked, {
        consumptionId: "cook-2",
        idempotencyKey: "cook-key-2",
        reviewed: true,
        items: [
          { ingredientId: "flour", quantity: 100, unit: "g" },
          { ingredientId: "eggs", quantity: 7, unit: "count" },
        ],
      }),
    (error) => error.code === "INSUFFICIENT_STOCK",
  );
  assert.deepEqual(stocked, before);
});

test("assistant mutation proposals require explicit reviewed confirmation and grounded ids", () => {
  assert.equal(
    AssistantToolSchemas.proposeShoppingChange.safeParse({
      reviewed: false,
      idempotencyKey: "x",
      ingredientIds: ["flour"],
    }).success,
    false,
  );
  assert.equal(
    AssistantToolSchemas.suggestRecipes.safeParse({
      candidateRecipeIds: [],
      availableIngredientIds: ["flour"],
    }).success,
    false,
  );
  assert.equal(
    AssistantToolSchemas.proposeConsumption.safeParse({
      consumptionId: "c",
      idempotencyKey: "k",
      reviewed: true,
      items: [{ ingredientId: "flour", quantity: 1, unit: "g" }],
    }).success,
    true,
  );
});
