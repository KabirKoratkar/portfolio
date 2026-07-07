export default function Contact() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-6 sm:px-10">
      <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
        Contact
      </h1>
      <div className="mt-8 space-y-3 font-mono text-sm">
        <p>
          <a
            href="mailto:hello@kabirkoratkar.com"
            className="underline underline-offset-4 hover:no-underline"
          >
            hello@kabirkoratkar.com
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/kabir-koratkar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/kabirkoratkar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
