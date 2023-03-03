// Need to transpile typescript from shared workspace
const withTM = require('next-transpile-modules')([
  '/src/memory-cards/shared',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
