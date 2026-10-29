import assert from "node:assert/strict";
import test from "node:test";
import catalog from "../content/recipes.json" with { type: "json" };
import { renderCookingExperience } from "../web/cooking-view.js";

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

const baseRecipe = {
  id: "future_recipe",
  name: "Test meal",
  image: "",
  cardImage: "",
  requiredTools: ["pan"],
  steps: ["Cook it."],
};

const baseSession = {
  id: "session-1",
  rid: baseRecipe.id,
  phase: "prep",
  servings: 2,
  step: 0,
  seconds: 120,
  running: false,
  prepared: [],
  toolsConfirmed: false,
  requirements: [{ ingredientId: "tomato", qty: 125.5, unit: "g" }],
  allocations: [
    {
      id: "lot-1",
      ingredientId: "tomato",
      name: "Retail tomato",
      qty: 125.5,
      unit: "g",
    },
  ],
};

function render({
  recipe = baseRecipe,
  session = baseSession,
  items = {},
  chat = {},
} = {}) {
  return renderCookingExperience({
    recipe,
    session,
    items,
    seconds: session.seconds ?? 120,
    speech: { phase: "idle", error: "" },
    canRead: false,
    chat,
    esc,
    num: (value) => String(value),
    icon: (name) => `<i data-icon="${esc(name)}"></i>`,
    ingredientLabel: (id) =>
      id === "tomato" ? 'طماطم & Tomato <fresh> "red"' : id,
    toolLabel: (id) => (id === "pan" ? "مقلاة & pan" : id),
    thumbnail: (id, item) =>
      `<span data-thumb-id="${esc(id)}" data-thumb-name="${esc(item.name)}"></span>`,
    errors: () => "",
  });
}

function ids(markup) {
  return [...markup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
}

test("Zara stays reachable in every cooking phase and existing exchanges reopen without a new prompt", () => {
  for (const phase of ["prep", "cooking", "review"]) {
    const html = render({
      session: { ...baseSession, phase },
      chat: { hasConversation: true, pending: phase === "cooking" },
    });
    assert.match(html, /data-cooking-chat-shortcut/);
    assert.match(html, /data-action="cook-chat"/);
    if (phase === "cooking") {
      assert.match(html, /Keep cooking while Zara replies/);
      assert.doesNotMatch(html, /data-action="cook-ask"/);
    }
  }
});

test("prep renders frozen canonical quantity, allocated lot photo, and required confirmations", () => {
  const html = render({
    items: {
      "lot-1": {
        name: "متجر & Retail <lot>",
        ingredientId: "tomato",
        qty: 999,
        unit: "kg",
      },
    },
  });

  assert.match(html, /data-thumb-id="lot-1"/);
  assert.match(html, /data-thumb-name="متجر &amp; Retail &lt;lot&gt;"/);
  assert.match(html, /cook-prep-quantity">125\.5 g</);
  assert.doesNotMatch(html, /cook-prep-quantity">999 kg/);
  assert.match(
    html,
    /input type="checkbox" name="prepared" value="tomato"[^>]* required/,
  );
  assert.match(
    html,
    /input type="checkbox" name="toolsConfirmed"[^>]* required/,
  );
});

test("active step escapes bilingual labels and source instructions", () => {
  const recipe = {
    ...baseRecipe,
    name: 'وجبة & Meal <unsafe> "quoted"',
    steps: ['حرّك & stir <script>alert("x")</script>. ثم قدّم.'],
  };
  const html = render({
    recipe,
    session: { ...baseSession, phase: "cooking" },
  });

  assert.match(
    html,
    /حرّك &amp; stir &lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;\./,
  );
  assert.doesNotMatch(html, /<script>/);
});

test("review creates one required actual-use input per lot against current stock", () => {
  const allocations = [
    ...baseSession.allocations,
    {
      id: "lot-2",
      ingredientId: "tomato",
      name: "Second lot",
      qty: 20,
      unit: "g",
    },
  ];
  const html = render({
    session: { ...baseSession, phase: "review", allocations },
    items: {
      "lot-1": { name: "Live first", qty: 80, unit: "g" },
      "lot-2": { name: "Live second", qty: 12, unit: "g" },
    },
  });

  assert.match(
    html,
    /name="used-lot-1"[^>]*value="125\.5"[^>]*max="80"[^>]* required/,
  );
  assert.match(
    html,
    /name="used-lot-2"[^>]*value="20"[^>]*max="12"[^>]* required/,
  );
  assert.equal((html.match(/name="used-lot-[12]"/g) ?? []).length, 2);
  assert.match(html, /name="confirmed" required/);
  assert.match(html, /actual use against current stock/);
});

test("each phase emits unique element IDs and deduction submit exists only in review", () => {
  for (const phase of ["prep", "cooking", "review"]) {
    const html = render({ session: { ...baseSession, phase } });
    const renderedIds = ids(html);
    assert.equal(
      new Set(renderedIds).size,
      renderedIds.length,
      `${phase} contains duplicate IDs`,
    );
    if (phase === "review") {
      assert.match(html, /data-form="meal"/);
      assert.match(html, /Save meal & update Kitchen/);
    } else {
      assert.doesNotMatch(html, /data-form="meal"/);
      assert.doesNotMatch(html, /Save meal & update Kitchen/);
      assert.doesNotMatch(
        html,
        /data-action="[^"]*(?:deduct|meal-save)[^"]*"/i,
      );
    }
  }
});

test("active timer offers only presets authored for current source step", () => {
  const sourceRecipe = catalog.recipes.find(
    (entry) => entry.id === "shakshuka_simple",
  );
  const recipe = { ...sourceRecipe, name: sourceRecipe.name.en };
  const session = {
    ...baseSession,
    rid: recipe.id,
    phase: "cooking",
    requirements: recipe.ingredients.map((ingredient) => ({
      ingredientId: ingredient.ingredientId,
      qty: ingredient.quantity,
      unit: ingredient.unit,
    })),
    allocations: [],
  };
  const html = render({ recipe, session });

  assert.match(html, /data-action="cook-timer-preset" data-id="360">6 min/);
  assert.match(html, /data-action="cook-timer-preset" data-id="480">8 min/);
  assert.doesNotMatch(html, /data-id="30">30 sec/);
  assert.match(html, /Heat oil over medium heat\./);
  assert.match(html, /Soften chopped onion and pepper for 6 to 8 minutes\./);
});
