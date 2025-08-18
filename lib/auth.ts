import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Simulamos una base de datos simple con archivos JSON
const users = [
  {
    id: "1",
    username: "AdminNicolas",
    password: "latorre", // En producción, esto debería estar hasheado
    role: "admin",
  },
]

const news = [
  {
    id: "1",
    title: "Transporte Escolar 2023",
    content:
      "Información importante sobre el transporte escolar para el año 2023. Los horarios y rutas han sido actualizados.",
    imageUrl: "/images/noticia-transporte.png",
    date: "2023-12-15",
    slug: "transporte-escolar-2023",
  },
]

export async function login(username: string, password: string) {
  const user = users.find((u) => u.username === username && u.password === password)

  if (user) {
    const cookieStore = cookies()
    cookieStore.set("session", JSON.stringify({ userId: user.id, username: user.username }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    })
    return { success: true, user: { id: user.id, username: user.username } }
  }

  return { success: false, error: "Credenciales inválidas" }
}

export async function logout() {
  const cookieStore = cookies()
  cookieStore.delete("session")
}

export async function getSession() {
  const cookieStore = cookies()
  const session = cookieStore.get("session")

  if (session) {
    try {
      return JSON.parse(session.value)
    } catch {
      return null
    }
  }

  return null
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session
}

// Funciones para manejar noticias
export async function getAllNews() {
  return news
}

export async function getNewsById(id: string) {
  return news.find((n) => n.id === id)
}

export async function createNews(data: any) {
  const newNews = {
    id: Date.now().toString(),
    ...data,
    slug: data.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""),
  }
  news.push(newNews)
  return newNews
}

export async function updateNews(id: string, data: any) {
  const index = news.findIndex((n) => n.id === id)
  if (index !== -1) {
    news[index] = { ...news[index], ...data }
    return news[index]
  }
  return null
}

export async function deleteNews(id: string) {
  const index = news.findIndex((n) => n.id === id)
  if (index !== -1) {
    news.splice(index, 1)
    return true
  }
  return false
}

// Funciones para manejar usuarios
export async function getAllUsers() {
  return users.map((u) => ({ id: u.id, username: u.username, role: u.role }))
}

export async function createUser(data: any) {
  const newUser = {
    id: Date.now().toString(),
    ...data,
  }
  users.push(newUser)
  return { id: newUser.id, username: newUser.username, role: newUser.role }
}

export async function deleteUser(id: string) {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1 && users[index].username !== "AdminNicolas") {
    users.splice(index, 1)
    return true
  }
  return false
}
