import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import AnimateIn from "../components/AnimateIn";
import SmokeOrbs from "../components/SmokeOrbs";
import NewsletterForm from "../components/NewsletterForm";
import DocumentHead from "../components/DocumentHead";
import SpotifyPlayer from "../components/SpotifyPlayer";
import SectionHeader from "../components/SectionHeader";
import StrengthMeter from "../components/StrengthMeter";
import CigarArt from "../components/CigarArt";
import { cigars } from "../data/cigars";
import { testimonials } from "../data/testimonials";
import { toSlug } from "../utils/cigar";

const HERO_BG =
  "https://images.unsplash.com/photo-1679419859523-97c0f0e8985d?auto=format&fit=crop&w=2000&q=80";
const STORY_IMG =
  "https://images.unsplash.com/photo-1679419857738-f8a7ca8c5de5?auto=format&fit=crop&w=1200&q=80";

const pillars = [
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
];

function Ticker() {
  const items = [...cigars, ...cigars];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((c, i) => (
          <span key={i} className="ticker-item">
            {c.name}
            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout overlay>
      <DocumentHead
        description="More Smoke Cigars — Premium boutique cigars for slow nights, sharp rooms, and unforgettable conversations. Shop online or find us at select lounges."
      />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <img src={HERO_BG} alt="" aria-hidden="true" className="hero-bg" loading="eager" />
        <div className="hero-shade" aria-hidden="true" />
        <SmokeOrbs />

        <div className="hero-content">
          <p className="eyebrow eyebrow--on-dark hero-eyebrow">Boutique Cigars · Since 2021</p>
          <h1 className="hero-headline">
            Built for the room <em>after</em> the room.
          </h1>
          <p className="hero-body">
            A premium cigar brand shaped by late nights, timeless conversation,
            polished taste, and the kind of smoke that turns a moment into a memory.
          </p>
          <div className="hero-actions">
            <Link to="/cigars" className="btn">Explore the Collection</Link>
            <Link to="/locations" className="btn btn--ghost-light">Find More Smoke</Link>
          </div>
        </div>

        <div className="hero-foot">
          <span>Est. 2021</span>
          <span className="hero-scroll" aria-hidden="true">Scroll</span>
          <span>{cigars.length} Signature Releases</span>
        </div>
      </section>

      <Ticker />

      {/* ── Philosophy ─────────────────────────────────── */}
      <section className="statement">
        <AnimateIn>
          <p className="eyebrow">Our Philosophy</p>
          <blockquote className="statement-quote">
            Life&apos;s best conversations happen <em>after the meeting ends.</em>
          </blockquote>
        </AnimateIn>
      </section>

      {/* ── Collection ─────────────────────────────────── */}
      <section className="section section--ash">
        <div className="container">
          <AnimateIn>
            <SectionHeader
              eyebrow="The Collection"
              title="Five releases. Every mood covered."
              action={<Link to="/cigars" className="text-link">View all cigars →</Link>}
            />
          </AnimateIn>

          <div className="collection-rail">
            {cigars.map((cigar, i) => (
              <AnimateIn key={cigar.name} delay={i * 70}>
                <Link to={`/cigars/${toSlug(cigar.name)}`} className="release-card">
                  <CigarArt cigar={cigar} className="release-card-art" />
                  <div className="release-card-body">
                    <div className="release-card-top">
                      <span className="tag">{cigar.status}</span>
                      <span className="release-card-num">0{i + 1}</span>
                    </div>
                    <h3>{cigar.name}</h3>
                    <p className="release-card-tagline">{cigar.tagline}</p>
                    <dl className="release-card-meta">
                      <div><dt>Size</dt><dd>{cigar.size}</dd></div>
                      <div><dt>Wrapper</dt><dd>{cigar.wrapper}</dd></div>
                    </dl>
                    <StrengthMeter strength={cigar.strength} />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand story ────────────────────────────────── */}
      <section className="section">
        <div className="container split">
          <AnimateIn from="left" className="split-media">
            <div className="framed-img">
              <img src={STORY_IMG} alt="A More Smoke cigar at rest" loading="lazy" />
              <span className="framed-img-caption">The More Smoke Standard</span>
            </div>
          </AnimateIn>

          <AnimateIn from="right" className="split-copy">
            <p className="eyebrow">Our Standard</p>
            <h2>Crafted for flavor, presence, and pace.</h2>
            <p className="lede">
              More Smoke cigars are designed for people who appreciate a smooth draw,
              a memorable profile, and an atmosphere worth slowing down for.
            </p>
            <p>
              Each release is intentional — blended to carry a mood, suit a moment,
              and leave an impression worth talking about.
            </p>
            <p>
              We&apos;ve been building More Smoke since 2021. After a deliberate
              pause, we&apos;re back — with a refined identity and the same
              standard in every cigar.
            </p>
            <ol className="moments">
              <li><span>01</span>Late-night conversations</li>
              <li><span>02</span>Sharp rooms, polished people</li>
              <li><span>03</span>Moments worth remembering</li>
            </ol>
            <Link to="/about" className="btn btn--outline">Read Our Story</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── Pillars ────────────────────────────────────── */}
      <section className="section section--dark">
        <SmokeOrbs />
        <div className="container">
          <AnimateIn>
            <SectionHeader
              eyebrow="Why More Smoke"
              title="Premium identity. Curated releases. Lounge ready."
            />
          </AnimateIn>
          <div className="pillars">
            {pillars.map(({ title, body }, i) => (
              <AnimateIn key={title} delay={i * 100}>
                <div className="pillar">
                  <span className="pillar-num">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <AnimateIn>
            <SectionHeader eyebrow="What People Say" title="Words from the room." align="center" />
          </AnimateIn>
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 100}>
                <figure className="testimonial">
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.title} · {t.location}</span>
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Soundtrack ─────────────────────────────────── */}
      <section className="section section--ash">
        <div className="container split split--center">
          <AnimateIn from="left" className="split-copy">
            <p className="eyebrow">The Soundtrack</p>
            <h2>Every great smoke deserves the right music.</h2>
            <p className="lede">
              The Cigar Experience Soundtrack — slow tempo, sharp sound, the kind
              of music that matches the pace of a great cigar.
            </p>
            <p>Light up, press play, and let the room breathe.</p>
          </AnimateIn>
          <AnimateIn from="right" className="split-media">
            <SpotifyPlayer />
          </AnimateIn>
        </div>
      </section>

      {/* ── Find / Wholesale ───────────────────────────── */}
      <section className="section">
        <div className="container duo">
          <AnimateIn className="duo-card">
            <p className="eyebrow">Where to Find Us</p>
            <h3>Intentionally placed.</h3>
            <p>
              Available at select lounges, premium retailers, and curated events.
              We don&apos;t go everywhere — just the right places.
            </p>
            <Link to="/locations" className="text-link">View locations →</Link>
          </AnimateIn>
          <AnimateIn delay={100} className="duo-card duo-card--dark">
            <p className="eyebrow eyebrow--on-dark">For Retailers &amp; Lounges</p>
            <h3>Carry More Smoke.</h3>
            <p>
              We partner with lounges and retailers who share our commitment to
              premium cigar culture and exceptional guest experiences.
            </p>
            <a href="mailto:hello@moresmoke.co?subject=Wholesale%20Inquiry" className="text-link text-link--on-dark">
              Contact wholesale →
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────── */}
      <section className="newsletter">
        <AnimateIn className="newsletter-inner">
          <p className="eyebrow eyebrow--on-dark">The Inner Circle</p>
          <h2>Be first to know.</h2>
          <p>
            New releases, lounge events, and exclusive drops — straight to your
            inbox. No noise. Just the good stuff.
          </p>
          <NewsletterForm dark />
        </AnimateIn>
      </section>
    </Layout>
  );
}
