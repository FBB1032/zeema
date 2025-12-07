"use client"

import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: string
    image: string
    category: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="relative h-80 mb-4 overflow-hidden rounded-lg bg-card border border-border">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <p className="text-xs text-primary font-semibold tracking-widest uppercase">{product.category}</p>

          <h3 className="font-playfair text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>

          <p className="text-lg text-primary font-semibold">{product.price}</p>
        </div>
      </Link>

      <Link
        href={`/product/${product.id}`}
        className="block w-full py-2 px-4 bg-accent text-accent-foreground font-semibold rounded-lg text-center hover:bg-accent/90 transition-colors duration-300 mt-3"
      >
        View Details
      </Link>
    </div>
  )
}
