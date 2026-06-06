import { useState, useEffect } from "react";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("moreSmokeAgeVerified")) {
      setVisible(true);
    }
  }, []);

  const enter = () => {
    localStorage.setItem("moreSmokeAgeVerified", "true");
    setVisible(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div className="age-gate">
      <div className="age-card">
        <div className="age-brand">More Smoke</div>
        <h1 className="age-title">Are you 21 or older?</h1>
        <p className="age-text">
          This site contains information about premium tobacco products.
          You must be 21 years of age or older to enter.
        </p>
        <div className="age-actions">
          <button className="btn" onClick={enter}>Yes, I&apos;m 21+</button>
          <button className="btn ghost" onClick={leave}>No, Exit</button>
        </div>
        <p className="age-disclaimer">
          By entering, you confirm you are of legal smoking age in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
