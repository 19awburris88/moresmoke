# More Smoke Cigars

Premium boutique cigar brand website — built with Vite + React + React Router.

## Stack

- **Vite** — build tool
- **React 19** — UI
- **React Router 7** — client-side routing
- **CSS custom properties** — full brand token system, no CSS framework

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | Founder / About |
| `/cigars` | Full portfolio |
| `/cigars/:slug` | Individual cigar detail |
| `/locations` | Authorized locations |
| `/events` | Lounge nights & events |
| `/shop` | Shop (Square checkout) |

## Features

- Age gate (21+ verification, localStorage)
- Scroll reveal animations (IntersectionObserver, no library)
- Animated smoke orbs on hero sections
- Individual cigar detail pages with specs, flavor profile, and buy button
- Newsletter modal + inline capture form
- Spotify playlist embed (Cigar Experience Soundtrack)
- SEO meta tags + Open Graph per page
- Square payment link integration
- Responsive — mobile full-screen heroes (`min-height: 100svh`)

## Brand

- **Fonts:** Cormorant Garamond (headings) · Inter (body/UI) via Google Fonts
- **Colors:** 9-token brand palette — Midnight Smoke, Charred Oak, Tobacco Leaf, Burnished Copper, Barrel Gold, Ivory Smoke, Cigar Ash, Weathered Stone + status colors
- **Gradients:** `--grad-copper`, `--grad-lounge`, `--grad-whiskey`

## Getting Started

```bash
npm install
npm run dev
```

## Configuration

### Square Checkout
Add your Square payment link URLs to `src/data/products.js`:
```js
squareUrl: "https://square.link/u/your-link-here"
```

### Newsletter Endpoint
Create a `.env` file:
```
VITE_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-form-id
```

### Spotify Playlist
Drop your playlist URL into `src/data/playlist.js`:
```js
export const PLAYLIST_URL = "https://open.spotify.com/playlist/your-id";
```

## Project Structure

```
src/
  components/     # Layout, AgeGate, AnimateIn, SpotifyPlayer, DocumentHead, etc.
  pages/          # One file per route
  data/           # cigars.js, locations.js, products.js, events.js, playlist.js
  hooks/          # useInView.js
  index.css       # All styles — brand tokens, components, responsive
```

---

*Built for Austin Burris — More Smoke Cigars*
