"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getAdminFromSession, clearAdminSession } from "@/lib/admin-auth"
import { LogOut, Save } from "lucide-react"

interface WebsiteSetting {
  id: number
  setting_key: string
  setting_value: string
  description?: string
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    const adminSession = getAdminFromSession()
    if (!adminSession) {
      router.push("/admin/login")
      return
    }

    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/settings?admin=true")
        const data = await response.json()
        const settingsMap: Record<string, string> = {}
        data.forEach((setting: WebsiteSetting) => {
          settingsMap[setting.setting_key] = setting.setting_value
        })
        setSettings(settingsMap)
      } catch (error) {
        console.error("[v0] Failed to fetch settings:", error)
      }
      setLoading(false)
    }

    fetchSettings()
  }, [router])

  const handleSetting = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      for (const [key, value] of Object.entries(settings)) {
        await fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ setting_key: key, setting_value: value }),
        })
      }
      setSuccessMessage("Settings saved successfully!")
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("[v0] Failed to save settings:", error)
    }
    setSaving(false)
  }

  const handleLogout = () => {
    clearAdminSession()
    router.push("/admin/login")
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
            <h1 className="font-playfair text-2xl font-bold text-primary">Website Settings</h1>
            <p className="text-muted-foreground text-sm">Manage store configuration and content</p>
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {successMessage && (
          <div className="mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400">
            {successMessage}
          </div>
        )}

        <div className="space-y-8">
          {/* Store Information */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">Store Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Store Name</label>
                <input
                  type="text"
                  value={settings["store_name"] || ""}
                  onChange={(e) => handleSetting("store_name", e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Store Tagline</label>
                <input
                  type="text"
                  value={settings["store_tagline"] || ""}
                  onChange={(e) => handleSetting("store_tagline", e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  value={settings["whatsapp_number"] || ""}
                  onChange={(e) => handleSetting("whatsapp_number", e.target.value)}
                  placeholder="e.g., +234901234567"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">Include country code without spaces</p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">About Us Page</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Introduction</label>
                <textarea
                  value={settings["about_intro"] || ""}
                  onChange={(e) => handleSetting("about_intro", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Our Story</label>
                <textarea
                  value={settings["about_story"] || ""}
                  onChange={(e) => handleSetting("about_story", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Mission Statement</label>
                <textarea
                  value={settings["about_mission"] || ""}
                  onChange={(e) => handleSetting("about_mission", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Social Media Links */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">Social Media Links</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Instagram</label>
                <input
                  type="url"
                  value={settings["instagram_link"] || ""}
                  onChange={(e) => handleSetting("instagram_link", e.target.value)}
                  placeholder="https://instagram.com/yourhandle"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Facebook</label>
                <input
                  type="url"
                  value={settings["facebook_link"] || ""}
                  onChange={(e) => handleSetting("facebook_link", e.target.value)}
                  placeholder="https://facebook.com/yourpage"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Twitter</label>
                <input
                  type="url"
                  value={settings["twitter_link"] || ""}
                  onChange={(e) => handleSetting("twitter_link", e.target.value)}
                  placeholder="https://twitter.com/yourhandle"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">Footer</h2>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Copyright Text</label>
              <input
                type="text"
                value={settings["copyright_text"] || ""}
                onChange={(e) => handleSetting("copyright_text", e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
            </div>
          </section>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-semibold"
            >
              <Save size={20} />
              {saving ? "Saving..." : "Save All Settings"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
