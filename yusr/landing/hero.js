(() => {
  'use strict';

  const scene = document.querySelector('#hero-scene');
  const image = document.querySelector('#hero-image');
  const canvas = document.querySelector('#hero-canvas');
  if (!scene || !image || !canvas) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: true,
    preserveDrawingBuffer: false
  });

  let enabled = true;
  let visible = false;
  let lost = false;
  let frame = 0;
  let lastFrame = 0;
  let startTime = 0;
  let imageTexture = null;
  let program = null;
  let positionBuffer = null;
  let uniforms = null;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let rect = null;
  let pointerX = 0.5;
  let pointerY = 0.5;
  let pointerActive = false;
  let ready = false;
  let cropX = 0.5;

  const vertexSource = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Warm-color weighting confines both effects to the terracotta form.
  const fragmentSource = `
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D u_image;
    uniform vec2 u_view;
    uniform vec2 u_imageSize;
    uniform vec2 u_pointer;
    uniform float u_pointerActive;
    uniform float u_time;
    uniform float u_cropX;
    void main() {
      float viewAspect = u_view.x / max(u_view.y, 1.0);
      float imageAspect = u_imageSize.x / max(u_imageSize.y, 1.0);
      vec2 uv = v_uv;
      if (imageAspect > viewAspect) {
        float ratio = viewAspect / imageAspect;
        uv.x = v_uv.x * ratio + (1.0 - ratio) * u_cropX;
      } else {
        uv.y = (v_uv.y - 0.5) * (imageAspect / viewAspect) + 0.5;
      }

      vec3 base = texture2D(u_image, uv).rgb;
      float terracotta = smoothstep(0.035, 0.16, base.r - base.g)
                       * smoothstep(0.08, 0.28, base.r - base.b)
                       * smoothstep(0.10, 0.30, max(base.r, max(base.g, base.b))
                                                - min(base.r, min(base.g, base.b)));
      vec2 delta = uv - u_pointer;
      float pointerFalloff = exp(-dot(delta, delta) * 9.0) * u_pointerActive;
      float wave = sin(uv.x * 12.0 + uv.y * 7.0 + u_time * 0.55);
      float displacement = (pointerFalloff * 0.008 + wave * 0.003) * terracotta;
      vec2 sampleUv = uv + vec2(displacement * 0.65, displacement * 0.35);
      vec3 color = texture2D(u_image, sampleUv).rgb;
      float grazing = pointerFalloff * 0.025 + (0.5 + 0.5 * wave) * 0.012;
      color *= 1.0 + terracotta * grazing;
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function buildProgram() {
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      return false;
    }
    const linked = gl.createProgram();
    if (!linked) return false;
    gl.attachShader(linked, vertex);
    gl.attachShader(linked, fragment);
    gl.linkProgram(linked);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(linked, gl.LINK_STATUS)) {
      gl.deleteProgram(linked);
      return false;
    }
    program = linked;
    uniforms = {
      position: gl.getAttribLocation(program, 'a_position'),
      image: gl.getUniformLocation(program, 'u_image'),
      view: gl.getUniformLocation(program, 'u_view'),
      imageSize: gl.getUniformLocation(program, 'u_imageSize'),
      pointer: gl.getUniformLocation(program, 'u_pointer'),
      pointerActive: gl.getUniformLocation(program, 'u_pointerActive'),
      time: gl.getUniformLocation(program, 'u_time'),
      cropX: gl.getUniformLocation(program, 'u_cropX')
    };
    return true;
  }

  function releaseGL() {
    if (!gl || lost) return;
    if (imageTexture) gl.deleteTexture(imageTexture);
    if (positionBuffer) gl.deleteBuffer(positionBuffer);
    if (program) gl.deleteProgram(program);
    imageTexture = positionBuffer = program = uniforms = null;
  }

  function makeTexture() {
    if (!image.complete || !image.naturalWidth || lost || !gl) return false;
    if (!program && !buildProgram()) return false;
    if (!positionBuffer) {
      positionBuffer = gl.createBuffer();
      if (!positionBuffer) return false;
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1, 1, -1, -1, 1, 1, 1
      ]), gl.STATIC_DRAW);
    }
    const texture = gl.createTexture();
    if (!texture) return false;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    } catch (_) {
      gl.deleteTexture(texture);
      return false;
    }
    if (imageTexture) gl.deleteTexture(imageTexture);
    imageTexture = texture;
    return true;
  }

  function measure() {
    const bounds = scene.getBoundingClientRect();
    rect = { left: bounds.left, top: bounds.top, width: bounds.width, height: bounds.height };
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    const position = getComputedStyle(image).objectPosition.split(' ')[0];
    cropX = position.endsWith('%') ? parseFloat(position) / 100 : 0.5;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const pixelWidth = Math.max(1, Math.round(width * dpr));
    const pixelHeight = Math.max(1, Math.round(height * dpr));
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
  }

  function shouldRun() {
    return !!gl && !lost && enabled && visible && !document.hidden && !reduceMotion.matches &&
      !!imageTexture && width > 0 && height > 0;
  }

  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    scene.classList.remove('webgl-ready');
    ready = false;
  }

  function draw(timestamp) {
    frame = 0;
    if (!shouldRun()) {
      stop();
      return;
    }
    // Schedule at 30 fps; no geometry or layout reads happen in this loop.
    if (timestamp - lastFrame < 1000 / 30) {
      frame = requestAnimationFrame(draw);
      return;
    }
    lastFrame = timestamp;
    if (!startTime) startTime = timestamp;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(uniforms.position);
    gl.vertexAttribPointer(uniforms.position, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTexture);
    gl.uniform1i(uniforms.image, 0);
    gl.uniform2f(uniforms.view, width, height);
    gl.uniform2f(uniforms.imageSize, image.naturalWidth, image.naturalHeight);
    const imageAspect = image.naturalWidth / image.naturalHeight;
    const viewAspect = width / height;
    const u = imageAspect > viewAspect ? pointerX * viewAspect / imageAspect + (1 - viewAspect / imageAspect) * cropX : pointerX;
    const v = imageAspect <= viewAspect ? (1 - pointerY - .5) * imageAspect / viewAspect + .5 : 1 - pointerY;
    gl.uniform2f(uniforms.pointer, u, v);
    gl.uniform1f(uniforms.cropX, cropX);
    gl.uniform1f(uniforms.pointerActive, pointerActive ? 1 : 0);
    gl.uniform1f(uniforms.time, (timestamp - startTime) / 1000);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (!ready) { scene.classList.add('webgl-ready'); ready = true; }
    frame = requestAnimationFrame(draw);
  }

  function resume() {
    if (shouldRun() && !frame) frame = requestAnimationFrame(draw);
    else if (!shouldRun()) stop();
  }

  function refreshImage() {
    stop();
    if (!gl || lost) return;
    if (makeTexture()) resume();
    else scene.classList.remove('webgl-ready');
  }

  function updatePointer(event) {
    if (!rect || !rect.width || !rect.height) return;
    pointerX = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    if (document.documentElement.dir === 'rtl') pointerX = 1 - pointerX;
    pointerY = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    pointerActive = true;
  }

  const interaction = scene.parentElement;
  interaction.addEventListener('pointerenter', event => {
    measure();
    updatePointer(event);
  }, { passive: true });
  interaction.addEventListener('pointermove', updatePointer, { passive: true });
  interaction.addEventListener('pointerleave', () => { pointerActive = false; }, { passive: true });
  image.addEventListener('load', refreshImage);
  image.addEventListener('error', () => { stop(); releaseGL(); }, { passive: true });
  document.addEventListener('visibilitychange', resume);
  reduceMotion.addEventListener?.('change', resume);
  window.addEventListener('resize', measure, { passive: true });

  const resizeObserver = new ResizeObserver(() => {
    measure();
    resume();
  });
  resizeObserver.observe(scene);

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    resume();
  }, { threshold: 0.01 });
  visibilityObserver.observe(scene);

  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    lost = true;
    stop();
    imageTexture = program = positionBuffer = uniforms = null;
  });
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false;
    imageTexture = program = positionBuffer = uniforms = null;
    if (makeTexture()) resume();
  });

  window.YusrHero = window.YusrHero || {};
  window.YusrHero.setMotion = value => {
    enabled = !!value;
    resume();
  };

  measure();
  if (image.complete && image.naturalWidth) refreshImage();
  else scene.classList.remove('webgl-ready');
})();
