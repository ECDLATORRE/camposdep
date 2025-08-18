import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, LogOut } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  await requireAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Panel de Administración</h1>
              <p className="text-slate-600">Gestiona el contenido de la escuela</p>
            </div>
            <Link href="/admin/logout">
              <Button variant="outline">
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#039b9e]" />
                Gestión de Noticias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Crear, editar y eliminar noticias de la escuela</p>
              <Link href="/admin/noticias">
                <Button className="bg-[#039b9e] hover:bg-[#028a8e]">Administrar Noticias</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-[#039b9e]" />
                Gestión de Usuarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">Administrar usuarios del sistema</p>
              <Link href="/admin/usuarios">
                <Button className="bg-[#039b9e] hover:bg-[#028a8e]">Administrar Usuarios</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Accesos Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Link href="/admin/noticias/nueva">
                  <Button variant="outline">Nueva Noticia</Button>
                </Link>
                <Link href="/admin/usuarios/nuevo">
                  <Button variant="outline">Nuevo Usuario</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Ver Sitio Web</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
