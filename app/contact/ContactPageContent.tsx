"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "Within 24 hours on business days. For urgent inquiries, note it in your message.",
  },
  {
    q: "Do you work with early-stage businesses?",
    a: "Yes. Some of our best work has been with founders building from scratch who needed both the brand and the infrastructure.",
  },
  {
    q: "How is pricing structured?",
    a: "Project-based for defined scope work, retainer-based for ongoing automation and growth. We discuss specifics on the strategy call.",
  },
  {
    q: "What's the minimum engagement?",
    a: "We don't have a hard minimum, but we take on work where we can deliver meaningful impact. A 30-minute call usually clarifies fit.",
  },
];

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#080810] px-6 pt-36 pb-20">
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
            className="flex flex-col gap-5 max-w-[640px]"
          >
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
                Let&apos;s Talk
              </span>
            </span>
            <h1 className="font-syne text-[52px] md:text-[68px] font-bold leading-[0.95] text-[#F0EDE8]">
              Start a
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8D5A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Conversation.
              </span>
            </h1>
            <p className="font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)]">
              Send a message or book a call directly. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] grid gap-16 md:grid-cols-[1fr_480px]">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            {/* Book a call */}
            <div className="border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.03)] p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#C9A84C]">
                  Available for New Projects
                </span>
              </div>
              <h2 className="font-syne text-[22px] font-bold text-[#F0EDE8]">
                Book a Free Strategy Call
              </h2>
              <p className="font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                30 minutes. No pitch. We&apos;ll audit your current setup, identify your
                highest-leverage opportunities, and give you a straight answer on
                whether and how we can help.
              </p>
              <a
                href="[Calendly URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-6 py-3 hover:bg-[#E8D5A3] transition-colors duration-300 w-fit"
              >
                Schedule a Call
                <span>↗</span>
              </a>
            </div>

            {/* Direct contact */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)]">
                Direct Contact
              </span>
              <a
                href="mailto:hello@ashnafai.com"
                className="font-cormorant text-[24px] font-light text-[rgba(201,168,76,0.8)] hover:text-[#C9A84C] transition-colors duration-300"
              >
                hello@ashnafai.com
              </a>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)] mb-2">
                Common Questions
              </span>
              {faqs.map((faq, i) => (
                <div key={i} className="border border-[rgba(201,168,76,0.1)] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-mono text-[12px] text-[rgba(240,237,232,0.7)]">
                      {faq.q}
                    </span>
                    <span
                      className="text-[#C9A84C] text-[18px] transition-transform duration-300 flex-shrink-0 ml-4"
                      style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                  >
                    <p className="px-5 pb-4 font-mono text-[12px] leading-[1.9] text-[rgba(240,237,232,0.45)]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {status === "sent" ? (
              <div className="border border-[rgba(201,168,76,0.2)] p-12 flex flex-col items-center gap-6 text-center">
                <span className="font-cormorant text-[72px] font-light text-[#C9A84C]">✓</span>
                <h3 className="font-syne text-[22px] font-bold text-[#F0EDE8]">
                  Message Received
                </h3>
                <p className="font-mono text-[12px] leading-[2] text-[rgba(240,237,232,0.45)] max-w-[320px]">
                  We&apos;ll review your message and get back to you within 24 hours with
                  a clear next step.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="font-mono text-[11px] tracking-[2px] uppercase text-[rgba(201,168,76,0.5)] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-8 flex flex-col gap-5"
              >
                <h3 className="font-syne text-[18px] font-bold text-[#F0EDE8] mb-2">
                  Send a Message
                </h3>

                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Full name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.35)]"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [field.id]: e.target.value }))}
                      required
                      className="border border-[rgba(201,168,76,0.12)] bg-[rgba(8,8,16,0.8)] px-4 py-3 font-mono text-[13px] text-[#F0EDE8] placeholder-[rgba(240,237,232,0.15)] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors duration-300"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.35)]"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                    className="border border-[rgba(201,168,76,0.12)] bg-[rgba(8,8,16,0.8)] px-4 py-3 font-mono text-[13px] text-[rgba(240,237,232,0.7)] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors duration-300 appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="web">Website Design & Development</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="ai">AI Chatbots</option>
                    <option value="admissions">University Admissions</option>
                    <option value="seo">SEO & Growth</option>
                    <option value="brand">Brand Identity</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.35)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, challenges, or goals..."
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    required
                    className="border border-[rgba(201,168,76,0.12)] bg-[rgba(8,8,16,0.8)] px-4 py-3 font-mono text-[13px] text-[#F0EDE8] placeholder-[rgba(240,237,232,0.15)] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 flex items-center justify-center gap-3 bg-[#C9A84C] font-mono text-[11px] tracking-[2.5px] uppercase text-[#080810] px-8 py-4 hover:bg-[#E8D5A3] transition-all duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>Send Message <span>→</span></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
