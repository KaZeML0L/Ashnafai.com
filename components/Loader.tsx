"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem("ashnafai_intro_shown")) return;
    sessionStorage.setItem("ashnafai_intro_shown", "1");
    setVisible(true);

    // After fade-in (1.5s) + hold (0.5s) = 2.0s, trigger exit
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#080810]"
        >
          {/* Noise grain — matches site */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.032,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Centered logo lockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6 select-none"
          >
            {/* A-mark SVG — same as nav, scaled up */}
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon
                points="36,5 5,64 67,64"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <line x1="19" y1="52" x2="53" y2="52" stroke="#C9A84C" strokeWidth="1.8" />
              <line
                x1="36" y1="12" x2="36" y2="52"
                stroke="#F0EDE8"
                strokeWidth="1.2"
                strokeDasharray="3.5,3.5"
              />
              <circle cx="36" cy="5" r="2.5" fill="#C9A84C" />
            </svg>

            {/* Wordmark */}
            <span
              className="font-cormorant font-light text-[#F0EDE8]"
              style={{
                fontSize: "18px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              ASHNAFAI
            </span>

            {/* Thin gold rule — grows from center */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{ transformOrigin: "center" }}
              className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
