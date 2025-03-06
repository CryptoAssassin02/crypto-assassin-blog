"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const videos = [
  {
    id: "1",
    title: "CARV's D.A.T.A. Framework",
    description:
      "In this video, two AI agents break down CARV's D.A.T.A. Framework, a groundbreaking system that integrates trustless on-chain data with AI-powered analytics. Learn how Deepseek, CARV SVM Chain, ERC-7231 Carv ID, and zero-knowledge proofs are shaping the future of AI-driven DeFi, gaming, governance, and beyond.",
    thumbnail: "https://pbs.twimg.com/media/GkpYQskWIAAgkf2?format=jpg&name=medium",
    embedUrl: "https://www.youtube.com/embed/nQtVluIQxwA?si=Qt21tFB9RpekONDq",
  },
  {
    id: "2",
    title: "Flow Agent App & $FLOW",
    description:
      "A short video describing how Flow Agent App works, what it aims to do, and how the $FLOW token fits into the equation.",
    thumbnail: "https://pbs.twimg.com/media/GkFUe9oXMAApbPG?format=jpg&name=medium",
    embedUrl: "https://www.youtube.com/embed/nbO5_XW8oUU?si=UXH_g4xyI-Omqoh7",
  },
]

export default function ProjectVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="project-videos" className="relative py-16 sm:py-20 md:py-24 animate-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] tracking-wider text-center mb-12 sm:mb-16">
          Project Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-neutral-800/50 rounded-lg overflow-hidden shadow-lg border border-golden-500/20 hover:border-golden-500/40 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  {activeVideo === video.id ? (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <>
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={() => setActiveVideo(video.id)}
                      >
                        <svg
                          className="w-16 h-16 text-golden-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-golden-400">{video.title}</h3>
                  <p className="text-white mb-4">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

