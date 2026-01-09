# plan21 — ImageKit integration + centralized image links

## Prompt to AI
Integrate ImageKit.io in this portfolio template without adding a build step so it's easier to use with the template. Create a single “image links” file so anyone can swap images in one place. Update index.html to load images from that file for the hero and the projects section. Keep accessibility in mind (alt text, width/height to prevent layout shift).

## Plan
- Create a central config file for image URLs (assets/js/images.js)
  - Store ImageKit base URL + paths
  - Export an object with hero and project images + alt text
- Update index.html
  - Replace placeholder rectangles with <img> tags for hero + projects
  - Keep Bootstrap ratios working (object-fit: cover)
  - Add width/height + loading="lazy" where appropriate
- Update CSS
  - Ensure images fill containers nicely (object-fit, border-radius)
- Update main.js
  - Read from the images config and inject src/alt safely
  - Avoid innerHTML; set attributes directly to prevent XSS
- Testing checklist
  - No broken links, images load on GitHub Pages
  - Lighthouse: no layout shift from images, alt text present

## Implemented
- Added assets/js/images.js with ImageKit base + image map (hero + works)
- Updated index.html to include the config script and image slots with IDs
- Updated main.js to assign src/alt from the config safely
- Added minimal CSS for responsive image fit in hero/projects
