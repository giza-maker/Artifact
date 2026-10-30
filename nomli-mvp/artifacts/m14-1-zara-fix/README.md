# M14.1 Zara regression evidence

Source: 5665ceae55c0e2a2a4e360382e8f50b4c9605b4f. Screenshots use synthetic inventory and controlled native/assistant transport. No private user data.

Before: standalone Zara at 390 × 844 used a 169px-wide header beside a 221px chat. The actual screenshot is before.jpg. A separate short-height failure (short-before.json) put the composer below the main region.

After: after-390.jpg shows the full-width route with a saved cooking session; keyboard-390.jpg shows a long Arabic draft at compact height. The JSON files preserve live browser measurements and assertion results; layout-verification.json indexes them. regression-probes.mjs preserves the read-only measurement functions used through CUA. These evidence files are not bundled in the APK and do not replace physical Android testing.

Repeat gate: open standalone Zara with a long saved reply, test 390 × 844 and 320 × 568; enter a long Arabic draft, then test 390 × 400 and 320 × 360. Expand/scroll voice controls. Check every standalone predicate in regression-probes.mjs. Repeat with an unconnected ordinary browser. Open cooking, open Zara over the step, test normal/short sizes and all overlay predicates, then return to the same step. Check Kitchen header/content stack, page scrolling, and menu bounds. Browser viewport reduction simulates available keyboard height; it does not establish actual IME behavior.

corrected-zara.jpg shows a separate representative six-step reply with the same production UI. Stress captures and long-reply measurements remain preserved separately.
