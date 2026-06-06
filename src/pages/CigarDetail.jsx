import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import AnimateIn from "../components/AnimateIn";
import SmokeOrbs from "../components/SmokeOrbs";
import DocumentHead from "../components/DocumentHead";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { cigars } from "../data/cigars";
import { products } from "../data/products";

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function CigarDetail() {
  const { slug } = useParams();
  const cigar = cigars.find((c) => toSlug(c.name) === slug);

  if (!cigar) return <Navigate to="/cigars" replace />;

  const idx = cigars.indexOf(cigar);
  const prev = cigars[idx - 1] ?? null;
  const next = cigars[idx + 1] ?? null;
  const product = products.find((p) => p.id === slug);
  const canBuy = product && !product.comingSoon;

  return (
    <Layout>
      <DocumentHead
        title={cigar.name}
        description={`${cigar.tagline} — ${cigar.strength} strength, ${cigar.size}. Shop More Smoke Cigars online.`}
        image={cigar.img}
      />

      {/* Full-screen hero */}
      <section className="detail-hero">
        {cigar.img && (
          <img
            src={cigar.img.replace("w=800", "w=1920")}
            alt={cigar.name}
            className="detail-hero-bg"
            loading="eager"
          />
        )}
        <SmokeOrbs />

        <div className="detail-hero-content">
          <Link to="/cigars" className="detail-back">← All Cigars</Link>
          <p className="cigar-status detail-hero-status">{cigar.status}</p>
          <h1 className="detail-name">{cigar.name}</h1>
          <p className="detail-tagline">{cigar.tagline}</p>
        </div>
      </section>

      {/* Specs + Info */}
      <section className="detail-body">
        <AnimateIn from="left" className="detail-specs-wrap">
          <p className="eyebrow">Specifications</p>
          <table className="specs-table">
            <tbody>
              {[
                ["Size",     cigar.size],
                ["Wrapper",  cigar.wrapper],
                ["Binder",   cigar.binder],
                ["Filler",   cigar.filler],
                ["Strength", cigar.strength],
              ]
                .filter(([, v]) => v)
                .map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </AnimateIn>

        <div className="detail-info-wrap">
          <AnimateIn delay={80}>
            <div className="detail-block">
              <p className="eyebrow">Flavor Profile</p>
              <div className="profile-tags detail-profile-tags">
                {cigar.profile.map((note) => (
                  <span key={note} className="profile-tag profile-tag--lg">{note}</span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {cigar.pairing && (
            <AnimateIn delay={160}>
              <div className="detail-block">
                <p className="eyebrow">Pairs With</p>
                <p className="detail-pairing-text">{cigar.pairing}</p>
              </div>
            </AnimateIn>
          )}

          <AnimateIn delay={200}>
            <div className="detail-block detail-block--soundtrack">
              <p className="eyebrow">The Soundtrack</p>
              <SpotifyPlayer compact />
            </div>
          </AnimateIn>

          <AnimateIn delay={280}>
            <div className="detail-buy">
              {canBuy ? (
                <a
                  href={product.squareUrl ?? `mailto:hello@moresmoke.co?subject=${encodeURIComponent("Order: " + cigar.name)}`}
                  className="btn detail-buy-btn"
                  {...(product.squareUrl
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Order Now — $16
                </a>
              ) : (
                <span className="badge-coming-soon">Coming Soon</span>
              )}
              {canBuy && (
                <p className="detail-buy-note">&#128274; Secure checkout via Square</p>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav className="detail-nav-cigars" aria-label="Cigar navigation">
        {prev ? (
          <Link to={`/cigars/${toSlug(prev.name)}`} className="detail-nav-link detail-nav-link--prev">
            <span className="spec-label">Previous Release</span>
            <span className="detail-nav-name">{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/cigars/${toSlug(next.name)}`} className="detail-nav-link detail-nav-link--next">
            <span className="spec-label">Next Release</span>
            <span className="detail-nav-name">{next.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Layout>
  );
}
