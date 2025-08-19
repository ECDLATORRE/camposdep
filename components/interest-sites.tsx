import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, GraduationCap, BookOpen, Users } from "lucide-react"

export function InterestSites() {
  const sites = [
    {
      name: "Ministerio de Educación",
      description: "Portal oficial del MINEDUC",
      url: "https://www.mineduc.cl/",
      icon: GraduationCap,
      gradient: "from-blue-500 to-blue-600",
      bgIcon: "text-blue-100",
    },
    {
      name: "Lirmi",
      description: "Plataforma Educativa Digital",
      url: "https://lms.lirmi.com/login",
      icon: BookOpen,
      gradient: "from-yellow-400 via-purple-500 to-cyan-400",
      bgIcon: "text-yellow-100",
    },
    {
      name: "Superintendencia de Educación",
      description: "Fiscalización y apoyo técnico-pedagógico",
      url: "https://www.supereduc.cl/",
      icon: Users,
      gradient: "from-green-500 to-green-600",
      bgIcon: "text-green-100",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Sitios de Interés</h3>
        <div className="space-y-3">
          {sites.map((site, index) => (
            <a key={index} href={site.url} target="_blank" rel="noopener noreferrer" className="block group">
              <div
                className={`relative overflow-hidden rounded-lg bg-gradient-to-r ${site.gradient} p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                {/* Background Icon */}
                <site.icon
                  className={`absolute -right-2 -top-2 h-16 w-16 ${site.bgIcon} opacity-20 transform rotate-12`}
                />

                <div className="relative flex items-center space-x-3">
                  {/* Main Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <site.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white truncate">{site.name}</h4>
                        <p className="text-xs text-white/80 truncate">{site.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-white/80 flex-shrink-0 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
