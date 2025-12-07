import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Droplet } from "lucide-react"

const perfumeProducts = [
  {
    id: "15",
    name: "Premium Perfume - Adult",
    price: "₦14,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Adults",
  },
  {
    id: "16",
    name: "Children Perfume Set",
    price: "₦8,500",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Children",
  },
  {
    id: "17",
    name: "Luxury Fragrance Collection",
    price: "₦32,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Adults",
  },
  {
    id: "18",
    name: "Classic Men's Cologne",
    price: "₦16,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Men",
  },
  {
    id: "19",
    name: "Women's Eau de Parfum",
    price: "₦18,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Women",
  },
  {
    id: "20",
    name: "Signature Fragrance",
    price: "₦20,000",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    forAudience: "Adults",
  },
]

export default function Perfume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Perfume</span> & Fragrance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our luxurious collection of perfumes and fragrances for the whole family. From timeless classics to
            modern scents.
          </p>
        </div>

        {/* Fragrance Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <Droplet className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">For Women</h3>
            <p className="text-muted-foreground text-sm">
              Elegant and sophisticated fragrances that capture feminine beauty.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Droplet className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-semibold text-lg mb-2">For Men</h3>
            <p className="text-muted-foreground text-sm">Bold and distinctive scents for the modern man.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Droplet className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">For Children</h3>
            <p className="text-muted-foreground text-sm">Gentle and playful fragrances designed for young ones.</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {perfumeProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">
              <div className="relative h-72 mb-4 overflow-hidden rounded-lg bg-card border border-border">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {product.forAudience}
                </div>
              </div>
              <h3 className="font-playfair text-lg font-bold group-hover:text-primary transition-colors mb-2">
                {product.name}
              </h3>
              <p className="text-primary font-semibold">{product.price}</p>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Find Your Signature Scent</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Order now via WhatsApp to get expert fragrance recommendations and special bundles.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hi%20Zeema%20Store!%20I'd%20like%20to%20order%20a%20perfume."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Order Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
