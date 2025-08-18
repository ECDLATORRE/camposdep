import { requireAuth, getUsers } from "@/lib/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import Link from "next/link"
import { DeleteUserButton } from "./delete-button"

export default async function UsersManagement() {
  const session = await requireAuth()

  if (session.role !== "admin") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Acceso Denegado</h1>
            <p className="text-slate-600">Solo los administradores pueden gestionar usuarios.</p>
            <Link href="/admin">
              <Button className="mt-4">Volver al Panel</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const users = await getUsers()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Gestión de Usuarios</h1>
              <p className="text-slate-600">Administra los usuarios del sistema</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/admin">
                <Button variant="outline">Volver al Panel</Button>
              </Link>
              <Link href="/admin/usuarios/nuevo">
                <Button className="bg-[#039b9e] hover:bg-[#028a8e]">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Usuario
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4">
          {users.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-800">{user.username}</h3>
                      <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                        {user.role === "admin" ? "Administrador" : "Editor"}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500">
                      Creado: {new Date(user.createdAt).toLocaleDateString("es-ES")}
                    </p>
                  </div>

                  {user.username !== "AdminNicolas" && <DeleteUserButton userId={user.id} />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
