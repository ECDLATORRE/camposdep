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
      image: "/images/director-layo-gomez.jpg",
      description: "Líder del establecimiento educacional, responsable de la gestión integral de la institución.",
    },
    {
      name: "CLAUDIA LORETO FIGUEROA VEGA",
      position: "JEFA UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Responsable de la coordinación y supervisión de los procesos pedagógicos.",
    },
    {
      name: "VIVIANA CECILIA DELGADO HERMOSILLA",
      position: "INSPECTORA GENERAL",
      email: "vdelgadohermosilla@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Encargada de la disciplina, convivencia y organización general del establecimiento.",
    },
    {
      name: "RODRIGO GERARDO CUEVAS MELLA",
      position: "COORDINADOR INFORMÁTICA EDUCATIVA",
      email: "rodrigo.cuevas@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Responsable de la integración tecnológica en los procesos educativos.",
    },
    {
      name: "DANIEL ALEJANDRO AGUILERA VILLANUEVA",
      position: "INSPECTOR GENERAL",
      email: "daguilera@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Apoyo en la gestión disciplinaria y organizacional del establecimiento.",
    },
    {
      name: "DAVID HERNÁN NAVARRETE VELOSO",
      position: "INSPECTOR GENERAL",
      email: "dnavarrete@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Colabora en la supervisión y organización de las actividades escolares.",
    },
    {
      name: "IGNACIO ANDRÉS VÁSQUEZ FIGUEROA",
      position: "COORDINADOR CONVIVENCIA ESCOLAR",
      email: "convivencia@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Encargado de promover y gestionar la sana convivencia en la comunidad educativa.",
    },
    {
      name: "VÍCTOR ALFONSO GAYOSO LILLO",
      position: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Apoyo técnico pedagógico en la implementación curricular.",
    },
    {
      name: "JOSELYN PATRICIA GONZÁLEZ VEGA",
      position: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Colabora en la gestión técnico-pedagógica del establecimiento.",
    },
    {
      name: "FERNANDA DANILA ARAYA MONTECINOS",
      position: "COORDINADORA PIE",
      email: "faraya@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Coordinadora del Programa de Integración Escolar (PIE).",
    },
    {
      name: "TERESITA DEL CARMEN HUICHAÑIR CATALÁN",
      position: "COORDINADORA PIE",
      email: "thuichanir@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Apoyo en la coordinación del Programa de Integración Escolar.",
    },
    {
      name: "ALEJANDRO MAURICIO REBOLLEDO LÓPEZ",
      position: "COORDINADOR EXTRA ESCOLAR",
      email: "arebolledo@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      description: "Responsable de la coordinación de actividades extracurriculares.",
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

                <div className="grid md:grid-cols-2 gap-6">
                  {directiveTeam.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-24 h-30 object-cover rounded-lg shadow-sm"
                        />
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-slate-800 leading-tight">{member.name}</h3>
                          <p className="text-[#039b9e] font-medium text-sm">{member.position}</p>
                          <p className="text-slate-600 text-xs leading-relaxed">{member.description}</p>
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                          <Mail className="h-4 w-4 text-[#039b9e]" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-xs text-slate-600 hover:text-[#039b9e] transition-colors break-all"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Nuestro Equipo de Liderazgo</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro equipo directivo está conformado por profesionales experimentados que lideran los diferentes
                    aspectos de la gestión educativa, trabajando de manera coordinada para asegurar la calidad de la
                    educación que brindamos a nuestros estudiantes. Cada miembro aporta su experiencia y dedicación para
                    el desarrollo integral de nuestra comunidad educativa.
                  </p>
                </div>

                {/* Organization Areas */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h4 className="font-semibold text-slate-800 mb-3 text-center">Gestión Directiva</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Dirección General</li>
                      <li>• Inspectoría General</li>
                      <li>• Coordinaciones</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h4 className="font-semibold text-slate-800 mb-3 text-center">Gestión Pedagógica</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Unidad Técnica Pedagógica</li>
                      <li>• Coordinación PIE</li>
                      <li>• Informática Educativa</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <h4 className="font-semibold text-slate-800 mb-3 text-center">Gestión de Convivencia</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Convivencia Escolar</li>
                      <li>• Actividades Extra Escolares</li>
                      <li>• Apoyo Estudiantil</li>
                    </ul>
                  </div>
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
