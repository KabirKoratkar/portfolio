import { generateAsciiBlock } from "../lib/ascii";
import Marquee from "../components/Marquee";

const projects = [
  {
    id: "waypoint",
    title: "Waypoint",
    href: "https://waypointedu.org",
    year: "2025",
    shape: "radial" as const,
    description:
      "AI-powered college application platform consolidating essay drafting, deadline tracking, AI counseling, and document storage — live beta with paying users at $55.99/season.",
  },
  {
    id: "therapeuo",
    title: "Therapeuo",
    href: "https://therapeuo.xyz",
    year: "2026",
    shape: "diagonal" as const,
    description:
      "Clinical notes platform and Tarsole, our smart weight-bearing insole with pressure-sensing hardware, closing a compliance gap in post-surgical rehab. Piloting with The Ensign Group across Bay Area facilities serving 20,000+ patients.",
  },
  {
    id: "caveat",
    title: "Caveat",
    year: "2026",
    shape: "square" as const,
    description:
      "AI-powered lease contract review platform built with Actian VectorAI, Scalekit, and Render — shipped at the Agents in Production hackathon.",
  },
  {
    id: "mumbai-falcons",
    title: "Mumbai Falcons Racing",
    year: "2025",
    shape: "bands" as const,
    description:
      "Designed the Agla Star driver-development program end-to-end — a nationwide venue analysis across 12 Indian cities and a full competition framework to recruit next-gen racing talent.",
  },
  {
    id: "soloscale",
    title: "SoloScale Solutions",
    year: "2024",
    shape: "noise" as const,
    description:
      "Building custom AI automations and chatbots with n8n, OpenAI, and workflow tooling for SMBs — full sales pipeline from cold contact to close.",
  },
];

export default function Work() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
        [ 01 / work ]
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Work
      </h1>

      <div className="mt-12 divide-y divide-border border-t border-border">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="grid scroll-mt-24 grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[minmax(120px,160px)_1fr_auto] sm:gap-8"
          >
            <pre className="hidden font-mono text-[7px] leading-[1.05] text-faint sm:block">
              {generateAsciiBlock(project.id, 9, 20, project.shape)}
            </pre>
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-border pb-[1px] transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <span className="font-mono text-[13px] text-faint">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 max-w-md text-sm leading-[1.7] text-muted">
                {project.description}
              </p>
            </div>
            <span className="hidden text-lg text-faint sm:block">↗</span>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Marquee text="//// KK // WORK // BUILD // SHIP // ITERATE //// " />
      </div>
    </section>
  );
}
