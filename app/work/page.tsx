const projects = [
  {
    id: "waypoint",
    title: "Waypoint",
    href: "https://waypointedu.org",
    year: "2025",
    description:
      "AI-powered college application platform consolidating essay drafting, deadline tracking, AI counseling, and document storage — live beta with paying users at $55.99/season.",
  },
  {
    id: "therapeuo",
    title: "Therapeuo",
    href: "https://therapeuo.xyz",
    year: "2026",
    description:
      "Smart weight-bearing insole and clinical notes platform closing a compliance gap in post-surgical rehab. Piloting with The Ensign Group across Bay Area facilities serving 20,000+ patients.",
  },
  {
    id: "mumbai-falcons",
    title: "Mumbai Falcons Racing",
    year: "2025",
    description:
      "Designed the Agla Star driver-development program end-to-end — a nationwide venue analysis across 12 Indian cities and a full competition framework to recruit next-gen racing talent.",
  },
];

export default function Work() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Work</h1>
      <div className="mt-12 divide-y divide-black/10 border-t border-black/10">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="flex scroll-mt-24 flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h2 className="text-xl font-medium">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-black/60"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <p className="mt-1 max-w-md text-sm text-black/60">
                {project.description}
              </p>
            </div>
            <span className="font-mono text-xs text-black/40">
              {project.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
