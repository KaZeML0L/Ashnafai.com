import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Nav from "@/components/Nav";
import TickerTape from "@/components/TickerTape";
import Footer from "@/components/Footer";

interface PageProps {
  params: { id: string };
}

function parseSlug(slug: string) {
  // Format: PAIR_YYYYMMDD_HHMM (e.g. XAUUSD_20260406_1430)
  const parts = slug.split("_");
  if (parts.length < 3) return null;
  const pair = parts[0];
  const dateStr = parts[1]; // YYYYMMDD
  const timeStr = parts[2]; // HHMM
  return {
    pair,
    dateStr,
    timeStr,
    display: `${pair} — ${dateStr.slice(0, 4)}/${dateStr.slice(4, 6)}/${dateStr.slice(6)} ${timeStr.slice(0, 2)}:${timeStr.slice(2)}`,
  };
}

async function getTrade(slug: string) {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  const supabase = createClient(url, anon);
  const { data } = await supabase.from("trades").select("*").eq("id", slug).single();
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseSlug(params.id);
  const pair   = parsed?.pair ?? params.id;
  // Try to get direction from DB
  const trade  = await getTrade(params.id);
  const dir    = trade?.direction ?? "";
  const title  = `${pair}${dir ? ` ${dir}` : ""} Signal — Ashnafai Trade`;
  return {
    title,
    description: `Live ${pair} trading signal from Ashnafai. View entry, stop loss, take profit and real-time P&L.`,
    openGraph: {
      title,
      description: `${pair} signal — track this live trade on Ashnafai Trade.`,
      url: `https://trade.ashnafai.com/trades/${params.id}`,
    },
  };
}

const BlurBox = ({ label }: { label: string }) => (
  <div>
    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "6px" }}>{label}</div>
    <div style={{ filter: "blur(6px)", userSelect: "none", fontSize: "18px", fontWeight: 700, color: "var(--white)", fontFamily: "var(--font-syne),sans-serif" }}>1.23456</div>
  </div>
);

export default async function TradePage({ params }: PageProps) {
  const parsed = parseSlug(params.id);
  const trade  = await getTrade(params.id);
  // isPremium check would normally come from session/cookie — hardcode false for SSR
  const isPremium = false;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${parsed?.pair ?? params.id} Trading Signal`,
    "description": `Live trading signal from Ashnafai. ${parsed?.pair} — Real-time MetaTrader data.`,
    "url": `https://trade.ashnafai.com/trades/${params.id}`,
    "publisher": {
      "@type": "Organization",
      "name": "Ashnafai Trade",
      "url": "https://trade.ashnafai.com",
    },
    "datePublished": trade?.opened_at ?? new Date().toISOString(),
  };

  const pair      = trade?.pair      ?? parsed?.pair ?? params.id;
  const direction = trade?.direction ?? "—";
  const openedAt  = trade?.opened_at;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TickerTape />
      <Nav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 48px" }} className="px-4 md:px-12">
        {/* Breadcrumb */}
        <div style={{ marginBottom: "32px", fontSize: "11px", color: "var(--w35)", display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/" style={{ color: "var(--gold)", transition: "color 0.2s" }}>Trade</Link>
          <span>›</span>
          <span>Live Signals</span>
          <span>›</span>
          <span>{pair}</span>
        </div>

        {/* Signal card */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "28px 36px",
            borderBottom: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "28px", fontWeight: 800, color: "var(--white)" }}>{pair}</div>
                <div style={{ fontSize: "11px", color: "var(--w35)", letterSpacing: "0.1em" }}>
                  {openedAt ? new Date(openedAt).toLocaleString() : "—"}
                </div>
              </div>
              <span style={{
                padding: "5px 18px", borderRadius: "3px", fontSize: "11px", letterSpacing: "0.12em", fontWeight: 400,
                background: direction === "BUY" ? "rgba(0,192,118,0.18)" : direction === "SELL" ? "rgba(255,59,92,0.18)" : "rgba(240,237,232,0.08)",
                color: direction === "BUY" ? "var(--green)" : direction === "SELL" ? "var(--red)" : "var(--w60)",
              }}>{direction}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--green)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
              LIVE
            </div>
          </div>

          {/* Signal grid */}
          <div style={{ padding: "36px" }}>
            {isPremium || trade ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px" }} className="grid-cols-2 md:grid-cols-3">
                {[
                  { label: "Entry Price", value: trade?.entry_price ?? "—" },
                  { label: "Stop Loss",   value: trade?.stop_loss   ?? "—" },
                  { label: "Take Profit", value: trade?.take_profit  ?? "—" },
                  { label: "Lots",        value: trade?.lots         ?? "—" },
                  { label: "Status",      value: trade?.status       ?? "open" },
                  { label: "P&L (pips)",  value: trade?.profit_pips  ?? "—" },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "6px" }}>{item.label}</div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--white)", fontFamily: "var(--font-syne),sans-serif" }}>{String(item.value)}</div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* Free: show entry only, blur the rest */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px", marginBottom: "32px" }} className="grid-cols-2 md:grid-cols-3">
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "6px" }}>Pair</div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--white)", fontFamily: "var(--font-syne),sans-serif" }}>{pair}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "6px" }}>Direction</div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: direction === "BUY" ? "var(--green)" : "var(--red)", fontFamily: "var(--font-syne),sans-serif" }}>{direction}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "6px" }}>Opened</div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--white)", fontFamily: "var(--font-syne),sans-serif" }}>{openedAt ? new Date(openedAt).toLocaleTimeString() : "—"}</div>
                  </div>
                  <BlurBox label="Entry Price" />
                  <BlurBox label="Stop Loss" />
                  <BlurBox label="Take Profit" />
                </div>

                {/* Premium CTA overlay */}
                <div style={{
                  border: "1px solid rgba(201,168,76,0.22)",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)",
                  padding: "28px 32px",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px",
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "16px", fontWeight: 700, color: "var(--white)", marginBottom: "6px" }}>
                      🔒 Unlock full signal details — <span style={{ color: "var(--gold)" }}>$49/mo</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--w60)" }}>Get entry price, stop loss, take profit, lot size and real-time P&L.</div>
                  </div>
                  <Link href="/premium" style={{
                    padding: "12px 24px",
                    background: "var(--gold)", color: "#000",
                    fontFamily: "var(--font-dm-mono),monospace",
                    fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
                    borderRadius: "3px", whiteSpace: "nowrap",
                    transition: "background 0.2s",
                  }}>UPGRADE NOW</Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Back */}
        <div style={{ marginTop: "32px" }}>
          <Link href="/" style={{ fontSize: "11px", color: "var(--gold)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            ← Back to Live Trades
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
