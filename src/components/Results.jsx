// components/Results.jsx
import { COLORS } from "../constants";
import SectionHeader from "./SectionHeader";
import GoldText from "./GoldText";

export default function Results() {
  return (
    <section id="results-proof" style={{ padding: "120px 5%", background: COLORS.black, position: "relative" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader label="Proof Of Work" titleLine1="Real Brands, " titleLine2="Real Growth" center />

        <div style={{
          background: COLORS.dark2,
          border: `1px solid rgba(201,168,76,0.15)`,
          borderRadius: "2px",
          padding: "48px 40px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: COLORS.gold, textTransform: "uppercase", marginBottom: "16px" }}>
            Cosmetics Brand
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: COLORS.white, maxWidth: "600px", margin: "0 auto 24px", fontWeight: 300 }}>
            We helped a cosmetics brand on Amazon, Flipkart, Myntra & Meesho improve their <GoldText>product reviews</GoldText> and overall <GoldText>listing visibility</GoldText> through our genuine buyer network — resulting in noticeably higher engagement and trust on their listing.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", marginTop: "32px" }}>
            <Stat label="Reviews" value="Improved" />
            <Stat label="Visibility" value="Increased" />
            <Stat label="Category" value="Cosmetics" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700 }}>
        <GoldText>{value}</GoldText>
      </div>
      <div style={{ fontSize: "11px", color: COLORS.gray, letterSpacing: "0.1em", marginTop: "4px", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}