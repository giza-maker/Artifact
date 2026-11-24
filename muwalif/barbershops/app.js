"use strict";

const byId = (id) => document.getElementById(id);
const selectAll = (selector) => Array.from(document.querySelectorAll(selector));
const arabicNumber = new Intl.NumberFormat("ar-SA-u-nu-arab", { maximumFractionDigits: 2 });
const format = (value) => arabicNumber.format(value);
const money = (value) => format(value) + " ر.س";

function parseNumber(raw) {
  const value = raw.trim()
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace("٫", ".");
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) return NaN;
  return Number(value);
}

function setPressed(buttons, selected) {
  for (const button of buttons) button.setAttribute("aria-pressed", String(button === selected));
}

function setupDemo() {
  const buttons = selectAll("[data-queue]");
  const status = byId("demo-status");
  const messages = {
    waiting: ["سجلنا دورك مع أحمد. قدامك شخصان، والوقت تقديري. ننبّهك إذا قرب دورك.", "الدور: ينتظر · التنبيه لم يُرسل"],
    called: ["قرب دورك مع أحمد. ارجع للمحل خلال ١٠ دقائق. الوقت تقديري.", "الدور: تم النداء · رسالة التنبيه مثال يدوي ما لم يُفعّل الربط"],
    service: ["وصل الزبون وبدأت خدمة قص الشعر مع أحمد.", "الدور: في الخدمة · الحلاق: أحمد"],
    completed: ["اكتملت الخدمة وسجلها الفريق بقيمة ٥٠ ر.س.", "الدور: مكتمل · القيمة مسجلة وليست إثبات دفع آلي"],
  };
  for (const button of buttons) {
    button.addEventListener("click", () => {
      setPressed(buttons, button);
      const [message, note] = messages[button.dataset.queue];
      byId("queue-message").textContent = message;
      status.textContent = note;
    });
  }
}

function setupTrial() {
  const form = byId("trial-form");
  const status = byId("trial-status");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    status.textContent = "جارٍ إرسال الطلب…";
    const savedKey = sessionStorage.getItem("muwalif-barbershop-trial-key");
    const idempotencyKey = savedKey || crypto.randomUUID();
    sessionStorage.setItem("muwalif-barbershop-trial-key", idempotencyKey);
    const data = new FormData(form);
    const payload = {
      businessName: data.get("shopName").trim(), sector: "barbershop", contactName: data.get("contactName").trim(),
      district: data.get("district").trim(), phone: data.get("phone").trim(),
      dailyCustomers: Number(data.get("dailyCustomers")), consent: data.get("consent") === "on", idempotencyKey,
    };
    try {
      const response = await fetch("https://muwalif.ahmed-aljazayeerly.workers.dev/api/public/trial-requests", {
        method: "POST", headers: { "content-type": "application/json", "X-Muwalif-Request": "1" }, body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.data) throw new Error(result.error?.message || "تعذّر حفظ الطلب.");
      const labels = { pending: "قيد المراجعة", waitlist: "قائمة الانتظار", accepted: "مقبول", active: "مفعّل" };
      status.textContent = `حُفظ طلبك. المرجع: ${result.data.id}. الحالة: ${labels[result.data.status] || result.data.status}.`;
      form.reset();
      sessionStorage.removeItem("muwalif-barbershop-trial-key");
    } catch (error) {
      status.textContent = `${error.message || "تعذّر حفظ الطلب."} مدخلاتك محفوظة. حاول مرة أخرى.`;
    } finally { submit.disabled = false; }
  });
}

function setupFilm() {
  const launch = byId("film-start");
  const film = byId("film");
  const frame = byId("film-frame");
  const help = byId("film-help");
  const phone = window.matchMedia("(max-width: 767px), (max-width: 960px) and (hover: none) and (pointer: coarse)");
  const lengthButtons = selectAll("[data-film-length]");
  let selectedLength = "90";

  function setSources() {
    const format = phone.matches ? "portrait" : "landscape";
    film.poster = `./assets/video/${format}.webp`;
    film.src = `./assets/video/${format}-${selectedLength}.mp4?v=shop`;
    frame.dataset.format = format;
    byId("film-wide-link").href = `./assets/video/landscape-${selectedLength}.mp4?v=shop`;
    byId("film-tall-link").href = `./assets/video/portrait-${selectedLength}.mp4?v=shop`;
  }

  for (const button of lengthButtons) button.addEventListener("click", () => {
    selectedLength = button.dataset.filmLength;
    setPressed(lengthButtons, button);
    setSources();
    if (!film.hidden) film.play().catch(() => {});
  });

  launch.addEventListener("click", () => {
    setSources();
    launch.hidden = true;
    film.hidden = false;
    film.focus({ preventScroll: true });
    film.play().catch(() => {
      help.textContent = "اضغط تشغيل في المشغّل، أو افتح ملف الفيديو من الرابط أدناه.";
    });
  });
  film.addEventListener("playing", () => { help.textContent = ""; });
  film.addEventListener("error", () => {
    help.textContent = "تعذّر تشغيل الفيديو هنا. افتح ملف الفيديو من الرابط أدناه.";
  });
}

// Editable inputs and example values mirror Time-Money-Model-AR.md.
const fields = [
  { key: "days", label: "أيام التشغيل في الفترة", min: 1, max: 366, whole: true },
  { key: "bookings", label: "الحجوزات المؤهلة يوميًا", min: 0, max: 500, help: "متوسط الحجوزات المؤكدة في يوم عمل." },
  { key: "baseline", label: "الإكمال قبل التجربة ٪", min: 0, max: 100 },
  { key: "pilot", label: "نسبة الإكمال المتوقعة ٪", min: 0, max: 100 },
  { key: "spare", label: "الخانات الشاغرة فعلاً يوميًا", min: 0, max: 500, help: "خانات يستطيع الحلاق بيعها مع مراعاة الدور والراحة." },
  { key: "timeBefore", label: "دقائق المتابعة قبل التجربة يوميًا", min: 0, max: 1440 },
  { key: "timeAfter", label: "دقائق المتابعة أثناء التجربة يوميًا", min: 0, max: 1440 },
  { key: "price", label: "متوسط قيمة الخدمة (ر.س)", min: 0, max: 100000 },
  { key: "commission", label: "عمولة الحلاق ٪", min: 0, max: 100 },
  { key: "supplies", label: "مستهلكات الخدمة (ر.س)", min: 0, max: 100000 },
  { key: "payment", label: "رسوم الدفع لكل خدمة (ر.س)", min: 0, max: 100000 },
  { key: "fixed", label: "الاشتراك والتكلفة الثابتة (ر.س)", min: 0, max: 1000000 },
  { key: "messages", label: "الرسائل المدفوعة في الفترة (ر.س)", min: 0, max: 1000000 },
  { key: "setup", label: "الإعداد لمرة واحدة (ر.س)", min: 0, max: 1000000, optional: true },
  { key: "recovery", label: "عدد فترات استرداد الإعداد", min: 1, max: 120, whole: true, optional: true },
  { key: "hourly", label: "قيمة ساعة العمل (ر.س)", min: 0, max: 100000, optional: true, help: "اختياري، لتحليل الوقت فقط." },
];

const shared = { days: 26, payment: 0, fixed: 299, setup: null, recovery: null, hourly: null };
const scenarios = {
  conservative: { bookings: 8, baseline: 80, pilot: 85, spare: 1, price: 50, commission: 45, supplies: 4, messages: 52, timeBefore: 25, timeAfter: 25 },
  base: { bookings: 10, baseline: 80, pilot: 90, spare: 3, price: 60, commission: 40, supplies: 3, messages: 39, timeBefore: 25, timeAfter: 15 },
  upside: { bookings: 14, baseline: 75, pilot: 92, spare: 4, price: 75, commission: 35, supplies: 3, messages: 36.4, timeBefore: 25, timeAfter: 25 },
};

function estimate(values) {
  const missed = values.bookings * (100 - values.baseline) / 100;
  const gain = values.bookings * Math.max(0, values.pilot - values.baseline) / 100;
  const extra = Math.min(gain, missed, values.spare) * values.days;
  const unitMargin = values.price * (100 - values.commission) / 100 - values.supplies - values.payment;
  const fixed = values.fixed + values.messages + (values.recovery ? (values.setup ?? 0) / values.recovery : 0);
  const cash = Math.round((extra * unitMargin - fixed) * 100) / 100;
  const ratio = unitMargin > 0 ? fixed / unitMargin : null;
  const breakEven = ratio === null ? null : Math.ceil(Number(ratio.toFixed(9)));
  const capacity = Math.min(missed, values.spare) * values.days;
  return { extra, cash, breakEven, capacity, minutes: Math.max(0, values.timeBefore - values.timeAfter) * values.days };
}

function timeLabel(mins) {
  const rounded = Math.round(mins);
  const hours = Math.floor(rounded / 60);
  const remainder = rounded % 60;
  const parts = [];
  if (hours) parts.push(format(hours) + (hours >= 3 && hours <= 10 ? " ساعات" : " ساعة"));
  if (remainder || parts.length === 0) parts.push(format(remainder) + " دقيقة");
  return parts.join(" و");
}

function setupCalculator() {
  const form = byId("calc-form");
  const toggles = selectAll("[data-scenario]");
  const registry = fields.map((field, index) => {
    const id = "input-" + field.key;
    const wrap = document.createElement("div");
    wrap.className = field.key === "spare" ? "field wide-field" : "field";
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = field.label;
    const input = document.createElement("input");
    Object.assign(input, { id, name: field.key, dir: "ltr", type: "text", inputMode: field.whole ? "numeric" : "decimal", maxLength: 14 });
    const error = document.createElement("p");
    error.className = "field-error";
    error.id = id + "-error";
    error.hidden = true;
    wrap.append(label, input);
    const descriptions = [error.id];
    if (field.help) {
      const help = document.createElement("p");
      help.className = "field-help";
      help.id = id + "-help";
      help.textContent = field.help;
      descriptions.unshift(help.id);
      wrap.append(help);
    }
    input.setAttribute("aria-describedby", descriptions.join(" "));
    wrap.append(error);
    byId(index < 7 ? "calc-operating" : "calc-cost").append(wrap);
    return { ...field, input, error };
  });

  function update() {
    const values = {};
    let passes = true;
    let costsPass = true;
    for (const [index, field] of registry.entries()) {
      const raw = field.input.value.trim();
      const value = field.optional && !raw ? null : parseNumber(raw);
      const valid = value === null || (Number.isFinite(value) && value >= field.min && value <= field.max && (!field.whole || Number.isInteger(value)));
      values[field.key] = value;
      field.input.setAttribute("aria-invalid", String(!valid));
      field.error.hidden = valid;
      field.error.textContent = valid ? "" : "أدخل " + (field.whole ? "عددًا صحيحًا" : "رقمًا") + " من " + format(field.min) + " إلى " + format(field.max) + ".";
      if (!valid) {
        passes = false;
        if (index >= 7) costsPass = false;
      }
    }
    byId("calc-cost-details").dataset.invalid = String(!costsPass);
    byId("metrics").hidden = !passes;
    byId("calc-invalid").hidden = passes;
    if (!passes) {
      byId("result-period").textContent = "";
      byId("calc-invalid").textContent = costsPass
        ? "راجع المدخلات المعلَّمة لعرض نتيجة الفترة."
        : "راجع المدخلات المعلَّمة، ومنها حقول في تفاصيل السعر والتكاليف.";
      return;
    }

    const { extra, cash, breakEven, capacity, minutes } = estimate(values);
    byId("result-period").textContent = format(values.days) + " يوم تشغيل";
    byId("result-cash").textContent = cash < 0 ? "التكلفة أعلى من المساهمة بـ " + money(-cash) : money(cash);
    const setup = values.setup ? " · إعداد لمرة واحدة " + money(values.setup) + (values.recovery ? " موزّع على " + format(values.recovery) + " فترة" : " خارج حسبة الفترة") : "";
    byId("result-services").textContent = format(extra) + " خدمة إضافية محتملة" + setup;
    byId("result-break-even").textContent = breakEven === null ? "التعادل غير ممكن" : (breakEven === 0 ? "بدون خدمات إضافية" : format(breakEven) + " خدمة");
    byId("result-limit").textContent = breakEven === null
      ? "مساهمة الخدمة صفر أو أقل حسب المدخلات."
      : breakEven > capacity + 1e-9
        ? "التعادل يتجاوز الخانات المتاحة والحجوزات المفقودة في هذه الفترة."
        : "";
    byId("result-time").textContent = timeLabel(minutes);
    byId("result-hourly").textContent = values.hourly === null ? "" : "قيمة الوقت التقديرية " + money(minutes / 60 * values.hourly);
  }

  function applyScenario(name) {
    const values = { ...shared, ...scenarios[name] };
    for (const { key, input } of registry) {
      input.value = values[key] === null ? "" : String(values[key]);
    }
    update();
  }

  for (const button of toggles) {
    button.addEventListener("click", () => {
      setPressed(toggles, button);
      applyScenario(button.dataset.scenario);
    });
  }
  form.addEventListener("input", () => {
    setPressed(toggles, null);
    update();
  });
  form.addEventListener("submit", (event) => { event.preventDefault(); update(); });
  applyScenario("base");
}

setupDemo();
setupFilm();
setupCalculator();
setupTrial();
