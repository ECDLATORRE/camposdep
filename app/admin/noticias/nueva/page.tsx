import { requireAuth } from "@/lib/auth"
import { NewsForm } from "../news-form"

export default async function NewNewsPage() {
  const session = await requireAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-800">Nueva Noticia</h1>
          <p className="text-slate-600">Crear una nueva noticia para el sitio web</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <NewsForm />
      </div>
    </div>
  )
}
