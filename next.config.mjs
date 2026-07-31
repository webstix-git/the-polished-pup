import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A lockfile in the parent folder makes Next guess the wrong workspace root.
  outputFileTracingRoot: path.join(import.meta.dirname, "./"),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
