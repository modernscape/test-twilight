// utils/scrollToSection.ts
import React from "react"

/**
 * 指定したIDのセクションへスムーズにスクロールする関数
 * @param e クリックイベント
 * @param id ターゲット要素のID（例: "#about"）
 * @param offset 調整したい余白（デフォルト 160px）
 */
export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
  id: string,
  offset: number = 160,
) => {
  e.preventDefault()

  const element = document.querySelector(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const targetY = rect.top + scrollTop - offset

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    })

    // URLのハッシュを更新
    window.history.pushState(null, "", id)
  }
}
