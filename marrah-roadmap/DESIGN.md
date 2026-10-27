# Marrah showcase design

An editorial investment and production brief for Gulf partners. Design variance 7/10, motion 3/10, density 5/10. Custom document aesthetic, native accessible controls, one light theme. Default experience is a chapter showcase, not one continuous report.

| Token | Value | Purpose |
| --- | --- | --- |
| paper | `#f5f3ed` | Canvas |
| white | `#fffefa` | Reading surfaces |
| ink | `#242c2c` | Primary text |
| muted | `#59615d` | Supporting text |
| accent | `#9b432d` | Actions, emphasis, chart |
| soft | `#eee0d6` | Assumptions and decision notes |
| line | `#cfcfc5` | Structure |
| radius | 12px / 6px | Surfaces / controls |
| content width | 1320px | Desktop maximum |
| showcase width | 1440px | Rail plus chapter canvas |
| chapter rail | 204px | Sticky desktop navigation |
| header / chapter bar | 77px / 58px | Two-level navigation offset |
| showcase shadow | warm ink at 9% | Atlas and chart lift only |

English display uses Georgia; English body uses Arial. Arabic uses self-hosted Noto Sans Arabic, licensed under SIL OFL in `assets/fonts/OFL.txt`, with Tahoma/Arial fallbacks. Font source: Google Fonts CSS and fonts.gstatic.com, retrieved 27 October 2026.

Use CSS logical properties and native `dir`. Never mirror numeric charts. A source citation opens a native dialog with explicit initial focus, Escape dismissal and trigger focus restoration. Interactive controls retain visible keyboard focus; chart also has a text description and data table. Reduced-motion preference disables smooth scrolling.

Hero and handoff photographs are generated concepts, disclosed in copy and `assets/provenance.json`. Never imply merchant endorsement, product deployment or research participation. Marrah/مرّة is a provisional brand; no trademark or domain clearance asserted.

Information architecture: persistent global header, sticky chapter rail, sticky chapter utility bar, one visible chapter, previous/next handoff. Eleven chapters include App mockups. Mobile replaces rail with labeled native select and explicit document control. “Full document” exposes every chapter for continuous reading; printing always exposes every chapter. Overview ends with a mixed-scale six-entry atlas: app preview, economics, markets, roadmap, blueprint and evidence.

Layout families: editorial hero, mixed editorial atlas, asymmetric thesis, journey stepper, country/sector explorer, comparison table, financial workbench, system diagram, delivery-gate accordion, experiment journal, collaboration briefs and source catalogue. App mockups deliberately use coded phone and dashboard frames with sans-serif product typography, shared brand tokens and explicit demo labels. They illustrate proposed screens; they are not screenshots of a launched application. Dark app chrome is confined to the mockup frames.

Interaction rules: chapter state uses `aria-current`; native controls keep visible focus. Command dialog uses native `dialog`, labeled search, button results, initial focus, Escape dismissal and trigger focus restoration. `[hidden]` is authoritative on screen. Hover motion is limited to a 3px transform and opacity; reduced-motion removes it. Technical tables and charts scroll inside their own bounds rather than widening the page.

Mockup rules: Customer, Staff and Merchant are keyboard-operable nested perspectives. A local fixture drives order state, queue counts, preparation averages and reward previews. Ready/collected actions never earn loyalty. Historical chart totals remain a separate fictional snapshot. Arabic/English, retail/café/express-service variants and 320px layouts share the same data definitions. Component CSS loads before `mockups.css`, which owns shared tokens and integration fixes. No messaging, Wallet issuance, API writes or persistent customer data.
