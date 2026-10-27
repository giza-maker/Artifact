import {
  COOK_INGREDIENTS,
  getIngredient,
  suggestIngredientLinks,
} from "./cook-catalog.js";
import { parseLocalizedDecimal } from "./localized-number.js";

const countUnits = new Set(["count", "pieces", "bunches", "cloves", "slices"]);
const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

export function renderIngredientLinkFields({
  prefix = "",
  name = "",
  ingredientId = null,
  unit = "count",
  gramsPerUnit = null,
} = {}) {
  const selected = getIngredient(ingredientId)?.id ?? null;
  const suggestions = suggestIngredientLinks(name);
  const suggestedIds = new Set(suggestions.map((entry) => entry.id));
  const option = (entry) =>
    `<option value="${esc(entry.id)}"${entry.id === selected ? " selected" : ""}>${esc(entry.name.en)} — ${esc(entry.name.ar)}</option>`;
  const canWeigh = countUnits.has(unit);
  const weight =
    canWeigh &&
    typeof gramsPerUnit === "number" &&
    Number.isFinite(gramsPerUnit) &&
    gramsPerUnit > 0 &&
    gramsPerUnit <= 1e9
      ? gramsPerUnit
      : "";
  return `<label class="field">Cooking ingredient
    <select name="${esc(prefix)}ingredientId" data-picker-label="Cooking ingredient">
      <option value=""${selected === null ? " selected" : ""}>Not linked for cooking</option>
      ${suggestions.length ? `<optgroup label="Suggestions">${suggestions.map(option).join("")}</optgroup>` : ""}
      <optgroup label="All ingredients">${COOK_INGREDIENTS.filter(
        (entry) => !suggestedIds.has(entry.id),
      )
        .map(option)
        .join("")}</optgroup>
    </select>
    <span class="details">Choose the product type explicitly. Suggestions do not save a link.</span>
  </label>
  <label class="field">Grams per current unit (optional)
    <input type="text" inputmode="decimal" dir="ltr" maxlength="128" name="${esc(prefix)}gramsPerUnit" value="${esc(weight)}"${canWeigh ? "" : " disabled"}>
    <span class="details">For count, pieces, bunches, cloves, or slices only. Enter measured or printed grams per current unit; never guess weights.</span>
  </label>`;
}

export function readIngredientLink(formData, { prefix = "", unit } = {}) {
  const rawId = formData.get(`${prefix}ingredientId`);
  const ingredientId =
    typeof rawId === "string" ? (getIngredient(rawId)?.id ?? null) : null;
  if (rawId !== null && rawId !== "" && !ingredientId) {
    throw new Error("Choose a known cooking ingredient or leave it unlinked.");
  }
  const rawWeight = formData.get(`${prefix}gramsPerUnit`);
  let gramsPerUnit = null;
  const hasWeight =
    rawWeight !== null && !(typeof rawWeight === "string" && !rawWeight.trim());
  if (hasWeight) {
    if (!countUnits.has(unit))
      throw new Error(
        "Grams per unit is only supported for count, pieces, bunches, cloves, or slices.",
      );
    if (typeof rawWeight !== "string") {
      throw new Error("Enter a valid positive grams per unit value.");
    }
    let canonical;
    try {
      canonical = parseLocalizedDecimal(rawWeight);
    } catch {
      throw new Error("Enter a valid positive grams per unit value.");
    }
    const parsed = Number(canonical);
    if (!Number.isFinite(parsed) || parsed <= 0 || parsed > 1e9) {
      throw new Error(
        "Grams per unit must be greater than zero and at most 1,000,000,000.",
      );
    }
    gramsPerUnit = parsed;
  }
  return { ingredientId, gramsPerUnit };
}
