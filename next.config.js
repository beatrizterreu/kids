/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.pollinations.ai'],
    unoptimized: true,
  },
}
module.exports = nextConfig
