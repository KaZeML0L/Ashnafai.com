"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: "", label: "Service Verticals" },
  { value: 24, suffix: "/7", label: "Automation Active" },
];

function Counter({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    startTimeRef.current = performance.now();
    const duration = 1800;

    function tick(now: number) {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="border-y border-[rgba(201,168,76,0.12)] bg-[rgba(201,168,76,0.03)] py-16 px-6"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 text-center"
            style={{
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            <span className="font-cormorant text-[56px] md:text-[64px] font-light leading-none text-[#C9A84C]">
              <Counter target={s.value} suffix={s.suffix} started={isInView} />
            </span>
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(240,237,232,0.35)]">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
