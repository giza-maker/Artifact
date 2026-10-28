import { getIngredient } from "./cook-catalog.js";
import { inferFoodCategory, getFoodCategory } from "./food-categories.js";
import { resolveCookingIdentity } from "./food-identity.js";

const positive = (value) =>
  typeof value === "number" && Number.isFinite(value) && value > 0;

export function syncCookingInventory(state) {
  if (state?.cooking) {
    return {
      state,
      linkedItemIds: [],
      categorizedItemIds: [],
      pendingItemIds: [],
    };
  }

  const linkedItemIds = [];
  const categorizedItemIds = [];
  const pendingItemIds = [];
  let nextItems = null;

  for (const [id, item] of Object.entries(state?.items ?? {})) {
    const validIngredient = getIngredient(item?.ingredientId);
    const validCategory = getFoodCategory(item?.categoryId);
    const inferred = validCategory
      ? null
      : inferFoodCategory({
          name: item?.name,
          ingredientId: validIngredient?.id,
        });
    const categoryId = validCategory?.id ?? inferred?.category?.id ?? null;
    const identity = validIngredient
      ? null
      : resolveCookingIdentity({
          name: item?.name,
          categoryId,
          cookingLinkDisabled: item?.cookingLinkDisabled === true,
        });
    const ingredientId =
      identity?.status === "matched" && getIngredient(identity.ingredientId)
        ? identity.ingredientId
        : (validIngredient?.id ?? null);
    const categoryChanged = !validCategory && categoryId !== null;
    const ingredientChanged = !validIngredient && ingredientId !== null;

    if (categoryChanged || ingredientChanged) {
      nextItems ??= { ...state.items };
      nextItems[id] = {
        ...item,
        ...(categoryChanged ? { categoryId } : {}),
        ...(ingredientChanged ? { ingredientId } : {}),
      };
      if (categoryChanged) categorizedItemIds.push(id);
      if (ingredientChanged) linkedItemIds.push(id);
    }

    if (positive(item?.qty) && !ingredientId) pendingItemIds.push(id);
  }

  return {
    state: nextItems ? { ...state, items: nextItems } : state,
    linkedItemIds,
    categorizedItemIds,
    pendingItemIds,
  };
}
