"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function NewsSection() {
  const [activeTab, setActiveTab] = useState("estudiantes")
  const [newsData, setNewsData] = useState<any[]>([])

  const tabs = [
    { id: "estudiantes", label: "Estudiantes" },
    { id: "profesores", label: "Profesores" },
    { id: "apoderados", label: "Apoderados" },
    { id: "comunidad", label: "Comunidad Educativa" },
    { id: "deportivos", label: "Deportivos" },
  ]

  // Datos de ejemplo para mostrar mientras no hay noticias en la base de datos
  const sampleNews = {
    estudiantes: [
      {
        id: "1",
        title: "Estudiantes beneficiarios del transporte escolar año 2023",
        excerpt:
          "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
        image: "/images/noticia-transporte.png",
        date: "02 MAR",
        author: "AdminNicolas",
      },
      {
        id: "2",
        title: "Inicio de año escolar 2025",
        excerpt: "Información importante para el inicio del nuevo año académico.",
        image: "/placeholder.svg?height=200&width=300",
        date: "06 MAR",
        author: "AdminNicolas",
      },
      {
        id: "3",
        title: "Período de matrículas abiertas",
        excerpt: "Proceso de matrícula para nuevos estudiantes.",
        image: "/placeholder.svg?height=200&width=300",
        date: "05 MAR",
        author: "AdminNicolas",
      },
    ],
    profesores: [
      {
        id: "4",
        title: "Capacitación docente 2025",
        excerpt: "Jornada de actualización pedagógica para el cuerpo docente.",
        image: "/placeholder.svg?height=200&width=300",
        date: "15 FEB",
        author: "AdminNicolas",
      },
    ],
    apoderados: [
      {
        id: "5",
        title: "Reunión de apoderados",
        excerpt: "Primera reunión del año con padres y apoderados.",
        image: "/placeholder.svg?height=200&width=300",
        date: "20 MAR",
        author: "AdminNicolas",
      },
    ],
    comunidad: [
      {
        id: "6",
        title: "Actividades comunitarias",
        excerpt: "Programa de actividades para toda la comunidad educativa.",
        image: "/placeholder.svg?height=200&width=300",
        date: "25 MAR",
        author: "AdminNicolas",
      },
    ],
    deportivos: [
      {
        id: "7",
        title: "Campeonato interescolar",
        excerpt: "Participación en competencias deportivas regionales.",
        image: "/placeholder.svg?height=200&width=300",
        date: "30 MAR",
        author: "AdminNicolas",
      },
    ],
  }

  useEffect(() => {
    // Aquí podrías hacer una llamada a la API para obtener las noticias reales
    // Por ahora usamos los datos de ejemplo
    setNewsData(sampleNews[activeTab as keyof typeof sampleNews] || [])
  }, [activeTab])

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
          {newsData.map((item, index) => (
            <Card
              key={item.id}
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
                <p className="text-slate-600 leading-relaxed line-clamp-3">{item.excerpt}</p>

                <div className="flex flex-col space-y-2">
                  <Link href={`/noticias/${item.id}`}>
                    <Button
                      variant="ghost"
                      className="text-[#039b9e] hover:text-[#028a8e] p-0 group-hover:translate-x-2 transition-transform duration-300 justify-start"
                    >
                      Ver noticia completa{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
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
