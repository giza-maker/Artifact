import foodArtCatalog from "../content/food-art-catalog.json" with { type: "json" };
import { getIngredient } from "./cook-catalog.js";
import {
  FOOD_CATEGORIES,
  getFoodCategory,
  inferFoodCategory,
} from "./food-categories.js";

const LEGACY_ATLAS = "images/food/nomli-food-atlas.png";
const MAX_NAME_LENGTH = 200;
const SAFE_ATLAS_SRC = /^images\/food\/atlases\/[a-z0-9_-]+\.webp$/;

function normalize(value) {
  if (typeof value !== "string") return "";
  return value
    .slice(0, MAX_NAME_LENGTH)
    .normalize("NFKC")
    .toLocaleLowerCase("und")
    .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/([\p{L}])([\p{N}])/gu, "$1 $2")
    .replace(/([\p{N}])([\p{L}])/gu, "$1 $2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

const wholePhrase = (text, phrase) =>
  phrase && ` ${text} `.includes(` ${phrase} `);

const atlasIndex = new Map();
for (const atlas of foodArtCatalog.atlases ?? []) {
  if (
    atlas &&
    typeof atlas.id === "string" &&
    SAFE_ATLAS_SRC.test(atlas.src) &&
    Number.isInteger(atlas.columns) &&
    atlas.columns > 0 &&
    atlas.columns <= 16 &&
    Number.isInteger(atlas.rows) &&
    atlas.rows > 0 &&
    atlas.rows <= 16
  ) {
    atlasIndex.set(
      atlas.id,
      Object.freeze({
        src: atlas.src,
        columns: atlas.columns,
        rows: atlas.rows,
      }),
    );
  }
}

const itemIndex = new Map();
const matchEntries = [];
for (const item of foodArtCatalog.items ?? []) {
  const atlas = atlasIndex.get(item?.atlasId);
  if (
    !atlas ||
    typeof item.id !== "string" ||
    !/^[a-z0-9_]+$/.test(item.id) ||
    !Number.isInteger(item.cellIndex) ||
    item.cellIndex < 0 ||
    item.cellIndex >= atlas.columns * atlas.rows
  )
    continue;
  const categoryIds = Object.freeze(
    [
      ...new Set(Array.isArray(item.categoryIds) ? item.categoryIds : []),
    ].filter((id) => typeof id === "string" && getFoodCategory(id)),
  );
  const stored = Object.freeze({ item, atlas, categoryIds });
  itemIndex.set(item.id, stored);
  const names = [
    item.en,
    item.ar,
    ...(Array.isArray(item.aliases?.en) ? item.aliases.en : []),
    ...(Array.isArray(item.aliases?.ar) ? item.aliases.ar : []),
  ];
  for (const value of names) {
    const phrase = normalize(value);
    if (phrase)
      matchEntries.push({
        phrase,
        stored,
        specificity: phrase.split(" ").length,
      });
  }
}

// Receipt brands and packaging words often carry more meaning than generic food names.
const EXTRA_ALIASES = {
  cola: ["pepsi", "coca cola", "coke", "بيبسي", "كوكا كولا", "كوكاكولا"],
  lemon_lime_soda: ["7up", "7 up", "seven up", "sprite", "سفن اب", "سبرايت"],
  basmati_rice: ["basmati rice", "ارز بسمتي", "رز بسمتي"],
  brown_rice: ["brown rice", "ارز بني", "رز بني"],
  orzo: ["orzo", "لسان عصفور"],
  vermicelli: ["vermicelli", "شعريه"],
  milk: ["whole milk", "full fat milk", "حليب كامل الدسم", "لبن كامل الدسم"],
  powdered_milk: ["powdered milk", "milk powder", "حليب بودره", "لبن بودره"],
  frozen_peas: [
    "frozen peas",
    "frozen green peas",
    "بسله مجمده",
    "بازلاء مجمده",
  ],
  canned_chickpeas: ["canned chickpeas", "tinned chickpeas", "حمص معلب"],
};
for (const [id, values] of Object.entries(EXTRA_ALIASES)) {
  const stored = itemIndex.get(id);
  if (!stored) continue;
  for (const value of values) {
    const phrase = normalize(value);
    matchEntries.push({
      phrase,
      stored,
      specificity: phrase.split(" ").length,
    });
  }
}
matchEntries.sort(
  (a, b) =>
    b.specificity - a.specificity ||
    b.phrase.length - a.phrase.length ||
    a.stored.item.id.localeCompare(b.stored.item.id),
);

function descriptor(stored, categoryId, source) {
  return Object.freeze({
    id: stored.item.id,
    src: stored.atlas.src,
    columns: stored.atlas.columns,
    rows: stored.atlas.rows,
    cellIndex: stored.item.cellIndex,
    categoryId: categoryId ?? stored.categoryIds[0] ?? "other",
    source,
  });
}

function legacyCategory(category) {
  const fallback = getFoodCategory("other") ?? FOOD_CATEGORIES.at(-1);
  const selected = category ?? fallback;
  return Object.freeze({
    id: selected?.id ?? "other",
    src: LEGACY_ATLAS,
    columns: 4,
    rows: 4,
    cellIndex: Number.isInteger(selected?.atlasIndex)
      ? selected.atlasIndex
      : 15,
    categoryId: selected?.id ?? "other",
    source: "category",
  });
}

export function getCategoryArtwork(categoryOrId) {
  const category =
    typeof categoryOrId === "string"
      ? getFoodCategory(categoryOrId)
      : getFoodCategory(categoryOrId?.id);
  const selected = category ?? getFoodCategory("other");
  const representative = itemIndex.get(selected?.representativeArtId);
  return representative
    ? descriptor(representative, selected.id, "category")
    : legacyCategory(selected);
}

function findMatch(queries, explicitCategoryId) {
  for (const entry of matchEntries) {
    if (
      explicitCategoryId &&
      !entry.stored.categoryIds.includes(explicitCategoryId)
    )
      continue;
    if (queries.some((query) => wholePhrase(query, entry.phrase)))
      return entry.stored;
  }
  return null;
}

export function getFoodArtwork({ name, ingredientId, categoryId } = {}) {
  const explicitCategory = getFoodCategory(categoryId);
  const ingredient = getIngredient(ingredientId);
  const namedMatch = findMatch([normalize(name)], explicitCategory?.id);
  if (namedMatch)
    return descriptor(
      namedMatch,
      explicitCategory?.id ?? namedMatch.categoryIds[0],
      "name",
    );
  const queries = [];
  if (ingredient) {
    queries.push(
      normalize(ingredient.name?.en),
      normalize(ingredient.name?.ar),
      ...(ingredient.aliases?.en ?? []).map(normalize),
      ...(ingredient.aliases?.ar ?? []).map(normalize),
    );
  }
  const usableQueries = queries.filter(Boolean);
  // A confirmed cooking identity can supply its own illustration even when an
  // old receipt assigned the lot to a different shelf section. This changes
  // artwork only; it does not infer identity or rewrite the user's category.
  const matched =
    findMatch(usableQueries, explicitCategory?.id) ??
    (ingredient ? findMatch(usableQueries, null) : null);
  if (matched)
    return descriptor(
      matched,
      explicitCategory?.id ?? matched.categoryIds[0],
      ingredient ? "ingredient" : "name",
    );

  if (explicitCategory) return getCategoryArtwork(explicitCategory);
  const inferred = inferFoodCategory({ name, ingredientId });
  return getCategoryArtwork(inferred.category);
}

export function foodArtworkStyle(artwork, { baseUrl } = {}) {
  const columns = Number.isInteger(artwork?.columns) ? artwork.columns : 0;
  const rows = Number.isInteger(artwork?.rows) ? artwork.rows : 0;
  const cellIndex = Number.isInteger(artwork?.cellIndex)
    ? artwork.cellIndex
    : -1;
  const trustedSrc =
    artwork?.src === LEGACY_ATLAS || SAFE_ATLAS_SRC.test(artwork?.src ?? "")
      ? artwork.src
      : LEGACY_ATLAS;
  const safeColumns = columns > 0 && columns <= 16 ? columns : 4;
  const safeRows = rows > 0 && rows <= 16 ? rows : 4;
  const safeCell =
    cellIndex >= 0 && cellIndex < safeColumns * safeRows ? cellIndex : 15;
  const knownBase =
    typeof baseUrl === "string"
      ? baseUrl
      : typeof document !== "undefined" && typeof document.baseURI === "string"
        ? document.baseURI
        : null;
  let src = trustedSrc;
  if (knownBase) {
    try {
      src = new URL(trustedSrc, knownBase).href;
    } catch {
      src = trustedSrc;
    }
  }
  const x =
    safeColumns === 1
      ? 0
      : ((safeCell % safeColumns) * 100) / (safeColumns - 1);
  const y =
    safeRows === 1
      ? 0
      : (Math.floor(safeCell / safeColumns) * 100) / (safeRows - 1);
  return `--food-atlas:url("${src}");--food-x:${x}%;--food-y:${y}%`;
}
