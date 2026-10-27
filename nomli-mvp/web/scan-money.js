"use strict";

import { parseLocalizedDecimal } from "./localized-number.js";

const DIGITS = Object.freeze({
  AED: 2,
  AUD: 2,
  CAD: 2,
  CHF: 2,
  CNY: 2,
  DZD: 2,
  EGP: 2,
  EUR: 2,
  GBP: 2,
  ILS: 2,
  INR: 2,
  LBP: 2,
  MAD: 2,
  PKR: 2,
  QAR: 2,
  SAR: 2,
  TRY: 2,
  USD: 2,
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  TND: 3,
  JPY: 0,
  KRW: 0,
});

const MAX_MINOR = 1e12;

export function currencyDigits(code) {
  if (typeof code !== "string") return null;
  return Object.hasOwn(DIGITS, code.toUpperCase())
    ? DIGITS[code.toUpperCase()]
    : null;
}

function validMinor(minor) {
  if (!Number.isSafeInteger(minor) || minor < 0 || minor > MAX_MINOR) {
    throw new TypeError(
      `Minor amount must be an integer from 0 through ${MAX_MINOR}.`,
    );
  }
}

function requiredDigits(currency) {
  const digits = currencyDigits(currency);
  if (digits === null)
    throw new TypeError("Currency is unsupported and requires review.");
  return digits;
}

export function formatMinorInput(minor, currency) {
  validMinor(minor);
  const digits = requiredDigits(currency);
  if (digits === 0) return String(minor);
  const raw = String(minor).padStart(digits + 1, "0");
  return `${raw.slice(0, -digits)}.${raw.slice(-digits)}`;
}

export function parseMinorAmount(text, currency) {
  const digits = requiredDigits(currency);
  if (typeof text !== "string") throw new TypeError("Amount must be text.");
  const value = parseLocalizedDecimal(text);
  const [major, fraction = ""] = value.split(".");
  if (fraction.length > digits || (digits === 0 && fraction.length))
    throw new TypeError(`Currency supports ${digits} fractional digits.`);
  const minorValue =
    BigInt(major) * 10n ** BigInt(digits) +
    BigInt(fraction.padEnd(digits, "0") || "0");
  if (minorValue > BigInt(MAX_MINOR)) {
    throw new TypeError(
      `Minor amount must be an integer from 0 through ${MAX_MINOR}.`,
    );
  }
  const minor = Number(minorValue);
  validMinor(minor);
  return minor;
}

export function formatMoneyMinor(minor, currency) {
  const code = typeof currency === "string" ? currency.toUpperCase() : currency;
  return `${code} ${formatMinorInput(minor, code)}`;
}

export const SCAN_MONEY_MAX_MINOR = MAX_MINOR;
