/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel-specific optimizations
  poweredByHeader: false,
  compress: true,
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization (set to false for static export if needed)
  images: {
    unoptimized: true,
  },
  
  // Vercel output configuration
  output: 'standalone',
  
  // Environment variables (if any)
  env: {
    // Add any environment variables here
  },
  
  // Experimental features
  experimental: {
    // Enable if using app directory
    appDir: true,
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

export default nextConfig