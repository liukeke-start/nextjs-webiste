
/**
 * @type {import('next').NextConfig}
 */

const moduleExports = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    loader: 'default',
    path: '/_next/image',
    unoptimized: true,
  }
};

module.exports = moduleExports;