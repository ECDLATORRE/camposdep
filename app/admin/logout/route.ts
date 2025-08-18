import { logout } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function GET() {
  await logout()
  return NextResponse.redirect(new URL("/admin/login", "http://localhost:3000"))
}

export async function POST() {
  await logout()
  return NextResponse.redirect(new URL("/admin/login", "http://localhost:3000"))
}
