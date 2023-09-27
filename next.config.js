/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**/*',
      },
      {
        protocol: 'https',
        hostname: 'seed-mix-image.spotifycdn.com',
        port: '',
        pathname: '/v6/img/**/*',
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
