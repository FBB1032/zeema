"use client"

import Link from "next/link"

const categories = [
  {
    name: "Children's Fashion",
    slug: "children",
    image: "/children-kids-fashion-clothing-chinos-jeans-polos.jpg",
  },
  {
    name: "Adult Fashion",
    slug: "adult",
    image: "/luxury-adult-evening-gown-dress-women.jpg",
  },
  {
    name: "Traditional Wear",
    slug: "jallabiya",
    image: "/elegant-jallabiya-traditional-dress-gold-embroider.jpg",
  },
  {
    name: "Shoes & Bags",
    slug: "accessories",
    image: "/luxury-leather-handbags-designer-shoes.jpg",
  },
  {
    name: "Fragrance",
    slug: "perfume",
    image: "/luxury-perfume-bottles-gold-crystal-elegant.jpg",
  },
  {
    name: "Gifts",
    slug: "gifts",
    image: "/luxury-gift-sets-packaging-elegant.jpg",
  },
]

export default function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-primary">Category</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative h-64 overflow-hidden rounded-lg border border-border hover:border-primary transition-colors duration-300"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end justify-start p-6">
                <h3 className="font-playfair text-2xl font-bold text-primary">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
