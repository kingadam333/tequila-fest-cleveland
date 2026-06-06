# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server — port 4001 (3000=Willoughby, 4000=Cincinnati, 4001=Cleveland, 4002=USA, 4003=Columbus)
nohup npm run dev -- --port 4001 > /tmp/tequila-clev-dev.log 2>&1 &

# Build (check for errors before committing)
npm run build

# Lint
npm run lint

# Install dependencies (npm cache is broken at default location — use temp cache)
npm install --cache /tmp/npm-cache
```

## What This Is

A single-page marketing/splash site for **Tequila Fest Cleveland** — an annual tequila festival held at Cuyahoga County Fairgrounds, Berea, OH. All ticket sales redirect to an external URL; this site has no e-commerce or auth.

This site was cloned from the Cincinnati site (the template). The Cincinnati site at `/Users/adambossin/Sites/tequila-fest-cincinnati` is the design source of truth.

**Event details (update these when they change):**
- Date: July 25, 2026, 3:00 PM – 9:00 PM
- Tequila sampling: 4:00 PM – 8:00 PM
- Venue: Cuyahoga County Fairgrounds, Berea, OH
- Tickets URL: `https://tequilafestusa.com/events/tequila-fest-cleveland-2026`

## Architecture

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

All content lives in `src/app/page.tsx` as a stack of section components imported from `src/components/`. There is no routing — the entire site is one page (`/`).

**Section order (top to bottom):**
1. `OfficialBanner` — **sticky** top bar; Código 1530 as presenting sponsor; has dismiss button
2. `Hero` — full-viewport `hero-bg.jpg`, logo `tequilafest_cle_logo.png`, TEQUILA FEST CLEVELAND headline, live countdown, confetti canvas
3. `Highlights` — 4-card grid: 50+ Tequilas (gold), Tacos (red), Music (purple), VIP (platinum)
4. `VIPExperience` — platinum-themed section; 3D tilt cards on hover; sparkle particles; sweeping spotlight; VIP tequila brand marquee (7 brands, duplicated for seamless loop)
5. `EventDetails` — marigold (`#F5A623`) strip with date/time/venue/admission
6. `TequilaSpotlight` — auto-scrolling marquee of 15 general tequila brands + tequila type breakdown grid
7. `LiveMusic` — animated equalizer bars; two artist cards (DJ Fusemania 3–6 PM, Apostle Jones Band 6:30–9 PM); full schedule timeline row
8. `Gallery` — 10 real photos from `/public/gallery/`; click opens lightbox
9. `EmailSignup` — red (`#C8102E`) section; Supabase `email_subscribers` table (guarded — null-safe when env vars missing)
10. `TicketsCTA` — spinning decorative rings; pulsing gold CTA button
11. `Footer` — social icon links, legal, 21+ notice

## Public Assets

```
/public/hero-bg.jpg                  — hero background photo
/public/tequilafest_cle_logo.png     — event logo (displayed in hero)
/public/gallery/
  IMG_2832.jpg  (row-span-2)
  IMG_3031.jpg
  IMG_3038.jpg
  IMG_3075.jpg  (row-span-2)
  IMG_3105.jpg
  IMG_3119.jpg
  IMG_3137.jpg
  IMG_3149.jpg
  IMG_3218.jpg  (row-span-2)
  IMG_3225.jpg
```

## Key Design Details

**Color palette** (defined in `globals.css` custom classes):
- Gold/warm: `#F5A623` (marigold) — primary festival color
- Red: `#C8102E` (agave red)
- Purple: `#7B2FBE` (fiesta purple)
- Green: `#00A878` (cactus)
- Dark bg: `#0d0500` (tequila barrel)

**CSS shimmer classes** (in `globals.css` — used heavily, do not remove):
- `.text-shimmer` — gold/red animated gradient (used on "TEQUILA")
- `.text-shimmer-blue` — light blue/turquoise/navy (used on "FEST")
- `.text-shimmer-platinum` — silver/white animated gradient (VIP section throughout)
- `.animate-pulse-glow` — yellow glow pulse on CTA buttons
- `.animate-float` — gentle float for scroll indicator
- `.papel-picado-border` — Mexican paper-cut SVG border between sections

**Fonts:** Bebas Neue (display/headlines), Playfair Display (subheadings), Source Sans 3 (body) — loaded via Google Fonts `@import` in `globals.css`. The `@import` **must stay above** `@import "tailwindcss"` or the build will warn.

**`Confetti.tsx`** — canvas-based particle animation; automatically disabled when `prefers-reduced-motion` is set.

**`VIPExperience.tsx`** — uses Framer Motion `useMotionValue`/`useTransform` for 3D card tilt on hover. The `vipTequilas` array **must be duplicated** (first 7 entries + same 7 again) for the CSS marquee loop to be seamless.

**`OfficialBanner.tsx`** — `sticky top-0 z-50`; platinum shimmer sweep animation; dismissible with ✕ button.

**`Gallery.tsx`** — lightbox opens on click; all items are images (no video in this city). `span` values control masonry layout height.

## Content Updates

All content is hardcoded — no CMS. To update:
- **Event date/countdown:** `Hero.tsx` → `eventDate` constant (`new Date("2026-07-25T15:00:00")`)
- **Event details strip:** `EventDetails.tsx` → `details` array
- **Hero city name:** `Hero.tsx` → the `CLEVELAND` text in the h2
- **Sponsor banner:** `OfficialBanner.tsx` → brand name and label
- **Tequila brands (general):** `TequilaSpotlight.tsx` → `brands` array
- **VIP tequila brands:** `VIPExperience.tsx` → `vipTequilas` array (keep duplicated for marquee)
- **Music lineup:** `LiveMusic.tsx` → artist cards and schedule timeline array
- **Gallery:** drop files into `/public/gallery/`, update `media` array in `Gallery.tsx`
- **All ticket links:** `https://tequilafestusa.com/events/tequila-fest-cleveland-2026` — grep for this if it changes

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Both optional for local dev — Supabase client is null-safe when empty. Only email signup requires them at runtime.

## Deployment

- GitHub: `kingadam333/tequila-fest-cleveland`
- Hosted on Vercel, domain: `tequilafestcleveland.com`
- Push to `main` → auto-deploys via Vercel GitHub integration
