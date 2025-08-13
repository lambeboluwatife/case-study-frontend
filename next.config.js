// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for 'encoding' module not found error
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        encoding: false,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  // Add other Next.js config options here if needed
  experimental: {
    // Enable if you need server actions or other experimental features
    // serverActions: true,
  },
};

module.exports = nextConfig;
