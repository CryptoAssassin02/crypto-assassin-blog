"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  embedUrl: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Flow Agent App & $FLOW",
    description:
      "A short video describing how Flow Agent App works, what it aims to do, and how the $FLOW token fits into the equation.",
    thumbnail:
      "https://i.ytimg.com/an_webp/nbO5_XW8oUU/mqdefault_6s.webp?du=3000&sqp=CL-a2b0G&rs=AOn4CLD4ykDIVztuqoQY0ZXOLnt-BE6--Q",
    embedUrl: "https://www.youtube.com/embed/nbO5_XW8oUU?si=pXUGWTYyYoGhakZQ",
  },
]

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold mb-8 text-golden-500">Project Videos</h2>
      <div className="flex justify-center">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-golden-500/20 hover:border-golden-500/40 transition-colors flex flex-col max-w-2xl w-full"
          >
            {activeVideo === video.id ? (
              <div className="relative aspect-video w-full bg-neutral-900">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <div
                className="relative aspect-video w-full bg-neutral-900 cursor-pointer group"
                onClick={() => setActiveVideo(video.id)}
              >
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-golden-500/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-neutral-900 fill-current" />
                  </div>
                </div>
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-golden-400">{video.title}</h3>
              <p className="text-white mb-4 flex-grow">{video.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

