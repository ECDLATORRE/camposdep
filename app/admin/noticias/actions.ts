"use server"

import { requireAuth, createNews, updateNews, deleteNews } from "@/lib/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createNewsAction(formData: FormData) {
  const session = await requireAuth()

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string
  const category = formData.get("category") as string
  const status = formData.get("status") as "published" | "draft"
  const image = (formData.get("image") as string) || "/placeholder.svg?height=200&width=300"

  if (!title || !content || !excerpt || !category) {
    return { error: "Todos los campos son requeridos" }
  }

  await createNews({
    title,
    content,
    excerpt,
    image,
    category,
    status,
    author: session.username,
    publishedAt: new Date().toISOString(),
  })

  revalidatePath("/admin/noticias")
  revalidatePath("/noticias")
  redirect("/admin/noticias")
}

export async function updateNewsAction(id: string, formData: FormData) {
  await requireAuth()

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string
  const category = formData.get("category") as string
  const status = formData.get("status") as "published" | "draft"
  const image = formData.get("image") as string

  if (!title || !content || !excerpt || !category) {
    return { error: "Todos los campos son requeridos" }
  }

  await updateNews(id, {
    title,
    content,
    excerpt,
    image,
    category,
    status,
  })

  revalidatePath("/admin/noticias")
  revalidatePath("/noticias")
  redirect("/admin/noticias")
}

export async function deleteNewsAction(id: string) {
  await requireAuth()

  await deleteNews(id)

  revalidatePath("/admin/noticias")
  revalidatePath("/noticias")
}
