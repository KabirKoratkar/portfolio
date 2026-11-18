import { generateAsciiBlock } from "../lib/ascii";
import Reveal from "../components/Reveal";

const shapes = ["radial", "diagonal", "bands", "square", "radial", "noise"] as const;
// pinned-to-the-wall tilt, one per print
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1"];
const pieces = shapes.map((shape, i) => ({
  id: i + 1,
  shape,
  art: generateAsciiBlock(`piece-${i + 1}`, 14, 22, shape),
}));

export default function Art() {
  return (
    <section className="min-h-screen px-6 py-24 sm:px-10">
      <Reveal>
        <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
          [ 03 / art ]
        </p>
        <h1 className="riso mt-4 font-serif text-7xl leading-[0.9] sm:text-9xl">
          <span className="italic">A</span>rt
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
          [Placeholder — a short note on the body of work, medium, or theme.]
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((piece, i) => (
          <Reveal key={piece.id} delay={(i % 3) * 100}>
            <figure
              className={`group relative flex aspect-[4/5] flex-col justify-between bg-panel p-5 shadow-[6px_6px_0_oklch(0%_0_0/0.6)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${tilts[i]}`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-3 bg-accent/60"
              />
              <pre className="riso-sm m-0 grid flex-1 place-items-center overflow-hidden font-mono text-[11px] leading-[1.05] text-foreground">
                {piece.art}
              </pre>
              <figcaption className="font-serif text-lg italic text-muted">
                untitled no. {piece.id}, 2024
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
