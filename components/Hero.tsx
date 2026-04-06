"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SplineScene } from "./ui/splite";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
  }),
};

function MagneticBtn({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const base =
    "inline-flex items-center gap-3 font-mono text-[11px] tracking-[2.5px] uppercase transition-all duration-300 px-7 py-4";
  const styles = {
    primary:
      "bg-[#C9A84C] text-[#080810] hover:bg-[#E8D5A3] hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]",
    ghost:
      "border border-[rgba(201,168,76,0.35)] text-[#C9A84C] hover:bg-[rgba(201,168,76,0.08)] hover:border-[#C9A84C]",
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={`${base} ${styles[variant]}`}
      style={{ transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), background 0.3s, box-shadow 0.3s, border-color 0.3s" }}
    >
      {children}
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#080810]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#080810_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16 px-6 pt-28 pb-16 md:flex-row md:gap-8 md:pt-0 md:pb-0">
        {/* Left — text */}
        <div className="flex flex-1 flex-col items-start gap-8">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#C9A84C]">
              AI Studio
            </span>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-cormorant text-[68px] md:text-[82px] lg:text-[96px] font-light leading-[0.92] tracking-[-1px] text-[#F0EDE8]"
            >
              Intelligence.
            </motion.h1>
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-cormorant text-[68px] md:text-[82px] lg:text-[96px] font-light leading-[0.92] tracking-[-1px] italic"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automated.
            </motion.h1>
          </div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-[420px] font-mono text-[13px] leading-[2] text-[rgba(240,237,232,0.5)]"
          >
            We build AI systems that work while you sleep — automated funnels,
            intelligent chatbots, and digital experiences that convert at scale.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <MagneticBtn href="/contact" variant="primary">
              Book a Call
              <span className="text-[8px]">↗</span>
            </MagneticBtn>
            <MagneticBtn href="/services" variant="ghost">
              Our Services
            </MagneticBtn>
          </motion.div>

          {/* Stats mini */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex gap-8 pt-4"
          >
            {[
              { n: "120+", label: "Projects" },
              { n: "98%", label: "Satisfaction" },
              { n: "24/7", label: "Automation" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-syne text-[22px] font-bold text-[#C9A84C]">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(240,237,232,0.35)]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative h-[360px] w-full md:h-[520px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.25)]">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-[rgba(201,168,76,0.4)] to-transparent" />
      </motion.div>
    </section>
  );
}
