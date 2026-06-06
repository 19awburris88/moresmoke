import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import AnimateIn from "../components/AnimateIn";
import SmokeOrbs from "../components/SmokeOrbs";
import DocumentHead from "../components/DocumentHead";

const HERO_IMG =
  "https://images.unsplash.com/photo-1679419859523-97c0f0e8985d?auto=format&fit=crop&w=1920&q=80";

const values = [
  {
    title: "Intentionality",
    body: "Nothing about More Smoke is accidental. Every name, every blend, every partnership is chosen with purpose and placed with precision.",
  },
  {
    title: "Brotherhood",
    body: "Cigars have always been about sharing space with the right people. More Smoke is built around that bond — the table, the moment, the people in the room.",
  },
  {
    title: "Excellence",
    body: "Premium isn't a price point. It's a commitment to doing things the right way — from the blend to the burn to the experience you walk away with.",
  },
  {
    title: "Authenticity",
    body: "This brand came from real experiences and real conversations. That's what makes it different. That's what makes it last.",
  },
];

export default function About() {
  return (
    <Layout>
      <DocumentHead
        title="About"
        description="More Smoke was founded by entrepreneur Austin Burris — built for the conversations that happen after the meeting ends."
      />

      {/* Hero */}
      <section className="about-hero">
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          className="about-hero-bg"
          loading="eager"
        />
        <SmokeOrbs />
        <div className="about-hero-content">
          <p className="eyebrow about-hero-eyebrow">The Founder</p>
          <h1>Built from real conversations.</h1>
          <p className="about-hero-sub">
            More Smoke isn&apos;t just a cigar brand. It&apos;s a statement about
            how the best things in life deserve your full attention.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="about-section">
        <div className="about-section-inner">
          <AnimateIn from="left" className="about-section-label">
            <p className="eyebrow">The Origin</p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="about-section-body">
              <h2>Every brand has a moment. This one had a conversation.</h2>
              <p>
                More Smoke was founded by entrepreneur Austin Burris in the space
                where every great idea eventually gets refined — the quiet hours
                after the meeting ends. When the agenda is put away, the handshakes
                are done, and the real talking begins.
              </p>
              <p>
                Austin spent years building businesses, sitting across tables from
                investors, partners, mentors, and peers. And he noticed something
                consistent: the conversations that actually moved the needle
                weren&apos;t the ones in the conference room. They were the ones
                that happened after, with a good drink in one hand and a premium
                cigar in the other.
              </p>
              <p>
                More Smoke is the brand that was always supposed to exist for those
                moments. It just needed someone willing to build it.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="about-philosophy">
        <SmokeOrbs />
        <AnimateIn>
          <blockquote className="about-quote">
            <span className="philosophy-mark">&ldquo;</span>
            Life&apos;s best conversations happen after the meeting ends.
            <span className="philosophy-mark">&rdquo;</span>
          </blockquote>
          <cite>— Austin Burris, Founder of More Smoke</cite>
        </AnimateIn>
      </section>

      {/* The Brand */}
      <section className="about-section about-section--dark">
        <div className="about-section-inner">
          <AnimateIn from="right" className="about-section-label">
            <p className="eyebrow">The Brand</p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="about-section-body">
              <h2>Premium isn&apos;t a price point. It&apos;s a standard.</h2>
              <p>
                Every cigar in the More Smoke portfolio is intentional. Every name
                carries meaning. Every blend is chosen to create a specific
                experience — not just a smoke, but a moment you&apos;ll remember
                long after the ash falls.
              </p>
              <p>
                More Smoke isn&apos;t built to compete with every brand on the
                shelf. It&apos;s built for a specific kind of person: the
                entrepreneur who earned the quiet night, the connector who knows
                how to hold a room, the individual who understands that
                life&apos;s best things are worth taking your time with.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <AnimateIn>
          <p className="eyebrow">What We Stand For</p>
          <h2>The pillars behind the brand.</h2>
        </AnimateIn>
        <div className="about-values-grid">
          {values.map(({ title, body }, i) => (
            <AnimateIn key={title} delay={i * 90}>
              <div className="about-value-card">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="about-section">
        <div className="about-section-inner">
          <AnimateIn from="left" className="about-section-label">
            <p className="eyebrow">The Vision</p>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="about-section-body">
              <h2>One lounge at a time. One conversation at a time.</h2>
              <p>
                What started as a boutique collection is growing into a recognized
                name in the premium cigar world — placed intentionally in the right
                lounges, at the right events, in the right hands.
              </p>
              <p>
                The vision for More Smoke is to become the brand that entrepreneurs
                and leaders reach for when the moment calls for something
                exceptional. Not because it&apos;s the most famous name in the
                room. Because it&apos;s the most intentional one.
              </p>
              <div className="about-cta-row">
                <Link to="/cigars" className="btn">Explore the Collection</Link>
                <Link to="/locations" className="btn ghost">Find More Smoke</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
}
