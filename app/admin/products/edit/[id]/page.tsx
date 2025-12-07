"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { getAdminFromSession } from "@/lib/admin-auth"
import { ChevronLeft } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  description?: string
}

export default function EditProductPage() {
  const [formData, setFormData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string

  useEffect(() => {
    const adminSession = getAdminFromSession()
    if (!adminSession) {
      router.push("/admin/login")
      return
    }

    const products = JSON.parse(localStorage.getItem("zeeemaProducts") || "[]")
    const product = products.find((p: Product) => p.id === productId)

    if (product) {
      setFormData(product)
    }
    setLoading(false)
  }, [router, productId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (!formData) return
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev!,
      [name]: name === "price" || name === "stock" ? Number.parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setSubmitting(true)

    try {
      const products = JSON.parse(localStorage.getItem("zeeemaProducts") || "[]")
      const index = products.findIndex((p: Product) => p.id === productId)

      if (index !== -1) {
        products[index] = formData
        localStorage.setItem("zeeemaProducts", JSON.stringify(products))
      }

      router.push("/admin/dashboard")
    } catch (error) {
      console.error("[v0] Error updating product:", error)
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-foreground">Loading...</div>
  }

  if (!formData) {
    return <div className="flex items-center justify-center min-h-screen text-foreground">Product not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="font-playfair text-2xl font-bold text-primary">Edit Product</h1>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Product Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Women's Fashion</option>
              <option>Children's Fashion</option>
              <option>Traditional Wear</option>
              <option>Accessories</option>
              <option>Shoes</option>
              <option>Fragrance</option>
              <option>Gifts</option>
            </select>
          </div>

          {/* Price and Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-semibold text-foreground mb-2">
                Price (₦) *
              </label>
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-semibold text-foreground mb-2">
                Stock Quantity *
              </label>
              <input
                id="stock"
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {submitting ? "Updating Product..." : "Update Product"}
          </button>
        </form>
      </main>
    </div>
  )
}
