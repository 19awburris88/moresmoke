// ============================================================
// SQUARE INTEGRATION
//
// How to generate payment links:
//   Square Dashboard → Online → Payment Links → Create a Link
//   Set the product name, price, and photo in Square.
//   Copy the link (format: https://square.link/u/XXXXXXXX)
//   Paste it into the squareUrl field below.
//
// Until a squareUrl is set, "Order Now" buttons send a
// pre-filled email to hello@moresmoke.co as a fallback.
// ============================================================

import { cigars } from "./cigars.js";

export const categories = [
  { id: "all",     label: "All Products" },
  { id: "cigars",  label: "Cigars"       },
  { id: "bundle",  label: "Sample Pack"  },
  { id: "apparel", label: "Apparel"      },
];

const cigarProducts = cigars.map((c) => ({
  id:            c.name.toLowerCase().replace(/\s+/g, "-"),
  name:          c.name,
  category:      "cigars",
  categoryLabel: c.status,
  price:         16,
  priceNote:     "per cigar",
  tagline:       c.tagline,
  description:   `${c.profile.join(" · ")}.`,
  pairing:       c.pairing,
  img:           c.img,
  squareUrl:     null,   // ← paste Square payment link
  comingSoon:    c.status === "Coming Soon",
}));

export const products = [
  ...cigarProducts,

  // ── Sample Pack ───────────────────────────────────────────
  {
    id:            "sample-pack",
    name:          "More Smoke Sample Pack",
    category:      "bundle",
    categoryLabel: "Best Value",
    price:         50,
    priceNote:     "4 cigars · $12.50 each",
    tagline:       "The full experience in one box.",
    description:
      "Four hand-selected More Smoke cigars — one from each core release. " +
      "The perfect introduction to the portfolio, or a premium gift for the " +
      "connoisseur in your circle.",
    pairing:   "Your favorite bourbon or aged rum",
    img:       "https://images.unsplash.com/photo-1682125790146-85e7239eb2e1?auto=format&fit=crop&w=800&q=80",
    squareUrl: null,  // ← paste Square payment link
    comingSoon: false,
  },

  // ── Apparel ───────────────────────────────────────────────
  {
    id:            "logo-tee",
    name:          "More Smoke Tee",
    category:      "apparel",
    categoryLabel: "Apparel",
    price:         35,
    tagline:       "Wear the culture.",
    description:
      "Premium heavyweight cotton. Clean More Smoke wordmark on the chest. " +
      "Structured fit — built for the lounge and beyond.",
    img:        null,
    squareUrl:  null,
    comingSoon: true,
  },
  {
    id:            "snapback",
    name:          "More Smoke Snapback",
    category:      "apparel",
    categoryLabel: "Apparel",
    price:         30,
    tagline:       "Structured fit. Timeless look.",
    description:
      "Classic snapback with embroidered More Smoke branding on the front panel. " +
      "Adjustable fit. Available in black and charcoal.",
    img:        null,
    squareUrl:  null,
    comingSoon: true,
  },
];
