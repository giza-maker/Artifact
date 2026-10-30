# Nomli visual assets

M14 adds the Phosphor regular `magnifying-glass` and `sliders-horizontal` symbols from https://github.com/phosphor-icons/core/tree/main/assets/regular. Original library paths are retained inside the local sprite; `ICONS_LICENSE.txt` covers their MIT license. Fraunces, food atlases, recipe images and step media reuse the existing local assets.

The product uses local images and fonts so a demonstration does not depend on third-party requests.

- Existing kitchen, ingredient, bruschetta and Zara images preserve the original Nomli art direction.
- `images/recipe-omelette.webp`, `recipe-skillet.webp`, `recipe-salad.webp` were created with built-in ImageGen for this mobile redesign. Prompts: distinct photoreal basil omelette, tomato-and-egg skillet, and tomato/basil/lemon salad; warm natural side light, dark walnut/slate, realistic food texture, no text, hands or UI. They are illustrations of sample recipes.
- `images/receipt-camera.webp` was created with built-in ImageGen. Prompt: a complete fictional paper receipt on dark walnut, warm side light, natural paper texture, exact sample lines Tomatoes 18.50, Eggs 24.00, Basil 8.00, total SAR 50.50, dated 24 October 2026. It is the physical-receipt camera sample.
- Images were converted to WebP for delivery without changing composition. Original generated PNGs remain in the local artifact handoff.
- `app/icons.svg` contains selected Phosphor regular icons from `@phosphor-icons/core` 2.1.1. License: `app/ICONS_LICENSE.txt`. The storage tab uses the Phosphor archive icon under the internal `refrigerator` symbol name.
- DM Sans and Fraunces are hosted in `fonts/`, downloaded from Google's official font service. Their OFL licenses are beside the font files.

Camera, scanner and reward motion is authored in CSS/JavaScript. No generated video is used. All synthetic food and receipt imagery is disclosed as demonstration imagery.

`images/school-preview.png` is a browser capture of the implemented mobile Chef School, showing sample learning progress. It is a presentation image; the hero remains the live interactive app.

Lean MVP derivatives: recipe-*-card.webp (560 x 420) and recipe-*-mobile.webp (840 x 630) preserve the centered crop used by the UI. Created from existing Nomli recipe art with Sharp; originals retained. Android launcher PNGs and adaptive vector use the original N-and-spoon mark.
