export default function CigarArt({ cigar, className = "", eager = false }) {
  if (cigar.img) {
    return (
      <div className={`cigar-art ${className}`}>
        <img src={cigar.img} alt={`${cigar.name} band art`} loading={eager ? "eager" : "lazy"} />
      </div>
    );
  }

  return (
    <div className={`cigar-art cigar-art--placeholder ${className}`} aria-label={cigar.name}>
      <span className="cigar-art-name">{cigar.name}</span>
      <span className="cigar-art-sub">More Smoke</span>
    </div>
  );
}
