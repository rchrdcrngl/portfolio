/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: "akamai",
    path: "/",
    domains: ["localhost","github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = nextConfig;
