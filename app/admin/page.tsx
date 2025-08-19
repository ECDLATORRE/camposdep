import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, LogOut, Settings } from "lucide-react"
import Link from "next/link"

async function getSession() {
  const cookieStore = cookies()
  const session = cookieStore.get("admin-session")

  if (!session) return null

  try {
    return JSON.parse(session.value)
  } catch {
    return null
  }
}

export default async function AdminDashboard() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Panel de Administración</h1>
            <p className="text-slate-600 mt-2">Bienvenido, {session.username}</p>
          </div>
          <form action="/admin/logout" method="POST">
            <Button variant="outline" type="submit" className="flex items-center gap-2 bg-transparent">
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </form>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gestión de Noticias */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#039b9e]">
                <FileText className="h-5 w-5" />
                Gestión de Noticias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Crear, editar y eliminar noticias del sitio web</p>
              <div className="space-y-2">
                <Link href="/admin/noticias">
                  <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Ver Noticias</Button>
                </Link>
                <Link href="/admin/noticias/nueva">
                  <Button variant="outline" className="w-full bg-transparent">
                    Nueva Noticia
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Gestión de Usuarios */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#039b9e]">
                <Users className="h-5 w-5" />
                Gestión de Usuarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Administrar usuarios del panel de control</p>
              <div className="space-y-2">
                <Link href="/admin/usuarios">
                  <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Ver Usuarios</Button>
                </Link>
                <Link href="/admin/usuarios/nuevo">
                  <Button variant="outline" className="w-full bg-transparent">
                    Nuevo Usuario
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Configuración */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#039b9e]">
                <Settings className="h-5 w-5" />
                Configuración
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Configuración general del sitio web</p>
              <Button variant="outline" className="w-full bg-transparent" disabled>
                Próximamente
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-[#039b9e]">3</div>
              <div className="text-slate-600">Noticias Publicadas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-[#039b9e]">1</div>
              <div className="text-slate-600">Usuarios Activos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-[#039b9e]">500+</div>
              <div className="text-slate-600">Estudiantes</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
