"use client";

import { useEffect, useRef, useState } from "react";
import { GLITCH_CHARSET } from "../lib/ascii";

function scrambleChar() {
  return GLITCH_CHARSET[Math.floor(Math.random() * GLITCH_CHARSET.length)];
}

function renderWithProgress(target: string, progress: number) {
  let out = "";
  for (let i = 0; i < target.length; i++) {
    if (target[i] === " ") {
      out += " ";
      continue;
    }
    out += i < progress ? target[i] : scrambleChar();
  }
  return out;
}

export default function GlitchText({
  text,
  className = "",
  triggerOnView = false,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  triggerOnView?: boolean;
  as?: "span" | "div" | "h1" | "h2";
}) {
  const [display, setDisplay] = useState(text);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elRef = useRef<HTMLElement | null>(null);
  const firedRef = useRef(false);

  const start = () => {
    if (animating) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const maxLen = text.length + 4;
    let step = 0;
    setAnimating(true);
    setDisplay(renderWithProgress(text, 0));
    timerRef.current = setInterval(() => {
      step += 1;
      setDisplay(renderWithProgress(text, step));
      if (step >= maxLen) {
        if (timerRef.current) clearInterval(timerRef.current);
        setAnimating(false);
        setDisplay(text);
      }
    }, 45);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true;
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerOnView]);

  return (
    <Tag
      ref={elRef as never}
      onMouseEnter={start}
      className={className}
      style={{
        cursor: "default",
        whiteSpace: "pre-wrap",
        userSelect: "none",
      }}
    >
      {display}
    </Tag>
  );
}
