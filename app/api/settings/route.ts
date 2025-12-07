import { getAllSettings, getAllSettingsForAdmin, updateSetting } from "@/lib/settings-db"

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const isAdmin = url.searchParams.get("admin") === "true"

    if (isAdmin) {
      const settings = await getAllSettingsForAdmin()
      return Response.json(settings)
    } else {
      const settings = await getAllSettings()
      return Response.json(settings)
    }
  } catch (error) {
    console.error("[v0] Failed to fetch settings:", error)
    return Response.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { setting_key, setting_value } = await req.json()

    if (!setting_key || setting_value === undefined) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const success = await updateSetting(setting_key, setting_value)
    if (success) {
      return Response.json({ success: true })
    } else {
      return Response.json({ error: "Failed to update setting" }, { status: 500 })
    }
  } catch (error) {
    console.error("[v0] Failed to update settings:", error)
    return Response.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
