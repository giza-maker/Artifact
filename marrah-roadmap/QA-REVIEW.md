# Showcase review

Reviewed 27 October 2026. This verifies a research showcase, not the merchant application or a commercial outcome.

## Coverage inventory

| Requirement / claim | Functional evidence | Visual state reviewed |
| --- | --- | --- |
| Standalone roadmap, MVP preserved | Git change scope restricted to this folder | Proposal/status copy, no application login or live-order controls |
| English and Arabic | Locale, `dir`, model number formatting and URL roundtrip | Desktop 1440 and mobile 390, Arabic font loaded, English citations isolated LTR |
| Investor, partner, collaborator | All three perspective selectors and brief downloads | Reading guidance and collaboration shelf |
| Six markets / sectors | All selectors exercised | UAE/QSR, Saudi/retail and mobile selector widths |
| Financial model | Six Node tests reproduce source outputs and edge guards | Base, Downside, negative pickup-only result, cash below zero, input/error states |
| Production backbone | 99-item scope/priority/search controls | Architecture, stack alternatives, role contract, phase accordion and open decisions |
| Research transparency | Source IDs inspected, claim-field schema regression check | Source catalogue and native evidence dialog at mobile width |
| Downloadable material | PDF/XLSX/ZIP HTTP checks, rate-card mirror hashes | Download shelf, explicit formats and scope |
| Share and print | Share-state roundtrip, manual fallback, print invocation | Print stylesheet and readable chart table; full research PDF remains the primary export |

## Findings resolved

- UAE default corrected to match canonical `ae` country ID.
- Source claims normalized across `supporting_fact`, `supported_fact`, `supports` and source-version records; uncertainty is preserved.
- Pickup-only negative result surfaced alongside combined merchant value.
- Ten proposed first-release decisions now identify owner roles, latest gates and required artifacts.
- Self-hosted Arabic typography replaces inconsistent platform fallbacks.
- Public package instructions point to the accessible showcase; file integrity manifest regenerated.

## Design and accessibility review

One light theme, one accent, consistent radius tokens, distinct layout families and no decorative animation. Hero actions fit the initial viewport. Text, button and input colors were checked against the defined palette. Native controls, keyboard focus, Escape dismissal, focus return, inline form errors, reduced motion and chart text alternatives are implemented. No document-level horizontal overflow at desktop 1440 or mobile 375/390. Wide technical tables scroll inside labeled regions.

Reviewed concept journey, markets/comparison, economics, architecture, release gates, innovation portfolio, collaboration briefs and evidence. No broken images, clipped settled headings, overlapping controls or unhandled page errors observed. Exploratory checks covered rapid view changes, invalid numbers, empty searches, network failures and copied model state.

This is not a complete WCAG certification or real-device/browser matrix. Production acceptance still requires assistive-technology review, actual Wallet devices, thermal printers, real POS access, provider permissions and merchant field outcomes. No dark theme is offered; no animation engine or card-game interaction exists to test.

## Evidence limits

104 entries refer to 94 distinct source URLs, including aliases. Vendor statements are not independent research. No paid pilot, observed willingness to pay, measured retention effect, integration approval, team credential or valuation is fabricated. Core and optional expansion effort remain separate; timelines and economics are planning assumptions. Research refresh requires deliberate revalidation.
