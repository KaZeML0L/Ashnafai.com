"use client";
import { useEffect, useRef } from "react";

const TICKERS = [
  { pair: "XAUUSD", price: 2342.18, chg: "+0.42%", up: true },
  { pair: "EURUSD", price: 1.08412, chg: "+0.14%", up: true },
  { pair: "USDJPY", price: 151.240, chg: "-0.08%", up: false },
  { pair: "US30",   price: 39812.5, chg: "+0.37%", up: true },
  { pair: "GBPUSD", price: 1.26880, chg: "+0.21%", up: true },
  { pair: "BTCUSD", price: 68450.0, chg: "+2.14%", up: true },
  { pair: "NAS100", price: 18204.0, chg: "-0.33%", up: false },
];

function formatP(price: number, pair: string) {
  if (price > 10000) return price.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  if (price > 100)  return price.toFixed(3);
  return price.toFixed(5);
}

export default function TickerTape() {
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const baseP = useRef([...TICKERS.map(t => t.price), ...TICKERS.map(t => t.price)]);

  useEffect(() => {
    const id = setInterval(() => {
      baseP.current = baseP.current.map((p, i) => p + p * 0.00005 * (Math.random() - 0.5));
      priceRefs.current.forEach((el, i) => {
        if (el) {
          const pair = TICKERS[i % TICKERS.length].pair;
          el.textContent = formatP(baseP.current[i], pair);
        }
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const items = [...TICKERS, ...TICKERS];

  return (
    <div style={{
      width: "100%", height: "36px",
      background: "#080808",
      borderBottom: "1px solid #1e1e1e",
      overflow: "hidden",
      display: "flex", alignItems: "center",
      position: "sticky", top: 0, zIndex: 900,
    }}>
      <div style={{
        display: "flex", alignItems: "center",
        gap: "52px",
        whiteSpace: "nowrap",
        width: "max-content",
        padding: "0 32px",
        animation: "tickScroll 38s linear infinite",
      }}>
        {items.map((t, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "11px", color: "var(--w60)", letterSpacing: "0.1em" }}>{t.pair}</span>
            <span ref={el => { priceRefs.current[i] = el; }} style={{ fontSize: "11px", color: "var(--white)", letterSpacing: "0.06em" }}>
              {formatP(t.price, t.pair)}
            </span>
            <span style={{ fontSize: "11px", color: t.up ? "var(--green)" : "var(--red)" }}>{t.chg}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes tickScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
