import { type NextRequest, NextResponse } from "next/server"
import { requireAuth, createUser } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()

    if (session.role !== "admin") {
      return NextResponse.json({ error: "No tienes permisos para crear usuarios" }, { status: 403 })
    }

    const formData = await request.formData()
    const username = formData.get("username") as string
    const password = formData.get("password") as string
    const role = formData.get("role") as "admin" | "editor"

    if (!username || !password || !role) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    if (username.length < 3) {
      return NextResponse.json({ error: "El usuario debe tener al menos 3 caracteres" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 })
    }

    const user = await createUser({ username, password, role })

    return NextResponse.json({ success: true, user })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
