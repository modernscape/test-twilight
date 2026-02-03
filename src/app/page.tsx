"use client"

import {useState, useEffect} from "react"
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"
import Menu from "../components/Menu"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  // 画像切り替え用のステート
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  // const basePath = process.env.NODE_ENV === "production" ? "/twilight" : ""
  const basePath = ""

  // 画像のリスト
  const images = [
    `${basePath}/hero-texture-1.jpeg`,
    `${basePath}/hero-texture-2.jpen`,
    `${basePath}/hero-texture-3.jpeg`,
    `${basePath}/hero-texture-4.jpeg`,
  ]

  // 5秒ごとに画像をランダムに切り替えるタイマー
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prevIndex) => {
        let nextIndex
        do {
          nextIndex = Math.floor(Math.random() * images.length)
        } while (nextIndex === prevIndex) // 同じ画像が連続しないように
        return nextIndex
      })
    }, 5000) // 5000ms = 5秒

    return () => clearInterval(timer)
  }, [images.length])

  return (
    // {/* 3. メインレイアウト */}
    <div className="flex-1 flex flex-col md:flex-row w-full relative h-full">
      {/* コンテンツエリア */}
      <div
        className="absolute inset-0 
                    md:relative md:inset-auto md:flex-none md:w-[400px] 
                    landscape:relative landscape:inset-auto landscape:flex-none landscape:w-[250px]
                    flex flex-col justify-center items-center p-10 z-20 pointer-events-none md:pointer-events-auto 
                    landscape:p-4
                  "
      >
        {/* ロゴコンテナ */}
        <div
          className="
                      w-[280px] max-w-[280px] md:max-w-[500px] 
                      landscape:w-[160px] landscape:max-w-[160px]
                      flex flex-col items-center
                    "
        >
          <div className="w-full pb-6 landscape:pb-2 text-center">
            <Image
              src={`${basePath}/logo.png`}
              alt="Main Logo"
              width={800}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <p className="mt-4 landscape:mt-1 text-[10px] md:text-sm tracking-[0em] font-bold uppercase opacity-80 text-center text-black">
            Niigata / Japan
          </p>
        </div>
      </div>

      {/* 画像エリア */}
      <div
        className="
                    absolute inset-0 p-0 
                    md:relative md:inset-auto md:flex-1 md:pt-24 md:pl-0 md:pb-12 
                    /* 横画面の時も右側に配置されるようにする */
                    landscape:relative landscape:inset-auto landscape:flex-1 landscape:px-4 landscape:pt-10 landscape:pb-0
                    z-10
                  "
      >
        <div className="relative w-full h-full border-0 overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentImgIndex}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 2, ease: "easeInOut"}}
              className="absolute inset-0"
            >
              <Image src={images[currentImgIndex]} alt={`Visual ${currentImgIndex}`} fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
