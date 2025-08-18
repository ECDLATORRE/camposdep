import { requireAuth, getNewsById } from "@/lib/auth"
import { NewsForm } from "../../news-form"
import { notFound } from "next/navigation"

interface EditNewsPageProps {
  params: {
    id: string
  }
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
  const session = await requireAuth()
  const news = await getNewsById(params.id)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-800">Editar Noticia</h1>
          <p className="text-slate-600">Modificar la noticia existente</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <NewsForm news={news} />
      </div>
    </div>
  )
}
