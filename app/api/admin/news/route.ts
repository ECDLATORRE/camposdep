import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, createNews } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()
    const formData = await request.formData()

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const category = formData.get("category") as string
    const status = formData.get("status") as "published" | "draft"
    const image = (formData.get("image") as string) || "/placeholder.svg?height=200&width=300"

    if (!title || !content || !excerpt || !category) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const news = await createNews({
      title,
      content,
      excerpt,
      image,
      category,
      status,
      author: session.username,
      publishedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, news })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
