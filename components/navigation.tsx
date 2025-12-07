"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import SearchBar from "./search-bar"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-6">
          <Link href="/" className="font-playfair text-3xl font-bold text-primary whitespace-nowrap">
            Zeema
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/children" className="hover:text-primary transition-colors">
              Children
            </Link>
            <Link href="/adult" className="hover:text-primary transition-colors">
              Adult
            </Link>
            <Link href="/perfume" className="hover:text-primary transition-colors">
              Perfume
            </Link>
            <Link href="/accessories" className="hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <SearchBar />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            <Link href="/shop" className="block py-2 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/children" className="block py-2 hover:text-primary transition-colors">
              Children
            </Link>
            <Link href="/adult" className="block py-2 hover:text-primary transition-colors">
              Adult
            </Link>
            <Link href="/perfume" className="block py-2 hover:text-primary transition-colors">
              Perfume
            </Link>
            <Link href="/accessories" className="block py-2 hover:text-primary transition-colors">
              Accessories
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="block py-2 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
