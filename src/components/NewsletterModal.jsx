import { useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";
import wordmarkDark from "../assets/brand/wordmark-dark.png";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("ms-nl-seen")) return;
    const t = setTimeout(() => {
      // Don't stack on top of the age gate.
      if (localStorage.getItem("moreSmokeAgeVerified")) setOpen(true);
    }, 12000);
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

        <img src={wordmarkDark} alt="More Smoke" className="nl-logo" />
        <p className="eyebrow">The Inner Circle</p>
        <h2 className="nl-headline">First light goes to the list.</h2>
        <p className="nl-body">
          New releases, private drops, and lounge events — straight to your
          inbox before anyone else hears about them.
        </p>

        <NewsletterForm onSuccess={dismiss} />

        <button className="nl-skip" onClick={dismiss}>No thanks</button>
      </div>
    </div>
  );
}
