import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashnafai.com"),
  title: {
    default: "Ashnafai — Digital Intelligence Studio",
    template: "%s — Ashnafai",
  },
  description:
    "We build AI systems, automated funnels, and high-converting digital experiences. Intelligence. Automated.",
  keywords: [
    "AI studio",
    "marketing automation",
    "web design",
    "AI chatbots",
    "SEO",
    "brand identity",
    "digital studio",
  ],
  openGraph: {
    type: "website",
    url: "https://ashnafai.com",
    title: "Ashnafai — Digital Intelligence Studio",
    description:
      "We build AI systems that work while you sleep. Website design, marketing automation, AI chatbots, and more.",
    siteName: "Ashnafai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashnafai — Digital Intelligence Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashnafai — Digital Intelligence Studio",
    description:
      "We build AI systems that work while you sleep.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><rect width='72' height='72' fill='%23080810'/><polygon points='36,5 5,64 67,64' fill='none' stroke='%23C9A84C' stroke-width='2.2' stroke-linejoin='round'/><line x1='19' y1='52' x2='53' y2='52' stroke='%23C9A84C' stroke-width='2.2'/><line x1='36' y1='12' x2='36' y2='52' stroke='%23F0EDE8' stroke-width='1.4' stroke-dasharray='3.5,3.5'/><circle cx='36' cy='5' r='2.5' fill='%23C9A84C'/></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ashnafai",
              url: "https://ashnafai.com",
              description:
                "Digital intelligence studio specializing in AI systems, marketing automation, and premium web design.",
              email: "hello@ashnafai.com",
              sameAs: [
                "https://trade.ashnafai.com",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Loader />
        <CustomCursor />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
