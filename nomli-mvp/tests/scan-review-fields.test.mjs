import test from "node:test";
import assert from "node:assert/strict";
import {
  parseScanQuantity,
  validateScanReviewFields,
} from "../web/scan-review-fields.js";

test("scan quantity accepts Arabic, Persian and English quantities with safe limits", () => {
  for (const input of ["١٫٢٥", "۱.۲۵", "1.25"])
    assert.equal(parseScanQuantity(input), 1.25);
  assert.equal(parseScanQuantity(""), null);
  assert.equal(parseScanQuantity("١٬٠٠٠"), 1000);
  for (const input of ["٠", "-1", "1e6", "١٢٬٣٤", "١٠٠٠٠٠٠٠٠١", "1,000"]) {
    assert.throws(() => parseScanQuantity(input), TypeError, input);
  }
});

test("review validates before HTML submit, skips excluded lines and resets stale errors", () => {
  function field(value, kind, disabled = false) {
    return {
      value,
      disabled,
      error: "previous error",
      hasAttribute: (name) => name === kind,
      setCustomValidity(message) {
        this.error = message;
      },
    };
  }
  const quantity = field("٢٫٥", "data-scan-quantity");
  const total = field("١٬٢٣٤٫٥٠", "data-scan-money");
  const invalid = field("١٫٢٣٤", "data-scan-money");
  const excluded = field("invalid", "data-scan-money", true);
  const form = {
    elements: { scanCurrency: { value: "SAR" } },
    dataset: {},
    querySelectorAll: () => [quantity, total, invalid, excluded],
  };
  validateScanReviewFields(form);
  assert.equal(quantity.error, "");
  assert.equal(total.error, "");
  assert.equal(excluded.error, "");
  assert.match(invalid.error, /2 fractional digits/);
  invalid.value = "١٫٢٣";
  validateScanReviewFields(form);
  assert.equal(invalid.error, "");
  total.value = "1,234";
  validateScanReviewFields(form);
  assert.match(total.error, /ambiguous/);
  form.elements.scanCurrency.value = "JPY";
  total.value = "١٢٫٥٠";
  validateScanReviewFields(form);
  assert.match(total.error, /0 fractional digits/);
});
