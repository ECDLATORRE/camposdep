"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function InterestSites() {
  const sites = [
    {
      name: "MINEDUC",
      description: "Ministerio de Educación de Chile",
      url: "https://www.mineduc.cl/",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      name: "JUNAEB",
      description: "Junta Nacional de Auxilio Escolar y Becas",
      url: "https://www.junaeb.cl/",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      name: "Lirmi",
      description: "Plataforma Educativa Digital",
      url: "https://lms.lirmi.com/login",
      color: "bg-gradient-to-br from-yellow-400 via-purple-500 to-cyan-400",
    },
    {
      name: "DAEM Temuco",
      description: "Departamento de Administración de Educación Municipal",
      url: "https://www.temuco.cl/",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Sitios de Interés</h2>
          <p className="text-xl text-slate-600">Enlaces útiles para nuestra comunidad educativa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 overflow-hidden"
            >
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`h-32 ${site.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="h-6 w-6 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{site.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                    {site.description}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
