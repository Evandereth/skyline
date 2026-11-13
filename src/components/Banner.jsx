import { useState } from "react";

export default function SellBanner() {
  const [address, setAddress] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    // TODO: send { address } to your backend or form service
    console.log({ address });
    setSent(true);
  };

  return (
    <section id="sell" className="bg-surface-alt py-10 rounded-2xl">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <div className="grid items-center gap-10 rounded-2xl bg-brand p-8 text-white sm:p-14 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight">
              Thinking of selling?
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-brand-muted">
              Get a free valuation from a local expert, no strings attached.
            </p>
          </div>

          {sent ? (
            <p role="status" className="text-lg font-medium">
              Thanks! An agent will contact you soon with your valuation.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="sell-address" className="sr-only">
                Property address
              </label>
              <input
                id="sell-address"
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Property address"
                className="min-h-13 flex-2 rounded-xl border-0 bg-white px-4 text-base text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="min-h-[3.25rem] flex-1 rounded-xl bg-ink px-6 text-base cursor-pointer font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get valuation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
