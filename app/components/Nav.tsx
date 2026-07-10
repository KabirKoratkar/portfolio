"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlitchText from "./GlitchText";

const links = [
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/70 px-6 font-mono text-[12px] tracking-[0.08em] uppercase backdrop-blur-md transition-[padding] duration-300 sm:px-10 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <Link href="/" className="font-semibold">
        <GlitchText text="KABIR KORATKAR" className="inline-block" />
        <span className="cursor-blink">_</span>
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
