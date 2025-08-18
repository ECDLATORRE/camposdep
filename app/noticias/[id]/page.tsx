import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import { getNewsById, getNews } from "@/lib/auth"
import { notFound } from "next/navigation"

interface NewsPageProps {
  params: {
    id: string
  }
}

export default async function NewsPage({ params }: NewsPageProps) {
  const news = await getNewsById(params.id)

  if (!news || news.status !== "published") {
    notFound()
  }

  const allNews = await getNews()
  const relatedNews = allNews
    .filter((item) => item.id !== news.id && item.status === "published" && item.category === news.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {/* Back Button */}
                <Link
                  href="/noticias"
                  className="inline-flex items-center text-[#039b9e] hover:text-[#028a8e] mb-6 transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Noticias
                </Link>

                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#039b9e] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {new Date(news.publishedAt).toLocaleDateString("es-ES")}
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium capitalize">
                      {news.category}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{news.title}</h1>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <User className="h-4 w-4" />
                    <span>Por: {news.author}</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Article Content */}
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  {news.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Article Footer */}
                <div className="border-t pt-6 mt-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <div className="text-sm text-slate-600">
                      <p>Publicado: {new Date(news.publishedAt).toLocaleDateString("es-ES")}</p>
                      {news.updatedAt !== news.publishedAt && (
                        <p>Actualizado: {new Date(news.updatedAt).toLocaleDateString("es-ES")}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />

            {/* Related News */}
            {relatedNews.length > 0 && (
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-4">Noticias Relacionadas</h3>
                  <div className="space-y-4">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="border-b pb-3 last:border-b-0">
                        <Link href={`/noticias/${item.id}`}>
                          <h4 className="font-medium text-slate-800 text-sm mb-1 hover:text-[#039b9e] transition-colors">
                            {item.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-slate-600">
                          {new Date(item.publishedAt).toLocaleDateString("es-ES")}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
