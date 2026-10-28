import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FOOD_CATEGORIES } from "../web/food-categories.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "content", "food-art-catalog.json");
const publicRoot = path.join(root, "web", "public");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

function check(condition, message) {
  if (!condition) throw new Error(`Food art validation failed: ${message}`);
}

function webpDimensions(buffer, source) {
  check(buffer.length >= 20, `${source}: truncated WebP`);
  check(
    buffer.toString("ascii", 0, 4) === "RIFF",
    `${source}: missing RIFF magic`,
  );
  check(
    buffer.toString("ascii", 8, 12) === "WEBP",
    `${source}: missing WEBP magic`,
  );
  check(
    buffer.readUInt32LE(4) + 8 <= buffer.length,
    `${source}: truncated RIFF payload`,
  );

  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const type = buffer.toString("ascii", offset, offset + 4);
    const length = buffer.readUInt32LE(offset + 4);
    const data = offset + 8;
    check(data + length <= buffer.length, `${source}: truncated ${type} chunk`);

    if (type === "VP8X") {
      check(length >= 10, `${source}: short VP8X chunk`);
      return {
        width: 1 + buffer.readUIntLE(data + 4, 3),
        height: 1 + buffer.readUIntLE(data + 7, 3),
      };
    }
    if (type === "VP8L") {
      check(
        length >= 5 && buffer[data] === 0x2f,
        `${source}: invalid VP8L header`,
      );
      const bits = buffer.readUInt32LE(data + 1);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }
    if (type === "VP8 ") {
      check(length >= 10, `${source}: short VP8 chunk`);
      check(
        buffer[data + 3] === 0x9d &&
          buffer[data + 4] === 0x01 &&
          buffer[data + 5] === 0x2a,
        `${source}: invalid VP8 frame header`,
      );
      return {
        width: buffer.readUInt16LE(data + 6) & 0x3fff,
        height: buffer.readUInt16LE(data + 8) & 0x3fff,
      };
    }
    offset = data + length + (length % 2);
  }
  throw new Error(
    `Food art validation failed: ${source}: no VP8X, VP8L, or VP8 image chunk`,
  );
}

check(catalog.version === 1, "catalog version must be 1");
check(
  Array.isArray(catalog.atlases) && catalog.atlases.length === 17,
  "expected 17 atlases",
);
check(
  Array.isArray(catalog.items) && catalog.items.length === 272,
  "expected 272 items",
);
check(FOOD_CATEGORIES.length === 32, "expected exactly 32 food categories");

const categoryIds = new Set(FOOD_CATEGORIES.map(({ id }) => id));
check(categoryIds.size === 32, "food category IDs must be unique");
const itemIds = new Set(catalog.items.map(({ id }) => id));
check(itemIds.size === 272, "food art item IDs must be unique");

for (const category of FOOD_CATEGORIES) {
  if (category.representativeArtId) {
    check(
      itemIds.has(category.representativeArtId),
      `${category.id}: missing representative ${category.representativeArtId}`,
    );
  }
}

const atlasIds = new Set();
let totalBytes = 0;
for (const atlas of catalog.atlases) {
  check(
    /^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(atlas.id),
    `unsafe atlas ID ${atlas.id}`,
  );
  check(!atlasIds.has(atlas.id), `duplicate atlas ID ${atlas.id}`);
  atlasIds.add(atlas.id);
  check(
    atlas.columns === 4 && atlas.rows === 4,
    `${atlas.id}: expected 4x4 grid`,
  );
  check(
    atlas.src === `images/food/atlases/${atlas.id}.webp`,
    `${atlas.id}: unsafe or unexpected src`,
  );

  const assetPath = path.resolve(publicRoot, ...atlas.src.split("/"));
  check(
    assetPath.startsWith(`${publicRoot}${path.sep}`),
    `${atlas.id}: asset escapes public directory`,
  );
  check(fs.existsSync(assetPath), `${atlas.id}: missing ${atlas.src}`);
  const image = fs.readFileSync(assetPath);
  const { width, height } = webpDimensions(image, atlas.src);
  check(
    width === height,
    `${atlas.id}: atlas must be square, got ${width}x${height}`,
  );
  check(
    width >= 512,
    `${atlas.id}: atlas must be at least 512px, got ${width}px`,
  );
  totalBytes += image.length;
}

const slotsByAtlas = new Map(catalog.atlases.map(({ id }) => [id, new Set()]));
for (const item of catalog.items) {
  check(
    atlasIds.has(item.atlasId),
    `${item.id}: unknown atlas ${item.atlasId}`,
  );
  check(
    Number.isInteger(item.cellIndex) &&
      item.cellIndex >= 0 &&
      item.cellIndex < 16,
    `${item.id}: invalid cellIndex`,
  );
  const slots = slotsByAtlas.get(item.atlasId);
  check(
    !slots.has(item.cellIndex),
    `${item.atlasId}: duplicate cell ${item.cellIndex}`,
  );
  slots.add(item.cellIndex);
  check(
    Array.isArray(item.categoryIds) && item.categoryIds.length > 0,
    `${item.id}: missing categories`,
  );
  check(
    item.categoryIds.every((id) => categoryIds.has(id)),
    `${item.id}: unknown category`,
  );
}
for (const [atlasId, slots] of slotsByAtlas) {
  check(
    slots.size === 16,
    `${atlasId}: expected 16 occupied cells, got ${slots.size}`,
  );
}

console.log(
  `Food art valid: ${catalog.atlases.length} atlases, ${catalog.items.length} items, ${FOOD_CATEGORIES.length} categories, ${totalBytes} bytes`,
);
