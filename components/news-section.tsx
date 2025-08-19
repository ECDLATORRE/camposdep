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
      "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo a las 8:30 hrs.",
    image: "/images/escuela-exterior.jpg",
    category: "estudiantes",
    author: "AdminNicolas",
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
    author: "AdminNicolas",
    publishedAt: "2025-03-05",
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Reunión de profesores - Planificación 2025",
    excerpt: "Convocatoria a todos los docentes para la reunión de planificación del año académico 2025.",
    image: "/images/director-layo-gomez.jpg",
    category: "profesores",
    author: "Dirección",
    publishedAt: "2025-02-28",
    readTime: "2 min",
  },
  {
    id: "5",
    title: "Torneo de básquetbol inter-escolar",
    excerpt: "Nuestro equipo de básquetbol participará en el torneo regional. ¡Apoyemos a nuestros deportistas!",
    image: "/images/basket.jpg",
    category: "deportivos",
    author: "Coordinador Deportivo",
    publishedAt: "2025-03-01",
    readTime: "3 min",
  },
  {
    id: "6",
    title: "Mejoras en infraestructura escolar",
    excerpt:
      "Se han completado las mejoras en el techado de la cancha principal, beneficiando a toda la comunidad educativa.",
    image: "/images/techo2.jpg",
    category: "comunidad",
    author: "Administración",
    publishedAt: "2025-02-25",
    readTime: "5 min",
  },
]

const categories = [
  { id: "todos", label: "Todos", color: "bg-slate-100 text-slate-700 hover:bg-slate-200" },
  { id: "estudiantes", label: "Estudiantes", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
  { id: "profesores", label: "Profesores", color: "bg-green-100 text-green-700 hover:bg-green-200" },
  { id: "apoderados", label: "Apoderados", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
  { id: "comunidad", label: "Comunidad", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
  { id: "deportivos", label: "Deportivos", color: "bg-red-100 text-red-700 hover:bg-red-200" },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredNews =
    activeCategory === "todos" ? newsData : newsData.filter((item) => item.category === activeCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-[#039b9e]/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-[#039b9e]/10 animate-pulse">
          <Sparkles size={24} />
        </div>
        <div className="absolute top-40 right-20 text-[#039b9e]/10 animate-pulse delay-1000">
          <Sparkles size={32} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-[#039b9e]/10 animate-pulse delay-2000">
          <Sparkles size={28} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#039b9e]/10 text-[#039b9e] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Últimas Noticias
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Mantente <span className="text-[#039b9e]">Informado</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre las últimas novedades, eventos y logros de nuestra comunidad educativa
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
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

        {/* News grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.slice(0, 6).map((item, index) => (
            <Card
              key={item.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  className={`absolute top-4 left-4 ${
                    categories.find((cat) => cat.id === item.category)?.color || "bg-slate-100 text-slate-700"
                  } border-0 shadow-md`}
                >
                  {categories.find((cat) => cat.id === item.category)?.label}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(item.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {item.author}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-[#039b9e] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm line-clamp-3 mb-4">{item.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{item.readTime} de lectura</span>
                  <Link href={`/noticias/${item.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#039b9e] hover:text-[#028a8e] hover:bg-[#039b9e]/10 p-0 h-auto font-medium group/btn"
                    >
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all news button */}
        <div className="text-center">
          <Link href="/noticias">
            <Button
              size="lg"
              className="bg-[#039b9e] hover:bg-[#028a8e] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Ver todas las noticias
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
