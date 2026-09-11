import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Export a fully static site to the `out/` directory during `next build`.
  output: 'export',
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),  // Uncomment and add 'import path from "path"' if needed
  /* config options here */
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    // Static export has no Next.js image optimization server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
