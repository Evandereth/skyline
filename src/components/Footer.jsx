const columns = [
  {
    title: "Explore",
    links: [
      { label: "Listings", href: "#listings" },
      { label: "Areas", href: "#areas" },
      { label: "How it works", href: "#how" },
      { label: "Mortgage calculator", href: "#calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Sell with us", href: "#sell" },
      { label: "Agents", href: "#agents" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-site px-6 pb-10 pt-16 md:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>
            <a href="#top" className="font-display text-[1.375rem] font-bold text-ink">
              Skyline<span className="text-brand">.</span>
            </a>
            <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-ink-muted">
              Finding a Home should be easy.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 font-semibold text-ink">{col.title}</h3>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-9 items-center text-[0.9375rem] text-ink-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Skyline. All rights reserved. || Built with ❤️ <a className="italics text-brand" href="#">Oluwatobi</a>
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-brand">
              Privacy policy
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Terms
            </a>
            <a href="#top" className="font-semibold text-brand transition-colors hover:text-brand-dark">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
