import { useState, useEffect } from "react";

const links = [
  { label: "Listings", href: "#listings" },
  { label: "Areas", href: "#areas" },
  { label: "How it works", href: "#how" },
  { label: "Sell", href: "#sell" },
  { label: "Agents", href: "#agents" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/90 backdrop-blur transition-shadow ${
        scrolled ? "border-b border-line shadow-sm" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-310 items-center justify-between px-2 py-4 md:px-12"
      >
        {/* Logo */}
        <a href="#top" className="font-display text-[26px] font-bold text-ink uppercase">
          skyline<span className="text-brand">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[15px] font-medium font-sans text-ink transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-xl bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-flex"
        >
          Get started
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong text-ink lg:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-line bg-surface lg:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex max-w-310 flex-col px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] font-medium text-ink hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-xl bg-brand text-[16px] font-semibold text-white hover:bg-brand-dark"
            >
              Get started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
