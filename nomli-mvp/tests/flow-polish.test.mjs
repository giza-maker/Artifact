import test from "node:test";
import assert from "node:assert/strict";
import { COOK_RECIPES } from "../web/cook-catalog.js";
import { getCookingStepGuide } from "../web/cooking-guide.js";
import { getCookingStepMedia } from "../web/cooking-media.js";
import {
  renderConnectionSetup,
  renderRecipeIntro,
  renderRecipePreview,
  renderScanHome,
  renderZaraWelcome,
} from "../web/flow-polish.js";

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
const icon = (name) => `<i data-icon="${esc(name)}"></i>`;
const button = (label, action, id = "", cls = "btn-secondary") =>
  `<button type="button" class="btn ${esc(cls)}" data-action="${esc(action)}" data-id="${esc(id)}"><span>${esc(label)}</span></button>`;
const heading = (kicker, title, description) =>
  `<header><p>${esc(kicker)}</p><h1>${esc(title)}</h1><p>${esc(description)}</p></header>`;
const field = (label, name, value, type, extra = "") =>
  `<label>${esc(label)}<input name="${esc(name)}" type="${esc(type)}" value="${esc(value)}" ${extra}></label>`;

test("scan sources stay enabled while exposing connection and manual alternatives", () => {
  const html = renderScanHome({ connected: false, heading, button, icon });
  const sourceButtons = [
    "receipt-paper",
    "groceries",
    "receipt-digital",
    "expiry",
  ];

  for (const id of sourceButtons) {
    assert.match(
      html,
      new RegExp(`<button[^>]+data-action="scan-choose"[^>]+data-id="${id}"`),
    );
  }
  assert.doesNotMatch(html, /data-action="scan-choose"[^>]*disabled/);
  assert.match(html, /data-action="scan-settings"/);
  assert.match(html, /data-action="item-edit" data-id="new"/);
  assert.match(html, /<h1>Add groceries<\/h1>/);
  assert.match(html, /review each item before saving/);
});

test("shared connection setup preserves field names, QR/manual actions, and escaped values", () => {
  const unsafeToken = '"><script>token()</script>';
  const unsafeUrl = 'https://example.test/\"><img src=x onerror=bad()>';
  const html = renderConnectionSetup({
    config: { apiUrl: unsafeUrl, deviceToken: unsafeToken },
    native: true,
    esc,
    errorsHtml: "<p data-error hidden></p>",
    field,
  });

  assert.match(html, /data-form="scan-config"/);
  assert.match(html, /name="deviceToken"/);
  assert.match(html, /name="apiUrl"/);
  assert.match(html, /data-action="scan-setup-qr"/);
  assert.match(html, /data-action="scan-test"/);
  assert.match(html, /type="submit"/);
  assert.doesNotMatch(html, /<script>|<img src=x/);
  assert.ok(html.includes(esc(unsafeToken)));
  assert.ok(html.includes(esc(unsafeUrl)));
});

test("browser connection setup keeps manual setup without a QR action", () => {
  const html = renderConnectionSetup({
    config: {},
    native: false,
    esc,
    errorsHtml: "",
    field,
  });

  assert.doesNotMatch(html, /data-action="scan-setup-qr"/);
  assert.match(html, /name="deviceToken"/);
  assert.match(html, /name="apiUrl"/);
  assert.match(html, /Connect Nomli/);
});

test("Zara empty state offers local actions without sending a request", () => {
  const html = renderZaraWelcome({
    panel: false,
    session: null,
    inventoryCount: 0,
    readyRecipe: null,
    esc,
    icon,
    button,
  });

  assert.match(html, /data-action="go" data-id="scan"/);
  assert.match(html, /data-action="item-edit" data-id="new"/);
  assert.match(html, /data-action="go" data-id="cook"/);
  assert.doesNotMatch(html, /data-action="assistant-(?:send|suggestion)"/);
  assert.doesNotMatch(html, /zara-entry-kicker/);
});

test("Zara ready, session, and use-soon states only prefill explicit-send prompts", () => {
  const retail = 'Retail <script>bad()</script> & "raw"';
  const ready = renderZaraWelcome({
    panel: false,
    session: null,
    inventoryCount: 2,
    readyRecipe: { id: "safe-recipe", name: retail },
    soonNames: [retail, "Mint"],
    esc,
    icon,
    button,
  });
  const session = renderZaraWelcome({
    panel: false,
    session: { id: "active" },
    inventoryCount: 2,
    readyRecipe: null,
    soonNames: [],
    esc,
    icon,
    button,
  });

  assert.match(ready, /data-action="recipe" data-id="safe-recipe"/);
  assert.match(ready, /data-action="assistant-prompt"/);
  assert.ok(ready.includes(esc(retail)));
  assert.doesNotMatch(
    ready,
    /<script>|data-action="assistant-(?:send|suggestion)"/,
  );
  assert.match(session, /data-action="cook-resume"/);
  assert.match(session, /data-action="assistant-prompt"/);
  assert.doesNotMatch(session, /data-action="assistant-(?:send|suggestion)"/);
  assert.doesNotMatch(ready, /zara-entry-kicker/);
  assert.doesNotMatch(session, /zara-entry-kicker/);
});

test("recipe intro preserves supplied primary action and readiness copy", () => {
  const primaryHtml =
    '<button data-action="cook-start" data-primary>Prepare</button>';
  const html = renderRecipeIntro({
    recipe: {
      id: "dish",
      name: "Dish <unsafe>",
      image: 'image\" onerror=bad()',
      prepMinutes: 8,
      cookMinutes: 15,
      steps: ["One", "Two", "Three"],
    },
    readiness: {
      title: "Ready <now>",
      description: 'Everything & "available"',
    },
    primaryHtml,
    esc,
    button,
    icon,
  });

  assert.ok(html.includes(primaryHtml));
  assert.match(html, /data-action="recipe-preview" data-id="dish"/);
  assert.match(html, /Preview 3 steps/);
  assert.ok(html.includes(esc("Ready <now>")));
  assert.ok(html.includes(esc('Everything & "available"')));
  assert.doesNotMatch(html, /YOUR COOKING PLAN|class="eyebrow"/);
  assert.doesNotMatch(html, /<unsafe>|src="image" onerror=/);
  assert.ok(html.includes(esc('image" onerror=bad()')));
});

test("all 20 recipe previews render 60 authored, non-mutating visual steps", () => {
  assert.equal(COOK_RECIPES.length, 20);
  const posters = new Set();
  let stepCount = 0;

  for (const recipe of COOK_RECIPES) {
    const html = renderRecipePreview({ recipe, esc });
    const renderedSteps = html.match(/<li>/g) ?? [];
    assert.equal(renderedSteps.length, recipe.steps.length, recipe.id);
    assert.doesNotMatch(
      html,
      /data-action="(?:cook-start|actual-use|meal-|item-edit|shopping-add)/,
      recipe.id,
    );

    recipe.steps.forEach((_, index) => {
      const guide = getCookingStepGuide(recipe, index);
      const media = getCookingStepMedia(recipe, index);
      assert.ok(media?.poster, `${recipe.id} step ${index + 1} poster`);
      assert.ok(media?.alt, `${recipe.id} step ${index + 1} alt`);
      assert.ok(guide.title.trim(), `${recipe.id} step ${index + 1} title`);
      assert.ok(
        guide.instructions.length &&
          guide.instructions.every((text) => text.trim()),
        `${recipe.id} step ${index + 1} instructions`,
      );
      assert.ok(!posters.has(media.poster), `duplicate poster ${media.poster}`);
      posters.add(media.poster);
      assert.ok(
        html.includes(esc(media.poster)),
        `${recipe.id} poster rendered`,
      );
      assert.ok(html.includes(esc(guide.title)), `${recipe.id} title rendered`);
      for (const instruction of guide.instructions)
        assert.ok(
          html.includes(esc(instruction)),
          `${recipe.id} instruction rendered`,
        );
      stepCount += 1;
    });
  }

  assert.equal(stepCount, 60);
  assert.equal(posters.size, 60);
});

test("recipe preview escapes authored text and media attributes", () => {
  const original = COOK_RECIPES[0];
  const recipe = {
    ...original,
    steps: ["Mix <script>bad()</script> & serve."],
  };
  const html = renderRecipePreview({ recipe, esc });

  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /Mix &lt;script&gt;bad\(\)&lt;\/script&gt; &amp; serve\./);
});
