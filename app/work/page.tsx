import { generateAsciiBlock } from "../lib/ascii";
import Marquee from "../components/Marquee";
import Reveal from "../components/Reveal";
import GlitchText from "../components/GlitchText";

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
    <section className="overflow-x-clip px-6 py-24 sm:px-10">
      <Reveal>
        <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
          [ 01 / work ]
        </p>
        <h1 className="riso mt-4 font-serif text-7xl leading-[0.9] sm:text-9xl">
          Work<span className="italic">s</span>
        </h1>
      </Reveal>

      <div className="mt-16 border-t-2 border-foreground">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={Math.min(i, 4) * 80}>
            <article
              id={project.id}
              className="group grid scroll-mt-24 grid-cols-1 items-start gap-6 border-b border-border py-10 sm:grid-cols-[3rem_1fr_minmax(120px,160px)] sm:gap-10"
            >
              <span className="font-mono text-[13px] text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-serif text-4xl leading-[1] transition-transform duration-300 group-hover:translate-x-2 group-hover:italic sm:text-6xl">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="decoration-accent decoration-4 underline-offset-[0.12em] hover:underline"
                      >
                        <GlitchText text={project.title} />
                        <span className="ml-2 text-2xl text-accent">↗</span>
                      </a>
                    ) : (
                      <GlitchText text={project.title} />
                    )}
                  </h2>
                  <span className="font-mono text-[13px] text-faint">
                    {project.year}
                  </span>
                </div>
                <p className="mt-4 max-w-lg text-base leading-[1.7] text-muted">
                  {project.description}
                </p>
              </div>
              <pre
                aria-hidden="true"
                className="riso-sm hidden rotate-2 font-mono text-[7px] leading-[1.05] text-foreground transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 sm:block"
              >
                {generateAsciiBlock(project.id, 9, 20, project.shape)}
              </pre>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <Marquee text="build ✶ ship ✶ iterate ✶ repeat ✶ " />
      </div>
    </section>
  );
}
