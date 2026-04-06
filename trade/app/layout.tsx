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
