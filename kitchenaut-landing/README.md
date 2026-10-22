# Nomli investor landing page

A single-page, static landing page for a pre-launch consumer app. Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no analytics, no trackers.

**Stage, as stated on the page:** interactive prototype built, product requirements and technical design complete, MVP build is next. The page claims no users, revenue or waitlist.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All markup, the inline SVG icon sprite, the N-and-spoon brand mark and every phone mockup (HTML and CSS only). |
| `styles.css` | Design tokens, layout, components and motion. Mobile-first (390px), scales to 1440px. |
| `script.js` | Scroll reveals, mobile menu, hero phone loop, FAQ accordion, walkthrough form, and the interactive demo in section 03 (its sample data sits at the top of `initDemo`). `CONTACT_EMAIL` is the first line. |
| `favicon.svg` | The N-and-spoon mark on an orange tile. |
| `images/` | AI-generated photography as responsive WebP files (about 0.8 MB for the whole set; each visitor loads only the sizes their screen needs). |
| `README.md` | This file. |

## Preview locally

Any static server works. From this folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

or

```sh
npx serve .
```

You can also open `index.html` directly in a browser. The page looks the same, but the Google Fonts request is the only thing that needs a network connection; without it the page falls back to Georgia and system-ui.

## Before you ship

1. **Contact email is intentionally blank.** The owner requested this on 22 October 2026. Inputs and submission stay disabled, with a visible explanation, until the constant on the first line of `script.js` is set:

   ```js
   const CONTACT_EMAIL = ""; // set only when the owner supplies an address
   ```

   Once configured, JavaScript enables the controls. The form opens a `mailto:` draft addressed to that email, with the visitor's name, email and firm. Nothing is sent or stored by the page. Without JavaScript, submission stays disabled.
2. **Deployment metadata is configured** for `https://giza-maker.github.io/Artifact/kitchenaut-landing/`: canonical, `og:url`, `og:image` and Twitter image. Update these if the deployment path or host changes.
3. **Re-read the content rules below** before editing any copy.

## Interactive demo (section 03, "Try it")

A tappable prototype of the app, built in HTML, CSS and vanilla JavaScript inside a phone frame. Everything in it is sample data, and the page says so under the phone: "Interactive demo built for this page. Prototype UI, sample data."

- **Kitchen:** groceries with quantities, storage location, days to expiry and low-stock flags, plus a Tools list (oven, hob, pans, toaster and so on) that you can switch on and off. "Scan groceries" plays a short scan that adds basil, tomatoes and eggs.
- **Cook:** recipes ranked by what is about to expire. A recipe adapts to your kitchen: a servings stepper, ingredient shortfalls, swaps (balsamic for lemon juice, butter for olive oil), and a method that changes with your tools (toaster, oven grill or pan). Cooking runs step by step with Chef Zara and a salt-trick timer. When you finish, the inventory updates and XP is added.
- Cooking is blocked until required groceries, substitutions and tools are available. Adding a shortfall to Restock does not add it to inventory. Reduce servings, scan groceries or resolve a substitution before starting.
- **Quests:** XP, level, streak, today's quest, the weekly challenge and the Chef School unlock at level 2.
- **Restock:** a list built from low stock, used-up items and recipe shortfalls. "Order online" is tagged Later and explains that it is an after-launch idea, not part of the 40-week plan.
- **Hub:** a feed post of the dish you just cooked.

The "Take the tour" panel next to the phone tracks five goals (stock your kitchen, set your tools, adapt a recipe, cook and level up, plan a restock) and shows demo XP going from 440 to 500. "Restart demo" resets everything.

To change the sample data, edit the `ITEMS`, `TOOLS` and `RECIPES` objects at the top of `initDemo` in `script.js`. The screens are rendered from that state, so the markup does not need to change.

The demo needs JavaScript. Without it the phone shows the starting Kitchen screen and a note asking the visitor to turn JavaScript on.

## Product name and logo

The owner selected **Nomli** on 22 October 2026. The header, footer, page metadata, accessible labels and walkthrough draft use that name. The logo is a dark N with a spoon forming its right stem, on an orange rounded tile; the inline SVG and favicon use identical geometry.

The existing `kitchenaut-landing/` deployment path is retained so shared links keep working. Lowercase references in metadata point to that URL; they are not visible brand labels.

## Deploy to GitHub Pages

The existing Artifact site publishes the root of the `gh-pages` branch. The reviewed site belongs in `kitchenaut-landing/`, preserving sibling artifacts. Deployment URL: `https://giza-maker.github.io/Artifact/kitchenaut-landing/`.

Original five commits are preserved on `claude/kitchenaut-landing-page-k103y8`, ending at `e81a172`. Review branch `codex/kitchenaut-review` starts from the current Pages branch and applies those five commits, then review fixes. Merge or fast-forward the reviewed branch onto the latest `gh-pages` before pushing; never replace the Artifact root with this folder.

The reviewed release uses Nomli. Contact remains blank and submission disabled.

## Alternative: deploy to Cloudflare Pages

If moving this static site to Cloudflare Pages later:

**Git integration (recommended)**

1. Put this folder in a Git repository (GitHub or GitLab) and push it.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** leave empty (there is no build)
   - **Build output directory:** `/` (the folder root)
   - **Root directory (advanced):** leave empty if this folder is the repository root. If the repository contains other things and this site lives in `kitchenaut-landing/`, set it to `kitchenaut-landing`.
4. Save and deploy, then add your custom domain under **Custom domains**.

**Direct upload (no Git)**

```sh
cd kitchenaut-landing
npx wrangler pages deploy . --project-name <your-project-name>
```

After the first deploy, add `canonical`, `og:url` and `og:image` (see "Before you ship").

## Content rules this page follows

Keep these when editing copy:

- The only statistics are the four UN Environment Programme Food Waste Index Report 2024 figures in the Problem section, with the source link. Do not add others.
- Pricing is labelled "Planned pricing, pre-launch assumptions". Targets are labelled "Targets, not results". Every roadmap phase is marked "Planned".
- No users, traction, revenue, waitlist numbers, press, testimonials, logos, awards, partners, investor names or team members.
- No claims of first, only or best. No competitors or third-party brands named. No model vendor named.
- No emoji are used. All phone screens are labelled "Prototype UI, sample data."
- Restocking and online grocery ordering are shown only as a later idea: the roadmap's "Later" note says they are not yet part of the plan, and the demo's "Order online" button is tagged Later. Do not present them as planned or built.
- Photography is AI-generated for this page (food and kitchens only, no people) and the footer says so. Do not swap in stock photos.
- No text under 14px anywhere, including inside the phone mockups (the phones are sized in `em`, so they scale as a unit and never go below 14px).

## Design notes

- Tokens live at the top of `styles.css` (`:root`): background `#120e0b`, surfaces `#1c1612` and `#261e18`, text `#f6efe6`, muted `#b8a99a`, orange `#f97316`, amber `#f59e0b`, green `#22c55e`, purple `#a855f7`. Lighter `-text` tints are used for small coloured text so AA contrast holds on the dark surfaces.
- Fonts: Fraunces (headings) and DM Sans (body) from Google Fonts, loaded without blocking render, with Georgia and system-ui fallbacks. This is the page's only third-party request.
- Photography: hero (a dark kitchen lit by an open fridge), the Problem section (wilted basil and an overripe tomato), five product panels, and the closing section (bruschetta). Ingredient, dish and Chef Zara images also appear inside the phone screens. Every image has explicit `width` and `height`, a responsive `srcset`, and `loading="lazy"` except the hero, which is preloaded with `fetchpriority="high"`.
- To regenerate or replace an image, keep the file names and sizes in `images/` (for example `hero-800.webp`, `hero-1280.webp`, `hero-2048.webp`) or update the matching `srcset` in `index.html`.
- The hero grain is a procedural SVG filter in CSS, not an image file.
- Motion is limited to transforms and opacity. With `prefers-reduced-motion: reduce` the hero phone stays on the Quests screen, reveals show immediately, the XP ladder is filled, and the pulse animations stop. In the demo, screen transitions are instant and the pulsing "tap here next" hint becomes a static outline. The hero phone loop also has a visible pause button and pauses while off-screen or in a background tab.
- Without JavaScript the page is fully readable: reveals are visible, every FAQ answer is open, the XP ladder is filled, and the nav links wrap onto their own row. Only the interactive demo needs JavaScript.

## Accessibility

Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered headings, a skip link, visible focus rings, labelled form fields with `autocomplete`, an FAQ built from buttons with `aria-expanded` and `aria-controls` and regions labelled by their questions, and `role="img"` with a descriptive `aria-label` on every static phone mockup and diagram. Decorative SVGs are `aria-hidden`.

The interactive demo is a labelled `role="group"` made of real buttons. Toggles use `aria-pressed`, the tab bar marks the current tab with `aria-current`, and progress is announced through a polite live region. The level-up dialog has `aria-modal`, inerts the background, contains keyboard focus, supports Escape, and returns focus to the kitchen heading on dismissal. Screen changes move focus to the new heading. Controls redrawn in place retain focus.

## Review checkpoint: 22 October 2026

- Fixed cooking and XP with missing ingredients, including depleted substitutions.
- Fixed level-up keyboard containment and background interaction.
- Invalidated cooking timers when leaving their screen; scan completion cannot focus a hidden screen.
- Changed demo XP bar animation from width updates to transforms.
- Fixed the narrow header overflowing at 360px.
- Verified full scan, tools, servings, swap, cooking, XP, inventory deduction, restock, Hub and restart flow in the in-app browser; checked mobile menu and FAQ keyboard behavior.
- Checked layouts at 360, 390, 768, 1280 and 1440px. Minimum rendered text is 14px; all 42 local asset references and internal anchors resolve, with one h1 and no duplicate IDs.
- Final local mobile Lighthouse measured 94 Performance, 100 Accessibility, 100 Best Practices and 100 SEO. This is a lab result, not production performance or full WCAG certification.
- Contact stays blank by owner request. Chef School's three free lessons versus level-based access remains a product copy decision; existing wording is preserved.

## Nomli rename: 22 October 2026

Owner approved the Nomli name, a new logo and deployment. Replaced all former product labels, email-draft wording and brand metadata; updated the shared inline logo and favicon. Public URL remains unchanged. Domain, handle and trademark availability have not been cleared.
