"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
}

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Estudiantes beneficiarios del transporte escolar año 2023",
    excerpt:
      "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
    image: "/images/noticia-transporte.png",
    category: "estudiantes",
    author: "AdminNicolas",
    publishedAt: "2023-03-02",
    readTime: "3 min",
  },
  {
    id: "2",
    title: "Inicio de año escolar 2025",
    excerpt:
      "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo.",
    image: "/images/escuela-exterior.jpg",
    category: "estudiantes",
    author: "Dirección",
    publishedAt: "2025-03-06",
    readTime: "2 min",
  },
  {
    id: "3",
    title: "Período de matrículas abiertas",
    excerpt:
      "El proceso de matrícula para nuevos estudiantes estará abierto desde el 05 de marzo hasta el 30 de marzo.",
    image: "/images/patio-escuela-estudiantes.jpg",
    category: "apoderados",
    author: "Secretaría",
    publishedAt: "2025-03-05",
    readTime: "2 min",
  },
  {
    id: "4",
    title: "Reunión de profesores marzo 2025",
    excerpt: "Convocatoria a reunión general de profesores para coordinar actividades del nuevo año académico.",
    image: "/images/director-layo-gomez.jpg",
    category: "profesores",
    author: "Dirección",
    publishedAt: "2025-03-01",
    readTime: "1 min",
  },
  {
    id: "5",
    title: "Actividades comunitarias 2025",
    excerpt: "Invitamos a toda la comunidad a participar en las actividades programadas para este año.",
    image: "/images/evento-comunidad.png",
    category: "comunidad",
    author: "Coordinación",
    publishedAt: "2025-02-28",
    readTime: "4 min",
  },
  {
    id: "6",
    title: "Campeonato de básquetbol escolar",
    excerpt: "Nuestro equipo de básquetbol se prepara para el campeonato regional. ¡Apoyemos a nuestros estudiantes!",
    image: "/images/basket.jpg",
    category: "deportivos",
    author: "Profesor de Educación Física",
    publishedAt: "2025-02-25",
    readTime: "3 min",
  },
]

const categories = [
  { id: "todos", label: "Todas", color: "bg-gradient-to-r from-[#039b9e] to-[#028a8e]" },
  { id: "estudiantes", label: "Estudiantes", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
  { id: "profesores", label: "Profesores", color: "bg-gradient-to-r from-green-500 to-green-600" },
  { id: "apoderados", label: "Apoderados", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
  { id: "comunidad", label: "Comunidad", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
  { id: "deportivos", label: "Deportivos", color: "bg-gradient-to-r from-red-500 to-red-600" },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredNews =
    activeCategory === "todos" ? newsData : newsData.filter((news) => news.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="h-8 w-8 text-[#039b9e]" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Sparkles className="h-6 w-6 text-[#039b9e]" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-pulse delay-2000">
          <Sparkles className="h-10 w-10 text-[#039b9e]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Últimas{" "}
            <span className="bg-gradient-to-r from-[#039b9e] to-[#028a8e] bg-clip-text text-transparent">Noticias</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades, eventos y actividades de nuestra comunidad educativa
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.slice(0, 6).map((news, index) => (
            <Card
              key={news.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${categories.find((c) => c.id === news.category)?.color || categories[0].color} text-white border-0`}
                  >
                    {categories.find((c) => c.id === news.category)?.label || "General"}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#039b9e] transition-colors duration-300 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{news.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{news.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(news.publishedAt)}</span>
                  </div>
                </div>

                <Link href={`/noticias/${news.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-[#039b9e] group-hover:text-white transition-all duration-300 p-0 h-auto py-3"
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver todas las noticias button */}
        <div className="text-center">
          <Link href="/noticias">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#039b9e] to-[#028a8e] hover:from-[#028a8e] hover:to-[#027a7e] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver todas las noticias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
