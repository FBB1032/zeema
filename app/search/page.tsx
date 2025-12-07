"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const allProducts = [
  {
    id: 1,
    name: "Premium Chino Pants - Navy",
    category: "children",
    price: "₦8,500",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
  },
  {
    id: 2,
    name: "Girls Elegant Pink Gown",
    category: "children",
    price: "₦15,000",
    image: "/elegant-pink-girls-gown-formal-dress.jpg",
  },
  {
    id: 3,
    name: "Luxury Emerald Jallabiya",
    category: "adult",
    price: "₦25,000",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
  },
  {
    id: 4,
    name: "Coral Gold Evening Gown",
    category: "adult",
    price: "₦35,000",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
  },
  {
    id: 5,
    name: "Premium Luxury Perfume Set",
    category: "perfume",
    price: "₦12,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
  {
    id: 6,
    name: "Luxury Leather Handbag",
    category: "accessories",
    price: "₦22,000",
    image: "/luxury-cognac-leather-handbag-women.jpg",
  },
  {
    id: 7,
    name: "Designer Heels - Gold",
    category: "accessories",
    price: "₦18,000",
    image: "/elegant-gold-heels-women-dress-shoes.jpg",
  },
  {
    id: 8,
    name: "Premium Kids Dress Shoes",
    category: "accessories",
    price: "₦9,500",
    image: "/black-shiny-dress-shoes-kids-children.jpg",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const q = searchParams.get("q") || ""
  const [results, setResults] = useState<typeof allProducts>([])

  useEffect(() => {
    if (q) {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(q.toLowerCase()) ||
          product.category.toLowerCase().includes(q.toLowerCase()),
      )
      setResults(filtered)
    }
  }, [q])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">Search Results</h1>
          <p className="text-foreground/70">
            {q && (
              <>
                Found <span className="text-primary font-semibold">{results.length}</span> result
                {results.length !== 1 ? "s" : ""} for "<span className="font-semibold">{q}</span>"
              </>
            )}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-foreground/5 aspect-square">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-2 capitalize">{product.category}</p>
                  <p className="text-primary font-semibold">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : q ? (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg mb-4">No products found for "{q}"</p>
            <Link href="/shop" className="text-primary hover:text-primary/80 font-semibold transition-colors">
              Browse all products →
            </Link>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg">Enter a search term to find products</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
