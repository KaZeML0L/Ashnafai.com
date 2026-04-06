"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "28px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "16px", flexWrap: "wrap",
    }}
    className="px-4 md:px-12"
    >
      <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "var(--w35)" }}>
        © {new Date().getFullYear()} Ashnafai Trade · trade.ashnafai.com
      </span>
      <a href="https://ashnafai.com" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", transition: "color 0.2s" }}
         onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold-soft)"; }}
         onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
      >← ASHNAFAI.COM</a>
    </footer>
  );
}
