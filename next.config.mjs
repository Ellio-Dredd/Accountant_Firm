/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Prepend /E-learning to all routes in production
  basePath: isProd ? "/E-learning" : "",
  // Prepend /E-learning to all static assets
  assetPrefix: isProd ? "/E-learning" : "",
  output: "export", // full static export
  images: {
    unoptimized: true, // disables Next.js image optimization (required for static export)
  },
};

module.exports = nextConfig;
