import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const adultProducts = [
  {
    id: "5",
    name: "Elegant Evening Gown",
    price: "₦35,000",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
    category: "Women",
  },
  {
    id: "6",
    name: "Luxury Crop Top",
    price: "₦15,000",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
    category: "Women",
  },
  {
    id: "7",
    name: "Designer Two-Piece Set",
    price: "₦22,000",
    image: "/luxury-coral-gold-evening-gown-dress-women.jpg",
    category: "Women",
  },
  {
    id: "8",
    name: "Premium Jallabiya - Male",
    price: "₦20,000",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
    category: "Men",
  },
  {
    id: "9",
    name: "Traditional Jallabiya - Female",
    price: "₦18,000",
    image: "/luxury-emerald-green-jallabiya-traditional-dress.jpg",
    category: "Women",
  },
  {
    id: "10",
    name: "Classic Men's Polo",
    price: "₦12,000",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
    category: "Men",
  },
  {
    id: "11",
    name: "Luxury Designer Handbag",
    price: "₦28,000",
    image: "/luxury-cognac-leather-handbag-women.jpg",
    category: "Women",
  },
  {
    id: "13",
    name: "Gold Heel Shoes",
    price: "₦12,000",
    image: "/elegant-gold-heels-women-dress-shoes.jpg",
    category: "Women",
  },
]

export default function Adult() {
  const womenProducts = adultProducts.filter((p) => p.category === "Women")
  const menProducts = adultProducts.filter((p) => p.category === "Men")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Adult</span> Fashion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sophisticated and elegant collections for the modern woman and man. From timeless classics to luxurious
            statement pieces.
          </p>
        </div>

        {/* Women's Collection */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">For Women</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenProducts.map((product) => (
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
        </section>

        {/* Men's Collection */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-accent">For Men</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menProducts.map((product) => (
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
        </section>

        {/* CTA Section */}
        <section className="bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Discover More</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Browse our complete collection of adult fashion for both women and men.
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
