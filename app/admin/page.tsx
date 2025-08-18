import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, LogOut } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin-auth")

  if (!authCookie || authCookie.value !== "authenticated") {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="text-gray-600 mt-2">Gestiona el contenido de la escuela</p>
          </div>
          <Link href="/admin/logout">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* News Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Gestión de Noticias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Administra las noticias y anuncios de la escuela</p>
              <div className="space-y-2">
                <Link href="/admin/noticias">
                  <Button className="w-full">Ver Noticias</Button>
                </Link>
                <Link href="/admin/noticias/nueva">
                  <Button variant="outline" className="w-full bg-transparent">
                    Nueva Noticia
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Gestión de Usuarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Administra los usuarios del sistema</p>
              <div className="space-y-2">
                <Link href="/admin/usuarios">
                  <Button className="w-full">Ver Usuarios</Button>
                </Link>
                <Link href="/admin/usuarios/nuevo">
                  <Button variant="outline" className="w-full bg-transparent">
                    Nuevo Usuario
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-gray-600">Noticias Publicadas</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">3</div>
              <p className="text-gray-600">Usuarios Activos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <p className="text-gray-600">Estudiantes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
