# Nomli MVP design contract

## M14.1 Zara shell correction

- Full standalone Zara is a vertical flex chain: app header, app content, route view and Zara shell must share available height without becoming row siblings or forcing horizontal shrinkage.
- The conversation thread and composer own separate height and scrolling behavior. The thread may shrink and scroll; the composer remains reachable above app navigation and the keyboard.
- At compact keyboard heights of 520px or less, reduce nonessential chrome and preserve the question, composer controls and conversation access. Keep cooking chat overlay sizing independent from the standalone route.
- Native system bars use explicit `SystemBars` style `LIGHT`, producing dark glyphs on the light editorial surface. Do not delegate glyph contrast to device `DEFAULT` appearance.

## M14 warm editorial system

- The active interface uses a warm editorial direction: cream canvas, dark ink, restrained orange action color, large serif headings and food-led imagery. The exact tokens are `#f8f3e9` background, `#fffdf8` surface, `#f1eadf` raised surface, `#e8dfd2` tertiary surface, `#211d17` text, `#70685e` muted text, `#766e64` faint text, `#ff7108` accent and `#a83e00` accessible accent text. Semantic success, warning and danger colors remain reserved for status.
- Fraunces is the display face. DM Sans is the body and control face. Both load locally. Section headings may be large and tightly set; operational copy stays compact and readable.
- Primary navigation has three destinations: Kitchen, Cook and Zara. Scan remains a full workflow, reached from the sticky **Add groceries** action in Kitchen and relevant utility/menu actions. Manual add stays secondary. Removing Scan from bottom navigation does not change scan privacy, review or recovery behavior.
- The app header sits inside the main scrolling region. Bottom navigation remains outside that region and visible during ordinary Kitchen, Cook and Zara routes. Focused cooking phases may retain their own action dock and exit controls.
- Kitchen presents eight visual market groups in this order: Produce, Dairy & eggs, Proteins, Grains, Pantry, Drinks & treats, Prepared & special, Other food. These groups organize the inventory and image rail only. The underlying 32 supermarket category IDs, item editor choices, category inference and stored data remain unchanged.
- Kitchen uses an open three-column ingredient grid at the 390px reference width. Local user photos take priority; transparent food artwork is the default. Search, storage, sorting, Use soon and category filters remain reachable without surrounding every item in a card.
- Meal completion appears only after an explicitly confirmed actual-use save. It may link back to Kitchen, dismiss into meal discovery or open guarded undo. The completion surface cannot deduct stock again, infer consumption or add a calorie-diary entry.
- M14 changes presentation and navigation hierarchy. Existing local-first storage, connection disclosure, scan review, recovery quarantine, frozen cooking allocations, confirmed actual-use deduction, replay protection and guarded undo contracts remain authoritative.

## M12 kitchen, cooking and connection refinement

- An empty Kitchen leads with one Scan action and a quieter manual-add action. Inventory utilities stay inside a collapsed native details section so the first view remains focused on stock.
- Inventory uses a canonical food name where a strict match exists, while retaining the retail name and the original editable name. Editing must not replace a specific package name with a generic cooking label or discard bilingual text.
- Manual add starts with Name, Amount, Unit and Location. Expiry, photo, category, cooking identity and measured weights stay under More details. Category and storage may be inferred for a clear name, but a manual choice wins. Manual quantities accept Arabic, Persian and English decimal digits through the shared localized parser.
- Missing mass remains unknown. Count or bunch stock never gains an assumed weight; recipe readiness asks for a measured or printed grams-per-unit value when conversion needs one. Explicit cooking-link opt-out remains unlinked.
- Cook provides search plus All, Ready and Near groups. Ready contains only recipes whose `stockReady` result is true. Near shows recipes that need limited review or stock. Search filters results without leaving unrelated sections in the result view.
- Recipe readiness and Prepare controls appear before calorie estimates. Recipe detail may show read-only previews for all 60 bundled step posters; previews never start a session, advance a step or mutate stock.
- Scan and Zara share one Connect Nomli flow. Primary setup uses QR or a manual code; service address is an advanced option. Nomli validates the connection against its health endpoint for up to 10 seconds before saving. Scan retains the selected source type and opens its camera/file choices after setup; no image is selected or sent before connecting. Zara returns to its existing chat. Failed validation preserves entered setup values and does not replace a working connection.
- Reviewed scans return to Kitchen with a reviewed-item count and a Find a meal action. Receipt spending remains saved and accessible in Kitchen tools; importing does not redirect into budgeting.
- Zara opens with a welcome and local, contextual actions based on Kitchen and cooking state. Suggestions only fill the editable question; Send remains explicit. Cooking chat remains a sheet over preparation, steps and actual-use review, preserving the underlying route, draft values and active session.
- Scanning still sends only the selected source through the protected connection. Ingredient photos remain local. Connection credentials remain outside inventory backups and assistant context disclosure stays reviewable before Send.
- Cooking still freezes allocations at preparation, deducts only after actual-use confirmation and supports guarded undo. UI refinement must not infer consumption, log food or change stock from previews, search, connection setup or Zara suggestions.

## Historical M11.2 cooking chat sheet

- Opening Zara from preparation, a cooking step or actual-use review opens a native modal sheet over that exact screen. Keep its route, DOM, scroll position and unsaved form values intact.
- Reuse the same conversation, question and voice controls as full Zara. Mount only one chat surface at a time so labels, IDs and live regions stay unique. Opening the sheet never sends a question.
- Keep recipe, phase/step and running timer in the sheet header. Announce timer completion inside the sheet. Stop step speech and pause decorative cooking motion under the sheet; resume prior playback intent when it closes.
- Close with Back to cooking, Escape, backdrop or browser/native history Back. A settings dialog above chat closes first. Ephemeral history entries belong to the active cooking session; route changes clear the sheet before mounting another screen.
- Closing the sheet stops microphone capture and transcript review while retaining typed text, completed history and any pending network reply. Background replies update chat controls without rebuilding cooking forms.
- Adapt to visual viewport and keyboard changes without animating layout. Keep composer actions at 44px, thread and voice controls independently scrollable, and reduce entry motion when requested.

## M11.1 cooking and Zara continuity

- Zara shows an explicit phase-specific Resume control while a cooking session exists. Keep its action label readable and the recipe/step context visible on narrow phones.
- Cooking preparation, steps and final review have a persistent chat shortcut. Reopen the existing conversation without replacing the user’s question with a new step prompt.
- Same-session cooking/chat round trips preserve pending replies, including browser history navigation. Duplicate history events must be idempotent. Stop voice capture on route changes; unrelated navigation and cooking mutations still invalidate pending advice.
- Background replies update chat controls without replacing preparation, timer or actual-use forms. Preserve form focus through persistence. Clear the reply-ready indicator when the conversation is opened.
- Chat never advances a cooking step, resets a timer, changes allocations or deducts stock.

## M11 calories

- Calories live in Kitchen utilities, with a compact daily summary above inventory. Keep the four primary destinations unchanged.
- Show estimated energy per recipe serving and the total for the selected recipe size. USDA generic reference values are estimates; incomplete ingredients remain visibly missing, with manual calorie entry available.
- Food intake is a separate dated diary. Users explicitly enter portions eaten, including fractions; cooking, deduction and undo never log food. Store the original per-portion calorie snapshot so later stock or recipe changes cannot rewrite history.
- Daily goals are optional user inputs with no recommended target. Show whole kcal, calculate with original precision, support Arabic/Persian/English numerals and reject ambiguous grouping.
- Edit and remove entries, review other dates, retain diary and goal in local backups. Do not include this diary in Zara context or require network access for logging.

## M10 visual cooking guide

- All 60 steps across 20 recipes have a distinct local illustration and motion asset. Active steps show the current action instead of the finished dish photo. Add a short observable “Look for” cue; quantities and cooking requirements remain in the canonical instructions.
- Use completed, reviewed clips already created before the provider change. New replacement images use the built-in image generator. The final set contains 45 silent five-second clips and 15 four-frame illustrated sequences. No media generation or external media fetching occurs in the installed app.
- Illustrations follow preparation order and ingredient form. Keep raw meat out of cooked-food scenes; do not infer food safety from appearance. Corrected sequences cover four eggs in shakshuka, cold yogurt/tahini mixing, fatteh layer order, grain identity and raw shaping before browning.
- Bundle 960×540 posters and muted H.264 clips; sequence sheets have four 960×540 cells. Only the current visible step plays. Pause off-screen, behind dialogs and in the background; preserve manual pause. Reduced-motion users get a still unless they explicitly start playback. Never advance the step or start a cooking timer through media playback.
- Keep source prompts, generation identifiers and file hashes in the media manifest. Validate all 60 mappings, file inventory, formats, source text, hashes and byte limits before building.

## Product focus

Nomli is a lean mobile kitchen companion. Three primary destinations define the active shell:

- **Kitchen** — current inventory, quantities, freshness and corrections.
- **Cook** — 20 recipes, linked-stock readiness, preparation, guided cooking and reviewed deduction with undo.
- **Zara** — live kitchen assistance with explicit Send, visible data disclosure and reviewed proposals.

Scan remains available from Kitchen through **Add groceries** and utility/menu actions. It keeps protected image/PDF recognition, editable review and optional explicit cooking links.

Do not add school, XP, quests, community, investor-tour or social-product language to this MVP surface.

## Visual system

- Preserve the orange N-and-spoon identity, local photography and Phosphor sprite icons.
- Use the M14 warm editorial palette defined above. Dark colors remain appropriate over photography and in modal backdrops, not as the default page canvas.
- Use semantic colors only for success, warning and error states.
- Typography: locally hosted Fraunces for display headings and DM Sans for body, controls and metadata. Body text remains around 14px; compact metadata remains 10–12px.
- Cards use 16–24px concentric radii. Primary touch controls are at least 44px; compact secondary controls at least 36px.
- Photography remains ingredient- and food-led. Zara uses existing portrait assets. Navigation never uses emoji. All 20 curated recipes have local food artwork; 17 new generated WebP images include provenance. Device verification remains separate.

## Shell and responsive behavior

- Desktop: centered phone, maximum width 430px and maximum height 900px.
- Phone or embedded browser: edge-to-edge `100dvh` shell with safe-area padding.
- Header content belongs inside the independently scrolling main region. Bottom navigation stays visible in a three-column grid outside active cooking. Preparation, guided steps and actual-use review use a focused shell with Recipes exit and a sticky action dock.
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

## M8.4 bilingual receipt and weight entry

- Preserve these exact Carrefour review names: `Eggs Medium 30pcs / بيض متوسط 30 قطعة`, `Parsley Bunch / بقدونس`, `Mint Bunch / نعناع`, `Salt Table 700g / ملح طعام 700 جم`, `Black Pepper Ground 50g / فلفل أسود مطحون 50 جم` and `Olive Oil Extra Virgin 250ml / زيت زيتون بكر ممتاز 250 مل`. Each slash-separated clause must resolve to the same cooking ingredient. Use only curated word orders and compact exact forms; do not broaden matching by fuzziness, substrings, brands or processing terms.
- Startup and confirmed restore repair all six positive unlinked items while preserving quantities and receipt finance. Respect cooking-use opt-outs, valid manual cooking IDs and frozen active-session allocations.
- Treat one herb bunch as present with unknown mass. On a gram-based Recipe requirement, show the needed amount, `weight needed` and one compact `Enter weight` action. Do not repeat the item in the general unit-review panel.
- The weight dialog accepts localized digits and explains that quantity stays unchanged. Save only after snapshot revalidation, update only `gramsPerUnit`, and block allocated lots. Keep measurement-only shortages out of the shopping list.
- Let canonical Salt artwork override an incompatible legacy shelf category only as an illustration fallback. Never change category, cooking identity, quantity or finance through artwork resolution.
- Keep the existing scan provider, authentication and model contracts unchanged.

## M9 guided cooking

- Make current action prominent: 30–34px action title, 20px source instructions, finished-dish photography, numbered progress, source heat cues and a visible next-step action. Use 200ms transform/opacity entry only, with reduced-motion overrides.
- Preparation uses visual ingredient cards with canonical amounts and 18px quantities. Each card and tools confirmation remain required. Frozen servings and allocations stay unchanged.
- Step ingredient details show whole-recipe prep totals, explicitly labeled as totals. They never imply a second dose or invent per-step consumption. Curated titles and ingredient references cover all 20 recipes and 60 steps; displayed instructions preserve source text.
- Offer source timer presets only where the recipe states an explicit duration. Custom timers remain optional and start only on explicit tap. Preserve wall-clock deadline and notification ownership; failed replacement saves restore retired alerts where possible.
- Optional Read step invokes Android TextToSpeech only on tap, through the configured phone service. No new API key or microphone permission. Stop on navigation, step changes, dialogs, backgrounding and destruction; bound initialization and playback. Voice quality and availability depend on installed engine/data.
- All steps opens a scrollable reference dialog. Ask Zara prefills current-step question without replacing an existing draft or sending automatically. Return to the active step from the chat context.
- Final review shows allocated lots, current stock, editable actual use, explicit confirmation and one atomic save. No deduction during preparation or steps; undo remains available in Recent meals. Keep every row reachable at 320px width and short heights.
