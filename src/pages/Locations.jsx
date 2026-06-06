import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
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

      <section className="locations-grid">
        {locations.map((loc, i) => (
          <article className="location-card" key={i}>
            <div className="location-card-header">
              <span className={`location-status${loc.status === "Active Partner" ? " active" : ""}`}>
                {loc.status}
              </span>
              <h2>{loc.name}</h2>
              <p className="location-city">{loc.city}, {loc.state}</p>
            </div>
            <span className="location-type">{loc.type}</span>
            <p className="location-note">{loc.note}</p>
          </article>
        ))}
      </section>

      <section className="wholesale-cta">
        <div className="wholesale-cta-inner">
          <p className="eyebrow">For Retailers &amp; Lounges</p>
          <h2>Want to carry More Smoke?</h2>
          <p>
            We partner with lounges, retailers, and event hosts who care about
            premium cigar culture and unforgettable customer experiences.
          </p>
          <a href="mailto:hello@moresmoke.co" className="btn">Contact Wholesale</a>
        </div>
      </section>
    </Layout>
  );
}
