# Nomli landing page

Warm, dark editorial layout. Reuse existing Fraunces headings and DM Sans body text, with orange as the product accent. Preserve existing photography and SVG branding.

## Surface tokens

- Background: `--bg` #120e0b; cards: `--surface` #1c1612 and `--surface-2` #261e18.
- Text: `--text` #f6efe6; secondary: `--muted` #b8a99a.
- Accent: `--orange` #f97316; small accent text: `--orange-text` #fb923c.
- Outer radius: `--radius` 24px; inset receipt radius: 16px.
- Minimum text: 14px. Preserve heading balance and existing spacing scale.

## Receipts and expenses

One product module connects receipt review, inventory and grocery spending. Use semantic HTML for the static concept dashboard: a labelled budget meter, weekly totals and a receipt table. Sample amounts use SAR; this is not a currency-support claim. Paper photos and digital receipts/PDFs are planned sources. No live uploads or expense storage on the landing page.

Keep planned status visible. Receipt scanning retains Phase 4; expense tracking has no confirmed schedule. Do not assign a paid tier to expense tracking without a product decision. Use the existing accordion behavior and accessible button/region pattern for the added FAQ.
