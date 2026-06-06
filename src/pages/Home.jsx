import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import AnimateIn from "../components/AnimateIn";
import SmokeOrbs from "../components/SmokeOrbs";
import NewsletterForm from "../components/NewsletterForm";
import DocumentHead from "../components/DocumentHead";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { cigars } from "../data/cigars";
import { testimonials } from "../data/testimonials";

const HERO_BG =
  "https://images.unsplash.com/photo-1679419859523-97c0f0e8985d?auto=format&fit=crop&w=1920&q=80";
const STORY_IMG =
  "https://images.unsplash.com/photo-1679419857738-f8a7ca8c5de5?auto=format&fit=crop&w=1200&q=80";

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Home() {
  return (
    <Layout>
      <DocumentHead
        description="More Smoke Cigars — Premium boutique cigars for slow nights, sharp rooms, and unforgettable conversations. Shop online or find us at select lounges."
      />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <img src={HERO_BG} alt="" aria-hidden="true" className="hero-bg" loading="eager" />
        <SmokeOrbs />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Boutique Cigars. Elevated Moments.</p>
          <h1 className="hero-headline">
            More Smoke is built for the room after the room.
          </h1>
          <p className="hero-body">
            A premium cigar brand shaped by late nights, timeless conversation,
            polished taste, and the kind of smoke that turns a moment into a memory.
          </p>
          <div className="hero-actions">
            <Link to="/cigars" className="btn">Explore Releases</Link>
            <Link to="/locations" className="btn ghost">Find More Smoke</Link>
          </div>
        </div>

      </section>

      {/* ── Philosophy ─────────────────────────────────── */}
      <section className="philosophy-band">
        <AnimateIn>
          <blockquote>
            <span className="philosophy-mark">&ldquo;</span>
            Life&apos;s best conversations happen after the meeting ends.
            <span className="philosophy-mark">&rdquo;</span>
          </blockquote>
          <cite>— More Smoke Cigars</cite>
        </AnimateIn>
      </section>

      {/* ── Brand story ────────────────────────────────── */}
      <section className="brand-story">
        <AnimateIn from="left" className="brand-story-text">
          <p className="eyebrow">Our Standard</p>
          <h2>Crafted for flavor, presence, and pace.</h2>
          <p>
            More Smoke cigars are designed for people who appreciate a smooth draw,
            a memorable profile, and an atmosphere worth slowing down for.
          </p>
          <p>
            Each release is intentional — blended to carry a mood, suit a moment,
            and leave an impression worth talking about.
          </p>
          <Link to="/cigars" className="btn ghost">View All Releases</Link>
        </AnimateIn>

        <AnimateIn from="right" className="brand-story-atmosphere">
          <div className="brand-story-img-wrap">
            <img src={STORY_IMG} alt="More Smoke lounge" loading="lazy" />
          </div>
          <div className="atmosphere-card">
            <span className="atmosphere-number">01</span>
            <p>Late-night conversations</p>
          </div>
          <div className="atmosphere-card">
            <span className="atmosphere-number">02</span>
            <p>Sharp rooms, polished people</p>
          </div>
          <div className="atmosphere-card">
            <span className="atmosphere-number">03</span>
            <p>Moments worth remembering</p>
          </div>
        </AnimateIn>
      </section>

      {/* ── Pillars ────────────────────────────────────── */}
      <section className="pillars">
        <AnimateIn className="pillars-header">
          <p className="eyebrow">Why More Smoke</p>
          <h2>Premium identity. Curated releases. Lounge ready.</h2>
        </AnimateIn>
        <div className="pillars-grid">
          {[
            {
              title: "Premium Identity",
              body: "Modern cigar culture with luxury, edge, and personality. Built for a generation that demands more from every experience.",
            },
            {
              title: "Curated Releases",
              body: "Each cigar carries its own story, profile, strength, and mood. Nothing by accident. Everything with intention.",
            },
            {
              title: "Lounge Ready",
              body: "Built for humidors, events, pairings, and premium retail partners who care about culture and experience above all else.",
            },
          ].map(({ title, body }, i) => (
            <AnimateIn key={title} delay={i * 100}>
              <div className="pillar-card">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Portfolio preview ───────────────────────────── */}
      <section className="portfolio-preview">
        <AnimateIn className="portfolio-header">
          <p className="eyebrow">The Collection</p>
          <h2>Five releases. Every mood covered.</h2>
        </AnimateIn>
        <div className="portfolio-scroll">
          {cigars.map((cigar, i) => (
            <AnimateIn key={cigar.name} delay={i * 80}>
              <Link to={`/cigars/${toSlug(cigar.name)}`} className="portfolio-card">
                {cigar.img && (
                  <div className="portfolio-thumb">
                    <img
                      src={cigar.img.replace("w=800", "w=400")}
                      alt={cigar.name}
                      loading="lazy"
                    />
                  </div>
                )}
                <span className="portfolio-status">{cigar.status}</span>
                <h3>{cigar.name}</h3>
                <p>{cigar.tagline}</p>
                <div className="portfolio-strength">
                  <span>{cigar.strength}</span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn className="portfolio-cta">
          <Link to="/cigars" className="btn">View Full Portfolio</Link>
        </AnimateIn>
      </section>

      {/* ── Testimonials ───────────────────────────────── */}
      <section className="testimonials-section">
        <AnimateIn className="testimonials-header">
          <p className="eyebrow">What People Say</p>
          <h2>Words from the room.</h2>
        </AnimateIn>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 100}>
              <div className="testimonial-card">
                <span className="testimonial-mark">&ldquo;</span>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-meta">{t.title} · {t.location}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ── Soundtrack ─────────────────────────────────── */}
      <section className="soundtrack-section">
        <div className="soundtrack-inner">
          <AnimateIn from="left" className="soundtrack-text">
            <p className="eyebrow">The Soundtrack</p>
            <h2>Every great smoke deserves the right music.</h2>
            <p>
              We curated the Cigar Experience Soundtrack — slow tempo, sharp
              sound, the kind of music that matches the pace of a great cigar.
              Light up, press play, and let the room breathe.
            </p>
          </AnimateIn>
          <AnimateIn from="right" className="soundtrack-player">
            <SpotifyPlayer />
          </AnimateIn>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────── */}
      <section className="newsletter-section">
        <AnimateIn>
          <p className="eyebrow">The Inner Circle</p>
          <h2>Be first to know.</h2>
          <p>
            New releases, lounge events, and exclusive drops — straight to your
            inbox. No noise. Just the good stuff.
          </p>
          <NewsletterForm />
        </AnimateIn>
      </section>

      {/* ── Locations teaser ───────────────────────────── */}
      <section className="locations-teaser">
        <AnimateIn className="locations-teaser-inner">
          <p className="eyebrow">Where to Find Us</p>
          <h2>More Smoke is intentionally placed.</h2>
          <p>
            Available at select lounges, premium retailers, and curated events.
            We don&apos;t go everywhere — just the right places.
          </p>
          <Link to="/locations" className="btn">Find More Smoke</Link>
        </AnimateIn>
      </section>

      {/* ── Wholesale CTA ──────────────────────────────── */}
      <section className="wholesale-cta">
        <AnimateIn className="wholesale-cta-inner">
          <p className="eyebrow">For Retailers &amp; Lounges</p>
          <h2>Want to carry More Smoke?</h2>
          <p>
            We partner with lounges and retailers who share our commitment to
            premium cigar culture and exceptional guest experiences.
          </p>
          <a href="mailto:hello@moresmoke.co" className="btn">Contact Wholesale</a>
        </AnimateIn>
      </section>
    </Layout>
  );
}
