"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  return (
    <div className="flex-1 max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="w-full px-4 py-2 bg-background border border-primary/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
          />
          <button type="submit" className="absolute right-3 text-primary hover:text-primary/80 transition-colors">
            <Search size={18} />
          </button>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-10 text-foreground/50 hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
