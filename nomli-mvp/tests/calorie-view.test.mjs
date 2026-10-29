import assert from "node:assert/strict";
import test from "node:test";
import {
  renderCalorieDashboard,
  renderRecipeCalories,
} from "../web/calorie-view.js";

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

const tools = {
  esc,
  num: (value) => String(value),
  icon: (name) => `<i data-icon="${esc(name)}"></i>`,
};

function dashboard(summary, overrides = {}) {
  return renderCalorieDashboard({
    date: "2026-10-29",
    today: "2026-10-29",
    summary,
    ...tools,
    ...overrides,
  });
}

test("dashboard escapes entry content and emits diary actions", () => {
  const html = dashboard({
    totalKcal: 450,
    goalKcal: null,
    remainingKcal: null,
    overGoalKcal: 0,
    entries: [
      {
        id: 'id"><script>',
        name: 'فول & <script> "dish"',
        kcal: 450,
        servings: 2,
        source: "recipe",
      },
    ],
  });

  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /فول &amp; &lt;script&gt; &quot;dish&quot;/);
  assert.match(html, /data-action="calorie-edit"/);
  assert.match(html, /data-action="calorie-delete"/);
  assert.match(html, /data-id="id&quot;&gt;&lt;script&gt;"/);
  assert.match(html, /<strong>900 kcal<\/strong>/);
  assert.match(html, /Recipe estimate/);
});

test("dashboard keeps date controls, primary add, goal, info, and today actions", () => {
  const html = dashboard(
    {
      totalKcal: 0,
      entries: [],
      goalKcal: null,
      remainingKcal: null,
      overGoalKcal: 0,
    },
    { date: "2026-10-28" },
  );

  assert.match(html, /data-form="calorie-date"/);
  assert.match(html, /name="date" type="date" value="2026-10-28"/);
  assert.match(html, /data-action="calorie-today"/);
  assert.match(html, /data-action="calorie-add"/);
  assert.match(html, /data-action="calorie-goal"/);
  assert.match(html, /data-action="calorie-info"/);
  assert.match(html, /Logged on this date/);
  assert.match(html, /Food logging never changes Kitchen stock\./);
  assert.match(
    html,
    /Recipe calories are estimates; check packaged-food labels\./,
  );
});

test("zero goal is represented without NaN or invalid progress", () => {
  const html = dashboard({
    totalKcal: 100,
    entries: [],
    goalKcal: 0,
    remainingKcal: 0,
    overGoalKcal: 100,
  });

  assert.match(html, /Daily goal: 0 kcal/);
  assert.match(html, /Goal is set to 0 kcal\./);
  assert.doesNotMatch(html, /<progress/);
  assert.doesNotMatch(html, /NaN|Infinity/);
});

test("complete recipe estimate shows scaled values and log action", () => {
  const html = renderRecipeCalories({
    estimate: {
      totalKcal: 1200,
      perServingKcal: 300,
      complete: true,
      missing: [],
      knownKcal: 1200,
    },
    recipeId: 'meal"unsafe',
    ...tools,
  });

  assert.match(html, /<strong>300<\/strong> kcal/);
  assert.match(html, /1200 kcal total, scaled/);
  assert.match(html, /data-action="calorie-recipe"/);
  assert.match(html, /data-id="meal&quot;unsafe"/);
});

test("display rounds calorie values without changing serving precision", () => {
  const html = dashboard({
    totalKcal: 100.49999,
    entries: [
      {
        id: "precise",
        name: "Precise food",
        kcal: 10.123456,
        servings: 1.75,
        source: "manual",
      },
    ],
    goalKcal: 2000.4,
    remainingKcal: 1899.90001,
    overGoalKcal: 0,
  });

  assert.match(html, /<strong>100<\/strong><span>kcal/);
  assert.match(html, /<strong>18 kcal<\/strong>/);
  assert.match(html, /1\.75 servings/);
  assert.match(html, /Entered calories/);
  assert.doesNotMatch(html, /10\.123456|100\.49999|1899\.90001/);
});

test("partial and unknown estimates never claim zero or allow recipe logging", () => {
  const partial = renderRecipeCalories({
    estimate: {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [
        { ingredientId: "زيت_olive & <brand>", reason: "missing_kcal" },
      ],
      knownKcal: 275.49,
    },
    recipeId: "partial",
    ...tools,
  });
  const unknown = renderRecipeCalories({
    estimate: {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: [],
      knownKcal: null,
    },
    recipeId: "unknown",
    ...tools,
  });

  assert.match(partial, /Estimate incomplete/);
  assert.match(partial, /275 kcal counted/);
  assert.match(partial, /زيت olive &amp; &lt;brand&gt;/);
  assert.doesNotMatch(partial, /\[object Object\]/);
  assert.doesNotMatch(partial, /data-action="calorie-recipe"/);
  assert.match(partial, /data-action="calorie-manual" data-id="partial"/);
  assert.match(unknown, /No known ingredient calories are available yet\./);
  assert.doesNotMatch(unknown, />0 kcal/);
  assert.doesNotMatch(unknown, /data-action="calorie-recipe"/);
});

test("zero known calories remain unknown rather than a zero estimate", () => {
  const html = renderRecipeCalories({
    estimate: {
      totalKcal: null,
      perServingKcal: null,
      complete: false,
      missing: ["ingredient"],
      knownKcal: 0,
    },
    recipeId: "unknown-zero",
    ...tools,
  });

  assert.match(html, /Estimate incomplete/);
  assert.match(html, /No known ingredient calories are available yet\./);
  assert.doesNotMatch(html, />0 kcal/);
});
