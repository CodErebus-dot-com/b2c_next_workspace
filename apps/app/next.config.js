/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    nextScriptWorkers: true,
  },
  transpilePackages: ['@acme/ui', '@acme/utils'],
}

module.exports = nextConfig
