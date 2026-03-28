# No Bluff Builds — Claude Code Context

## What this project is
A one-page marketing website for No Bluff Builds, a web presence 
service for Great Southern (WA) businesses. Built with Astro + 
Tailwind v4, deployed on Vercel, with Airtable as a CMS.

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

## Brand colours
- `--color-nbb-green: #2c4539` (primary dark)
- `--color-nbb-gold: #f8bd52` (accent)
- `--color-nbb-cream: #f3e2ba` (background)
- `--color-nbb-teal: #709395` (secondary)
- `--color-nbb-white: #fffdfa` (white)

## Fonts
- Display: Playfair Display (headings)
- Body: Source Sans 3

## Airtable
- Base: No Bluff Builds
- Table: Testimonials (fields: Name, Business, Quote, Active)
- Env vars: AIRTABLE_TOKEN, AIRTABLE_BASE_ID (in .env locally, 
  Vercel env for production/preview)

## Branching workflow
- `main` = production (auto-deploys to Vercel)
- Feature branches → PR → merge to main
- Current branch pattern: `feature/description`

## Owner
Josh Boccamazzo — No Bluff Local, Great Southern WA
GitHub: j-boccamazzo