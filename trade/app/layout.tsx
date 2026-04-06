import type { Metadata } from "next";
import { Syne, DM_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trade.ashnafai.com"),
  title: { default: "Ashnafai Trade — Live Trading Signals", template: "%s — Ashnafai Trade" },
  description: "Real-time trading signals from verified MetaTrader accounts. Transparent, live P&L. Free and premium tiers.",
  keywords: ["trading signals", "live forex signals", "MetaTrader signals", "gold trading signals", "premium trading alerts"],
  icons: [
    {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'%3E%3Crect width='44' height='44' fill='%230a0a0a'/%3E%3Cpolygon points='22,3 3,40 41,40' fill='none' stroke='%23C9A84C' stroke-width='2.2' stroke-linejoin='round'/%3E%3Cline x1='10' y1='31' x2='34' y2='31' stroke='%23C9A84C' stroke-width='2.2'/%3E%3Cline x1='22' y1='9' x2='22' y2='31' stroke='%23F0EDE8' stroke-width='1.2' stroke-dasharray='2.5,2.5' stroke-opacity='.65'/%3E%3Ccircle cx='22' cy='3' r='2' fill='%23C9A84C'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://trade.ashnafai.com",
    title: "Ashnafai Trade — Live Trading Signals",
    description: "We Trade. You Watch Us Win.",
    siteName: "Ashnafai Trade",
  },
  twitter: { card: "summary_large_image", title: "Ashnafai Trade", description: "We Trade. You Watch Us Win." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
