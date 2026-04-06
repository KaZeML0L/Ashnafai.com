"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTASection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Placeholder — integrate with your backend / Formspree / Resend
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[rgba(201,168,76,0.02)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A84C]" />
                <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                  Get Started
                </span>
              </span>
              <h2 className="font-cormorant text-[52px] md:text-[62px] font-light leading-[1.05] text-[#F0EDE8]">
                Ready to automate
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8D5A3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  your growth?
                </span>
              </h2>
              <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.45)]">
                Send us a message or book a direct call. We respond within 24 hours.
              </p>
            </div>

            {/* Book a call */}
            <div className="border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="font-mono text-[11px] tracking-[2px] uppercase text-[rgba(240,237,232,0.6)]">
                  Available Now
                </span>
              </div>
              <p className="font-syne text-[17px] font-bold text-[#F0EDE8]">
                Book a Free Strategy Call
              </p>
              <p className="font-mono text-[12px] leading-[1.8] text-[rgba(240,237,232,0.4)]">
                30 minutes. No pitch. Just an honest assessment of your business and
                what automation could do for it.
              </p>
              <a
                href="[Calendly URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-6 py-3 hover:bg-[#E8D5A3] transition-colors duration-300 w-fit"
              >
                Schedule Call
                <span>↗</span>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@ashnafai.com"
                className="font-mono text-[12px] text-[rgba(201,168,76,0.7)] hover:text-[#C9A84C] transition-colors duration-300"
              >
                hello@ashnafai.com
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {status === "sent" ? (
              <div className="flex h-full items-center justify-center border border-[rgba(201,168,76,0.2)] p-12">
                <div className="flex flex-col items-center gap-4 text-center">
                  <span className="font-cormorant text-[64px] text-[#C9A84C]">✓</span>
                  <p className="font-syne text-[18px] font-bold text-[#F0EDE8]">
                    Message received.
                  </p>
                  <p className="font-mono text-[12px] text-[rgba(240,237,232,0.45)]">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Full name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.4)]"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [field.id]: e.target.value }))
                      }
                      required
                      className="border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] px-4 py-3 font-mono text-[13px] text-[#F0EDE8] placeholder-[rgba(240,237,232,0.2)] outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors duration-300"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.4)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, or questions..."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    required
                    className="border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.03)] px-4 py-3 font-mono text-[13px] text-[#F0EDE8] placeholder-[rgba(240,237,232,0.2)] outline-none focus:border-[rgba(201,168,76,0.5)] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 flex items-center justify-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-8 py-4 hover:bg-[#E8D5A3] transition-all duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <span>→</span>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
