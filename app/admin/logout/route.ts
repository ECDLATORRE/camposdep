import { type NextRequest, NextResponse } from "next/server"
import { logout } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    console.log("Logout route called")
    await logout()
    console.log("Logout successful, redirecting to login")

    // Crear respuesta de redirección
    const response = NextResponse.redirect(new URL("/admin/login", request.url))

    // Eliminar cookies manualmente también
    response.cookies.delete("session")
    response.cookies.delete("admin-session")

    return response
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }
}
