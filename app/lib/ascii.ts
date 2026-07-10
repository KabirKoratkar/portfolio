export const GLITCH_CHARSET = "!<>-_\\/[]{}=+*^?#·:;";

export function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromString(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return h;
}

type BlockShape = "radial" | "diagonal" | "bands" | "square" | "noise";

export function generateAsciiBlock(
  name: string,
  rows: number,
  cols: number,
  shape: BlockShape = "radial"
) {
  const rand = mulberry32(seedFromString(name));
  const ramp = " .:-=+*#%@";
  const out: string[] = [];
  for (let y = 0; y < rows; y++) {
    let row = "";
    for (let x = 0; x < cols; x++) {
      const nx = x / cols - 0.5;
      const ny = y / rows - 0.5;
      const noise = rand();
      let v: number;
      if (shape === "radial") {
        const d = Math.sqrt(nx * nx + ny * ny);
        v = (1 - d) * 0.7 + noise * 0.3;
      } else if (shape === "diagonal") {
        const d = Math.abs(nx + ny);
        v = (1 - d) * 0.75 + noise * 0.25;
      } else if (shape === "bands") {
        const band = Math.abs(Math.sin((y / rows) * Math.PI * 3));
        v = band * 0.65 + noise * 0.35;
      } else if (shape === "square") {
        const d = Math.max(Math.abs(nx), Math.abs(ny)) * 2;
        v = (1 - d) * 0.7 + noise * 0.3;
      } else {
        v = noise;
      }
      v = Math.max(0, Math.min(1, v));
      const idx = Math.floor(v * (ramp.length - 1));
      row += ramp[idx];
    }
    out.push(row);
  }
  return out.join("\n");
}

type Blob = { x: number; y: number; rx: number; ry: number; strength: number };

export function generateAsciiField(cols: number, rows: number, blobs: Blob[]) {
  const ramp = " .:-=+*#%@";
  const rand = mulberry32(seedFromString("bg-field"));
  const out: string[] = [];
  for (let y = 0; y < rows; y++) {
    let row = "";
    for (let x = 0; x < cols; x++) {
      const nx = x / cols;
      const ny = y / rows;
      const noise = rand();
      let v = 0.1 + noise * 0.12;
      for (const b of blobs) {
        const dx = (nx - b.x) / b.rx;
        const dy = (ny - b.y) / b.ry;
        const d = Math.sqrt(dx * dx + dy * dy);
        v += Math.max(0, 1 - d) * b.strength;
      }
      v = Math.max(0, Math.min(1, v));
      const idx = Math.floor(v * (ramp.length - 1));
      row += ramp[idx];
    }
    out.push(row);
  }
  return out.join("\n");
}

export function generateAsciiRail(cols: number, rows: number, seed: string) {
  const rand = mulberry32(seedFromString(seed));
  const ramp = " .:-=+*";
  const out: string[] = [];
  for (let y = 0; y < rows; y++) {
    let row = "";
    for (let x = 0; x < cols; x++) {
      const ny = y / rows;
      const wave = Math.abs(Math.sin(ny * Math.PI * 2.4 + x * 0.4));
      let v = wave * 0.6 + rand() * 0.4;
      v = Math.max(0, Math.min(1, v));
      const idx = Math.floor(v * (ramp.length - 1));
      row += ramp[idx];
    }
    out.push(row);
  }
  return out.join("\n");
}

export function generateAsciiGlobe(cols: number, rows: number, seed: string) {
  const rand = mulberry32(seedFromString(seed));
  const grid: string[][] = [];
  for (let y = 0; y < rows; y++) grid.push(new Array(cols).fill(" "));
  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  const Rx = cols / 2 - 1;
  const Ry = rows / 2 - 1;
  const ramp = "·:-=+*#%@";
  const tilt = -0.42;
  const latN = 46;
  const lonN = 92;
  for (let a = 0; a <= latN; a++) {
    const lat = (a / latN) * Math.PI - Math.PI / 2;
    for (let b = 0; b < lonN; b++) {
      const lon = (b / lonN) * 2 * Math.PI;
      const x = Math.cos(lat) * Math.cos(lon);
      let y = Math.sin(lat);
      let z = Math.cos(lat) * Math.sin(lon);
      const y2 = y * Math.cos(tilt) - z * Math.sin(tilt);
      const z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
      y = y2;
      z = z2;
      if (z < 0) continue;
      const sx = Math.round(cx + x * Rx);
      const sy = Math.round(cy - y * Ry);
      if (sx < 0 || sx >= cols || sy < 0 || sy >= rows) continue;
      if (rand() < 0.32) continue;
      const shade = 0.2 + z * 0.8;
      const idx = Math.min(ramp.length - 1, Math.floor(shade * ramp.length));
      grid[sy][sx] = ramp[idx];
    }
  }
  return grid.map((r) => r.join("").replace(/\s+$/, "")).join("\n");
}

export function generateAsciiHatch(cols: number, rows: number, seed: string) {
  const rand = mulberry32(seedFromString(seed));
  const glyphs = "/\\|_-=~";
  const out: string[] = [];
  for (let y = 0; y < rows; y++) {
    let row = "";
    for (let x = 0; x < cols; x++) {
      const ny = y / rows;
      const peak = 1 - Math.abs(x / cols - 0.5) * 2.1;
      const surface = 0.35 + peak * 0.5;
      const inside = ny > 1 - surface;
      if (!inside) {
        row += " ";
        continue;
      }
      const depth = (ny - (1 - surface)) / (surface + 0.001);
      const r = rand();
      if (r < 0.22 - depth * 0.12) {
        row += " ";
        continue;
      }
      const slope = x / cols < 0.5 ? "/" : "\\";
      row += r < 0.6 ? slope : glyphs[Math.floor(r * glyphs.length)];
    }
    out.push(row);
  }
  return out.join("\n");
}

export const ASCII_FRAME = [
  "+------------------------+",
  "|                        |",
  "|   panel content sits   |",
  "|   inside a box-drawing |",
  "|   frame like this one  |",
  "|                        |",
  "+------------------------+",
].join("\n");

export const BG_ASCII_FIELD = (() => {
  const field = generateAsciiField(160, 110, [
    { x: 0.05, y: 0.05, rx: 0.46, ry: 0.46, strength: 1.1 },
    { x: 0.85, y: 0.4, rx: 0.44, ry: 0.44, strength: 0.95 },
    { x: 0.35, y: 0.95, rx: 0.4, ry: 0.4, strength: 0.9 },
    { x: 0.65, y: 0.65, rx: 0.3, ry: 0.3, strength: 0.5 },
  ]);
  return field + "\n" + field;
})();
