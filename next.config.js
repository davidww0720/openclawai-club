/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid monorepo lockfile confusion in this workspace
  outputFileTracingRoot: __dirname,

  eslint: {
    // We'll run lint separately; skip blocking builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
