import type { NextConfig } from "next";

const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = explicitBasePath || undefined;

const nextConfig: NextConfig = {
  /** Geração totalmente estática para deploy no GitHub Pages */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
