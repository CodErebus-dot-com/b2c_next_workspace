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
  sassOptions: {},
  reactStrictMode: true,
  transpilePackages: ["@acme/ui"], // pass the modules you would like to see transpiled
  swcMinify: true,
  webpack(config, options) {
    config.plugins.push(new NextFederationPlugin(mfConfig));

    return config;
  },
};

module.exports = nextConfig;
