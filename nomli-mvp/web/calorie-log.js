"use strict";
import { parseLocalizedDecimal } from "./localized-number.js";

const SOURCES = new Set(["recipe", "manual", "food"]);
const SAFE_ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;

function fail(message) {
  throw new TypeError(message);
}

function validDateKey(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return (
    !Number.isNaN(parsed.valueOf()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function validId(value) {
  return typeof value === "string" && SAFE_ID.test(value);
}

export function localDateKey(date = new Date()) {
  if (!(date instanceof Date) || Number.isNaN(date.valueOf()))
    fail("Date must be valid.");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function createCalorieEntry({
  id,
  date,
  name,
  kcal,
  servings = 1,
  source = "manual",
  recipeId,
} = {}) {
  if (!validId(id)) fail("Calorie entry id is invalid.");
  if (!validDateKey(date)) fail("Calorie entry date is invalid.");
  if (typeof name !== "string" || !name.trim() || name.length > 200)
    fail("Calorie entry name is invalid.");
  if (!Number.isFinite(kcal) || kcal < 0 || kcal > 100000)
    fail("Calorie entry kcal is invalid.");
  if (!Number.isFinite(servings) || servings <= 0 || servings > 100)
    fail("Calorie entry servings are invalid.");
  if (!SOURCES.has(source)) fail("Calorie entry source is invalid.");
  if (recipeId !== undefined && !validId(recipeId))
    fail("Calorie entry recipe id is invalid.");
  return {
    id,
    date,
    name,
    kcal,
    servings,
    source,
    ...(recipeId === undefined ? {} : { recipeId }),
  };
}

export function dailyCalorieSummary(entries, date, goalKcal = null) {
  if (!Array.isArray(entries)) fail("Calorie entries must be a list.");
  if (!validDateKey(date)) fail("Calorie summary date is invalid.");
  if (
    goalKcal !== null &&
    (!Number.isInteger(goalKcal) || goalKcal <= 0 || goalKcal > 100000)
  )
    fail("Calorie goal is invalid.");
  const matching = entries
    .map((entry) => createCalorieEntry(entry))
    .filter((entry) => entry.date === date);
  const totalKcal = Math.round(
    matching.reduce((total, entry) => total + entry.kcal * entry.servings, 0),
  );
  return {
    totalKcal,
    entries: matching,
    goalKcal,
    remainingKcal: goalKcal === null ? null : Math.max(0, goalKcal - totalKcal),
    overGoalKcal: goalKcal === null ? 0 : Math.max(0, totalKcal - goalKcal),
  };
}

export function parseCalorieNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value !== "string") return null;
  try {
    const parsed = Number(parseLocalizedDecimal(value));
    return Number.isFinite(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
