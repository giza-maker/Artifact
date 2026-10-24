# Nomli design contract

Nomli is a mobile consumer app presented inside a cinematic, photography-led landing page. The live phone is the main product demonstration. Preserve the earlier orange N-and-spoon identity and warm kitchen imagery. Learn, Manage and Play have equal product importance.

- App background #100f0e; surfaces #1c1a17/#25211c; text #faf6ef; secondary #a89f94. Primary orange #ff7a18. Other colors have semantic meaning only.
- App typography: locally hosted DM Sans, 22–25px screen titles, 14px body, 10–12px compact metadata. Landing display uses locally hosted Fraunces with DM Sans body.
- Mobile app at every browser size: centered device up to 430px on desktop, edge-to-edge in a phone iframe. Five icon tabs remain visible; header and bottom navigation frame an independently scrolling content region. No desktop sidebar.
- Cards use 16–24px corners; touch controls usually 44px minimum, compact secondary controls 36px. Visible keyboard focus, native dialog focus containment and Escape dismissal. Camera simulations fill the device; other dialogs behave as bottom sheets.
- Phone composition: image-first meal cards, ingredient photography, contextual Zara, lesson thumbnails and distinct recipe photos. Use Phosphor regular icons from the local sprite. Never substitute emoji for navigation icons.
- Motion communicates state: short screen translations, finite scan/extraction stages, detection labels, button press feedback, one-shot reward celebration, and landing section reveals. Never auto-cycle an interactive screen. Respect reduced motion; avoid layout-thrashing loops.
- The hero embeds the same app engine as the standalone mobile demo. Landing shortcuts navigate that phone through same-origin messages. Investor guidance is optional and hidden for the normal hero preview.
- Scanning includes fridge, barcode, expiry label, physical receipt and e-receipt simulations. Each leads to editable review before state changes. No live camera, files, OCR or recognition service is accessed.
- Lesson progress means concept read, knowledge check and self-reported recipe practice. XP tracks activity separately. Three starter lessons are free; the 500-XP unlock is a Heat-control challenge.
- All AI, scanning, receipt extraction, community and upgrade interactions are explicit simulations. Future capabilities have Demo / MVP planned / Later planned / Exploratory labels.
- Never collect real credentials, payment details, contact information or health information for the demo. Onboarding uses fictional sample choices. No claim of certified skills, food safety or photo verification.
- The app's sample session survives refresh when session storage is available. Reset creates a known seed state; memory fallback is disclosed for restricted file previews.
- Every sheet uses a bounded flex column: fixed title/Close, independently scrolling body, contained overscroll and dynamic viewport height. Camera controls retain a scroll fallback on short screens. Phone widths up to 600px fill the viewport without an outer page scrollbar.
- Replace an open sheet in place; cancel capture timers when switching or dismissing. Cancel the previous route animation before starting the next. Validation brings its focused invalid field into view.
