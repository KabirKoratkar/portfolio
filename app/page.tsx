import Reveal from "./components/Reveal";

type Entry = {
  name: string;
  role?: string;
  date?: string;
  desc: string;
  href?: string;
  mark?: boolean;
};

const sections: { title: string; entries: Entry[] }[] = [
  {
    title: "Ventures",
    entries: [
      {
        name: "Priceflag",
        role: "Co-Founder",
        date: "Present",
        href: "https://priceflag.org",
        mark: true,
        desc: "Shopify price changes that roll out gradually & auto-revert if they stop paying",
      },
      {
        name: "Waypoint",
        role: "Founder",
        date: "Jan 2025 — Present",
        href: "https://waypointedu.org",
        desc: "AI college application platform, live beta with paying users at $55.99/season",
      },
      {
        name: "Therapeuo",
        role: "Co-Founder & CSO",
        date: "Mar 2026 — Present",
        href: "https://therapeuo.xyz",
        desc: "Smart weight-bearing insole for post-surgical rehab, piloting with The Ensign Group",
      },
    ],
  },
  {
    title: "Experience",
    entries: [
      {
        name: "Mumbai Falcons Racing",
        role: "Strategy Intern",
        date: "Jun 2025 — Aug 2025",
        desc: "Designed the Agla Star driver program; venue analysis across 12 Indian cities",
      },
      {
        name: "SoloScale Solutions",
        role: "BD & AI Solutions",
        date: "Jan 2023 — Dec 2023",
        desc: "Sold and shipped custom AI chatbots for SMBs, cold contact to close",
      },
    ],
  },
  {
    title: "Projects",
    entries: [
      {
        name: "Caveat",
        role: "Hackathon",
        date: "2026",
        desc: "AI lease contract review, shipped at the Agents in Production hackathon",
      },
    ],
  },
  {
    title: "Recognition",
    entries: [
      {
        name: "DECA",
        role: "State Finalist",
        desc: "2x California Top 20 in Auto Services Marketing, 4 years competing",
      },
      {
        name: "Stock Market Game",
        role: "Top 50",
        desc: "Top 50 of 2,500 regional competitors",
      },
      {
        name: "Dublin High Robotics",
        role: "Sponsorship Lead",
        desc: "Raised $1,000+ in external sponsorships",
      },
      {
        name: "Car Club",
        role: "Founder",
        desc: "Started and ran the student automotive club at Dublin High",
      },
    ],
  },
];

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kabir-koratkar" },
  { label: "GitHub", href: "https://github.com/kabirkoratkar" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Email", href: "mailto:hello@kabirkoratkar.com" },
];

const BADGE_TEXT = "builder · artist · systems thinker · ";

export default function Home() {
  return (
    <>
      {/* intro splash: name alone, then it lifts away (pure CSS) */}
      <div
        aria-hidden="true"
        className="intro pointer-events-none fixed inset-0 z-[70] grid place-items-center bg-background"
      >
        <span className="riso font-serif text-[clamp(5rem,22vw,18rem)] italic leading-none">
          Kabir
        </span>
      </div>

      <div className="relative mx-auto max-w-[40rem] px-6 pb-32 pt-20 sm:pt-28">
        {/* spinning sticker */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-16 hidden h-32 w-32 rotate-12 lg:block"
        >
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none"
          >
            <defs>
              <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="98" fill="var(--accent)" />
            <text className="font-mono" fontSize="17" fill="var(--foreground)">
              {/* textLength = circumference, so the loop closes exactly */}
              <textPath href="#badge-circle" textLength="488" lengthAdjust="spacing">
                {BADGE_TEXT}
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 grid place-items-center font-serif text-4xl italic">
            kk
          </span>
        </div>

        <Reveal>
          <h1 className="riso font-serif text-6xl leading-none tracking-[-0.01em] sm:text-7xl">
            Kabir Koratkar
          </h1>
          <p className="mt-6 text-[17px] leading-[1.65]">
            Hey, I&apos;m Kabir. 18, from the Bay Area, and heading to Purdue
            for Business Analytics &amp; Supply Chain. I build companies —
            right now that&apos;s{" "}
            <a href="https://priceflag.org" className="link">Priceflag</a>,{" "}
            <a href="https://waypointedu.org" className="link">Waypoint</a> &amp;{" "}
            <a href="https://therapeuo.xyz" className="link">Therapeuo</a>. Off
            the clock I&apos;m <a href="/art" className="link">drawing</a>,
            lifting &amp; taking night drives through the East Bay hills.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="border border-foreground bg-panel px-2.5 py-1 text-[13px] font-semibold shadow-[2px_2px_0_var(--accent)] transition-[transform,box-shadow] duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_var(--accent)] active:translate-x-px active:translate-y-px active:shadow-none"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>

        {sections.map((section, si) => (
          <Reveal key={section.title} delay={120 + si * 80} className="mt-16">
            <h2 className="font-serif text-3xl">{section.title}</h2>
            <ul className="mt-5 space-y-5">
              {section.entries.map((e) => (
                <li key={e.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="min-w-0">
                      <span className={`font-semibold ${e.mark ? "hl" : ""}`}>
                        {e.href ? (
                          <a
                            href={e.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-accent decoration-2 underline-offset-4 hover:underline"
                          >
                            {e.name}
                          </a>
                        ) : (
                          e.name
                        )}
                      </span>
                      {e.role && <span className="ml-2 text-muted">{e.role}</span>}
                    </p>
                    {e.date && (
                      <span className="shrink-0 font-mono text-[12px] text-faint">
                        {e.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm leading-[1.55] text-muted">{e.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}
