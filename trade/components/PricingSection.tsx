import Link from "next/link";

const FREE_FEATURES = [
  { ok: true,  text: "3 live trades visible" },
  { ok: true,  text: "Equity chart access" },
  { ok: true,  text: "Telegram alerts (15-min delay)" },
  { ok: false, text: "Real-time all trades" },
  { ok: false, text: "Instant Telegram alerts" },
  { ok: false, text: "Priority support" },
];
const PREM_FEATURES = [
  { ok: true, text: "All trades in real-time" },
  { ok: true, text: "Equity chart access" },
  { ok: true, text: "Instant Telegram alerts" },
  { ok: true, text: "0-minute delay" },
  { ok: true, text: "Priority support" },
  { ok: true, text: "Early access to new features" },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 48px", textAlign: "center" }}
             className="px-4 md:px-12">
      <div style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
        Simple Pricing
      </div>
      <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", marginBottom: "56px" }}>
        Choose Your Access
      </h2>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "1px", background: "var(--border)",
        border: "1px solid var(--border)", borderRadius: "4px",
        overflow: "hidden", textAlign: "left",
      }}
      className="grid-cols-1 md:grid-cols-2"
      >
        {/* Free */}
        <div style={{ background: "var(--bg-card)", padding: "40px 36px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "16px" }}>Free</div>
          <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "40px", fontWeight: 800, color: "var(--white)", marginBottom: "4px" }}>
            $0 <span style={{ fontSize: "16px", color: "var(--w35)", fontWeight: 300 }}>/ forever</span>
          </div>
          <div style={{ fontSize: "12px", color: "var(--w60)", marginBottom: "28px", lineHeight: 1.65 }}>
            Watch our live trades with a 15-minute delay. No credit card required.
          </div>
          <ul style={{ listStyle: "none", marginBottom: "32px", padding: 0 }}>
            {FREE_FEATURES.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "var(--w60)", padding: "9px 0", borderBottom: i < FREE_FEATURES.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ color: f.ok ? "var(--green)" : "var(--w35)", fontSize: "13px" }}>{f.ok ? "✓" : "—"}</span>
                {f.text}
              </li>
            ))}
          </ul>
          <a href="https://t.me/ashnafaiTrade" target="_blank" rel="noopener noreferrer" style={{
            display: "block", width: "100%", padding: "14px",
            fontFamily: "var(--font-dm-mono),monospace",
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            border: "1px solid var(--border)", color: "var(--white)", borderRadius: "3px", textAlign: "center",
            transition: "border-color 0.2s, background 0.2s",
          }}>Join Free →</a>
        </div>

        {/* Premium */}
        <div style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, var(--bg-card) 60%)",
          borderLeft: "1px solid rgba(201,168,76,0.22)",
          padding: "40px 36px",
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Premium</div>
          <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "40px", fontWeight: 800, color: "var(--gold)", marginBottom: "4px" }}>
            $49 <span style={{ fontSize: "16px", color: "var(--w35)", fontWeight: 300 }}>/ month</span>
          </div>
          <div style={{ fontSize: "12px", color: "var(--w60)", marginBottom: "28px", lineHeight: 1.65 }}>
            Full real-time access to every trade the moment it opens. Zero delay. Instant alerts.
          </div>
          <ul style={{ listStyle: "none", marginBottom: "32px", padding: 0 }}>
            {PREM_FEATURES.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "var(--w60)", padding: "9px 0", borderBottom: i < PREM_FEATURES.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ color: "var(--green)", fontSize: "13px" }}>✓</span>
                {f.text}
              </li>
            ))}
          </ul>
          <Link href="/premium" style={{
            display: "block", width: "100%", padding: "14px",
            fontFamily: "var(--font-dm-mono),monospace",
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            background: "var(--gold)", color: "#000", borderRadius: "3px", textAlign: "center",
            transition: "background 0.2s",
          }}>Get Premium Access</Link>
        </div>
      </div>
    </section>
  );
}
