import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import { events } from "../data/events";

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    day: String(day).padStart(2, "0"),
    year,
  };
}

function EventCard({ event, past = false }) {
  const { month, day, year } = parseDate(event.date);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'd like to RSVP for: ${event.name}\nDate: ${event.date}\nVenue: ${event.venue}, ${event.address}\n\nPlease let me know next steps.\n\nThanks`
  );
  const rsvpHref =
    event.rsvpUrl ??
    `mailto:hello@moresmoke.co?subject=${encodeURIComponent("RSVP: " + event.name)}&body=${emailBody}`;

  return (
    <article
      className={`event-card${event.featured ? " event-card--featured" : ""}${past ? " event-card--past" : ""}`}
    >
      <div className="event-date-block">
        <span className="event-month">{month}</span>
        <span className="event-day">{day}</span>
        <span className="event-year">{year}</span>
      </div>

      <div className="event-content">
        <h2>{event.name}</h2>

        <div className="event-meta-row">
          <span>{event.venue} · {event.address}</span>
          {event.time && <span>{event.time}</span>}
        </div>

        <div className="event-badges">
          <span className="event-type-badge">{event.type}</span>
          <span className={`event-status-badge event-status-badge--${event.status}`}>
            {event.status === "upcoming" ? "Upcoming" : "Past Event"}
          </span>
        </div>

        <p className="event-description">{event.description}</p>

        {!past && (
          <a
            href={rsvpHref}
            className="btn ghost"
            {...(event.rsvpUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {event.rsvpUrl ? "Get Tickets" : "RSVP by Email"}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Events() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <Layout>
      <DocumentHead
        title="Events"
        description="Catch More Smoke at lounge nights, private releases, and curated gatherings. Limited seating. Serious atmosphere."
      />

      <PageHero
        eyebrow="Live Events"
        title="Show up. Slow down."
        text="Lounge nights, private releases, and curated gatherings. The kind of events worth clearing your calendar for."
      />

      {upcoming.length > 0 && (
        <section className="events-list">
          {upcoming.map((event, i) => (
            <AnimateIn key={event.id} delay={i * 80}>
              <EventCard event={event} />
            </AnimateIn>
          ))}
        </section>
      )}

      {past.length > 0 && (
        <>
          <div className="events-section-label">
            <p>Past Events</p>
          </div>
          <section className="events-list events-list--past">
            {past.map((event, i) => (
              <AnimateIn key={event.id} delay={i * 80}>
                <EventCard event={event} past />
              </AnimateIn>
            ))}
          </section>
        </>
      )}

      <section className="events-host-cta">
        <AnimateIn className="events-host-cta-inner">
          <p className="eyebrow">Host an Event</p>
          <h2>Want to bring More Smoke to your venue?</h2>
          <p>
            We partner with lounges, private clubs, and curated event hosts who
            understand that the right atmosphere makes all the difference.
            Reach out and let&apos;s make it happen.
          </p>
          <a
            href="mailto:hello@moresmoke.co?subject=Event%20Partnership%20Inquiry"
            className="btn"
          >
            Get in Touch
          </a>
        </AnimateIn>
      </section>
    </Layout>
  );
}
