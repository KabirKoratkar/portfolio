"use client";

import { useEffect, useRef, useState } from "react";
import Coin from "./Coin";

const FPS = 24;
const COIN_FRAMES = FPS * 5;
const SHOT_FRAMES = Math.round(FPS * 1.3);

// where the crosshair flare sits for each shot (x%, y%)
const FLARES: [number, number][] = [
  [46, 52],
  [58, 78],
  [38, 34],
  [64, 48],
  [52, 70],
  [30, 58],
];

function timecode(frame: number) {
  const f = frame % FPS;
  const s = Math.floor(frame / FPS);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f)}`;
}

export default function Reel({ shots }: { shots: string[] }) {
  const total = COIN_FRAMES + shots.length * SHOT_FRAMES;
  const [scene, setScene] = useState(-1); // -1 = coin, else shot index
  const tcRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      const t = frame % total;
      setScene(t < COIN_FRAMES ? -1 : Math.floor((t - COIN_FRAMES) / SHOT_FRAMES));
      if (tcRef.current) tcRef.current.textContent = timecode(frame);
    }, 1000 / FPS);
    return () => clearInterval(id);
  }, [total]);

  const [fx, fy] = scene < 0 ? [61, 44] : FLARES[scene % FLARES.length];

  return (
    <div className="reel relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[2.39/1]">
      {scene < 0 ? (
        <div className="absolute inset-0 grid place-items-center">
          <Coin className="h-[58%] sm:h-[78%]" />
        </div>
      ) : (
        // key forces a remount so every cut replays the smear + flash
        <div key={scene} className="shot absolute inset-0 grid place-items-center">
          <pre
            aria-hidden="true"
            className="shot-art m-0 select-none font-mono text-[1.85vw] leading-[0.95] sm:text-[1.85vw] sm:leading-[0.92]"
          >
            {shots[scene]}
          </pre>
        </div>
      )}

      {/* light streaks: horizontal beam, vertical hairline, flare where they cross */}
      <div className="streak-h" style={{ top: `${fy}%` }} />
      <div className="streak-v" style={{ left: `${fx}%` }} />
      <div className="flare" style={{ left: `${fx}%`, top: `${fy}%` }} />
      {scene < 0 && (
        <>
          <div className="flare-red" style={{ left: "36%", top: `${fy}%` }} />
          <div className="flare-red" style={{ left: "64%", top: `${fy}%` }} />
        </>
      )}

      {/* grade + glass */}
      <div className="reel-grade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4%] bg-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[4%] bg-black" />

      <div className="pointer-events-none absolute bottom-[6%] left-[3%] font-mono text-[10px] tracking-[0.15em] text-[oklch(88%_0.045_85/0.7)] sm:text-[11px]">
        <span className="cursor-blink text-rec">●</span> PLAY{" "}
        <span ref={tcRef}>00:00:00:00</span>
      </div>
      <div className="pointer-events-none absolute bottom-[6%] right-[3%] font-display text-[10px] tracking-[0.3em] text-[oklch(88%_0.045_85/0.7)] sm:text-[11px]">
        {scene < 0 ? "DEPT. OF ART" : `SHOT ${String(scene + 1).padStart(2, "0")}`}
      </div>
    </div>
  );
}
