"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    desc: "Conversion-engineered sites that look like art and perform like machines. Custom-built, pixel-perfect, and fast.",
    tags: ["Next.js", "Motion", "CMS"],
  },
  {
    num: "02",
    title: "Marketing Automation / Trade Signals",
    desc: "Email sequences, CRM pipelines, lead scoring, and nurture flows — all automated so you wake up to booked calls. Live MT5 trade signals via Ashnafai Trade.",
    tags: ["Email", "CRM", "Signals"],
    isTrade: true,
  },
  {
    num: "03",
    title: "AI Chatbots",
    desc: "Intelligent assistants trained on your business. 24/7 qualification, support, and conversion without hiring a team.",
    tags: ["LLM", "Custom AI", "24/7"],
  },
  {
    num: "04",
    title: "University Admissions",
    desc: "Strategic guidance and application systems that help students reach their target institutions with confidence.",
    tags: ["Strategy", "Consulting", "Results"],
  },
  {
    num: "05",
    title: "SEO & Growth",
    desc: "Technical SEO, content systems, and authority-building strategies that compound into durable organic traffic.",
    tags: ["Technical", "Content", "Authority"],
  },
  {
    num: "06",
    title: "Brand Identity",
    desc: "Visual systems built to last — logo, typography, color, motion, and guidelines that make your brand unmistakable.",
    tags: ["Logo", "System", "Guidelines"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

// Inline trade logo — exact SVG from trade.ashnafai.com
const TradeLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 260 52"
    width="104"
    height="21"
    aria-hidden="true"
  >
    <polygon
      points="22,3 3,40 41,40"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.9"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="10" y1="31" x2="34" y2="31" stroke="#C9A84C" strokeWidth="1.9" strokeLinecap="round" />
    <line x1="22" y1="9" x2="22" y2="31" stroke="#F0EDE8" strokeWidth="1.1" strokeDasharray="2.5,2.5" strokeLinecap="round" strokeOpacity="0.65" />
    <circle cx="22" cy="3" r="1.9" fill="#C9A84C" />
    <rect x="13" y="32" width="5" height="5" fill="#C9A84C" fillOpacity="0.14" />
    <rect x="20" y="30" width="5" height="7" fill="#C9A84C" fillOpacity="0.42" />
    <rect x="27" y="31" width="5" height="6" fill="#C9A84C" fillOpacity="0.42" />
    <text x="52" y="26" fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="18" fontWeight="300" fill="#F0EDE8" letterSpacing="4">ASHNAFAI</text>
    <line x1="52" y1="31" x2="194" y2="31" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.35" />
    <text x="52" y="42" fontFamily="'DM Mono','Courier New',monospace" fontSize="8" fill="#C9A84C" fillOpacity="0.88" letterSpacing="4">TRADE</text>
  </svg>
);

// Subtle upward chart SVG drawn in the card background
const ChartBg = () => (
  <svg
    viewBox="0 0 320 80"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-[80px] pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00C076" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#00C076" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,72 C30,68 60,62 90,56 C120,50 150,44 180,36 C210,28 240,20 270,14 C290,10 305,7 320,5 L320,80 L0,80 Z"
      fill="url(#chartFade)"
    />
    <path
      d="M0,72 C30,68 60,62 90,56 C120,50 150,44 180,36 C210,28 240,20 270,14 C290,10 305,7 320,5"
      fill="none"
      stroke="#00C076"
      strokeWidth="1"
      strokeOpacity="0.22"
      strokeLinecap="round"
    />
  </svg>
);

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                What We Build
              </span>
            </span>
            <h2 className="font-syne text-[42px] md:text-[52px] font-bold leading-[1] text-[#F0EDE8]">
              Six Verticals.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8D5A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One Studio.
              </span>
            </h2>
          </div>
          <p className="max-w-[300px] font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
            Every service is built with the same obsession: measurable output,
            automated delivery, and lasting impact.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) =>
            svc.isTrade ? (
              /* ── TRADE CARD ── */
              <motion.a
                key={svc.num}
                href="https://trade.ashnafai.com"
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex flex-col gap-5 overflow-hidden p-8 transition-all duration-400"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(8,8,16,0.98) 60%)",
                  boxShadow: "0 0 0 0 rgba(201,168,76,0)",
                  cursor: "pointer",
                }}
                whileHover={{
                  boxShadow: "0 0 32px rgba(201,168,76,0.12), 0 0 0 1px rgba(201,168,76,0.5)",
                  borderColor: "rgba(201,168,76,0.65)",
                }}
              >
                {/* Animated chart background */}
                <ChartBg />

                {/* Glow lines */}
                <span className="absolute top-0 right-0 h-[1px] w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />

                {/* Top row: number + TRADE badge + live dot */}
                <div className="flex items-start justify-between">
                  <span className="font-cormorant text-[42px] font-light leading-none text-[rgba(201,168,76,0.35)]">
                    {svc.num}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* LIVE indicator */}
                    <span className="flex items-center gap-[5px]">
                      <span
                        className="inline-block h-[6px] w-[6px] rounded-full bg-[#00C076]"
                        style={{ animation: "pulse-green 2s ease-in-out infinite" }}
                      />
                      <span className="font-mono text-[9px] tracking-[2px] uppercase text-[#00C076]">
                        LIVE
                      </span>
                    </span>
                    {/* TRADE badge */}
                    <span
                      className="font-mono text-[8px] tracking-[2px] uppercase px-2 py-[3px]"
                      style={{
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "#C9A84C",
                        background: "rgba(201,168,76,0.08)",
                      }}
                    >
                      TRADE
                    </span>
                  </div>
                </div>

                {/* Trade logo */}
                <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <TradeLogo />
                </div>

                <h3 className="font-syne text-[17px] font-bold leading-snug text-[#F0EDE8] transition-colors duration-300 group-hover:text-[#E8D5A3]">
                  {svc.title}
                </h3>

                <p className="font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                  {svc.desc}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(201,168,76,0.5)] border border-[rgba(201,168,76,0.15)] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto font-mono text-[9px] tracking-[1.5px] uppercase text-[rgba(201,168,76,0.55)] transition-colors duration-200 group-hover:text-[#C9A84C]">
                    trade.ashnafai.com ↗
                  </span>
                </div>

                <style>{`
                  @keyframes pulse-green {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.45; transform: scale(0.8); }
                  }
                `}</style>
              </motion.a>
            ) : (
              /* ── STANDARD CARD ── */
              <motion.div
                key={svc.num}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex flex-col gap-5 border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-8 transition-all duration-400 hover:border-[rgba(201,168,76,0.45)] hover:bg-[rgba(201,168,76,0.04)]"
              >
                {/* Gold corner accent on hover */}
                <span className="absolute top-0 right-0 h-[1px] w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C9A84C] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="font-cormorant text-[42px] font-light leading-none text-[rgba(201,168,76,0.25)]">
                    {svc.num}
                  </span>
                  <span className="h-px w-8 translate-y-4 bg-[rgba(201,168,76,0.2)] transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.6)] group-hover:w-12" />
                </div>

                <h3 className="font-syne text-[17px] font-bold leading-snug text-[#F0EDE8] transition-colors duration-300 group-hover:text-[#E8D5A3]">
                  {svc.title}
                </h3>

                <p className="font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                  {svc.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(201,168,76,0.5)] border border-[rgba(201,168,76,0.15)] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
