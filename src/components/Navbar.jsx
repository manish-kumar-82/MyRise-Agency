// components/Navbar.jsx
import { useState, useEffect } from "react";
import { COLORS, NAV_ITEMS } from "../constants";
import LOGO_URL from "../assets/logo";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (item) => ({
    color: active === item ? COLORS.gold : COLORS.gray,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.15em",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "color 0.3s",
    cursor: "pointer",
  });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? `1px solid rgba(201,168,76,0.18)` : "none",
      transition: "all 0.4s ease",
      padding: "0 5%",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "72px",
    }}>

      {/* Logo */}
      <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img src={LOGO_URL} alt="MyRise Agency" style={{ height: "48px", width: "auto", objectFit: "contain" }} />
      </a>

      {/* Desktop Nav */}
      <div className="desktop-nav" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {NAV_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            style={navLink(item)}
            onMouseEnter={e => e.target.style.color = COLORS.goldLight}
            onMouseLeave={e => e.target.style.color = active === item ? COLORS.gold : COLORS.gray}
          >
            {item}
          </a>
        ))}
        <a href="#contact" style={{
          background: `linear-gradient(135deg, ${COLORS.goldDark}, ${COLORS.goldLight})`,
          color: COLORS.black,
          padding: "9px 22px",
          borderRadius: "2px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "opacity 0.3s",
        }}
          onMouseEnter={e => e.target.style.opacity = "0.85"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          Get Started
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: `1px solid rgba(201,168,76,0.3)`,
          cursor: "pointer",
          padding: "8px",
          borderRadius: "2px",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{ display: "block", width: "22px", height: "1.5px", background: COLORS.gold }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: "fixed", top: "72px", left: 0, right: 0,
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(201,168,76,0.15)`,
          flexDirection: "column",
          padding: "20px 5%",
          gap: "0",
          zIndex: 99,
        }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => { setActive(item); setMenuOpen(false); }}
              style={{
                color: active === item ? COLORS.gold : COLORS.white,
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "14px 0",
                borderBottom: `1px solid rgba(255,255,255,0.05)`,
                display: "block",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              background: `linear-gradient(135deg, ${COLORS.goldDark}, ${COLORS.goldLight})`,
              color: COLORS.black,
              padding: "14px 24px",
              borderRadius: "2px",
              marginTop: "16px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
