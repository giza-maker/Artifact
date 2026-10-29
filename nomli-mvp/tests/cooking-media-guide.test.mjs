import test from "node:test";
import assert from "node:assert/strict";
import recipes from "../content/recipes.json" with { type: "json" };
import { getCookingStepMedia } from "../web/cooking-media.js";
import { getCookingStepGuide } from "../web/cooking-guide.js";
import { renderCookingExperience } from "../web/cooking-view.js";

test("all sixty cooking steps have distinct local demonstrations and observable cues", () => {
  const files = new Set();
  let count = 0;
  for (const recipe of recipes.recipes)
    recipe.steps.forEach((_, i) => {
      const media = getCookingStepMedia(recipe, i);
      assert.ok(media, `${recipe.id}/${i}`);
      assert.equal(media.title, getCookingStepGuide(recipe, i).title);
      assert.match(
        media.poster,
        new RegExp(`^media/cooking/${recipe.id}-step-${i + 1}\\.webp$`),
      );
      const motion = media.video ?? media.sequence;
      assert.match(
        motion,
        new RegExp(
          `^media/cooking/${recipe.id}-step-${i + 1}(?:-sequence\\.webp|\\.mp4)$`,
        ),
      );
      assert.ok(media.alt.length > 20 && media.lookFor.length > 10);
      assert.ok(
        !files.has(motion),
        "a final dish visual must not stand in for several steps",
      );
      files.add(motion);
      count++;
    });
  assert.equal(count, 60);
});

test("unknown or invalid steps do not borrow an unrelated cooking demonstration", () => {
  for (const [recipe, index] of [
    ["unknown", 0],
    ["herb_omelette", -1],
    ["herb_omelette", 3],
    ["herb_omelette", "1"],
    [null, 0],
  ])
    assert.equal(getCookingStepMedia(recipe, index), null);
});

test("active cooking renders the specific demonstration instead of the finished dish image", () => {
  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;");
  for (const source of recipes.recipes)
    source.steps.forEach((_, step) => {
      const recipe = { ...source, name: source.name.en, requiredTools: [] };
      const html = renderCookingExperience({
        recipe,
        session: {
          id: "test",
          phase: "cooking",
          servings: source.servings,
          step,
          requirements: [],
          allocations: [],
        },
        items: {},
        seconds: 120,
        speech: { phase: "idle" },
        canRead: false,
        esc,
        num: String,
        icon: () => "",
        ingredientLabel: String,
        toolLabel: String,
        thumbnail: () => "",
        errors: () => "",
      });
      const media = getCookingStepMedia(source, step);
      assert.ok(html.includes(media.video ?? media.sequence));
      assert.ok(
        !html.includes(`src="${source.image}"`),
        "finished meal is not a step illustration",
      );
      assert.ok(!html.includes('class="cook-hero"'));
    });
});
