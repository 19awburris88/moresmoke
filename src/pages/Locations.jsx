import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import { locations } from "../data/locations";

export default function Locations() {
  return (
    <Layout>
      <DocumentHead
        title="Locations"
        description="Find More Smoke Cigars at select lounges and authorized retailers. Currently available in Nashville, TN at Pressed & Aged."
      />

      <PageHero
        eyebrow="Authorized Locations"
        title="Find More Smoke near you."
        text="More Smoke is intentionally placed with select lounges and retailers that match the brand experience."
      />

      <section className="section section--flush-top">
        <div className="container location-grid">
          {locations.map((loc, i) => {
            const active = loc.status === "Active Partner";
            return (
              <AnimateIn key={i} delay={i * 80}>
                <article className={`location${active ? " location--active" : ""}`}>
                  <span className={`tag${active ? " tag--solid" : " tag--muted"}`}>{loc.status}</span>
                  <p className="location-city">{loc.city}, {loc.state}</p>
                  <h2>{loc.name}</h2>
                  <p className="location-type">{loc.type}</p>
                  <p className="location-note">{loc.note}</p>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow eyebrow--on-dark">For Retailers &amp; Lounges</p>
            <h2>Want to carry More Smoke?</h2>
            <p>
              We partner with lounges, retailers, and event hosts who care about
              premium cigar culture and unforgettable customer experiences.
            </p>
          </div>
          <a href="mailto:hello@moresmoke.co?subject=Wholesale%20Inquiry" className="btn">Contact Wholesale</a>
        </div>
      </section>
    </Layout>
  );
}
