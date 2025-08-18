import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, deleteGalleryImage, updateGalleryImage } from "@/lib/auth"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()

    const success = await deleteGalleryImage(params.id)

    if (!success) {
      return NextResponse.json({ error: "Imagen no encontrada" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth()
    const body = await request.json()

    const image = await updateGalleryImage(params.id, body)

    if (!image) {
      return NextResponse.json({ error: "Imagen no encontrada" }, { status: 404 })
    }

    return NextResponse.json({ success: true, image })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
