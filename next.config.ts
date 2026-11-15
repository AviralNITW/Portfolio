import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler
  reactCompiler: false,

  // Experimental: keep empty — optimizePackageImports was causing Turbopack
  // "module factory not available" errors for lucide-react and other icon libs.
  // Turbopack handles tree-shaking natively; no manual hints needed.
  experimental: {},

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Compression
  compress: true,

  // Production source maps off (smaller bundle)
  productionBrowserSourceMaps: false,

  // Strict mode for better dev experience
  reactStrictMode: true,

  // Headers for caching static assets
  async headers() {
    // In development mode, prevent aggressive chunk caching so hot-reloads stay fresh
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, max-age=0, must-revalidate',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ];
    }

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
      {
        // Cache static assets (images, fonts) for 1 year in production
        source: '/(.*)\\.(png|jpg|jpeg|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
