import { normalizeCookUnit } from "./cook-domain.js";
import {
  resolveCookingIdentity,
  normalizeRetailFoodName,
} from "./food-identity.js";
import { getIngredient } from "./cook-catalog.js";

const positive = (value) =>
  typeof value === "number" && Number.isFinite(value) && value > 0;

const dimension = (unit) => {
  const normalized = normalizeCookUnit(unit);
  if (["g", "kg"].includes(normalized)) return "mass";
  if (["ml", "l"].includes(normalized)) return "volume";
  if (["count", "pieces"].includes(normalized)) return "count";
  if (["slices", "cloves", "bunches"].includes(normalized)) return normalized;
  return null;
};

const unitsCompatible = (item, requirement) => {
  const from = dimension(item.unit);
  const to = dimension(requirement.unit);
  if (!from || !to) return false;
  if (from === to) return true;
  return (
    positive(item.gramsPerUnit) &&
    (((from === "count" || ["slices", "cloves", "bunches"].includes(from)) &&
      to === "mass") ||
      (from === "mass" &&
        (to === "count" || ["slices", "cloves", "bunches"].includes(to))))
  );
};

const countFamily = (unit) =>
  ["count", "pieces", "slices", "cloves", "bunches"].includes(
    normalizeCookUnit(unit),
  );

const localDay = (now) => {
  if (typeof now === "string" && /^\d{4}-\d{2}-\d{2}$/.test(now)) return now;
  const date = new Date(now ?? Date.now());
  if (!Number.isFinite(+date)) return null;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};

const unsafeForDirectLink = (itemName, canonicalName) => {
  const itemWords = ` ${normalizeRetailFoodName(itemName)} `;
  const canonicalWords = ` ${normalizeRetailFoodName(canonicalName)} `;
  return [
    ["cooked", "boiled", "مطبوخ", "مطبوخه", "مسلوق", "مسلوقه"],
    ["canned", "tinned", "معلب", "معلبه"],
    ["frozen", "مجمد", "مجمده"],
    ["plant", "vegan", "نباتي", "نباتيه"],
    ["chocolate", "flavoured", "flavored", "شوكولاته", "نكهه"],
    ["powdered", "powder", "بودره", "مسحوق"],
    ["almond", "almonds", "لوز"],
    ["soy", "صويا"],
    ["oat", "oats", "شوفان"],
    ["coconut", "جوز الهند", "جوزالهند"],
  ].some(
    (group) =>
      group.some((word) => itemWords.includes(` ${word} `)) &&
      !group.some((word) => canonicalWords.includes(` ${word} `)),
  );
};

export function getRecipeRequirementStockStatus(
  state,
  assessment,
  requirement,
  { now } = {},
) {
  const canonicalId = requirement?.canonicalId ?? requirement?.ingredientId;
  const assessed =
    (assessment?.requirements ?? []).find(
      (entry) =>
        entry === requirement ||
        ((entry?.canonicalId ?? entry?.ingredientId) === canonicalId &&
          normalizeCookUnit(entry?.unit) ===
            normalizeCookUnit(requirement?.unit)),
    ) ?? requirement;
  const qty = positive(assessed?.qty) ? assessed.qty : 0;
  const boundedQuantity = (value) =>
    typeof value === "number" && Number.isFinite(value)
      ? Math.min(qty, Math.max(0, value))
      : 0;
  const qtyHave = boundedQuantity(assessed?.have);
  const qtyMissing = boundedQuantity(assessed?.missing);
  const today = localDay(now);
  const frozen = new Set(
    (state?.cooking?.allocations ?? [])
      .map((entry) => entry?.id)
      .filter(Boolean),
  );
  const incompatibleIds = new Set(
    (assessment?.incompatibleItems ?? [])
      .filter(
        (entry) => (entry?.canonicalId ?? entry?.ingredientId) === canonicalId,
      )
      .map((entry) => entry?.id)
      .filter(Boolean),
  );
  const measurementItems = [];
  if (qtyMissing > 0 && dimension(assessed?.unit) === "mass") {
    for (const itemId of incompatibleIds) {
      const item = state?.items?.[itemId];
      if (
        !item ||
        !positive(item.qty) ||
        (item.canonicalId ?? item.ingredientId) !== canonicalId ||
        !countFamily(item.unit) ||
        positive(item.gramsPerUnit) ||
        (today && typeof item.expiry === "string" && item.expiry < today)
      )
        continue;
      measurementItems.push({
        itemId,
        name: item.name,
        qty: item.qty,
        unit: item.unit,
        canMeasure: !frozen.has(itemId),
      });
    }
  }
  const status =
    qtyMissing === 0
      ? "ready"
      : measurementItems.length
        ? "needs-measurement"
        : qtyHave > 0
          ? "partial"
          : "missing";
  return { status, qtyHave, qtyMissing, measurementItems };
}

export function getRecipeStockHints(state, assessment, { now } = {}) {
  const requirements = (assessment?.missing ?? []).filter(
    (requirement) => requirement && positive(requirement.missing),
  );
  if (!requirements.length) return [];

  const today = localDay(now);
  const blocked = new Set(
    (assessment?.blockedItems ?? []).map((item) => item?.id).filter(Boolean),
  );
  const incompatible = new Set(
    (assessment?.incompatibleItems ?? [])
      .map((item) => item?.id)
      .filter(Boolean),
  );
  const allocated = new Set(
    (state?.cooking?.allocations ?? [])
      .map((entry) => entry?.id)
      .filter(Boolean),
  );
  const hints = [];

  for (const [itemId, item] of Object.entries(state?.items ?? {})) {
    if (hints.length >= 20 || !item || !positive(item.qty)) continue;
    for (const requirement of requirements) {
      const linked = item.ingredientId === requirement.ingredientId;
      const identity = linked
        ? null
        : resolveCookingIdentity({ name: item.name });
      const candidate =
        identity?.ingredientId === requirement.ingredientId ||
        identity?.candidates?.includes(requirement.ingredientId);
      if (!linked && !candidate) continue;

      let reason;
      const expired =
        Boolean(today) &&
        typeof item.expiry === "string" &&
        item.expiry < today;
      const compatible = unitsCompatible(item, requirement);
      const knownOtherLink =
        !linked && Boolean(getIngredient(item.ingredientId));
      if (linked) {
        if (blocked.has(itemId)) reason = "expired";
        else if (incompatible.has(itemId)) reason = "units";
        else continue;
      } else {
        reason = expired
          ? "expired"
          : knownOtherLink
            ? "identity"
            : !compatible
              ? "units"
              : item.cookingLinkDisabled
                ? "opted-out"
                : "unlinked";
      }
      const canonical = getIngredient(requirement.ingredientId);
      const canLink =
        !linked &&
        !knownOtherLink &&
        compatible &&
        !expired &&
        !allocated.has(itemId) &&
        !unsafeForDirectLink(
          item.name,
          `${canonical?.name.en || requirement.name} ${canonical?.name.ar || ""}`,
        );
      hints.push({
        itemId,
        ingredientId: requirement.ingredientId,
        name: item.name,
        qty: item.qty,
        unit: item.unit,
        reason,
        canLink,
      });
      break;
    }
  }
  return hints;
}

export function linkRecipeStock(
  state,
  assessment,
  { itemId, ingredientId, confirmed = false, now } = {},
) {
  if (confirmed !== true)
    throw new Error("Confirm the Kitchen match before using it in recipes.");
  const hint = getRecipeStockHints(state, assessment, { now }).find(
    (entry) => entry.itemId === itemId && entry.ingredientId === ingredientId,
  );
  if (!hint?.canLink)
    throw new Error(
      "This Kitchen match needs review. Check its product type, units and recorded date.",
    );
  return {
    ...state,
    items: {
      ...state.items,
      [itemId]: {
        ...state.items[itemId],
        ingredientId,
        cookingLinkDisabled: false,
      },
    },
  };
}
