import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Footer />
    </main>
  )
}
