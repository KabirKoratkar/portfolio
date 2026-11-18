// Spinning engraved seal coin (original design: monogram, not a real seal).
// Pure CSS 3D: two faces + stacked discs for the rim.

const CREAM = "oklch(88% 0.045 85)";
const INK = "oklch(38% 0.15 25)";
const RIM_LAYERS = 14;

function starPoints(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 ? r * 0.42 : r;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

const RING_STARS = Array.from({ length: 28 }, (_, i) => {
  const a = (i / 28) * Math.PI * 2;
  return starPoints(100 + 88 * Math.cos(a), 100 + 88 * Math.sin(a), 4.2);
});

const ARC_STARS = Array.from({ length: 7 }, (_, i) => {
  const a = Math.PI * (1.18 + (i / 6) * 0.64);
  return starPoints(100 + 34 * Math.cos(a), 92 + 34 * Math.sin(a), 3.6);
});

function Face({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full">
      <defs>
        <radialGradient id={`${id}-sheen`} cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="oklch(96% 0.03 90)" />
          <stop offset="60%" stopColor={CREAM} />
          <stop offset="100%" stopColor="oklch(70% 0.05 75)" />
        </radialGradient>
        <path id={`${id}-text`} d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
      </defs>
      <circle cx="100" cy="100" r="99" fill={`url(#${id}-sheen)`} />
      <circle cx="100" cy="100" r="95" fill="none" stroke={INK} strokeWidth="1.5" />
      <circle cx="100" cy="100" r="80" fill="none" stroke={INK} strokeWidth="1" />
      <circle cx="100" cy="100" r="60" fill="none" stroke={INK} strokeWidth="1.5" />
      {RING_STARS.map((p, i) => (
        <polygon key={i} points={p} fill={INK} />
      ))}
      <text fill={INK} fontSize="10.5" fontWeight="600" style={{ fontFamily: "var(--font-cinzel)" }}>
        <textPath href={`#${id}-text`} textLength="430" lengthAdjust="spacing">
          OFFICE OF KABIR KORATKAR ✶ DEPARTMENT OF ART ✶
        </textPath>
      </text>
      {ARC_STARS.map((p, i) => (
        <polygon key={i} points={p} fill={INK} />
      ))}
      <polygon points={starPoints(100, 104, 46)} fill="none" stroke={INK} strokeWidth="1" opacity="0.5" />
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fill={INK}
        fontSize="36"
        fontWeight="800"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        KK
      </text>
      <text
        x="100"
        y="140"
        textAnchor="middle"
        fill={INK}
        fontSize="9"
        letterSpacing="3"
        style={{ fontFamily: "var(--font-cinzel)" }}
      >
        MMXXVI
      </text>
    </svg>
  );
}

export default function Coin({ className = "" }: { className?: string }) {
  return (
    <div className={`coin-stage ${className}`}>
      <div className="coin">
        {Array.from({ length: RIM_LAYERS }, (_, i) => (
          <div
            key={i}
            className="coin-rim"
            style={{ transform: `translateZ(${-i - 1}px)` }}
          />
        ))}
        <div className="coin-face" style={{ transform: "translateZ(0)" }}>
          <Face id="coin-front" />
        </div>
        <div
          className="coin-face"
          style={{ transform: `translateZ(${-RIM_LAYERS - 1}px) rotateY(180deg)` }}
        >
          <Face id="coin-back" />
        </div>
      </div>
    </div>
  );
}
