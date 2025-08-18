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

// Usuarios iniciales (en producción esto estaría en una base de datos)
const initialUsers: User[] = [
  {
    id: "1",
    username: "AdminNicolas",
    password: "latorre", // En producción esto estaría hasheado
    role: "admin",
    createdAt: new Date().toISOString(),
  },
]

// Noticias iniciales
const initialNews: NewsItem[] = [
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

// Simulamos almacenamiento en memoria (en producción usaríamos una base de datos)
const users = [...initialUsers]
const news = [...initialNews]

export async function authenticateUser(username: string, password: string): Promise<User | null> {
  const user = users.find((u) => u.username === username && u.password === password)
  return user || null
}

export async function createSession(user: User) {
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
}

export async function getSession() {
  const cookieStore = cookies()
  const session = cookieStore.get("admin-session")

  if (!session) return null

  try {
    return JSON.parse(session.value)
  } catch {
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    redirect("/admin/login")
  }
  return session
}

export async function logout() {
  const cookieStore = cookies()
  cookieStore.delete("admin-session")
}

// Funciones para gestionar usuarios
export async function getUsers(): Promise<User[]> {
  return users
}

export async function createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  users.push(newUser)
  return newUser
}

export async function deleteUser(userId: string): Promise<boolean> {
  const index = users.findIndex((u) => u.id === userId)
  if (index > -1) {
    users.splice(index, 1)
    return true
  }
  return false
}

// Funciones para gestionar noticias
export async function getNews(): Promise<NewsItem[]> {
  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  return news.find((n) => n.id === id) || null
}

export async function createNews(newsData: Omit<NewsItem, "id" | "createdAt" | "updatedAt">): Promise<NewsItem> {
  const newNews: NewsItem = {
    ...newsData,
    id: Date.now().toString(),
    updatedAt: new Date().toISOString(),
  }
  news.push(newNews)
  return newNews
}

export async function updateNews(id: string, newsData: Partial<NewsItem>): Promise<NewsItem | null> {
  const index = news.findIndex((n) => n.id === id)
  if (index > -1) {
    news[index] = {
      ...news[index],
      ...newsData,
      updatedAt: new Date().toISOString(),
    }
    return news[index]
  }
  return null
}

export async function deleteNews(id: string): Promise<boolean> {
  const index = news.findIndex((n) => n.id === id)
  if (index > -1) {
    news.splice(index, 1)
    return true
  }
  return false
}

export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
  return news
    .filter((n) => n.category === category && n.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
