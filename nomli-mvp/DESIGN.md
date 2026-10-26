# Nomli MVP design contract

## Product focus

Nomli is a lean mobile kitchen companion. Four primary destinations have equal weight:

- **Kitchen** — current inventory, quantities, freshness and corrections.
- **Scan** — upcoming M2 recognition; native capture previews only in M1.
- **Cook** — recipe discovery, readiness and guided cooking.
- **Zara** — contextual kitchen assistance with clear prototype limitations.

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
- A short, visible `M1 · local inventory` disclosure remains in app chrome. Scan and Zara disclose their unavailable/demo status.
- Panels and dialog bodies scroll within viewport bounds. Camera simulation may fill device; other dialogs present as bottom sheets.

## Interaction and accessibility

- Use native links, buttons, inputs and `dialog` semantics.
- Every icon-only control needs an accessible name. Decorative icons and brand mark use empty alt text or `aria-hidden`.
- Keep visible `:focus-visible` treatment. Dialog logic must set initial focus, contain focus, close on Escape and restore trigger focus.
- Announce async state through `#announcer`; use `#toast` only for supplementary status.
- Forms need persistent labels, associated errors, `aria-invalid` when invalid and explicit confirmation before inventory deletion or backup replacement. Restore shows a validated preview and requires typed `REPLACE`.
- Honor `prefers-reduced-motion`. Animate only transform and opacity; avoid continuous scroll- or layout-driven motion.

## Required document hooks

Runtime may rely on `#main`, `#view`, `#bottom-nav`, `#modal`, `#modal-content`, `#toast` and `#announcer`. Keep these IDs stable. `main.js` is the only HTML script entry and imports CSS plus application logic.
