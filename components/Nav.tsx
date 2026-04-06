"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="36,5 5,64 67,64"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <line x1="19" y1="52" x2="53" y2="52" stroke="#C9A84C" strokeWidth="2.2" />
      <line
        x1="36"
        y1="12"
        x2="36"
        y2="52"
        stroke="#F0EDE8"
        strokeWidth="1.4"
        strokeDasharray="3.5,3.5"
      />
      <circle cx="36" cy="5" r="2.5" fill="#C9A84C" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "px-6 md:px-12 py-[18px] bg-[rgba(8,8,16,0.94)] backdrop-blur-[16px] border-b border-[rgba(201,168,76,0.10)]"
          : "px-6 md:px-12 py-7"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group" aria-label="Ashnafai home">
        <LogoMark />
        <span
          className="font-cormorant text-[15px] tracking-[5px] text-[#F0EDE8] font-light uppercase"
          style={{ letterSpacing: "5px" }}
        >
          ASHNAFAI
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-mono text-[11px] tracking-[2px] uppercase text-[rgba(240,237,232,0.6)] hover:text-[#C9A84C] transition-colors duration-300"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="font-mono text-[11px] tracking-[2px] uppercase border border-[rgba(201,168,76,0.4)] text-[#C9A84C] px-5 py-2 hover:bg-[rgba(201,168,76,0.08)] hover:border-[#C9A84C] transition-all duration-300"
        >
          Start Project
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span
          className={`block w-6 h-px bg-[#F0EDE8] transition-all duration-300 ${
            open ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-[#F0EDE8] transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-[#F0EDE8] transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-[rgba(8,8,16,0.97)] backdrop-blur-[16px] border-b border-[rgba(201,168,76,0.10)] transition-all duration-400 overflow-hidden md:hidden ${
          open ? "max-h-64 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[12px] tracking-[2px] uppercase text-[rgba(240,237,232,0.7)] hover:text-[#C9A84C] transition-colors py-3 border-b border-[rgba(201,168,76,0.08)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-[11px] tracking-[2px] uppercase text-[#C9A84C] py-3 mt-2"
          >
            Start Project →
          </Link>
        </div>
      </div>
    </header>
  );
}
