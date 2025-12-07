"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

// Product data organized by category
const allProducts = [
  {
    id: "1",
    name: "Classic Navy Chino Pants",
    price: "₦8,500",
    category: "Children Fashion",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
  },
  {
    id: "2",
    name: "Premium Denim Jeans",
    price: "₦12,000",
    category: "Children Fashion",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
  },
  {
    id: "3",
    name: "White Polo Button Down",
    price: "₦7,500",
    category: "Children Fashion",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
  },
  {
    id: "4",
    name: "Pink Formal Gown",
    price: "₦18,000",
    category: "Children Fashion",
    image: "/elegant-pink-girls-gown-formal-dress.jpg",
  },
  {
    id: "5",
    name: "Elegant Evening Gown",
    price: "₦35,000",
    category: "Adult Fashion",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
  },
  {
    id: "6",
    name: "Luxury Crop Top",
    price: "₦15,000",
    category: "Adult Fashion",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
  },
  {
    id: "7",
    name: "Designer Two-Piece Set",
    price: "₦22,000",
    category: "Adult Fashion",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
  },
  {
    id: "8",
    name: "Traditional Jallabiya - Male",
    price: "₦16,000",
    category: "Traditional Wear",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
  },
  {
    id: "9",
    name: "Traditional Jallabiya - Female",
    price: "₦18,000",
    category: "Traditional Wear",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
  },
  {
    id: "10",
    name: "Jallabiya - Children",
    price: "₦10,000",
    category: "Traditional Wear",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
  },
  {
    id: "11",
    name: "Luxury Designer Handbag",
    price: "₦28,000",
    category: "Shoes & Bags",
    image: "/luxury-cognac-leather-handbag-women.jpg",
  },
  {
    id: "12",
    name: "Classic Leather Crossbody Bag",
    price: "₦15,000",
    category: "Shoes & Bags",
    image: "/luxury-cognac-leather-handbag-women.jpg",
  },
  {
    id: "13",
    name: "Gold Heel Shoes",
    price: "₦12,000",
    category: "Shoes & Bags",
    image: "/elegant-gold-heels-women-dress-shoes.jpg",
  },
  {
    id: "14",
    name: "Children Formal Shoes",
    price: "₦8,000",
    category: "Shoes & Bags",
    image: "/black-shiny-dress-shoes-kids-children.jpg",
  },
  {
    id: "15",
    name: "Premium Perfume - Adult",
    price: "₦14,000",
    category: "Fragrance",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
  {
    id: "16",
    name: "Children Perfume Set",
    price: "₦8,500",
    category: "Fragrance",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
  {
    id: "17",
    name: "Luxury Fragrance Collection",
    price: "₦32,000",
    category: "Fragrance",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
]

const categories = ["All", "Children Fashion", "Adult Fashion", "Traditional Wear", "Shoes & Bags", "Fragrance"]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Shop <span className="text-primary">Zeema</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated collection of luxury fashion and beauty products
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-card border border-border">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-playfair text-lg font-bold group-hover:text-primary transition-colors mb-2">
                {product.name}
              </h3>
              <p className="text-primary font-semibold">{product.price}</p>
              <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex items-center justify-center h-96">
            <p className="text-muted-foreground">No products found in this category</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
