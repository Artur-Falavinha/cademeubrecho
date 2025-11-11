import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = explicitBasePath ?? (isProduction ? "/cademeubrecho" : undefined);

const nextConfig: NextConfig = {
  /** Geração totalmente estática para deploy no GitHub Pages */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
