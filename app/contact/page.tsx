export default function Contact() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-6 sm:px-10">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Contact
      </h1>
      <div className="mt-8 space-y-3 font-mono text-sm">
        <p>
          <a
            href="mailto:hello@kabirkoratka.com"
            className="underline underline-offset-4 hover:no-underline"
          >
            hello@kabirkoratka.com
          </a>
        </p>
        <p className="text-black/40">[Placeholder — add social links]</p>
      </div>
    </section>
  );
}
