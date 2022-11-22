/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    transpilePackages: 
    [
      "@monad-stack/daisy-hot-toast",
      "@monad-stack/use-hook-utils",
      "@monad-stack/ui",
      "@monad-stack/axios-hook-client"
    ],
  },
};
