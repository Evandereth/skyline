import { useState } from "react";

const CURRENCY = "NGN"; 

const money = new Intl.NumberFormat("NGN", {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 0,
});

function calcMonthly(price, down, ratePct, years) {
  const loan = price - down;
  const n = years * 12;
  if (!(loan > 0) || !(n > 0)) return null;

  const r = ratePct / 100 / 12;
  if (r === 0) return loan / n;

  return (loan * r) / (1 - Math.pow(1 + r, -n));
}

function Field({ id, label, value, onChange, step = "any" }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min="0"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-13 w-full rounded-xl border border-line-strong bg-surface px-4 text-base text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

export default function MortgageCalculator() {
  // Example defaults, change or clear them as you like
  const [price, setPrice] = useState("10000000");
  const [down, setDown] = useState("200000");
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("5");

  const monthly = calcMonthly(
    parseFloat(price),
    parseFloat(down) || 0,
    parseFloat(rate) || 0,
    parseFloat(years)
  );

  return (
    <section id="calculator" className="py-24">
      <div className="mx-auto grid max-w-350 items-center gap-14 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Affordability
          </p>
          <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
            Know your monthly cost.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
            Adjust the numbers and see what a home really costs you each month.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="calc-price" label="Home price" value={price} onChange={setPrice} />
            <Field id="calc-down" label="Down payment" value={down} onChange={setDown} />
            <Field id="calc-rate" label="Interest rate (%)" value={rate} onChange={setRate} step="0.01" />
            <Field id="calc-years" label="Loan term (years)" value={years} onChange={setYears} step="1" />
          </div>

          <div
            className="mt-6 rounded-2xl bg-brand-soft p-6"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm font-semibold text-brand-dark">
              Estimated monthly payment
            </p>
            <p className="mt-1 font-display text-4xl font-bold text-ink">
              {monthly === null ? "—" : money.format(monthly)}
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Principal and interest only. Taxes, insurance and fees are not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
