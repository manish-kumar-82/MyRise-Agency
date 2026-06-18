// components/WhyUs.jsx
import { COLORS, REASONS } from "../constants";
import SectionHeader from "./SectionHeader";
import GoldText from "./GoldText";

export default function WhyUs() {
  return (
    <section id="results" style={{
      padding: "120px 5%",
      background: COLORS.dark,
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="section-divider" />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader label="Why MyRise" titleLine1="Why Brands " titleLine2="Trust Us" />

        {/* Reason Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginBottom: "48px",
        }}>
          {REASONS.map((r, i) => (
            <ReasonCard key={i} reason={r} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" style={{
          padding: "44px 52px",
          background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
          border: `1px solid rgba(201,168,76,0.2)`,
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "28px",
          flexWrap: "wrap",
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 700,
              marginBottom: "10px",
            }}>
              Ready to <GoldText>Grow Your Brand?</GoldText>
            </h3>
            <p style={{ fontSize: "13px", color: COLORS.gray }}>
              Reach out today — let's discuss your product and build a plan together.
            </p>
          </div>
          <a href="#contact" style={{
            background: `linear-gradient(135deg, ${COLORS.goldDark}, ${COLORS.goldLight})`,
            color: COLORS.black,
            padding: "15px 34px",
            borderRadius: "2px",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "opacity 0.3s",
          }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }) {
  const { icon, title, desc } = reason;

  return (
    <div
      style={{
        background: COLORS.black,
        border: `1px solid rgba(201,168,76,0.1)`,
        borderRadius: "2px",
        padding: "40px 32px",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.38)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "34px",
        color: COLORS.gold,
        marginBottom: "20px",
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: "15px",
        fontWeight: 600,
        color: COLORS.white,
        marginBottom: "12px",
        letterSpacing: "0.03em",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "13px", lineHeight: 1.85, color: COLORS.gray, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}
