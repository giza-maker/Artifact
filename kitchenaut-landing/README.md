# Nomli product prototype and investor landing page

Nomli joins three pillars: **Learn** practical cooking skills, **Manage** the kitchen, and **Play** through useful progress. This repository contains a polished mobile product prototype and its cinematic investor landing page. The live phone is the centerpiece of the landing page; the same app engine opens independently. It is not a production service.

## Open the prototype

- Live product: https://giza-maker.github.io/Artifact/kitchenaut-landing/app/index.html
- Guided investor path: https://giza-maker.github.io/Artifact/kitchenaut-landing/app/index.html?investor=1
- Landing page: https://giza-maker.github.io/Artifact/kitchenaut-landing/

The landing page embeds the same mobile app at `app/index.html?embed=1&surface=hero&v=20261024-4`. Same-origin screen shortcuts control that live phone. There is one prototype engine, not separate marketing and presentation versions.

For local preview, serve this folder with any static server, for example `python -m http.server 8000`, then open `http://localhost:8000/app/index.html?investor=1`. The offline package uses a local static server, so no internet connection is required. The app has no remote dependencies. Direct file-URL opening was not browser-tested because tooling blocks that protocol.

## Implemented sample journeys

- **Onboarding and Home:** sample confidence, goals, household size, cuisine, time and allergen exclusions; five-ingredient fast start; equal Learn/Manage/Play entry points.
- **Camera simulations:** fridge recognition, barcode matching, printed expiry reading, physical receipt capture and digital/PDF import. Animated capture/extraction leads to editable review before saving; no hardware, file access or OCR service is used. Barcode/date flows update the reviewed ingredient only.
- **Kitchen:** fridge, freezer, pantry and spice filters; tools that affect recipe methods; manual ingredient creation; edits to name, quantity, unit, storage and date; consumed/discarded/correction history; reviewed sample scan. A scan does not erase larger receipt quantities.
- **Recipes:** four examples ranked by stock, expiry, time, confidence and cuisine; sample allergen exclusions; difficulty, serving size, learning objective, favorites/history, quantity scaling, substitutions and equipment blockers.
- **Chef Zara:** contextual, explicitly scripted questions about technique, missing ingredients, heat and seasoning. Repeat/Explain/Next controls support guided cooking.
- **Chef School:** three starter lessons are free from the start. Read a concept, pass its knowledge check and practise in a linked recipe. Three learning milestones are separate from XP and are not certification or verified mastery.
- **Cooking:** photo-led steps, Zara help, technique checkpoints, editable ingredient-use rows, deduction, undo before reward collection, dish-photo simulation, reward celebration and linked skill result.
- **Play:** ingredient, learning and weekly challenge types; accepted challenge progress; behavior-based badges; level ladder; a 500-XP Heat-control challenge unlock. Rewards use an idempotent ledger. Replaying a recipe or refreshing does not repeat its reward.
- **Food Hub:** illustrative meal/technique/milestone posts; share completed meals after collecting their reward; local Cheer, Reply, Save, Follow, Report and Block states. No public posting or moderation service.
- **Expenses and shopping:** optional branch. Editable paper/digital receipt samples save once, updating known inventory and spending together. Budget, weekly/month comparison and category totals reconcile. Shopping check-offs do not silently add stock or place orders.
- **Feature map:** Demo, MVP planned, Later planned and Exploratory statuses; previews for family sharing, voice/languages, planning, offline syncing, account/privacy, subscription selection, ordering, assessments and advanced play.

## Rehearsal

Use `INVESTOR_GUIDE.md`. Start from Reset, keep the default sample preferences for the short demonstration, and follow Manage → Learn → Play. Receipts and budgets are optional after the core path. No lead form or disabled walkthrough CTA is present; contact remains intentionally unset.

The 24 October meeting audit reviewed all 102 partner items. Fixes include scrolling sheets with pinned Close, full-height phone layout, cancelled stale scan/route animations, accessible validation focus, reopenable meal history, guarded inventory undo, persistent language previews and explicit quest rules. Thirteen domain regression checks pass; the core UI flow repeated twice from Reset with matching outcomes. These automated runs do not replace a human timed rehearsal on the presentation hardware.

`INVESTOR_CHECKLIST.md` records remaining founder and presenter tasks. `overview.html` is the printable one-page leave-behind. The landing includes the feature/tier/release map, three customer problems, sourced competitor positioning and funding-enabled validation scope.

## Files and state

| File                                    | Purpose                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------- |
| `index.html`, `styles.css`, `script.js` | Investor narrative, working app links, embedded preview and mobile navigation          |
| `app/index.html`                        | Accessible app shell and native dialog                                                 |
| `app/data.js`                           | Recipes, ingredient units, lessons, levels, receipt samples and feature status catalog |
| `app/app.js`                            | In-memory model, session persistence, routes, rendering, validation and interactions   |
| `app/app.css`                           | Mobile device tokens, components, camera/reward motion and accessibility styles        |
| `favicon.svg`, `images/`                | Existing Nomli brand and illustrative food/kitchen assets                              |

No build, account, analytics, uploads, camera, microphone, LLM, OCR, payment, checkout or external API is required. Sample state is stored in the current tab's session storage when available. Reset clears preferences, stock changes, receipts, posts, practice and rewards; seeded starting XP is 440. Storage failure falls back to memory and refresh resets the sample.

Amounts use integer halalas; receipt line amounts are totals, not unit prices. One combined stock record per ingredient is a prototype limitation; receipt review explicitly asks for the combined-stock date. Real batch handling, allergens, expiry, food safety and production AI require evaluated data and safeguards.

## Commercial integrity

Three starter lessons never require 500 XP. At 500 XP, a practice challenge opens instead. Paid tiers and prices are hypotheses; billing follows delivered capabilities. Social-posting entitlement, advertising, funding amount and business validation are founder decisions. No users, revenue, authentic community activity or verified cooking skill are claimed.

The 500K MAU / 8% conversion / $3M ARR figures are an unvalidated stretch scenario: 40K payers would require $6.25 monthly revenue per payer. The 40% Day-30 retention aspiration also requires cohort validation.

## Verification scope

The original core logic passed two reset-to-completion runs. This mobile redesign additionally passed a complete scan-to-share journey, knowledge-check errors, servings and equipment adaptation, stock deductions/undo, reward replay/refresh protection, Hub interactions, edited receipt arithmetic, duplicate imports, budget boundaries, feature previews, responsive layouts and keyboard dialog behavior. The release notes distinguish executed checks from human usability testing, presenter timing and production validation.

Deploy only the `kitchenaut-landing/` files to the existing `gh-pages` branch; preserve sibling Artifact projects. The public folder name is retained so existing links keep working.

## Visual direction and assets

`DESIGN.md` defines the mobile-only design contract. `ASSETS.md` records generated recipe/receipt imagery, the Phosphor sprite and local font licenses. The app stays a phone experience on desktop; there is no desktop dashboard. Root marketing sections use the original cinematic kitchen direction.
