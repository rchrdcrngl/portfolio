/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
    domains: ["github.com"]
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio"
}

module.exports = nextConfig
