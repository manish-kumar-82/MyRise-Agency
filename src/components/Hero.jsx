// components/Hero.jsx
import GoldText from "./GoldText";
import { COLORS, TRUST_BADGES, PLATFORMS } from "../constants";

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: "100px 5% 60px",
    }}>

      {/* ── Decorative Background ── */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "520px", height: "520px",
        border: `1px solid rgba(201,168,76,0.07)`,
        borderRadius: "50%",
        animation: "rotateSlow 30s linear infinite",
      }} />
      <div style={{
        position: "absolute", top: "22%", right: "6%",
        width: "300px", height: "300px",
        border: `1px solid rgba(201,168,76,0.12)`,
        borderRadius: "50%",
        animation: "rotateSlow 20s linear infinite reverse",
      }} />
      <div style={{
        position: "absolute", top: "32%", right: "16%",
        width: "200px", height: "200px",
        background: "radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "pulse 4s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "8%", left: "-4%",
        width: "360px", height: "360px",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* ── Content ── */}
      <div style={{ maxWidth: "740px", position: "relative", zIndex: 2 }}>

        {/* Badge */}
        <div className="fade-up" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(201,168,76,0.08)",
          border: `1px solid rgba(201,168,76,0.22)`,
          padding: "6px 18px",
          borderRadius: "2px",
          marginBottom: "36px",
        }}>
          <div style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: COLORS.gold,
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: COLORS.gold,
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            We Help Brands Rise Higher
          </span>
        </div>

        {/* Heading */}
        <h1 className="fade-up-d1" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 7.5vw, 92px)",
          fontWeight: 700,
          lineHeight: 1.04,
          marginBottom: "28px",
        }}>
          Grow Your<br />
          <GoldText>E-commerce Brand</GoldText><br />
          Across Every Platform
        </h1>
          {/* Subtitle */}
          <p className="fade-up-d2" style={{
            fontSize: "15px",
            lineHeight: 1.85,
            color: COLORS.gray,
            fontWeight: 300,
            maxWidth: "520px",
            marginBottom: "48px",
            letterSpacing: "0.02em",
          }}>
            We connect brands with genuine buyers who purchase your products
            and share real, honest reviews — boosting your ratings, visibility,
            and organic sales across Amazon, Flipkart, Myntra, and Meesho.
          </p>

          {/* CTAs */}
          <div className="hero-btns fade-up-d3" style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}>
            <a href="#contact" style={{
              background: `linear-gradient(135deg, ${COLORS.goldDark} 0%, ${COLORS.goldLight} 100%)`,
              color: COLORS.black,
              padding: "15px 36px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              boxShadow: `0 8px 30px rgba(201,168,76,0.28)`,
              transition: "transform 0.3s, box-shadow 0.3s",
              display: "inline-block",
            }}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 14px 40px rgba(201,168,76,0.42)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 30px rgba(201,168,76,0.28)";
              }}
            >
              Start Growing →
            </a>

            <a href="#services" style={{
              color: COLORS.gold,
              padding: "15px 36px",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: `1px solid rgba(201,168,76,0.3)`,
              borderRadius: "2px",
              transition: "all 0.3s",
              display: "inline-block",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                e.currentTarget.style.borderColor = COLORS.gold;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
              }}
            >
              Our Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero-badges fade-up-d4" style={{
            display: "flex",
            gap: "28px",
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
          }}>
            {TRUST_BADGES.map(label => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: COLORS.gold, fontSize: "14px", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: "12px", color: COLORS.gray, letterSpacing: "0.05em" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Platform badges */}
          <div style={{ display: "flex", gap: "16px", marginTop: "28px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "11px", color: COLORS.gray, letterSpacing: "0.1em" }}>WE WORK ACROSS:</span>
            {PLATFORMS.map(p => (
              <span key={p} style={{
                fontSize: "12px", color: COLORS.goldLight, fontWeight: 500,
                border: `1px solid rgba(201,168,76,0.25)`, padding: "4px 12px",
                borderRadius: "2px", letterSpacing: "0.03em",
              }}>{p}</span>
            ))}
          </div>
      </div>
    </section>
  );
}
