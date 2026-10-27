import test from "node:test";
import assert from "node:assert/strict";
import {
  currencyDigits,
  formatMinorInput,
  formatMoneyMinor,
  parseMinorAmount,
} from "../web/scan-money.js";

test("known currency exponents cover Gulf, regional, and zero-decimal currencies", () => {
  for (const code of ["SAR", "AED", "EGP"])
    assert.equal(currencyDigits(code), 2);
  for (const code of ["KWD", "BHD", "OMR", "JOD", "TND", "IQD", "LYD"])
    assert.equal(currencyDigits(code), 3);
  for (const code of ["JPY", "KRW"]) assert.equal(currencyDigits(code), 0);
  assert.equal(currencyDigits("sar"), 2);
  assert.equal(currencyDigits("ZZZ"), null);
  assert.equal(currencyDigits(null), null);
});

test("minor formatting uses integer string operations without float rounding", () => {
  assert.equal(formatMinorInput(1, "SAR"), "0.01");
  assert.equal(formatMinorInput(1234, "KWD"), "1.234");
  assert.equal(formatMinorInput(1000000000000, "KWD"), "1000000000.000");
  assert.equal(formatMinorInput(1234, "JPY"), "1234");
  assert.equal(formatMoneyMinor(1234, "kwd"), "KWD 1.234");
});

test("decimal parsing produces exact safe integer minor values", () => {
  assert.equal(parseMinorAmount("1.23", "SAR"), 123);
  assert.equal(parseMinorAmount("1.234", "KWD"), 1234);
  assert.equal(parseMinorAmount("900719925.123", "KWD"), 900719925123);
  assert.equal(parseMinorAmount("42", "JPY"), 42);
  assert.equal(parseMinorAmount("0001.20", "EGP"), 120);
  assert.equal(parseMinorAmount("١٬٢٣٤٫٥٦", "SAR"), 123456);
  assert.equal(parseMinorAmount("۱٬۲۳۴٫۵۶۷", "KWD"), 1234567);
  assert.equal(parseMinorAmount("\u2067١٢٫٥\u2069", "EGP"), 1250);
  assert.equal(parseMinorAmount("1,234.56", "USD"), 123456);
});

test("parsing rejects ambiguous or unsafe amounts", () => {
  for (const [value, currency] of [
    ["1.001", "SAR"],
    ["1.0", "JPY"],
    ["1e3", "EGP"],
    ["-1", "EGP"],
    ["1,000", "EGP"],
    ["12,34.56", "EGP"],
    ["", "EGP"],
    ["١٠٠٠٠٠٠٠٠٠٠٫٠١", "SAR"],
    ["1.00", "ZZZ"],
  ])
    assert.throws(() => parseMinorAmount(value, currency), TypeError);
  assert.throws(() => formatMinorInput(1.5, "EGP"), TypeError);
  assert.throws(() => formatMoneyMinor(1, "ZZZ"), TypeError);
});
