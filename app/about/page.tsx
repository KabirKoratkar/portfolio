import Link from "next/link";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div className="grain relative bg-[linear-gradient(to_bottom,#15130f_0%,#15130f_24%,#f2ece2_36%,#f2ece2_100%)]">
      <div className="relative z-10 mx-auto max-w-2xl px-6 sm:px-10">

        {/* Hero */}
        <Reveal className="flex min-h-[65vh] items-center">
          <h1 className="font-serif text-6xl italic leading-tight text-[#f2ece2] sm:text-8xl">
            I&apos;m Kabir.
          </h1>
        </Reveal>

        <Reveal className="py-32 sm:py-40">
          <p className="font-serif text-xl leading-[1.8] text-[#15130f]/85 sm:text-2xl">
            I&apos;m 18, from the Bay Area, and heading to Purdue this fall for
            Business Analytics and Supply Chain Management.
          </p>
        </Reveal>

        <Reveal className="py-32 sm:py-40">
          <p className="font-serif text-xl leading-[1.8] text-[#15130f]/85 sm:text-2xl">
            I&apos;m a builder. I&apos;m currently shipping{" "}
            <Link
              href="/work#waypoint"
              className="decoration-[#15130f]/30 underline underline-offset-4 transition-all hover:decoration-[#15130f]"
            >
              Waypoint
            </Link>
            , an AI college application platform with paying users, and
            co-founding{" "}
            <Link
              href="/work#therapeuo"
              className="decoration-[#15130f]/30 underline underline-offset-4 transition-all hover:decoration-[#15130f]"
            >
              Therapeuo
            </Link>
            , a smart insole and clinical notes platform for physical therapy.
          </p>
        </Reveal>

        <Reveal className="py-32 sm:py-40">
          <p className="font-serif text-xl leading-[1.8] text-[#15130f]/85 sm:text-2xl">
            The throughline of everything I build is the same: I&apos;m
            interested in systems&mdash;how they work, where they break, and
            where leverage lives. Whether it&apos;s the workflow a student uses
            to apply to college, the compliance gap in a doctor&apos;s order,
            or evaluating racing venues across 12 cities, it&apos;s the same
            question every time. Where&apos;s the friction, and what does it
            take to remove it?
          </p>
        </Reveal>

        <Reveal className="py-32 sm:py-40">
          <p className="font-serif text-xl leading-[1.8] text-[#15130f]/85 sm:text-2xl">
            I work in bursts. Long stretches of focus where the work compounds,
            balanced by time off the grid&mdash;drawing, lifting, and night
            drives through the East Bay hills.
          </p>
        </Reveal>

        <Reveal className="py-32 sm:py-40">
          <p className="font-serif text-xl leading-[1.8] text-[#15130f]/85 sm:text-2xl">
            I&apos;m early in this. But I know what I&apos;m building toward.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-x-8 gap-y-2 border-t border-[#15130f]/10 py-16 font-mono text-xs uppercase tracking-[0.2em] text-[#15130f]/40">
          <a
            href="/resume.pdf"
            className="transition-colors hover:text-[#15130f]/70"
          >
            R&eacute;sum&eacute;
          </a>
          <a
            href="mailto:hello@kabirkoratka.com"
            className="transition-colors hover:text-[#15130f]/70"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/kabirkoratkar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#15130f]/70"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kabirkoratkar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#15130f]/70"
          >
            GitHub
          </a>
        </Reveal>
      </div>
    </div>
  );
}
