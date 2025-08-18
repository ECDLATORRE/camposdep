import { requireAuth, getNews } from "@/lib/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { DeleteNewsButton } from "./delete-button"

export default async function NewsManagement() {
  const session = await requireAuth()
  const news = await getNews()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Gestión de Noticias</h1>
              <p className="text-slate-600">Administra las noticias del sitio web</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/admin">
                <Button variant="outline">Volver al Panel</Button>
              </Link>
              <Link href="/admin/noticias/nueva">
                <Button className="bg-[#039b9e] hover:bg-[#028a8e]">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Noticia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant={item.status === "published" ? "default" : "secondary"}>
                        {item.status === "published" ? "Publicado" : "Borrador"}
                      </Badge>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">{item.excerpt}</p>

                    <div className="text-sm text-slate-500">
                      <p>Por: {item.author}</p>
                      <p>Publicado: {new Date(item.publishedAt).toLocaleDateString("es-ES")}</p>
                      {item.updatedAt !== item.publishedAt && (
                        <p>Actualizado: {new Date(item.updatedAt).toLocaleDateString("es-ES")}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Link href={`/noticias/${item.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/noticias/editar/${item.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteNewsButton newsId={item.id} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {news.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-slate-500 mb-4">No hay noticias creadas aún</p>
                <Link href="/admin/noticias/nueva">
                  <Button className="bg-[#039b9e] hover:bg-[#028a8e]">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Primera Noticia
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
