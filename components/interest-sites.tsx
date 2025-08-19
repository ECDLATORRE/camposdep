"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Globe, GraduationCap, Users } from "lucide-react"

const interestSites = [
  {
    name: "Ministerio de Educación",
    description: "Portal oficial del MINEDUC",
    url: "https://www.mineduc.cl/",
    icon: GraduationCap,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Lirmi",
    description: "Plataforma Educativa Digital",
    url: "https://lms.lirmi.com/login",
    icon: Globe,
    gradient: "from-yellow-400 via-purple-500 to-cyan-400",
  },
  {
    name: "Superintendencia de Educación",
    description: "Fiscalización y apoyo técnico-pedagógico",
    url: "https://www.supereduc.cl/",
    icon: Users,
    gradient: "from-green-500 to-green-600",
  },
]

export function InterestSites() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Sitios de Interés</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Enlaces útiles para nuestra comunidad educativa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {interestSites.map((site, index) => {
            const IconComponent = site.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className={`bg-gradient-to-br ${site.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 opacity-20">
                        <IconComponent className="h-24 w-24" />
                      </div>
                      <div className="relative z-10">
                        <IconComponent className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{site.name}</h3>
                        <p className="text-sm opacity-90 mb-4">{site.description}</p>
                        <div className="flex items-center text-sm font-medium">
                          <span>Visitar sitio</span>
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
