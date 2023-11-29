/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  pageExtensions: ['index.tsx'],
  transpilePackages: ['@acme/ui', '@acme/utils'],
}

module.exports = nextConfig
