import assert from "node:assert/strict";
import test from "node:test";
import {
  foodArtworkStyle,
  getCategoryArtwork,
  getFoodArtwork,
} from "../web/food-art.js";

const id = (name, options = {}) => getFoodArtwork({ name, ...options }).id;

test("resolves specific English, branded, Arabic, and packed names", () => {
  assert.equal(id("Pepsi 330ml"), "cola");
  assert.equal(id("7UP 330ml"), "lemon_lime_soda");
  assert.equal(id("Brand Basmati Rice 1kg"), "basmati_rice");
  assert.equal(id("أرز بسمتي ١كجم"), "basmati_rice");
  assert.equal(id("Brown rice"), "brown_rice");
  assert.equal(id("Orzo pasta"), "orzo");
  assert.equal(id("Vermicelli pasta"), "vermicelli");
  assert.equal(id("Whole milk"), "milk");
  assert.equal(id("Powdered milk"), "powdered_milk");
  assert.equal(id("Frozen peas"), "frozen_peas");
  assert.equal(id("Canned chickpeas"), "canned_chickpeas");
});

test("uses canonical ingredient labels without assigning canonical identity", () => {
  const art = getFoodArtwork({
    name: "unlabelled pack",
    ingredientId: "rice_basmati_dry",
  });
  assert.equal(art.id, "basmati_rice");
  assert.equal(Object.hasOwn(art, "ingredientId"), false);
  assert.ok(Object.isFrozen(art));
});

test("explicit category gates detailed matches and wins mismatches", () => {
  assert.equal(id("Pepsi", { categoryId: "drinks" }), "cola");
  const mismatch = getFoodArtwork({ name: "Pepsi", categoryId: "vegetables" });
  assert.equal(mismatch.categoryId, "vegetables");
  assert.notEqual(mismatch.id, "cola");
});

test("specific item name wins over a different linked ingredient illustration", () => {
  assert.equal(
    getFoodArtwork({
      name: "Brown rice",
      ingredientId: "rice_basmati_dry",
      categoryId: "rice_grains",
    }).id,
    "brown_rice",
  );
});

test("unknown and hostile names fall back to safe category artwork", () => {
  const unknown = getFoodArtwork({ name: "foodunknown" });
  assert.equal(unknown.categoryId, "other");
  assert.match(unknown.src, /^images\/food\//);
  const hostile = getFoodArtwork({ name: "url(javascript:alert(1))" });
  assert.doesNotMatch(foodArtworkStyle(hostile), /javascript:/);
  assert.equal(getCategoryArtwork("__proto__").categoryId, "other");
  assert.equal(getCategoryArtwork({ id: "constructor" }).categoryId, "other");
});

test("builds deterministic sprite CSS and resolves URL only with base", () => {
  const art = getFoodArtwork({ name: "tomato" });
  const pure = foodArtworkStyle(art);
  assert.match(pure, /^--food-atlas:url\("images\/food\/atlases\//);
  assert.match(pure, /;--food-x:[\d.]+%;--food-y:[\d.]+%$/);
  const absolute = foodArtworkStyle(art, {
    baseUrl: "https://nomli.test/app/",
  });
  assert.match(
    absolute,
    /url\("https:\/\/nomli\.test\/app\/images\/food\/atlases\//,
  );
});
