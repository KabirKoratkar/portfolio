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
  const isDark =
    pathname.startsWith("/art") || pathname.startsWith("/about");

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b px-6 py-5 font-mono text-[11px] uppercase tracking-[0.25em] sm:px-10 ${
        isDark
          ? "border-white/10 bg-[#15130f] text-white"
          : "border-black/10 bg-white text-black"
      }`}
    >
      <Link href="/" className="opacity-100">
        Kabir Koratkar
      </Link>
      <nav className="flex gap-6">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-opacity hover:opacity-100 ${
                active ? "opacity-100" : "opacity-40"
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
