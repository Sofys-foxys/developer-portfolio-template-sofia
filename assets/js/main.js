/* ==========================================================================
   MAIN — Bootstrap + Tailwind + GSAP (ScrollTrigger + TextPlugin)
   Notes:
   - Avoid XSS: never inject user input as HTML
   - Respect prefers-reduced-motion
========================================================================== */

const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)"
  ).matches;
  
  function setYear() {
	const el = document.getElementById("year");
	if (el) el.textContent = String(new Date().getFullYear());
  }
  
  /* -------------------------------------------------------------------------- */
  /* Commit 21/22 — Apply ImageKit map (safe attribute assignment) */
  /* -------------------------------------------------------------------------- */
  function applyImageMap() {
	const map = window.PORTFOLIO_IMAGES;
	if (!map) return;
  
	const refreshAfterLoad = (img) => {
	  if (!img) return;
	  // When images load, ScrollTrigger may need a refresh (layout changes)
	  img.addEventListener(
		"load",
		() => {
		  if (window.ScrollTrigger) {
			// tiny delay to avoid multiple sync refreshes
			requestAnimationFrame(() => ScrollTrigger.refresh());
		  }
		},
		{ once: true }
	  );
	};
  
	// HERO
	const heroImg = document.getElementById("heroImage");
	if (heroImg && map.hero?.src) {
	  heroImg.src = map.hero.src;
	  heroImg.alt = map.hero.alt || "Hero image";
	  refreshAfterLoad(heroImg);
	}
  
	// WORKS (3)
	const works = Array.isArray(map.works) ? map.works : [];
	["workImage1", "workImage2", "workImage3"].forEach((id, index) => {
	  const img = document.getElementById(id);
	  const item = works[index];
	  if (img && item?.src) {
		img.src = item.src;
		img.alt = item.alt || `Project preview image ${index + 1}`;
		refreshAfterLoad(img);
	  }
	});
  
	// CLIENTS (3)
	const clients = Array.isArray(map.clients) ? map.clients : [];
	["clientImage1", "clientImage2", "clientImage3"].forEach((id, index) => {
	  const img = document.getElementById(id);
	  const item = clients[index];
	  if (img && item?.src) {
		img.src = item.src;
		img.alt = item.alt || `Client banner image ${index + 1}`;
		refreshAfterLoad(img);
	  }
	});
  
	// CONTACT (1)
	const contactImg = document.getElementById("contactImage");
	if (contactImg && map.contact?.src) {
	  contactImg.src = map.contact.src;
	  contactImg.alt = map.contact.alt || "Contact section image";
	  refreshAfterLoad(contactImg);
	}
  
	// FOOTER (1)
	const footerImg = document.getElementById("footerImage");
	if (footerImg && map.footer?.src) {
	  footerImg.src = map.footer.src;
	  footerImg.alt = map.footer.alt || "Footer mark image";
	  refreshAfterLoad(footerImg);
	}
  }
  
  /* -------------------------------------------------------------------------- */
  /* Theme toggle (dark/light) + label update */
  /* -------------------------------------------------------------------------- */
  function initThemeToggle() {
	const root = document.documentElement;
	const btn = document.getElementById("themeToggle");
  
	function applyTheme(theme) {
	  root.setAttribute("data-theme", theme);
	  localStorage.setItem("theme", theme);
  
	  if (btn) {
		btn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
		btn.setAttribute(
		  "aria-label",
		  theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
		);
	  }
	}
  
	const saved = localStorage.getItem("theme");
	applyTheme(saved === "light" ? "light" : "dark");
  
	if (!btn) return;
	btn.addEventListener("click", () => {
	  const current = root.getAttribute("data-theme") || "dark";
	  applyTheme(current === "dark" ? "light" : "dark");
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
  
	  status.textContent =
		"Message ready to send (demo). Replace with your real submission flow.";
	  form.reset();
	});
  }
  
  /* -------------------------------------------------------------------------- */
  /* Motion accessibility: global helper */
  /* -------------------------------------------------------------------------- */
  function initReducedMotionCSSHelper() {
	if (!prefersReducedMotion) return;
	document.documentElement.classList.add("reduced-motion");
  }
  
  /* -------------------------------------------------------------------------- */
  /* GSAP */
  /* -------------------------------------------------------------------------- */
  function initTypewriter() {
	const el = document.querySelector(".typewriter");
  
	if (prefersReducedMotion) {
	  if (el) el.textContent = "Design is how it works.";
	  return;
	}
  
	if (!window.gsap || !el) return;
  
	const text = "Design is how it works.";
  
	gsap.to(el, {
	  duration: text.length * 0.05,
	  text: { value: text, delimiter: "" },
	  ease: "none",
	});
  }
  
  function initScrollReveals() {
	if (prefersReducedMotion || !window.gsap) return;
  
	gsap.utils.toArray(".gsap-reveal").forEach((el) => {
	  gsap.from(el, {
		y: 24,
		opacity: 0,
		duration: 0.7,
		ease: "power2.out",
		scrollTrigger: {
		  trigger: el,
		  start: "top 85%",
		  toggleActions: "play none none reverse",
		},
	  });
	});
  }
  
  function initSectionTitleScroll() {
	if (prefersReducedMotion || !window.gsap) return;
  
	gsap.utils.toArray(".section-title").forEach((t) => {
	  gsap.from(t, {
		y: 60,
		opacity: 0,
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
		  trigger: t,
		  start: "top 85%",
		  toggleActions: "play none none reverse",
		},
	  });
	});
  }
  
  function initScrollTextReveal() {
	if (prefersReducedMotion || !window.gsap) return;
  
	gsap.utils.toArray(".scroll-text").forEach((text) => {
	  gsap.from(text, {
		y: 24,
		opacity: 0,
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
		  trigger: text,
		  start: "top 85%",
		  toggleActions: "play none none reverse",
		},
	  });
	});
  }
  
  function initHeroParallax() {
	if (prefersReducedMotion || !window.gsap) return;
  
	gsap.to(".hero-bg", {
	  y: -120,
	  ease: "none",
	  scrollTrigger: {
		trigger: "#introduction",
		start: "top top",
		end: "bottom top",
		scrub: true,
	  },
	});
  }
  
  function initHeroReplay() {
	if (prefersReducedMotion || !window.gsap) return;
  
	function playHero() {
	  const tl = gsap.timeline();
	  tl.fromTo(
		".hero-kicker",
		{ y: 16, opacity: 0 },
		{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
	  )
		.fromTo(
		  ".hero-title",
		  { y: 24, opacity: 0 },
		  { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
		  "-=0.2"
		)
		.fromTo(
		  ".hero-cta",
		  { y: 16, opacity: 0 },
		  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
		  "-=0.2"
		);
	  return tl;
	}
  
	ScrollTrigger.create({
	  trigger: "#introduction",
	  start: "top 70%",
	  end: "bottom top",
	  onEnter: () => playHero(),
	  onEnterBack: () => playHero(),
	});
  }
  
  /* -------------------------------------------------------------------------- */
  /* Fix “collapse” / flow interruption in #style pin
	 - Only pin on desktop
	 - End length is proportional to content height
	 - anticipatePin + invalidateOnRefresh prevents jumps
	 - pinSpacing keeps next section from overlapping
  -------------------------------------------------------------------------- */
  function initPinnedStyleSection() {
	if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) return;
  
	const style = document.querySelector("#style");
	if (!style) return;
  
	// Desktop only
	if (window.matchMedia("(max-width: 991px)").matches) return;
  
	const cards = style.querySelectorAll(".style-card");
	if (!cards || cards.length < 2) return;
  
	const content = style.querySelector(".section-content");
	const contentHeight = content ? content.scrollHeight : 600;
  
	// Dynamic pin distance: not too short (jump) and not too long (dead space)
	const extra = Math.min(900, Math.max(520, Math.round(contentHeight * 0.9)));
  
	const tl = gsap.timeline({
	  scrollTrigger: {
		trigger: style,
		start: "top top",
		end: () => `+=${extra}`,
		pin: true,
		pinSpacing: true,
		scrub: 0.8,
		anticipatePin: 1,
		invalidateOnRefresh: true,
	  },
	});
  
	tl.from(".reveal-1", { opacity: 0, y: 30, duration: 0.45, ease: "power2.out" })
	  .from(".reveal-2", { opacity: 0, y: 30, duration: 0.45, ease: "power2.out" })
	  .from(".reveal-3", { opacity: 0, y: 30, duration: 0.45, ease: "power2.out" });
  }
  
  function initMagneticButtons() {
	if (prefersReducedMotion || !window.gsap) return;
  
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
		  ease: "power2.out",
		});
	  });
  
	  btn.addEventListener("mouseleave", () => {
		gsap.to(btn, {
		  x: 0,
		  y: 0,
		  duration: 0.5,
		  ease: "elastic.out(1, 0.35)",
		});
	  });
	});
  }
  
  /* -------------------------------------------------------------------------- */
  /* Init */
  /* -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
	if (window.gsap && window.ScrollTrigger) {
	  gsap.registerPlugin(ScrollTrigger);
	}
  
	setYear();
	applyImageMap(); // <- ImageKit mapping
  
	initThemeToggle();
	initContactForm();
	initReducedMotionCSSHelper();
  
	initTypewriter();
	initHeroReplay();
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
  
	// One extra refresh after layout settles (helps pinned sections)
	if (window.ScrollTrigger) {
	  requestAnimationFrame(() => ScrollTrigger.refresh());
	}
  });
  