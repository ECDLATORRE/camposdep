import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth"
import { getGalleryFiles } from "@/lib/gallery"

export async function GET(request: NextRequest) {
  try {
    await requireAuth()
    const files = await getGalleryFiles()
    return NextResponse.json({ success: true, files })
  } catch (error) {
    console.error("Error getting gallery files:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
