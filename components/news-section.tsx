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
      date: "2 de marzo, 2023",
      category: "Estudiantes",
    },
    {
      id: "2",
      title: "Inicio de año escolar 2025",
      excerpt:
        "Información importante para el inicio del nuevo año académico. Todos los estudiantes deben presentarse el día 06 de marzo.",
      image: "/images/escuela-exterior.jpg",
      author: "Secretaría Académica",
      date: "6 de marzo, 2025",
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
      date: "15 de febrero, 2025",
      category: "Profesores",
    },
    {
      id: "4",
      title: "Reconocimiento a la excelencia docente",
      excerpt: "Felicitamos a nuestros profesores destacados por su compromiso y dedicación en el proceso educativo.",
      image: "/images/director-layo-gomez.jpg",
      author: "Dirección",
      date: "10 de febrero, 2025",
      category: "Profesores",
    },
  ],
  apoderados: [
    {
      id: "5",
      title: "Período de matrículas abiertas",
      excerpt:
        "El proceso de matrícula para nuevos estudiantes estará abierto desde el 05 de marzo hasta el 30 de marzo.",
      image: "/images/escuela-exterior.jpg",
      author: "Secretaría",
      date: "5 de marzo, 2025",
      category: "Apoderados",
    },
    {
      id: "6",
      title: "Reunión de apoderados marzo 2025",
      excerpt:
        "Invitamos a todos los apoderados a participar en la reunión mensual donde se tratarán temas importantes.",
      image: "/images/patio-escuela-estudiantes.jpg",
      author: "Inspectoría",
      date: "12 de marzo, 2025",
      category: "Apoderados",
    },
  ],
  comunidad: [
    {
      id: "7",
      title: "Feria científica escolar 2025",
      excerpt:
        "Los estudiantes presentarán sus proyectos de investigación en nuestra tradicional feria científica anual.",
      image: "/images/evento-comunidad.png",
      author: "Coordinación Académica",
      date: "20 de abril, 2025",
      category: "Comunidad",
    },
    {
      id: "8",
      title: "Campaña solidaria de invierno",
      excerpt:
        "Invitamos a toda la comunidad educativa a participar en nuestra campaña de ayuda para familias necesitadas.",
      image: "/images/patio-escuela-estudiantes.jpg",
      author: "Centro de Estudiantes",
      date: "1 de mayo, 2025",
      category: "Comunidad",
    },
  ],
  deportivos: [
    {
      id: "9",
      title: "Campeonato interescolar de básquetbol",
      excerpt: "Nuestro equipo de básquetbol se prepara para representar a la escuela en el campeonato regional.",
      image: "/images/basket.jpg",
      author: "Coordinación Deportiva",
      date: "25 de marzo, 2025",
      category: "Deportivos",
    },
    {
      id: "10",
      title: "Nuevas instalaciones deportivas",
      excerpt:
        "Inauguramos nuestras renovadas instalaciones deportivas con tecnología de punta para nuestros estudiantes.",
      image: "/images/techo2.jpg",
      author: "Dirección",
      date: "18 de marzo, 2025",
      category: "Deportivos",
    },
  ],
}

const categories = [
  { id: "estudiantes", name: "Estudiantes", color: "bg-blue-500" },
  { id: "profesores", name: "Profesores", color: "bg-green-500" },
  { id: "apoderados", name: "Apoderados", color: "bg-purple-500" },
  { id: "comunidad", name: "Comunidad", color: "bg-orange-500" },
  { id: "deportivos", name: "Deportivos", color: "bg-red-500" },
]

export function NewsSection() {
  const [activeTab, setActiveTab] = useState("estudiantes")

  const currentNews = newsData[activeTab as keyof typeof newsData] || []

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-teal-600 mr-2 animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Noticias y Comunicados
            </h2>
            <Sparkles className="w-8 h-8 text-teal-600 ml-2 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades de nuestra comunidad educativa
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentNews.map((article, index) => (
            <Card
              key={article.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${categories.find((c) => c.name === article.category)?.color} text-white`}>
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <Link href={`/noticias/${article.id}`}>
                  <Button className="w-full group-hover:bg-teal-600 transition-colors duration-300">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver todas las noticias
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
