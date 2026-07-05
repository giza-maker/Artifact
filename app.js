const imagePath = (slug, index) => `./assets/images/${slug}-${String(index).padStart(2, "0")}.webp`;

const concepts = [
  {
    slug: "snack-court",
    title: "Snack Court",
    handle: "@SnackCourtTV",
    rank: "Flagship",
    score: 94,
    accent: "#ff5a5f",
    accent2: "#f7c948",
    hook: "Courtroom drama where snack characters stand trial, fans vote verdicts, and every clue becomes canon.",
    pills: ["courtroom microdrama", "fan voting", "plush-ready cast"],
    beats: [
      "Donut defendant finds missing sprinkle evidence before jury vote.",
      "Chili lawyer discovers popcorn jury member hiding secret crumbs.",
      "Apple judge receives a mystery note from vending machine alley.",
      "Soda reporter leaks footage that flips the whole trial."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("snack-court", n))
  },
  {
    slug: "orbit-office",
    title: "Orbit Office",
    handle: "@OrbitOfficeTV",
    rank: "Workplace chaos",
    score: 87,
    accent: "#55c7ff",
    accent2: "#f2d35b",
    hook: "Alien coworkers turn boring meetings into cosmic disasters, startup satire, and recurring office feuds.",
    pills: ["alien sitcom", "work jokes", "desk merch"],
    beats: [
      "Asteroid intern deletes gravity before the board meeting.",
      "Jellyfish manager schedules a meeting inside a black hole.",
      "Cactus accountant discovers the snack budget is alive.",
      "Robot assistant forwards one secret memo to every planet."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("orbit-office", n))
  },
  {
    slug: "hauntel",
    title: "Hauntel",
    handle: "@HauntelTV",
    rank: "Spooky sitcom",
    score: 89,
    accent: "#9f7aea",
    accent2: "#f6c177",
    hook: "Ghost hotel staff handle monster guests, stolen pillows, room secrets, and seasonal Halloween spikes.",
    pills: ["spooky cozy", "hotel drama", "seasonal merch"],
    beats: [
      "Suitcase mimic steals one pillow and triggers lobby panic.",
      "Mirror spirit checks in under a fake reflection.",
      "Candle bellhop finds a guest living inside room service.",
      "Ghost concierge opens the one room nobody booked."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("hauntel", n))
  },
  {
    slug: "dream-repair-co",
    title: "Dream Repair Co.",
    handle: "@DreamRepairCo",
    rank: "Cozy fantasy",
    score: 86,
    accent: "#8fb8ff",
    accent2: "#f8d56b",
    hook: "Tiny repair creatures fix broken dreams with golden thread, emotional stakes, and bedtime-world magic.",
    pills: ["cozy rescue", "soft lore", "print products"],
    beats: [
      "Star apprentice gets trapped inside a cracked dream bubble.",
      "Nightmare smoke escapes the jar before sunrise.",
      "Dream mechanic loses the only tool that repairs flying islands.",
      "Archivist finds one dream that belongs to nobody."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("dream-repair-co", n))
  },
  {
    slug: "rust-and-roses",
    title: "Rust & Roses",
    handle: "@RustAndRoses",
    rank: "Robot romance",
    score: 84,
    accent: "#e46d4f",
    accent2: "#7bd88f",
    hook: "Small robots run a flower shop full of wedding chaos, secret bouquets, and gentle romance arcs.",
    pills: ["flower shop", "robot cast", "giftable merch"],
    beats: [
      "Delivery drone tangles the wedding bouquet minutes before launch.",
      "Florist bot finds a black rose glowing after closing.",
      "Seedling assistant sells the wrong bouquet to the wrong crush.",
      "Watering-can robot hides a love note inside a terrarium."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("rust-and-roses", n))
  },
  {
    slug: "kitchen-kingdom",
    title: "Kitchen Kingdom",
    handle: "@KitchenKingdomTV",
    rank: "Tiny royalty",
    score: 82,
    accent: "#d9a441",
    accent2: "#70d16d",
    hook: "Utensil royalty runs a countertop kingdom where every missing pea becomes political scandal.",
    pills: ["royal drama", "food adjacent", "collectible pins"],
    beats: [
      "Fork knight loses the golden pea before royal banquet.",
      "Spatula advisor hides a map under the cutting board castle.",
      "Spoon queen declares war on the sink moat.",
      "Salt messenger spills evidence across the throne room."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("kitchen-kingdom", n))
  },
  {
    slug: "mood-mart",
    title: "Mood Mart",
    handle: "@MoodMartTV",
    rank: "Relatable mascots",
    score: 91,
    accent: "#41d6ff",
    accent2: "#ffd447",
    hook: "Emotion mascots work a late-night store. Each episode turns a mood into a joke people share.",
    pills: ["meme engine", "stickers", "relatable hooks"],
    beats: [
      "Jittery blue cloud gets stuck in the freezer aisle.",
      "Sunny spark oversells one tiny good day to every customer.",
      "Green calm crystal finds a secret box in the stockroom.",
      "Red flame starts a shift war over the last snack."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("mood-mart", n))
  },
  {
    slug: "lost-and-found-agency",
    title: "Lost & Found Agency",
    handle: "@LostFoundAgency",
    rank: "Everyday mystery",
    score: 92,
    accent: "#d6a443",
    accent2: "#70e0b1",
    hook: "Lost objects solve where things vanish: couch cushions, drawers, laundry portals, and tiny clues.",
    pills: ["endless cases", "universal pain", "detective IP"],
    beats: [
      "Key detective finds a missing earbud under couch-cushion canyon.",
      "Sock assistant discovers the society of single socks.",
      "Button archivist hides one clue inside the junk drawer office.",
      "Paperclip twins chase a stolen pencil through the vent."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("lost-and-found-agency", n))
  },
  {
    slug: "pocket-planet-zoo",
    title: "Pocket Planet Zoo",
    handle: "@PocketPlanetZoo",
    rank: "Collectible pets",
    score: 95,
    accent: "#4fd1c5",
    accent2: "#ff8a4d",
    hook: "Tiny living planets act like pets. Adoption, care, illness, escapes, and collectible toy logic.",
    pills: ["toy upside", "game-ready", "adoption arcs"],
    beats: [
      "Volcano planet sneezes lava sparks during checkup.",
      "Sleepy ringed planet escapes and leaves only a glowing trail.",
      "Ocean planet floods its habitat after one compliment.",
      "Storm planet refuses adoption until one caretaker solves its riddle."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("pocket-planet-zoo", n))
  },
  {
    slug: "weather-roommates",
    title: "Weather Roommates",
    handle: "@WeatherRoommates",
    rank: "Seasonal comedy",
    score: 83,
    accent: "#ffd447",
    accent2: "#62c7ff",
    hook: "Weather mascots share an apartment, fighting over thermostat, chores, and forecast drama.",
    pills: ["daily relevance", "seasonal spikes", "mascot merch"],
    beats: [
      "Rainy droplet floods the kitchen before inspection.",
      "Windy swirl steals sunny puffball's golden hat.",
      "Snowflake roommate moves into the fridge and refuses rent.",
      "Thundercloud drummer starts band practice during quiet hours."
    ],
    images: [1, 2, 3, 4, 5].map((n) => imagePath("weather-roommates", n))
  },
  {
    slug: "byte-bites-diner",
    title: "Byte Bites Diner",
    handle: "@ByteBitesDiner",
    rank: "Retro tech food",
    score: 88,
    accent: "#23d3d3",
    accent2: "#ff5a5f",
    hook: "Sentient retro gadgets run a neon diner, mixing food chaos, nostalgia, and tech jokes.",
    pills: ["retro nostalgia", "food clips", "sponsor lanes"],
    beats: [
      "Toaster chef launches waffles across breakfast rush.",
      "Monitor cashier finds a glowing floppy disk under counter.",
      "Cassette waiter loses the only song that calms angry customers.",
      "Jukebox manager locks everyone inside midnight menu mode."
    ],
    images: [1, 2, 3, 4, 5, 6].map((n) => imagePath("byte-bites-diner", n))
  }
];

const state = {
  concept: concepts[0],
  image: 0,
  galleryFilter: "all"
};

const $ = (selector) => document.querySelector(selector);

const formatCompact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1
});

const formatMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function setTheme(concept) {
  document.documentElement.style.setProperty("--concept-a", concept.accent);
  document.documentElement.style.setProperty("--concept-b", concept.accent2);
}

function renderConceptButtons() {
  const wrap = $("#conceptButtons");
  wrap.innerHTML = "";

  concepts.forEach((concept) => {
    const button = document.createElement("button");
    button.className = "concept-button";
    button.type = "button";
    button.setAttribute("aria-pressed", concept.slug === state.concept.slug ? "true" : "false");
    button.innerHTML = `
      <img src="${concept.images[0]}" alt="" loading="lazy" decoding="async">
      <span><strong>${concept.title}</strong><span>${concept.handle}</span></span>
      <small>${concept.score}</small>
    `;
    button.dataset.concept = concept.slug;
    button.addEventListener("click", () => setConcept(concept.slug));
    wrap.appendChild(button);
  });
}

function updateConceptButtonState() {
  document.querySelectorAll(".concept-button").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.concept === state.concept.slug ? "true" : "false");
  });
}

function scrollActiveConceptIntoView() {
  const activeButton = document.querySelector(`.concept-button[data-concept="${state.concept.slug}"]`);
  activeButton?.scrollIntoView({ block: "nearest", inline: "center" });
}

function setConcept(slug) {
  const concept = concepts.find((item) => item.slug === slug) || concepts[0];
  state.concept = concept;
  state.image = 0;
  setTheme(concept);
  updateConceptButtonState();
  renderFeature();
  renderEpisode();
  requestAnimationFrame(scrollActiveConceptIntoView);
}

function setConceptByOffset(offset) {
  const currentIndex = concepts.findIndex((concept) => concept.slug === state.concept.slug);
  const nextIndex = (currentIndex + offset + concepts.length) % concepts.length;
  setConcept(concepts[nextIndex].slug);
}

function updateFeatureImage() {
  const concept = state.concept;
  const image = concept.images[state.image];

  $("#featureImage").src = image;
  $("#featureImage").alt = `${concept.title} generated asset`;
  document.querySelectorAll(".thumb-button").forEach((button) => {
    button.setAttribute("aria-pressed", Number(button.dataset.imageIndex) === state.image ? "true" : "false");
  });
}

function renderFeature() {
  const concept = state.concept;

  updateFeatureImage();
  $("#featureScore").textContent = concept.score;
  $("#featureRank").textContent = concept.rank;
  $("#featureTitle").textContent = concept.title;
  $("#featureHandle").textContent = concept.handle;
  $("#featureHook").textContent = concept.hook;

  const pillWrap = $("#featurePills");
  pillWrap.innerHTML = "";
  concept.pills.forEach((pill) => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = pill;
    pillWrap.appendChild(span);
  });

  const thumbs = $("#featureThumbs");
  thumbs.innerHTML = "";
  concept.images.forEach((src, index) => {
    const button = document.createElement("button");
    button.className = "thumb-button";
    button.type = "button";
    button.dataset.imageIndex = String(index);
    button.setAttribute("aria-pressed", index === state.image ? "true" : "false");
    button.setAttribute("aria-label", `Show ${concept.title} asset ${index + 1}`);
    button.innerHTML = `<img src="${src}" alt="" loading="lazy" decoding="async">`;
    button.addEventListener("click", () => {
      state.image = index;
      updateFeatureImage();
    });
    thumbs.appendChild(button);
  });
}

function renderEpisode() {
  const concept = state.concept;
  const beat = concept.beats[Math.floor(Math.random() * concept.beats.length)];
  const twists = [
    "Audience vote chooses who gets blamed next.",
    "Final frame reveals a hidden witness.",
    "Comment with the verdict to unlock tomorrow.",
    "Best fan theory becomes episode canon.",
    "One prop becomes merch if comments demand it."
  ];
  const twist = twists[Math.floor(Math.random() * twists.length)];
  $("#episodeConcept").textContent = concept.title;
  $("#episodeLine").textContent = `${beat} ${twist}`;
}

function renderGalleryFilters() {
  const wrap = $("#galleryFilters");
  wrap.innerHTML = "";

  const filters = [{ slug: "all", title: "All assets" }, ...concepts.map(({ slug, title }) => ({ slug, title }))];
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.type = "button";
    button.textContent = filter.title;
    button.setAttribute("aria-pressed", filter.slug === state.galleryFilter ? "true" : "false");
    button.addEventListener("click", () => {
      state.galleryFilter = filter.slug;
      renderGalleryFilters();
      renderGallery();
    });
    wrap.appendChild(button);
  });
}

function renderGallery() {
  const wrap = $("#galleryGrid");
  wrap.innerHTML = "";
  const active = state.galleryFilter;
  const galleryConcepts = active === "all" ? concepts : concepts.filter((item) => item.slug === active);

  galleryConcepts.forEach((concept) => {
    concept.images.forEach((src, index) => {
      const button = document.createElement("button");
      button.className = "gallery-card";
      button.type = "button";
      button.innerHTML = `
        <img src="${src}" alt="${concept.title} asset ${index + 1}" loading="lazy" decoding="async">
        <span>${concept.title} ${index + 1}</span>
      `;
      button.addEventListener("click", () => openLightbox(src, `${concept.title} asset ${index + 1}`));
      wrap.appendChild(button);
    });
  });
}

function openLightbox(src, caption) {
  const dialog = $("#lightbox");
  $("#lightboxImage").src = src;
  $("#lightboxImage").alt = caption;
  $("#lightboxCaption").textContent = caption;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(src, "_blank", "noopener");
  }
}

function updateModel() {
  const followers = Number($("#followers").value);
  const viewRate = Number($("#viewRate").value) / 100;
  const merchRate = Number($("#merchRate").value) / 1000;
  const sponsorSlots = Number($("#sponsorSlots").value);
  const avgViews = followers * viewRate;
  const cpm = 18;
  const merchMargin = 8;
  const sponsorRevenue = (avgViews / 1000) * cpm * sponsorSlots;
  const merchRevenue = followers * merchRate * merchMargin;
  const total = sponsorRevenue + merchRevenue;

  $("#followersOut").textContent = formatCompact.format(followers);
  $("#viewsOut").textContent = `${Math.round(viewRate * 100)}%`;
  $("#merchOut").textContent = `${(merchRate * 100).toFixed(1)}%`;
  $("#sponsorOut").textContent = sponsorSlots;
  $("#avgViews").textContent = formatCompact.format(avgViews);
  $("#sponsorRevenue").textContent = formatMoney.format(sponsorRevenue);
  $("#merchRevenue").textContent = formatMoney.format(merchRevenue);
  $("#totalRevenue").textContent = formatMoney.format(total);
}

function init() {
  setTheme(state.concept);
  renderConceptButtons();
  renderFeature();
  renderGalleryFilters();
  renderGallery();
  renderEpisode();
  updateModel();

  $("#spinEpisode").addEventListener("click", renderEpisode);
  $("#closeLightbox").addEventListener("click", () => $("#lightbox").close());
  $("#prevConcept")?.addEventListener("click", () => setConceptByOffset(-1));
  $("#nextConcept")?.addEventListener("click", () => setConceptByOffset(1));
  ["followers", "viewRate", "merchRate", "sponsorSlots"].forEach((id) => {
    $(`#${id}`).addEventListener("input", updateModel);
  });
}

init();
