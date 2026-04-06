"use client";
import { useState } from "react";

const TABS = ["1W", "1M", "ALL"] as const;

export default function EquityChart() {
  const [active, setActive] = useState<"1W" | "1M" | "ALL">("1W");

  return (
    <div style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "6px",
      padding: "28px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)" }}>
          Account Equity
        </span>
        <div style={{ display: "flex", gap: "4px" }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActive(tab)}
              style={{
                padding: "4px 12px",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "10px", letterSpacing: "0.1em",
                color: active === tab ? "var(--white)" : "var(--w35)",
                border: active === tab ? "1px solid var(--border)" : "1px solid transparent",
                borderRadius: "3px",
                background: active === tab ? "var(--bg-card-2, #161616)" : "transparent",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "36px", fontWeight: 800, color: "var(--green)", marginBottom: "6px", letterSpacing: "-0.01em" }}>
        $124,830.50
      </div>
      <div style={{ fontSize: "12px", color: "var(--green)", marginBottom: "20px" }}>
        ▲ +$3,241.20 today <span style={{ color: "var(--w60)" }}>(+2.67%)</span>
      </div>

      <div style={{ width: "100%", height: "120px" }}>
        <svg viewBox="0 0 400 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00C076" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#00C076" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,85 C20,80 40,78 60,72 C80,66 100,65 120,60 C140,55 160,52 180,48 C200,44 220,42 240,36 C260,30 280,26 300,22 C320,18 340,14 360,10 C375,7 390,5 400,4 L400,100 L0,100 Z" fill="url(#chartGrad)"/>
          <path d="M0,85 C20,80 40,78 60,72 C80,66 100,65 120,60 C140,55 160,52 180,48 C200,44 220,42 240,36 C260,30 280,26 300,22 C320,18 340,14 360,10 C375,7 390,5 400,4"
                fill="none" stroke="#00C076" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
