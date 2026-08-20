# AGENTS.md

Overview of this codebase for developers and AI agents.

## Project Overview

A single-page marketing site for Gomer Faith Ministries, a church in Leyton, London. Built with
TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Forms | Netlify Forms (newsletter signup) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── placeholder.png
│   └── __forms.html         # Hidden static form skeleton so Netlify's build bot registers the newsletter form
├── src
│   ├── components
│   │   ├── Header.tsx       # Sticky nav: transparent-over-hero, solid on scroll, mobile menu
│   │   ├── Hero.tsx         # Full-height hero with service times / location utility bar
│   │   ├── AnchorMedia.tsx  # Dark "Anchor Your Week" video/message section
│   │   ├── WelcomeHome.tsx  # "You Belong Here" about split section
│   │   ├── NextSteps.tsx    # 4-card engagement grid (Salvation, Membership, Volunteer, Youth)
│   │   ├── Events.tsx       # Upcoming events cards with date blocks
│   │   └── Footer.tsx       # Newsletter signup, quick links, address, socials
│   ├── routes
│   │   ├── __root.tsx       # Root document: fonts, meta tags
│   │   └── index.tsx        # Assembles all sections into the single page
│   ├── router.tsx
│   └── styles.css           # Tailwind import + font variables + fade-up keyframes
├── netlify.toml
├── package.json
├── tsconfig.json            # `@/*` path alias -> `src/*`
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

This is a single-route site: `src/routes/index.tsx` renders everything at `/`. Section anchors
(`#welcome-home`, `#next-steps`, `#events`, `#anchor`, `#visit`, `#give`) are used for in-page nav
rather than separate routes.

### Newsletter Form

The footer's email signup submits to Netlify Forms via AJAX (`fetch('/__forms.html', ...)`), not
`/`, because the TanStack Start SSR catch-all would otherwise intercept the request before Netlify's
form handler sees it. `public/__forms.html` is a hidden static form that exists only so Netlify's
build bot registers the `newsletter` form and its `email` field at deploy time — it is never shown
to visitors. Netlify Forms only work on a deployed site, not local dev.

## Design System

- **Colors**: white section backgrounds, `#111111` (near-black, not pure black) for high-contrast
  sections and footer, `#a01c2b` (deep crimson) as the accent for primary buttons/hovers.
- **Type**: Montserrat for headings (`font-display`), Inter for body text — loaded via Google Fonts
  link tags in `__root.tsx`, exposed as CSS variables in `styles.css`.
- **Buttons**: `rounded-[6px]`, solid crimson primary vs. outlined secondary, with a subtle
  translate-up + shadow on hover.
- **Images**: Unsplash placeholder photography (reliable hosted URLs) standing in for real
  congregation/staff photos.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Conventions

- Components: PascalCase, one section per file in `src/components/`.
- Import paths use the `@/` alias for anything under `src/`.
- Tailwind utility classes only — no separate CSS modules per component.
