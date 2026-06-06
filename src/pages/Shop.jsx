import { useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import DocumentHead from "../components/DocumentHead";
import { products, categories } from "../data/products";

function BuyButton({ squareUrl, comingSoon, name, price }) {
  if (comingSoon) {
    return <span className="badge-coming-soon">Coming Soon</span>;
  }

  const emailFallback =
    `mailto:hello@moresmoke.co` +
    `?subject=${encodeURIComponent("Order: " + name)}` +
    `&body=${encodeURIComponent(`Hi,\n\nI'd like to order: ${name} ($${price})\n\nPlease let me know next steps.\n\nThanks`)}`;

  return (
    <a
      href={squareUrl ?? emailFallback}
      className="btn shop-buy-btn"
      {...(squareUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {squareUrl ? "Buy Now" : "Order Now"}
    </a>
  );
}

function ProductImage({ product }) {
  if (product.img) {
    return (
      <div className="product-card-img">
        <img src={product.img} alt={product.name} loading="lazy" />
        <span className="product-category-badge">{product.categoryLabel}</span>
      </div>
    );
  }

  return (
    <div className="product-card-img">
      <div className={`product-img-placeholder product-img-placeholder--${product.category}`} />
      <span className="product-category-badge">{product.categoryLabel}</span>
    </div>
  );
}

export default function Shop() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <DocumentHead
        title="Shop"
        description="Buy More Smoke Cigars online. Premium cigars, sample packs, and brand apparel. Secure checkout powered by Square."
      />

      <PageHero
        eyebrow="Shop"
        title="The More Smoke Collection."
        text="Premium cigars, curated bundles, and brand apparel. Secure checkout powered by Square."
      />

      {/* Category filters */}
      <div className="shop-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`shop-filter-btn${active === cat.id ? " active" : ""}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <section className="product-grid">
        {filtered.map((product) => (
          <article className="product-card" key={product.id}>
            <ProductImage product={product} />

            <div className="product-card-body">
              <h2>{product.name}</h2>
              <p className="product-tagline">{product.tagline}</p>
              <p className="product-description">{product.description}</p>
              {product.pairing && (
                <p className="product-pairing">
                  <span className="spec-label">Pairs With</span> {product.pairing}
                </p>
              )}
            </div>

            <div className="product-card-footer">
              <div className="product-price-wrap">
                <span className="product-price">${product.price}</span>
                {product.priceNote && (
                  <span className="product-price-note">{product.priceNote}</span>
                )}
              </div>
              <BuyButton
                squareUrl={product.squareUrl}
                comingSoon={product.comingSoon}
                name={product.name}
                price={product.price}
              />
            </div>

            {!product.comingSoon && (
              <div className="product-square-note">
                <span>&#128274; Secure checkout via Square</span>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Square trust section */}
      <section className="square-trust">
        <div className="square-trust-inner">
          <p className="eyebrow">Powered by Square</p>
          <h2>Shop with confidence.</h2>
          <p>
            All transactions are processed securely through Square — the same system
            trusted by millions of businesses worldwide. We never store your payment
            information. Your data stays protected at every step.
          </p>
          <div className="square-trust-badges">
            <span>PCI Compliant</span>
            <span>SSL Encrypted</span>
            <span>No Stored Card Data</span>
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="wholesale-cta">
        <div className="wholesale-cta-inner">
          <p className="eyebrow">Lounges &amp; Retailers</p>
          <h2>Looking for wholesale pricing?</h2>
          <p>
            We offer wholesale pricing and custom orders for lounges, events, and
            retail partners. Reach out directly and we&apos;ll make it work.
          </p>
          <a href="mailto:hello@moresmoke.co" className="btn">Contact Wholesale</a>
        </div>
      </section>
    </Layout>
  );
}
