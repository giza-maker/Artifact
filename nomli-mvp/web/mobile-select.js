import { getFoodCategory } from "./food-categories.js";
import { foodArtworkStyle, getCategoryArtwork } from "./food-art.js";

const pickers = new WeakMap();
let sequence = 0;
let active = null;

function fieldName(select) {
  const explicit =
    select.getAttribute("data-picker-label") ||
    select.getAttribute("aria-label");
  if (explicit) return explicit;
  const ids = select.getAttribute("aria-labelledby");
  if (ids)
    return ids
      .split(/\s+/)
      .map((id) => document.getElementById(id)?.textContent || "")
      .join(" ")
      .trim();
  return (
    Array.from(select.labels || [])
      .map((label) => {
        const copy = label.cloneNode(true);
        copy
          .querySelectorAll(
            "select, button, input, textarea, small, .mobile-select-error",
          )
          .forEach((el) => el.remove());
        return copy.textContent.trim();
      })
      .join(" ") ||
    select.name ||
    "Choose option"
  );
}

function pickerIcon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("mobile-select-icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `icons.svg#${name}`);
  svg.append(use);
  return svg;
}

function foodCategoryArt(value) {
  const category = getFoodCategory(value);
  if (!category) return null;
  const art = document.createElement("span");
  const artwork = getCategoryArtwork(category);
  art.className = "food-category-art picker-food-art";
  art.dataset.foodArt = artwork.categoryId;
  art.dataset.foodArtId = artwork.id;
  art.style.cssText = foodArtworkStyle(artwork);
  art.setAttribute("aria-hidden", "true");
  return art;
}

function focusIdentity(select) {
  return {
    id: select.id,
    name: select.name,
    form: select.form?.getAttribute("data-form"),
    change: select.getAttribute("data-change"),
    dataId: select.getAttribute("data-id"),
  };
}

function restorePickerFocus(proxy, identity) {
  if (proxy.isConnected) {
    proxy.focus({ preventScroll: true });
    return;
  }
  const replacement = Array.from(document.querySelectorAll("select")).find(
    (select) => {
      if (identity.id) return select.id === identity.id;
      if (identity.name)
        return (
          select.name === identity.name &&
          select.form?.getAttribute("data-form") === identity.form
        );
      return (
        identity.change &&
        select.getAttribute("data-change") === identity.change &&
        select.getAttribute("data-id") === identity.dataId
      );
    },
  );
  const target =
    pickers.get(replacement)?.proxy || document.querySelector("[data-title]");
  if (target) {
    if (!target.matches("button") && !target.hasAttribute("tabindex"))
      target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
}

function openPicker(select, proxy) {
  if (select.matches(":disabled")) return;
  active?.close();
  if (
    !select.dispatchEvent(
      new CustomEvent("nomli:picker-open", { bubbles: true, cancelable: true }),
    )
  )
    return;
  const identity = focusIdentity(select);
  const dialog = document.createElement("dialog");
  dialog.className = "mobile-select-sheet";
  const titleId = `mobile-picker-title-${++sequence}`;
  dialog.setAttribute("aria-labelledby", titleId);
  const heading = document.createElement("h2");
  heading.id = titleId;
  heading.textContent = fieldName(select);
  const header = document.createElement("div");
  header.className = "mobile-select-header";
  const close = document.createElement("button");
  close.type = "button";
  close.className = "mobile-select-close";
  close.textContent = "Done";
  close.setAttribute("aria-label", `Close ${heading.textContent}`);
  header.append(heading, close);
  const list = document.createElement("div");
  list.className = "mobile-select-options";
  const search = document.createElement("input");
  search.type = "search";
  search.placeholder = "Search options";
  search.setAttribute("aria-label", `Search ${heading.textContent}`);
  search.className = "mobile-select-search";
  const empty = document.createElement("p");
  empty.className = "mobile-select-empty";
  empty.textContent = "No matching options";
  empty.setAttribute("role", "status");
  function render() {
    list.replaceChildren();
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const child of select.children) {
      const group = child.tagName === "OPTGROUP" ? child : null;
      const options = group ? Array.from(group.children) : [child];
      const matching = options.filter(
        (option) =>
          option.tagName === "OPTION" &&
          !option.hidden &&
          (!query ||
            `${group?.label || ""} ${option.label}`
              .toLocaleLowerCase()
              .includes(query)),
      );
      if (!matching.length) continue;
      if (group) {
        const label = document.createElement("p");
        label.className = "mobile-select-group";
        label.textContent = group.label;
        list.append(label);
      }
      for (const option of matching) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "mobile-select-option";
        button.disabled = option.disabled || !!group?.disabled;
        button.setAttribute("aria-pressed", String(option.selected));
        const text = document.createElement("span");
        text.textContent = option.label;
        const check = pickerIcon("check");
        check.style.visibility = option.selected ? "visible" : "hidden";
        const art =
          select.getAttribute("data-picker-kind") === "food-category"
            ? foodCategoryArt(option.value)
            : null;
        if (art) {
          const copy = document.createElement("span");
          copy.className = "picker-food-option-copy";
          copy.append(art, text);
          button.append(copy, check);
        } else button.append(text, check);
        button.addEventListener("click", () => {
          const changed = select.selectedIndex !== option.index;
          select.selectedIndex = option.index;
          if (changed) {
            select.dispatchEvent(new Event("input", { bubbles: true }));
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
          pickers.get(select)?.sync();
          dialog.close();
        });
        list.append(button);
        count++;
      }
    }
    empty.hidden = count > 0;
  }
  dialog.append(header);
  if (select.options.length > 8) dialog.append(search);
  dialog.append(list, empty);
  search.addEventListener("input", render);
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    }
  });
  dialog.addEventListener("cancel", (event) => {
    event.stopPropagation();
  });
  dialog.addEventListener(
    "close",
    () => {
      proxy.setAttribute("aria-expanded", "false");
      if (active === dialog) active = null;
      dialog.remove();
      restorePickerFocus(proxy, identity);
    },
    { once: true },
  );
  document.body.append(dialog);
  render();
  proxy.setAttribute("aria-expanded", "true");
  active = dialog;
  dialog.showModal();
  (select.options.length > 8
    ? search
    : list.querySelector('button[aria-pressed="true"]:not(:disabled)') ||
      list.querySelector("button:not(:disabled)") ||
      close
  ).focus({ preventScroll: true });
}

/** Upgrade single selects; call again after rendering or changing values programmatically. */
export function initMobileSelects(root = document) {
  if (
    typeof HTMLDialogElement === "undefined" ||
    !HTMLDialogElement.prototype.showModal
  )
    return;
  const selects = [
    ...(root.matches?.("select") ? [root] : []),
    ...root.querySelectorAll("select"),
  ];
  for (const select of selects) {
    if (select.multiple || select.size > 1) continue;
    if (pickers.has(select)) {
      pickers.get(select).sync();
      continue;
    }
    const proxy = document.createElement("button");
    proxy.type = "button";
    proxy.className = "mobile-select-trigger";
    proxy.setAttribute("aria-haspopup", "dialog");
    proxy.setAttribute("aria-expanded", "false");
    const error = document.createElement("span");
    error.id = `mobile-select-error-${++sequence}`;
    error.className = "mobile-select-error";
    error.hidden = true;
    error.setAttribute("aria-live", "polite");
    select.classList.add("mobile-select-native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");
    select.after(proxy, error);
    function sync() {
      proxy.disabled = select.matches(":disabled");
      const name = fieldName(select);
      const selected = select.selectedOptions[0]?.label || "Choose option";
      const value = document.createElement("span");
      value.textContent = selected;
      const caret = pickerIcon("caret-right");
      caret.classList.add("mobile-select-caret");
      proxy.replaceChildren(value, caret);
      proxy.setAttribute(
        "aria-label",
        `${name}${select.required ? " (required)" : ""}: ${selected}`,
      );
      const described = [
        select.getAttribute("aria-describedby"),
        !error.hidden ? error.id : "",
      ]
        .filter(Boolean)
        .join(" ");
      if (described) proxy.setAttribute("aria-describedby", described);
      else proxy.removeAttribute("aria-describedby");
      const invalid =
        select.getAttribute("aria-invalid") === "true" ||
        (!error.hidden && !select.validity.valid);
      proxy.setAttribute("aria-invalid", String(invalid));
      if (select.validity.valid) {
        error.hidden = true;
        error.textContent = "";
        proxy.setAttribute(
          "aria-invalid",
          String(select.getAttribute("aria-invalid") === "true"),
        );
      }
    }
    proxy.addEventListener("click", () => openPicker(select, proxy));
    select.addEventListener("focus", () =>
      proxy.focus({ preventScroll: true }),
    );
    select.addEventListener("change", sync);
    select.addEventListener("invalid", (event) => {
      event.preventDefault();
      error.textContent = select.validationMessage;
      error.hidden = false;
      sync();
      // Native validation emits invalid for every field; focus only first invalid select.
      const first = select.form
        ? Array.from(select.form.elements).find(
            (field) => field.willValidate && !field.validity.valid,
          )
        : null;
      if (!first || first === select) proxy.focus({ preventScroll: true });
    });
    select.form?.addEventListener("reset", () => setTimeout(sync, 0));
    const observer = new MutationObserver(sync);
    observer.observe(select, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });
    pickers.set(select, { sync, proxy });
    sync();
  }
}
