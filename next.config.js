/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/brands/:brand',
        destination: '/reports/brands/:brand.html',
      },
    ];
  },
};

module.exports = nextConfig;

