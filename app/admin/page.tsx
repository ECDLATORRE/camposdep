import { requireAuth, getAllNews, getUsers } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, LogOut, Plus, Images, BarChart3, Calendar, Bell } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const session = await requireAuth()
  const news = await getAllNews()
  const users = await getUsers()

  const stats = {
    totalNews: news.length,
    publishedNews: news.filter((n) => n.status === "published").length,
    draftNews: news.filter((n) => n.status === "draft").length,
    totalUsers: users.length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Panel de Administración</h1>
              <p className="text-slate-600">Bienvenido, {session.username}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={session.role === "admin" ? "default" : "secondary"}>
                {session.role === "admin" ? "Administrador" : "Editor"}
              </Badge>
              <Link href="/admin/logout">
                <Button variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Noticias</p>
                  <p className="text-3xl font-bold">{stats.totalNews}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Publicadas</p>
                  <p className="text-3xl font-bold">{stats.publishedNews}</p>
                </div>
                <Bell className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 text-sm font-medium">Borradores</p>
                  <p className="text-3xl font-bold">{stats.draftNews}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Usuarios</p>
                  <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin/noticias">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-2 text-[#039b9e]" />
                  Gestionar Noticias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">Crear, editar y administrar las noticias del sitio web</p>
                <div className="flex space-x-2">
                  <Link href="/admin/noticias/nueva">
                    <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e]">
                      <Plus className="h-4 w-4 mr-1" />
                      Nueva
                    </Button>
                  </Link>
                  <Link href="/admin/noticias">
                    <Button size="sm" variant="outline">
                      Ver todas
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin/galeria">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Images className="h-5 w-5 mr-2 text-[#039b9e]" />
                  Galería de Archivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">Administrar imágenes y archivos multimedia</p>
                <Link href="/admin/galeria">
                  <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e]">
                    <Images className="h-4 w-4 mr-1" />
                    Abrir Galería
                  </Button>
                </Link>
              </CardContent>
            </Link>
          </Card>

          {session.role === "admin" && (
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/admin/usuarios">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Users className="h-5 w-5 mr-2 text-[#039b9e]" />
                    Gestionar Usuarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4">Administrar usuarios y permisos del sistema</p>
                  <div className="flex space-x-2">
                    <Link href="/admin/usuarios/nuevo">
                      <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e]">
                        <Plus className="h-4 w-4 mr-1" />
                        Nuevo
                      </Button>
                    </Link>
                    <Link href="/admin/usuarios">
                      <Button size="sm" variant="outline">
                        Ver todos
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Link>
            </Card>
          )}
        </div>

        {/* Recent News */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Noticias Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">
                      {new Date(item.publishedAt).toLocaleDateString("es-ES")} • {item.author}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={item.status === "published" ? "default" : "secondary"}>
                      {item.status === "published" ? "Publicada" : "Borrador"}
                    </Badge>
                    <Link href={`/admin/noticias/editar/${item.id}`}>
                      <Button size="sm" variant="outline">
                        Editar
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
