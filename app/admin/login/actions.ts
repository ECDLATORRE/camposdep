"use server"

import { authenticateUser, createSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  if (!username || !password) {
    return { error: "Usuario y contraseña son requeridos" }
  }

  const user = await authenticateUser(username, password)

  if (!user) {
    return { error: "Usuario o contraseña incorrectos" }
  }

  await createSession(user)
  redirect("/admin")
}
