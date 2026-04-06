"use client";
import Link from "next/link";

export default function PremiumBanner() {
  return (
    <div style={{
      margin: "0 48px",
      border: "1px solid rgba(201,168,76,0.22)",
      borderRadius: "4px",
      background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)",
      padding: "28px 36px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "24px",
    }}
    className="mx-4 md:mx-12 flex-col md:flex-row"
    >
      <div>
        <h3 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "18px", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>
          Go <span style={{ color: "var(--gold)" }}>Premium</span> — See Every Trade Instantly
        </h3>
        <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--w60)", maxWidth: "500px" }}>
          Free tier has a <span style={{ color: "var(--gold)" }}>15-minute delay</span>. Premium members see all trades in real-time with Telegram push alerts the moment we open or close a position.
        </p>
      </div>
      <Link href="/premium" style={{
        flexShrink: 0,
        padding: "14px 28px",
        border: "1px solid rgba(240,237,232,0.15)",
        fontFamily: "var(--font-dm-mono),monospace",
        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "var(--white)", borderRadius: "3px",
        whiteSpace: "nowrap",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(240,237,232,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--white)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.15)"; }}
      >
        GET PREMIUM ACCESS
      </Link>
    </div>
  );
}
