import assert from "node:assert/strict";
import test from "node:test";

import { renderItemEditor } from "../web/item-editor-view.js";

const esc = (value) =>
  String(value ?? "").replace(
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

const options = (values, selected) =>
  values
    .map(
      (value) =>
        `<option${value === selected ? " selected" : ""}>${esc(value)}</option>`,
    )
    .join("");

const field = (label, name, value, type = "text", extra = "") =>
  `<label class="field">${esc(label)}<input name="${name}" type="${type}" value="${esc(value)}" ${extra}></label>`;

const button = (label, action, id, cls) =>
  `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}"><span>${esc(label)}</span></button>`;

const render = (overrides = {}) =>
  renderItemEditor({
    id: "stock-1",
    item: {
      name: "Tomato",
      qty: "١٢٫٥",
      unit: "kg",
      storage: "Pantry",
      expiry: "2026-11-12",
      expiryProvenance: "printed",
    },
    errorsHtml: '<p data-error role="alert" hidden></p>',
    photoHtml: '<section class="photo-editor">photo actions</section>',
    categoryHtml: '<label><select name="categoryId"><option selected>produce</option></select></label>',
    cookingLinkHtml:
      '<input name="ingredientId" value="tomato"><input name="gramsPerUnit" value="80"><input name="cookingLinkDisabled" value="false">',
    esc,
    icon: () => "",
    button,
    options,
    field,
    ...overrides,
  });

test("preserves item form hooks and all submitted field names", () => {
  const html = render();
  assert.match(html, /data-form="item" data-id="stock-1"/);
  for (const name of [
    "name",
    "qty",
    "unit",
    "storage",
    "expiry",
    "expiryProvenance",
    "categoryId",
    "ingredientId",
    "gramsPerUnit",
    "cookingLinkDisabled",
  ]) {
    assert.match(html, new RegExp(`name="${name}"`));
  }
  assert.match(html, /name="qty" type="text"[^>]*inputmode="decimal"/);
  assert.match(html, /value="١٢٫٥"/);
});

test("uses compact amount label and friendly unit text without changing value", () => {
  const html = render({
    item: {
      name: "Eggs",
      qty: "30",
      unit: "count",
      storage: "Fridge",
      expiry: "",
    },
  });
  assert.match(html, />Amount<input name="qty"/);
  assert.match(html, /<option value="count" selected>items<\/option>/);
  assert.doesNotMatch(html, />Quantity on hand</);
});

test("keeps only core stock fields before collapsed details", () => {
  const html = render();
  const details = html.indexOf('<details class="item-editor-details">');
  for (const name of ["name", "qty", "unit", "storage"]) {
    assert.ok(html.indexOf(`name="${name}"`) < details, `${name} is basic`);
  }
  for (const marker of [
    "photo-editor",
    'name="expiry"',
    'name="categoryId"',
    'name="ingredientId"',
    'name="gramsPerUnit"',
    'name="expiryProvenance"',
  ]) {
    assert.ok(html.indexOf(marker) > details, `${marker} is advanced`);
  }
  assert.doesNotMatch(html, /<details[^>]* open/);
});

test("renders friendly expiry source labels without changing values", () => {
  const html = render();
  assert.match(html, /<option value="user">Added by me<\/option>/);
  assert.match(
    html,
    /<option value="printed" selected>Printed on package<\/option>/,
  );
  assert.match(html, /<option value="estimated">My estimate<\/option>/);
});

test("new item has always-reachable Add action without delete", () => {
  const html = render({ id: "new" });
  assert.match(html, /<button class="btn btn-primary" type="submit">Add ingredient<\/button>/);
  assert.doesNotMatch(html, /item-delete/);
  assert.ok(html.indexOf("Add ingredient") > html.indexOf("</details>"));
});

test("edit item includes delete and Save changes actions", () => {
  const html = render();
  assert.match(html, /data-action="item-delete" data-id="stock-1"/);
  assert.match(html, />Save changes<\/button>/);
});

test("escapes item id and values while preserving trusted renderer fragments", () => {
  const html = render({
    id: 'x"><script>bad()</script>',
    item: {
      name: '<img src=x onerror="bad()">',
      qty: "1&2",
      unit: "count",
      storage: "Fridge",
      expiry: "",
    },
  });
  assert.doesNotMatch(html, /<script>|<img/);
  assert.match(html, /data-id="x&quot;&gt;&lt;script&gt;bad\(\)&lt;\/script&gt;"/);
  assert.match(html, /value="&lt;img src=x onerror=&quot;bad\(\)&quot;&gt;"/);
  assert.match(html, /value="1&amp;2"/);
  assert.match(html, /photo actions/);
});
