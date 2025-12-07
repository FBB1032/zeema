"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url(/placeholder.svg?height=750&width=1400&query=luxury%20beauty%20fashion%20woman%20dark)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-accent/20 rounded-full" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`text-center max-w-3xl px-4 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Zeema</span> <span className="text-foreground">Store</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover the essence of luxury. Curated beauty and fashion for the modern woman.
          </p>

          <Link
            href="/shop"
            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </Link>

          <p className="text-muted-foreground text-sm mt-6">
            Exclusive collections • Curated with care • Direct messaging
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
    </section>
  )
}
