"use strict";

const countFamily = (unit) =>
  ["count", "pieces", "slices", "cloves", "bunches"].includes(
    String(unit || "").toLowerCase(),
  );

export function applyRecipeStockMeasurement(
  state,
  { itemId, gramsPerUnit, snapshot },
) {
  const item = state?.items?.[itemId];
  if (!item || JSON.stringify(item) !== snapshot)
    throw new Error("Kitchen item changed. Check it again before measuring.");
  if (!countFamily(item.unit) || !(item.qty > 0) || item.gramsPerUnit > 0)
    throw new Error("This item no longer needs a per-unit weight.");
  if (
    !(
      typeof gramsPerUnit === "number" &&
      Number.isFinite(gramsPerUnit) &&
      gramsPerUnit > 0 &&
      gramsPerUnit <= 1e9
    )
  )
    throw new Error(
      "Enter grams greater than 0 and no more than 1,000,000,000.",
    );
  if (
    (state.cooking?.allocations ?? []).some(
      (allocation) => allocation?.id === itemId,
    )
  )
    throw new Error(
      "This item is allocated to active cooking and cannot be measured now.",
    );

  return {
    ...state,
    items: {
      ...state.items,
      [itemId]: { ...item, gramsPerUnit },
    },
  };
}
