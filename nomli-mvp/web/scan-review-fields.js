import { parseLocalizedDecimal } from "./localized-number.js";
import { parseMinorAmount } from "./scan-money.js";

export function parseReviewedScanMoney(
  text,
  currency,
  { excludeFinance = false } = {},
) {
  if (typeof text !== "string") throw new TypeError("Enter an amount.");
  if (!text.trim()) return null;
  try {
    return parseMinorAmount(text, currency);
  } catch (error) {
    if (excludeFinance) return null;
    throw error;
  }
}

export function parseScanQuantity(text) {
  if (typeof text !== "string") throw new TypeError("Enter a quantity.");
  if (!text.trim()) return null;
  const value = Number(parseLocalizedDecimal(text));
  if (!Number.isFinite(value) || value <= 0 || value > 1e9) {
    throw new TypeError(
      "Quantity must be greater than zero and at most 1,000,000,000.",
    );
  }
  return value;
}

// Native number inputs discard Arabic digits before the app can read them.
// Validate decimal text controls at the form boundary, retaining exact money.
export function validateScanReviewFields(form, { stockOnly = false } = {}) {
  const currency =
    form.elements.scanCurrency?.value || form.dataset.moneyCurrency;
  for (const input of form.querySelectorAll(
    "[data-scan-quantity], [data-scan-money], [data-scan-weight]",
  )) {
    input.setCustomValidity("");
    if (
      input.hasAttribute("data-scan-money") &&
      (stockOnly || form.elements.excludeFinance?.checked)
    )
      continue;
    if (
      input.hasAttribute("data-scan-money") &&
      form.elements.excludeFinance?.checked
    )
      continue;
    if (input.disabled || !input.value.trim()) continue;
    try {
      if (
        input.hasAttribute("data-scan-quantity") ||
        input.hasAttribute("data-scan-weight")
      )
        parseScanQuantity(input.value);
      else parseMinorAmount(input.value, currency);
    } catch (error) {
      input.setCustomValidity(`${error.message} Use 12.50 or ١٢٫٥٠.`);
    }
  }
}
