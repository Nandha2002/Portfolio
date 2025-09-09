/** @type {import('next').NextConfig} */

// If your repo is https://github.com/yourname/portfolio
// then your site will be served at https://yourname.github.io/portfolio/
const REPO_NAME = "Portfolio";

const nextConfig = {
  // Produce a static site in "out/" on `next build`
  output: "export",

  // Needed for static export (no Next image optimizer on GH Pages)
  images: { unoptimized: true },

  // GitHub Pages serves from a subpath: /<repo>
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,

  // Nice to have
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
