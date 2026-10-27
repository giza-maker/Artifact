# Marrah: Gulf merchant platform roadmap showcase

Public showcase: https://giza-maker.github.io/Artifact/marrah-roadmap/

Standalone bilingual investment and production brief. Research cut-off: 27 October 2026. Default reading mode shows one chapter at a time, with ten chapters, a persistent index, keyboard search and previous/next navigation. Full document mode remains available. This folder publishes the roadmap, not the existing MVP. No backend, credentials, accounts, messaging sends, analytics trackers or third-party runtime scripts are required.

## Read and share

- Investor: `?lang=en&view=investor`
- Operating partner: `?lang=ar&view=partner&country=sa&sector=retail`
- Technical collaborator: `?lang=en&view=builder#blueprint`

The Copy this view action preserves locale, perspective, country, sector, scenario and edited model assumptions in the URL. It copies locally; it sends nothing to another person. Downloadable role briefs define discussion outputs without inventing contact details.

Existing chapter hashes such as `#roadmap` remain valid. `?layout=document` opens every chapter. Use Find chapter or Ctrl/Command+K to search the index; Arrow keys, Enter and Escape work in the native dialog. Mobile uses a compact chapter selector. A user-started receipt-to-reward simulation and clickable G0–G5 diagram explain the proposal without creating orders or rewards. G3 and G4 remain parallel options; a selected gate is not a completed gate.

The core brief covers six GCC countries, six sectors, seven competitor comparisons, financial scenarios, technology alternatives, delivery gates, ten open first-release decisions and an innovation portfolio. The source catalogue contains 104 evidence entries from 94 distinct URLs. The candidate backlog has 75 core and 24 expansion items; these are not all launch scope.

Full working material is bundled in `downloads/`: 47-page PDF, six-sheet editable workbook and an 18-file production package. Public package access instructions point to this showcase; its SHA-256 manifest is regenerated. Research, model and specification payloads remain unchanged. Rate-card mirrors retain SHA-256 verification. Dates and prices are frozen research observations, not automatically refreshed live data. Sources can change.

## Local preview

From the repository root:

```sh
python -m http.server 5180 --bind 127.0.0.1
```

Open http://127.0.0.1:5180/marrah-roadmap/. Use an HTTP server because modules and JSON fetches do not support opening the HTML directly as a local file.

## Checks

```sh
node --test marrah-roadmap/tests/model.test.mjs
node marrah-roadmap/tests/showcase-smoke.cjs
```

Browser smoke requires Playwright available to Node and a browser installed through Playwright, or `CHROME_PATH` pointing to Chrome. `PLAYWRIGHT_MODULE` can select an existing Playwright installation. `MARRAH_URL` overrides the local target for a deployed smoke check.

The economics engine reproduces the original Base and Downside outputs, including additional funding gaps of AED76,090.81 and AED339,324.66 above assumed AED250,000 opening cash. Scenarios are illustrative UAE assumptions, not forecasts. See assumptions, exclusions, pickup-only falsification check and the full workbook before interpreting outputs.

## Research refresh

`prepare_content.py --source PATH_TO_REVIEWED_RESEARCH` copies the reviewed deliverables and freezes evidence/backlogs. It verifies archived rate-card payload hashes against the research register. It does not rewrite edited showcase content. Revalidate facts, model parity and UI after a deliberate research update.

## Publication boundary

Only this subfolder belongs to this change. Existing root homepage, other project showcases and the local MVP are untouched. Publish by adding this folder to the existing GitHub Pages `gh-pages` branch. No site-wide config or deployment provider migration is needed.

The financial model, timelines, proposed roles, priorities and targets remain assumptions or proposals. Paid demand, approved connectors, trademark clearance, legal/tax decisions and actual merchant outcomes remain unproven. Full source wording is preserved in downloads; original-language citations and backlog acceptance criteria are kept in English where supplied that way.
