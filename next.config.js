/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com', 'naszsklep-api.vercel.app', 'media.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/page/1',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
