import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const childrenProducts = [
  {
    id: "1",
    name: "Girls Pink Gown",
    price: "₦15,000",
    image: "/elegant-pink-girls-gown-formal-dress.jpg",
    category: "Gowns & Dresses",
  },
  {
    id: "2",
    name: "Boys Navy Chino Set",
    price: "₦12,000",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
    category: "Chinos & Polos",
  },
  {
    id: "3",
    name: "Children's Jeans",
    price: "₦10,000",
    image: "/navy-blue-chino-pants-polo-shirt-boys-set.jpg",
    category: "Jeans",
  },
  {
    id: "4",
    name: "Kids Formal Gown",
    price: "₦18,000",
    image: "/elegant-pink-girls-gown-formal-dress.jpg",
    category: "Gowns & Dresses",
  },
  {
    id: "14",
    name: "Children Dress Shoes",
    price: "₦8,000",
    image: "/black-shiny-dress-shoes-kids-children.jpg",
    category: "Shoes",
  },
  {
    id: "15",
    name: "Kids Perfume Set",
    price: "₦8,500",
    image: "/luxury-gold-perfume-bottle-set-elegant.jpg",
    category: "Fragrances",
  },
]

const categories = [
  { name: "Gowns & Dresses", count: 2 },
  { name: "Chinos & Polos", count: 1 },
  { name: "Jeans", count: 1 },
  { name: "Shoes", count: 1 },
  { name: "Fragrances", count: 1 },
]

export default function Children() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Children's</span> Fashion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stylish and comfortable clothing for children. From casual wear to special occasion outfits.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer"
            >
              <h3 className="font-playfair font-bold text-primary mb-2">{cat.name}</h3>
              <p className="text-muted-foreground text-sm">{cat.count} items</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {childrenProducts.map((product) => (
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
              <p className="text-muted-foreground text-sm mb-1">{product.category}</p>
              <p className="text-primary font-semibold">{product.price}</p>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Dress Your Little Ones</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Browse our complete children's collection with something for every occasion.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop All Children's Products
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
