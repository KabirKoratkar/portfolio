"use client";

import { useEffect, useRef } from "react";

// Film grain overlay. CSS can't do random, so each frame picks a new random offset.
export default function Grain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    const tick = () => {
      // the layer is 3x the viewport, so offsets within ±30% of it keep the screen covered
      const x = Math.random() * 60 - 30;
      const y = Math.random() * 60 - 30;
      el.style.transform = `translate(${x}%, ${y}%)`;
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return <div ref={ref} aria-hidden="true" className="grain" />;
}
