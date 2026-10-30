import test from "node:test";
import assert from "node:assert/strict";
import { renderMealCompletion } from "../web/meal-completion.js";

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const icon = (name) => `<i data-icon="${esc(name)}"></i>`;
const button = (label, action, id, cls) =>
  `<button type="button" class="${esc(cls)}" data-action="${esc(action)}" data-id="${esc(id)}">${esc(label)}</button>`;
const recipe = { name: "Tomato stew", image: "images/recipes/tomato.webp" };

test("completion is gated by completed meal status and a recipe", () => {
  assert.equal(
    renderMealCompletion({ meal: null, recipe, esc, icon, button }),
    "",
  );
  assert.equal(
    renderMealCompletion({
      meal: { id: "m1", status: "review" },
      recipe,
      esc,
      icon,
      button,
    }),
    "",
  );
  assert.equal(
    renderMealCompletion({
      meal: { id: "m1", status: "undone" },
      recipe,
      esc,
      icon,
      button,
    }),
    "",
  );
  assert.equal(
    renderMealCompletion({
      meal: { id: "m1", status: "completed" },
      recipe: null,
      esc,
      icon,
      button,
    }),
    "",
  );
});

test("completion escapes recipe and meal values", () => {
  const html = renderMealCompletion({
    meal: { id: 'm1" onclick="bad', status: "completed" },
    recipe: {
      name: '<img src=x onerror="bad">',
      image: 'images/recipes/a" onerror="bad.webp',
    },
    esc,
    icon,
    button,
  });
  assert.doesNotMatch(
    html,
    /<img src=x|onclick="bad|src="images\/recipes\/a" onerror=/,
  );
  assert.match(html, /&lt;img src=x onerror=&quot;bad&quot;&gt;/);
  assert.match(html, /data-id="m1&quot; onclick=&quot;bad"/);
});

test("completion exposes navigation, dismissal and guarded undo without automatic side effects", () => {
  const html = renderMealCompletion({
    meal: { id: "meal-7", status: "completed" },
    recipe,
    esc,
    icon,
    button,
  });
  assert.match(html, /data-action="go" data-id="kitchen"/);
  assert.match(html, /data-action="meal-complete-dismiss"/);
  assert.match(html, /data-action="meal-undo-ask" data-id="meal-7"/);
  assert.doesNotMatch(
    html,
    /data-action="(?:meal-undo-confirm|cook-complete|calorie-add|calorie-save)"/,
  );
  assert.doesNotMatch(html, /<form|data-form=/);
});
