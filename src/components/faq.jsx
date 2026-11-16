const faqs = [
  {
    q: "How do I book a viewing?",
    a: "Open any listing, tap “Book a viewing” and pick a date and time that suits you. An agent will confirm by phone or WhatsApp, usually within [X hours]. You can also message the agent directly to ask questions first.",
  },
  {
    q: "Are the listings verified?",
    a: "Yes. Before a property goes live, our team checks that the photos are real, the price matches what the owner or agent confirms, and the owner or agent is who they say they are. We also encourage every buyer to have a lawyer confirm the title documents before paying for any property.",
  },
  {
    q: "Does it cost anything to use?",
    a: "Searching, saving homes and using the mortgage calculator are free. [Explain your fees here: for example, whether renters or buyers pay an agent or agency fee, and what sellers pay when a property is sold or let.]",
  },
  {
    q: "How does the free valuation work?",
    a: "Send us the property address and a few details. A local agent reviews the area, recent nearby sales and the condition of the property, then gives you an estimated value, usually within [X working days]. There’s no obligation to sell or list with us.",
  },
  {
    q: "Which areas do you cover?",
    a: "We currently cover [list your cities and neighborhoods, e.g. Lekki, Ikeja, Victoria Island]. If your area isn’t listed, send us a message and we’ll tell you when we expect to reach it.",
  },
  {
    q: "How do I know the property I’m buying is legitimate?",
    a: "Always do your own checks. Ask for the title documents, such as the Certificate of Occupancy or Deed of Assignment, and have a lawyer verify them at the land registry. Never pay in full before the checks are done, and only pay into official company or lawyer accounts, never to personal accounts.",
  },
];


export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        
        <h2 className="mb-4 font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Frequently asked Questions
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
            We have provided an answer for every valid questions on your mind
        </p>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-line bg-surface px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.0625rem] font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-brand transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
