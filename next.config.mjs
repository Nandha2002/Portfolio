/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel: no static export, no basePath/assetPrefix
  reactStrictMode: true,

  // Use Next/Image optimizer on Vercel (faster images)
  images: {
    // leave empty to enable optimizer
    // (remove this block entirely if you don’t have special domains)
  },

  trailingSlash: false
};

export default nextConfig;
