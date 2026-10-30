import test from "node:test";
import assert from "node:assert/strict";
import {
  cookDiscoveryGroup,
  filterCookDiscovery,
  renderCookDiscovery,
  renderCookDiscoveryResults,
} from "../web/cook-discovery.js";

const recipe = (id, name, overrides = {}) => ({
  id,
  name,
  cuisine: "Egyptian",
  time: 25,
  servings: 2,
  image: `images/${id}.webp`,
  ...overrides,
});
const entry = (id, name, stockReady, missing = [], overrides = {}) => ({
  r: recipe(id, name, overrides),
  a: { stockReady, missing },
});
const dependencies = {
  icon: (name) => `<i data-icon="${name}"></i>`,
  servingsFor: () => 3,
  recipeAction: (r) =>
    `<button type="button" data-action="recipe" data-id="${r.id}">View recipe</button>`,
};

test("classification trusts stockReady and requires inventory for nearly ready", () => {
  assert.equal(
    cookDiscoveryGroup(entry("a", "Ready", true, ["x"]), 0),
    "ready",
  );
  assert.equal(cookDiscoveryGroup(entry("b", "Near", false, ["x"]), 3), "near");
  assert.equal(
    cookDiscoveryGroup(entry("c", "Near two", false, ["x", "y"]), 1),
    "near",
  );
  assert.equal(
    cookDiscoveryGroup(entry("d", "Empty kitchen", false, ["x"]), 0),
    "explore",
  );
  assert.equal(
    cookDiscoveryGroup(entry("e", "Far", false, ["x", "y", "z"]), 5),
    "explore",
  );
  assert.equal(
    cookDiscoveryGroup(entry("f", "Unknown mass", false, []), 5),
    "explore",
  );
});

test("explicit missing and measurement counts distinguish amount checks", () => {
  const measurementOnly = {
    ...entry("m", "Measured herbs", false, ["legacy assessment shortage"]),
    missingIngredientCount: 0,
    measurementCount: 2,
  };
  assert.equal(cookDiscoveryGroup(measurementOnly, 2), "near");
  assert.equal(cookDiscoveryGroup(measurementOnly, 0), "explore");

  const unknown = {
    ...entry("u", "Unknown", false, []),
    missingIngredientCount: 0,
    measurementCount: 0,
  };
  assert.equal(cookDiscoveryGroup(unknown, 2), "explore");
});

test("search and mode filters compose without mutating entries", () => {
  const entries = [
    entry("a", "Shakshuka", true),
    entry("b", "Lentil Soup", false, ["lentils"], { cuisine: "Levantine" }),
    entry("c", "Pasta", false, ["one", "two", "three"], { cuisine: "Italian" }),
  ];
  assert.deepEqual(
    filterCookDiscovery(entries, {
      inventoryCount: 2,
      mode: "near",
      query: "levant",
    }).map(({ r }) => r.id),
    ["b"],
  );
  assert.deepEqual(
    filterCookDiscovery(entries, { inventoryCount: 2, query: "SHAK" }).map(
      ({ r }) => r.id,
    ),
    ["a"],
  );
  assert.equal(entries.length, 3);
});

test("empty inventory explains setup while keeping recipes browsable", () => {
  const html = renderCookDiscovery({
    entries: [entry("a", "Shakshuka", false, ["egg"])],
    inventoryCount: 0,
    time: 30,
    ...dependencies,
  });
  assert.match(html, /Scan or add groceries/);
  assert.match(html, /You can still browse recipes below/);
  assert.match(html, /Shakshuka/);
  assert.match(html, />Explore</);
  assert.match(html, /1 ingredient missing/);
  assert.doesNotMatch(html, /READY NOW/);
});

test("renderer includes search, availability actions, time picker, and large recipe action hook", () => {
  const html = renderCookDiscovery({
    entries: [entry("a", "Shakshuka", true)],
    inventoryCount: 2,
    mode: "ready",
    query: "shak",
    time: 45,
    ...dependencies,
  });
  assert.match(html, /data-change="cook-search"/);
  assert.match(html, /value="shak"/);
  assert.match(html, /data-action="cook-browse" data-id="all"/);
  assert.match(
    html,
    /data-action="cook-browse" data-id="ready" aria-pressed="true"/,
  );
  assert.match(html, /data-action="cook-browse" data-id="near"/);
  assert.match(html, /data-change="cook-time"/);
  assert.match(html, /value="45" selected/);
  assert.match(html, /class="meal-choice-card"/);
  assert.match(html, /Ingredients ready/);
  assert.doesNotMatch(html, /cook-discovery-badge/);
  assert.match(html, /data-action="recipe"/);
  assert.match(html, /data-cook-discovery-results/);
});

test("measurement statuses never claim readiness and include true missing ingredients", () => {
  const html = renderCookDiscoveryResults({
    entries: [
      {
        ...entry("m", "Herb salad", false, ["herb", "lemon"]),
        missingIngredientCount: 1,
        measurementCount: 2,
      },
    ],
    inventoryCount: 3,
    ...dependencies,
  });
  assert.match(html, /Check 2 ingredient amounts · 1 ingredient missing/);
  assert.match(html, /A few ingredients or amounts left to check/);
  assert.doesNotMatch(html, /Ingredients ready/);
});

test("supplied button helper retains pressed state on every availability filter", () => {
  const html = renderCookDiscovery({
    entries: [],
    inventoryCount: 1,
    mode: "near",
    time: 30,
    button: (label, action, id, className) =>
      `<button type="button" class="${className}" data-action="${action}" data-id="${id}">${label}</button>`,
  });
  assert.match(html, /aria-pressed="false"[^>]+data-id="all"/);
  assert.match(html, /aria-pressed="false"[^>]+data-id="ready"/);
  assert.match(html, /aria-pressed="true"[^>]+data-id="near"/);
});

test("results renderer returns stable replaceable region without search control", () => {
  const html = renderCookDiscoveryResults({
    entries: [entry("a", "Shakshuka", true)],
    inventoryCount: 2,
    query: "shak",
    ...dependencies,
  });
  assert.match(html, /^<div data-cook-discovery-results>/);
  assert.match(html, /Shakshuka/);
  assert.doesNotMatch(html, /data-change="cook-search"/);
});

test("renderer escapes user-visible values and attribute values", () => {
  const hostile = entry(
    'bad"id',
    "<img src=x onerror=alert(1)>",
    false,
    ["x"],
    {
      cuisine: 'A&B"',
      image: 'images/x.webp" onerror="alert(1)',
    },
  );
  const html = renderCookDiscovery({
    entries: [hostile],
    inventoryCount: 1,
    query: "",
    time: 30,
    icon: () => "",
    servingsFor: () => 1,
    recipeAction: () => '<button type="button">Safe action</button>',
  });
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(html, /A&amp;B&quot;/);
  assert.match(html, /src="images\/x\.webp&quot; onerror=&quot;alert\(1\)"/);
  assert.doesNotMatch(html, /<img src=x onerror/);

  const searchHtml = renderCookDiscovery({
    entries: [],
    inventoryCount: 1,
    query: '" autofocus onfocus="alert(1)',
    time: 30,
  });
  assert.match(searchHtml, /value="&quot; autofocus onfocus=&quot;alert\(1\)"/);
});
