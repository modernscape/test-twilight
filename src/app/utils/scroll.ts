// utils/scroll.ts
export const handleJump_ = (e: React.MouseEvent, id: string, targetPath: string = "/about") => {
  const currentPath = window.location.pathname

  // 1. もし現在地が targetPath（/about）ならスクロール
  if (currentPath === targetPath) {
    e.preventDefault() // ページ遷移を止める
    const element = document.getElementById(id)
    if (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      window.scrollTo({
        top: rect.top + scrollTop - 160,
        behavior: "smooth",
      })
    }
  }
  // 2. 現在地が違うなら、e.preventDefaultを呼ばない
  // → そのまま Link の機能で /about#selection へ遷移する
}
