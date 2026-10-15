// GitHub Pages serves the site from /<repo>/, so the deploy workflow sets
// PAGES_BASE_PATH. Locally it is unset and the site runs from /.
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
