import test from "node:test";
import assert from "node:assert/strict";
import { parseLocalizedDecimal } from "../web/localized-number.js";

test("localized decimals normalize Arabic-Indic and Persian digits losslessly", () => {
  assert.equal(parseLocalizedDecimal("٠٠١٢٫٣٤٠"), "0012.340");
  assert.equal(parseLocalizedDecimal("۱۲۳٫۴۵"), "123.45");
  assert.equal(parseLocalizedDecimal("\u2067١٢٫٥\u2069"), "12.5");
});

test("localized decimals accept explicit valid Arabic and Western grouping", () => {
  assert.equal(parseLocalizedDecimal("١٬٢٣٤٬٥٦٧٫٨٩"), "1234567.89");
  assert.equal(parseLocalizedDecimal("1,234,567.89"), "1234567.89");
});

test("localized decimals reject ambiguous or malformed representations", () => {
  for (const value of [
    "1,234",
    "12,34.56",
    "١٢٬٣٤٫٥٦",
    "1٬234.56",
    "1,234٫56",
    "1.2.3",
    "1e3",
    "-1",
    "+1",
    "1 234",
    "NaN",
    "",
    ".5",
    "1.",
    `1${"0".repeat(128)}`,
  ])
    assert.throws(() => parseLocalizedDecimal(value), TypeError, value);
  assert.throws(() => parseLocalizedDecimal(12.5), TypeError);
});
