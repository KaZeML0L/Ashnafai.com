"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We map your business, your audience, and your goals. Deep audit. No assumptions.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Strategy becomes structure. Architecture, wireframes, and creative direction aligned to convert.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Precision engineering. Every pixel, every flow, every integration — built to production standard.",
  },
  {
    num: "04",
    title: "Automate",
    desc: "Workflows deployed. Systems running. Your business grows while you focus elsewhere.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 px-6 bg-[rgba(201,168,76,0.02)]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col gap-3"
        >
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
              How We Work
            </span>
          </span>
          <h2 className="font-syne text-[42px] md:text-[52px] font-bold leading-[1] text-[#F0EDE8]">
            The Process
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col gap-0 md:flex-row">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute top-[52px] left-0 right-0 hidden h-px md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              className="group flex flex-1 flex-col gap-6 border-l border-[rgba(201,168,76,0.1)] px-8 py-4 first:border-l-0 md:border-l md:border-t-0 md:px-8 md:py-0 last:md:border-r-0"
            >
              {/* Number circle */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-[52px] w-[52px] items-center justify-center border border-[rgba(201,168,76,0.2)] bg-[rgba(8,8,16,1)] transition-all duration-400 group-hover:border-[#C9A84C] group-hover:bg-[rgba(201,168,76,0.06)]">
                  <span className="font-mono text-[11px] tracking-[1px] text-[#C9A84C]">
                    {step.num}
                  </span>
                  <span className="absolute -top-px left-2 right-2 h-px bg-[#C9A84C] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-syne text-[22px] font-bold text-[#F0EDE8]">
                  {step.title}
                </h3>
                <p className="font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <span className="mt-auto hidden font-mono text-[18px] text-[rgba(201,168,76,0.2)] md:block">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
