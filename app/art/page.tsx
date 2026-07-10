import { generateAsciiBlock } from "../lib/ascii";

const shapes = ["radial", "diagonal", "bands", "square", "radial", "noise"] as const;
const pieces = shapes.map((shape, i) => ({
  id: i + 1,
  shape,
  art: generateAsciiBlock(`piece-${i + 1}`, 14, 22, shape),
}));

export default function Art() {
  return (
    <section className="min-h-screen px-6 py-24 sm:px-10">
      <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
        [ 03 / art ]
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
        Art
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        [Placeholder — a short note on the body of work, medium, or theme.]
      </p>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-background p-4"
          >
            <pre className="m-0 flex-1 overflow-hidden font-mono text-[7px] leading-[1.05] text-faint transition-colors group-hover:text-muted">
              {piece.art}
            </pre>
            <p className="text-sm text-faint">untitled, 2024</p>
          </div>
        ))}
      </div>
    </section>
  );
}
