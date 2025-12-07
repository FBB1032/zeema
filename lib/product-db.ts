import { sql } from "./db"

export interface Product {
  id: string | number
  name: string
  description?: string
  price: number
  category: string
  stock: number
  image_url?: string
  sizes?: string[]
  colors?: string[]
  featured?: boolean
  created_at?: string
}

export const getProducts = async () => {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`
    return products
  } catch (error) {
    console.error("[v0] Error fetching products:", error)
    return []
  }
}

export const getProductById = async (id: number | string) => {
  try {
    const product = await sql`SELECT * FROM products WHERE id = ${id}`
    return product[0] || null
  } catch (error) {
    console.error("[v0] Error fetching product:", error)
    return null
  }
}

export const createProduct = async (product: Omit<Product, "id" | "created_at">) => {
  try {
    const result = await sql`
      INSERT INTO products (name, description, price, category, stock, image_url, sizes, colors, featured)
      VALUES (${product.name}, ${product.description || null}, ${product.price}, ${product.category}, ${product.stock}, ${product.image_url || null}, ${JSON.stringify(product.sizes || [])}, ${JSON.stringify(product.colors || [])}, ${product.featured || false})
      RETURNING *
    `
    return result[0]
  } catch (error) {
    console.error("[v0] Error creating product:", error)
    throw error
  }
}

export const updateProduct = async (id: number | string, updates: Partial<Product>) => {
  try {
    const updatePairs: string[] = []

    if (updates.name !== undefined) updatePairs.push(`name = '${updates.name}'`)
    if (updates.description !== undefined)
      updatePairs.push(`description = ${updates.description ? `'${updates.description}'` : "NULL"}`)
    if (updates.price !== undefined) updatePairs.push(`price = ${updates.price}`)
    if (updates.category !== undefined) updatePairs.push(`category = '${updates.category}'`)
    if (updates.stock !== undefined) updatePairs.push(`stock = ${updates.stock}`)
    if (updates.image_url !== undefined)
      updatePairs.push(`image_url = ${updates.image_url ? `'${updates.image_url}'` : "NULL"}`)
    if (updates.sizes !== undefined) updatePairs.push(`sizes = '${JSON.stringify(updates.sizes)}'`)
    if (updates.colors !== undefined) updatePairs.push(`colors = '${JSON.stringify(updates.colors)}'`)
    if (updates.featured !== undefined) updatePairs.push(`featured = ${updates.featured}`)

    if (updatePairs.length === 0) {
      const product = await getProductById(id)
      return product
    }

    const result = await sql.query(
      `UPDATE products SET ${updatePairs.join(", ")}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
      [id],
    )
    return result[0]
  } catch (error) {
    console.error("[v0] Error updating product:", error)
    throw error
  }
}

export const deleteProduct = async (id: number | string) => {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`
    return true
  } catch (error) {
    console.error("[v0] Error deleting product:", error)
    throw error
  }
}

export const getProductsByCategory = async (category: string) => {
  try {
    const products = await sql`SELECT * FROM products WHERE category = ${category} ORDER BY created_at DESC`
    return products
  } catch (error) {
    console.error("[v0] Error fetching products by category:", error)
    return []
  }
}

export const getFeaturedProducts = async () => {
  try {
    const products = await sql`SELECT * FROM products WHERE featured = true ORDER BY created_at DESC`
    return products
  } catch (error) {
    console.error("[v0] Error fetching featured products:", error)
    return []
  }
}
