import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  // work and about were folded into home; keep old links alive
  async redirects() {
    return ["/work", "/about"].map((source) => ({ source, destination: "/", permanent: false }));
  },
};

export default nextConfig;
