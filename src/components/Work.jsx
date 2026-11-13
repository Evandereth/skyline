const steps = [
  {
    title: "Search smarter",
    text: "Filter by price, commute and lifestyle, on a map or a list.",
  },
  {
    title: "Tour from anywhere",
    text: "Walk through 3D tours and save your favorites.",
  },
  {
    title: "Book in minutes",
    text: "Chat with a local agent and lock in a viewing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          How it works
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Three steps to your next place.
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          No paperwork maze, no endless back and forth.
        </p>

        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft font-display text-xl font-bold text-brand-dark"
              >
                {i + 1}
              </div>
              <h3 className="mb-2 mt-5 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
