import { useState } from "react";
import image from "../img/image01.jpg"

const inputClass =
  "min-h-[3.25rem] w-full rounded-xl border border-line-strong bg-surface px-4 text-base text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", intent: "Buy", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    setSent(true);
  };

  return (
    <section id="contact" className="bg-surface-alt py-24">
      <div className="mx-auto grid max-w-site gap-14 px-6 md:px-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Contact
          </p>
          <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
            Let’s find your place.
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Tell us what you’re looking for and an agent will reach out.
          </p>

          <ul className="space-y-2 text-ink-muted">
            <li>info@skylineproperties.com</li>
            <li>+2341234567890, +2340987654321</li>
            <li>Lagos, Nigeria</li>
          </ul>

          <div className="w-full h-75 rounded-2xl mt-5">
            <img className="w-full h-full object-cover rounded-2xl" src={image} alt="" />
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          {sent ? (
            <div role="status" className="py-10 text-center">
              <p className="font-display text-2xl font-bold text-ink">Message sent</p>
              <p className="mt-2 text-ink-muted">
                Thanks, {form.name || "friend"}! An agent will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field id="contact-name" label="Full name">
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className={inputClass}
                />
              </Field>

              <Field id="contact-email" label="Email">
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass}
                />
              </Field>

              <Field id="contact-intent" label="I want to">
                <select
                  id="contact-intent"
                  value={form.intent}
                  onChange={update("intent")}
                  className={inputClass}
                >
                  <option>Buy</option>
                  <option>Rent</option>
                  <option>Sell</option>
                </select>
              </Field>

              <Field id="contact-message" label="Message">
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={`${inputClass} min-h-32 py-3`}
                />
              </Field>

              <button
                type="submit"
                className="min-h-13 w-full rounded-xl bg-brand px-6 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
