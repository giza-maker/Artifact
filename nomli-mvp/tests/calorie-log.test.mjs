import test from "node:test";
import assert from "node:assert/strict";
import {
  createCalorieEntry,
  dailyCalorieSummary,
  localDateKey,
  parseCalorieNumber,
} from "../web/calorie-log.js";

test("entry snapshots validate and copy supported values", () => {
  const entry = createCalorieEntry({
    id: "c1",
    date: "2099-12-31",
    name: "Dinner",
    kcal: 0,
    source: "food",
  });
  assert.deepEqual(entry, {
    id: "c1",
    date: "2099-12-31",
    name: "Dinner",
    kcal: 0,
    servings: 1,
    source: "food",
  });
  for (const overrides of [
    { date: "2026-02-30" },
    { kcal: NaN },
    { kcal: -1 },
    { servings: 0 },
    { name: "x".repeat(201) },
    { source: "scan" },
    { recipeId: "../bad" },
  ])
    assert.throws(() =>
      createCalorieEntry({
        id: "c1",
        date: "2026-10-29",
        name: "Lunch",
        kcal: 1,
        ...overrides,
      }),
    );
});

test("daily summary filters date, applies servings, and rounds display totals only", () => {
  const entries = [
    createCalorieEntry({
      id: "a",
      date: "2026-10-29",
      name: "A",
      kcal: 100.25,
      servings: 1.5,
    }),
    createCalorieEntry({ id: "b", date: "2026-10-30", name: "B", kcal: 300 }),
  ];
  assert.deepEqual(dailyCalorieSummary(entries, "2026-10-29", 140), {
    totalKcal: 150,
    entries: [entries[0]],
    goalKcal: 140,
    remainingKcal: 0,
    overGoalKcal: 10,
  });
  assert.equal(entries[0].kcal, 100.25);
});

test("localized calorie numbers parse while malformed values reject", () => {
  assert.equal(parseCalorieNumber("123.5"), 123.5);
  assert.equal(parseCalorieNumber("۱۲۳٫۵"), 123.5);
  assert.equal(parseCalorieNumber("١٢٣٫٥"), 123.5);
  assert.equal(parseCalorieNumber("١٬٠٠٠"), 1000);
  assert.equal(parseCalorieNumber("1,000.5"), 1000.5);
  assert.equal(parseCalorieNumber("\u2067۱۲۳٫۵\u2069"), 123.5);
  for (const value of [
    "",
    " ",
    ".5",
    "1.2.3",
    "1,2,3",
    "1,000",
    "١٢٣,٥",
    "١٬٠٠٠.٥",
    "12 kcal",
    "-1",
    NaN,
  ])
    assert.equal(parseCalorieNumber(value), null);
});

test("local date key uses local calendar fields near UTC boundary", () => {
  const instant = new Date("2026-10-29T23:30:00-03:00");
  const expected = `${instant.getFullYear()}-${String(instant.getMonth() + 1).padStart(2, "0")}-${String(instant.getDate()).padStart(2, "0")}`;
  assert.equal(localDateKey(instant), expected);
  assert.throws(() => localDateKey(new Date("bad")), /valid/);
});
