const UNITS = [
  ["g", "g"],
  ["kg", "kg"],
  ["ml", "ml"],
  ["l", "l"],
  ["count", "items"],
  ["pieces", "pieces"],
  ["bunches", "bunches"],
  ["slices", "slices"],
  ["cloves", "cloves"],
];

const STORAGE = ["Fridge", "Freezer", "Pantry", "Spices"];
const EXPIRY_SOURCES = [
  ["user", "Added by me"],
  ["printed", "Printed on package"],
  ["estimated", "My estimate"],
];

export function renderItemEditor({
  id,
  item,
  errorsHtml,
  photoHtml,
  categoryHtml,
  cookingLinkHtml,
  esc,
  icon: _icon,
  button,
  options,
  field,
}) {
  const isNew = id === "new";
  const expirySource =
    item.expiryProvenance || (item.estimated ? "estimated" : "user");
  const expirySourceOptions = EXPIRY_SOURCES.map(
    ([value, label]) =>
      `<option value="${value}"${value === expirySource ? " selected" : ""}>${esc(label)}</option>`,
  ).join("");
  const unitOptions = UNITS.map(
    ([value, label]) =>
      `<option value="${value}"${value === item.unit ? " selected" : ""}>${esc(label)}</option>`,
  ).join("");

  return `<form class="item-editor-form" data-form="item" data-id="${esc(id)}">
    ${errorsHtml}
    <div class="item-editor-basics">
      ${field("Ingredient name", "name", item.name, "text", 'maxlength="200" dir="auto" required autocomplete="off"')}
      <div class="item-editor-stock-row">
        ${field("Amount", "qty", item.qty, "text", 'inputmode="decimal" dir="ltr" maxlength="128" required autocomplete="off"')}
        <label class="field">Unit<select name="unit" required>${unitOptions}</select></label>
        <label class="field item-editor-location">Location<select name="storage">${options(STORAGE, item.storage)}</select></label>
      </div>
    </div>
    <details class="item-editor-details">
      <summary><span>More details</span><small>Expiry, photo, category and cooking link</small></summary>
      <div class="item-editor-details-body">
        ${field("Expiry (optional)", "expiry", item.expiry || "", "date")}
        ${photoHtml}
        ${categoryHtml}
        <div class="cook-link-fields">${cookingLinkHtml}</div>
        <label class="field">Expiry source<select name="expiryProvenance">${expirySourceOptions}</select><small>Used only when expiry is entered.</small></label>
      </div>
    </details>
    <div class="modal-actions item-editor-actions">
      ${isNew ? "" : button("Delete ingredient", "item-delete", id, "btn-quiet")}
      <button class="btn btn-primary" type="submit">${isNew ? "Add ingredient" : "Save changes"}</button>
    </div>
  </form>`;
}
