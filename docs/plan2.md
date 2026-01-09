# plan2 — Tokens, fluid type, palette, day/night contrast

## Prompt to AI
Create a token system for light/dark with neon accent (#39FF14). Use clamp() for headings and readable body sizes.

## Plan
- Define CSS custom properties for both modes
- Use [data-theme="dark"] / [data-theme="light"]
- Add fluid typography tokens using clamp()
- Keep Bootstrap variables compatible where possible

## Implemented
- Updated theme.css with palette, typography tokens, and mode switching
