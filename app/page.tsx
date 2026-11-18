type Entry = {
  name: string;
  role?: string;
  date?: string;
  desc: string;
  href?: string;
};

const sections: { title: string; entries: Entry[] }[] = [
  {
    title: "Ventures",
    entries: [
      {
        name: "Priceflag",
        role: "Co-Founder",
        date: "Sep 2026 — Present",
        href: "https://priceflag.org",
        desc: "Pricing intelligence for eCommerce merchants. Piloting with 5 businesses, backed by Nvidia Inception",
      },
      {
        name: "Waypoint",
        role: "Founder",
        date: "Jan 2026 — Jun 2026",
        href: "https://waypointedu.org",
        desc: "AI college application platform: essay tools, deadline tracking, an AI counselor & document vault",
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
        name: "Purdue Scope Consulting",
        role: "Associate Consultant",
        date: "Sep 2026 — Present",
        desc: "Market research, competitive analysis & go-to-market strategy for a startup",
      },
      {
        name: "Mumbai Falcons Racing",
        role: "Strategy & Program Developer",
        date: "Jun 2025 — Aug 2025",
        desc: "Designed the Agla Star driver program; venue analysis across 12 Indian cities",
      },
      {
        name: "SoloScale Solutions",
        role: "BD & AI Solutions",
        date: "Jan 2024 — Jan 2025",
        desc: "Custom AI automations & chatbots for SMBs with n8n and OpenAI",
      },
    ],
  },
  {
    title: "Projects",
    entries: [
      {
        name: "ForkLab",
        role: "Hackathon",
        date: "Jul 2026",
        href: "https://github.com/KabirKoratkar/forklab",
        desc: "Causal debugging for AI agent fleets. Built solo; won Best Use of Braintrust at Daytona HackSprint",
      },
      {
        name: "Caveat",
        role: "Hackathon",
        date: "Jul 2026",
        desc: "AI lease contract review. 2nd place, Best Use of ActianDB at Agents in Production",
      },
      {
        name: "Truffle",
        role: "Contributor",
        date: "Apr 2026 — Jul 2026",
        desc: "Agent layer for a natural-language portfolio optimizer (CVXPY, Clarabel, Anthropic API)",
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
        desc: "2x regional Top 50",
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
  { label: "LinkedIn", href: "https://linkedin.com/in/kabirkoratkar" },
  { label: "GitHub", href: "https://github.com/kabirkoratkar" },
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Email", href: "mailto:kkoratka@purdue.edu" },
];

export default function Home() {
  return (
    <div className="pt-12">
      <h1 className="text-4xl font-semibold tracking-tight">Kabir Koratkar</h1>
      <p className="mt-5 text-[17px] leading-[1.65]">
        Hey, I&apos;m Kabir. 18, from the Bay Area, majoring in Industrial
        Engineering at Purdue. I build companies — right now that&apos;s{" "}
        <a href="https://priceflag.org" className="link">Priceflag</a>.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("http") && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="link"
          >
            {l.label}
          </a>
        ))}
      </div>

      {sections.map((section) => (
        <section key={section.title} className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
          <ul className="mt-4 space-y-4">
            {section.entries.map((e) => (
              <li key={e.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="min-w-0">
                    <span className="font-semibold">
                      {e.href ? (
                        <a
                          href={e.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:underline"
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
        </section>
      ))}
    </div>
  );
}
