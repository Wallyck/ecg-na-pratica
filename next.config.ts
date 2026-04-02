import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite uso de imagens locais sem otimização quando necessário
    unoptimized: false,
  },
};

export default nextConfig;
