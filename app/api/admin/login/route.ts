import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createHash } from "crypto"

// Secure hash function using SHA-256 with salt
function hashPassword(password: string): string {
  const salt = "escuela-campos-deportivos-salt-2025"
  return createHash("sha256")
    .update(password + salt)
    .digest("hex")
}

function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

// User database with hashed passwords
const users = [
  {
    id: "1",
    username: "AdminNicolas",
    password: hashPassword("latorre"), // SHA-256 hash - NO se puede revertir
    role: "admin",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: "Usuario y contraseña son requeridos" }, { status: 400 })
    }

    const user = users.find((u) => u.username === username && verifyPassword(password, u.password))

    if (!user) {
      return NextResponse.json({ error: "Usuario o contraseña incorrectos" }, { status: 401 })
    }

    // Set secure cookie
    const cookieStore = cookies()
    cookieStore.set(
      "admin-session",
      JSON.stringify({
        userId: user.id,
        username: user.username,
        role: user.role,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      },
    )

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
