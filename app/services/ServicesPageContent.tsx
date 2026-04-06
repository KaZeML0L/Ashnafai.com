"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Website Design & Development",
    headline: "Sites that close deals.",
    desc: "We build custom web experiences engineered from the ground up around conversion. Not templates. Not page builders. Architecture, design, and code — all aligned to turn visitors into clients.",
    features: [
      "Custom design system and visual identity",
      "Next.js / React development with optimized performance",
      "CMS integration for content ownership",
      "Conversion rate optimization built in from day one",
      "Analytics, tracking, and A/B testing setup",
      "Full mobile and cross-browser compatibility",
    ],
    ideal: "Businesses investing in a flagship digital presence that generates pipeline.",
  },
  {
    num: "02",
    title: "Marketing Automation",
    headline: "Growth while you sleep.",
    desc: "We design and deploy the entire automation stack — email sequences, CRM pipelines, lead scoring systems, and retargeting flows — so your marketing compound without manual effort.",
    features: [
      "End-to-end funnel architecture and mapping",
      "Email sequences for onboarding, nurture, and re-engagement",
      "CRM setup and custom pipeline configuration",
      "Lead scoring and qualification automation",
      "Abandoned flow recovery and behavioral triggers",
      "Weekly reporting and optimization cadence",
    ],
    ideal: "Teams spending too much time on manual outreach and follow-up.",
  },
  {
    num: "03",
    title: "AI Chatbots",
    headline: "24/7 intelligent frontline.",
    desc: "Custom-trained AI assistants that handle qualification, support, and conversion at any hour. Not generic chatbots — purpose-built agents trained on your business, tone, and objectives.",
    features: [
      "Custom AI agent trained on your documentation and FAQs",
      "Qualification flows and lead capture automation",
      "CRM and calendar booking integration",
      "Multi-channel deployment (web, WhatsApp, SMS)",
      "Human handoff with context passing",
      "Continuous learning and performance tuning",
    ],
    ideal: "Businesses receiving repetitive inquiries or losing leads outside business hours.",
  },
  {
    num: "04",
    title: "University Admissions",
    headline: "Strategic path to your target institution.",
    desc: "We provide strategic guidance through the full admissions lifecycle — from institution selection and application strategy to essay refinement and interview preparation.",
    features: [
      "Institution shortlisting based on profile and ambition",
      "Application strategy and timeline planning",
      "Personal statement and essay guidance",
      "Interview preparation and coaching",
      "Scholarship and financial aid strategy",
      "End-to-end support from first draft to final decision",
    ],
    ideal: "Students and families navigating competitive admissions for top-tier institutions.",
  },
  {
    num: "05",
    title: "SEO & Growth",
    headline: "Organic traffic that compounds.",
    desc: "Technical SEO, content architecture, and authority-building strategies that deliver durable search visibility. Not vanity rankings — traffic that converts and grows month over month.",
    features: [
      "Technical SEO audit and implementation",
      "Keyword research and content gap analysis",
      "Content strategy and editorial calendar",
      "On-page and structured data optimization",
      "Link acquisition and digital PR strategy",
      "Monthly reporting with attribution modeling",
    ],
    ideal: "Businesses relying on paid acquisition who want to build durable organic revenue.",
  },
  {
    num: "06",
    title: "Brand Identity",
    headline: "A visual system built to last.",
    desc: "Logo, typography, color, motion, and brand guidelines — built as a coherent system, not a collection of assets. Identity work that scales across every surface and makes you unmistakable.",
    features: [
      "Brand strategy and positioning workshop",
      "Logo design with full variant suite",
      "Typography and color system",
      "Motion and interaction guidelines",
      "Brand standards and usage documentation",
      "Asset delivery across all required formats",
    ],
    ideal: "Founders launching or repositioning a brand that needs to command premium trust.",
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080810] px-6 pt-36 pb-20">
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
            className="flex flex-col gap-6 max-w-[720px]"
          >
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                Our Services
              </span>
            </span>
            <h1 className="font-syne text-[52px] md:text-[72px] font-bold leading-[0.95] text-[#F0EDE8]">
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
                One Obsession.
              </span>
            </h1>
            <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)] max-w-[520px]">
              Every service we offer is built around a single standard: measurable output,
              automated delivery, and lasting results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-0">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="grid gap-10 border-b border-[rgba(201,168,76,0.1)] py-16 md:grid-cols-[120px_1fr_1fr] md:gap-16 first:border-t first:border-[rgba(201,168,76,0.1)]"
            >
              {/* Number */}
              <div className="flex flex-row items-start gap-4 md:flex-col">
                <span className="font-cormorant text-[56px] font-light leading-none text-[rgba(201,168,76,0.25)]">
                  {svc.num}
                </span>
              </div>

              {/* Left text */}
              <div className="flex flex-col gap-5">
                <h2 className="font-syne text-[26px] md:text-[30px] font-bold text-[#F0EDE8]">
                  {svc.title}
                </h2>
                <p className="font-cormorant text-[22px] italic text-[#C9A84C]">
                  {svc.headline}
                </p>
                <p className="font-mono text-[12px] leading-[2] text-[rgba(240,237,232,0.5)]">
                  {svc.desc}
                </p>
                <p className="font-mono text-[11px] leading-[1.8] text-[rgba(201,168,76,0.6)] border-l border-[rgba(201,168,76,0.2)] pl-4">
                  <span className="text-[rgba(240,237,232,0.3)] uppercase tracking-[1.5px] text-[9px]">Ideal for: </span>
                  {svc.ideal}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)] mb-2">
                  What&apos;s Included
                </span>
                {svc.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-[6px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#C9A84C] opacity-60" />
                    <span className="font-mono text-[12px] leading-[1.8] text-[rgba(240,237,232,0.55)]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-y border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] px-6 py-16">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-6 items-center text-center">
          <h2 className="font-cormorant text-[40px] md:text-[52px] font-light text-[#F0EDE8]">
            Not sure which service fits?
          </h2>
          <p className="font-mono text-[12px] leading-[2] text-[rgba(240,237,232,0.45)] max-w-[460px]">
            Book a free strategy call. We&apos;ll audit your current setup and tell you
            exactly where automation and design can move the needle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-8 py-4 hover:bg-[#E8D5A3] transition-colors duration-300"
          >
            Book a Free Call
            <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
