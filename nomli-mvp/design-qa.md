# Nomli M14 design QA

final result: passed

Source visual truth: `artifacts/m14-editorial/selected-reference.png`, first displayed ImageGen option selected by the owner on 30 October 2026. Implementation source: `1a5f43f351452a739f07b446203470ece0849aef`.

Implementation: local Nomli app, with controlled native transport and synthetic inventory for repeatable browser checks. Matching-content Kitchen capture: `artifacts/m14-editorial/kitchen-reference-final.jpg`. Full comparison: `artifacts/m14-editorial/comparison-full.jpg`. Focused typography/rail/ingredient comparison: `artifacts/m14-editorial/comparison-detail.jpg`.

Viewport: 390 × 844 logical pixels (captured raster 390 × 843 due browser scaling). Additional interaction checks: 320 × 640 and 320 × 568. Reference raster is 880 × 1787; comparison scales it proportionally to 390 pixels wide and pads the remaining canvas. It is never stretched. Kitchen comparison uses the same five foods and quantities as the concept: tomatoes 6, cucumber 4, lemon 3, eggs 12 and milk 1 L.

## Findings and fixes

No actionable P0, P1 or P2 remains in the final evidence.

| Iteration | Earlier finding | Fix and post-fix evidence |
| --- | --- | --- |
| 1 | [P1] Tall Kitchen rail and duplicated labels displaced the second food group. A legacy tomato photo carried a dark square background. | Condensed header/rail, open ingredient grid, bilingual secondary names, explicit local photos above atlas fallbacks. Final Kitchen and both comparison boards show all five quantities plus primary action and navigation. |
| 1 | [P1] A newly added body navigation attribute made delegated clicks rerender preparation before checkbox changes completed. | Removed the colliding attribute. All six preparation checks and tools check now update progress and enable Start. Full cooking flow repeated through public controls. |
| 1 | [P2] Recipe search occupied half a row; time and repeated copy displaced meal photography. | Full-width search, three availability controls, duration under More filters, shorter summary and open photo-led cards. Recipe and discovery captures retain real readiness behavior. |
| 1 | [P2] Prep header wrapped; ingredient names collided with checkbox space. | One-line header, compact Zara shortcut, smaller artwork column, checkbox beside quantity. `prep-final.jpg` shows readable names and seven working confirmations. |
| 2 | [P2] Completed prep cards used excessive orange outlines. Receipt scrollbar dominated the sheet. | Neutral completed cards; orange reserved for progress/primary actions. Thin, low-contrast sheet scrollbars. `prep-final.jpg` and fresh `receipt-review-final.jpg` show the changes; modal scroll metrics confirm independent scroll access. |
| 2 | [P1] Completion photo initially pushed actions below the fold. [P2] Later header spacing made that photo overlap the logo. | Explicit image height/aspect ratio, smaller heading and corrected top margin. In `complete-final.jpg`, photo top equals header bottom (54.8px); primary action ends at 612.9px, above navigation at 772px. |
| 2 | [P1] Completion could recur after leaving through a generic navigation action. | Clear ephemeral completion on navigation. Back to Kitchen then Cook returns to discovery. Undo remains explicit and was exercised through its confirmation dialog. |

## Fidelity surfaces

- **Fonts and typography:** Local Fraunces display headings and DM Sans controls/body match the selected editorial direction. Actual computed heading family is Fraunces. Arabic secondary names retain language and direction metadata. Forms and source cooking instructions remain readable; canonical recipe instructions are unchanged.
- **Spacing and layout:** Open three-column Produce and two-column Dairy & eggs groups; one primary Add groceries dock; three main destinations. The whole top bar belongs to the main scroll region. Category rail remains horizontal and reaches all eight visual groups covering all 32 stored category IDs. Main scroll width equals client width at both 390px and 320px.
- **Colors and tokens:** Cream `#f8f3e9`, ink `#211d17`, orange `#ff7108`, dark accent text `#a83e00` and muted `#70685e`. Dark text on orange intentionally improves contrast compared with the generated white CTA label. Dialogs, pickers, scan, chat, utilities and Android system-bar/splash colors follow the light system.
- **Image quality and assets:** Existing 272 food illustrations, uploaded local images, recipe photography and all 60 step media mappings are reused as requested. Atlas cells keep square proportions. User photos retain priority. Standard icons use the existing Phosphor family; search/filter symbols came from the official library. No substitute CSS drawings or emoji artwork were added.
- **Copy and content:** Repeated eyebrows, retail-name paragraphs and implementation labels were removed from primary surfaces. Real quantities, readiness, confirmation, privacy, errors and stock constraints remain. Zara suggestions still prefill rather than send. Completion never logs calories or deducts stock by itself.

## Expected adaptations

The generated concept represents ideal sample content. The app retains real inventory, all supermarket sections, editable records and recovery. Existing atlas imagery differs from the concept photos; this follows the owner's request to reuse assets. All-food mode shows multiple groups, so Produce receives its selected underline only when filtered. Recorded expiry remains available through Use soon and editing; past-date warnings stay visible. The existing purple Zara character is retained artwork, not an additional UI accent.

## Interaction evidence

- Category rail reached its last groups: 390px client width, 840px content width, scroll position 380px. No page-wide overflow.
- Top bar scrolled to y = −142.4px while Add groceries stayed at y = 698px.
- Arabic search `بيض` returned the egg item. Arabic manual quantity entry and automatic Rice & grains/Pantry suggestions were checked without saving the disposable editor.
- The category picker exposed all 32 bilingual options; its last Seafood option was reachable at 320px width.
- Paper-receipt fixture reviewed six separate cards, preserved Arabic quantity `٣٠`, required final confirmation, then imported six items. Kitchen contained 11 items afterward and reset stale category/search filters.
- Preparation required all ingredients and tools. Three distinct cooking steps rendered their own media. Media pause, timer start/pause, Zara overlay, reply, close/resume and step progress were exercised.
- Actual-use review accepted Arabic `٠٫٥`, stayed disabled before confirmation, then atomically updated stock. Egg quantity changed from 30 to 26; parsley from 1 to 0.5 bunch. Explicit undo restored only the selected meal's quantities. Subsequent cooking and save completed successfully.
- Final browser console error check returned no errors. Automated suite: 485 tests passed, plus content, art and cooking-media validation. CI runs the same checks and Android compilation.

## Limits and follow-up polish

Camera, speech and assistant transport in these browser checks use controlled fixtures through the real Capacitor wrappers; these checks do not establish live OCR/model accuracy or physical Android camera, microphone, keyboard, hardware Back or process-kill behavior. Those remain phone acceptance checks. Source UI has no new external provider or API-key requirement.

P3: optional future fine-tuning of long ingredient labels and the existing Zara character art can be evaluated after device feedback. No remaining issue blocks this design handoff.
