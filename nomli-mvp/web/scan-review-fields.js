import { parseLocalizedDecimal } from "./localized-number.js";
import { parseMinorAmount } from "./scan-money.js";

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
export function validateScanReviewFields(form) {
  const currency =
    form.elements.scanCurrency?.value || form.dataset.moneyCurrency;
  for (const input of form.querySelectorAll(
    "[data-scan-quantity], [data-scan-money]",
  )) {
    input.setCustomValidity("");
    if (input.disabled || !input.value.trim()) continue;
    try {
      if (input.hasAttribute("data-scan-quantity"))
        parseScanQuantity(input.value);
      else parseMinorAmount(input.value, currency);
    } catch (error) {
      input.setCustomValidity(`${error.message} Use 12.50 or ١٢٫٥٠.`);
    }
  }
}
