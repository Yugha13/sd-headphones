import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  experimental: {
    allowedDevOrigins: ['192.168.224.90'],
  },
  allowedDevOrigins: ['192.168.224.90'], // Added both inside and outside experimental just in case
};

export default nextConfig;
