/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  transpilePackages: ["@youngagency/ui"],
  experimental: {
    appDir: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
