import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 스크린샷은 WebP로 저장하되, 지원 브라우저에는 AVIF를 우선 내보낸다.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
