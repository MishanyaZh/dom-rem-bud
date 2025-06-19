import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],

  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
