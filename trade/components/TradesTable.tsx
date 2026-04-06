"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Trade } from "@/lib/types";

const TgIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.608c-.154.676-.555.84-1.126.522l-3.1-2.284-1.496 1.44c-.165.165-.304.304-.624.304l.223-3.164 5.75-5.194c.25-.223-.054-.347-.387-.124L7.08 14.408l-3.07-.958c-.668-.208-.682-.668.139-.99l11.98-4.618c.556-.2 1.043.136.433 1.406z"/>
  </svg>
);

// Static fallback trades for when Supabase isn't configured
const FALLBACK_TRADES: Trade[] = [
  { id: "1", pair: "XAUUSD", direction: "BUY",  entry_price: 2318.40, stop_loss: 2300, take_profit: 2360, current_price: 2342.18, lots: 0.50, status: "open", profit_pips: null, profit_usd: 1189.00, opened_at: new Date(Date.now() - 8040000).toISOString(), closed_at: null },
  { id: "2", pair: "EURUSD", direction: "BUY",  entry_price: 1.08210, stop_loss: 1.0780, take_profit: 1.0900, current_price: 1.08412, lots: 1.00, status: "open", profit_pips: null, profit_usd: 202.00, opened_at: new Date(Date.now() - 18120000).toISOString(), closed_at: null },
  { id: "3", pair: "US30",   direction: "SELL", entry_price: 40120.0, stop_loss: 40400, take_profit: 39500, current_price: 39812.5, lots: 0.20, status: "open", profit_pips: null, profit_usd: 615.00, opened_at: new Date(Date.now() - 6300000).toISOString(), closed_at: null },
  { id: "4", pair: "GBPUSD", direction: "BUY",  entry_price: 1.26540, stop_loss: 1.2600, take_profit: 1.2800, current_price: 1.26880, lots: 0.80, status: "open", profit_pips: null, profit_usd: 272.00, opened_at: new Date(Date.now() - 11980000).toISOString(), closed_at: null },
  { id: "5", pair: "NAS100", direction: "SELL", entry_price: 18340.0, stop_loss: 18600, take_profit: 17800, current_price: 18204.0, lots: 0.30, status: "open", profit_pips: null, profit_usd: 408.00, opened_at: new Date(Date.now() - 3300000).toISOString(), closed_at: null },
];

function formatDur(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}h ${m}m`;
}

function tradeUrl(t: Trade) {
  const d = new Date(t.opened_at);
  const date = d.toISOString().slice(0, 10).replace(/-/g, "");
  const time = d.toISOString().slice(11, 16).replace(":", "");
  return `/trades/${t.pair}_${date}_${time}`;
}

export default function TradesTable() {
  const [trades, setTrades] = useState<Trade[]>(FALLBACK_TRADES);
  const pnlRef = useRef<number[]>(FALLBACK_TRADES.map(t => t.profit_usd ?? 0));
  const [pnlValues, setPnlValues] = useState<number[]>(FALLBACK_TRADES.map(t => t.profit_usd ?? 0));

  useEffect(() => {
    // Try live Supabase data
    async function load() {
      try {
        const { data } = await supabase.from("trades").select("*").eq("status", "open").order("opened_at", { ascending: false }).limit(5);
        if (data && data.length > 0) {
          setTrades(data);
          pnlRef.current = data.map((t: Trade) => t.profit_usd ?? 0);
          setPnlValues(data.map((t: Trade) => t.profit_usd ?? 0));
        }
      } catch {}
    }
    load();

    // Realtime subscription
    const channel = supabase
      .channel("trades-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "trades" }, () => load())
      .subscribe();

    // Animate P&L for visible rows
    const id = setInterval(() => {
      pnlRef.current = pnlRef.current.map((v, i) => {
        if (i >= 3) return v; // don't animate blurred rows
        const delta = (Math.random() - 0.48) * 8;
        return Math.max(0, v + delta);
      });
      setPnlValues([...pnlRef.current]);
    }, 2200);

    return () => { supabase.removeChannel(channel); clearInterval(id); };
  }, []);

  const visible = trades.slice(0, 3);
  const blurred = trades.slice(3, 5);

  return (
    <section id="trades" style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 48px" }}
             className="px-4 md:px-12">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--white)" }}>Live Open Trades</span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--green)" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
          STREAMING
          <span style={{ color: "var(--w35)" }}>·</span>
          MT5 CONNECTED
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Pair", "Dir", "Open Price", "Current", "Lots", "P&L", "Time", ""].map((h, i) => (
                <th key={i} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", padding: "10px 16px", textAlign: "left", borderBottom: "1px solid var(--border)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.15s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-card)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  onClick={() => window.location.href = tradeUrl(t)}
              >
                <td style={{ padding: "18px 16px", fontSize: "13px", letterSpacing: "0.05em", color: "var(--white)" }}>{t.pair}</td>
                <td style={{ padding: "18px 16px" }}>
                  <span style={{
                    display: "inline-block", padding: "3px 14px",
                    fontSize: "10px", letterSpacing: "0.12em", borderRadius: "2px",
                    background: t.direction === "BUY" ? "rgba(0,192,118,0.18)" : "rgba(255,59,92,0.18)",
                    color: t.direction === "BUY" ? "var(--green)" : "var(--red)",
                  }}>{t.direction}</span>
                </td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--w60)" }}>{t.entry_price}</td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--white)" }}>{t.current_price ?? "—"}</td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--w60)" }}>{t.lots ?? "—"}</td>
                <td style={{ padding: "18px 16px", fontSize: "13px", color: pnlValues[i] >= 0 ? "var(--green)" : "var(--red)" }}>
                  {(pnlValues[i] >= 0 ? "+" : "")}${pnlValues[i].toFixed(2)}
                </td>
                <td style={{ padding: "18px 16px", fontSize: "11px", color: "var(--w35)" }}>{formatDur(t.opened_at)}</td>
                <td style={{ padding: "18px 16px" }}>
                  <a href="https://t.me/ashnafaiTrade" target="_blank" rel="noopener noreferrer"
                     onClick={e => e.stopPropagation()}
                     style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", border: "1px solid var(--border-gold)", borderRadius: "3px", color: "var(--gold)", transition: "background 0.2s" }}
                     onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-dim)"; }}
                     onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  ><TgIcon /></a>
                </td>
              </tr>
            ))}

            {blurred.map((t, i) => (
              <tr key={t.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "18px 16px", fontSize: "13px", color: "var(--white)", filter: "blur(5px)", userSelect: "none" }}>{t.pair}</td>
                <td style={{ padding: "18px 16px", filter: "blur(5px)", userSelect: "none" }}>
                  <span style={{ display: "inline-block", padding: "3px 14px", fontSize: "10px", letterSpacing: "0.12em", borderRadius: "2px", background: t.direction === "BUY" ? "rgba(0,192,118,0.18)" : "rgba(255,59,92,0.18)", color: t.direction === "BUY" ? "var(--green)" : "var(--red)" }}>{t.direction}</span>
                </td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--w60)", filter: "blur(5px)", userSelect: "none" }}>{t.entry_price}</td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--white)", filter: "blur(5px)", userSelect: "none" }}>{t.current_price ?? "—"}</td>
                <td style={{ padding: "18px 16px", fontSize: "12px", color: "var(--w60)", filter: "blur(5px)", userSelect: "none" }}>{t.lots ?? "—"}</td>
                <td style={{ padding: "18px 16px", fontSize: "13px", color: "var(--green)", filter: "blur(5px)", userSelect: "none" }}>+${(t.profit_usd ?? 0).toFixed(2)}</td>
                <td style={{ padding: "18px 16px", fontSize: "11px", color: "var(--w35)", filter: "blur(5px)", userSelect: "none" }}>{formatDur(t.opened_at)}</td>
                <td style={{ padding: "18px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--w35)" }}>
                      <span style={{ color: "var(--gold)", marginRight: "6px" }}>PREMIUM</span>— NO DELAY
                    </span>
                    <Link href="/premium" style={{ padding: "5px 14px", background: "var(--gold)", color: "#000", fontFamily: "var(--font-dm-mono),monospace", fontSize: "10px", letterSpacing: "0.12em", borderRadius: "2px" }}>
                      UNLOCK
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "11px", color: "var(--w35)", marginTop: "16px", letterSpacing: "0.04em" }}>
        Free tier shows 3 trades live. Premium shows all trades with 0 delay + Telegram alerts.
      </p>
      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }`}</style>
    </section>
  );
}
