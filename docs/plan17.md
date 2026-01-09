# plan17 — Accessibility upgrades + light-mode without neon

## Prompt to AI
Add skip link, improve landmark semantics/labels, and adjust light theme so neon is not used for general UI (only optional accents).

## Plan
- Add a skip link at top of body
- Ensure main has id and skip target
- Add aria-labels to sections where helpful
- Adjust light theme tokens so links/buttons are muted and neon is minimized

## Implemented
- Updated index.html + theme.css + style.css