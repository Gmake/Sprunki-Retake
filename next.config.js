/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // 添加跨域支持
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ],
      },
    ]
  }
}

module.exports = nextConfig 