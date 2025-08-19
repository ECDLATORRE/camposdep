"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newsData = {
  estudiantes: [
    {
      id: "1",
      title: "Estudiantes beneficiarios del transporte escolar año 2023",
      excerpt:
        "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
      image: "/images/noticia-transporte.png",
      author: "Dirección",
      date: "2 Mar 2023",
      category: "Estudiantes",
    },
    {
      id: "2",
      title: "Inicio de año escolar 2025",
      excerpt:
        "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo.",
      image: "/images/escuela-exterior.jpg",
      author: "Dirección",
      date: "6 Mar 2025",
      category: "Estudiantes",
    },
  ],
  profesores: [
    {
      id: "3",
      title: "Capacitación docente en nuevas metodologías",
      excerpt:
        "Nuestros profesores participan en talleres de actualización pedagógica para mejorar la calidad educativa.",
      image: "/images/patio-escuela-estudiantes.jpg",
      author: "UTP",
      date: "15 Feb 2025",
      category: "Profesores",
    },
  ],
  apoderados: [
    {
      id: "4",
      title: "Período de matrículas abiertas",
      excerpt:
        "El proceso de matrícula para nuevos estudiantes estará abierto desde el 05 de marzo hasta el 30 de marzo.",
      image: "/images/logo-oficial.png",
      author: "Secretaría",
      date: "5 Mar 2025",
      category: "Apoderados",
    },
  ],
  comunidad: [
    {
      id: "5",
      title: "Evento comunitario 2025",
      excerpt: "Gran celebración de nuestra comunidad educativa con actividades para toda la familia.",
      image: "/images/evento-comunidad.png",
      author: "Dirección",
      date: "20 Mar 2025",
      category: "Comunidad",
    },
  ],
  deportivos: [
    {
      id: "6",
      title: "Campeonato de básquetbol escolar",
      excerpt: "Nuestro equipo de básquetbol se prepara para el campeonato regional con entrenamientos intensivos.",
      image: "/images/basket.jpg",
      author: "Educación Física",
      date: "10 Mar 2025",
      category: "Deportivos",
    },
  ],
}

const categories = [
  { id: "estudiantes", label: "Estudiantes", color: "bg-blue-500" },
  { id: "profesores", label: "Profesores", color: "bg-green-500" },
  { id: "apoderados", label: "Apoderados", color: "bg-purple-500" },
  { id: "comunidad", label: "Comunidad", color: "bg-orange-500" },
  { id: "deportivos", label: "Deportivos", color: "bg-red-500" },
]

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("estudiantes")

  const currentNews = newsData[activeCategory as keyof typeof newsData] || []

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#039b9e]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#039b9e]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <Sparkles className="absolute top-20 right-20 text-[#039b9e]/20 w-6 h-6 animate-bounce" />
        <Sparkles className="absolute bottom-20 left-20 text-[#039b9e]/20 w-4 h-4 animate-bounce delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Últimas Noticias</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades de nuestra comunidad educativa
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentNews.map((article, index) => (
            <Card
              key={article.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${categories.find((c) => c.id === activeCategory)?.color} text-white`}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#039b9e] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                <Link href={`/noticias/${article.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-[#039b9e] group-hover:text-white transition-all duration-300"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              className="bg-gradient-to-r from-[#039b9e] to-[#028a8e] hover:from-[#028a8e] hover:to-[#027a7e] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
