import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
