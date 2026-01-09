# Sofía — Creative Developer Portfolio Template

**Live:** <https://sofys-foxys.github.io/developer-portfolio-template-sofia/>

A modern, responsive **portfolio template for creative developers**, focused on **motion, UI systems, and neon visual identity**.  
Built with semantic HTML, modern CSS, and GSAP animations, this template is designed to be **easy to customize**, **accessible**, and **deployment-ready** without any build step.

---

## ✨ What is this project?

This project is a **single-page portfolio template** intended for:
- Creative developers
- Frontend designers
- Motion-focused UI engineers
- Students building a professional portfolio base

It emphasizes:
- Strong visual hierarchy
- Motion with purpose
- Clean, readable code
- Progressive enhancement
- Academic best practices (semantics, accessibility, documentation)

---

## 🚀 Live Features

- ✅ Fully responsive (mobile → desktop)
- 🌙 Dark / ☀️ Light mode toggle
- 🎞 Scroll-driven animations (GSAP + ScrollTrigger)
- ✍️ Typewriter hero text
- 🖼 ImageKit CDN integration for optimized images
- ♿ Accessibility foundations (reduced motion, alt text, keyboard navigation)
- 🔗 Custom 404 page
- 📦 No build tools required (pure CDN setup)

---

## 🛠 Tech Stack

- **HTML5**
  - Semantic structure (`header`, `main`, `section`, `article`, `footer`)
- **CSS3**
  - CSS Custom Properties (design tokens)
  - Grid & Flexbox
  - Fluid typography using `clamp()`
- **Bootstrap 5**
  - Layout utilities
  - Responsive grid
  - Components (custom-styled)
- **GSAP**
  - ScrollTrigger
  - TextPlugin
- **Vanilla JavaScript**
- **ImageKit**
  - Image CDN and optimization
- **Google Fonts**

All dependencies are loaded via CDN.  
No Node.js, no bundlers, no build step.

---

## 📁 Project Structure

```txt
portfolio-template/
├── index.html          # Main page
├── 404.html            # Custom error page
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   ├── plan1.md        # AI planning documentation
│   ├── plan2.md
│   └── plan3.md
├── assets/
│   ├── css/
│   │   └── index.css   # All styles (organized by sections)
│   ├── js/
│   │   ├── main.js     # Animations, interactions
│   │   └── images.js  # Centralized image map (ImageKit)



🖼 Image Management — ImageKit

This template uses ImageKit as a CDN to manage all images efficiently and in a centralized way.

How images work

All images are defined in one single file:

assets/js/images.js


Example configuration:

const IMAGEKIT_URL = "https://ik.imagekit.io/your_imagekit_id";

window.PORTFOLIO_IMAGES = {
  hero: {
    src: `${IMAGEKIT_URL}/portfolio/hero.jpg`,
    alt: "Hero portrait image"
  }
};


Important principles:

HTML files never contain real image URLs

JavaScript safely injects src and alt attributes at runtime

This keeps markup clean and makes the template easier to reuse

Recommended ImageKit folder structure
portfolio/
├── hero.jpg
├── work-1.jpg
├── work-2.jpg
├── work-3.jpg
├── style-1.jpg (optional)
├── clients/
│   ├── client-1.jpg
│   ├── client-2.jpg
│   └── client-3.jpg
└── footer.jpg


You do not need to upload all images.
Placeholders are fully supported.

Changing or adding images

Upload the image to ImageKit

Copy its path

Update assets/js/images.js

Done — no HTML changes needed

Image sizing guidelines
Section	Recommended Ratio
Hero	4:5 or portrait
Works	4:3
Clients	16:9
Contact	4:3 or 1:1
Footer	Square (1:1)

ImageKit automatically optimizes image format, size, and quality.

🎨 Color System

This template uses CSS Custom Properties (design tokens) for consistent theming.

Where colors live
assets/css/index.css

:root {
  --bg: #0b0f0d;
  --bg-2: #101513;
  --text: #f5f7f6;
  --muted: #9aa3a0;
  --border: rgba(255, 255, 255, 0.12);
  --neon: #39ff14;
  --neon-2: #2edb10;
}

Dark & Light Mode

Dark and light themes share the same token names

Light mode overrides are scoped using:

[data-theme="light"] {
  /* overrides here */
}


This approach ensures:

No duplicated styles

Easy theme expansion

Clean and maintainable architecture

Accessibility (Colors)

Body text contrast meets WCAG AA

Neon color is used only for accents

Muted text is never used for critical information

✍️ Typography System

The typography system is fluid, responsive, and scalable.

Fonts used

Bebas Neue → Display / Hero

Bowlby One SC → Accent headings

Inter → Body text

The template uses a maximum of three font families, following best practices.

Fluid typography with clamp()

Defined using CSS variables:

--step-0: clamp(1rem, 2.5vw, 1.125rem);
--step-1: clamp(1.25rem, 3vw, 1.5rem);
--step-2: clamp(1.75rem, 4vw, 2.25rem);
--step-3: clamp(2.25rem, 5vw, 3rem);
--step-4: clamp(3rem, 6vw, 4.5rem);


Benefits:

Smooth scaling across breakpoints

No media-query typography hacks

Works seamlessly from mobile to large screens

Heading hierarchy

One <h1> → Hero section

Section titles → <h2>

Card titles → <h3>

This ensures semantic clarity, accessibility, and proper document structure.

🧱 Card System
Base card structure

Cards follow a consistent, reusable pattern:

<div class="card card-neon">
  <h3>Title</h3>
  <p>Description</p>
</div>


This pattern is reused across:

Experience

Works

Style

Clients

Contact

Adding more cards (example: Works)

Duplicate one column block:

<div class="col-md-4">
  <article class="card card-neon project-card">
    ...
  </article>
</div>


Add a new image entry in assets/js/images.js

Update the image ID (workImage4, etc.)

Done

The layout automatically adapts using Bootstrap Grid.

Adding cards to other sections

Experience / Style
Duplicate .style-card or .card-neon

Clients
Duplicate .client-tile

No JavaScript changes are required.

📌 About This Template

This project is designed as:

A starter portfolio template

A canvas for experimentation

A base for future projects and extensions