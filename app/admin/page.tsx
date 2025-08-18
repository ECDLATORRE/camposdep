import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, ImageIcon, LogOut } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const session = await requireAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Panel de Administración</h1>
              <p className="text-slate-600">Bienvenido, {session.username}</p>
            </div>
            <form action="/admin/logout" method="POST">
              <Button type="submit" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-[#039b9e]">
                <FileText className="h-5 w-5 mr-2" />
                Gestión de Noticias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Crear, editar y eliminar noticias del sitio web.</p>
              <Link href="/admin/noticias">
                <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Administrar Noticias</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-[#039b9e]">
                <ImageIcon className="h-5 w-5 mr-2" />
                Gestión de Galería
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Administrar archivos e imágenes del sitio web.</p>
              <Link href="/admin/galeria">
                <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Administrar Galería</Button>
              </Link>
            </CardContent>
          </Card>

          {session.role === "admin" && (
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-[#039b9e]">
                  <Users className="h-5 w-5 mr-2" />
                  Gestión de Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Crear y administrar usuarios del sistema.</p>
                <Link href="/admin/usuarios">
                  <Button className="w-full bg-[#039b9e] hover:bg-[#028a8e]">Administrar Usuarios</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#039b9e]">12</div>
                  <div className="text-slate-600">Noticias Publicadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#039b9e]">45</div>
                  <div className="text-slate-600">Archivos en Galería</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#039b9e]">3</div>
                  <div className="text-slate-600">Usuarios Activos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
