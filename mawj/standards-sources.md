# MAWJ local asset and interface sources

Checked 23 October 2026. Runtime assets are local; source URLs below document provenance and refresh paths.

## Fonts

Google Fonts CSS API responses supplied the exact `fonts.gstatic.com` WOFF2 files. Both families are distributed under SIL Open Font License 1.1.

- `assets/fonts/manrope-latin-variable-200-800.woff2`: Manrope Latin variable, weights 200-800. CSS request: <https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap>. Binary: <https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2>.
- `assets/fonts/ibm-plex-sans-arabic-400.woff2`: IBM Plex Sans Arabic, Arabic subset, weight 400. CSS request: <https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap>. Binary: <https://fonts.gstatic.com/s/ibmplexsansarabic/v15/Qw3CZRtWPQCuHme67tEYUIx3Kh0PHR9N6Ys43PWrfQ.woff2>.
- `assets/fonts/ibm-plex-sans-arabic-500.woff2`: IBM Plex Sans Arabic, Arabic subset, weight 500. Same CSS request. Binary: <https://fonts.gstatic.com/s/ibmplexsansarabic/v15/Qw3NZRtWPQCuHme67tEYUIx3Kh0PHR9N6YPO_-CRXMR5Kw.woff2>.
- Family metadata and licenses: <https://fonts.google.com/specimen/Manrope>, <https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic>.

## Icons

`assets/icons.svg` mechanically wraps unmodified inner elements from Tabler Icons outline SVGs in symbols. Shared symbol attributes mirror source roots: `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, stroke width 2, round caps and joins. Source package is pinned to `@tabler/icons@3.49.0`, MIT license: <https://www.npmjs.com/package/@tabler/icons/v/3.49.0>.

CDN pattern: `https://cdn.jsdelivr.net/npm/@tabler/icons@3.49.0/icons/outline/{file}.svg`.

| Symbol id | Official Tabler file |
| --- | --- |
| `arrow-right` | `arrow-right.svg` |
| `arrow-left` | `arrow-left.svg` |
| `chevron-right` | `chevron-right.svg` |
| `chevron-left` | `chevron-left.svg` |
| `chevron-down` | `chevron-down.svg` |
| `search` | `search.svg` |
| `sliders` | `adjustments-horizontal.svg` |
| `map-pin` | `map-pin.svg` |
| `heart` | `heart.svg` |
| `star` | `star.svg` |
| `check` | `check.svg` |
| `shield-check` | `shield-check.svg` |
| `calendar` | `calendar.svg` |
| `clock` | `clock.svg` |
| `home` | `home.svg` |
| `bookmark` | `bookmark.svg` |
| `user` | `user.svg` |
| `x` | `x.svg` |
| `scissors` | `scissors.svg` |
| `sparkles` | `sparkles.svg` |
| `flower` | `flower.svg` |
| `wind` | `wind.svg` |
| `plus` | `plus.svg` |
| `minus` | `minus.svg` |
| `menu` | `menu-2.svg` |
| `phone` | `phone.svg` |
| `globe` | `world.svg` |
| `wifi` | `wifi.svg` |
| `battery` | `battery.svg` |
| `arrow-up-right` | `arrow-up-right.svg` |
| `arrow-down` | `arrow-down.svg` |
| `brand-apple` | `brand-apple.svg` |
| `device-mobile` | `device-mobile.svg` |

## Apple interaction guidance

- Apple Human Interface Guidelines, Buttons: <https://developer.apple.com/design/human-interface-guidelines/buttons>. General hit region is at least 44 x 44 pt. Custom buttons need a visible pressed state. Use one or two prominent actions per view; distinguish preferred action through style instead of inconsistent control sizes.
- Apple UI Design Dos and Don'ts: <https://developer.apple.com/design/tips/>. Repeats 44 x 44 pt minimum hit targets and advises fitting primary content without horizontal scrolling.
- Apple Human Interface Guidelines, Accessibility: <https://developer.apple.com/design/human-interface-guidelines/accessibility>. iOS and iPadOS default target is 44 x 44 pt. Spacing matters alongside target size.
- Apple iPhone User Guide, Customize onscreen motion: <https://support.apple.com/guide/iphone/iph0b691d3ed/ios>. Reduce Motion suppresses system motion effects and screen transitions; users can also disable auto-play animated images.

MAWJ application: give every tappable control a minimum 44 px CSS hit box as practical web approximation, show pressed/selected state, avoid horizontal viewport overflow, and make nonessential transitions disappear under `prefers-reduced-motion: reduce`. Do not auto-play decorative motion for reduced-motion users.
