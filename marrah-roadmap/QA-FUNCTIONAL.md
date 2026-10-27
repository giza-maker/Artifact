# Functional QA

Run: `node marrah-roadmap/tests/showcase-smoke.cjs`

Result: 20/20 browser checks passed on 2026-10-27 against `http://127.0.0.1:5180/marrah-roadmap/` using Playwright and system Chrome. Runtime: 20.8 seconds. No unexpected console errors or uncaught page errors. No screenshots retained.

Coverage:

- Default chapter mode exposes one active chapter. Desktop rail contains all 10 chapters; every visible route updates hash, active view, and `aria-current`.
- Previous/next boundaries, legacy `#roadmap`, browser Back/Forward, and chapter focus behavior.
- Full-document toggle persists `layout=document`, exposes all 10 chapters, survives reload, and returns to one-chapter mode.
- Ctrl+K chapter dialog: 10 results, filtering, empty state, arrow-key movement, Escape, and trigger focus restoration.
- Locale, audience, and scenario rerenders preserve query plus chapter hash. Shared URL survives fresh-page round trip.
- English/LTR and Arabic/RTL; no focused control remains inside hidden chapter after rerender.
- Investor, partner, builder views; six countries; six sectors.
- Interactive journey manual steps. User-started playback advances once, then stops without advancing after chapter becomes hidden.
- Six delivery gates; G3/G4 parallel semantics; selected gate updates panel without implying completion.
- Exact Base and Downside model outputs, four operating/funding thresholds, and pickup-only diagnostic.
- Seven model controls inside collapsed tuning detail: zero, above maximum, hostile exponent, invalid state, result stability, and no `Infinity`/`NaN` output.
- Evidence dialog Escape/focus restoration; collapsed source catalog search, empty state, heterogeneous claim, archived rate-card provenance, and HTTP 200.
- Collapsed competitor comparison and roadmap phase/backlog controls remain usable.
- PDF/XLSX/ZIP HTTP 200 with non-empty bodies; investor/partner/builder brief downloads.
- Print lifecycle exposes all 10 chapters and all details, then restores active one-chapter view.
- Desktop 1440px: rail visible, no document overflow. Mobile 375px: rail hidden, chapter select and document toggle visible, RTL, reduced-motion preference, no overflow.
- Research-data HTTP 404 and aborted request reach no-JS download fallback.

Functional defects found in tested build: none.
