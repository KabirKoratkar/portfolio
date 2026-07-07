const projects = [
  {
    id: "waypoint",
    title: "Waypoint",
    year: "2025",
    description:
      "An AI-powered platform that helps students navigate the college application process — currently shipping with paying users.",
  },
  {
    id: "therapeuo",
    title: "Therapeuo",
    year: "2025",
    description:
      "A smart insole and clinical notes platform for physical therapy, co-founded to close the gap between patient data and clinical documentation.",
  },
  {
    id: "project-three",
    title: "Project Three",
    year: "2023",
    description:
      "[Placeholder description — replace with a short summary of the project.]",
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
              <h2 className="text-xl font-medium">{project.title}</h2>
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
