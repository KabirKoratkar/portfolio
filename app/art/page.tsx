import ThemeOrb from "../components/ThemeOrb";

export default function Art() {
  return (
    <section className="flex flex-col items-center pt-16 text-center">
      <ThemeOrb className="w-44 sm:w-56" />
      <h1 className="mt-10 text-2xl font-semibold tracking-tight">Coming soon</h1>
      <p className="mt-2 text-muted">Not a gallery. Whatever I want it to be.</p>
    </section>
  );
}
