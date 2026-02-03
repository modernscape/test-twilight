import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  output: "export",
  // images を experimental の外（ルート直下）に置く
  images: {
    unoptimized: true,
  },
  // もし basePath などがあればここに続ける
  basePath: "",
  assetPrefix: "",
  // reactCompiler は Next 15/16 では標準的なのでそのままでOK
  experimental: {
    // もし experimental の中に images が入っていたら削除してください
  },
}

export default nextConfig
