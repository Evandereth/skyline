import agent01 from "../img/agent05.jpg"
import agent02 from "../img/agent02.jpg"
import agent03 from "../img/agent03.jpg"
import agent04 from "../img/agent01.jpg"

const agents = [
  { id: 1, name: "Ireti James", role: "Quantity Surveyor", image: agent01 },
  { id: 2, name: "Joy Adeola", role: "Civil Engineer", image: agent03 },
  { id: 3, name: "Andrew Tate", role: "Site Supervisor", image: agent02 },
  { id: 4, name: "Michael Johnson", role: "CEO", image: agent04 },
];

function AgentCard({ agent }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface transition-shadow hover:shadow-lg">
      <div className="relative h-110 bg-brand-soft">
        {agent.image ? (
          <img
            src={agent.image}
            alt={agent.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="absolute bottom-4 left-4 text-xs font-medium text-brand-dark">
            [AGENT PHOTO]
          </span>
        )}
        <div className="p-3 absolute w-full bottom-0 left-0 bg-white/90 backdrop-blur max-h-30">
            <h3 className="text-lg font-semibold text-ink">{agent.name}</h3>
            <p className="mt-0.5 text-[0.9375rem] text-ink-muted">{agent.role}</p>
            <a
              href="#contact"
              className="mt-2 inline-flex min-h-8 items-center text-[0.9375rem] font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Contact {agent.name} →
            </a>
      </div>

      </div>

      
    </article>
  );
}

export default function Agents() {
  return (
    <section id="agents" className="py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Agents
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Meet your local experts.
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          Real people who know the streets you’re searching.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
