"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const TgIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.608c-.154.676-.555.84-1.126.522l-3.1-2.284-1.496 1.44c-.165.165-.304.304-.624.304l.223-3.164 5.75-5.194c.25-.223-.054-.347-.387-.124L7.08 14.408l-3.07-.958c-.668-.208-.682-.668.139-.99l11.98-4.618c.556-.2 1.043.136.433 1.406z"/>
  </svg>
);

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 52" width="130" height="26" aria-hidden="true">
    <polygon points="22,3 3,40 41,40" fill="none" stroke="#C9A84C" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round"/>
    <line x1="10" y1="31" x2="34" y2="31" stroke="#C9A84C" strokeWidth="1.9" strokeLinecap="round"/>
    <line x1="22" y1="9" x2="22" y2="31" stroke="#F0EDE8" strokeWidth="1.1" strokeDasharray="2.5,2.5" strokeLinecap="round" strokeOpacity="0.65"/>
    <circle cx="22" cy="3" r="1.9" fill="#C9A84C"/>
    <rect x="13" y="32" width="5" height="5" fill="#C9A84C" fillOpacity="0.14"/>
    <rect x="20" y="30" width="5" height="7" fill="#C9A84C" fillOpacity="0.42"/>
    <rect x="27" y="31" width="5" height="6" fill="#C9A84C" fillOpacity="0.42"/>
    <text x="52" y="26" fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="18" fontWeight="300" fill="#F0EDE8" letterSpacing="4">ASHNAFAI</text>
    <line x1="52" y1="31" x2="194" y2="31" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.35"/>
    <text x="52" y="42" fontFamily="'DM Mono','Courier New',monospace" fontSize="8" fill="#C9A84C" fillOpacity="0.88" letterSpacing="4">TRADE</text>
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky", top: "36px", zIndex: 800,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: "60px",
        background: "rgba(10,10,10,0.96)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(201,168,76,0.12)" : "#1e1e1e"}`,
        transition: "border-color 0.3s",
      }}
    >
      {/* Left: trade logo + parent brand link */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link href="/" aria-label="Ashnafai Trade Home">
          <Logo />
        </Link>
        <a
          href="https://ashnafai.com"
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.7,
            transition: "opacity 0.2s",
            whiteSpace: "nowrap",
            paddingLeft: "20px",
            borderLeft: "1px solid rgba(201,168,76,0.2)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
        >
          by ASHNAFAI
        </a>
      </div>

      <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
        <li><a href="/#trades" style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)", transition: "color 0.2s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
               onMouseLeave={e => (e.currentTarget.style.color = "var(--w35)")}>Live Trades</a></li>
        <li><a href="/#performance" style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)", transition: "color 0.2s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
               onMouseLeave={e => (e.currentTarget.style.color = "var(--w35)")}>Performance</a></li>
        <li><a href="/#pricing" style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--w35)", transition: "color 0.2s" }}
               onMouseEnter={e => (e.currentTarget.style.color = "var(--white)")}
               onMouseLeave={e => (e.currentTarget.style.color = "var(--w35)")}>Pricing</a></li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <a href="https://t.me/ashnafaiTrade" target="_blank" rel="noopener noreferrer"
           style={{
             display: "flex", alignItems: "center", gap: "7px",
             padding: "7px 16px",
             border: "1px solid var(--border-gold)",
             fontSize: "11px", letterSpacing: "0.14em",
             color: "var(--gold)", borderRadius: "3px",
             transition: "background 0.2s, border-color 0.2s",
           }}
           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-dim)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; }}
           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-gold)"; }}
        >
          <TgIcon /> TELEGRAM
        </a>
        <Link href="/premium"
           style={{
             padding: "8px 20px",
             background: "var(--gold)", color: "#000",
             fontFamily: "var(--font-dm-mono), monospace",
             fontSize: "11px", fontWeight: 400, letterSpacing: "0.14em",
             borderRadius: "3px", transition: "background 0.2s",
           }}
           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold-soft)"; }}
           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--gold)"; }}
        >
          GO PREMIUM
        </Link>
      </div>
    </nav>
  );
}
