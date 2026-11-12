(() => {
  const video = document.getElementById('muwalifFilm');
  const play = document.getElementById('filmPlay');
  const error = document.getElementById('filmError');
  const direct = document.getElementById('filmDirect');
  const frame = document.getElementById('filmFrame');
  const narrow = window.matchMedia('(max-width: 600px)');
  let started = false;

  function selectFormat() {
    // Keep the chosen film when rotating or entering fullscreen during playback.
    if (started) return;
    const portrait = narrow.matches;
    const name = portrait ? 'portrait' : 'landscape';
    frame.dataset.layout = name;
    video.width = portrait ? 1080 : 1920;
    video.height = portrait ? 1920 : 1080;
    video.poster = `assets/video/muwalif-${name}-poster.webp`;
    video.src = `assets/video/muwalif-${name}.mp4`;
    direct.href = video.src;
  }

  function selectCaptions() {
    const english = document.documentElement.lang === 'en';
    for (const track of video.textTracks) {
      track.mode = english && track.language === 'en' ? 'showing' : 'disabled';
    }
  }

  selectFormat();
  selectCaptions();
  play.hidden = false;
  narrow.addEventListener('change', selectFormat);
  new MutationObserver(selectCaptions).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang'],
  });

  play.addEventListener('click', async () => {
    error.hidden = true;
    play.disabled = true;
    if (video.error) video.load();
    try {
      await video.play();
      video.focus({ preventScroll: true });
    } catch {
      error.hidden = false;
      play.hidden = false;
    } finally {
      play.disabled = false;
    }
  });
  video.addEventListener('play', () => {
    started = true;
    play.hidden = true;
    error.hidden = true;
  });
  video.addEventListener('ended', () => { play.hidden = false; });
  video.addEventListener('error', () => {
    play.disabled = false;
    play.hidden = false;
    error.hidden = false;
  });
})();
