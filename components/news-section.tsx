"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, MessageCircle, Share, Instagram } from "lucide-react"

export function NewsSection() {
  const [activeTab, setActiveTab] = useState("recientes")

  const tabs = [
    { id: "recientes", label: "Recientes" },
    { id: "deportivos", label: "Deportivos" },
    { id: "academicos", label: "Académicos" },
    { id: "eventos", label: "Eventos" },
  ]

  // Posts estilo Instagram simulados
  const instagramPosts = {
    recientes: [
      {
        id: "1",
        image: "/images/evento-comunidad.png",
        caption:
          "🎉 Gran evento comunitario 2025! Construyendo comunidad juntos. Gracias a todas las familias que participaron en esta hermosa jornada. #ComunidadEducativa #CamposDeportivos",
        likes: 156,
        comments: 23,
        timeAgo: "2 días",
        hashtags: ["#ComunidadEducativa", "#CamposDeportivos", "#Temuco"],
      },
      {
        id: "2",
        image: "/images/basket.jpg",
        caption:
          "🏀 Nuestro equipo de básquetbol listo para la nueva temporada! Orgullosos de nuestros deportistas que representan con honor los colores de la escuela. ¡Vamos equipo! 💪",
        likes: 89,
        comments: 15,
        timeAgo: "3 días",
        hashtags: ["#Basquetbol", "#DeportesEscolares", "#Equipo"],
      },
      {
        id: "3",
        image: "/images/actividad-fisica.jpg",
        caption:
          "🤸‍♀️ Educación física al aire libre! Nuestros estudiantes disfrutando de actividades recreativas en el patio. El deporte y la actividad física son fundamentales en nuestra formación integral.",
        likes: 124,
        comments: 18,
        timeAgo: "5 días",
        hashtags: ["#EducacionFisica", "#DeporteEscolar", "#VidaSaludable"],
      },
      {
        id: "4",
        image: "/images/techo2.jpg",
        caption:
          "🏗️ ¡Nuevas instalaciones completadas! Nuestro techado deportivo ya está listo para brindar mejores condiciones a nuestros estudiantes. Inversión en infraestructura para una mejor educación.",
        likes: 201,
        comments: 31,
        timeAgo: "1 semana",
        hashtags: ["#NuevasInstalaciones", "#Infraestructura", "#Mejoras"],
      },
      {
        id: "5",
        image: "/images/escuela-exterior.jpg",
        caption:
          "🏫 Vista de nuestro hermoso establecimiento. 25 años formando líderes del futuro en Temuco. Cada día trabajamos por brindar educación de calidad a nuestra comunidad.",
        likes: 178,
        comments: 27,
        timeAgo: "1 semana",
        hashtags: ["#EscuelaCamposDeportivos", "#EducacionDeCalidad", "#Temuco"],
      },
      {
        id: "6",
        image: "/images/patio-escuela-estudiantes.jpg",
        caption:
          "👥 Nuestros estudiantes en el recreo, compartiendo momentos de alegría y amistad. La convivencia escolar es parte fundamental de nuestra propuesta educativa.",
        likes: 143,
        comments: 22,
        timeAgo: "2 semanas",
        hashtags: ["#ConvivenciaEscolar", "#Estudiantes", "#Recreo"],
      },
    ],
    deportivos: [
      {
        id: "2",
        image: "/images/basket.jpg",
        caption:
          "🏀 Nuestro equipo de básquetbol listo para la nueva temporada! Orgullosos de nuestros deportistas que representan con honor los colores de la escuela. ¡Vamos equipo! 💪",
        likes: 89,
        comments: 15,
        timeAgo: "3 días",
        hashtags: ["#Basquetbol", "#DeportesEscolares", "#Equipo"],
      },
      {
        id: "3",
        image: "/images/actividad-fisica.jpg",
        caption:
          "🤸‍♀️ Educación física al aire libre! Nuestros estudiantes disfrutando de actividades recreativas en el patio. El deporte y la actividad física son fundamentales en nuestra formación integral.",
        likes: 124,
        comments: 18,
        timeAgo: "5 días",
        hashtags: ["#EducacionFisica", "#DeporteEscolar", "#VidaSaludable"],
      },
    ],
    academicos: [
      {
        id: "5",
        image: "/images/escuela-exterior.jpg",
        caption:
          "🏫 Vista de nuestro hermoso establecimiento. 25 años formando líderes del futuro en Temuco. Cada día trabajamos por brindar educación de calidad a nuestra comunidad.",
        likes: 178,
        comments: 27,
        timeAgo: "1 semana",
        hashtags: ["#EscuelaCamposDeportivos", "#EducacionDeCalidad", "#Temuco"],
      },
    ],
    eventos: [
      {
        id: "1",
        image: "/images/evento-comunidad.png",
        caption:
          "🎉 Gran evento comunitario 2025! Construyendo comunidad juntos. Gracias a todas las familias que participaron en esta hermosa jornada. #ComunidadEducativa #CamposDeportivos",
        likes: 156,
        comments: 23,
        timeAgo: "2 días",
        hashtags: ["#ComunidadEducativa", "#CamposDeportivos", "#Temuco"],
      },
      {
        id: "4",
        image: "/images/techo2.jpg",
        caption:
          "🏗️ ¡Nuevas instalaciones completadas! Nuestro techado deportivo ya está listo para brindar mejores condiciones a nuestros estudiantes. Inversión en infraestructura para una mejor educación.",
        likes: 201,
        comments: 31,
        timeAgo: "1 semana",
        hashtags: ["#NuevasInstalaciones", "#Infraestructura", "#Mejoras"],
      },
    ],
  }

  const currentPosts = instagramPosts[activeTab as keyof typeof instagramPosts] || []

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-[#E4405F]" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Síguenos en Instagram</h2>
          </div>
          <p className="text-xl text-slate-600">
            Mantente al día con las últimas actividades de nuestra comunidad educativa
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
                  ? "bg-[#E4405F] hover:bg-[#E4405F]/90 shadow-lg"
                  : "border-[#E4405F]/30 text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden hover:-translate-y-2 animate-fade-in-up cursor-pointer bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-[#E4405F] text-white px-2 py-1 rounded-full text-xs font-semibold transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {post.timeAgo}
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">{post.caption}</p>

                {/* Instagram-style interaction bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#E4405F]">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <Share className="h-4 w-4 text-slate-400 hover:text-[#E4405F] transition-colors cursor-pointer" />
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1">
                  {post.hashtags.map((hashtag, idx) => (
                    <span key={idx} className="text-xs text-[#E4405F] hover:underline cursor-pointer">
                      {hashtag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver más en Instagram button */}
        <div className="text-center mt-12 animate-fade-in delay-1000">
          <a href="https://www.instagram.com/cdeportivostemuco/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#E4405F] to-[#C13584] hover:from-[#C13584] hover:to-[#E4405F] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Ver más en Instagram
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
