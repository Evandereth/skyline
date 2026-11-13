import { useState } from "react";
import image from "../img/house01.jpg"

const types = ["Houses", "Apartments", "Condos", "New builds"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: pass { query, type } to your search / listings filter
    console.log({ query, type });
    window.location.hash = "#listings";
  };

  return (
    <section className="mx-auto max-w-310 px-6 pb-20 pt-10 md:px-12 lg:pb-24 lg:pt-14">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
    

        <div>
          <span className="inline-block rounded-full bg-brand-soft px-3.5 py-2 text-sm font-semibold text-brand-dark">
            Buy, rent and sell, all in one place
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink lg:text-[64px]">
            Finding a home should be this easy.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Browse verified listings, tour them in 3D and book a viewing in a couple of taps.
          </p>

        
          <form
            onSubmit={handleSubmit}
            role="search"
            className="mt-9 flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-4 sm:flex-row"
          >
            <label htmlFor="hero-search" className="sr-only">
              Location
            </label>
            <input
              id="hero-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="City, neighborhood or ZIP"
              className="min-h-[3em] flex-2 rounded-xl border border-line-strong bg-surface px-4 text-base text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <button
              type="submit"
              className="min-h-[3em] flex-1 rounded-xl bg-brand px-6 text-base cursor-pointer font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Search homes
            </button>
          </form>

          
          <div className="mt-4 flex flex-wrap gap-2.5" role="group" aria-label="Property type">
            {types.map((t) => {
              const active = type === t;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setType(active ? null : t)}
                  className={`rounded-full border px-3.5 py-2 text-sm transition-colors cursor-pointer ${
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-surface-alt text-ink-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

    

        <div className="relative min-h-80 overflow-hidden rounded-4xl bg-brand-soft sm:min-h-100 lg:min-h-130">
          <img src={image} alt="..." className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
