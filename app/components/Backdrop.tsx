import { BG_ASCII_FIELD } from "../lib/ascii";

const GRAIN_SVG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+";

export default function Backdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -left-[10%] -top-[15%] h-[70vw] w-[70vw] rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(circle, oklch(30% 0.006 260) 0%, transparent 70%)",
            animation: "drift1 26s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-[15%] top-[30%] h-[60vw] w-[60vw] rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(circle, oklch(22% 0.008 260) 0%, transparent 70%)",
            animation: "drift2 32s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[20%] left-[20%] h-[50vw] w-[50vw] rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, oklch(18% 0.01 260) 0%, transparent 70%)",
            animation: "drift1 40s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className="pointer-events-none fixed -inset-[10%] z-[1] opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage: `url('${GRAIN_SVG}')`,
          backgroundSize: "200px 200px",
          animation: "grainShift 1.2s steps(8) infinite",
        }}
      />

      <pre
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] m-0 h-full w-full select-none overflow-hidden whitespace-pre font-mono text-[8px] leading-[1.02] tracking-[0.02em] text-[oklch(88%_0.004_260)] opacity-30 mix-blend-screen"
      >
        {BG_ASCII_FIELD}
      </pre>

      <div
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, oklch(12% 0.004 260) 100%)",
        }}
      />
    </>
  );
}
