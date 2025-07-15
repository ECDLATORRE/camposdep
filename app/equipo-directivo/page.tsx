import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail } from "lucide-react"

export default function EquipoDirectivoPage() {
  const directiveTeam = [
    {
      name: "LAYO GÓMEZ ACUÑA",
      position: "DIRECTOR",
      email: "cdeportivos@temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "CLAUDIA LORETO FIGUEROA VEGA",
      position: "JEFA UNIDAD TÉCNICA PEDAGÓGICA",
      email: "cfigueroa@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "VIVIANA CECILIA DELGADO HERMOSILLA",
      position: "INSPECTORA GENERAL",
      email: "vdelgado.hermosilla@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "RODRIGO GERARDO CUEVAS MELLA",
      position: "COORDINADOR INFORMÁTICA EDUCATIVA",
      email: "rodrigo.cuevas@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "DANIEL ALEJANDRO AGUILERA MILLÁN EVA",
      position: "INSPECTOR GENERAL",
      email: "daguilera@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "DAVID HERNÁN NAVARRETE VELOSO",
      position: "INSPECTOR GENERAL",
      email: "dnavarrete@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Equipo Directivo</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {directiveTeam.map((member, index) => (
                    <div
                      key={index}
                      className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-40 object-cover rounded-lg mx-auto mb-4"
                      />
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{member.name}</h3>
                      <p className="text-[#039b9e] font-medium mb-3">{member.position}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4 text-[#039b9e]" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-slate-600 hover:text-[#039b9e] transition-colors break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro equipo directivo está conformado por profesionales experimentados que lideran los diferentes
                    aspectos de la gestión educativa, trabajando de manera coordinada para asegurar la calidad de la
                    educación que brindamos a nuestros estudiantes.
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
