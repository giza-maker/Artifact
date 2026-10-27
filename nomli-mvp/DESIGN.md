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
- Cooking identity requires explicit catalog selection. Count-to-mass conversion requires a measured or printed grams-per-unit value. Preparation and serving changes never silently deduct ingredients.
- Freeze servings and allocated stock when preparation starts. Save actual use atomically after review; retain a session ID to prevent repeat deduction. Undo preserves later stock changes and blocks changed or missing ingredient records.

## Ingredient photos

- Ingredient thumbnails stay on the device: Android internal app files, or IndexedDB in the browser. Keep photo bytes separate from inventory JSON backups; restored references may have no local image.
- Item editing offers explicit add, change and remove photo actions. Use an ingredient fallback when a local photo is unavailable.
- Grocery image review offers an optional thumbnail attachment, enabled with an opt-out before confirmed import. Receipt images and PDFs never become ingredient icons.
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

Runtime may rely on `#main`, `#view`, `#bottom-nav`, `#modal`, `#modal-content`, `#toast` and `#announcer`. Keep these IDs stable. `main.js` is the only HTML script entry. Styles load through the HTML stylesheet link; JavaScript imports native bridges, local data and application modules.
