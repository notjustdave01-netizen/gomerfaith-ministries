# Gomer Faith Ministries

A single-page marketing site for Gomer Faith Ministries, a church in Leyton, London — built to
introduce visitors to the church, highlight service times, and guide them into next steps
(salvation, membership, volunteering, and youth ministry).

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) for the app shell
- [Tailwind CSS 4](https://tailwindcss.com) for styling
- [lucide-react](https://lucide.dev) for icons
- Netlify Forms for the newsletter signup
- Deployed on [Netlify](https://www.netlify.com)

## Running locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000` by default. To exercise Netlify-specific features
(functions, forms emulation) instead use the Netlify CLI:

```bash
netlify dev
```

Note: newsletter form submissions only work once deployed to Netlify — Netlify Forms is a
build-time/CDN feature and doesn't intercept requests in local dev.

## Building

```bash
npm run build
```

Outputs a production build via Vite to `dist/`.
