const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.NEXT_PUBLIC_NODE_ENV === "development",
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  transpilePackages: ["@acme/ui", "@acme/utils"],
};

module.exports = withBundleAnalyzer(nextConfig);
