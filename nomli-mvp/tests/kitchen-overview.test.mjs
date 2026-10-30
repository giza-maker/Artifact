import test from "node:test";
import assert from "node:assert/strict";
import { renderKitchenOverview } from "../web/kitchen-overview.js";

const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const icon = (name) => `<i data-icon="${name}"></i>`;
const button = (label, action, id, cls) =>
  `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}"><span>${esc(label)}</span></button>`;
const options = (values, selected) =>
  values
    .map(
      (value) =>
        `<option${value === selected ? " selected" : ""}>${esc(value)}</option>`,
    )
    .join("");
const base = { esc, icon, button, options };

test("empty kitchen prioritizes scan, keeps manual add, and omits inventory controls", () => {
  const html = renderKitchenOverview({
    ...base,
    items: {},
    rowsHtml: "UNUSED",
  });

  assert.match(html, /data-action="go" data-id="scan"/);
  assert.match(html, /btn-primary[^>]*data-action="go"/);
  assert.match(html, /data-action="item-edit" data-id="new"/);
  assert.doesNotMatch(html, /data-change="(?:search|storage|sort)"/);
  assert.doesNotMatch(html, /data-inventory-list/);
  assert.doesNotMatch(html, /UNUSED/);
});

test("stocked kitchen preserves inventory handlers, supplied rows, use-soon cue, and intake actions", () => {
  const row = '<div class="inventory-row" data-safe-row>Tomato</div>';
  const html = renderKitchenOverview({
    ...base,
    items: { tomato: { qty: 2 }, emptyJar: { qty: 0 } },
    soon: 1,
    search: "tom",
    storage: "Fridge",
    sort: "name",
    rowsHtml: row,
  });

  assert.match(html, /1 ingredient in stock/);
  assert.match(html, /<span>Use soon<\/span><b>1<\/b>/);
  assert.match(html, /data-change="search"/);
  assert.match(html, /data-change="storage"/);
  assert.match(html, /data-change="sort"/);
  assert.match(html, /data-inventory-list/);
  assert.ok(html.includes(row));
  assert.match(html, /data-id="scan"/);
  assert.match(html, /data-action="item-edit" data-id="new"/);
  assert.doesNotMatch(html, /kitchen-import-success/);
  assert.doesNotMatch(html, /data-action="go" data-id="cook"/);
});

test("fresh import shows reviewed count and an explicit meal-finding navigation", () => {
  const html = renderKitchenOverview({
    ...base,
    items: { tomato: { qty: 2 }, mint: { qty: 1 } },
    recentImportCount: 2,
    rowsHtml: '<div class="inventory-row">Rows</div>',
  });

  assert.match(html, /class="kitchen-import-success"/);
  assert.match(html, /2 items reviewed/);
  assert.match(html, /Ready to choose a meal\?/);
  assert.match(html, /data-action="go" data-id="cook"/);
  assert.doesNotMatch(
    html,
    /data-action="cook-start"|data-action="item-edit" data-id="(?:tomato|mint)"/,
  );
});

test("kitchen tools retain all utility destinations behind details", () => {
  const html = renderKitchenOverview({ ...base, items: {} });

  assert.match(html, /<details class="kitchen-tools">/);
  for (const id of ["shopping", "expenses", "calories", "profile"])
    assert.match(html, new RegExp(`data-action="go" data-id="${id}"`));
});

test("user-controlled search is escaped while pre-escaped rows remain intact", () => {
  const html = renderKitchenOverview({
    ...base,
    items: { one: { qty: 1 } },
    search: '\"><script>alert(1)</script>',
    rowsHtml: "<p>safe &amp; ready</p>",
  });

  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&quot;&gt;&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.match(html, /<p>safe &amp; ready<\/p>/);
});
