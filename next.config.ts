import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.VERCEL ? "/twilight" : "",
  assetPrefix: process.env.VERCEL ? "/twilight" : "",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
}

export default nextConfig
