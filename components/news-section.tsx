"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Download } from "lucide-react"
import Link from "next/link"
import { getNewsByCategory } from "@/lib/auth"

export async function NewsSection() {
  const [activeTab, setActiveTab] = useState("estudiantes")

  const tabs = [
    { id: "estudiantes", label: "Estudiantes" },
    { id: "profesores", label: "Profesores" },
    { id: "apoderados", label: "Apoderados" },
    { id: "comunidad", label: "Comunidad Educativa" },
    { id: "deportivos", label: "Deportivos" },
  ]

  // Obtener noticias de la base de datos
  const newsData = await getNewsByCategory(activeTab)

  return (
    <section className="py-20 bg-gradient-to-br from-[#039b9e]/10 via-[#028a8e]/5 to-[#039b9e]/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-20 left-20 h-6 w-6 text-[#039b9e]/20 animate-pulse" />
        <Sparkles className="absolute bottom-20 right-20 h-4 w-4 text-[#028a8e]/30 animate-pulse delay-1000" />
        <Sparkles className="absolute top-1/2 left-1/4 h-5 w-5 text-[#039b9e]/15 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Últimas Noticias</h2>
          <p className="text-xl text-slate-600">
            Mantente informado sobre las actividades de nuestra comunidad educativa
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in delay-300">
          {tabs.map((tab, index) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-all duration-300 hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-[#039b9e] hover:bg-[#028a8e] shadow-lg"
                  : "border-[#039b9e]/30 text-[#039b9e] hover:bg-[#039b9e]/10 hover:border-[#039b9e]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData?.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden hover:-translate-y-2 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-[#039b9e] text-white px-3 py-1 rounded-lg text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.date}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed line-clamp-3">{item.description}</p>

                {item.content && (
                  <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 leading-relaxed">
                    <p className="line-clamp-4">{item.content}</p>
                  </div>
                )}

                <div className="flex flex-col space-y-2">
                  {item.link ? (
                    <Link href={item.link}>
                      <Button
                        variant="ghost"
                        className="text-[#039b9e] hover:text-[#028a8e] p-0 group-hover:translate-x-2 transition-transform duration-300 justify-start"
                      >
                        Ver noticia completa{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="ghost"
                      className="text-[#039b9e] hover:text-[#028a8e] p-0 group-hover:translate-x-2 transition-transform duration-300 justify-start"
                    >
                      Ver noticia completa{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  )}

                  {item.hasDownload && (
                    <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e] text-xs">
                      <Download className="mr-2 h-3 w-3" />
                      Descargar: {item.downloadText}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in delay-1000">
          <Link href="/noticias">
            <Button
              size="lg"
              variant="outline"
              className="border-[#039b9e] text-[#039b9e] hover:bg-[#039b9e] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg bg-transparent"
            >
              Ver todas las noticias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
