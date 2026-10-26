# NURIMI Founder Desk — design contract

## Thesis

An editorial financial decision desk, not a generic SaaS dashboard. Warm ivory gives evidence room to breathe; a dense plum navigation spine anchors the workspace. Large tabular numbers, fine rules, and memo-like typography make every screen feel built for consequential founder decisions.

Signature move: the live economic waterfall. It reads like a ruled ledger—labels first, directional bars second, exact figures last. Cherry marks downside or decision pressure; semantic green marks viable contribution.

Build paths adds a three-way ownership selector and a ruled implementation plan. Selected route uses solid plum; labour, budget and phase allocation update together. Every cost surface names its scenario and exclusions. The managed reference blueprint and initial research memo stay labelled; neither dictates the custom implementation.

## Tokens

- Brand: plum `#3B2158`, deep plum `#28133E`, cherry `#B82B55`.
- Surfaces: paper `#FFF9F3`, secondary paper `#F7EEE5`, raised surface `#FFFDF9`.
- Semantic only: green `#287454`, amber `#A26312`, danger `#A72C3F`.
- Type: Plus Jakarta Sans for Latin; Alexandria for Arabic. Use tabular lining numerals for financial data.
- Shape: 16px primary radius, 10px control radius, 6px small radius. Concentric nested radii.
- Depth: borders do most separation. One restrained shadow only for raised/hovered objects.
- Motion: 160–260ms, transform/opacity only; all nonessential motion removed under reduced-motion preference.

## Hierarchy

1. Page eyebrow identifies decision domain.
2. Display title states decision, not route name.
3. Lead supplies one-sentence framing.
4. First visible panel answers “what changed / what matters?”
5. Detail follows through ruled sections, tables, gates, and source cards.

One primary cherry action per view. Plum actions are secondary. Ghost actions handle utilities.

## Layout

- Desktop: 280px fixed sidebar, sticky 84px header, 40px main padding.
- Mid-size: 240px sidebar, 28px main padding.
- Mobile: off-canvas sidebar, 20px main padding, fixed bottom route navigation.
- 320px minimum viewport: all grids collapse; charts stack labels rather than shrinking text; wide tables scroll inside their own frame.
- Logical properties support RTL. Root application owns `lang` and `dir` switching.

## Accessibility

- Every action uses native buttons/links and has a minimum 44px target.
- Icon-only controls carry accessible names. Focus uses visible cherry halo.
- Main is programmatically focusable for route changes.
- Dialog is native; application logic must set initial focus, close on Escape, and restore trigger focus.
- Inputs require visible `.field-label`; helper/error text must be linked with `aria-describedby`.
- Status changes use `#app-status` or `#save-indicator`; toast cannot be sole carrier of critical information.
- Plum/ivory and cherry/white combinations are reserved for large or bold control text where contrast remains sufficient.

## Component rules

- `.panel` groups evidence only when boundary matters; do not wrap every block in a card.
- `.panel-accent` is for a single key assumption or warning, never decoration.
- `.metric-value` is the visual anchor; keep labels short and notes explicit.
- `.pill-assumption`, `.pill-pending`, and `.pill-owner` communicate state in text plus color.
- Waterfall and charts must expose exact values in adjacent text; color alone never carries sign or status.
- Tables keep real header cells and scroll horizontally on narrow screens.
- Source cards show provenance and limitation together.

## Content voice

Direct, evidence-led, and candid. Use “Decision”, “Evidence”, “Assumption”, “Risk”, “Owner”, and “Next step”. Avoid motivational language and vague health labels such as “great” or “looking good.”

## Print

Application exports into `#export-print`. Print hides shell, navigation, dialog, and toast, then renders memo content on white with serif body typography.
