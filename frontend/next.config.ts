import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/tracks",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
