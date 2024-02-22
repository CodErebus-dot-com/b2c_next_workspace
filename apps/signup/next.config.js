/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const PACKAGE_JSON = require("./package.json");
const APP_NAME = PACKAGE_JSON.name.toLowerCase();

const mfConfig = {
  name: APP_NAME,
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    /**
    * exposes: this is where we will include items to expose in the format of `./<any name>: <path to the module/component>`
    * For remote application, if you want to expose app componnet, add the below code in the exposes object.
      './app': './src/app',
    */
  },
  shared: {}, // list of modules to be shared
  extraOptions: {},
};

const nextConfig = {
  output: "export",
  sassOptions: {},
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  distDir: "dist",
  transpilePackages: ["@acme/ui", "next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "dist",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: "true",

    // If you want to cache the remote images, you can set the time to live of the cache in seconds.
    // The default value is 0 seconds.
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  swcMinify: true,
  webpack(config, options) {
    config.plugins.push(new NextFederationPlugin(mfConfig));
    return config;
  },
};

module.exports = nextConfig;
