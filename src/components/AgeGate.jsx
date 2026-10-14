import { useState, useEffect } from "react";
import logoLight from "../assets/brand/logo-light.png";

export default function AgeGate() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("moreSmokeAgeVerified")
  );

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
  }, [visible]);

  const enter = () => {
    localStorage.setItem("moreSmokeAgeVerified", "true");
    setVisible(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-card">
        <img src={logoLight} alt="More Smoke Cigars" className="age-logo" />
        <span className="age-rule" aria-hidden="true" />
        <h1 id="age-title" className="age-title">Are you 21 or older?</h1>
        <p className="age-text">
          This site contains information about premium tobacco products.
          You must be of legal smoking age to enter.
        </p>
        <div className="age-actions">
          <button className="btn" onClick={enter}>Yes, I&apos;m 21+</button>
          <button className="btn btn--ghost-light" onClick={leave}>No, Exit</button>
        </div>
        <p className="age-disclaimer">
          By entering, you confirm you are of legal smoking age in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
