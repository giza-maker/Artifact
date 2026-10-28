import { getIngredient } from "./cook-catalog.js";

const COUNT_UNITS = new Set(["count", "pieces", "bunches", "cloves", "slices"]);
const safeId = (value) =>
  typeof value === "string" &&
  /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(value);
const plain = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const fail = (message) => {
  throw new TypeError(message);
};

// Apply only explicit human-reviewed metadata after the stock import succeeds.
export function applyScanCookingLinks(
  result,
  { draft, excludedLineIds = [], links = {} } = {},
) {
  if (result?.replayed || draft?.kind === "expiry") return result;
  if (
    !plain(result?.state?.items) ||
    !Array.isArray(result.importedItemIds) ||
    !Array.isArray(draft?.lines) ||
    !Array.isArray(excludedLineIds) ||
    !plain(links)
  )
    fail("Scan cooking links require valid imported stock and reviewed lines.");
  const excluded = new Set(excludedLineIds);
  const included = draft.lines.filter((line) => !excluded.has(line.lineId));
  if (
    included.length !== result.importedItemIds.length ||
    new Set(included.map((line) => line.lineId)).size !== included.length
  )
    fail("Imported stock does not match reviewed scan lines.");
  const changes = new Map();
  for (let index = 0; index < included.length; index++) {
    const line = included[index],
      id = result.importedItemIds[index];
    if (
      !safeId(line.lineId) ||
      !safeId(id) ||
      !Object.hasOwn(result.state.items, id) ||
      !plain(result.state.items[id])
    )
      fail("Scan cooking link target is invalid.");
    if (!Object.hasOwn(links, line.lineId)) continue;
    const link = links[line.lineId];
    if (
      !plain(link) ||
      (link.ingredientId !== null && !getIngredient(link.ingredientId))
    )
      fail("Choose a known catalog ingredient.");
    const weight = link.gramsPerUnit;
    if (
      weight !== null &&
      (!Number.isFinite(weight) ||
        weight <= 0 ||
        weight > 1e9 ||
        !COUNT_UNITS.has(line.unit))
    )
      fail("Grams per unit requires a positive weight and a count unit.");
    const target = changes.get(id) ?? result.state.items[id];
    if (
      link.ingredientId !== null &&
      target.ingredientId != null &&
      target.ingredientId !== link.ingredientId
    )
      fail(
        "Ingredient identity conflicts. Choose the correct target or create a new item instead.",
      );
    if (
      weight !== null &&
      (line.unit !== target.unit || !COUNT_UNITS.has(target.unit))
    )
      fail("Grams per unit requires matching scan and stock count units.");
    if (
      weight !== null &&
      target.gramsPerUnit != null &&
      target.gramsPerUnit !== weight
    )
      fail("Grams per unit conflicts. Edit inventory first.");
    const metadata = {};
    if (link.ingredientId !== null) metadata.ingredientId = link.ingredientId;
    if (link.cookingLinkDisabled !== undefined) {
      if (typeof link.cookingLinkDisabled !== "boolean")
        fail("Cooking-link preference must be a boolean.");
      if (!target.ingredientId || link.ingredientId !== null)
        metadata.cookingLinkDisabled =
          link.ingredientId === null && link.cookingLinkDisabled;
    }
    if (weight !== null) metadata.gramsPerUnit = weight;
    if (Object.keys(metadata).length)
      changes.set(id, { ...target, ...metadata });
  }
  if (!changes.size) return result;
  return {
    ...result,
    state: {
      ...result.state,
      items: { ...result.state.items, ...Object.fromEntries(changes) },
    },
  };
}
