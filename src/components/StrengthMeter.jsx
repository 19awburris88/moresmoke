import { strengthLevel } from "../utils/cigar";

export default function StrengthMeter({ strength, dark = false }) {
  const level = strengthLevel(strength);

  return (
    <div
      className={`strength${dark ? " strength--dark" : ""}`}
      role="img"
      aria-label={`Strength: ${strength}`}
    >
      <span className="strength-bars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= level ? "on" : ""} />
        ))}
      </span>
      <span className="strength-label">{strength}</span>
    </div>
  );
}
