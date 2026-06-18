// components/GoldText.jsx
// Reusable shimmer gold gradient text

export default function GoldText({ children, style = {} }) {
  return (
    <span className="gold-text" style={style}>
      {children}
    </span>
  );
}
