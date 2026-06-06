// ============================================================
// To connect a real email service, set VITE_NEWSLETTER_ENDPOINT
// in a .env file at the project root.
//
// Options:
//   Formspree (free):  https://formspree.io → Create Form → copy endpoint
//   Mailchimp:         Use their "Embedded Form" action URL
//   ConvertKit:        Use their API endpoint
//   Square Marketing:  Use their Mailchimp integration
//
// Example .env:
//   VITE_NEWSLETTER_ENDPOINT=https://formspree.io/f/yourformid
// ============================================================

import { useState } from "react";

const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

export default function NewsletterForm({ onSuccess, compact = false }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    if (ENDPOINT) {
      try {
        await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch (_) {}
    }

    setDone(true);
    setLoading(false);
    onSuccess?.();
  };

  if (done) {
    return (
      <div className="nl-success">
        <p>You&apos;re in. Welcome to the inner circle.</p>
      </div>
    );
  }

  return (
    <form className={`nl-form${compact ? " nl-form--compact" : ""}`} onSubmit={submit}>
      <input
        type="email"
        className="nl-input"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
      />
      <button type="submit" className="btn nl-submit" disabled={loading}>
        {loading ? "…" : "Join the Circle"}
      </button>
    </form>
  );
}
