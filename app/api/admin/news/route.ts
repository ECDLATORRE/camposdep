import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, createNews } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    console.log("Creating news - starting...")
    const session = await requireAuth()
    console.log("Session verified:", session.username)

    const formData = await request.formData()
    console.log("Form data received")

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const category = formData.get("category") as string
    const status = formData.get("status") as "published" | "draft"
    const image = (formData.get("image") as string) || "/placeholder.svg?height=200&width=300"

    console.log("Extracted data:", { title, content: content?.substring(0, 50), excerpt, category, status, image })

    if (!title || !content || !excerpt || !category) {
      console.log("Missing required fields")
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const newsData = {
      title,
      content,
      excerpt,
      image,
      category,
      status,
      author: session.username,
      publishedAt: new Date().toISOString(),
    }

    console.log("Creating news with data:", newsData)
    const news = await createNews(newsData)
    console.log("News created successfully:", news.id)

    return NextResponse.json({ success: true, news })
  } catch (error) {
    console.error("Error creating news:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
