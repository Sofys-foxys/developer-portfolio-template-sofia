# plan19 — Open Graph image placeholder

## Prompt to AI
Fix: low contrast on body text, make hero header animation replay on scroll up/down, make "See work" green, change theme toggle label to reflect the current theme, make section titles sticky while scrolling and keep text legible, ensure neon contrast stays visible in clients, add footer-like section with repeated key info, and increase image space.

## Plan
- Increase base text contrast tokens (dark & light)
- Update cards/tags/text overlay contrast
- Make "See work" use neon button styling
- Theme toggle label: "Light mode" when dark, "Dark mode" when light
- Sticky section title column (CSS + minimal HTML structure)
- GSAP: re-trigger hero/intro text animation on enter & enterBack
- Improve client tile neon contrast
- Add footer section with quick links/contact
- Increase image slot height and work card image area

## Implemented
- Updated assets/css/theme.css, assets/css/style.css, assets/css/layout.css
- Updated assets/js/main.js
- Updated index.html (section structure + footer)