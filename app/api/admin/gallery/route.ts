import { type NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth"
import { getDirectoryContents, saveUploadedFile, createDirectory } from "@/lib/file-manager"

export async function GET(request: NextRequest) {
  try {
    await requireAuth()

    const { searchParams } = new URL(request.url)
    const path = searchParams.get("path") || ""

    const files = await getDirectoryContents(path)
    return NextResponse.json({ files })
  } catch (error) {
    console.error("Error fetching files:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()
    const formData = await request.formData()

    const action = formData.get("action") as string
    const path = (formData.get("path") as string) || ""

    if (action === "upload") {
      const file = formData.get("file") as File

      if (!file) {
        return NextResponse.json({ error: "No se proporcionó archivo" }, { status: 400 })
      }

      const savedPath = await saveUploadedFile(file, path)

      if (!savedPath) {
        return NextResponse.json({ error: "Error al guardar el archivo" }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "Archivo subido correctamente",
        path: savedPath,
      })
    }

    if (action === "create-folder") {
      const name = formData.get("name") as string

      if (!name) {
        return NextResponse.json({ error: "Nombre de carpeta requerido" }, { status: 400 })
      }

      const success = await createDirectory(path, name)

      if (!success) {
        return NextResponse.json({ error: "Error al crear la carpeta" }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "Carpeta creada correctamente",
      })
    }

    return NextResponse.json({ error: "Acción no válida" }, { status: 400 })
  } catch (error) {
    console.error("Error in POST:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
