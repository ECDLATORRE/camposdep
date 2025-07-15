import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail } from "lucide-react"

export default function AsistentesPage() {
  const assistants = [
    {
      name: "MARISOL ALEJANDRA MORGADO MORGADO",
      position: "ASISTENTE/TÉCNICO PÁRVULOS",
      email: "mmorgado@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "GRISELLE SCARLET NICOLE VERA HERNANDILLA",
      position: "ASISTENTE/TÉCNICO PÁRVULOS",
      email: "gvera@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "GÉNESIS DEL PILAR PAREDES CURIN",
      position: "ENCARGADA DE IMPRESIONES",
      email: "gparedes@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "CAROLINA CONSTANZA MEZA VEGA",
      position: "ASISTENTE/TÉCNICO PÁRVULOS",
      email: "cmeza@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "CLAUDIA MABEL TORRES VENEGAS",
      position: "INSPECTORA",
      email: "ctorres@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      name: "VERÓNICA ELIZABETH BARRERA COFRÉ",
      position: "ASISTENTE/TÉCNICO PÁRVULOS",
      email: "vbarrera@camposdeportivos-temuco.cl",
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Asistentes</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {assistants.map((assistant, index) => (
                    <div
                      key={index}
                      className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={assistant.image || "/placeholder.svg"}
                        alt={assistant.name}
                        className="w-32 h-40 object-cover rounded-lg mx-auto mb-4"
                      />
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{assistant.name}</h3>
                      <p className="text-[#039b9e] font-medium mb-3">{assistant.position}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4 text-[#039b9e]" />
                        <a
                          href={`mailto:${assistant.email}`}
                          className="text-sm text-slate-600 hover:text-[#039b9e] transition-colors break-all"
                        >
                          {assistant.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro equipo de asistentes de la educación juega un rol fundamental en el apoyo a la labor
                    pedagógica y en el bienestar de nuestros estudiantes. Su dedicación y profesionalismo contribuyen
                    significativamente al funcionamiento integral de nuestra institución educativa.
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
