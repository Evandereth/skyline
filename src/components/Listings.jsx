import house1 from "../img/house05.jpg"
import house2 from "../img/house06.jpg"
import house3 from "../img/house07.jpg"
import house4 from "../img/house08.jpg"
import house5 from "../img/house09.jpg"
import house6 from "../img/house10.jpg"


const listings = [
  { id: 1, tag: "New", name: "The Origin", location: "Ijebu-Oru Exp. way, Ogun State.", beds: 3, baths: 2, sqft: "300", price: "NGN3,000,000", image: house1 },
  { id: 2, tag: "3D tour", name: "Inizio", location: "GRA, Ijebu Ode, Ogun State.", beds: 4, baths: 3, sqft: "500", price: "NGN5,000,000", image: house2 },
  { id: 3, tag: "For rent", name: "Ire Estate", location: "Imodi, Ijebu Ode, Ogun State.", beds: 2, baths: 2, sqft: "300", price: "NGN1,5000,000/yr", image: house3 },
  { id: 4, tag: "New", name: "Amen Estate - Phase 2", location: "Ibeju-Lekki, Lagos State.", beds: 5, baths: 4, sqft: "1000", price: "NGN12,000,000", image: house4 },
  { id: 5, tag: "Open house", name: "The Baruch Residence", location: "Ibeju-Lekki, Lagos State.", beds: 3, baths: 2, sqft: "300", price: "NGN8,500,000", image: house5 },
  { id: 6, tag: "For rent", name: "Sycamore", location: "Ibeju-Lekki, Lagos State.", beds: 1, baths: 1, sqft: "300", price: "NGN1,500,000/mo", image: house6 },
];

function ListingCard({ item }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-lg">
      <div className="relative h-56 bg-brand-soft">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="absolute bottom-4 left-4 text-xs font-medium text-brand-dark">
            [LISTING PHOTO]
          </span>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1.5 text-[0.8125rem] font-semibold text-accent-ink">
          {item.tag}
        </span>
      </div>

      <div className="p-6">
        <p className="font-display text-2xl font-bold text-ink">{item.price}</p>
        <h3 className="mb-0.5 mt-1.5 font-medium text-ink">{item.name}</h3>
        <p className="text-[0.9375rem] text-ink-muted">{item.location}</p>
        <p className="mt-4 border-t border-line pt-4 text-[0.9375rem] text-ink-muted">
          {item.beds} bd · {item.baths} ba · {item.sqft} sq m
        </p>
      </div>
    </article>
  );
}

export default function Listings() {
  return (
    <section id="listings" className="py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Listings
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Fresh on the market
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          Every listing is verified by our team, with real photos and real details.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center cursor-pointer">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-xl border border-line-strong bg-surface px-6 font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            View all listings
          </a>
        </div>
      </div>
    </section>
  );
}
