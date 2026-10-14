import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import NewsletterForm from "../components/NewsletterForm";
import { products, categories } from "../data/products";

function BuyButton({ squareUrl, comingSoon, name, price }) {
  if (comingSoon) {
    return <span className="tag tag--muted">Coming Soon</span>;
  }

  const emailFallback =
    `mailto:hello@moresmoke.co` +
    `?subject=${encodeURIComponent("Order: " + name)}` +
    `&body=${encodeURIComponent(`Hi,\n\nI'd like to order: ${name} ($${price})\n\nPlease let me know next steps.\n\nThanks`)}`;

  return (
    <a
      href={squareUrl ?? emailFallback}
      className="btn btn--sm"
      {...(squareUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {squareUrl ? "Buy Now" : "Order Now"}
    </a>
  );
}

function ProductImage({ product }) {
  return (
    <div className="product-img">
      {product.img ? (
        <img src={product.img} alt={product.name} loading="lazy" />
      ) : (
        <div className={`product-img-placeholder product-img-placeholder--${product.category}`}>
          <span>{product.name}</span>
        </div>
      )}
      <span className="product-badge">{product.categoryLabel}</span>
    </div>
  );
}

export default function Shop() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);
  const allComingSoon = products.every((p) => p.comingSoon);

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

      {allComingSoon && (
        <section className="container">
          <div className="notice">
            <div>
              <p className="eyebrow">The Return</p>
              <h2>The collection is coming back.</h2>
              <p>Join the Inner Circle and we&apos;ll tell you the moment orders reopen.</p>
            </div>
            <NewsletterForm compact />
          </div>
        </section>
      )}

      <section className="section section--flush-top">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                className={`filter${active === cat.id ? " active" : ""}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((product, i) => (
              <AnimateIn key={product.id} delay={(i % 3) * 70}>
                <article className="product-card">
                  {product.category === "cigars" ? (
                    <Link to={`/cigars/${product.id}`} className="product-img-link">
                      <ProductImage product={product} />
                    </Link>
                  ) : (
                    <ProductImage product={product} />
                  )}

                  <div className="product-body">
                    <h2>{product.name}</h2>
                    <p className="product-tagline">{product.tagline}</p>
                    <p className="product-desc">{product.description}</p>
                    {product.pairing && (
                      <p className="product-pairing">
                        <span>Pairs with</span> {product.pairing}
                      </p>
                    )}
                  </div>

                  <div className="product-foot">
                    <div>
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
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ash">
        <div className="container trust">
          <div>
            <p className="eyebrow">Powered by Square</p>
            <h2>Shop with confidence.</h2>
            <p>
              All transactions are processed securely through Square — the same system
              trusted by millions of businesses worldwide. We never store your payment
              information.
            </p>
          </div>
          <ul className="trust-badges">
            <li>PCI Compliant</li>
            <li>SSL Encrypted</li>
            <li>No Stored Card Data</li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow eyebrow--on-dark">Lounges &amp; Retailers</p>
            <h2>Looking for wholesale pricing?</h2>
            <p>
              We offer wholesale pricing and custom orders for lounges, events, and
              retail partners. Reach out directly and we&apos;ll make it work.
            </p>
          </div>
          <a href="mailto:hello@moresmoke.co?subject=Wholesale%20Inquiry" className="btn">Contact Wholesale</a>
        </div>
      </section>
    </Layout>
  );
}
