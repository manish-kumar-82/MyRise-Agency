// components/HowItWorks.jsx
import { COLORS, STEPS } from "../constants";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="about" style={{
      padding: "120px 5%",
      background: COLORS.black,
      position: "relative",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader label="The Process" titleLine1="How It " titleLine2="Works" />

        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, isLast }) {
  const { num, title, desc } = step;

  return (
    <div style={{ position: "relative", padding: "0 32px 0 0" }}>
      {/* Connector line */}
      {!isLast && (
        <div style={{
          position: "absolute", top: "28px", right: "0",
          width: "32px", height: "1px",
          background: `linear-gradient(90deg, ${COLORS.gold}, transparent)`,
        }} />
      )}

      {/* Number */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "64px",
        fontWeight: 700,
        lineHeight: 1,
        background: "linear-gradient(180deg, rgba(201,168,76,0.18) 0%, transparent 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "16px",
      }}>
        {num}
      </div>

      {/* Gold line */}
      <div style={{
        width: "32px", height: "2px",
        background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldDark})`,
        marginBottom: "20px",
      }} />

      <h3 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: COLORS.white }}>
        {title}
      </h3>
      <p style={{ fontSize: "13px", lineHeight: 1.85, color: COLORS.gray, fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}
