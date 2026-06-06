import { useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ms-nl-seen")) return;
    const t = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("ms-nl-seen", "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="nl-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Join the More Smoke inner circle"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="nl-modal">
        <button className="nl-close" onClick={dismiss} aria-label="Close">&#215;</button>

        <p className="nl-brand">More Smoke</p>
        <h2 className="nl-headline">The Inner Circle.</h2>
        <p className="nl-body">
          New releases, exclusive drops, and lounge events — straight to your
          inbox before anyone else hears about them.
        </p>

        <NewsletterForm onSuccess={dismiss} />

        <button className="nl-skip" onClick={dismiss}>No thanks</button>
      </div>
    </div>
  );
}
