const links = [
  { label: "Email", value: "kkoratka@purdue.edu", href: "mailto:kkoratka@purdue.edu" },
  { label: "Email", value: "kabirvideo@gmail.com", href: "mailto:kabirvideo@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/kabir-koratkar", href: "https://linkedin.com/in/kabir-koratkar" },
  { label: "GitHub", value: "github.com/kabirkoratkar", href: "https://github.com/kabirkoratkar" },
  { label: "Résumé", value: "resume.pdf", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section className="pt-12">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted">Open to opportunities.</p>
      <ul className="mt-8 space-y-3">
        {links.map((l) => (
          <li key={l.href} className="flex gap-4">
            <span className="w-20 shrink-0 text-faint">{l.label}</span>
            <a
              href={l.href}
              {...(l.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              className="link"
            >
              {l.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
