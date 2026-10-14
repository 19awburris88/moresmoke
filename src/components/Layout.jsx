import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";
import wordmarkDark from "../assets/brand/wordmark-dark.png";
import wordmarkLight from "../assets/brand/wordmark-light.png";
import logoLight from "../assets/brand/logo-light.png";

const NAV = [
  { to: "/cigars",    label: "Cigars"    },
  { to: "/shop",      label: "Shop"      },
  { to: "/events",    label: "Events"    },
  { to: "/locations", label: "Locations" },
  { to: "/about",     label: "Our Story" },
];

// `overlay` lets the header sit transparently on top of a dark hero
// until the user scrolls.
export default function Layout({ children, overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu on navigation (state reset during render, not in an effect).
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onDark = (overlay && !scrolled) || menuOpen;

  return (
    <>
      <NewsletterModal />

      <header
        className={[
          "site-header",
          scrolled && "is-scrolled",
          onDark && "is-on-dark",
          menuOpen && "is-menu-open",
        ].filter(Boolean).join(" ")}
      >
        <div className="announce">
          <p>
            <span className="announce-extra">Est. 2021 — </span>
            More Smoke is back.
            <span className="announce-extra"> The collection returns soon.</span>{" "}
            <Link to="/shop">Be first in line&nbsp;→</Link>
          </p>
        </div>

        <div className="header-bar">
          <Link to="/" className="header-logo" aria-label="More Smoke Cigars — Home">
            <img src={onDark ? wordmarkLight : wordmarkDark} alt="More Smoke" />
          </Link>

          <nav className={`main-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
            <a href="mailto:hello@moresmoke.co?subject=Wholesale%20Inquiry" className="main-nav-extra">
              Wholesale
            </a>
          </nav>

          <div className="header-actions">
            <Link to="/shop" className="btn btn--sm header-cta">Shop Now</Link>
            <button
              className={`menu-toggle${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main className={overlay ? "main--overlay" : "main--offset"}>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="More Smoke Cigars — Home">
              <img src={logoLight} alt="More Smoke Cigars" className="footer-logo" />
            </Link>
            <p>
              Premium cigars for slow nights, sharp rooms, and the conversations
              that happen after the meeting ends.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/cigars">The Collection</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/events">Events</Link>
              <Link to="/locations">Locations</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">Our Story</Link>
              <a href="mailto:hello@moresmoke.co?subject=Wholesale%20Inquiry">Wholesale</a>
              <a href="mailto:hello@moresmoke.co?subject=Event%20Partnership%20Inquiry">Host an Event</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:hello@moresmoke.co">hello@moresmoke.co</a>
              <p>Wholesale &amp; retail inquiries welcome.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2021–{new Date().getFullYear()} More Smoke Cigars. All rights reserved.</p>
          <p>For adults 21+ only. Please smoke responsibly.</p>
        </div>

        <div className="footer-warning">
          <strong>SURGEON GENERAL WARNING:</strong> Tobacco smoke increases the risk of
          lung cancer and heart disease, even in nonsmokers.
        </div>
      </footer>
    </>
  );
}
