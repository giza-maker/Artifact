# Nomli MVP design contract

## Product focus

Nomli is a lean mobile kitchen companion. Four primary destinations have equal weight:

- **Kitchen** — current inventory, quantities, freshness and corrections.
- **Scan** — protected image/PDF recognition, editable review and optional explicit cooking links.
- **Cook** — 20 recipes, linked-stock readiness, preparation, guided cooking and reviewed deduction with undo.
- **Zara** — live kitchen assistance with explicit Send, visible data disclosure and reviewed proposals.

Do not add school, XP, quests, community, investor-tour or social-product language to this MVP surface.

## Visual system

- Preserve original orange N-and-spoon identity, local photography and Phosphor sprite icons.
- Palette: `#100f0e` background, `#1c1a17` and `#25211c` surfaces, `#faf6ef` text, `#a89f94` secondary text, `#ff7a18` primary accent.
- Use semantic colors only for success, warning and error states.
- Typography: locally hosted DM Sans. Screen titles 22–25px, body 14px, compact metadata 10–12px.
- Cards use 16–24px concentric radii. Primary touch controls are at least 44px; compact secondary controls at least 36px.
- Photography remains ingredient- and food-led. Zara uses existing portrait assets. Navigation never uses emoji. All 20 curated recipes have local food artwork; 17 new generated WebP images include provenance. Device verification remains separate.

## Shell and responsive behavior

- Desktop: centered phone, maximum width 430px and maximum height 900px.
- Phone or embedded browser: edge-to-edge `100dvh` shell with safe-area padding.
- Status bar and header frame one independently scrolling main region. Bottom navigation stays visible in a four-column grid.
- Default route and Nomli brand link are `#kitchen`.
- App chrome carries product navigation without visible milestone labels. Zara and scanning reuse the protected connection; connection and data disclosures remain available in their relevant flows.
- Panels and dialog bodies scroll within viewport bounds. Camera simulation may fill device; other dialogs present as bottom sheets.

## Interaction and accessibility

- Use native links, buttons, inputs and `dialog` semantics. Single-choice selectors open mobile bottom sheets, with search above eight options, selected checks and disabled-option handling. Keep the original select as the form value and validation source; expose one accessible trigger. Picker close restores focus after rerenders and preserves an underlying form dialog.
- Every icon-only control needs an accessible name. Decorative icons and brand mark use empty alt text or `aria-hidden`.
- Keep visible `:focus-visible` treatment. Dialog logic must set initial focus, contain focus, close on Escape and restore trigger focus.
- Announce async state through `#announcer`; use `#toast` only for supplementary status.
- Forms need persistent labels, associated errors, `aria-invalid` when invalid and explicit confirmation before inventory deletion or backup replacement. Restore shows a validated preview and requires typed `REPLACE`.
- Honor `prefers-reduced-motion`. Animate only transform and opacity; avoid continuous scroll- or layout-driven motion.
- Clear retail names prefill an editable cooking identity during reviewed saving. Existing clear, unlinked Kitchen names are repaired on startup after successful persistence. Category alone never assigns identity; ambiguous preparation, formulation, species and unknown brands require review. Explicit unlinking stays unlinked. Count-to-mass conversion requires a measured or printed grams-per-unit value. Preparation and serving changes never silently deduct ingredients.
- Freeze servings and allocated stock when preparation starts. Save actual use atomically after review; retain a session ID to prevent repeat deduction. Undo preserves later stock changes and blocks changed or missing ingredient records.

## Scan review cards

- Show one food item per card, with Back, Next, a searchable category picker and an All items jump list. Keep edits when moving between cards. Skipped items retain their draft values but are excluded from import.
- Keep name, quantity/unit, broad category and storage visible. Expiry, cooking links, measured weights, line cost, crop tools and merge controls live under More details. Unknown quantities/units need correction; do not invent one piece.
- Broad AI categories and local Arabic/English name matching prefill editable category/storage suggestions. Categories do not establish a cooking identity, allergen status or measured weight. Every included card is reviewed before the final confirmation.
- Final save stays in the footer; confirmation is visible near the summary heading. Missing receipt finance defaults visibly to inventory-only, with an editable choice. Unknown excluded amounts stay null, not zero. Saving remains one atomic stock/receipt operation.
- Use the expanded offline supermarket artwork catalog for receipt cards, picker options and inventory fallbacks. Retain `images/food/nomli-food-atlas.png` as the unknown-food fallback. Existing legacy names receive inferred artwork without a migration. Uploaded local photos take priority. Full prompts and mapping: `web/public/images/food/atlases/MANIFEST.json`.

## Local photo handling

- Ingredient thumbnails stay on the device: Android internal app files, or IndexedDB in the browser. Keep photo bytes separate from inventory JSON backups; restored references may have no local image.
- Item editing offers explicit add, change and remove photo actions. Use an ingredient fallback when a local photo is unavailable.
- Grocery image review shows a separate suggested crop per product. Crop locally from full source resolution, downscale to a square up to 256px/32KiB, then confirm import; allow Adjust, Remove or Choose crop per line. Unknown regions remain blank. Receipt images and PDFs never become ingredient icons.
- Photo storage does not add an upload destination. Scanning still sends its selected source through the existing recognition flow.

## Zara interaction contract

- Suggestions populate the editable question; only explicit Send starts a request. Show pending state, cancellation, errors and retry. Keep cancelled questions available.
- Render user questions and Zara replies as chronological chat bubbles, with a bottom composer and a voice drawer. Identify saved exchanges and the current reply through their message state. Keep inventory, profile, tool preferences, recipe/cooking context and recent-history disclosure accessible before Send.
- Render provider text as text. Allow only validated quantity or curated-recipe/servings proposals. Show before/after details in a separate dialog with an explicit confirmation checkbox and Apply action.
- Reject stale proposals and proposals during an active cooking session. Substitution advice cannot change frozen allocations; require cancel/replan when deductions would differ.
- Optional Android voice starts only on Speak and runtime microphone permission. Show static microphone state, status text, Finish and Cancel voice; use no pulsing recording animation. Voice controls have at least 44px touch targets.
- Explain system speech-provider network/language-pack requirements before capture. Offer English (US), Arabic (Saudi Arabia) and Arabic (Egypt) as requested locales without promising provider support.
- Review transcript in an editable `dir="auto"` field capped at 2,000 characters. Use transcript appends to the question; replacing an existing question requires its separate action. Disable Send while capture or transcript review owns the flow. Only explicit Send shares reviewed text with M4 context.
- Render questions, transcripts and answers with automatic text direction. Cancel capture and discard pending transcripts on navigation, dialog opening or backgrounding. Reject late callbacks by request ID. Voice never applies inventory changes.
- Preserve scroll access and focus while keyboard is open. Actual Android keyboard, Arabic layout and assistive-technology behavior remain pending device verification.

## Required document hooks

## Supermarket artwork

- Bundle 272 bilingual food types in 17 transparent 4 × 4 lossless WebP atlases. Keep all 32 supermarket sections editable; specific food-type artwork precedes section representatives, with a basket for unknown food.
- Match longest whole English/Arabic aliases; preserve product distinctions such as fresh/frozen/canned, rice varieties, pasta shapes and drink types. Explicit category gates artwork; an edited name cannot retain stale linked-ingredient art.
- Uploaded local photos take priority. Generic illustrations never establish identity, brand, allergens, weight or expiry. Artwork does not assign cooking links or change inventory quantities.
- All 272 food types declare a nullable cooking mapping; 63 have a compatible type mapping. Strict cooking matching uses safe primary names and canonical aliases, preserving meaningful preparation qualifiers. One shared category mapping covers all 88 cooking ingredients; all 32 supermarket categories remain available.
- Recipe requirements show amounts covered by Kitchen and source lot names. Startup repair protects allocated stock and repairs other items during active cooking and preserves quantities, weights, photos, expiry and finance. A stalled native write fails after eight seconds and blocks further writes until reopen, avoiding races with an unknown write outcome.
- Keep sprite positions in trusted local CSS variables. Category sheet stays searchable and independently scrollable on narrow phones. Prompts, cell mapping and hashes live in web/public/images/food/atlases/MANIFEST.json.

## Required document hooks

Runtime may rely on `#main`, `#view`, `#bottom-nav`, `#modal`, `#modal-content`, `#toast` and `#announcer`. Keep these IDs stable. `main.js` is the only HTML script entry. Styles load through the HTML stylesheet link; JavaScript imports native bridges, local data and application modules.

## M8.3 recipe stock review

- A strict unique food name establishes its cooking identity independently of editable shelf categories. Categories cannot create an identity for an unknown product. Arabic identity matching and packaging vocabulary normalize ة/ه and common hamza variants consistently.
- Backup restoration repairs clear links inside the same confirmed replacement. Only allocation-backed stock is frozen during cooking; other items remain linkable, and post-session repair runs without a restart.
- Missing recipe requirements show relevant Kitchen items, their saved quantity/unit and the specific link, unit or recorded-date issue. Compatible candidate matches offer explicit Use as confirmation; incompatible units, processing qualifiers or existing conflicting identities require item review. Confirmation rechecks current state and preserves quantities.
- Show installed version in Kitchen utilities. Phone reports remain unverified until the installed version and exact item data are known.
