import { requireAuth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, Users, BarChart3, Settings } from "lucide-react"
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
            <form action="/admin/logout" method="post">
              <Button variant="outline" type="submit">
                Cerrar Sesión
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/noticias">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Gestionar Noticias</CardTitle>
                <Newspaper className="h-6 w-6 text-[#039b9e] ml-auto" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Crear, editar y eliminar noticias del sitio web</p>
              </CardContent>
            </Card>
          </Link>

          {session.role === "admin" && (
            <Link href="/admin/usuarios">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Gestionar Usuarios</CardTitle>
                  <Users className="h-6 w-6 text-[#039b9e] ml-auto" />
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Crear y administrar usuarios del sistema</p>
                </CardContent>
              </Card>
            </Link>
          )}

          <Card className="hover:shadow-lg transition-shadow cursor-pointer opacity-50">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Estadísticas</CardTitle>
              <BarChart3 className="h-6 w-6 text-[#039b9e] ml-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Ver estadísticas del sitio web (Próximamente)</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer opacity-50">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Configuración</CardTitle>
              <Settings className="h-6 w-6 text-[#039b9e] ml-auto" />
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Configuración general del sistema (Próximamente)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
