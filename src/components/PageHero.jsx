export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {text && <p className="page-hero-text">{text}</p>}
    </section>
  );
}
