import type { NextConfig } from "next";

const repoName = 'Resort';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  distDir: 'out',
  
};

export default nextConfig;
