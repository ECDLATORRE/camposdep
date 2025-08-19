import Link from "next/link"
import { ExternalLink, Globe, BookOpen, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function InterestSites() {
  const sites = [
    {
      name: "Ministerio de Educación",
      description: "Portal oficial del MINEDUC Chile",
      url: "https://www.mineduc.cl/",
      icon: GraduationCap,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Lirmi",
      description: "Plataforma Educativa Digital",
      url: "https://lms.lirmi.com/login",
      icon: BookOpen,
      gradient: "from-yellow-400 via-purple-500 to-cyan-400",
    },
    {
      name: "Superintendencia de Educación",
      description: "Fiscalización y apoyo técnico-pedagógico",
      url: "https://www.supereduc.cl/",
      icon: Users,
      gradient: "from-green-500 to-green-600",
    },
    {
      name: "Agencia de Calidad",
      description: "Evaluación y orientación del sistema educativo",
      url: "https://www.agenciaeducacion.cl/",
      icon: Globe,
      gradient: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Sitios de Interés</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Enlaces útiles para nuestra comunidad educativa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site, index) => {
            const IconComponent = site.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${site.gradient} p-6 text-white`}>
                    <IconComponent className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2">{site.name}</h3>
                    <p className="text-sm opacity-90 mb-4">{site.description}</p>
                  </div>
                  <div className="p-4">
                    <Button asChild className="w-full group-hover:bg-slate-800 transition-colors duration-300">
                      <Link href={site.url} target="_blank" rel="noopener noreferrer">
                        Visitar sitio
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
