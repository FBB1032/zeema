import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Check } from "lucide-react"
import { getAllSettings } from "@/lib/settings-db"

export default async function About() {
  const settings = await getAllSettings()

  const aboutIntro = settings["about_intro"] || "Zeema Store is a luxury fashion and beauty destination..."
  const aboutStory = settings["about_story"] || "Zeema Store was born from a passion..."
  const aboutMission = settings["about_mission"] || "Our mission is to make luxury accessible..."
  const whatsappNumber = settings["whatsapp_number"] || "1234567890"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Zeema Store</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">{aboutIntro}</p>
        </div>

        {/* Our Story */}
        <section className="mb-16 border-t border-border pt-12">
          <h2 className="font-playfair text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{aboutStory}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{aboutMission}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Premium Quality</h3>
                  <p className="text-muted-foreground">Only authentic, high-quality products</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Curated Selection</h3>
                  <p className="text-muted-foreground">Handpicked items that celebrate elegance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp Shopping</h3>
                  <p className="text-muted-foreground">Easy, personalized shopping experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Collections */}
        <section className="mb-16 border-t border-border pt-12">
          <h2 className="font-playfair text-3xl font-bold mb-8">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Children Fashion</h3>
              <p className="text-muted-foreground">
                Premium chinos, jeans, polos, and gowns for stylish children. Quality fabrics and timeless designs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Adult Fashion</h3>
              <p className="text-muted-foreground">
                Elegant evening gowns, tops, and two-piece sets for modern women. Luxurious fabrics and sophisticated
                designs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Traditional Wear</h3>
              <p className="text-muted-foreground">
                Authentic jallabiya for men, women, and children. Premium fabrics celebrating cultural elegance.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Accessories</h3>
              <p className="text-muted-foreground">
                Designer handbags and premium leather accessories. Perfect for completing your luxury look.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Footwear</h3>
              <p className="text-muted-foreground">
                Elegant shoes for all ages. From formal wear to everyday elegance, we have your sole covered.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-playfair text-xl font-bold mb-3 text-primary">Fragrance</h3>
              <p className="text-muted-foreground">
                Premium perfumes for adults and children. Luxurious scents in beautiful crystal bottles.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 border-t border-border pt-12">
          <h2 className="font-playfair text-3xl font-bold mb-8">Why Choose Zeema Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Authenticity Guaranteed</h3>
              <p className="text-muted-foreground">
                We work directly with premium suppliers to ensure every product is 100% authentic. No compromises on
                quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Personal Shopping Experience</h3>
              <p className="text-muted-foreground">
                Shop directly via WhatsApp for a personalized, convenient experience. Our team is here to help you find
                exactly what you need.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                We believe luxury should be accessible. Our pricing is fair and transparent, with no hidden charges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-primary">Fast & Secure Delivery</h3>
              <p className="text-muted-foreground">
                Quick processing and secure delivery options. Track your order and shop with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card border border-border rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our collections and find your perfect style. Contact us via WhatsApp for personalized shopping
            assistance.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Zeema%20Store!%20I'd%20like%20to%20explore%20your%20collections.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Shop Now on WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}
