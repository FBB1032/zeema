import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export interface WebsiteSetting {
  id: number
  setting_key: string
  setting_value: string
  description?: string
  created_at: string
  updated_at: string
}

export async function getAllSettings(): Promise<Record<string, string>> {
  try {
    const settings = await sql`SELECT setting_key, setting_value FROM website_settings`
    const settingsMap: Record<string, string> = {}
    settings.forEach((setting: any) => {
      settingsMap[setting.setting_key] = setting.setting_value
    })
    return settingsMap
  } catch (error) {
    console.error("[v0] Failed to fetch settings:", error)
    return {}
  }
}

export async function getSetting(key: string): Promise<string | null> {
  try {
    const result = await sql`SELECT setting_value FROM website_settings WHERE setting_key = ${key}`
    return result.length > 0 ? result[0].setting_value : null
  } catch (error) {
    console.error("[v0] Failed to fetch setting:", error)
    return null
  }
}

export async function updateSetting(key: string, value: string): Promise<boolean> {
  try {
    await sql`
      UPDATE website_settings 
      SET setting_value = ${value}, updated_at = CURRENT_TIMESTAMP 
      WHERE setting_key = ${key}
    `
    return true
  } catch (error) {
    console.error("[v0] Failed to update setting:", error)
    return false
  }
}

export async function getAllSettingsForAdmin(): Promise<WebsiteSetting[]> {
  try {
    const settings = await sql`
      SELECT id, setting_key, setting_value, description, created_at, updated_at 
      FROM website_settings 
      ORDER BY setting_key ASC
    `
    return settings as WebsiteSetting[]
  } catch (error) {
    console.error("[v0] Failed to fetch settings for admin:", error)
    return []
  }
}
