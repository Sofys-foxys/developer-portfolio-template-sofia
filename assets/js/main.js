/* ==========================================================================
   MAIN — Bootstrap + Tailwind + GSAP (ScrollTrigger + TextPlugin)
   Notes:
   - Avoid XSS: never inject user input as HTML
   - Respect prefers-reduced-motion
========================================================================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

/* -------------------------------------------------------------------------- */
/* Theme toggle (dark/light) */
/* -------------------------------------------------------------------------- */
function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* -------------------------------------------------------------------------- */
/* Contact form (safe, no innerHTML) */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      return;
    }

    // Template behavior (no network). You’ll connect real backend later if you want.
    status.textContent = "Message ready to send (demo). Replace with your real submission flow.";
    form.reset();
  });
}

/* -------------------------------------------------------------------------- */
/* GSAP */
/* -------------------------------------------------------------------------- */
function initTypewriter() {
  if (prefersReducedMotion) {
    const el = document.querySelector(".typewriter");
    if (el) el.textContent = "Design is how it works.";
    return;
  }

  const text = "Design is how it works.";
  const container = document.querySelector(".typewriter");
  if (!container) return;

  gsap.to(container, {
    duration: text.length * 0.05,
    text: { value: text, delimiter: "" },
    ease: "none"
  });
}

function initScrollReveals() {
  if (prefersReducedMotion) return;

  gsap.utils.toArray(".gsap-reveal").forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

function initSectionTitleScroll() {
	if (prefersReducedMotion) return;
  
	gsap.utils.toArray(".section-title").forEach((t) => {
	  gsap.from(t, {
		y: 100,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
		  trigger: t,
		  start: "top 80%",
		  end: "top 20%",
		  toggleActions: "play none none reverse"
		}
	  });
	});
  }
  
  function initScrollTextReveal() {
	if (prefersReducedMotion) return;
  
	gsap.utils.toArray(".scroll-text").forEach((text) => {
	  gsap.from(text, {
		y: 50,
		opacity: 0,
		duration: 1,
		scrollTrigger: {
		  trigger: text,
		  start: "top 85%",
		  toggleActions: "play none none reverse"
		}
	  });
	});
  }
  
function initHeroParallax() {
  if (prefersReducedMotion) return;

  gsap.to(".hero-bg", {
    y: -120,
    ease: "none",
    scrollTrigger: {
      trigger: "#introduction",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}

function initPinnedStyleSection() {
  if (prefersReducedMotion) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#style",
      start: "top top",
      end: "+=180%",
      pin: true,
      scrub: 1
    }
  });

  tl.from(".reveal-1", { opacity: 0, y: 40, duration: 0.6 })
    .from(".reveal-2", { opacity: 0, y: 40, duration: 0.6 })
    .from(".reveal-3", { opacity: 0, y: 40, duration: 0.6 });
}

function initMagneticButtons() {
  if (prefersReducedMotion) return;

  const buttons = gsap.utils.toArray(".magnetic-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.25,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.35)"
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Motion accessibility: global fallback */
/* -------------------------------------------------------------------------- */
function initReducedMotionCSSHelper() {
  if (!prefersReducedMotion) return;
  document.documentElement.classList.add("reduced-motion");
}

/* -------------------------------------------------------------------------- */
/* Init */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initThemeToggle();
  initContactForm();
  initReducedMotionCSSHelper();

  initTypewriter();
  initScrollReveals();
  initHeroParallax();
  initPinnedStyleSection();
  initMagneticButtons();

  initSectionTitleScroll();
  initScrollTextReveal();


  // Bootstrap scrollspy refresh (safe)
  if (window.bootstrap?.ScrollSpy) {
    bootstrap.ScrollSpy.getOrCreateInstance(document.body);
  }
});
