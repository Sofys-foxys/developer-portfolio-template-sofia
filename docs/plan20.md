# plan20 — Mobile spacing + image accessibility placeholders

## Prompt to AI
Improve mobile spacing for the hero section and ensure basic image accessibility. Add more breathing room for the title on small screens and prepare accessible placeholders for images before integrating ImageKit.

## Plan
- Improve hero spacing on mobile devices under the fixed navbar
- Adjust margins for kicker, title and call-to-action
- Ensure image placeholders are accessible:
  - Use role="img" with aria-label on placeholder containers
  - Hide decorative dimension text with aria-hidden="true"
- Keep changes minimal and mobile-first

## Implemented
- Added mobile-only spacing rules for hero section
- Improved margins for hero title and CTA on small screens
- Converted image placeholders to accessible containers using role and aria-label
- Ensured decorative placeholder text is ignored by screen readers
