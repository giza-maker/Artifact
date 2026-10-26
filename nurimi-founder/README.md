# NURIMI Founder Desk

Interactive founder decision workspace, separate from the NURIMI shopping concept.

Research snapshot: 27 October 2026. Own-inventory Saudi beauty retail; Saudi warehouse route selected; merchant registration/banking unconfirmed.

## Run

Serve the repository with a static HTTP server and open `/nurimi-founder/`. No package installation or build is required. ES modules and local fetches require HTTP, not file://.

```powershell
python -m http.server 4176 --bind 127.0.0.1
node nurimi-founder/model-tests.mjs
```

## Workspace

Nine routes cover decision overview, market evidence, weighted platform comparison, managed/hybrid/owned build paths, unit and portfolio economics, launch gates, a second-brand configuration workshop, decision/risk records, and the research/source library.

Build paths expands the initial Salla fast-launch baseline. It gives a custom Next.js storefront path and an owned Medusa commerce path, technology boundaries, phased delivery, acceptance evidence and an editable labour/budget model. Selecting a planning route does not silently rewrite existing saved vendor preferences. New workspaces begin with vendor preference undecided. Old workspace files gain default build inputs on import without losing notes.

Build estimates and the older managed-store portfolio model are separate scenarios, not additive. Prices/hours are editable planning judgement. The proof allowance is included in setup; proof hours and phase-one hours remain identical. See `data/build-guide.md` for assumptions and formulas.

Arabic/English interface with RTL; the complete original research memo and primary-source notes retain English/source language where disclosed.

State is browser-local under `nurimi:founder:v1`. No server, telemetry, merchant account or payment connection. Workspace JSON export/import moves local notes, scenarios and trial marks. Founder-brief export produces a standalone readable HTML report with current assumptions and the original memo. Import/reset requires an explicit in-app action.

## Evidence boundaries

- Platform scores are explicit research judgement, not measured vendor benchmarks.
- List prices and evidence are a dated snapshot; confirm current quotes and entitlement.
- Financial inputs are scenarios, not actual costs or forecasts. VAT scenario setting is not merchant registration status.
- Gate/trial marks are self-reported founder records. Failed hard gates exclude a route and clear a conflicting preference.
- Original catalogue audit remains 0/23 passing the proposed release gate; this does not declare the physical stock illegal.
- Brand preview and allocation diagram explain configuration and stock policy; they do not perform merchant deployment or inventory integration.
- No live purchase, payment, refund, settlement, stock-race or second-store production validation is implied.

## Files

`app.js` owns routing, persistence, validation, dialogs, search and exports. `views.js` renders the original views; `build-views.js` renders implementation paths and exported build chapters. `models.js` contains pure financial, scoring and allocation calculations; `build-models.js` contains route-aware delivery/budget/phase calculations. Both have focused model tests. `data/research.js` holds bilingual editorial content. `data/sources.json` holds 102 ledger records / 101 unique URLs. `data/memo.html` is a safe static rendering of the initial research memo; it remains labelled as a historical fast-launch baseline.

`styles.css` defines shell tokens; `workspace.css` and `build-paths.css` define the decision surfaces. `assets/` reuses source-traced NURIMI brand/font/icon assets and six previously generated product scenes. Product imagery generation provenance is in `data/product-image-provenance.md`; original asset sources are documented in the sibling NURIMI project.

No secrets, customer records, actual supplier costs or merchant credentials are included. Do not put them in this public source tree. Founder-entered browser notes are not published automatically.
