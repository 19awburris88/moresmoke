import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <NewsletterModal />

      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="logo">
          <span className="logo-more">More</span>
          <span className="logo-smoke">Smoke</span>
        </Link>

        <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cigars">Cigars</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-more">More</span>
              <span className="logo-smoke">Smoke</span>
            </Link>
            <p>Premium cigars for slow nights, sharp rooms, and unforgettable conversations.</p>
          </div>

          <div className="footer-nav">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cigars">Cigars</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/events">Events</Link>
            <Link to="/shop">Shop</Link>
          </div>

          <div className="footer-contact">
            <h4>Connect</h4>
            <a href="mailto:hello@moresmoke.co">hello@moresmoke.co</a>
            <p>Wholesale &amp; retail inquiries welcome.</p>
          </div>
        </div>

        <div className="footer-warning">
          <strong>SURGEON GENERAL WARNING:</strong> TOBACCO SMOKE INCREASES THE RISK OF LUNG CANCER AND HEART DISEASE, EVEN IN NONSMOKERS.
        </div>
      </footer>
    </>
  );
}
