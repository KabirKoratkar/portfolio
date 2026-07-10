import GlitchText from "./components/GlitchText";
import Reveal from "./components/Reveal";
import Parallax from "./components/Parallax";
import { generateAsciiGlobe } from "./lib/ascii";

export default function Home() {
  const globe = generateAsciiGlobe(90, 46, "kk-globe");

  return (
    <>
      <section className="flex min-h-[80vh] flex-col justify-center px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
            [ 00 / overview ]
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            <GlitchText
              text="Kabir Koratkar"
              triggerOnView
              className="inline-block"
            />
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.75] text-muted sm:text-lg">
            Builder shipping AI-powered products — from a college application
            platform to a medical device compliance startup. Heading to
            Purdue&apos;s Daniels School of Business this fall.
          </p>
        </Reveal>
      </section>

      <section className="grid grid-cols-1 items-center gap-10 border-t border-border px-6 py-24 sm:px-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="flex justify-center">
          <Parallax speed={-0.04}>
            <pre className="m-0 whitespace-pre font-mono text-[9px] leading-[1] text-[oklch(78%_0.02_260)] [text-shadow:0_0_12px_oklch(60%_0.05_260_/_0.4)]">
              {globe}
            </pre>
          </Parallax>
        </Reveal>
        <Reveal delay={150} className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl leading-[1.1] tracking-[0.01em] text-foreground sm:text-4xl">
            Systems, everywhere I look.
          </h2>
          <p className="max-w-md text-[13px] leading-[1.7] text-muted">
            The same instinct shows up whether it&apos;s a student&apos;s
            college application, a compliance gap in post-surgical rehab, or a
            racing team&apos;s talent pipeline: find the structure underneath,
            then make it legible.
          </p>
          <div className="text-[11px] tracking-[0.08em] text-faint uppercase">
            → generated · deterministic · grayscale
          </div>
        </Reveal>
      </section>
    </>
  );
}
