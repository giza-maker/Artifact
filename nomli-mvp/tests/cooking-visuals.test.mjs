import assert from "node:assert/strict";
import test from "node:test";
import visualsCatalog from "../content/cooking-visuals.json" with { type: "json" };
import recipesCatalog from "../content/recipes.json" with { type: "json" };
import { getCookingStepGuide } from "../web/cooking-guide.js";

const REQUIRED_TEXT_FIELDS = [
  "title",
  "sourceText",
  "alt",
  "lookFor",
  "visualPrompt",
  "motionPrompt",
  "technique",
];

const keyOf = ({ recipeId, stepIndex }) => `${recipeId}/${stepIndex}`;

test("cooking visuals cover every canonical recipe step exactly once", () => {
  assert.equal(visualsCatalog.schemaVersion, 1);
  assert.equal(visualsCatalog.visuals.length, 60);

  const expected = recipesCatalog.recipes.flatMap((recipe) =>
    recipe.steps.map((_, stepIndex) => `${recipe.id}/${stepIndex}`),
  );
  const actual = visualsCatalog.visuals.map(keyOf);

  assert.equal(new Set(actual).size, actual.length, "duplicate visual key");
  assert.deepEqual([...actual].sort(), [...expected].sort());
});

test("visual metadata preserves canonical source and guide labels", () => {
  const recipes = new Map(
    recipesCatalog.recipes.map((recipe) => [recipe.id, recipe]),
  );

  for (const visual of visualsCatalog.visuals) {
    const recipe = recipes.get(visual.recipeId);
    assert.ok(recipe, `${keyOf(visual)} unknown recipe`);
    assert.ok(
      Number.isInteger(visual.stepIndex),
      `${keyOf(visual)} step index`,
    );
    assert.equal(
      visual.sourceText,
      recipe.steps[visual.stepIndex],
      `${keyOf(visual)} source`,
    );

    const guide = getCookingStepGuide(recipe, visual.stepIndex);
    assert.equal(visual.title, guide.title, `${keyOf(visual)} title`);
    assert.equal(
      visual.technique,
      guide.technique,
      `${keyOf(visual)} technique`,
    );
    for (const field of REQUIRED_TEXT_FIELDS)
      assert.ok(
        typeof visual[field] === "string" && visual[field].trim(),
        `${keyOf(visual)} ${field}`,
      );
  }
});

test("descriptions are distinct, stage-specific, and production ready", () => {
  for (const field of ["alt", "lookFor", "visualPrompt", "motionPrompt"]) {
    const values = visualsCatalog.visuals.map((visual) =>
      visual[field].trim().toLowerCase(),
    );
    assert.equal(
      new Set(values).size,
      values.length,
      `${field} must be distinct`,
    );
  }

  for (const visual of visualsCatalog.visuals) {
    const key = keyOf(visual);
    assert.ok(visual.alt.length >= 45, `${key} specific alt`);
    assert.ok(visual.lookFor.length >= 20, `${key} observable cue`);
    assert.match(visual.visualPrompt, /realistic/i, `${key} realism`);
    assert.match(visual.visualPrompt, /warm dark kitchen/i, `${key} kitchen`);
    assert.match(visual.visualPrompt, /natural hand/i, `${key} hands`);
    assert.match(
      visual.visualPrompt,
      /(45-degree|overhead) close-up/i,
      `${key} camera`,
    );
    assert.match(
      visual.visualPrompt,
      /warm natural sidelight/i,
      `${key} light`,
    );
    assert.match(visual.visualPrompt, /single .* action/i, `${key} one action`);
    assert.match(
      visual.visualPrompt,
      /no .*text.*logos/i,
      `${key} no text or logos`,
    );
    assert.match(
      visual.motionPrompt,
      /^5-second stationary-camera shot:/i,
      `${key} motion format`,
    );
    assert.match(
      visual.motionPrompt,
      /no camera movement, text, or logos\.$/i,
      `${key} stationary motion`,
    );
    assert.doesNotMatch(
      visual.lookFor,
      /safe|fully cooked|done|doneness/i,
      `${key} observable only`,
    );
  }
});

test("raw meat scenes avoid unsafe visual combinations and proof claims", () => {
  const meatVisuals = visualsCatalog.visuals.filter((visual) =>
    [
      "chicken_rice_one_pot",
      "sheet_pan_chicken_veg",
      "beef_kofta_pan",
    ].includes(visual.recipeId),
  );

  for (const visual of meatVisuals) {
    assert.doesNotMatch(
      visual.alt,
      /proves? safe|proves? cooked/i,
      keyOf(visual),
    );
    assert.doesNotMatch(
      visual.lookFor,
      /safe|fully cooked|doneness/i,
      keyOf(visual),
    );
  }

  const chickenCut = visualsCatalog.visuals.find(
    (visual) =>
      visual.recipeId === "sheet_pan_chicken_veg" && visual.stepIndex === 0,
  );
  assert.match(chickenCut.visualPrompt, /dedicated .*poultry board/i);
  assert.match(chickenCut.visualPrompt, /vegetables .* absent/i);
});
