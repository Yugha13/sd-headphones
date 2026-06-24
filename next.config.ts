import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  // @ts-expect-error - Next.js internal type definitions may not include this newly added security config yet
  allowedDevOrigins: ['192.168.224.90', 'localhost'],
};

export default nextConfig;
