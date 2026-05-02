# No Bluff Builds — Claude Code Context

## What this project is
A one-page marketing website for No Bluff Builds, a web presence 
service for Great Southern (WA) businesses. Built with Astro + 
Tailwind v4, deployed on Vercel, with Airtable as a live CMS.

The site is structurally complete and live. Current work is focused 
on visual design upgrade and establishing a proper engineering workflow.

## Owner
Josh Boccamazzo — No Bluff Local, Great Southern WA
GitHub: j-boccamazzo

---

## Tech stack
- **Framework**: Astro v6 (static site generation)
- **Styling**: Tailwind v4 — config lives in `src/styles/global.css` 
  under `@theme`, NOT in a tailwind.config.mjs file
- **CMS**: Airtable — connection logic in `src/lib/airtable.js`
- **Deployment**: Vercel — auto-deploys on push to main
- **Package manager**: npm

## Project structure
- `src/pages/index.astro` — the entire page lives here
- `src/layouts/Layout.astro` — shared HTML shell, fonts, meta tags
- `src/lib/airtable.js` — Airtable fetch functions
- `src/styles/global.css` — Tailwind imports and brand tokens
- `public/` — static assets (logos, favicons)

---

## Brand

### Colours
- `--color-nbb-green: #2c4539` (primary dark — forest green)
- `--color-nbb-gold: #f8bd52` (accent — warm gold)
- `--color-nbb-cream: #f3e2ba` (background — warm cream)
- `--color-nbb-teal: #709395` (secondary — slate teal)
- `--color-nbb-white: #fffdfa` (warm white)

### Fonts
- Display/Headings: Poppins (weights 300, 400, 500, 600, 700)
- Body: Source Sans 3 (weights 400, 500)
- Loaded via Google Fonts CDN

### Design tone
Warm, direct, local. Not corporate. Not startup.
Think good regional newspaper meets modern web.

---

## Voice and copy rules
These are non-negotiable. Apply to any text edits.

- Australian English throughout (organisation, optimised, behaviour)
- No em dashes anywhere — use a hyphen with spaces or restructure
- No AI-isms, no marketing clichés
- Short paragraphs, 2-4 lines max
- Active verbs, lead with the real thing
- Warm and local — writes like a Great Southern local, not an agency

---

## Known design issues (current focus)
- Hero section lacks visual impact — needs to be more striking
- Pricing cards are generic — need more character
- Spacing and rhythm feel flat throughout
- Mobile responsiveness not checked
- Sections feel visually safe — needs more considered layout

---

## Airtable
- Base: No Bluff Builds
- Table: Testimonials (fields: Name, Business, Quote, Active)
- Filter: Active = true only
- Env vars: AIRTABLE_TOKEN, AIRTABLE_BASE_ID
  - Local: `.env` file
  - Production/Preview: Vercel env vars (set via `npx vercel env add`)

---

## Branching workflow
- `main` = production (auto-deploys to Vercel)
- Always create a feature branch before touching code
- Pattern: `git checkout -b feature/description`
- Feature branch → review → merge to main
- Current active branch: `feature/design-upgrade`

---

## Working with Josh
- Explain the why behind every decision, not just the what
- One command at a time
- Do not execute until explicitly told "let's build this"
- Call out Windows-specific gotchas as they arise
- When proposing design changes, explain the reasoning
- Prefer diffs and small reviewable changes over large rewrites