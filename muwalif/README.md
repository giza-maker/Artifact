# Muwalif landing page

Static Arabic-first landing page, with an English view and the approved 58-second promotional film.

Published through `giza-maker/Artifact`, branch `gh-pages`, directory `muwalif/`:

https://giza-maker.github.io/Artifact/muwalif/

No build required. Serve the repository root with a static HTTP server; open `/muwalif/`.

The video uses self-hosted H.264/AAC MP4s. Mobile widths up to 600px select the separately composed portrait film; larger widths select landscape. Format stays fixed after playback starts so fullscreen/orientation changes do not restart the film. Native video controls provide pause, seeking, volume, fullscreen and captions. Arabic speech and burned-in Arabic captions are part of the approved film; English WebVTT captions activate when switching the page to English. Arabic WebVTT is also available in the native caption menu.

No video autoplay. `preload="none"` avoids an initial video download; only the poster loads before playback. All assets use relative paths for project-page hosting. No analytics or external media embed.

Player source: `video.js` and `video.css`. Page interactions/translations: `app.js`. Approved film masters remain in the production workspace, separate from this public website. The published media is illustrative; no live integration or results claim.
