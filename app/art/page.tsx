const pieces = [1, 2, 3, 4, 5, 6];

export default function Art() {
  return (
    <section className="grain relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white sm:px-10">
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          Selected Works
        </p>
        <h1 className="mt-6 font-serif text-5xl italic tracking-tight text-white/90 sm:text-7xl">
          Art
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
          [Placeholder — a short note on the body of work, medium, or theme.]
        </p>

        <div className="mt-24 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((piece) => (
            <div
              key={piece}
              className="group relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-white/10 via-white/0 to-white/5"
            >
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-white/20">
                Image {piece}
              </div>
              <p className="absolute bottom-4 left-4 font-serif text-sm italic text-white/40">
                untitled, 2024
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
