"use client";

import Image from "next/image";

// Brush orb: spins slowly and flips the theme on click.
// The theme lives on <html data-theme>, set before paint by the inline script in layout.
function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // the toggle still works for this visit if storage is blocked
  }
}

export default function ThemeOrb({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark appearance"
      title="Toggle appearance"
      className={`friend-orb ${className}`}
    >
      <Image src="/friend-orb.png" alt="" width={800} height={900} priority />
    </button>
  );
}
