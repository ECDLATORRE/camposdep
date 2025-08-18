"use server"

import { requireAuth, createUser, deleteUser } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createUserAction(formData: FormData) {
  const session = await requireAuth()

  if (session.role !== "admin") {
    return { error: "No tienes permisos para crear usuarios" }
  }

  const username = formData.get("username") as string
  const password = formData.get("password") as string
  const role = formData.get("role") as "admin" | "editor"

  if (!username || !password || !role) {
    return { error: "Todos los campos son requeridos" }
  }

  if (username.length < 3) {
    return { error: "El usuario debe tener al menos 3 caracteres" }
  }

  if (password.length < 6) {
    return { error: "La contraseña debe tener al menos 6 caracteres" }
  }

  try {
    await createUser({ username, password, role })
    revalidatePath("/admin/usuarios")
    redirect("/admin/usuarios")
  } catch (error) {
    return { error: "Error al crear el usuario" }
  }
}

export async function deleteUserAction(userId: string) {
  const session = await requireAuth()

  if (session.role !== "admin") {
    return { error: "No tienes permisos para eliminar usuarios" }
  }

  await deleteUser(userId)
  revalidatePath("/admin/usuarios")
}
