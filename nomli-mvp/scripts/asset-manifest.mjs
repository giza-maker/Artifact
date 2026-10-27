import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..");
const entries = [];
async function visit(dir) {
  for (const entry of await readdir(path.join(root, dir), {
    withFileTypes: true,
  })) {
    const relative = path.posix.join(dir, entry.name);
    if (entry.isDirectory()) await visit(relative);
    else {
      const bytes = await readFile(path.join(root, relative));
      entries.push({
        path: relative,
        bytes: bytes.length,
        sha256: createHash("sha256").update(bytes).digest("hex"),
      });
    }
  }
}
for (const dir of ["web/public", "content", "fixtures"]) await visit(dir);
entries.sort((a, b) => a.path.localeCompare(b.path));
await writeFile(
  path.join(root, "asset-manifest.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      provenance:
        "Brand media reused from kitchenaut-landing/ASSETS.md; Phosphor MIT and fonts OFL licenses included. Content and fixtures authored synthetically for Nomli. See content/LICENSE.md and web/public/images/recipes/ASSETS.md for generated recipe imagery.",
      assets: entries,
    },
    null,
    2,
  ) + "\n",
);
console.log(`Manifest: ${entries.length} local assets, SHA-256 recorded.`);
