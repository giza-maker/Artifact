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
- Photography remains ingredient- and food-led. Zara uses existing portrait assets. Navigation never uses emoji.

## Shell and responsive behavior

- Desktop: centered phone, maximum width 430px and maximum height 900px.
- Phone or embedded browser: edge-to-edge `100dvh` shell with safe-area padding.
- Status bar and header frame one independently scrolling main region. Bottom navigation stays visible in a four-column grid.
- Default route and Nomli brand link are `#kitchen`.
- A short, visible M4 disclosure remains in app chrome. Zara and scanning reuse the protected connection. Saved exchanges must remain distinct from the current live reply.
- Panels and dialog bodies scroll within viewport bounds. Camera simulation may fill device; other dialogs present as bottom sheets.

## Interaction and accessibility

- Use native links, buttons, inputs and `dialog` semantics.
- Every icon-only control needs an accessible name. Decorative icons and brand mark use empty alt text or `aria-hidden`.
- Keep visible `:focus-visible` treatment. Dialog logic must set initial focus, contain focus, close on Escape and restore trigger focus.
- Announce async state through `#announcer`; use `#toast` only for supplementary status.
- Forms need persistent labels, associated errors, `aria-invalid` when invalid and explicit confirmation before inventory deletion or backup replacement. Restore shows a validated preview and requires typed `REPLACE`.
- Honor `prefers-reduced-motion`. Animate only transform and opacity; avoid continuous scroll- or layout-driven motion.
- Cooking identity requires explicit catalog selection. Count-to-mass conversion requires a measured or printed grams-per-unit value. Preparation and serving changes never silently deduct ingredients.
- Freeze servings and allocated stock when preparation starts. Save actual use atomically after review; retain a session ID to prevent repeat deduction. Undo preserves later stock changes and blocks changed or missing ingredient records.

## Zara interaction contract

- Suggestions populate the editable question; only explicit Send starts a request. Show pending state, cancellation, errors and retry. Keep cancelled questions available.
- Disclose inventory, profile, tool preferences, recipe/cooking context and recent history before sending. Show saved local conversation separately.
- Render provider text as text. Allow only validated quantity or curated-recipe/servings proposals. Show before/after details in a separate dialog with an explicit confirmation checkbox and Apply action.
- Reject stale proposals and proposals during an active cooking session. Substitution advice cannot change frozen allocations; require cancel/replan when deductions would differ.
- Live voice remains planned. Do not expose a simulated recording flow as working capture or transcription.

## Required document hooks

Runtime may rely on `#main`, `#view`, `#bottom-nav`, `#modal`, `#modal-content`, `#toast` and `#announcer`. Keep these IDs stable. `main.js` is the only HTML script entry. Styles load through the HTML stylesheet link; JavaScript imports native bridges, local data and application modules.
