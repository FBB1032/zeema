import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const accessoriesProducts = [
  {
    id: "11",
    name: "Luxury Designer Handbag",
    price: "₦28,000",
    image: "/luxury-cognac-leather-handbag-women.jpg",
  },
  {
    id: "12",
    name: "Classic Leather Crossbody Bag",
    price: "₦15,000",
    image: "/luxury-cognac-leather-handbag-women.jpg",
  },
  {
    id: "13",
    name: "Gold Heel Shoes",
    price: "₦12,000",
    image: "/elegant-gold-heels-women-dress-shoes.jpg",
  },
  {
    id: "14",
    name: "Children Formal Shoes",
    price: "₦8,000",
    image: "/black-shiny-dress-shoes-kids-children.jpg",
  },
  {
    id: "15",
    name: "Premium Perfume - Adult",
    price: "₦14,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
  {
    id: "16",
    name: "Children Perfume Set",
    price: "₦8,500",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
  {
    id: "17",
    name: "Luxury Fragrance Collection",
    price: "₦32,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
  },
]

export default function Accessories() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Accessories</span> & Fragrance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your look with our curated selection of premium bags, shoes, and luxurious fragrances.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessoriesProducts.map((product) => (
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
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Complete Your Style</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Add the perfect finishing touches with our accessories and fragrance collection.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop All Products
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
