(() => {
  const video = document.getElementById('muwalifFilm');
  const play = document.getElementById('filmPlay');
  const error = document.getElementById('filmError');
  const direct = document.getElementById('filmDirect');
  const frame = document.getElementById('filmFrame');
  const narrow = window.matchMedia('(max-width: 600px)');
  let started = false;
  let length = '90';

  function selectFormat() {
    // Keep the chosen film when rotating or entering fullscreen during playback.
    if (started) return;
    const portrait = narrow.matches;
    const name = portrait ? 'portrait' : 'landscape';
    frame.dataset.layout = name;
    video.width = portrait ? 1080 : 1920;
    video.height = portrait ? 1920 : 1080;
    video.poster = `assets/car-wash/${name}-poster.webp`;
    video.src = `assets/video/${name}-${length}.mp4?v=shop`;
    video.querySelectorAll('track').forEach(track => {
      track.src = `assets/video/${track.srclang}-${length}.vtt`;
    });
    direct.href = video.src;
  }

  document.querySelectorAll('[data-film-length]').forEach(button => button.addEventListener('click', () => {
    length = button.dataset.filmLength;
    document.querySelectorAll('[data-film-length]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('filmLength').textContent = length === '90' ? '01:30' : '00:30';
    started = false;
    video.pause();
    play.hidden = false;
    error.hidden = true;
    selectFormat();
  }));

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
  video.addEventListener('pause', () => { play.hidden = false; });
  video.addEventListener('loadedmetadata', () => { if (video.paused) play.hidden = false; });
  video.addEventListener('error', () => {
    play.disabled = false;
    play.hidden = false;
    error.hidden = false;
  });
})();
