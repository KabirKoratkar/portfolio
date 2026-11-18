import ThemeOrb from "../components/ThemeOrb";

export default function Art() {
  return (
    <section className="grid min-h-[60dvh] place-items-center">
      <h1 className="sr-only">Art</h1>
      <div aria-hidden="true" className="grain" />
      <ThemeOrb className="w-44 sm:w-56" />
      <p className="fixed inset-x-0 bottom-6 text-center text-xs text-faint">Coming soon</p>
    </section>
  );
}
