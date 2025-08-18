import { NextResponse } from "next/server"

export async function GET() {
  const response = NextResponse.redirect(
    new URL("/admin/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  )

  // Clear the auth cookie
  response.cookies.set("admin-auth", "", {
    expires: new Date(0),
    path: "/",
  })

  return response
}

export async function POST() {
  const response = NextResponse.redirect(
    new URL("/admin/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  )

  // Clear the auth cookie
  response.cookies.set("admin-auth", "", {
    expires: new Date(0),
    path: "/",
  })

  return response
}
