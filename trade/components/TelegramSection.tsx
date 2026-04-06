"use client";

export default function TelegramSection() {
  return (
    <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 48px" }} className="px-4 md:px-12">
      <div style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "36px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "24px",
      }}
      className="flex-col md:flex-row"
      >
        <div>
          <h3 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "22px", fontWeight: 800, color: "var(--white)", marginBottom: "12px" }}>
            Every Trade. Straight to Telegram.
          </h3>
          <p style={{ fontSize: "12px", lineHeight: 1.75, color: "var(--w60)", maxWidth: "480px" }}>
            Join our Telegram channel and get notified the moment a trade opens or closes — including the direct link to view it live on this platform. Premium members get instant alerts. Free members get alerts with a 15-min delay.
          </p>
        </div>
        <a href="https://t.me/ashnafaiTrade" target="_blank" rel="noopener noreferrer" style={{
          flexShrink: 0,
          display: "flex", alignItems: "center", gap: "10px",
          padding: "14px 28px",
          border: "1px solid var(--border)",
          fontFamily: "var(--font-dm-mono),monospace",
          fontSize: "11px", letterSpacing: "0.18em",
          color: "var(--white)", borderRadius: "3px",
          whiteSpace: "nowrap",
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--w35)"; (e.currentTarget as HTMLElement).style.background = "#161616"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          JOIN CHANNEL →
        </a>
      </div>
    </section>
  );
}
