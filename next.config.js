/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['picsum.photos','fakestoreapi.com'],
  },
}

module.exports = nextConfig
