"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    title: "Precision Over Volume",
    desc: "We take on fewer engagements so we can go deeper. Every project receives dedicated attention, not agency assembly-line treatment.",
  },
  {
    title: "Automation First",
    desc: "We design with automation baked in from step one. Systems that eliminate repetitive work and scale without proportional cost increases.",
  },
  {
    title: "Results, Not Deliverables",
    desc: "A website is not the goal. Bookings are the goal. Traffic is not the goal. Revenue is the goal. We measure what matters.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build systems meant to compound. Most of our clients are with us for years, not engagements. We grow as they grow.",
  },
];

const capabilities = [
  "AI Agent Development",
  "Conversion Funnel Architecture",
  "Custom Web Applications",
  "Automation Stack Design",
  "Brand & Visual Identity",
  "SEO & Content Systems",
  "CRM & Pipeline Build",
  "University Admissions Strategy",
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080810] px-6 pt-36 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 max-w-[820px]"
          >
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                The Studio
              </span>
            </span>
            <h1 className="font-cormorant text-[60px] md:text-[80px] font-light leading-[1] text-[#F0EDE8]">
              We build the systems
              <br />
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8D5A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                that build your business.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Studio intro */}
      <section className="px-6 py-20 border-b border-[rgba(201,168,76,0.08)]">
        <div className="mx-auto max-w-[1280px] grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-syne text-[32px] md:text-[38px] font-bold text-[#F0EDE8]">
              Digital Intelligence Studio
            </h2>
            <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)]">
              Ashnafai is a studio that builds AI systems, marketing infrastructure, and
              digital experiences for businesses that refuse to compete on effort alone.
            </p>
            <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)]">
              We believe the most powerful competitive advantage available today is the
              right combination of automation, design, and intelligence. We build that
              combination — end to end.
            </p>
            <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)]">
              Our clients range from ambitious founders building their first flagship
              presence to established businesses replacing manual processes with
              intelligent systems that run at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="flex flex-col gap-5"
          >
            <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)]">
              Capabilities
            </span>
            <div className="grid grid-cols-2 gap-0">
              {capabilities.map((cap, i) => (
                <div
                  key={cap}
                  className="flex items-center gap-3 border-b border-[rgba(201,168,76,0.08)] py-3 pr-4"
                  style={{ borderRight: i % 2 === 0 ? "1px solid rgba(201,168,76,0.08)" : "none" }}
                >
                  <span className="h-[4px] w-[4px] flex-shrink-0 rounded-full bg-[#C9A84C] opacity-50" />
                  <span className="font-mono text-[11px] text-[rgba(240,237,232,0.5)]">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 flex flex-col gap-3"
          >
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                How We Think
              </span>
            </span>
            <h2 className="font-syne text-[38px] md:text-[48px] font-bold text-[#F0EDE8]">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="flex flex-col gap-4 border border-[rgba(201,168,76,0.1)] p-7 hover:border-[rgba(201,168,76,0.3)] transition-colors duration-400"
              >
                <span className="font-mono text-[11px] text-[#C9A84C] opacity-40">
                  0{i + 1}
                </span>
                <h3 className="font-syne text-[16px] font-bold text-[#F0EDE8]">
                  {v.title}
                </h3>
                <p className="font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy pull quote */}
      <section className="border-y border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] px-6 py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-[32px] md:text-[44px] font-light italic leading-[1.3] text-[rgba(240,237,232,0.8)]"
          >
            &ldquo;The right systems don&apos;t just save time —
            <span
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8D5A3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}they change what&apos;s possible.
            </span>
            &rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-syne text-[32px] md:text-[40px] font-bold text-[#F0EDE8]">
              Start a conversation.
            </h2>
            <p className="font-mono text-[12px] leading-[2] text-[rgba(240,237,232,0.45)] max-w-[400px]">
              Tell us about your business. We&apos;ll tell you what systems could
              change it — no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-8 py-4 hover:bg-[#E8D5A3] transition-colors duration-300"
            >
              Get In Touch
              <span>↗</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.35)] font-mono text-[11px] tracking-[2.5px] uppercase text-[#C9A84C] px-8 py-4 hover:bg-[rgba(201,168,76,0.06)] hover:border-[#C9A84C] transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
