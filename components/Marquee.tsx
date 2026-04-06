const items = [
  "Website Design",
  "Marketing Automation",
  "AI Chatbots",
  "University Admissions",
  "SEO & Growth",
  "Brand Identity",
  "AI Workflows",
  "Conversion Funnels",
  "Digital Strategy",
];

export default function Marquee() {
  // Double for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#080810] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#080810] to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap" style={{ willChange: "transform" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono text-[11px] tracking-[3px] uppercase text-[rgba(240,237,232,0.45)] px-7">
              {item}
            </span>
            <span className="text-[#C9A84C] opacity-40 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
