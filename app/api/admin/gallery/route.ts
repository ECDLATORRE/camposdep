import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, getGalleryImages, addGalleryImage } from "@/lib/auth"

export async function GET() {
  try {
    await requireAuth()
    const images = await getGalleryImages()
    return NextResponse.json({ images })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()
    const formData = await request.formData()

    const file = formData.get("file") as File
    const alt = formData.get("alt") as string
    const category = formData.get("category") as string

    if (!file || !alt || !category) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // En un entorno real, aquí subirías el archivo a un servicio de almacenamiento
    // Por ahora, simulamos la subida
    const filename = `${Date.now()}-${file.name}`
    const url = `/uploads/${filename}`

    const image = await addGalleryImage({
      filename,
      originalName: file.name,
      url,
      alt,
      category,
      uploadedBy: session.username,
      size: file.size,
      mimeType: file.type,
    })

    return NextResponse.json({ success: true, image })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
