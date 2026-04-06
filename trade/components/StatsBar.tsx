"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Total Trades",    value: 1247, prefix: "",   suffix: "",  color: "var(--white)" },
  { label: "Profitable",      value: 1247, prefix: "",   suffix: "",  color: "var(--green)" },
  { label: "Avg. Profit / Trade", value: 38, prefix: "+$", suffix: "", color: "var(--green)" },
  { label: "Active Now",      value: 6,    prefix: "",   suffix: "",  color: "var(--gold)" },
];

function Counter({ target, prefix = "", suffix = "", color }: { target: number; prefix?: string; suffix?: string; color: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setCount(Math.floor(ease * target));
          if (t < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "32px", fontWeight: 800, color }}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <div id="performance" style={{
      display: "grid", gridTemplateColumns: "repeat(4,1fr)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg-card)",
    }}
    className="grid-cols-2 md:grid-cols-4"
    >
      {STATS.map((s, i) => (
        <div key={i} style={{
          padding: "28px 32px",
          borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
        }}>
          <div style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--w35)", marginBottom: "10px" }}>
            {s.label}
          </div>
          <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} color={s.color} />
        </div>
      ))}
    </div>
  );
}
