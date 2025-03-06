"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface InfoCard {
  title: string
  content: string
}

const infoCards: InfoCard[] = [
  {
    title: "Mission Statement",
    content:
      "My mission is to provide early and insightful analysis of the AI x Crypto revolution, focusing on AI altcoins and decentralized AI ecosystems. By identifying transformative innovations ahead of the mainstream, I aim to equip readers with the knowledge to navigate and capitalize on this rapidly evolving landscape.",
  },
  {
    title: "Expertise",
    content:
      "With expertise in both technical research and market dynamics, I analyze AI-driven protocols, altcoins, projects with real utility, and their intersection with decentralized finance. My work includes examining AI agents, agentic frameworks, and novel on-chain data marketplaces, identifying unique opportunities, and providing actionable insights. By anticipating emerging trends, I help readers understand and leverage the latest innovations in AI and crypto.",
  },
  {
    title: "Philosophy",
    content:
      "I believe that AI-focused altcoins and projects with real utility are driving a new era of crypto innovation, with the potential to transform on-chain analytics, decision-making, and more. By integrating AI with decentralized protocols, these projects are set to redefine capital flows, project evolution, and community organization. My philosophy is to identify these shifts early, enabling us to harness the transformative power of AI in the crypto space.",
  },
]

export default function AboutSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          } else {
            entry.target.classList.remove("animate-in")
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative min-h-screen py-16 sm:py-20 md:py-24 animate-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] tracking-wider text-center mb-12 sm:mb-16">
          About Crypto Assassin
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <Image
                src="/X-Profile-Pic.png"
                alt="Crypto Assassin"
                layout="fill"
                objectFit="cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="lg:w-3/5 space-y-6">
            {infoCards.map((card, index) => (
              <Card
                key={card.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-[#333333] border-none rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 sm:p-8 opacity-0 translate-x-[100px] transition-all duration-1000 ease-in-out hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)] hover:bg-[#3a3a3a] hover:scale-[1.02]"
                style={{
                  transitionDelay: `${index * 300}ms`,
                }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] uppercase mb-4">{card.title}</h3>
                <p className="text-white leading-relaxed">{card.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

