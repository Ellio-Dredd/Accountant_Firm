// next.config.js
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/E-learning" : "",
  assetPrefix: isProd ? "/E-learning" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
