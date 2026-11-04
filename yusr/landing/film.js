(() => {
  'use strict';

  const scene = document.querySelector('#hero-scene');
  const video = document.querySelector('#hero-film');
  if (!scene || !video) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let motionEnabled = true;
  let inView = typeof IntersectionObserver === 'undefined';
  let generation = 0;
  let attached = false;
  let policyBlocked = false;

  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.preload = 'none';

  function blockedByPolicy() {
    return reduceMotion.matches || !!connection?.saveData;
  }

  function clearFilm() {
    scene.classList.remove('film-ready');
  }

  function detach() {
    generation++;
    video.pause();
    if (attached) {
      video.removeAttribute('src');
      video.load();
      attached = false;
    }
    clearFilm();
  }

  function update() {
    const prohibited = blockedByPolicy();
    if (prohibited) {
      policyBlocked = true;
      detach();
      return;
    }
    if (policyBlocked) policyBlocked = false;

    if (!motionEnabled || !inView || document.hidden) {
      generation++;
      video.pause();
      return;
    }

    if (!attached) {
      const source = window.matchMedia('(max-width: 767px)').matches
        ? video.dataset.mobileSrc
        : video.dataset.src;
      if (!source) return;
      video.src = source;
      attached = true;
      video.load();
    }

    const attempt = ++generation;
    let playResult;
    try {
      playResult = video.play();
    } catch (_) {
      clearFilm();
      return;
    }
    if (playResult && typeof playResult.then === 'function') {
      playResult.then(() => {
        // A stale play promise must never pause a newer, valid play request.
        if (!motionEnabled || !inView || document.hidden || blockedByPolicy()) {
          video.pause();
          return;
        }
      }).catch(() => {
        if (attempt === generation) clearFilm();
      });
    }
  }

  function markReady() {
    if (!video.paused && !video.ended && !blockedByPolicy() && motionEnabled && inView && !document.hidden) {
      scene.classList.add('film-ready');
    }
  }

  video.addEventListener('playing', markReady);
  video.addEventListener('loadeddata', () => {
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !video.paused) markReady();
  });
  video.addEventListener('error', clearFilm);
  document.addEventListener('visibilitychange', update);
  reduceMotion.addEventListener?.('change', update);
  connection?.addEventListener?.('change', update);

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.01 });
    observer.observe(scene);
  }

  window.YusrHero = window.YusrHero || {};
  window.YusrHero.setMotion = value => {
    motionEnabled = !!value;
    update();
  };

  update();
})();
