import TickerTape from "@/components/TickerTape";
import Nav from "@/components/Nav";
import EquityChart from "@/components/EquityChart";
import StatsBar from "@/components/StatsBar";
import TradesTable from "@/components/TradesTable";
import PremiumBanner from "@/components/PremiumBanner";
import TelegramSection from "@/components/TelegramSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <TickerTape />
      <Nav />

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", padding: "72px 48px 80px", maxWidth: "1200px", margin: "0 auto" }}
               className="grid-cols-1 md:grid-cols-2 px-4 md:px-12">
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--gold)",
            border: "1px solid rgba(201,168,76,0.22)",
            padding: "6px 14px", borderRadius: "2px",
            marginBottom: "32px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
            LIVE TRADING · 0 RISK STRATEGY
          </div>

          <h1 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(44px,6vw,76px)", fontWeight: 800, lineHeight: 1.0, color: "var(--white)", marginBottom: "24px" }}>
            We Trade.<br />
            You <span style={{ color: "var(--gold)" }}>Watch Us</span><br />
            Win.
          </h1>

          <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--w60)", maxWidth: "420px", marginBottom: "40px" }}>
            Real-time trade signals from our MetaTrader accounts — verified, transparent, and always in profit. Watch live for free. Get instant alerts on Telegram.
          </p>

          <div style={{
            display: "flex", alignItems: "center",
            border: "1px solid var(--border)",
            borderRadius: "3px", overflow: "hidden",
          }}>
            {[
              { val: "100%",   label: "Win Rate",       gold: true },
              { val: "+$48.2K", label: "Monthly Profit", gold: true },
              { val: "0",      label: "Losses",          gold: false },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: "18px 20px", borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "20px", fontWeight: 800, color: s.gold ? "var(--gold)" : "var(--white)" }}>
                  {s.val}
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <EquityChart />
        </div>
      </section>

      <StatsBar />
      <TradesTable />
      <PremiumBanner />
      <TelegramSection />
      <PricingSection />
      <Footer />

      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }`}</style>
    </>
  );
}
