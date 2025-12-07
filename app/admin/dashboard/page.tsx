"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getAdminFromSession, clearAdminSession } from "@/lib/admin-auth"
import { Package, Plus, Edit2, Trash2, LogOut, Star } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  featured?: boolean
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const router = useRouter()

  useEffect(() => {
    const adminSession = getAdminFromSession()
    if (!adminSession) {
      router.push("/admin/login")
      return
    }

    // Fetch products from database
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("[v0] Failed to fetch products:", error)
        // Fallback to demo data if database fails
        const demoProducts: Product[] = [
          {
            id: "1",
            name: "Girls Premium Gown",
            category: "Children - Gowns & Dresses",
            price: 8500,
            stock: 5,
            featured: true,
          },
          {
            id: "2",
            name: "Adult Jallabiya - Emerald",
            category: "Adult - Traditional Wear",
            price: 12000,
            stock: 8,
            featured: true,
          },
          {
            id: "3",
            name: "Boys Chino Polo Combo",
            category: "Children - Chinos & Polos",
            price: 6500,
            stock: 6,
            featured: true,
          },
          {
            id: "4",
            name: "Luxury Perfume Collection",
            category: "Perfume - Adult",
            price: 7000,
            stock: 15,
            featured: true,
          },
          { id: "5", name: "Adult Evening Gown", category: "Adult - Women", price: 18000, stock: 4, featured: true },
          {
            id: "6",
            name: "Premium Leather Handbag",
            category: "Accessories - Bags",
            price: 9500,
            stock: 7,
            featured: true,
          },
          {
            id: "7",
            name: "Designer Flats & Heels",
            category: "Accessories - Shoes",
            price: 5500,
            stock: 10,
            featured: true,
          },
          {
            id: "8",
            name: "Kids Dress Shoes Set",
            category: "Children - Shoes",
            price: 4000,
            stock: 12,
            featured: true,
          },
        ]
        setProducts(demoProducts)
      }
      setLoading(false)
    }

    fetchProducts()
  }, [router])

  const categories = ["all", ...new Set(products.map((p) => p.category))].sort()
  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

  const handleLogout = () => {
    clearAdminSession()
    router.push("/admin/login")
  }

  const handleDeleteProduct = async (id: string) => {
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" })
      setProducts(products.filter((p) => p.id !== id))
    } catch (error) {
      console.error("[v0] Failed to delete product:", error)
    }
  }

  const handleToggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !currentFeatured }),
      })

      if (response.ok) {
        setProducts(products.map((p) => (p.id === id ? { ...p, featured: !currentFeatured } : p)))
      }
    } catch (error) {
      console.error("[v0] Failed to toggle featured status:", error)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-foreground">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="font-playfair text-2xl font-bold text-primary">Zeema Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">Complete Store Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Products</p>
                <p className="font-playfair text-3xl font-bold text-primary">{products.length}</p>
              </div>
              <Package size={40} className="text-primary/30" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div>
              <p className="text-muted-foreground text-sm">Total Stock Value</p>
              <p className="font-playfair text-2xl font-bold text-primary">
                ₦{products.reduce((acc, p) => acc + p.price * p.stock, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div>
              <p className="text-muted-foreground text-sm">Low Stock Items</p>
              <p className="font-playfair text-3xl font-bold text-accent">
                {products.filter((p) => p.stock < 5).length}
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div>
              <p className="text-muted-foreground text-sm">Featured Products</p>
              <p className="font-playfair text-3xl font-bold text-primary">
                {products.filter((p) => p.featured).length}
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="border-b border-border px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="font-playfair text-2xl font-bold text-foreground">Manage Products</h2>
              <p className="text-muted-foreground text-sm">Total: {filteredProducts.length} products</p>
            </div>
            <Link
              href="/admin/products/add"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <Plus size={18} />
              Add Product
            </Link>
          </div>

          {/* Category Filter */}
          <div className="border-b border-border px-6 py-4">
            <p className="text-muted-foreground text-sm mb-3">Filter by Category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {cat === "all" ? "All Products" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-background border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Product Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Featured</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">{product.name}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{product.category}</td>
                    <td className="px-6 py-4 text-foreground font-semibold">₦{product.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.stock < 5 ? "bg-red-900/30 text-red-400" : "bg-green-900/30 text-green-400"
                        }`}
                      >
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4 text-foreground font-semibold">
                      ₦{(product.price * product.stock).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleFeatured(product.id, product.featured || false)}
                        className={`flex items-center gap-2 px-3 py-1 rounded transition-colors ${
                          product.featured
                            ? "bg-primary/20 text-primary hover:bg-primary/30"
                            : "bg-muted hover:bg-muted/80 text-muted-foreground"
                        }`}
                        title={product.featured ? "Remove from featured" : "Add to featured"}
                      >
                        <Star size={16} fill={product.featured ? "currentColor" : "none"} />
                        {product.featured ? "Yes" : "No"}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/products/edit/${product.id}`}
                          className="flex items-center gap-1 bg-blue-600/20 text-blue-400 px-3 py-1 rounded hover:bg-blue-600/30 transition-colors text-sm"
                        >
                          <Edit2 size={16} />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="flex items-center gap-1 bg-red-600/20 text-red-400 px-3 py-1 rounded hover:bg-red-600/30 transition-colors text-sm"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
