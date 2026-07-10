"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/60 px-6 py-5 font-mono text-[12px] tracking-[0.08em] uppercase backdrop-blur-md sm:px-10">
      <Link href="/" className="font-semibold">
        KABIR KORATKAR<span className="cursor-blink">_</span>
      </Link>
      <nav className="flex gap-6 sm:gap-8">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b pb-[2px] transition-colors ${
                active
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
