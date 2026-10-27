# App preview QA

Scope: `#app-preview` concept mockups only. Fictional, in-memory data. No live orders, messages, Wallet issuance, merchant results, or MVP activation.

Completed 28 October 2026: 14 mockup checks plus the 20-check showcase regression suite. Primary review also checked the complete child-element bounds in English desktop and Arabic 375/320 layouts, selected-order tracker identity, keyboard focus and nested tab controls. Found and fixed chart minimum-width clipping and narrow filter controls. Financial engine, research JSON and downloadable research remain unchanged.

## Automated smoke suite

Run from repository root with existing static server on port 5180:

```powershell
$env:PLAYWRIGHT_MODULE = '<absolute path to playwright>'
$env:CHROME_PATH = '<absolute path to chrome.exe>'
node marrah-roadmap/tests/mockups-smoke.cjs
node marrah-roadmap/tests/showcase-smoke.cjs
```

Override server URL when needed:

```powershell
$env:MARRAH_URL = 'http://127.0.0.1:5180/marrah-roadmap/'
```

Coverage:

- 11-chapter navigation, `#app-preview` route, full-document mode, print, command menu
- customer/staff/merchant tab semantics and Arrow/Home/End keyboard control
- retail/café/service scenario selection
- customer order/rewards tabs, channel-only preview, Wallet-only preview, 7/8 → 8/8 reward preview
- staff queue search, empty results, filters, selection, guarded ready/collected actions
- shared order `#1042`: preparing → ready → collected across all three views
- collection code `042`; live merchant counts `ready 2 → 3 → 2`, `active 7 → 7 → 6`
- reset restoring fixture state while preserving selected role and scenario
- exact historical totals: 7 days = 400 orders; four weeks = 1,450 orders
- exact scenario sales: retail 28,000/101,500 AED; café 15,200/55,100 AED; service 24,000/87,000 AED
- role/scenario query sharing and Arabic locale preservation
- English desktop plus Arabic 375 px and 320 px horizontal-fit checks
- static module imports, GET-only traffic, no POST/write requests
- enabled-button interaction contracts, console errors, page errors

## Manual inspection

Use only when changing visual treatment:

1. Open `#app-preview` at 1440 px, 375 px, and 320 px.
2. Inspect customer phone scrolling, staff board internal scrolling, merchant chart/table.
3. Repeat in Arabic. Confirm labels, focus rings, reading order, and no clipped toolbar controls.
4. Confirm disclosure remains visible: fictional data, preview only, no live messages, transactions, or Wallet passes.
5. Confirm every action stays local after reload. DevTools Network must show no POST/PUT/PATCH/DELETE requests.

Do not save screenshots in published `marrah-roadmap/` folder. Keep any temporary evidence outside site tree.
