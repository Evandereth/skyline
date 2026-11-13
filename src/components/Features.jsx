import { TbHomeSearch, TbMapPinSearch } from "react-icons/tb";
import { CiCalculator2 } from "react-icons/ci";
import { MdNotificationsActive, MdVerifiedUser } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


const features = [
  { icon: <TbMapPinSearch />, title: "Map search", text: "Draw your area and filter by commute, schools and amenities." },
  { icon: <TbHomeSearch />, title: "3D virtual tours", text: "Explore every room before you set foot inside." },
  { icon: <CiCalculator2 />, title: "Mortgage calculator", text: "See real monthly costs on every listing." },
  { icon: <MdNotificationsActive />, title: "Saved searches and alerts", text: "Get notified the moment a matching home appears." },
  { icon: <RiCustomerService2Fill />, title: "Agent chat", text: "Message a local expert and get answers fast." },
  { icon: <MdVerifiedUser />, title: "Verified listings", text: "Real photos, real prices, checked by our team." },
];

export default function Features() {
  return (
    <section id="features" className="bg-surface-alt py-24 rounded-2xl">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Features
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Built for how people actually house-hunt.
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          Everything you need, nothing you don’t.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft font-display text-xl font-bold text-brand-dark"
              >
                {f.icon}
              </div>
              <h3 className="mb-2 mt-5 text-xl font-semibold text-ink">{f.title}</h3>
              <p className="leading-relaxed text-ink-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
