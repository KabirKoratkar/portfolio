import Link from "next/link";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 sm:px-10">
      <Reveal className="flex min-h-[65vh] flex-col justify-center">
        <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
          [ 02 / about ]
        </p>
        <h1 className="mt-6 font-serif text-7xl tracking-[0.01em] text-foreground sm:text-9xl">
          I&apos;m Kabir.
        </h1>
      </Reveal>

      <Reveal className="py-24 sm:py-32">
        <p className="text-xl leading-[1.75] text-muted sm:text-2xl">
          I&apos;m 18, from the Bay Area, and heading to Purdue this fall for
          Business Analytics and Supply Chain Management.
        </p>
      </Reveal>

      <Reveal className="py-24 sm:py-32">
        <p className="text-xl leading-[1.75] text-muted sm:text-2xl">
          I&apos;m a builder. I&apos;m currently shipping{" "}
          <Link
            href="/work#waypoint"
            className="border-b border-border pb-[1px] text-foreground transition-colors hover:border-foreground"
          >
            Waypoint
          </Link>
          , an AI college application platform with paying users, and
          co-founding{" "}
          <Link
            href="/work#therapeuo"
            className="border-b border-border pb-[1px] text-foreground transition-colors hover:border-foreground"
          >
            Therapeuo
          </Link>
          , a smart insole and clinical notes platform for physical therapy.
        </p>
      </Reveal>

      <Reveal className="py-24 sm:py-32">
        <p className="text-xl leading-[1.75] text-muted sm:text-2xl">
          The throughline of everything I build is the same: I&apos;m
          interested in systems—how they work, where they break, and where
          leverage lives. Whether it&apos;s the workflow a student uses to
          apply to college, the compliance gap in a doctor&apos;s order, or
          evaluating racing venues across 12 cities, it&apos;s the same
          question every time.
        </p>
        <p className="mt-8 font-serif text-3xl italic leading-[1.3] text-foreground sm:text-4xl">
          Where&apos;s the friction, and what does it take to remove it?
        </p>
      </Reveal>

      <Reveal className="py-24 sm:py-32">
        <p className="text-xl leading-[1.75] text-muted sm:text-2xl">
          I work in bursts. Long stretches of focus where the work compounds,
          balanced by time off the grid—drawing, lifting, and night drives
          through the East Bay hills.
        </p>
      </Reveal>

      <Reveal className="py-24 sm:py-32">
        <p className="text-xl leading-[1.75] text-muted sm:text-2xl">
          I&apos;m early in this. But I know what I&apos;m building toward.
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap gap-x-8 gap-y-2 border-t border-border py-16 font-mono text-[12px] tracking-[0.15em] text-faint uppercase">
        <a href="/resume.pdf" className="transition-colors hover:text-foreground">
          Résumé
        </a>
        <a
          href="mailto:hello@kabirkoratkar.com"
          className="transition-colors hover:text-foreground"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/kabir-koratkar"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/kabirkoratkar"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </Reveal>
    </div>
  );
}
