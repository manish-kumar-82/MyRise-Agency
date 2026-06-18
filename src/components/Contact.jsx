// components/Contact.jsx
import { useState } from "react";
import { COLORS, CONTACT } from "../constants";
import GoldText from "./GoldText";

const FIELDS = [
  { name: "name",     placeholder: "Your Full Name",       type: "text" },
  { name: "brand",    placeholder: "Brand / Company Name", type: "text" },
  { name: "email",    placeholder: "Email Address",        type: "email" },
  { name: "whatsapp", placeholder: "WhatsApp Number",      type: "text" },
];

const inputStyle = {
  background: COLORS.dark2,
  border: `1px solid rgba(201,168,76,0.15)`,
  borderRadius: "2px",
  padding: "16px 20px",
  color: COLORS.white,
  fontSize: "14px",
  fontFamily: "'Montserrat', sans-serif",
  outline: "none",
  width: "100%",
  transition: "border-color 0.3s",
};

export default function Contact() {
  const [form, setForm]   = useState({ name: "", brand: "", email: "", whatsapp: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      setError("Please fill in your Name and Email.");
      return;
    }
    setError("");

    const msg = encodeURIComponent(
`*New Lead — MyRise Agency* 🚀

*Name:* ${form.name}
*Brand:* ${form.brand || "—"}
*Email:* ${form.email}
*WhatsApp:* ${form.whatsapp || "—"}

*Message:*
${form.message || "—"}`
    );

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" style={{
      padding: "120px 5%",
      background: COLORS.black,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "12px", marginBottom: "20px",
          }}>
            <div style={{ width: "30px", height: "1px", background: COLORS.gold }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.25em", color: COLORS.gold, textTransform: "uppercase" }}>
              Get In Touch
            </span>
            <div style={{ width: "30px", height: "1px", background: COLORS.gold }} />
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            marginBottom: "16px",
          }}>
            Let's <GoldText>Rise Together</GoldText>
          </h2>
          <p style={{ color: COLORS.gray, fontSize: "14px", lineHeight: 1.85 }}>
            Tell us about your brand and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Success State */}
        {sent ? (
          <div style={{
            textAlign: "center",
            padding: "60px 40px",
            background: "rgba(201,168,76,0.06)",
            border: `1px solid rgba(201,168,76,0.22)`,
            borderRadius: "2px",
          }}>
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>✓</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", marginBottom: "12px" }}>
              <GoldText>Message Sent!</GoldText>
            </h3>
            <p style={{ color: COLORS.gray, fontSize: "14px" }}>
              WhatsApp has opened with your details. We'll respond within 24 hours.
            </p>
          </div>
        ) : (
          /* Form */
          <div style={{ display: "grid", gap: "16px" }}>
            {FIELDS.map(f => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = COLORS.gold}
                onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.15)"}
              />
            ))}

            <textarea
              name="message"
              placeholder="Tell us about your products and what you're looking to achieve..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => e.target.style.borderColor = COLORS.gold}
              onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.15)"}
            />

            {error && (
              <p style={{ color: COLORS.red, fontSize: "13px", textAlign: "center" }}>{error}</p>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              style={{
                background: `linear-gradient(135deg, ${COLORS.goldDark} 0%, ${COLORS.goldLight} 100%)`,
                color: COLORS.black,
                border: "none",
                padding: "18px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                boxShadow: "0 8px 30px rgba(201,168,76,0.26)",
                fontFamily: "'Montserrat', sans-serif",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "opacity 0.3s, transform 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span>Send via WhatsApp</span>
              {/* WhatsApp SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill={COLORS.black}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.828L.057 23.428a.75.75 0 00.914.914l5.67-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.736-.524-5.287-1.434l-.376-.225-3.898.998.995-3.818-.244-.39A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </button>

            {/* Direct contact links */}
            <div style={{
              textAlign: "center",
              paddingTop: "14px",
              display: "flex",
              justifyContent: "center",
              gap: "28px",
              flexWrap: "wrap",
            }}>
              <a href={`mailto:${CONTACT.email}`} style={{ color: COLORS.gray, fontSize: "12px", textDecoration: "none" }}>
                📧 {CONTACT.email}
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} style={{ color: COLORS.gray, fontSize: "12px", textDecoration: "none" }}>
                💬 {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
