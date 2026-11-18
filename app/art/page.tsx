import { generateAsciiBlock } from "../lib/ascii";
import Reveal from "../components/Reveal";
import Reel from "../components/Reel";

const shapes = ["radial", "diagonal", "bands", "square", "radial", "noise"] as const;

const shots = shapes.map((shape, i) => generateAsciiBlock(`shot-${i + 1}`, 24, 90, shape));
const stills = shapes.map((shape, i) => ({
  id: i + 1,
  art: generateAsciiBlock(`piece-${i + 1}`, 12, 40, shape),
}));

export default function Art() {
  return (
    <>
      <Reel shots={shots} />

      <section className="px-6 py-20 sm:px-10">
        <Reveal className="text-center">
          <p className="font-mono text-[12px] tracking-[0.3em] text-faint uppercase">
            ✶ ✶ ✶
          </p>
          <h1 className="riso mt-5 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[0.06em] sm:text-7xl sm:tracking-[0.12em]">
            Department of Art
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
            [Placeholder — a short note on the body of work, medium, or theme.]
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stills.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 100}>
              <figure className="group">
                <div className="relative grid aspect-[2.39/1] place-items-center overflow-hidden bg-black">
                  <pre
                    aria-hidden="true"
                    className="shot-art m-0 text-[7px] leading-[1] transition-[filter] duration-300 [animation:none] group-hover:[filter:blur(1.5px)_brightness(1.3)]"
                  >
                    {s.art}
                  </pre>
                  <div className="streak-h opacity-60" style={{ top: `${40 + (i * 13) % 30}%` }} />
                  <div className="streak-v opacity-60" style={{ left: `${30 + (i * 17) % 40}%` }} />
                  <div className="reel-grade pointer-events-none absolute inset-0" />
                </div>
                <figcaption className="mt-3 flex justify-between font-mono text-[11px] tracking-[0.12em] text-faint uppercase">
                  <span>Still {String(s.id).padStart(2, "0")} — untitled</span>
                  <span>2024</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
