# Kitchenaut investor landing page

A single-page, static landing page for a pre-launch consumer app. Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no analytics, no trackers.

**Stage, as stated on the page:** interactive prototype built, product requirements and technical design complete, MVP build is next. The page claims no users, revenue or waitlist.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All markup, the inline SVG icon sprite, the orbit-ring wordmark mark and every phone mockup (HTML and CSS only). |
| `styles.css` | Design tokens, layout, components and motion. Mobile-first (390px), scales to 1440px. |
| `script.js` | Scroll reveals, mobile menu, hero phone loop, FAQ accordion, walkthrough form. `CONTACT_EMAIL` is the first line. |
| `favicon.svg` | The orbit-ring mark on a dark tile. |
| `README.md` | This file. |

## Preview locally

Any static server works. From this folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

or

```sh
npx serve .
```

You can also open `index.html` directly in a browser. The page looks the same, but the Google Fonts request is the only thing that needs a network connection; without it the page falls back to Georgia and system-ui.

## Before you ship

1. **Set the contact email.** Edit the constant on the first line of `script.js`:

   ```js
   const CONTACT_EMAIL = "contact@example.com"; // replace with the real address
   ```

   The walkthrough form opens a `mailto:` link to that address, pre-filled with the visitor's name, email and firm. Nothing is sent from the page itself. The fallback line shown after submitting reads the same constant.
2. **Add social-share tags once the domain is known.** The page has Open Graph and Twitter tags but deliberately no `og:image`, `og:url` or `canonical`: the brief forbids raster images and the production domain is not decided yet. Add all three when the domain is live (social cards need a PNG or JPG, which is the one place a raster file is unavoidable).
3. **Re-read the content rules below** before editing any copy.

## Renaming the product

The brand name is written literally, never injected, so a rename is one find-and-replace. The working name is **Kitchenaut**; the alternative under consideration is Quisine.

Every occurrence, as of the last edit (14 across four files; match case-insensitively):

| File | Count | Where |
| --- | --- | --- |
| `index.html` | 10 | `<title>`; meta description; `og:site_name`; `og:title`; `twitter:title`; header wordmark text; hero subhead; the `aria-label` on the "answers" list in the Problem section; the FAQ answer to "How is this different..."; footer wordmark text |
| `script.js` | 2 | The email subject line and the first line of the email body |
| `favicon.svg` | 1 | The `aria-label` on the mark |
| `styles.css` | 1 | The header comment |

Check the list is still complete at any time:

```sh
grep -n -i kitchenaut index.html script.js favicon.svg styles.css
```

To rename: replace `Kitchenaut` with the new name in `index.html`, `script.js`, `favicon.svg` and `styles.css` (the case-insensitive grep above catches `kitchenaut` too). The wordmark is an inline SVG orbit-ring mark plus the name as live HTML text in Fraunces, so a longer or shorter name needs no SVG edit. The folder name `kitchenaut-landing` is not referenced from inside the files.

## Deploy to Cloudflare Pages

Nothing has been deployed. When you are ready:

**Git integration (recommended)**

1. Put this folder in a Git repository (GitHub or GitLab) and push it.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** leave empty (there is no build)
   - **Build output directory:** `/` (the folder root)
   - **Root directory (advanced):** leave empty if this folder is the repository root. If the repository contains other things and this site lives in `kitchenaut-landing/`, set it to `kitchenaut-landing`.
4. Save and deploy, then add your custom domain under **Custom domains**.

**Direct upload (no Git)**

```sh
cd kitchenaut-landing
npx wrangler pages deploy . --project-name <your-project-name>
```

After the first deploy, add `canonical`, `og:url` and `og:image` (see "Before you ship").

## Content rules this page follows

Keep these when editing copy:

- The only statistics are the four UN Environment Programme Food Waste Index Report 2024 figures in the Problem section, with the source link. Do not add others.
- Pricing is labelled "Planned pricing, pre-launch assumptions". Targets are labelled "Targets, not results". Every roadmap phase is marked "Planned".
- No users, traction, revenue, waitlist numbers, press, testimonials, logos, awards, partners, investor names or team members.
- No claims of first, only or best. No competitors or third-party brands named. No model vendor named.
- Emoji appear only inside the phone mockups. All phone screens are labelled "Prototype UI, sample data."
- No text under 14px anywhere, including inside the phone mockups (the phones are sized in `em`, so they scale as a unit and never go below 14px).

## Design notes

- Tokens live at the top of `styles.css` (`:root`): background `#120e0b`, surfaces `#1c1612` and `#261e18`, text `#f6efe6`, muted `#b8a99a`, orange `#f97316`, amber `#f59e0b`, green `#22c55e`, purple `#a855f7`. Lighter `-text` tints are used for small coloured text so AA contrast holds on the dark surfaces.
- Fonts: Fraunces (headings) and DM Sans (body) from Google Fonts, loaded without blocking render, with Georgia and system-ui fallbacks. This is the page's only third-party request.
- The hero grain is a procedural SVG filter in CSS, not an image file.
- Motion is limited to transforms and opacity. With `prefers-reduced-motion: reduce` the hero phone stays on the Quests screen, reveals show immediately, the XP ladder is filled, and the pulse and orbit animations stop. The hero phone loop also has a visible pause button and pauses while off-screen or in a background tab.
- Without JavaScript the page is fully readable: reveals are visible, every FAQ answer is open, the XP ladder is filled, and the nav links wrap onto their own row.

## Accessibility

Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered headings, a skip link, visible focus rings, labelled form fields with `autocomplete`, an FAQ built from buttons with `aria-expanded` and `aria-controls` and regions labelled by their questions, and `role="img"` with a descriptive `aria-label` on every phone mockup and diagram. Decorative SVGs are `aria-hidden`.
