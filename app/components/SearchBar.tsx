"use client"

import { Search, X } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export default function SearchBar({ onSearch, searchQuery }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search articles..."
        className="w-full py-3 px-12 rounded-full bg-neutral-800/50 text-white border-2 border-golden-500/20 focus:border-golden-500 focus:outline-none focus:ring-2 focus:ring-golden-500/50 transition-all duration-300 text-lg"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-golden-500/70" size={20} />
      {searchQuery && (
        <button
          onClick={() => onSearch("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-golden-500 hover:text-golden-400 transition-colors duration-300"
        >
          <X size={20} />
        </button>
      )}
    </div>
  )
}

