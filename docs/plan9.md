# plan9 — Add explicit section-title + typography reveals

## Prompt to AI
Implement the course demo pattern: gsap.from('.section-title', ...) and reveal text on scroll. Keep it accessible.

## Plan
- Add a ScrollTrigger animation targeting .section-title
- Add a loop for elements tagged with .scroll-text
- Keep reduced-motion bypass

## Implemented
- Updated main.js with these two behaviors
