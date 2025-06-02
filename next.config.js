/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    // Minimal serverless configuration for smaller builds
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu",
        "node_modules/@swc/core-linux-x64-musl",
        "node_modules/@esbuild/darwin-*",
        "node_modules/@esbuild/linux-*",
        "node_modules/@esbuild/win32-*",
        "node_modules/typescript",
      ],
    },
  },
};

module.exports = nextConfig;