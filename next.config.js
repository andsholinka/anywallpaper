/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "wallpaperaccess.com" },
      { protocol: "https", hostname: "w.wallhaven.cc" }
    ]
  }
};

module.exports = nextConfig;
