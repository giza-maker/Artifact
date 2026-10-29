import assert from "node:assert/strict";
import test from "node:test";
import catalog from "../content/recipes.json" with { type: "json" };
import {
  getCookingStepGuide,
  getCurrentStepAmounts,
} from "../web/cooking-guide.js";

test("all 60 curated steps have meaningful, source-preserving guides", () => {
  assert.equal(catalog.recipes.flatMap((r) => r.steps).length, 60);
  for (const recipe of catalog.recipes) {
    const canonical = new Set(recipe.ingredients.map((x) => x.ingredientId));
    recipe.steps.forEach((source, index) => {
      const guide = getCookingStepGuide(recipe, index);
      assert.ok(
        guide.title && !/^step\s+\d+$/i.test(guide.title),
        `${recipe.id}/${index} title`,
      );
      assert.ok(
        [
          "prep",
          "mix",
          "stovetop",
          "oven",
          "blend",
          "assemble",
          "rest",
        ].includes(guide.technique),
      );
      assert.ok(
        guide.ingredientIds.every((id) => canonical.has(id)),
        `${recipe.id}/${index} IDs`,
      );
      assert.equal(
        guide.instructions.join(" "),
        source,
        `${recipe.id}/${index} source`,
      );
    });
  }
});

test("authored guide IDs stay canonical and cover every recipe ingredient", () => {
  for (const recipe of catalog.recipes) {
    const canonical = new Set(recipe.ingredients.map((x) => x.ingredientId));
    const authored = recipe.steps.flatMap(
      (_, index) => getCookingStepGuide(recipe, index).ingredientIds,
    );
    assert.ok(
      authored.every((id) => canonical.has(id)),
      `${recipe.id} has stale guide ID`,
    );
    assert.deepEqual(
      [...new Set(authored)].sort(),
      [...canonical].sort(),
      `${recipe.id} ingredient coverage`,
    );
  }
});

test("multi-sentence source becomes readable instructions without rewriting", () => {
  const recipe = catalog.recipes.find((x) => x.id === "shakshuka_simple");
  const guide = getCookingStepGuide(recipe, 0);
  assert.deepEqual(guide.instructions, [
    "Heat oil over medium heat.",
    "Soften chopped onion and pepper for 6 to 8 minutes.",
  ]);
  assert.equal(guide.instructions.join(" "), recipe.steps[0]);
});

test("timer presets are sourced by the same step text", () => {
  for (const recipe of catalog.recipes)
    recipe.steps.forEach((source, index) => {
      for (const timer of getCookingStepGuide(recipe, index).timerPresets) {
        assert.ok(Number.isInteger(timer.seconds) && timer.seconds > 0);
        const seconds = timer.seconds;
        const amount = seconds % 60 ? seconds : seconds / 60;
        const unit = seconds % 60 ? /sec(?:ond)?s?/i : /min(?:ute)?s?/i;
        assert.match(
          source,
          new RegExp(`\\b${amount}\\b`),
          `${recipe.id}/${index}/${timer.label}`,
        );
        assert.match(source, unit, `${recipe.id}/${index}/${timer.label}`);
      }
    });
});

test("current-step amounts use frozen requirements without mutation", () => {
  const recipe = catalog.recipes.find((x) => x.id === "shakshuka_simple");
  const session = {
    requirements: [
      { ingredientId: "olive_oil", qty: 22.5, unit: "ml" },
      { ingredientId: "onion", qty: 150, unit: "g" },
      { ingredientId: "egg", qty: 6, unit: "pieces" },
    ],
  };
  const before = structuredClone(session);
  assert.deepEqual(
    getCurrentStepAmounts(recipe, 0, session),
    session.requirements.slice(0, 2),
  );
  assert.deepEqual(session, before);
  const result = getCurrentStepAmounts(recipe, 0, session);
  result[0].qty = 999;
  assert.equal(session.requirements[0].qty, 22.5);
});

test("unknown future recipes fall back safely to their raw source", () => {
  const recipe = {
    id: "future",
    ingredients: [{ id: "x", qty: 1, unit: "g" }],
    steps: [{ title: "Do a thing", text: "Keep this exact instruction." }],
  };
  assert.deepEqual(getCookingStepGuide(recipe, 0), {
    title: "Do a thing",
    technique: "prep",
    ingredientIds: [],
    instructions: ["Keep this exact instruction."],
    timerPresets: [],
  });
  assert.deepEqual(getCookingStepGuide(recipe, 4).instructions, []);
});
