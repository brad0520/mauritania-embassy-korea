import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // GitHub Pages 배포를 위한 설정
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 일단 basePath 제거하고 테스트
  // basePath: '/mauritania-embassy',
  // assetPrefix: '/mauritania-embassy/',
};

export default nextConfig;
