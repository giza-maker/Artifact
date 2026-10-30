import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectUrl = new URL("../", import.meta.url);

function cssRootVariable(css, name) {
  const root = css.match(/:root\s*\{([\s\S]*?)\}/)?.[1] ?? "";
  return root
    .match(new RegExp(`(?:^|\\n)\\s*${name}\\s*:\\s*([^;]+)`))?.[1]
    .trim();
}

function relativeLuminance(hex) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

test("Android native chrome follows the light editorial surface", async () => {
  const [configSource, editorialCss] = await Promise.all([
    readFile(new URL("capacitor.config.json", projectUrl), "utf8"),
    readFile(new URL("web/editorial-theme.css", projectUrl), "utf8"),
  ]);
  const config = JSON.parse(configSource);
  const appBackground = cssRootVariable(editorialCss, "--bg");
  const webViewBackground = config.android?.backgroundColor?.toLowerCase();
  const systemBarsStyle = config.plugins?.SystemBars?.style?.toUpperCase();

  assert.match(
    appBackground ?? "",
    /^#[0-9a-f]{6}$/i,
    "editorial --bg must be an opaque hex color",
  );
  assert.equal(
    webViewBackground,
    appBackground.toLowerCase(),
    "WebView startup surface must match editorial --bg",
  );
  assert.ok(
    relativeLuminance(appBackground) > 0.5,
    "editorial surface must remain light",
  );
  assert.notEqual(
    systemBarsStyle,
    "DEFAULT",
    "device night mode must not choose native glyph contrast",
  );
  assert.equal(
    systemBarsStyle,
    "LIGHT",
    "light native bars require dark status and navigation glyphs",
  );
});
