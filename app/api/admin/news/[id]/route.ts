import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, updateNews, deleteNews } from "@/lib/auth"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()
    const formData = await request.formData()

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const category = formData.get("category") as string
    const status = formData.get("status") as "published" | "draft"
    const image = formData.get("image") as string

    if (!title || !content || !excerpt || !category) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const news = await updateNews(params.id, {
      title,
      content,
      excerpt,
      image,
      category,
      status,
    })

    if (!news) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 })
    }

    return NextResponse.json({ success: true, news })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()

    const success = await deleteNews(params.id)

    if (!success) {
      return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
