# More Smoke Cigars

The official home of **More Smoke Cigars**, a premium boutique cigar brand founded in 2021 by
Austin Burris and built for slow nights, sharp rooms, and the conversations that happen after the
meeting ends.

After a break, More Smoke is relaunching. This repository is the brand's new home: a ground-up
overhaul with a new logo, a new visual identity, and a platform designed to grow with the business.
It covers the collection, online sales, events, and wholesale.

---

## Brand Identity

### Logo

The More Smoke wordmark is a bold geometric lockup. A single ember-orange wisp of smoke rises from the
final "E". The "E" and its ember also serve as the brand mark for the favicon and app icons.

| File | Use |
|---|---|
| `src/assets/brand/logo-dark.png` | Full lockup (with "CIGARS") on light backgrounds |
| `src/assets/brand/logo-light.png` | Full lockup on charcoal / dark backgrounds |
| `src/assets/brand/wordmark-dark.png` | Compact wordmark for the header on light |
| `src/assets/brand/wordmark-light.png` | Compact wordmark for the header on dark |
| `public/favicon*.png`, `public/apple-touch-icon.png` | "E" ember brand mark |
| `public/og-image.jpg` | Social sharing card |

### Color Palette

| Color | Hex | Platform use |
|---|---|---|
| Smoke Charcoal | `#282828` | Navigation, headings, footer, dark sections |
| Ember Orange | `#C8521E` | Signature accent, icons, active indicators, highlights |
| Deep Ember | `#A63D12` | Primary buttons and text links on light backgrounds |
| Smoke White | `#F7F7F5` | Main page background |
| Pure White | `#FFFFFF` | Product cards, forms, text on dark backgrounds |
| Ash Gray | `#EBEBEB` | Alternate sections, dividers, subtle backgrounds |
| Graphite | `#666666` | Descriptions, captions, secondary text |

One derived tone, `--ember-light` (`#E0713D`), is used only for small accent text on charcoal,
where Ember Orange alone would not meet contrast requirements.

All colors are defined as CSS custom properties at the top of `src/index.css`.

### Typography

| Role | Typeface |
|---|---|
| Display / headings | **Archivo** (expanded width), which echoes the logo's bold geometric forms |
| Editorial accents | **Instrument Serif** italic, for a touch of heritage in quotes and taglines |
| Body / UI | **Inter** |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, release ticker, collection, story, testimonials, soundtrack, newsletter |
| `/cigars` | The full collection |
| `/cigars/:slug` | Cigar detail: specs, strength meter, tasting notes, pairing, ordering |
| `/shop` | Shop: cigars, sample pack, apparel (Square checkout) |
| `/events` | Lounge nights and private releases |
| `/locations` | Authorized lounges and retailers |
| `/about` | Our Story: the founder, the philosophy, the pillars |

## Features

- 21+ age gate (remembered in localStorage)
- Transparent-to-solid header over dark heroes, plus a full-screen mobile menu
- Five-step strength meter and tasting-note chips for every release
- Scroll reveal animations and ember smoke effects (honors `prefers-reduced-motion`)
- Newsletter modal and inline signup ("The Inner Circle")
- Cigar Experience Soundtrack (Spotify embed)
- Per-page SEO and Open Graph tags

---

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint
```

### Stack

Vite · React 19 · React Router 7 · plain CSS with design tokens (no CSS framework)

---

## Managing Content

All brand content lives in `src/data/`, so no component changes are needed for routine updates.

| File | What it controls |
|---|---|
| `cigars.js` | The collection: names, specs, strength, tasting notes, pairings, status, band art |
| `products.js` | Shop items, prices, and **Square payment links** |
| `events.js` | Upcoming and past events |
| `locations.js` | Partner lounges and retailers |
| `testimonials.js` | Customer and partner quotes |
| `playlist.js` | Spotify playlist URL |

### Going live with sales

1. Create a payment link for each product in **Square Dashboard → Online → Payment Links**.
2. Paste each link into the `squareUrl` field in `src/data/products.js`.
3. Set `comingSoon: false` (for cigars, change `status` in `cigars.js` from `"Coming Soon"`).

Until a link is set, "Order Now" falls back to a pre-filled email to `hello@moresmoke.co`.

### Newsletter

Set `VITE_NEWSLETTER_ENDPOINT` in a `.env` file to send signups to your email provider
(Formspree, Mailchimp, ConvertKit, etc.). See the comments in `src/components/NewsletterForm.jsx`.

---

© More Smoke Cigars. All rights reserved. For adults 21+ only.
