"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(100, Math.round((doc.scrollTop / max) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-border/40">
        <div
          className="h-full bg-foreground transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="pointer-events-none fixed bottom-4 right-4 z-[60] hidden font-mono text-[11px] tracking-[0.1em] text-faint sm:block">
        [ scroll {String(pct).padStart(2, "0")}% ]
      </div>
    </>
  );
}
