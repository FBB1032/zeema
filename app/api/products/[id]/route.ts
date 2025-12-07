import { type NextRequest, NextResponse } from "next/server"
import { getProductById, updateProduct, deleteProduct } from "@/lib/product-db"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const product = await getProductById(Number.parseInt(params.id))

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("[v0] GET /api/products/[id] error:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const product = await updateProduct(Number.parseInt(params.id), body)
    return NextResponse.json(product)
  } catch (error) {
    console.error("[v0] PUT /api/products/[id] error:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await deleteProduct(Number.parseInt(params.id))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] DELETE /api/products/[id] error:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
