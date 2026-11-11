import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // В домашней папке лежит чужой yarn.lock — фиксируем корень проекта явно.
  turbopack: { root: __dirname },
}

export default nextConfig
