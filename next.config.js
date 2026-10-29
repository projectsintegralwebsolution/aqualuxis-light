/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/our-work',
        destination: '/gallery',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
