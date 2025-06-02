/** @type {import('open-next').OpenNextConfig} */
module.exports = {
  // Additional OpenNext config options
  build: {
    // Configure esbuild to handle externals
    esbuild: {
      external: ['@opentelemetry/api']
    }
  }
};