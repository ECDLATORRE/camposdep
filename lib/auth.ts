import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export interface User {
  id: string
  username: string
  password: string
  role: "admin" | "editor"
  createdAt: string
}

export interface NewsItem {
  id: string
  title: string
  content: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  updatedAt: string
  status: "published" | "draft"
}

// Simple authentication utilities
export function hashPassword(password: string): string {
  // In a real app, use bcrypt or similar
  return Buffer.from(password).toString("base64")
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

// Mock user database
const users: User[] = [
  {
    id: "1",
    username: "AdminNicolas",
    password: hashPassword("latorre"), // latorre
    role: "admin",
    createdAt: new Date().toISOString(),
  },
]

// Mock news database
const news: NewsItem[] = [
  {
    id: "1",
    title: "Estudiantes beneficiarios del transporte escolar año 2023",
    content: `Estimada comunidad educativa, junto con saludarles y esperando se encuentren en perfectas condiciones, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.

Cabe destacar que el proceso de postulación se realizó hasta el día 30 de diciembre de 2022, por tanto el proceso de postulación se encuentra cerrado.

Por otra parte, comentarles que la definición y adjudicación de los cupos, se desarrolló a través de un proceso acucioso de análisis, respecto al puntaje obtenido por cada uno de los estudiantes en su proceso de postulación.

Los días 06 y 07 de marzo, tendrá lugar el reconocimiento de domicilios de la empresa de transporte adjudicada (Surtrans), lo que se realizará por parte de los conductores y asistentes de los furgones de acuerdo al recorrido existente en razón de los estudiantes favorecidos con el servicio.

Cualquier duda o consulta respecto del proceso y el comienzo del beneficio, por favor realizarla al correo: convivencia@camposdeportivos-temuco.cl`,
    excerpt:
      "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
    image: "/images/noticia-transporte.png",
    category: "estudiantes",
    author: "AdminNicolas",
    publishedAt: "2023-03-02T10:00:00Z",
    updatedAt: "2023-03-02T10:00:00Z",
    status: "published",
  },
  {
    id: "2",
    title: "Inicio de año escolar 2025",
    content:
      "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo a las 8:30 hrs.",
    excerpt: "Información importante para el inicio del nuevo año académico.",
    image: "/placeholder.svg?height=200&width=300",
    category: "estudiantes",
    author: "AdminNicolas",
    publishedAt: "2025-03-06T08:00:00Z",
    updatedAt: "2025-03-06T08:00:00Z",
    status: "published",
  },
  {
    id: "3",
    title: "Período de matrículas abiertas",
    content:
      "El proceso de matrícula para nuevos estudiantes estará abierto desde el 05 de marzo hasta el 30 de marzo.",
    excerpt: "Proceso de matrícula para nuevos estudiantes.",
    image: "/placeholder.svg?height=200&width=300",
    category: "apoderados",
    author: "AdminNicolas",
    publishedAt: "2025-03-05T09:00:00Z",
    updatedAt: "2025-03-05T09:00:00Z",
    status: "published",
  },
]

export async function login(username: string, password: string) {
  const user = users.find((u) => u.username === username && verifyPassword(password, u.password))

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
export async function getNews(): Promise<NewsItem[]> {
  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getAllNews(): Promise<NewsItem[]> {
  return getNews()
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  return news.find((n) => n.id === id) || null
}

export async function createNews(data: Omit<NewsItem, "id" | "updatedAt">): Promise<NewsItem> {
  const newNews: NewsItem = {
    ...data,
    id: Date.now().toString(),
    updatedAt: new Date().toISOString(),
  }
  news.push(newNews)
  return newNews
}

export async function updateNews(id: string, data: Partial<NewsItem>): Promise<NewsItem | null> {
  const index = news.findIndex((n) => n.id === id)
  if (index !== -1) {
    news[index] = { ...news[index], ...data, updatedAt: new Date().toISOString() }
    return news[index]
  }
  return null
}

export async function deleteNews(id: string): Promise<boolean> {
  const index = news.findIndex((n) => n.id === id)
  if (index !== -1) {
    news.splice(index, 1)
    return true
  }
  return false
}

// Funciones para manejar usuarios
export async function getAllUsers(): Promise<Omit<User, "password">[]> {
  return users.map((u) => ({ id: u.id, username: u.username, role: u.role, createdAt: u.createdAt }))
}

export async function createUser(data: Omit<User, "id" | "createdAt">): Promise<Omit<User, "password">> {
  const newUser: User = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  users.push(newUser)
  return { id: newUser.id, username: newUser.username, role: newUser.role, createdAt: newUser.createdAt }
}

export async function deleteUser(id: string): Promise<boolean> {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1 && users[index].username !== "AdminNicolas") {
    users.splice(index, 1)
    return true
  }
  return false
}

export function findUser(username: string): User | undefined {
  return users.find((user) => user.username === username)
}
