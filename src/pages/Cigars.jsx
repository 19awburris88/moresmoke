import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import { cigars } from "../data/cigars";

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Cigars() {
  return (
    <Layout>
      <DocumentHead
        title="Cigars"
        description="Explore the More Smoke cigar portfolio — five premium releases, every mood covered. Shop Last Call, Tempus Fugit, Cowboy Caviar, Nile Queen, and Space Cowboy."
      />

      <PageHero
        eyebrow="Our Releases"
        title="Every cigar has a mood."
        text="Explore the More Smoke portfolio — from core releases to limited blends and upcoming drops."
      />

      <section className="cigar-grid">
        {cigars.map((cigar, i) => (
          <AnimateIn key={cigar.name} delay={i * 80}>
            <Link to={`/cigars/${toSlug(cigar.name)}`} className="cigar-card">
              {cigar.img && (
                <div className="cigar-card-img-wrap">
                  <img src={cigar.img} alt={cigar.name} loading="lazy" />
                </div>
              )}

              <div className="cigar-card-header">
                <span className="cigar-status">{cigar.status}</span>
                <h2>{cigar.name}</h2>
                <p className="cigar-tagline">{cigar.tagline}</p>
              </div>

              <div className="cigar-specs">
                <div className="spec-row">
                  <span className="spec-label">Size</span>
                  <span>{cigar.size}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Wrapper</span>
                  <span>{cigar.wrapper}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Strength</span>
                  <span>{cigar.strength}</span>
                </div>
              </div>

              <div className="cigar-profile">
                <p className="spec-label">Flavor Profile</p>
                <div className="profile-tags">
                  {cigar.profile.map((note) => (
                    <span key={note} className="profile-tag">{note}</span>
                  ))}
                </div>
              </div>

              <p className="cigar-card-cta">View Details →</p>
            </Link>
          </AnimateIn>
        ))}
      </section>
    </Layout>
  );
}
