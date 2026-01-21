/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的HTMLとして書き出す設定
  images: {
    unoptimized: true, // GitHub Pagesでは画像の自動最適化が使えないため無効化
  },
  // もし URLが「https://ユーザー名.github.io/リポジトリ名/」になる場合は
  // basepath: '/リポジトリ名',
}

export default nextConfig
