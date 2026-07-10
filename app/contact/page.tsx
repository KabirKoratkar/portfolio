import Reveal from "../components/Reveal";

export default function Contact() {
  const links = [
    { label: "email", value: "hello@kabirkoratkar.com", href: "mailto:hello@kabirkoratkar.com" },
    { label: "linkedin", value: "linkedin.com/in/kabir-koratkar", href: "https://linkedin.com/in/kabir-koratkar" },
    { label: "github", value: "github.com/kabirkoratkar", href: "https://github.com/kabirkoratkar" },
  ];

  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-6 sm:px-10">
      <Reveal>
        <p className="font-mono text-[13px] tracking-[0.15em] text-faint uppercase">
          [ 04 / contact ]
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
      </Reveal>

      <div className="mt-10 max-w-md border border-border p-6 font-mono text-[13px] leading-[1.9]">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={150 + i * 150}>
            <span className="text-foreground">&gt;</span>{" "}
            <span className="text-faint">{l.label}:</span>{" "}
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="border-b border-border pb-[1px] text-muted transition-colors hover:border-foreground hover:text-foreground"
            >
              {l.value}
            </a>
          </Reveal>
        ))}
        <Reveal delay={150 + links.length * 150} className="mt-2 text-foreground">
          &gt; status: open to opportunities.
          <span className="cursor-blink">_</span>
        </Reveal>
      </div>
    </section>
  );
}
