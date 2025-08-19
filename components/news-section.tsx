"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const newsCategories = [
  { id: "all", label: "Todas", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
  { id: "estudiantes", label: "Estudiantes", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { id: "profesores", label: "Profesores", color: "bg-green-100 text-green-700 hover:bg-green-200" },
  { id: "apoderados", label: "Apoderados", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  { id: "comunidad", label: "Comunidad", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  { id: "deportivos", label: "Deportivos", color: "bg-red-100 text-red-700 hover:bg-red-200" },
]

const newsData = [
  {
    id: "1",
    title: "Estudiantes beneficiarios del transporte escolar año 2023",
    excerpt:
      "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
    image: "/images/noticia-transporte.png",
    category: "estudiantes",
    author: "Dirección",
    date: "2023-03-02",
    featured: true,
  },
  {
    id: "2",
    title: "Inicio de año escolar 2025",
    excerpt:
      "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo.",
    image: "/images/escuela-exterior.jpg",
    category: "estudiantes",
    author: "Secretaría Académica",
    date: "2025-03-06",
    featured: false,
  },
  {
    id: "3",
    title: "Período de matrículas abiertas",
    excerpt:
      "El proceso de matrícula para nuevos estudiantes estará abierto desde el 05 de marzo hasta el 30 de marzo.",
    image: "/images/patio-escuela-estudiantes.jpg",
    category: "apoderados",
    author: "Admisión",
    date: "2025-03-05",
    featured: false,
  },
  {
    id: "4",
    title: "Reunión de apoderados marzo 2025",
    excerpt:
      "Convocamos a todos los apoderados a la reunión mensual donde se tratarán temas importantes del establecimiento.",
    image: "/images/director-layo-gomez.jpg",
    category: "apoderados",
    author: "Dirección",
    date: "2025-03-10",
    featured: false,
  },
  {
    id: "5",
    title: "Capacitación docente en nuevas metodologías",
    excerpt:
      "Nuestros profesores participan en jornadas de capacitación para implementar nuevas metodologías de enseñanza.",
    image: "/images/fernanda-coordinadora-pie.jpg",
    category: "profesores",
    author: "UTP",
    date: "2025-03-08",
    featured: false,
  },
  {
    id: "6",
    title: "Torneo interescolar de básquetbol",
    excerpt:
      "Nuestros estudiantes participarán en el torneo interescolar de básquetbol que se realizará durante el mes de abril.",
    image: "/images/basket.jpg",
    category: "deportivos",
    author: "Coordinación Deportiva",
    date: "2025-03-12",
    featured: false,
  },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredNews = activeCategory === "all" ? newsData : newsData.filter((news) => news.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-CL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#039b9e] rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#028a8e] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#039b9e] rounded-full blur-xl"></div>
      </div>

      {/* Animated sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-1/4 w-4 h-4 text-[#039b9e] opacity-20 animate-pulse" />
        <Sparkles className="absolute top-40 right-1/3 w-3 h-3 text-[#028a8e] opacity-30 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-32 left-1/2 w-5 h-5 text-[#039b9e] opacity-25 animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Últimas <span className="text-[#039b9e]">Noticias</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades, eventos y actividades de nuestra comunidad educativa
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {newsCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`
                transition-all duration-300 hover:scale-105
                ${
                  activeCategory === category.id
                    ? "bg-[#039b9e] hover:bg-[#028a8e] text-white shadow-lg"
                    : `${category.color} border-transparent`
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map((news, index) => (
            <Card
              key={news.id}
              className={`
                group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg
                ${news.featured ? "md:col-span-2 lg:col-span-1" : ""}
                ${index === 0 ? "bg-gradient-to-br from-[#039b9e]/5 to-[#028a8e]/5" : "bg-white"}
              `}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`
                      ${newsCategories.find((cat) => cat.id === news.category)?.color || "bg-slate-100 text-slate-700"}
                      border-0 shadow-md
                    `}
                  >
                    {newsCategories.find((cat) => cat.id === news.category)?.label}
                  </Badge>
                </div>
                {news.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-md">
                      Destacada
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#039b9e] transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{news.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{news.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                </div>

                <Link href={`/noticias/${news.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-[#039b9e] hover:text-white transition-all duration-300"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/noticias">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#039b9e] to-[#028a8e] hover:from-[#028a8e] hover:to-[#027a7e] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ver todas las noticias
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
