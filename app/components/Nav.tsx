"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/art", label: "Art" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex items-baseline justify-between py-8 text-sm">
      <Link href="/" className="font-semibold">
        Kabir Koratkar
      </Link>
      <nav className="flex gap-5">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={active ? "text-foreground" : "text-faint hover:text-foreground"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
