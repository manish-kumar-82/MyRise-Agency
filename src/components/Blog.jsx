// components/Blog.jsx
import { COLORS } from "../constants";
import { BLOG_POSTS } from "../constants/blogPosts";
import SectionHeader from "./SectionHeader";

export default function Blog({ onSelectPost }) {
  return (
    <section id="blog" style={{ padding: "120px 5%", background: COLORS.dark, position: "relative" }}>
      <div className="section-divider" />
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHeader label="Insights" titleLine1="Amazon, Flipkart, Myntra & Meesho Growth " titleLine2="Resources" />

        <div style={{ display: "grid", gap: "20px" }}>
          {BLOG_POSTS.map(post => (
            <article
              key={post.slug}
              onClick={() => onSelectPost(post.slug)}
              style={{
                background: COLORS.dark2,
                border: `1px solid rgba(201,168,76,0.1)`,
                borderRadius: "2px",
                padding: "32px",
                cursor: "pointer",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{ fontSize: "11px", color: COLORS.gold, letterSpacing: "0.1em", marginBottom: "10px" }}>
                {post.date} · {post.readTime}
              </div>
              <h3 style={{ fontSize: "19px", fontWeight: 600, marginBottom: "10px", color: COLORS.white }}>
                {post.title}
              </h3>
              <p style={{ fontSize: "13px", color: COLORS.gray, lineHeight: 1.7, marginBottom: "14px" }}>
                {post.excerpt}
              </p>
              <span style={{ fontSize: "12px", color: COLORS.gold, letterSpacing: "0.05em" }}>
                Read Article →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}