











const testimonials = [
  {
    id: 1,
    quote: "We had an amazing experience with Skyline to purchase our first home. As first-time home buyers, me an dmy wife had a lot of questions and the designated relationship manager was always excellent at communicating, keeping us informed and making sure we understand everything throughout the process. I highly recommend Skyline to anyone looking to buy a home",
    name: "James Bobby Brown",
    detail: "Bought in Amen City, Ibeju-Lekki, Lagos State",
  },
  {
    id: 2,
    quote: "I don't sell properties but we needed to raise funds for the upcoming 2027 Election. It's why I reached out to Skyline to help me convince Aliko into buying one of my houses in Ibeju-Lekki. Fellow Nigerians, I would highly recommend Skyline for a House Deals",
    name: "Bola Ahmed Tinubu",
    detail: "Sold in Baruch Residence, Ibeju-Lekki, Lagos State",
  },
  {
    id: 3,
    quote: "Thank you so much! I feel so blessed to have met Skyline agents. Relating with the whole Skyline family was an awesome experience!",
    name: "Patricia Olokonla",
    detail: "Rented in Alaro City, Gbagada, Lagos State.",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Testimonials
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          What our clients say.
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          Our Customers' satisfaction means alot to us.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-6"
            >
              <blockquote className="text-[1.0625rem] leading-relaxed text-ink text-justify">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="h-11 w-11 shrink-0 rounded-full bg-brand-soft/10"
                />
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-[0.9375rem] text-ink-muted">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
