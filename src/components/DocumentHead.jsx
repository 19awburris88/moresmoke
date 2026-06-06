import { useEffect } from "react";

const DEFAULT_DESC =
  "Premium boutique cigars for slow nights, sharp rooms, and unforgettable conversations. Shop More Smoke Cigars online.";
const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1679419859523-97c0f0e8985d?auto=format&fit=crop&w=1200&q=80";

export default function DocumentHead({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | More Smoke Cigars` : "More Smoke Cigars";
    document.title = fullTitle;

    const setMeta = (attr, attrVal, content) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const desc = description ?? DEFAULT_DESC;
    const img = image ?? DEFAULT_IMG;

    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:image", img);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);

    return () => {
      document.title = "More Smoke Cigars";
    };
  }, [title, description, image]);

  return null;
}
