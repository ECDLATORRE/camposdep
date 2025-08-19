import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, LogOut, BarChart3, Calendar, Settings } from "lucide-react"
import Link from "next/link"

async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin-session")

  console.log("Checking session:", session) // Debug

  if (!session) {
    console.log("No session found") // Debug
    return null
  }

  try {
    const parsed = JSON.parse(session.value)
    console.log("Session parsed:", parsed) // Debug
    return parsed
  } catch (error) {
    console.log("Session parse error:", error) // Debug
    return null
  }
}

export default async function AdminDashboard() {
  const session = await getSession()

  if (!session) {
    console.log("Redirecting to login") // Debug
    redirect("/admin/login")
  }

  console.log("Rendering dashboard for user:", session.username) // Debug

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#039b9e] to-[#028a8e] rounded-lg flex items-center justify-center mr-3">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Panel de Administración</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Bienvenido, {session.username}</span>
              <Link href="/admin/logout">
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
            <p className="text-gray-600">Gestiona el contenido y usuarios de la Escuela Campos Deportivos</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Noticias</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#039b9e]">12</div>
                <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#039b9e]">3</div>
                <p className="text-xs text-muted-foreground">Administradores y editores</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visitas del Mes</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#039b9e]">1,234</div>
                <p className="text-xs text-muted-foreground">+15% desde el mes pasado</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-[#039b9e]" />
                  Gestionar Noticias
                </CardTitle>
                <CardDescription>Crear, editar y eliminar noticias del sitio web</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/admin/noticias">
                    <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Ver Todas las Noticias</Button>
                  </Link>
                  <Link href="/admin/noticias/nueva">
                    <Button variant="outline" className="w-full bg-transparent">
                      Crear Nueva Noticia
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#039b9e]" />
                  Gestionar Usuarios
                </CardTitle>
                <CardDescription>Administrar usuarios y permisos del sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/admin/usuarios">
                    <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Ver Todos los Usuarios</Button>
                  </Link>
                  <Link href="/admin/usuarios/nuevo">
                    <Button variant="outline" className="w-full bg-transparent">
                      Crear Nuevo Usuario
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#039b9e]" />
                  Actividades Recientes
                </CardTitle>
                <CardDescription>Últimas acciones realizadas en el sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Noticia creada hace 2 horas</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Usuario editado hace 1 día</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">Imagen subida hace 3 días</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
