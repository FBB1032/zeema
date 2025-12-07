import { type NextRequest, NextResponse } from "next/server"
import { getProducts, createProduct } from "@/lib/product-db"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")

    let products = []

    products = await getProducts()

    if (category) {
      products = products.filter((p: any) => p.category === category)
    }

    if (featured === "true") {
      products = products.filter((p: any) => p.featured === true)
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("[v0] GET /api/products error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const product = await createProduct(body)
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error("[v0] POST /api/products error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
