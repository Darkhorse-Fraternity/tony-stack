/** @type {import('next').NextConfig} */
module.exports = {
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  output: "standalone",
  transpilePackages: [
    "@monad-stack/use-hook-utils",
    "@monad-stack/axios-hook-client",
    "@monad-stack/daisy-layout",
    "@monad-stack/daisy-modal",
    "@monad-stack/daisy-toast",
    "@monad-stack/daisy-error-boundary",
    "@monad-stack/daisy-hook-form",
    "@monad-stack/daisy-react-table",
  ],
}
