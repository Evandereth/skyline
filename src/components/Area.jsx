import image1 from  "../img/house02.jpg"
import image2 from  "../img/house03.jpg"
import image3 from  "../img/house04.jpg"
import image4 from  "../img/house05.jpg"


const areas = [
  { id: 1, name: "Ibeju-Lekki, Lagos State.", count: "Amen Estate, Phase 3", image: image1 },
  { id: 2, name: "Ibeju-Lekki, Lagos State", count: "The Baruch Residence", image: image3 },
  { id: 3, name: "Gbagada, Lagos State", count: "Alaro City", image: image4 },
  { id: 4, name: "Epe, Lagos State", count: "Basquiat Homes", image: image2 },
];

function AreaTile({ area }) {
  const hasImage = Boolean(area.image);

  return (
    <div
      className="group relative flex aspect-4/5 items-end overflow-hidden rounded-2xl bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {hasImage && (
        <>
          <img
            src={area.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />
        </>
      )}
      

      <a 
        href="#"
        className={`bg-transparent backdrop-blur rounded-2xl relative w-full p-6 ${hasImage ? "text-white" : "text-brand-dark"}`}>
        <h3 className="font-display text-xl font-semibold">{area.name}</h3>
        <div className="mt-1 flex items-center justify-between text-[1rem]">
          <span>{area.count}</span>
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Areas() {
  return (
    <section id="areas" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Neighborhoods
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-ink">
          Explore by area
        </h2>
        <p className="mb-12 max-w-xl text-lg leading-relaxed text-ink-muted">
          Find the neighborhood first, then the home.
        </p>

        <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <AreaTile key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
