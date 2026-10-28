import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const catalog = JSON.parse(
  fs.readFileSync(
    new URL("../content/food-art-catalog.json", import.meta.url),
    "utf8",
  ),
);
const plan = JSON.parse(
  fs.readFileSync(
    new URL("../web/public/images/food/atlases/MANIFEST.json", import.meta.url),
    "utf8",
  ),
);
const categoryIds = new Set([
  "rice_grains",
  "pasta",
  "oil",
  "dairy",
  "eggs",
  "meat",
  "poultry",
  "fish",
  "vegetables",
  "fruit",
  "legumes",
  "spices",
  "bakery",
  "drinks",
  "condiments",
  "other",
  "nuts_seeds",
  "dried_fruit",
  "snacks",
  "sweets",
  "baking",
  "sweeteners",
  "breakfast",
  "tea_coffee",
  "frozen",
  "canned",
  "deli",
  "ready_meals",
  "plant_based",
  "baby_food",
  "spreads",
  "seafood",
]);

test("food art catalog preserves exact 17 by 16 atlas plan", () => {
  assert.equal(catalog.version, 1);
  assert.equal(catalog.atlases.length, 17);
  assert.equal(catalog.items.length, 272);

  for (const [atlasIndex, planned] of plan.atlases.entries()) {
    assert.deepEqual(catalog.atlases[atlasIndex], {
      id: planned.id,
      src: `images/food/atlases/${planned.id}.webp`,
      columns: 4,
      rows: 4,
    });
    const actual = catalog.items.filter((item) => item.atlasId === planned.id);
    assert.equal(actual.length, 16, planned.id);
    assert.deepEqual(
      actual.map((item) => item.id),
      planned.items,
      planned.id,
    );
    assert.deepEqual(
      actual.map((item) => item.cellIndex),
      Array.from({ length: 16 }, (_, index) => index),
      planned.id,
    );
  }
});

test("food art item metadata is unique, bilingual, and category-safe", () => {
  assert.equal(new Set(catalog.items.map((item) => item.id)).size, 272);
  for (const item of catalog.items) {
    assert.match(item.id, /^[a-z0-9]+(?:_[a-z0-9]+)*$/);
    assert.ok(item.en.trim(), `${item.id}: missing English label`);
    assert.ok(item.ar.trim(), `${item.id}: missing Arabic label`);
    assert.match(
      item.ar,
      /[\u0600-\u06ff]/,
      `${item.id}: Arabic label required`,
    );
    assert.ok(
      Array.isArray(item.categoryIds) && item.categoryIds.length > 0,
      `${item.id}: categories required`,
    );
    assert.ok(
      item.categoryIds.every((id) => categoryIds.has(id)),
      `${item.id}: unknown category`,
    );
    assert.deepEqual(Object.keys(item.aliases).sort(), ["ar", "en"]);
    assert.ok(
      item.aliases.en.every(
        (alias) => typeof alias === "string" && alias.trim(),
      ),
    );
    assert.ok(
      item.aliases.ar.every(
        (alias) => typeof alias === "string" && alias.trim(),
      ),
    );
  }
});

test("atlas paths are derived from atlas ids only", () => {
  for (const atlas of catalog.atlases) {
    assert.equal(atlas.src, `images/food/atlases/${atlas.id}.webp`);
    assert.match(
      atlas.src,
      /^images\/food\/atlases\/[a-z0-9]+(?:_[a-z0-9]+)*\.webp$/,
    );
  }
});

test("high-risk receipt names keep specific packaged and preparation aliases", () => {
  const byId = new Map(catalog.items.map((item) => [item.id, item]));
  assert.ok(byId.get("cola").aliases.en.includes("pepsi"));
  assert.ok(byId.get("cola").aliases.ar.includes("بيبسي"));
  assert.ok(byId.get("lemon_lime_soda").aliases.en.includes("7up"));
  assert.ok(byId.get("lemon_lime_soda").aliases.ar.includes("سفن"));
  assert.ok(byId.get("basmati_rice").aliases.ar.includes("أرز الساعة"));
  assert.ok(byId.get("vermicelli").aliases.ar.includes("شعرية"));
  assert.ok(byId.get("orzo").aliases.ar.includes("لسان عصفور"));
  assert.ok(byId.get("powdered_milk").aliases.en.includes("milk powder"));
  assert.ok(!byId.get("milk").aliases.en.includes("milk powder"));
  assert.ok(byId.get("tuna_can").categoryIds.includes("canned"));
  assert.ok(byId.get("frozen_peas").categoryIds.includes("frozen"));
  assert.ok(byId.get("plant_milk").categoryIds.includes("plant_based"));
});
