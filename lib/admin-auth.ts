"use server"

import { neon } from "@neondatabase/serverless"
import { hash, compare } from "bcryptjs"

const ADMIN_EMAIL = "admin@zeemastore.com"
const ADMIN_PASSWORD = "S!lkyRoseGold_2025#Boutique"

// Create SQL connection only on server
const getSQL = () => {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set")
  }
  return neon(connectionString)
}

export const initializeAdminUser = async () => {
  try {
    const hashedPassword = await hash(ADMIN_PASSWORD, 10)
    const sql = getSQL()

    // Check if admin user exists
    const existing = await sql`
      SELECT id FROM admin_users WHERE email = ${ADMIN_EMAIL}
    `

    if (existing.length === 0) {
      // Create admin user
      await sql`
        INSERT INTO admin_users (email, password, role)
        VALUES (${ADMIN_EMAIL}, ${hashedPassword}, 'admin')
        ON CONFLICT (email) DO NOTHING
      `
    }
  } catch (error) {
    console.error("[v0] Failed to initialize admin user:", error)
  }
}

export const validateAdminCredentials = async (email: string, password: string): Promise<boolean> => {
  try {
    const sql = getSQL()

    const result = await sql`
      SELECT password FROM admin_users WHERE email = ${email}
    `

    if (result.length === 0) return false

    const isValid = await compare(password, result[0].password as string)
    return isValid
  } catch (error) {
    console.error("[v0] Admin validation error:", error)
    return false
  }
}

export const generateAdminToken = (): string => {
  return Buffer.from(`${Date.now()}:zeema-admin`).toString("base64")
}

export const getAdminFromSession = (): string | null => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("adminSession")
  }
  return null
}

export const setAdminSession = (token: string): void => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("adminSession", token)
  }
}

export const clearAdminSession = (): void => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("adminSession")
  }
}
