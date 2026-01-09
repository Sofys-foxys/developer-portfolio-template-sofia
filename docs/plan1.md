# plan1 — Tailwind install + coexistence with Bootstrap

## Prompt to AI
Set up Tailwind alongside Bootstrap in a non-Vite static project. Avoid class collisions.

## Plan
- Use Tailwind CLI build (no framework)
- Prefix Tailwind utilities with `tw-` to avoid Bootstrap conflicts
- Create `assets/css/tailwind.css` as input with @tailwind directives
- Output to `assets/css/tailwind.output.css`
- Keep Bootstrap via CDN in index.html
- Import tailwind output from assets/css/index.css

## Implemented
- Added package.json + tailwind config + postcss config
- Added tailwind input + compiled output (after running build)
- Updated index.css imports
