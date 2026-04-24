const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

function applyImageFallback(img) {
  if (!img || img.dataset.fallbackApplied === "1") return;
  const isHero = !!img.closest(".hero-photo");
  const fallbackSrc = isHero ? "assets/img/hero-fallback.svg" : "assets/img/card-fallback.svg";
  const currentSrc = img.getAttribute("src") || "";
  if (currentSrc.includes("hero-fallback.svg") || currentSrc.includes("card-fallback.svg")) return;

  img.dataset.fallbackApplied = "1";
  img.src = fallbackSrc;
  if (!img.alt || !img.alt.trim()) {
    img.alt = "Image fallback";
  }
}

function wireImageFallbacks() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("error", () => applyImageFallback(img), { once: true });
    if (img.complete && img.naturalWidth === 0) {
      applyImageFallback(img);
    }
  });
}

function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(slider.querySelectorAll("[data-hero-dot]"));
  const prev = slider.querySelector("[data-hero-prev]");
  const next = slider.querySelector("[data-hero-next]");
  if (slides.length <= 1) return;

  let current = 0;
  let timer = null;
  const intervalMs = 5200;

  function setActive(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("is-active", idx === current);
    });
    dots.forEach((dot, idx) => {
      const active = idx === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => {
      setActive(current + 1);
    }, intervalMs);
  }

  prev?.addEventListener("click", () => {
    setActive(current - 1);
    startAuto();
  });

  next?.addEventListener("click", () => {
    setActive(current + 1);
    startAuto();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      setActive(idx);
      startAuto();
    });
  });

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  setActive(0);
  startAuto();
}

function initSupportCardHover() {
  const cards = document.querySelectorAll(".support-grid .support-item");
  if (!cards.length) return;

  cards.forEach((card) => {
    function updatePointerPosition(event) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--hover-x", `${x}px`);
      card.style.setProperty("--hover-y", `${y}px`);
    }

    card.addEventListener("pointerenter", updatePointerPosition);
    card.addEventListener("pointermove", updatePointerPosition);
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--hover-x");
      card.style.removeProperty("--hover-y");
    });
  });
}

function initPage() {
  wireImageFallbacks();
  initHeroSlider();
  initSupportCardHover();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
