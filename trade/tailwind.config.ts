import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         "#0a0a0a",
        "bg-card":  "#111111",
        "bg-card2": "#161616",
        border:     "#1e1e1e",
        gold:       "#C9A84C",
        "gold-soft":"#E8D5A3",
        green:      "#00C076",
        red:        "#FF3B5C",
        cream:      "#F0EDE8",
      },
      fontFamily: {
        syne:       ["var(--font-syne)", "sans-serif"],
        mono:       ["var(--font-dm-mono)", "monospace"],
        cormorant:  ["var(--font-cormorant)", "serif"],
      },
      keyframes: {
        tickScroll: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%":     { opacity: "0.5", transform: "scale(0.85)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "tick-scroll": "tickScroll 38s linear infinite",
        "pulse-dot":   "pulse 2s ease-in-out infinite",
        "fade-up":     "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
