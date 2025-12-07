import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function initializeDatabase() {
  try {
    // Check if tables exist
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'admin_users'
      )
    `

    if (!result[0].exists) {
      console.log("[v0] Creating database tables...")
      // Tables will be created via migration script
    }
  } catch (error) {
    console.error("[v0] Database initialization error:", error)
  }
}

export { sql }
