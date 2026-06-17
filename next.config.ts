import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [],
    qualities: [75, 100],
  },
};

export default nextConfig;
