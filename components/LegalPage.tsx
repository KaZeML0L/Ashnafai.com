"use client";

import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

export interface LegalSection {
  num: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  label: string;
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalPage({ label, title, effectiveDate, sections }: LegalPageProps) {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#080810] px-6 pt-36 pb-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="mx-auto max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                {label}
              </span>
            </span>
            <h1 className="font-syne text-[46px] md:text-[60px] font-bold leading-[1] text-[#F0EDE8]">
              {title}
            </h1>
            {/* Gold rule */}
            <div className="h-px w-16 bg-gradient-to-r from-[#C9A84C] to-transparent mt-2" />
            <p className="font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.3)]">
              {effectiveDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-[rgba(201,168,76,0.1)]" />

      {/* Content */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[900px] flex flex-col gap-0">
          {sections.map((section, i) => (
            <motion.div
              key={section.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
              className="grid grid-cols-[64px_1fr] gap-8 border-b border-[rgba(201,168,76,0.08)] py-10 last:border-b-0"
            >
              {/* Number */}
              <div className="pt-1">
                <span className="font-mono text-[11px] tracking-[2px] text-[rgba(201,168,76,0.35)]">
                  {section.num}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4">
                <h2 className="font-syne text-[13px] font-bold tracking-[2px] uppercase text-[#F0EDE8]">
                  {section.title}
                </h2>
                <div className="legal-body">{section.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .legal-body p {
          font-family: var(--font-dm-mono), monospace;
          font-size: 13px;
          line-height: 2;
          color: rgba(240, 237, 232, 0.5);
          margin-bottom: 14px;
        }
        .legal-body p:last-child {
          margin-bottom: 0;
        }
        .legal-body ul {
          list-style: none;
          margin: 10px 0;
        }
        .legal-body ul li {
          font-family: var(--font-dm-mono), monospace;
          font-size: 13px;
          line-height: 2;
          color: rgba(240, 237, 232, 0.5);
          padding-left: 24px;
          position: relative;
          margin-bottom: 4px;
        }
        .legal-body ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: rgba(201, 168, 76, 0.6);
        }
        .legal-body a {
          color: #c9a84c;
          text-decoration: none;
          border-bottom: 1px solid rgba(201, 168, 76, 0.3);
          transition: border-color 0.2s;
        }
        .legal-body a:hover {
          border-color: #c9a84c;
        }
      `}</style>
    </main>
  );
}
