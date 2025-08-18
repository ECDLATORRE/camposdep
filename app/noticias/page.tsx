import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getNews } from "@/lib/auth"
import Link from "next/link"

export default async function NoticiasPage() {
  const news = await getNews()
  const publishedNews = news.filter((item) => item.status === "published")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Noticias</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {publishedNews.map((item) => (
                    <Card
                      key={item.id}
                      className="hover:shadow-lg transition-shadow border-0 shadow-md overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-slate-800 mb-2 text-sm leading-tight">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.excerpt}</p>
                        <div className="text-xs text-slate-500 mt-2">
                          <p>Por: {item.author}</p>
                          <p>{new Date(item.publishedAt).toLocaleDateString("es-ES")}</p>
                        </div>
                        <Link href={`/noticias/${item.id}`}>
                          <Button variant="ghost" className="text-[#039b9e] hover:text-[#028a8e] p-0 mt-2 text-xs">
                            Leer más →
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {publishedNews.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No hay noticias publicadas en este momento.</p>
                  </div>
                )}

                {/* Pagination */}
                {publishedNews.length > 0 && (
                  <div className="flex justify-center items-center space-x-4 mt-8">
                    <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e] bg-transparent">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e]">
                        1
                      </Button>
                    </div>
                    <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e] bg-transparent">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />
          </div>
        </div>
      </div>
    </div>
  )
}
