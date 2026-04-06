import type { Metadata } from "next";
import TickerTape from "@/components/TickerTape";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Go Premium",
  description: "Upgrade to Ashnafai Trade Premium for real-time signals, instant Telegram alerts, and full trade details.",
};

const FEATURES = [
  "All open trades in real-time — zero delay",
  "Instant Telegram alerts the moment a trade opens",
  "Full signal details: entry, SL, TP, lot size",
  "Live P&L on every position",
  "Priority support via Telegram",
  "Early access to new platform features",
];

export default function PremiumPage() {
  return (
    <>
      <TickerTape />
      <Nav />

      <main style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 24px" }}>
        {/* Label */}
        <div style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px", textAlign: "center" }}>
          Premium Access
        </div>

        <h1 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "var(--white)", textAlign: "center", lineHeight: 1.1, marginBottom: "16px" }}>
          See Every Trade.<br />
          <span style={{ color: "var(--gold)" }}>Instantly.</span>
        </h1>
        <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--w60)", textAlign: "center", marginBottom: "48px" }}>
          One subscription. All signals. Real-time. Cancel any time.
        </p>

        {/* Pricing card */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(201,168,76,0.22)",
          borderRadius: "8px",
          padding: "40px 36px",
          marginBottom: "24px",
          backgroundImage: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, #111111 60%)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "48px", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>$49</span>
            <span style={{ fontSize: "14px", color: "var(--w35)", paddingBottom: "8px" }}>/month</span>
          </div>
          <div style={{ fontSize: "11px", color: "var(--w60)", marginBottom: "32px" }}>Billed monthly. Cancel any time.</div>

          <ul style={{ listStyle: "none", padding: 0, marginBottom: "36px" }}>
            {FEATURES.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "13px", color: "var(--w60)", padding: "10px 0", borderBottom: i < FEATURES.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ color: "var(--green)", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Payment form */}
          <form action="/api/crypto/create-payment" method="POST">
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "8px" }}>
                Telegram Username (optional — for alerts)
              </label>
              <input name="telegram" type="text" placeholder="@yourhandle"
                style={{
                  width: "100%", padding: "12px 16px",
                  background: "rgba(240,237,232,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "3px",
                  fontFamily: "var(--font-dm-mono),monospace",
                  fontSize: "13px", color: "var(--white)",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "8px" }}>
                Email (for payment receipt)
              </label>
              <input name="email" type="email" placeholder="you@email.com" required
                style={{
                  width: "100%", padding: "12px 16px",
                  background: "rgba(240,237,232,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "3px",
                  fontFamily: "var(--font-dm-mono),monospace",
                  fontSize: "13px", color: "var(--white)",
                  outline: "none",
                }}
              />
            </div>
            <button type="submit" style={{
              width: "100%", padding: "16px",
              background: "var(--gold)", color: "#000",
              fontFamily: "var(--font-dm-mono),monospace",
              fontSize: "12px", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase",
              border: "none", borderRadius: "3px", cursor: "pointer",
              transition: "background 0.2s",
            }}>
              Pay with USDT (TRC-20) →
            </button>
          </form>
        </div>

        <div style={{ fontSize: "11px", color: "var(--w35)", textAlign: "center", lineHeight: 1.7 }}>
          Payment processed via NOWPayments — secure crypto checkout.<br />
          Access granted automatically within 5 minutes of payment confirmation.
        </div>
      </main>

      <Footer />
    </>
  );
}
