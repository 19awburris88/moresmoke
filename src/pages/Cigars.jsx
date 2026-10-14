import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import StrengthMeter from "../components/StrengthMeter";
import CigarArt from "../components/CigarArt";
import { cigars } from "../data/cigars";
import { toSlug } from "../utils/cigar";

export default function Cigars() {
  return (
    <Layout>
      <DocumentHead
        title="Cigars"
        description="Explore the More Smoke cigar portfolio — five premium releases, every mood covered. Shop Last Call, Tempus Fugit, Cowboy Caviar, Nile Queen, and Space Cowboy."
      />

      <PageHero
        eyebrow="The Collection"
        title="Every cigar has a mood."
        text="Explore the More Smoke portfolio — from core releases to limited blends and upcoming drops."
      />

      <section className="section section--flush-top">
        <div className="container cigar-list">
          {cigars.map((cigar, i) => (
            <AnimateIn key={cigar.name} delay={i * 60}>
              <Link to={`/cigars/${toSlug(cigar.name)}`} className="cigar-row">
                <CigarArt cigar={cigar} className="cigar-row-art" />

                <div className="cigar-row-main">
                  <div className="cigar-row-top">
                    <span className="cigar-row-num">No. 0{i + 1}</span>
                    <span className="tag">{cigar.status}</span>
                  </div>
                  <h2>{cigar.name}</h2>
                  <p className="cigar-row-tagline">{cigar.tagline}</p>
                  <ul className="notes">
                    {cigar.profile.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>

                <div className="cigar-row-side">
                  <dl className="cigar-row-specs">
                    <div><dt>Size</dt><dd>{cigar.size}</dd></div>
                    <div><dt>Wrapper</dt><dd>{cigar.wrapper}</dd></div>
                    <div><dt>Filler</dt><dd>{cigar.filler}</dd></div>
                    <div>
                      <dt>Strength</dt>
                      <dd><StrengthMeter strength={cigar.strength} /></dd>
                    </div>
                  </dl>
                  <span className="text-link cigar-row-cta">View details →</span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </Layout>
  );
}
