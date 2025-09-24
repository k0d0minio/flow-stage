/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable HTTPS support for local development
  
  // Configure for HTTPS and custom domain
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Configure images for HTTPS
  images: {
    domains: ['flow-stage.localtest.me', 'localhost'],
  },

  // Enable HTTPS in development when behind proxy
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ];
    },
  }),
};

export default nextConfig;
