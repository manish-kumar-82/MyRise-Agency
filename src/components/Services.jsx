// components/Services.jsx
import { COLORS, SERVICES } from "../constants";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="services" style={{
      padding: "120px 5%",
      background: COLORS.dark,
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="section-divider" />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader label="What We Do" titleLine1="Services Built for" titleLine2="Amazon, Flipkart, Myntra & Meesho Growth" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2px",
        }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const { icon, title, desc } = service;

  return (
    <div
      style={{
        background: COLORS.dark2,
        padding: "44px 32px 60px",
        borderTop: "2px solid transparent",
        transition: "all 0.4s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderTopColor = COLORS.gold;
        e.currentTarget.style.background = "#1a1a1a";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderTopColor = "transparent";
        e.currentTarget.style.background = COLORS.dark2;
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "38px",
        color: COLORS.gold,
        marginBottom: "24px",
        lineHeight: 1,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: "16px",
        fontWeight: 600,
        letterSpacing: "0.05em",
        marginBottom: "14px",
        color: COLORS.white,
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "13px", lineHeight: 1.85, color: COLORS.gray, fontWeight: 300 }}>
        {desc}
      </p>
      <div style={{
        position: "absolute",
        bottom: "28px", left: "32px",
        fontSize: "11px",
        color: COLORS.gold,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>
        Learn more →
      </div>
    </div>
  );
}
