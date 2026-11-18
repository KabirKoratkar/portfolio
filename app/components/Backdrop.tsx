const GRAIN_SVG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+";

export default function Backdrop() {
  return (
    <>
      {/* signal noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -inset-[10%] z-[1] opacity-[0.14] mix-blend-screen"
        style={{
          backgroundImage: `url('${GRAIN_SVG}')`,
          backgroundSize: "200px 200px",
          animation: "grainShift 1.2s steps(8) infinite",
        }}
      />
      {/* CRT glass over everything, nav included */}
      <div aria-hidden="true" className="crt pointer-events-none fixed inset-0 z-[65]" />
    </>
  );
}
