import logo1 from "../img/logo1.png"
import logo2 from "../img/logo2.png"
import logo3 from "../img/logo3.png"
import logo4 from "../img/logo4.png"
import logo5 from "../img/logo5.png"
import logo6 from "../img/logo6.png"

const partners = [ logo1, logo2, logo3, logo4, logo5, logo6 ];

export default function Partners() {
  // The list is rendered twice so the loop has no gap
  const loop = [...partners, ...partners];

  return (
    <section aria-label="Partners" className="bg-surface-alt py-10 my-5 rounded-2xl">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-6 text-center text-sm text-ink-muted">
          Trusted by buyers, sellers and partners
        </p>
      </div>

      <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex flex-row gap-10 w-30 h-25 md:w-50 md:h-30 lg:w-80 lg:h-40 animate-marquee items-center font-semibold text-ink-muted hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((p, i) => (
            
            <img
              key={i}
              src={p}
              aria-hidden={i >= partners.length}
              className="w-full h-full object-cover"
             />
              
          ))}
        </div>
      </div>
    </section>
  );
}
