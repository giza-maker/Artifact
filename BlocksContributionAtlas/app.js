const state = {
  data: null,
  activeFeatureId: null,
  featureDomain: "all",
  featureSearch: "",
  commitSearch: "",
  commitFeature: "all",
  commitCategory: "all",
  sortNewest: true,
  commitLimit: 80,
};

const fmt = new Intl.NumberFormat("en-US");
const shortFmt = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
const featureById = new Map();
const tooltip = document.createElement("div");
tooltip.className = "chart-tooltip";
document.body.appendChild(tooltip);

function $(id) {
  return document.getElementById(id);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function daysBetween(start, end) {
  if (!start || !end) return 0;
  const first = new Date(`${start}T00:00:00Z`);
  const last = new Date(`${end}T00:00:00Z`);
  return Math.max(1, Math.round((last - first) / 86400000) + 1);
}

function pct(value, total) {
  if (!total) return 0;
  return Math.max(0, Math.min(100, (value / total) * 100));
}

function showTooltip(event, html) {
  tooltip.innerHTML = html;
  tooltip.style.display = "block";
  const x = Math.min(window.innerWidth - 280, event.clientX + 14);
  const y = Math.min(window.innerHeight - 160, event.clientY + 14);
  tooltip.style.left = `${Math.max(12, x)}px`;
  tooltip.style.top = `${Math.max(12, y)}px`;
}

function hideTooltip() {
  tooltip.style.display = "none";
}

async function loadData() {
  if (window.__CONTRIBUTIONS_DATA__) return window.__CONTRIBUTIONS_DATA__;
  const response = await fetch("./data/contributions.json");
  if (!response.ok) throw new Error(`Could not load contribution data: ${response.status}`);
  return response.json();
}

function setupReveal() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  nodes.forEach((node) => observer.observe(node));
}

function renderHero() {
  const { meta, totals, features } = state.data;
  const topFeatures = features.filter((feature) => feature.rank <= 10).length;
  const duration = daysBetween(meta.firstDate, meta.lastDate);
  $("heroMetrics").innerHTML = [
    ["Commits", fmt.format(totals.commits), `${meta.firstDate} to ${meta.lastDate}`],
    ["Product systems", fmt.format(topFeatures), "Critical and high-impact feature groups"],
    ["Code movement", shortFmt.format(totals.insertions + totals.deletions), `${shortFmt.format(totals.insertions)} added, ${shortFmt.format(totals.deletions)} removed`],
    ["Build window", `${duration} days`, `${fmt.format(meta.branchCoverage.refsSeen)} refs scanned`],
  ].map(([label, value, note]) => `
    <div class="metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(note)}</span>
    </div>
  `).join("");
}

function renderMilestones() {
  $("milestoneRail").innerHTML = state.data.milestones.map((milestone, index) => `
    <article class="milestone">
      <time>${escapeHtml(milestone.startDate)} to ${escapeHtml(milestone.endDate)}</time>
      <h3>${index + 1}. ${escapeHtml(milestone.title)}</h3>
      <p>${escapeHtml(milestone.summary)}</p>
    </article>
  `).join("");
}

function renderTimeline() {
  const daily = state.data.charts.daily;
  const width = 1160;
  const height = 390;
  const pad = { left: 42, right: 24, top: 24, bottom: 44 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const maxCommits = Math.max(...daily.map((day) => day.commits), 1);
  const maxCumulative = Math.max(...daily.map((day) => day.cumulative), 1);
  const step = innerW / Math.max(daily.length - 1, 1);
  const barW = Math.max(8, Math.min(28, step * 0.68));
  const points = daily.map((day, index) => {
    const x = pad.left + index * step;
    const y = pad.top + innerH - (day.cumulative / maxCumulative) * innerH;
    return `${x},${y}`;
  }).join(" ");

  const bars = daily.map((day, index) => {
    const x = pad.left + index * step - barW / 2;
    const h = (day.commits / maxCommits) * (innerH * 0.55);
    const y = pad.top + innerH - h;
    const label = `${day.date}: ${day.commits} commits, ${shortFmt.format(day.insertions)} insertions`;
    return `<rect class="timeline-bar" x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" data-tip="${escapeHtml(label)}"></rect>`;
  }).join("");

  const markers = daily.filter((_, index) => index === 0 || index === daily.length - 1 || index % 5 === 0)
    .map((day, index, filtered) => {
      const sourceIndex = daily.findIndex((item) => item.date === day.date);
      const x = pad.left + sourceIndex * step;
      const labelY = height - 16;
      const anchor = index === 0 ? "start" : index === filtered.length - 1 ? "end" : "middle";
      return `<text class="axis-label" x="${x}" y="${labelY}" text-anchor="${anchor}">${escapeHtml(day.date.slice(5))}</text>`;
    }).join("");

  $("timelineChart").innerHTML = `
    <svg class="timeline-svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <line x1="${pad.left}" y1="${pad.top + innerH}" x2="${width - pad.right}" y2="${pad.top + innerH}" stroke="oklch(38% 0.035 236)" />
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + innerH}" stroke="oklch(30% 0.03 236)" />
      ${bars}
      <polyline points="${points}" fill="none" stroke="oklch(77% 0.145 75)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${daily.map((day, index) => {
        if (index !== 0 && index !== daily.length - 1 && index % 7 !== 0) return "";
        const x = pad.left + index * step;
        const y = pad.top + innerH - (day.cumulative / maxCumulative) * innerH;
        return `<circle class="timeline-point" cx="${x}" cy="${y}" r="5" fill="oklch(77% 0.145 75)" data-tip="${escapeHtml(`${day.date}: ${day.cumulative} cumulative commits`)}"></circle>`;
      }).join("")}
      ${markers}
      <text class="axis-label" x="${pad.left}" y="16">cumulative commits</text>
      <text class="axis-label" x="${width - pad.right}" y="${pad.top + innerH - 8}" text-anchor="end">daily commits</text>
    </svg>
  `;

  $("timelineChart").querySelectorAll("[data-tip]").forEach((node) => {
    node.addEventListener("mousemove", (event) => showTooltip(event, escapeHtml(node.dataset.tip)));
    node.addEventListener("mouseleave", hideTooltip);
  });
}

function populateFilters() {
  const domains = ["all", ...new Set(state.data.features.map((feature) => feature.domain))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b);
  });
  $("domainFilter").innerHTML = domains.map((domain) => `
    <option value="${escapeHtml(domain)}">${domain === "all" ? "All domains" : escapeHtml(domain)}</option>
  `).join("");

  $("commitFeatureFilter").innerHTML = [
    `<option value="all">All features</option>`,
    ...state.data.features.map((feature) => `<option value="${feature.id}">${escapeHtml(feature.title)}</option>`),
  ].join("");

  const categories = ["all", ...new Set(state.data.commits.map((commit) => commit.category))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b);
  });
  $("commitCategoryFilter").innerHTML = categories.map((category) => `
    <option value="${escapeHtml(category)}">${category === "all" ? "All categories" : escapeHtml(category)}</option>
  `).join("");
}

function filteredFeatures() {
  const needle = state.featureSearch.trim().toLowerCase();
  return state.data.features.filter((feature) => {
    const matchesDomain = state.featureDomain === "all" || feature.domain === state.featureDomain;
    const text = `${feature.title} ${feature.domain} ${feature.summary} ${feature.before} ${feature.after}`.toLowerCase();
    return matchesDomain && (!needle || text.includes(needle));
  });
}

function renderFeatureAtlas() {
  const features = filteredFeatures();
  const activeExists = features.some((feature) => feature.id === state.activeFeatureId);
  if (!state.activeFeatureId || !activeExists) state.activeFeatureId = features[0]?.id ?? state.data.features[0]?.id;

  $("featureAtlas").innerHTML = features.map((feature) => {
    const selected = feature.id === state.activeFeatureId;
    return `
      <button class="feature-card" type="button" data-feature-id="${feature.id}" aria-selected="${selected ? "true" : "false"}">
        <span class="feature-topline">
          <span class="rank-chip">#${feature.rank}</span>
          <span class="importance-chip">${escapeHtml(feature.importance)}</span>
        </span>
        <span class="domain-chip">${escapeHtml(feature.domain)}</span>
        <h3>${escapeHtml(feature.title)}</h3>
        <p>${escapeHtml(feature.summary)}</p>
        <span class="feature-stats">
          <span><strong>${fmt.format(feature.stats.commitCount)}</strong><small>commits</small></span>
          <span><strong>${shortFmt.format(feature.stats.insertions)}</strong><small>added</small></span>
          <span><strong>${shortFmt.format(feature.stats.filesChanged)}</strong><small>files</small></span>
        </span>
      </button>
    `;
  }).join("") || `<p class="empty-state">No features match that filter.</p>`;

  $("featureAtlas").querySelectorAll("[data-feature-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFeatureId = button.dataset.featureId;
      renderFeatureAtlas();
      renderFeatureDetail();
      renderMatrix();
    });
  });
  renderFeatureDetail();
}

function renderFeatureDetail() {
  const feature = featureById.get(state.activeFeatureId) ?? state.data.features[0];
  if (!feature) return;
  $("featureDetail").innerHTML = `
    <span class="feature-topline">
      <span class="rank-chip">Rank ${feature.rank}</span>
      <span class="importance-chip">${escapeHtml(feature.importance)}</span>
    </span>
    <h3>${escapeHtml(feature.title)}</h3>
    <p>${escapeHtml(feature.summary)}</p>
    <div class="detail-stat-grid">
      <div class="detail-stat"><strong>${fmt.format(feature.stats.commitCount)}</strong><span>commits</span></div>
      <div class="detail-stat"><strong>${shortFmt.format(feature.stats.insertions + feature.stats.deletions)}</strong><span>code movement</span></div>
      <div class="detail-stat"><strong>${shortFmt.format(feature.stats.filesChanged)}</strong><span>file touches</span></div>
      <div class="detail-stat"><strong>${feature.stats.firstDate ?? "n/a"}</strong><span>first signal</span></div>
    </div>
    <div class="before-after">
      <div><strong>Before</strong><p>${escapeHtml(feature.before)}</p></div>
      <div><strong>After</strong><p>${escapeHtml(feature.after)}</p></div>
    </div>
    <h4>Representative commits</h4>
    <ul class="sample-list">
      ${(feature.stats.sampleCommits.length ? feature.stats.sampleCommits : state.data.commits.filter((commit) => commit.featureId === feature.id).slice(0, 5))
        .map((commit) => `
          <li>
            <code>${escapeHtml(commit.shortSha)}</code>
            <strong>${escapeHtml(commit.date)}</strong>
            <div>${escapeHtml(commit.subject)}</div>
          </li>
        `).join("")}
    </ul>
  `;
}

function renderBarChart(targetId, rows, opts = {}) {
  const limit = opts.limit ?? 10;
  const total = opts.total ?? Math.max(...rows.map((row) => row.count), 1);
  $(targetId).innerHTML = rows.slice(0, limit).map((row) => `
    <div class="bar-row">
      <span>${escapeHtml(row.name)}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${pct(row.count, total)}%"></span></span>
      <strong>${fmt.format(row.count)}</strong>
    </div>
  `).join("");
}

function renderAnalysis() {
  $("categoryTotal").textContent = `${fmt.format(state.data.totals.commits)} commits`;
  renderBarChart("categoryChart", state.data.charts.categories, {
    total: state.data.totals.commits,
    limit: 12,
  });

  const dirMax = Math.max(...state.data.charts.directories.map((row) => row.count), 1);
  renderBarChart("directoryChart", state.data.charts.directories, { total: dirMax, limit: 12 });

  const refs = state.data.charts.refs;
  $("refSummary").textContent = `${fmt.format(state.data.meta.branchCoverage.refsSeen)} refs`;
  renderBarChart("refChart", refs, {
    total: Math.max(...refs.map((row) => row.count), 1),
    limit: 10,
  });

  renderMatrix();
}

function renderMatrix() {
  const features = state.data.features.filter((feature) => feature.id !== "miscellaneous");
  const width = 660;
  const height = 360;
  const pad = { left: 48, right: 24, top: 24, bottom: 46 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const maxCommits = Math.max(...features.map((feature) => feature.stats.commitCount), 1);
  const minValue = Math.min(...features.map((feature) => feature.value));
  const maxValue = Math.max(...features.map((feature) => feature.value));
  const range = Math.max(maxValue - minValue, 1);
  const active = state.activeFeatureId;

  const dots = features.map((feature) => {
    const x = pad.left + ((feature.value - minValue) / range) * innerW;
    const y = pad.top + innerH - (feature.stats.commitCount / maxCommits) * innerH;
    const r = 5 + Math.min(10, Math.sqrt(feature.stats.filesChanged) / 6);
    const selected = feature.id === active;
    return `
      <g>
        <circle
          class="matrix-dot"
          tabindex="0"
          data-feature-id="${feature.id}"
          data-tip="${escapeHtml(`${feature.title}: ${feature.stats.commitCount} commits, value ${feature.value}`)}"
          cx="${x}"
          cy="${y}"
          r="${selected ? r + 3 : r}"
          fill="${selected ? "oklch(77% 0.145 75)" : "oklch(75% 0.13 158)"}"
          opacity="${selected ? "1" : "0.72"}"
        ></circle>
        ${feature.rank <= 8 ? `<text class="axis-label" x="${x + 10}" y="${y + 4}">${escapeHtml(feature.rank)}</text>` : ""}
      </g>
    `;
  }).join("");

  $("matrixChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <line x1="${pad.left}" y1="${pad.top + innerH}" x2="${width - pad.right}" y2="${pad.top + innerH}" stroke="oklch(38% 0.035 236)" />
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + innerH}" stroke="oklch(38% 0.035 236)" />
      <text class="axis-label" x="${pad.left}" y="${height - 12}">lower value</text>
      <text class="axis-label" x="${width - pad.right}" y="${height - 12}" text-anchor="end">higher value</text>
      <text class="axis-label" x="${pad.left}" y="16">more commits</text>
      ${dots}
    </svg>
  `;

  $("matrixChart").querySelectorAll("[data-feature-id]").forEach((dot) => {
    dot.addEventListener("click", () => selectFeature(dot.dataset.featureId));
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectFeature(dot.dataset.featureId);
      }
    });
    dot.addEventListener("mousemove", (event) => showTooltip(event, escapeHtml(dot.dataset.tip)));
    dot.addEventListener("mouseleave", hideTooltip);
  });
}

function selectFeature(featureId) {
  state.activeFeatureId = featureId;
  renderFeatureAtlas();
  renderFeatureDetail();
  renderMatrix();
}

function filteredCommits() {
  const needle = state.commitSearch.trim().toLowerCase();
  return state.data.commits
    .filter((commit) => {
      const feature = featureById.get(commit.featureId);
      const text = `${commit.date} ${commit.shortSha} ${commit.subject} ${commit.category} ${feature?.title ?? ""}`.toLowerCase();
      const matchesSearch = !needle || text.includes(needle);
      const matchesFeature = state.commitFeature === "all" || commit.featureId === state.commitFeature;
      const matchesCategory = state.commitCategory === "all" || commit.category === state.commitCategory;
      return matchesSearch && matchesFeature && matchesCategory;
    })
    .sort((a, b) => state.sortNewest ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date));
}

function renderCommitTable() {
  const commits = filteredCommits();
  const visible = commits.slice(0, state.commitLimit);
  $("commitTable").innerHTML = visible.map((commit) => {
    const feature = featureById.get(commit.featureId);
    return `
      <tr>
        <td>${escapeHtml(commit.date)}</td>
        <td><code>${escapeHtml(commit.shortSha)}</code></td>
        <td><strong>${escapeHtml(feature?.title ?? "Supporting work")}</strong></td>
        <td>${escapeHtml(commit.category)}</td>
        <td>${escapeHtml(commit.subject)}</td>
        <td class="commit-impact">+${shortFmt.format(commit.stats.insertions)} / -${shortFmt.format(commit.stats.deletions)}<br>${fmt.format(commit.stats.filesChanged)} files</td>
      </tr>
    `;
  }).join("");
  $("commitCount").textContent = `${fmt.format(visible.length)} of ${fmt.format(commits.length)} matching commits shown, ${fmt.format(state.data.commits.length)} total in the dataset`;
  $("loadMoreCommits").hidden = visible.length >= commits.length;
}

function setupInteractions() {
  $("domainFilter").addEventListener("change", (event) => {
    state.featureDomain = event.target.value;
    renderFeatureAtlas();
  });
  $("featureSearch").addEventListener("input", (event) => {
    state.featureSearch = event.target.value;
    renderFeatureAtlas();
  });
  $("commitSearch").addEventListener("input", (event) => {
    state.commitSearch = event.target.value;
    state.commitLimit = 80;
    renderCommitTable();
  });
  $("commitFeatureFilter").addEventListener("change", (event) => {
    state.commitFeature = event.target.value;
    state.commitLimit = 80;
    renderCommitTable();
  });
  $("commitCategoryFilter").addEventListener("change", (event) => {
    state.commitCategory = event.target.value;
    state.commitLimit = 80;
    renderCommitTable();
  });
  $("sortCommits").addEventListener("click", () => {
    state.sortNewest = !state.sortNewest;
    $("sortCommits").textContent = state.sortNewest ? "Newest first" : "Oldest first";
    renderCommitTable();
  });
  $("loadMoreCommits").addEventListener("click", () => {
    state.commitLimit += 80;
    renderCommitTable();
  });
}

function setupConstellation() {
  const canvas = $("constellation");
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const source = state.data.features
    .filter((feature) => feature.id !== "miscellaneous")
    .slice(0, 18);
  const nodes = source.map((feature, index) => ({
    feature,
    seed: index * 17.13,
    x: 0,
    y: 0,
    vx: (Math.sin(index * 3.1) || 0.2) * 0.13,
    vy: (Math.cos(index * 2.7) || 0.2) * 0.11,
  }));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes.forEach((node, index) => {
      node.x = ((index * 193) % Math.max(window.innerWidth, 1)) + 20;
      node.y = 90 + ((index * 97) % Math.max(window.innerHeight - 160, 1));
    });
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 210) continue;
        ctx.strokeStyle = `oklch(77% 0.145 75 / ${Math.max(0.04, 0.18 - distance / 1400)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    for (const node of nodes) {
      const radius = 2.5 + Math.min(7, Math.sqrt(node.feature.stats.commitCount));
      ctx.fillStyle = node.feature.rank <= 6 ? "oklch(77% 0.145 75 / 0.82)" : "oklch(75% 0.13 158 / 0.58)";
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (!prefersReducedMotion) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20 || node.x > window.innerWidth + 20) node.vx *= -1;
        if (node.y < 60 || node.y > window.innerHeight + 20) node.vy *= -1;
      }
    }

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

function renderAll() {
  for (const feature of state.data.features) featureById.set(feature.id, feature);
  state.activeFeatureId = state.data.features[0]?.id ?? null;
  renderHero();
  renderMilestones();
  renderTimeline();
  populateFilters();
  renderFeatureAtlas();
  renderAnalysis();
  renderCommitTable();
  setupInteractions();
  setupReveal();
  setupConstellation();
}

loadData()
  .then((data) => {
    state.data = data;
    renderAll();
  })
  .catch((error) => {
    console.error(error);
    $("heroMetrics").innerHTML = `
      <div class="loading-line">
        Could not load contribution data. Run <code>node ../../scripts/generate-contributions-site-data.mjs</code>
        from this site or serve the folder with a local web server.
      </div>
    `;
  });
