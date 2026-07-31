import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A lockfile in the parent folder makes Next guess the wrong workspace root.
  outputFileTracingRoot: path.join(import.meta.dirname, "./"),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
