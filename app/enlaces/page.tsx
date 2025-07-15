import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { ExternalLink, Globe, BookOpen, Users, FileText } from "lucide-react"

export default function EnlacesPage() {
  const linkCategories = [
    {
      title: "Ministerio de Educación",
      icon: <BookOpen className="h-6 w-6 text-[#039b9e]" />,
      links: [
        { name: "MINEDUC", url: "https://www.mineduc.cl", description: "Sitio oficial del Ministerio de Educación" },
        {
          name: "Currículum Nacional",
          url: "https://www.curriculumnacional.cl",
          description: "Bases curriculares y programas de estudio",
        },
        {
          name: "Centro de Perfeccionamiento",
          url: "https://www.cpeip.cl",
          description: "Desarrollo profesional docente",
        },
      ],
    },
    {
      title: "DAEM Temuco",
      icon: <Users className="h-6 w-6 text-[#039b9e]" />,
      links: [
        {
          name: "DAEM Temuco",
          url: "https://www.temuco.cl/daem",
          description: "Departamento de Administración de Educación Municipal",
        },
        {
          name: "Municipalidad de Temuco",
          url: "https://www.temuco.cl",
          description: "Sitio oficial de la Municipalidad de Temuco",
        },
      ],
    },
    {
      title: "Recursos Educativos",
      icon: <Globe className="h-6 w-6 text-[#039b9e]" />,
      links: [
        {
          name: "Biblioteca Nacional Digital",
          url: "https://www.bibliotecanacionaldigital.gob.cl",
          description: "Recursos digitales y patrimonio cultural",
        },
        {
          name: "Aprendo en Línea",
          url: "https://www.aprendoenlinea.mineduc.cl",
          description: "Plataforma de recursos pedagógicos",
        },
        {
          name: "Leo Primero",
          url: "https://www.leoprimero.cl",
          description: "Programa de lectura para primeros años",
        },
      ],
    },
    {
      title: "Evaluación y Calidad",
      icon: <FileText className="h-6 w-6 text-[#039b9e]" />,
      links: [
        {
          name: "Agencia de Calidad",
          url: "https://www.agenciaeducacion.cl",
          description: "Evaluación y orientación del sistema educativo",
        },
        {
          name: "SIMCE",
          url: "https://www.agenciaeducacion.cl/simce",
          description: "Sistema de Medición de la Calidad de la Educación",
        },
        {
          name: "Superintendencia de Educación",
          url: "https://www.supereduc.cl",
          description: "Fiscalización y atención ciudadana",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Enlaces de Interés</h1>

                <div className="space-y-8">
                  {linkCategories.map((category, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        {category.icon}
                        <h2 className="text-xl font-bold text-slate-800">{category.title}</h2>
                      </div>

                      <div className="space-y-4">
                        {category.links.map((link, linkIndex) => (
                          <div
                            key={linkIndex}
                            className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-800 mb-1">{link.name}</h3>
                              <p className="text-slate-600 text-sm">{link.description}</p>
                            </div>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-4 p-2 text-[#039b9e] hover:text-[#028a8e] transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Estos enlaces te conectan con recursos educativos importantes, sitios oficiales del sistema
                    educativo chileno y herramientas útiles para estudiantes, apoderados y docentes. Todos los enlaces
                    se abren en una nueva ventana.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />
          </div>
        </div>
      </div>
    </div>
  )
}
