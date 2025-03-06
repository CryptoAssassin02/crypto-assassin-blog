"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const articlesSection = document.querySelector("#articles")
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/#articles")
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 animate-in">
      <div className="flex-grow flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10">
        <Image
          src="/New-og-image.png"
          alt="Crypto Assassin Logo"
          width={3200}
          height={3200}
          className="mx-auto object-contain w-[192px] sm:w-[256px] md:w-[320px] lg:w-[384px] xl:w-[448px] 2xl:w-[512px]"
        />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] tracking-wider text-center"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          CRYPTO ASSASSIN
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5] font-normal tracking-wide max-w-3xl mx-auto text-center">
          Cutting Through the Hype - AI, Blockchain, and the Future of Crypto
        </p>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10">
        <a
          href="/#articles"
          className="inline-block bg-[#FFD700] text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-[#F5F5F5] hover:text-[#FFD700] transition-colors duration-300"
          onClick={handleExploreClick}
        >
          Explore Now
        </a>
      </div>
    </section>
  )
}

