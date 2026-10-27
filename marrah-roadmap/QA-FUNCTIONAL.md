# Functional QA

Run: `node marrah-roadmap/tests/showcase-smoke.cjs`

Result: 20/20 checks passed on 2026-10-27 against `http://127.0.0.1:5180/marrah-roadmap/` using system Chrome and Playwright. No unexpected console errors or uncaught page errors. No screenshot binaries retained in this published folder.

Coverage:

- English/LTR and Arabic/RTL; investor, partner, collaborator views.
- Six countries (`sa`, `ae`, `qa`, `om`, `bh`, `kw`) and six sectors.
- Four journey steps and pressed-state updates.
- Exact Base and Downside model outputs, including pickup-only diagnostic.
- Seven model controls: zero, maximum, above-maximum, `Infinity`-producing exponent, and empty input. Invalid values retain last valid results; output never exposes `Infinity` or `NaN`.
- Share URL and fresh-page round trip for language, audience, country, sector, scenario, and changed model input. Clipboard and manual-copy fallback both supported by test.
- Evidence modal open/Escape/focus restoration; evidence search, pagination, and empty state.
- Heterogeneous source claim fields remain searchable; archived rate cards are linked with provenance and return HTTP 200.
- Backlog scope, priority, search, pagination, and empty state.
- PDF/XLSX/ZIP HTTP 200 with non-empty bodies; investor/partner/builder text downloads.
- Print control invokes browser print action.
- No document-level horizontal overflow at 1440px or 375px, measured with `document.documentElement.clientWidth`.
- Data HTTP 404 and aborted fetch both reach fallback containing roadmap PDF and production-package links.

Exploratory/off-happy-path coverage: repeated full rerenders across audience/language/scenario changes; invalid numeric transitions; manual share fallback; modal keyboard dismissal; combined backlog filters; isolated network failures.

Functional defects found in final build: none.
