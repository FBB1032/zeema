"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"

interface FeaturedProduct {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<FeaturedProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/products?featured=true")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch featured products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Collection</span>
            </h2>
            <p className="text-muted-foreground text-lg">Loading our curated selection...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our curated selection of fashion, accessories, and more
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
