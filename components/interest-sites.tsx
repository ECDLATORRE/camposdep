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

        <div className="space-y-4 max-w-4xl mx-auto">
          {interestSites.map((site, index) => {
            const IconComponent = site.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className={`bg-gradient-to-r ${site.gradient} p-6 text-white relative overflow-hidden`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/20 p-3 rounded-full">
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{site.name}</h3>
                            <p className="text-sm opacity-90">{site.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm font-medium">
                          <span>Visitar sitio</span>
                          <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 opacity-10">
                        <IconComponent className="h-20 w-20" />
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
