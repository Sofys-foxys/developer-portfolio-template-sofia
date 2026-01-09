# plan20 — UI polish + footer visibility + smoother pin + mobile spacing + A11Y placeholders

## Prompt to AI
Fix contrast issues in dark/light mode, make navbar brand readable, ensure footer is visible, and remove awkward blank space caused by the pinned #style section. Improve mobile hero spacing. Add accessible image placeholders (role/aria-label) before integrating ImageKit.

## Plan
- Increase dark-mode text contrast for body text and muted text
- Improve light-mode contrast for navbar, toggle, and primary CTA (green)
- Ensure .navbar-brand and nav links are readable in both themes
- Ensure footer has clear separation (border/top + background) and is inside <main>
- Smooth ScrollTrigger pin behavior:
  - Reduce pin end length
  - Add anticipatePin + invalidateOnRefresh
- Improve mobile hero spacing under fixed navbar (small screens)
- Add A11Y placeholders:
  - role="img" + aria-label on placeholder containers
  - aria-hidden="true" on placeholder dimension text

## Implemented
- Updated theme tokens to improve readability in dark and contrast in light
- Updated navbar styles to keep “Sofía” and links readable
- Verified footer is rendered at the end and visually separated
- Adjusted #style ScrollTrigger pin configuration to avoid large blank gap
- Added mobile-only spacing rules for hero title and CTA
- Converted image placeholders to accessible placeholders (role/aria-label)
