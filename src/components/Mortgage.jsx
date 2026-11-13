import { useState } from "react";
import image from "../img/image02.jpg"

const money = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

function calcLoanPayment(loan, ratePct, years) {
  const n = years * 12;
  if (!(loan > 0) || !(n > 0)) return null;

  const r = ratePct / 100 / 12;
  if (r === 0) return loan / n;

  return (loan * r) / (1 - Math.pow(1 + r, -n));
}

function Field({ id, label, value, onChange, step = "any", hint }) {
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
        aria-describedby={hint ? `${id}-hint` : undefined}
        className="min-h-[3.25rem] w-full rounded-xl border border-line-strong bg-surface px-4 text-base text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  );
}

function Row({ label, value, strong }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-2 text-[0.9375rem] ${
        strong ? "font-semibold text-ink" : "text-ink-muted"
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export default function MortgageCalculator() {
  // Example defaults. Replace them with your own.
  const [price, setPrice] = useState("50000000");
  const [down, setDown] = useState("10000000");
  const [rate, setRate] = useState("20"); // example only: use the lender's quoted rate
  const [years, setYears] = useState("20");
  const [taxRate, setTaxRate] = useState("0.0394"); // Lagos owner-occupied LUC, % of value per year
  const [insRate, setInsRate] = useState("0.25"); // building insurance, % of value per year

  const p = parseFloat(price);
  const d = parseFloat(down) || 0;

  const loanPayment = calcLoanPayment(p - d, parseFloat(rate) || 0, parseFloat(years));
  const tax = p > 0 ? (p * ((parseFloat(taxRate) || 0) / 100)) / 12 : 0;
  const insurance = p > 0 ? (p * ((parseFloat(insRate) || 0) / 100)) / 12 : 0;
  const total = loanPayment === null ? null : loanPayment + tax + insurance;

  return (
    <section id="calculator" className="py-10">
      <div className="mx-auto grid max-w-350 items-center gap-14 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Affordability
          </p>
          <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
            Know your monthly cost.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
            Adjust the numbers and see what a home really costs you each month,
            including property tax and insurance.
          </p>
          
          <div className="w-full h-100 md:h-130 rounded-2xl mx-auto mt-5 ">
            <img className="w-full h-full object-cover object-bottom rounded-2xl" src={image} alt="" />
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="calc-price" label="Home price (₦)" value={price} onChange={setPrice} />
            <Field id="calc-down" label="Down payment (₦)" value={down} onChange={setDown} />
            <Field id="calc-rate" label="Interest rate (% per year)" value={rate} onChange={setRate} step="0.01" />
            <Field id="calc-years" label="Loan term (years)" value={years} onChange={setYears} step="1" />
            <Field
              id="calc-tax"
              label="Property tax (% of value per year)"
              value={taxRate}
              onChange={setTaxRate}
              step="0.0001"
              hint="Default is the Lagos owner-occupied rate. Rates vary by state."
            />
            <Field
              id="calc-ins"
              label="Insurance (% of value per year)"
              value={insRate}
              onChange={setInsRate}
              step="0.01"
              hint="Typical building insurance is about 0.1–0.35%."
            />
          </div>

          <div className="mt-6 rounded-2xl bg-brand-soft p-6" role="status" aria-live="polite">
            <p className="text-sm font-semibold text-brand-dark">Estimated monthly cost</p>
            <p className="mb-3 mt-1 font-display text-4xl font-bold text-ink">
              {total === null ? "—" : money.format(total)}
            </p>

            <div className="divide-y divide-brand/15 border-t border-brand/15">
              <Row label="Loan repayment (principal + interest)" value={loanPayment === null ? "—" : money.format(loanPayment)} />
              <Row label="Property tax" value={money.format(tax)} />
              <Row label="Insurance" value={money.format(insurance)} />
            </div>

            <p className="mt-3 text-xs leading-relaxed text-ink-muted">
              This is an estimate only. Tax is based on the full price (the real
              charge uses the assessed value after reliefs). Legal, agency and
              lender fees are not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
