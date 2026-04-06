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
    title: "Marketing Automation",
    desc: "Email sequences, CRM pipelines, lead scoring, and nurture flows — all automated so you wake up to booked calls.",
    tags: ["Email", "CRM", "Flows"],
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
          {services.map((svc, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
