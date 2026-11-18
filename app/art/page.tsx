import Reveal from "../components/Reveal";
import Reel from "../components/Reel";

export default function Art() {
  return (
    <>
      {/* no shots yet: the reel just holds on the spinning seal */}
      <Reel shots={[]} />

      <section className="px-6 py-20 text-center sm:px-10">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.3em] text-faint uppercase">
            ✶ ✶ ✶
          </p>
          <h1 className="riso mt-5 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[0.06em] sm:text-7xl sm:tracking-[0.12em]">
            Coming Soon
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
            Not a gallery. Whatever I want it to be.
          </p>
        </Reveal>
      </section>
    </>
  );
}
