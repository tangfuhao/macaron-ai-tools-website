/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'], // 優先使用 AVIF，其次 WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 響應式斷點
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // 小圖尺寸
  },
}

module.exports = nextConfig

