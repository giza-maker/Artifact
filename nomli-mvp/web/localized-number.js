"use strict";

const MAX_INPUT_LENGTH = 128;
const BIDI_CONTROLS = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g;

function asciiDigits(value) {
  return value
    .replace(/[\u0660-\u0669]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x0660),
    )
    .replace(/[\u06f0-\u06f9]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x06f0),
    );
}

export function parseLocalizedDecimal(text) {
  if (typeof text !== "string")
    throw new TypeError("Decimal value must be text.");
  if (text.length > MAX_INPUT_LENGTH)
    throw new TypeError("Decimal value is too long.");

  const value = asciiDigits(text.replace(BIDI_CONTROLS, "").trim());
  if (!value) throw new TypeError("Decimal value is required.");

  const arabicSeparators = value.includes("٫") || value.includes("٬");
  const westernGrouping = value.includes(",");
  if (arabicSeparators && (value.includes(".") || westernGrouping)) {
    throw new TypeError("Decimal separator styles cannot be mixed.");
  }

  const decimal = arabicSeparators ? "٫" : ".";
  const grouping = arabicSeparators ? "٬" : ",";
  const parts = value.split(decimal);
  if (parts.length > 2 || !parts[0] || (parts.length === 2 && !parts[1])) {
    throw new TypeError("Decimal value has an invalid decimal separator.");
  }

  const [integer, fraction] = parts;
  if (integer.includes(grouping)) {
    if (!arabicSeparators && parts.length === 1) {
      throw new TypeError("Comma-only values are ambiguous.");
    }
    const grouped = new RegExp(`^[0-9]{1,3}(?:${grouping}[0-9]{3})+$`);
    if (!grouped.test(integer))
      throw new TypeError("Decimal value has invalid grouping.");
  } else if (!/^[0-9]+$/.test(integer)) {
    throw new TypeError("Decimal value must contain digits only.");
  }
  if (fraction !== undefined && !/^[0-9]+$/.test(fraction)) {
    throw new TypeError("Decimal fraction must contain digits only.");
  }

  const canonicalInteger = integer.replaceAll(grouping, "");
  return fraction === undefined
    ? canonicalInteger
    : `${canonicalInteger}.${fraction}`;
}

export const LOCALIZED_DECIMAL_MAX_INPUT_LENGTH = MAX_INPUT_LENGTH;
