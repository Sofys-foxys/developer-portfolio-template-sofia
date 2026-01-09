/* ==========================================================================
   images.js — Central ImageKit links (template-friendly)
   Edit ONLY this file to change images across the template.
========================================================================== */

const IMAGEKIT_URL = "https://ik.imagekit.io/YOUR_IMAGEKIT_ID"; // <-- CHANGE THIS

function ik(path) {
  return `${IMAGEKIT_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

window.PORTFOLIO_IMAGES = {
  hero: {
    src: ik("/portfolio/hero.jpg"),
    alt: "Portrait-style hero image for Sofía's portfolio",
  },
  works: [
    {
      src: ik("/portfolio/work-1.jpg"),
      alt: "Project preview image: Work 1",
    },
    {
      src: ik("/portfolio/work-2.jpg"),
      alt: "Project preview image: Work 2",
    },
    {
      src: ik("/portfolio/work-3.jpg"),
      alt: "Project preview image: Work 3",
    },
  ],
  style: [
    {
      src: ik("/portfolio/style-1.jpg"),
      alt: "Style image: design tokens and UI system reference",
    },
    {
      src: ik("/portfolio/style-2.jpg"),
      alt: "Style image: motion and animation concept preview",
    },
    {
      src: ik("/portfolio/style-3.jpg"),
      alt: "Style image: accessibility-first interface example",
    },
  ],

};

