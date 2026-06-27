// components/BlogPost.jsx
import { COLORS } from "../constants";
import { BLOG_POSTS } from "../constants/blogPosts";
import GoldText from "./GoldText";

export default function BlogPost({ slug, onBack }) {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return null;

  return (
    <section style={{ padding: "140px 5% 100px", background: COLORS.black, minHeight: "100vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", color: COLORS.gold, fontSize: "13px", cursor: "pointer", marginBottom: "32px" }}
        >
          ← Back to Blog
        </button>

        <div style={{ fontSize: "11px", color: COLORS.gold, letterSpacing: "0.1em", marginBottom: "16px" }}>
          {post.date} · {post.readTime}
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, marginBottom: "32px", lineHeight: 1.2 }}>
          <GoldText>{post.title}</GoldText>
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.9, color: "#ccc", whiteSpace: "pre-line" }}>
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("## ")) {
              return <h2 key={i} style={{ fontSize: "20px", fontWeight: 600, color: COLORS.white, marginTop: "32px", marginBottom: "12px" }}>{para.replace("## ", "")}</h2>;
            }
            if (para.startsWith("**") && para.includes("**\n")) {
              const [bold, ...rest] = para.split("\n");
              return (
                <p key={i} style={{ marginBottom: "16px" }}>
                  <strong style={{ color: COLORS.white }}>{bold.replace(/\*\*/g, "")}</strong><br />
                  {rest.join(" ")}
                </p>
              );
            }
            return <p key={i} style={{ marginBottom: "16px" }}>{para}</p>;
          })}
        </div>
      </div>
    </section>
  );
}