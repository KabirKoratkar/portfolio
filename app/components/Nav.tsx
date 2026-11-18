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
      className={`sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/75 px-6 font-mono text-[12px] tracking-[0.06em] lowercase backdrop-blur-md transition-[padding] duration-300 sm:px-10 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <Link href="/" className="whitespace-nowrap font-serif text-xl normal-case italic tracking-normal sm:text-2xl">
        <GlitchText text="Kabir Koratkar" className="inline-block" />
        <span className="text-accent">✶</span>
      </Link>
      <nav className="flex text-[11px] sm:gap-2 sm:text-[12px]">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`px-1.5 py-1 transition-[background-color,color,transform] duration-200 sm:px-2 active:scale-95 ${
                active
                  ? "bg-accent text-background [text-shadow:none]"
                  : "text-muted hover:-rotate-2 hover:bg-foreground hover:text-background"
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
