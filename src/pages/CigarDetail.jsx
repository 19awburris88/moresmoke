import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import SpotifyPlayer from "../components/SpotifyPlayer";
import StrengthMeter from "../components/StrengthMeter";
import CigarArt from "../components/CigarArt";
import { cigars } from "../data/cigars";
import { products } from "../data/products";
import { toSlug } from "../utils/cigar";

export default function CigarDetail() {
  const { slug } = useParams();
  const cigar = cigars.find((c) => toSlug(c.name) === slug);

  if (!cigar) return <Navigate to="/cigars" replace />;

  const idx = cigars.indexOf(cigar);
  const prev = cigars[idx - 1] ?? null;
  const next = cigars[idx + 1] ?? null;
  const product = products.find((p) => p.id === slug);
  const canBuy = product && !product.comingSoon;

  const specs = [
    ["Size",     cigar.size],
    ["Wrapper",  cigar.wrapper],
    ["Binder",   cigar.binder],
    ["Filler",   cigar.filler],
  ].filter(([, v]) => v);

  return (
    <Layout>
      <DocumentHead
        title={cigar.name}
        description={`${cigar.tagline} — ${cigar.strength} strength, ${cigar.size}. Shop More Smoke Cigars online.`}
        image={cigar.img}
      />

      <section className="detail">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/cigars">The Collection</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{cigar.name}</span>
          </nav>

          <div className="detail-grid">
            <AnimateIn from="left" className="detail-media">
              <CigarArt cigar={cigar} className="detail-art" eager />
            </AnimateIn>

            <div className="detail-info">
              <AnimateIn>
                <div className="detail-head">
                  <span className="tag">{cigar.status}</span>
                  <span className="cigar-row-num">No. 0{idx + 1}</span>
                </div>
                <h1 className="detail-name">{cigar.name}</h1>
                <p className="detail-tagline">{cigar.tagline}</p>
              </AnimateIn>

              <AnimateIn delay={80}>
                <div className="detail-buy">
                  <div className="detail-price">
                    <span className="detail-price-amt">${product?.price ?? 16}</span>
                    <span className="detail-price-note">{product?.priceNote ?? "per cigar"}</span>
                  </div>
                  {canBuy ? (
                    <a
                      href={product.squareUrl ?? `mailto:hello@moresmoke.co?subject=${encodeURIComponent("Order: " + cigar.name)}`}
                      className="btn"
                      {...(product.squareUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      Order Now
                    </a>
                  ) : (
                    <Link to="/shop" className="btn btn--muted">Coming Soon — Get Notified</Link>
                  )}
                </div>
                {canBuy && <p className="fine-print">Secure checkout via Square</p>}
              </AnimateIn>

              <AnimateIn delay={140}>
                <div className="detail-block">
                  <h2 className="detail-label">Strength</h2>
                  <StrengthMeter strength={cigar.strength} />
                </div>

                <div className="detail-block">
                  <h2 className="detail-label">Specifications</h2>
                  <dl className="specs">
                    {specs.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="detail-block">
                  <h2 className="detail-label">Tasting Notes</h2>
                  <ul className="notes notes--lg">
                    {cigar.profile.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>

                {cigar.pairing && (
                  <div className="detail-block">
                    <h2 className="detail-label">Pairs With</h2>
                    <p className="detail-pairing">{cigar.pairing}</p>
                  </div>
                )}
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ash">
        <div className="container split split--center">
          <div className="split-copy">
            <p className="eyebrow">The Soundtrack</p>
            <h2>Set the pace.</h2>
            <p className="lede">
              Press play on the Cigar Experience Soundtrack and let {cigar.name} take its time.
            </p>
          </div>
          <div className="split-media">
            <SpotifyPlayer compact />
          </div>
        </div>
      </section>

      <nav className="detail-pager" aria-label="Cigar navigation">
        {prev ? (
          <Link to={`/cigars/${toSlug(prev.name)}`} className="detail-pager-link">
            <span className="detail-label">← Previous</span>
            <span className="detail-pager-name">{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/cigars/${toSlug(next.name)}`} className="detail-pager-link detail-pager-link--next">
            <span className="detail-label">Next →</span>
            <span className="detail-pager-name">{next.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Layout>
  );
}
