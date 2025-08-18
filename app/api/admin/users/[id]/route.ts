import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, deleteUser } from "@/lib/auth"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth()

    if (session.role !== "admin") {
      return NextResponse.json({ error: "No tienes permisos para eliminar usuarios" }, { status: 403 })
    }

    const success = await deleteUser(params.id)

    if (!success) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
