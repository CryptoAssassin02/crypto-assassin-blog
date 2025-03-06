import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const recentArticles = [
  {
    id: "1",
    title: "The Ultimate Guide to MAIAR: Redefining Web3 and the Future of AI Agent Frameworks",
    excerpt:
      "MAIAR (@maiar_ai) aims to bring together autonomous agents, AI-driven services, and decentralized applications in a flexible, secure environment. Its goal is to solve the complicated problem of merging on-chain and off-chain activities, ensuring developers and end users can benefit from both traditional principles of modularity and the latest AI and blockchain advancements...",
    date: "February 27, 2025",
    link: "https://x.com/MCAssassin02/status/1894884178963111972",
    thumbnail: "https://pbs.twimg.com/media/Gku3TnAXwAANUiA?format=png&name=small",
  },
  {
    id: "2",
    title: "Revolutionizing AI with On-Chain Data: A Comprehensive Exploration of the CARV D.A.T.A. Framework",
    excerpt:
      "The convergence of artificial intelligence (AI) and blockchain technology is opening up new frontiers in how we store, analyze, and leverage data. Together, these domains tackle core challenges in data integrity, decentralization, and computational efficiency. At the forefront of this intersection is the CARV D.A.T.A. Framework (by @carv_official)...",
    date: "February 26, 2025",
    link: "https://x.com/MCAssassin02/status/1894452403711479907",
    thumbnail: "https://pbs.twimg.com/media/GkpYQskWIAAgkf2?format=jpg&name=medium",
  },
  {
    id: "3",
    title: "Flow: The Future of AI Agents and Decentralized Workflows",
    excerpt:
      "Flow (@FlowAgentApp) is pioneering the future of AI agents and decentralized workflows. By leveraging blockchain technology and artificial intelligence, Flow is creating a platform where AI agents can collaborate, execute complex tasks, and interact with various blockchain networks seamlessly...",
    date: "February 25, 2025",
    link: "https://x.com/MCAssassin02/status/1893975628438614480",
    thumbnail: "https://pbs.twimg.com/media/GkFUe9oXMAApbPG?format=jpg&name=medium",
  },
]

function replaceWithLinks(text: string) {
  const twitterHandles = {
    "@maiar_ai": "https://x.com/maiar_ai",
    "@carv_official": "https://x.com/carv_official",
    "@FlowAgentApp": "https://x.com/FlowAgentApp",
  }

  Object.entries(twitterHandles).forEach(([handle, link]) => {
    text = text.replace(
      handle,
      `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-golden-300 hover:underline">${handle}</a>`,
    )
  })

  return text
}

export default function BlogFeed() {
  return (
    <section className="container mx-auto px-4 my-12">
      <h2 className="text-3xl font-bold mb-8 text-golden-500">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentArticles.map((article) => (
          <Card
            key={article.id}
            className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg border border-golden-500/20 hover:border-golden-500/40 transition-colors flex flex-col"
          >
            <div className="relative h-48 bg-neutral-900">
              <Image
                src={article.thumbnail || "/placeholder.svg"}
                alt={article.title}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-golden-400">{article.title}</h3>
              <p
                className="text-white mb-4 flex-grow"
                dangerouslySetInnerHTML={{ __html: replaceWithLinks(article.excerpt) }}
              />
              <div className="flex items-center justify-between mt-4">
                <time className="text-sm text-golden-300">{article.date}</time>
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-golden-500 to-golden-400 text-neutral-900 font-bold py-2 px-4 rounded-md hover:from-golden-400 hover:to-golden-300 transition-all"
                >
                  Read on X
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

