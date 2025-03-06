"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import SearchBar from "./SearchBar"
import { allArticles, type Article } from "../data/articles"

const EXCERPT_LENGTH = 160

function truncateExcerpt(excerpt: string, maxLength: number) {
  if (excerpt.length <= maxLength) return excerpt
  const truncated = excerpt.slice(0, maxLength).trim()
  return truncated.replace(/\s+\S*$/, "") + "..."
}

export default function ArticlesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [preSearchPage, setPreSearchPage] = useState(0)
  const articlesPerPage = 3

  const sortedArticles = useMemo(() => {
    return [...allArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [])

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return sortedArticles

    return sortedArticles.filter((article) => {
      const searchLower = searchQuery.toLowerCase()
      return article.title.toLowerCase().includes(searchLower) || article.excerpt.toLowerCase().includes(searchLower)
    })
  }, [sortedArticles, searchQuery])

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)

  const handleSearch = (query: string) => {
    if (query === "") {
      setCurrentPage(preSearchPage)
    } else if (searchQuery === "") {
      setPreSearchPage(currentPage)
      setCurrentPage(0)
    }
    setSearchQuery(query)
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const paginatedArticles = filteredArticles.slice(currentPage * articlesPerPage, (currentPage + 1) * articlesPerPage)

  return (
    <section
      id="articles"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 animate-in"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] tracking-wider text-center mb-8 sm:mb-12">
        Articles
      </h2>

      <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-8 sm:my-12 w-full max-w-7xl mx-auto">
        {paginatedArticles.map((article: Article) => (
          <Card
            key={article.id}
            className="bg-neutral-800/50 rounded-lg overflow-hidden shadow-lg border border-golden-500/20 hover:border-golden-500/40 transition-all duration-300 flex flex-col h-[500px] sm:h-[550px] lg:h-[600px]"
          >
            <div className="relative w-full h-40 sm:h-48 bg-neutral-900">
              <Image
                src={article.thumbnail || "/placeholder.svg"}
                alt={article.title}
                layout="fill"
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-golden-400 line-clamp-3">
                {article.title}
              </h3>
              <p
                className="text-sm sm:text-base text-white mb-4 sm:mb-6 flex-grow overflow-hidden"
                style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical" }}
                dangerouslySetInnerHTML={{ __html: truncateExcerpt(article.excerpt, EXCERPT_LENGTH) }}
              />
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-golden-500/20">
                <time className="text-xs sm:text-sm text-golden-300">{article.date}</time>
                <Link
                  href={
                    article.title ===
                    "Navigating the AI x Crypto Market: A Comprehensive Guide to the Latest Trends and Opportunities"
                      ? "https://crypt0assassin.substack.com/p/navigating-the-ai-x-crypto-market"
                      : article.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-golden-500 to-golden-400 text-neutral-900 font-bold text-xs sm:text-sm py-2 px-3 sm:px-4 rounded-md hover:from-golden-400 hover:to-golden-300 transition-all duration-300"
                >
                  {article.title ===
                  "Navigating the AI x Crypto Market: A Comprehensive Guide to the Latest Trends and Opportunities"
                    ? "Read on Substack"
                    : article.link.includes("substack.com")
                      ? "Read on Substack"
                      : "Read on X"}
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          type="button"
          onClick={handlePrevious}
          className="p-2 rounded-full bg-golden-500 text-black transition-all duration-300 hover:bg-golden-400"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="p-2 rounded-full bg-golden-500 text-black transition-all duration-300 hover:bg-golden-400"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  )
}

