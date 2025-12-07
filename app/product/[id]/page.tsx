"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Share2 } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  category: string
  rating?: number
  reviews?: number
  description: string
  details?: string
  sizes?: string[]
  colors?: string[]
  images: string[]
  features?: string[]
  whatsapp_number?: string
}

export default function ProductDetail() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`)
        const data = await response.json()
        setProduct(data)
        if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0])
        if (data.colors && data.colors.length > 0) setSelectedColor(data.colors[0])
      } catch (error) {
        console.error("Failed to fetch product:", error)
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Loading product...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Product not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  // Get WhatsApp number from settings or use default
  const whatsappNumber = product.whatsapp_number || "1234567890"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Zeema%20Store!%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20-%20${encodeURIComponent(selectedColor || "")}%20${selectedSize ? `(${encodeURIComponent(selectedSize)})` : ""}%20₦${product.price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="mb-6 bg-card border border-border rounded-lg overflow-hidden h-96 md:h-[500px]">
              <img
                src={product.images?.[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <>
                <div className="flex gap-4 mb-6">
                  {product.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                        selectedImage === idx ? "border-primary" : "border-border"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Image Counter */}
                <p className="text-center text-muted-foreground text-sm">
                  {selectedImage + 1} of {product.images.length}
                </p>
              </>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Category and Title */}
            <div>
              <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-3">{product.category}</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-3">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews || 0} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Price */}
            <div>
              <p className="text-4xl font-bold text-primary">₦{product.price.toLocaleString()}</p>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-foreground leading-relaxed">{product.description}</p>
              {product.details && <p className="text-muted-foreground mt-4">{product.details}</p>}
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 && (
              <div>
                <label className="block font-semibold mb-3">Size</label>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 border-2 rounded-lg transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block font-semibold mb-3">Color: {selectedColor}</label>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 border-2 rounded-lg transition-all ${
                        selectedColor === color
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-border">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:bg-primary/90 transition-colors duration-300"
              >
                Buy via WhatsApp
              </a>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-3 px-4 border-2 rounded-lg font-semibold transition-all ${
                    isWishlisted ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <Heart size={20} className="mx-auto" fill={isWishlisted ? "currentColor" : "none"} />
                </button>

                <button className="flex-1 py-3 px-4 border-2 border-border rounded-lg font-semibold hover:border-primary/50 transition-all">
                  <Share2 size={20} className="mx-auto" />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Shipping:</span> Fast & secure WhatsApp ordering
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Returns:</span> Hassle-free returns within 14 days
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Authenticity:</span> 100% authentic luxury products
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="font-playfair text-3xl font-bold mb-8">
            You May Also <span className="text-primary">Like</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(product)
              .filter((p: any) => p.id !== product.id)
              .slice(0, 3)
              .map((p: any) => (
                <a key={p.id} href={`/product/${p.id}`} className="group cursor-pointer">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-card border border-border">
                    <img
                      src={p.images[0] || "/placeholder.svg"}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-bold group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-primary font-semibold">{p.price}</p>
                </a>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
