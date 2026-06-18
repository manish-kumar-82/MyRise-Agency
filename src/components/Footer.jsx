// components/Footer.jsx
import { COLORS, CONTACT } from "../constants";
import LOGO_URL from "../assets/logo";

const footerLinks = ["Services", "Results", "Contact"];
const LINKEDIN = "https://www.linkedin.com/company/my-rise-agency/";

export default function Footer() {
  return (
    <footer style={{
      background: COLORS.dark,
      borderTop: `1px solid rgba(201,168,76,0.12)`,
      padding: "36px 5%",
    }}>
      <div className="footer-inner" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}>

        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <img src={LOGO_URL} alt="MyRise Agency" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        </a>

        {/* Copyright */}
        <div style={{ fontSize: "12px", color: COLORS.gray, letterSpacing: "0.05em" }}>
          © 2026 MyRise Agency &nbsp;·&nbsp; We Help Brands Rise Higher
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "24px" }}>
          {footerLinks.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: COLORS.gray,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => e.target.style.color = COLORS.gold}
              onMouseLeave={e => e.target.style.color = COLORS.gray}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom micro row */}
      <div style={{
        marginTop: "24px",
        paddingTop: "20px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}>
        <a href={`mailto:${CONTACT.email}`} style={{ color: "#555", fontSize: "11px", textDecoration: "none" }}>
          {CONTACT.email}
        </a>
        <a href={`https://wa.me/${CONTACT.whatsapp}`} style={{ color: "#555", fontSize: "11px", textDecoration: "none" }}>
          {CONTACT.whatsappDisplay}
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: "#555", fontSize: "11px", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
