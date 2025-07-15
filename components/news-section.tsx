"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewsSection() {
  const [activeTab, setActiveTab] = useState("estudiantes")

  const tabs = [
    { id: "estudiantes", label: "Estudiantes" },
    { id: "profesores", label: "Profesores" },
    { id: "apoderados", label: "Apoderados" },
    { id: "comunidad", label: "Comunidad Educativa" },
    { id: "deportivos", label: "Deportivos" },
  ]

  const news = {
    estudiantes: [
      {
        title: "Inicio de año escolar 2025",
        date: "06 MAR",
        description: "Información importante para el inicio del nuevo año académico.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Período de matrículas abiertas",
        date: "05 MAR",
        description: "Proceso de matrícula para nuevos estudiantes.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    profesores: [
      {
        title: "Capacitación docente 2025",
        date: "15 FEB",
        description: "Jornada de actualización pedagógica para el cuerpo docente.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    apoderados: [
      {
        title: "Reunión de apoderados",
        date: "20 MAR",
        description: "Primera reunión del año con padres y apoderados.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    comunidad: [
      {
        title: "Actividades comunitarias",
        date: "25 MAR",
        description: "Programa de actividades para toda la comunidad educativa.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    deportivos: [
      {
        title: "Campeonato interescolar",
        date: "30 MAR",
        description: "Participación en competencias deportivas regionales.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#039b9e]/10 to-[#028a8e]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Últimas Noticias</h2>
          <p className="text-xl text-slate-600">
            Mantente informado sobre las actividades de nuestra comunidad educativa
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-[#039b9e] hover:bg-[#028a8e]"
                  : "border-[#039b9e]/30 text-[#039b9e] hover:bg-[#039b9e]/10"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news[activeTab as keyof typeof news]?.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#039b9e] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {item.date}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                <Button variant="ghost" className="text-[#039b9e] hover:text-[#028a8e] p-0">
                  Ver noticia <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#039b9e] text-[#039b9e] hover:bg-[#039b9e] hover:text-white"
          >
            Ver todas las noticias
          </Button>
        </div>
      </div>
    </section>
  )
}
