import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth"
import { deleteFile } from "@/lib/file-manager"

export async function POST(request: NextRequest) {
  try {
    await requireAuth()

    const { path } = await request.json()

    if (!path) {
      return NextResponse.json({ error: "Ruta del archivo requerida" }, { status: 400 })
    }

    const success = await deleteFile(path)

    if (!success) {
      return NextResponse.json({ error: "Error al eliminar el archivo" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Archivo eliminado correctamente",
    })
  } catch (error) {
    console.error("Error deleting file:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
