import Link from "next/link";

function LogoMark({ size = 20 }: { size?: number }) {
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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  {
    href: "#",
    label: "X / Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(201,168,76,0.10)] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Ashnafai home">
              <LogoMark size={24} />
              <span className="font-cormorant text-[14px] tracking-[5px] text-[#F0EDE8] font-light uppercase">
                ASHNAFAI
              </span>
            </Link>
            <p className="font-mono text-[11px] leading-[1.9] text-[rgba(240,237,232,0.35)] max-w-[200px]">
              Digital intelligence studio. We build systems that work while you sleep.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[rgba(240,237,232,0.3)] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)]">
              Navigation
            </span>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.45)] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Properties */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)]">
              Properties
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://ashnafai.com"
                className="font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.45)] hover:text-[#C9A84C] transition-colors duration-300"
              >
                ashnafai.com
              </a>
              <a
                href="https://trade.ashnafai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.45)] hover:text-[#C9A84C] transition-colors duration-300"
              >
                trade.ashnafai.com
                <span className="text-[8px] text-[rgba(201,168,76,0.4)]">↗</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[9px] tracking-[3px] uppercase text-[rgba(240,237,232,0.3)]">
              Legal
            </span>
            <div className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.45)] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="mailto:hello@ashnafai.com"
                className="font-mono text-[11px] tracking-[1px] text-[rgba(240,237,232,0.45)] hover:text-[#C9A84C] transition-colors duration-300"
              >
                hello@ashnafai.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(201,168,76,0.08)] pt-6 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[10px] tracking-[1px] text-[rgba(240,237,232,0.25)]">
            © {year} Ashnafai. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-mono text-[10px] tracking-[1px] text-[rgba(240,237,232,0.35)] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-[rgba(201,168,76,0.2)] text-[8px]">·</span>
            <Link
              href="/terms"
              className="font-mono text-[10px] tracking-[1px] text-[rgba(240,237,232,0.35)] hover:text-[#C9A84C] transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <span className="hidden md:inline text-[rgba(201,168,76,0.2)] text-[8px]">·</span>
            <span className="hidden md:inline font-mono text-[10px] tracking-[1px] text-[rgba(240,237,232,0.15)]">
              Intelligence. Automated.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
