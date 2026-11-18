import GlitchText from "./components/GlitchText";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";
import { generateAsciiGlobe } from "./lib/ascii";

const BADGE_TEXT = "builder · artist · systems thinker · ";

export default function Home() {
  const globe = generateAsciiGlobe(90, 46, "kk-globe");

  return (
    <>
      <section className="relative flex min-h-[88dvh] flex-col justify-center overflow-hidden px-6 py-16 sm:px-10">
        <Reveal>
          <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
            [ 00 / overview ]
          </p>
          <h1 className="riso mt-6 font-serif text-[clamp(4.5rem,17vw,16rem)] leading-[0.82] tracking-[-0.02em]">
            <GlitchText text="Kabir" triggerOnView className="block" />
            <GlitchText
              text="Koratkar"
              triggerOnView
              className="block pl-[0.6em] italic"
            />
          </h1>
        </Reveal>

        <Reveal delay={200} className="mt-10 sm:ml-auto sm:mt-[-1em] sm:max-w-sm">
          <p className="text-lg leading-[1.6] text-muted sm:text-xl">
            Builder shipping AI-powered products — from a{" "}
            <span className="hl text-foreground">college application platform</span>{" "}
            to a <span className="hl text-foreground">medical device startup</span>.
            Heading to Purdue&apos;s Daniels School of Business this fall.
          </p>
        </Reveal>

        {/* spinning sticker */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[12%] hidden h-36 w-36 rotate-12 lg:block"
        >
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
          >
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="98" fill="var(--accent)" />
            <text className="font-mono" fontSize="17" fill="var(--foreground)">
              {/* textLength = circumference, so the loop closes exactly */}
              <textPath href="#badge-circle" textLength="488" lengthAdjust="spacing">
                {BADGE_TEXT}
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 grid place-items-center font-serif text-5xl italic">
            kk
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-12 overflow-x-clip border-t-2 border-foreground px-6 py-24 sm:px-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="flex justify-center">
          <Parallax speed={-0.04}>
            <pre className="riso-sm m-0 -rotate-3 whitespace-pre font-mono text-[7px] leading-[1] text-foreground sm:text-[9px]">
              {globe}
            </pre>
          </Parallax>
        </Reveal>
        <Reveal delay={150} className="flex flex-col gap-5">
          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.01em] sm:text-6xl">
            Systems, <em className="hl">everywhere</em> I look.
          </h2>
          <p className="max-w-md text-base leading-[1.7] text-muted">
            The same instinct shows up whether it&apos;s a student&apos;s
            college application, a compliance gap in post-surgical rehab, or a
            racing team&apos;s talent pipeline: find the structure underneath,
            then make it legible.
          </p>
          <div className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase">
            → printed in two inks · slightly off-register
          </div>
        </Reveal>
      </section>
    </>
  );
}
