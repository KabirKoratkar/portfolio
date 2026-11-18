import Parallax from "./Parallax";

const GRAIN_SVG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+";

const fade = "radial-gradient(circle, black 0%, transparent 68%)";

export default function Backdrop() {
  return (
    <>
      {/* halftone ink blobs */}
      <Parallax speed={0.06} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="halftone absolute -right-[12%] -top-[18%] h-[60vw] w-[60vw] opacity-40"
          style={{
            maskImage: fade,
            WebkitMaskImage: fade,
            animation: "drift1 30s ease-in-out infinite",
          }}
        />
        <div
          className="halftone absolute -bottom-[25%] -left-[15%] h-[55vw] w-[55vw] opacity-30"
          style={{
            maskImage: fade,
            WebkitMaskImage: fade,
            animation: "drift2 38s ease-in-out infinite",
          }}
        />
      </Parallax>

      {/* paper grain */}
      <div
        className="pointer-events-none fixed -inset-[10%] z-[3] opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage: `url('${GRAIN_SVG}')`,
          backgroundSize: "200px 200px",
          animation: "grainShift 1.2s steps(8) infinite",
        }}
      />
    </>
  );
}
