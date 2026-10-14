import Layout from "../components/Layout";
import NewsletterForm from "../components/NewsletterForm";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";
import DocumentHead from "../components/DocumentHead";
import { events } from "../data/events";

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return {
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    weekday: d.toLocaleString("en-US", { weekday: "short" }).toUpperCase(),
    day: String(day).padStart(2, "0"),
    year,
  };
}

function EventCard({ event, past = false }) {
  const { month, weekday, day, year } = parseDate(event.date);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'd like to RSVP for: ${event.name}\nDate: ${event.date}\nVenue: ${event.venue}, ${event.address}\n\nPlease let me know next steps.\n\nThanks`
  );
  const rsvpHref =
    event.rsvpUrl ??
    `mailto:hello@moresmoke.co?subject=${encodeURIComponent("RSVP: " + event.name)}&body=${emailBody}`;

  return (
    <article
      className={`event${event.featured ? " event--featured" : ""}${past ? " event--past" : ""}`}
    >
      <div className="event-date">
        <span className="event-month">{month} {year}</span>
        <span className="event-day">{day}</span>
        <span className="event-weekday">{weekday}</span>
      </div>

      <div className="event-body">
        <div className="event-tags">
          <span className="tag">{event.type}</span>
          {event.featured && !past && <span className="tag tag--solid">Featured</span>}
        </div>
        <h2>{event.name}</h2>
        <p className="event-meta">
          {event.venue} · {event.address}
          {event.time && <> · {event.time}</>}
        </p>
        <p className="event-desc">{event.description}</p>
      </div>

      {!past && (
        <div className="event-action">
          <a
            href={rsvpHref}
            className="btn btn--outline"
            {...(event.rsvpUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {event.rsvpUrl ? "Get Tickets" : "RSVP"}
          </a>
        </div>
      )}
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

      <section className="section section--flush-top">
        <div className="container">
          {events.length === 0 && (
            <div className="notice">
              <div>
                <p className="eyebrow">On the Calendar</p>
                <h2>New dates are coming soon.</h2>
                <p>Join the Inner Circle and get the invite before anyone else.</p>
              </div>
              <NewsletterForm compact />
            </div>
          )}

          {upcoming.length > 0 && (
            <>
              <h2 className="list-label">Upcoming</h2>
              <div className="events">
                {upcoming.map((event, i) => (
                  <AnimateIn key={event.id} delay={i * 80}>
                    <EventCard event={event} />
                  </AnimateIn>
                ))}
              </div>
            </>
          )}

          {past.length > 0 && (
            <>
              <h2 className="list-label">Past Events</h2>
              <div className="events">
                {past.map((event, i) => (
                  <AnimateIn key={event.id} delay={i * 80}>
                    <EventCard event={event} past />
                  </AnimateIn>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <p className="eyebrow eyebrow--on-dark">Host an Event</p>
            <h2>Bring More Smoke to your venue.</h2>
            <p>
              We partner with lounges, private clubs, and curated event hosts who
              understand that the right atmosphere makes all the difference.
            </p>
          </div>
          <a href="mailto:hello@moresmoke.co?subject=Event%20Partnership%20Inquiry" className="btn">
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}
