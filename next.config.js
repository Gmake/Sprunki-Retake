/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path+/',
        has: [
          {
            type: 'host',
            value: 'sprunki-retake.cc',
          },
        ],
        destination: 'https://sprunki-retake.cc/:path+',
        permanent: true,
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'X-Robots-Tag', value: 'index, follow' }
        ],
      }
    ]
  }
}

module.exports = nextConfig 