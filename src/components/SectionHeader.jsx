// components/SectionHeader.jsx
// Reusable section label + heading block

import GoldText from "./GoldText";
import { COLORS } from "../constants";

export default function SectionHeader({ label, titleLine1, titleLine2, center = false }) {
  return (
    <div style={{ marginBottom: "70px", textAlign: center ? "center" : "left" }}>
      {/* Label row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        gap: "12px",
        marginBottom: "20px",
      }}>
        {!center && <div style={{ width: "30px", height: "1px", background: COLORS.gold }} />}
        <span style={{
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: COLORS.gold,
          textTransform: "uppercase",
        }}>
          {label}
        </span>
        {center && <div style={{ width: "30px", height: "1px", background: COLORS.gold }} />}
      </div>

      {/* Heading */}
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(36px, 5vw, 56px)",
        fontWeight: 700,
        lineHeight: 1.1,
      }}>
        {titleLine1}{titleLine2 && <><br /><GoldText>{titleLine2}</GoldText></>}
      </h2>
    </div>
  );
}
