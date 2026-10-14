export default function SectionHeader({ eyebrow, title, text, align = "left", action }) {
  return (
    <div className={`section-header section-header--${align}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p className="section-header-text">{text}</p>}
      </div>
      {action && <div className="section-header-action">{action}</div>}
    </div>
  );
}
