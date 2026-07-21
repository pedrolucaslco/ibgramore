# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/landing site for Igreja Batista do Gramoré (a Baptist church in Natal, RN, Brazil), built with Next.js App Router. Content and UI copy are in Brazilian Portuguese.

## Commands

- `npm run dev` — start dev server with Turbopack
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run `next lint`

There is no test suite configured in this project.

## Architecture

This is effectively a **single-page site**: `app/page.tsx` renders one long `Home` component containing the navbar and every section (`#home`, `#aboutus`, `#celulas`, `#programacoes`, `#pregacoes`), anchor-linked from `navItems`. There is no routing beyond this single route, and no component decomposition — sections live inline in one file. When adding a section or nav item, follow this existing pattern rather than introducing new files/routes unless the user asks for a structural change.

Content is data-driven from typed arrays at the top of `app/page.tsx`, rendered via `.map()`:
- `celulas: Card[]` — home groups ("células"), each with a title, description, location, image, and icon.
- `pregacoes: Card[]` — sermon series, linking out to YouTube.
- `calendar: Calendar[]` — upcoming special events.

Icons come from two different sources and are switched on `Card.iconType`:
- `'lucide'` — a `lucide-react` component, rendered directly as `<celula.icon />`.
- `'lab'` — an icon node from `@lucide/lab` (e.g. `gemRing`), rendered via lucide's `<Icon iconNode={...} />` wrapper, since lab icons aren't components.

`simple-icons` is also a dependency (brand icons like Instagram/YouTube), imported as `siInstagram`/`siYoutube` where needed.

Styling is Tailwind v4 + daisyUI, configured entirely in `app/globals.css` (not a `tailwind.config.js` — v4 uses CSS-based config via `@import "tailwindcss"` and `@plugin "daisyui"`). A custom daisyUI theme named `ibg` is defined there with the brand palette (primary red `#9b1c1c`, etc.) and set globally via `data-theme="ibg"` on `<html>` in `app/layout.tsx`. Other daisyUI themes (`nord`, `light`, `night`) are enabled but unused — `ibg` is the only theme actually applied.

Fonts (`Work_Sans`, `Funnel_Display`) are declared once in `app/fonts.ts` via `next/font/google` and consumed as CSS variables (`--font-work-sans`, `--font-funnel-display`) wired into Tailwind's `@theme` block in `globals.css`. `funnelDisplay.className` is applied ad hoc to headings for the display font; body text falls back to the sans variable.

Images: local photos/logos live in `public/` and are imported directly in `page.tsx` (some via `next/image` with static imports for logos, others as plain `<img>` tags with `.src` access for content photos). Sermon thumbnails in `pregacoes` are hotlinked from `i.ytimg.com` rather than stored locally.

## Known stray files

- `app/navbar.tsx` is empty/unused — the navbar is implemented inline in `page.tsx`, not extracted here.
- `app/index.html` is a leftover static HTML prototype (CDN-loaded Tailwind/daisyUI/lucide/jQuery) that predates the Next.js app and is not served or referenced by it.
