# plan22 — Image slots for Users + Contact + Footer (ImageKit-ready)

## Prompt to AI
Add optional images to Clients (banner format), Contact, and Footer using the existing centralized image map system (assets/js/images.js) and safe assignment in main.js. Ensure images are responsive, accessible (alt text), and preserve layout across breakpoints.

## Plan
- Add image containers in Clients cards:
  - Use 16:9 banner ratio
  - IDs: clientImage1/2/3
  - Keep text readable and image decorative but meaningful if present
- Add optional image in Contact section:
  - ID: contactImage
  - Responsive placement (beside form on desktop, stacked on mobile)
- Add optional small image in Footer:
  - ID: footerImage
- Extend assets/js/images.js:
  - Add clients[] + contact{} + footer{}
- Extend main.js:
  - Update applyImageMap() to fill new IDs with src/alt
  - No innerHTML (XSS safe)
  - If missing URLs, keep placeholders visible
- Add minimal CSS:
  - Client banners (16:9) with border radius and object-fit
  - Contact image card with consistent styling
  - Footer image small and aligned

## Implemented
- Added image slots and IDs in index.html for Clients, Contact, and Footer
- Added client banner styling (16:9) + contact image styling
- Expanded images.js with clients/contact/footer entries
- Updated applyImageMap() in main.js to safely map image src + alt
