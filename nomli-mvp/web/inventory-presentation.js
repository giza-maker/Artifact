import { FOOD_CATEGORIES, inferFoodCategory } from "./food-categories.js";

const GROUPS = Object.freeze([
  Object.freeze({
    id: "produce",
    en: "Produce",
    ar: "الخضار والفاكهة",
    representativeCategoryId: "vegetables",
    categories: ["vegetables", "fruit"],
  }),
  Object.freeze({
    id: "dairy-eggs",
    en: "Dairy & eggs",
    ar: "الألبان والبيض",
    representativeCategoryId: "dairy",
    categories: ["dairy", "eggs"],
  }),
  Object.freeze({
    id: "proteins",
    en: "Proteins",
    ar: "البروتينات",
    representativeCategoryId: "meat",
    categories: [
      "meat",
      "poultry",
      "fish",
      "seafood",
      "deli",
      "plant_based",
      "legumes",
    ],
  }),
  Object.freeze({
    id: "grains",
    en: "Grains",
    ar: "الحبوب والمخبوزات",
    representativeCategoryId: "rice_grains",
    categories: ["rice_grains", "pasta", "bakery", "breakfast"],
  }),
  Object.freeze({
    id: "pantry",
    en: "Pantry",
    ar: "المؤن",
    representativeCategoryId: "oil",
    categories: [
      "oil",
      "spices",
      "condiments",
      "canned",
      "baking",
      "sweeteners",
      "nuts_seeds",
      "dried_fruit",
      "spreads",
    ],
  }),
  Object.freeze({
    id: "drinks-treats",
    en: "Drinks & treats",
    ar: "المشروبات والحلوى",
    representativeCategoryId: "drinks",
    categories: ["drinks", "tea_coffee", "snacks", "sweets"],
  }),
  Object.freeze({
    id: "prepared",
    en: "Prepared & special",
    ar: "جاهز ومتخصص",
    representativeCategoryId: "frozen",
    categories: ["frozen", "ready_meals", "baby_food"],
  }),
  Object.freeze({
    id: "other",
    en: "Other food",
    ar: "أطعمة أخرى",
    representativeCategoryId: "other",
    categories: ["other"],
  }),
]);

const knownCategoryIds = new Set(FOOD_CATEGORIES.map(({ id }) => id));

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}
function fallbackEscape(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}
function safeDaysLeft(daysLeft, item) {
  if (typeof daysLeft !== "function" || !item?.expiry) return null;
  const value = daysLeft(item);
  return Number.isFinite(value) ? value : null;
}

export function categoryRailItems() {
  return inventoryGroups();
}
export function foodCategoryItems() {
  return FOOD_CATEGORIES.map((category) => ({ ...category }));
}
export function inventoryGroups() {
  return GROUPS.map((group) => ({
    ...group,
    categories: [...group.categories],
  }));
}

export function deriveInventoryPresentation({
  items = {},
  search = "",
  storage = "All",
  sort = "expiry",
  category = "all",
  useSoon = false,
  daysLeft,
} = {}) {
  const query = text(search).toLocaleLowerCase("und");
  const source =
    items && typeof items === "object" ? Object.entries(items) : [];
  const visible = source.flatMap(([id, original], sourceIndex) => {
    if (!original || typeof original !== "object") return [];
    const inferred = inferFoodCategory(original).category?.id;
    const categoryId = knownCategoryIds.has(inferred) ? inferred : "other";
    const linkedDays = safeDaysLeft(daysLeft, original);
    const searchable = [
      original.name,
      original.nameAr,
      original.nameEn,
      original.storage,
    ]
      .map(text)
      .join(" ")
      .toLocaleLowerCase("und");
    if (storage !== "All" && original.storage !== storage) return [];
    const selectedGroup = GROUPS.find(({ id }) => id === category);
    if (
      category !== "all" &&
      categoryId !== category &&
      !selectedGroup?.categories.includes(categoryId)
    )
      return [];
    if (query && !searchable.includes(query)) return [];
    if (
      useSoon &&
      !(Number(original.qty) > 0 && linkedDays !== null && linkedDays <= 2)
    )
      return [];
    return [
      {
        id: String(id),
        item: original,
        categoryId,
        daysLeft: linkedDays,
        sourceIndex,
      },
    ];
  });
  visible.sort((a, b) => {
    if (sort === "name")
      return (
        text(a.item.name).localeCompare(text(b.item.name), undefined, {
          sensitivity: "base",
        }) || a.sourceIndex - b.sourceIndex
      );
    if (sort === "quantity")
      return (
        (Number(a.item.qty) || 0) - (Number(b.item.qty) || 0) ||
        a.sourceIndex - b.sourceIndex
      );
    return (
      (a.daysLeft ?? Infinity) - (b.daysLeft ?? Infinity) ||
      a.sourceIndex - b.sourceIndex
    );
  });
  const groups = GROUPS.map((group) => ({
    ...group,
    items: visible.filter(({ categoryId }) =>
      group.categories.includes(categoryId),
    ),
  })).filter((group) => group.items.length);
  return { entries: visible, groups };
}

export function renderCompactInventoryTile({
  id,
  item = {},
  thumbnail = () => "",
  esc = fallbackEscape,
  num = (value) => String(value ?? 0),
  daysLeft,
  ingredientLabel,
  getIngredient,
} = {}) {
  const linked =
    typeof getIngredient === "function"
      ? getIngredient(item.ingredientId)
      : null;
  const labels =
    typeof ingredientLabel === "function"
      ? ingredientLabel(item, linked)
      : null;
  const rawName = text(item.name);
  const splitName = rawName.split(/\s*[\/|·]\s*/, 2);
  const splitBilingual =
    splitName.length === 2 && /[\u0600-\u06ff]/.test(splitName[1]);
  const canonicalEn =
    text(labels?.en) ||
    text(linked?.name?.en) ||
    text(item.nameEn) ||
    (splitBilingual ? splitName[0] : rawName) ||
    "Unnamed item";
  const canonicalAr =
    text(labels?.ar) ||
    text(linked?.name?.ar) ||
    text(item.nameAr) ||
    (splitBilingual ? splitName[1] : "");
  const retailName = text(item.name);
  const qty = Number.isFinite(Number(item.qty)) ? Number(item.qty) : 0;
  const rawUnit = text(item.unit) || "item";
  const unit =
    rawUnit === "pieces"
      ? "pcs"
      : rawUnit === "l"
        ? "L"
        : rawUnit === "bunches" && qty === 1
          ? "bunch"
          : rawUnit;
  const left = safeDaysLeft(daysLeft, item);
  const freshness =
    left === null
      ? ""
      : left < 0
        ? `${Math.abs(left)} days past date`
        : left === 0
          ? "Date is today"
          : `${left} days left`;
  const urgent = qty > 0 && left !== null && left <= 2;
  return `<article class="inventory-tile" data-inventory-id="${esc(id)}"><button type="button" class="inventory-tile-edit" data-action="item-edit" data-id="${esc(id)}" aria-label="Edit ${esc(retailName || canonicalEn)}" title="${esc(retailName || canonicalEn)}">${thumbnail(id, item)}<span class="inventory-tile-copy"><b dir="auto">${esc(canonicalEn)}</b>${canonicalAr && canonicalAr !== canonicalEn ? `<span class="inventory-ar" lang="ar" dir="rtl">${esc(canonicalAr)}</span>` : ""}<span class="inventory-amount">${esc(num(qty))} ${esc(unit)}</span>${freshness ? `<small class="${urgent ? "use-soon" : "muted"}${left < 0 ? " is-expired" : ""}">${esc(freshness)}</small>` : ""}</span></button></article>`;
}
