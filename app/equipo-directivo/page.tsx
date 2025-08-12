import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail, Users, Target, Settings, Shield } from "lucide-react"

export default function EquipoDirectivoPage() {
  const equipoDirectivo = [
    {
      name: "LAYO GÓMEZ ACUÑA",
      position: "DIRECTOR",
      email: "cdeportivos@temuco.cl",
      image: "/images/director-layo-gomez.jpg",
      icon: <Users className="h-6 w-6 text-[#039b9e]" />,
      description: "Líder del establecimiento educacional",
    },
    {
      name: "CLAUDIA LORETO FIGUEROA VEGA",
      position: "JEFA UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Target className="h-6 w-6 text-[#039b9e]" />,
      description: "Responsable del área técnico pedagógica",
    },
    {
      name: "VIVIANA CECILIA DELGADO HERMOSILLA",
      position: "INSPECTORA GENERAL",
      email: "vdelgadohermosilla@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Shield className="h-6 w-6 text-[#039b9e]" />,
      description: "Encargada de la disciplina y convivencia",
    },
    {
      name: "DANIEL ALEJANDRO AGUILERA VILLANUEVA",
      position: "INSPECTOR GENERAL",
      email: "daguilera@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Shield className="h-6 w-6 text-[#039b9e]" />,
      description: "Apoyo en inspectoría general",
    },
    {
      name: "DAVID HERNÁN NAVARRETE VELOSO",
      position: "INSPECTOR GENERAL",
      email: "dnavarrete@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Shield className="h-6 w-6 text-[#039b9e]" />,
      description: "Apoyo en inspectoría general",
    },
  ]

  const coordinadores = [
    {
      name: "RODRIGO GERARDO CUEVAS MELLA",
      position: "COORDINADOR INFORMÁTICA EDUCATIVA",
      email: "rodrigo.cuevas@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Settings className="h-6 w-6 text-blue-600" />,
      description: "Tecnología educativa y recursos digitales",
    },
    {
      name: "IGNACIO ANDRÉS VÁSQUEZ FIGUEROA",
      position: "COORDINADOR CONVIVENCIA ESCOLAR",
      email: "convivencia@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Users className="h-6 w-6 text-green-600" />,
      description: "Promoción de la sana convivencia",
    },
    {
      name: "VÍCTOR ALFONSO GAYOSO LILLO",
      position: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Target className="h-6 w-6 text-purple-600" />,
      description: "Apoyo técnico pedagógico",
    },
    {
      name: "JOSELYN PATRICIA GONZÁLEZ VEGA",
      position: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Target className="h-6 w-6 text-purple-600" />,
      description: "Apoyo técnico pedagógico",
    },
    {
      name: "FERNANDA DANILA ARAYA MONTECINOS",
      position: "COORDINADORA PIE",
      email: "faraya@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Users className="h-6 w-6 text-orange-600" />,
      description: "Programa de Integración Escolar",
    },
    {
      name: "TERESITA DEL CARMEN HUICHAÑIR CATALÁN",
      position: "COORDINADORA PIE",
      email: "thuichanir@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Users className="h-6 w-6 text-orange-600" />,
      description: "Programa de Integración Escolar",
    },
    {
      name: "ALEJANDRO MAURICIO REBOLLEDO LÓPEZ",
      position: "COORDINADOR EXTRA ESCOLAR",
      email: "arebolledo@camposdeportivos-temuco.cl",
      image: "/placeholder.svg?height=200&width=150",
      icon: <Settings className="h-6 w-6 text-red-600" />,
      description: "Actividades extraprogramáticas",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Equipo Directivo</h1>

                {/* Equipo Directivo */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <Users className="h-6 w-6 text-[#039b9e] mr-2" />
                    Dirección y Gestión
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipoDirectivo.map((member, index) => (
                      <div
                        key={index}
                        className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                      >
                        <div className="relative mb-4">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-24 h-30 object-cover rounded-lg mx-auto shadow-sm"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                            {member.icon}
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-slate-800 mb-2 leading-tight">{member.name}</h3>
                        <p className="text-[#039b9e] font-medium mb-2 text-xs">{member.position}</p>
                        <p className="text-xs text-slate-600 mb-3">{member.description}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="h-3 w-3 text-[#039b9e]" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-xs text-slate-600 hover:text-[#039b9e] transition-colors break-all"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coordinadores */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-2" />
                    Coordinaciones
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coordinadores.map((coordinator, index) => (
                      <div
                        key={index}
                        className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                      >
                        <div className="relative mb-4">
                          <img
                            src={coordinator.image || "/placeholder.svg"}
                            alt={coordinator.name}
                            className="w-24 h-30 object-cover rounded-lg mx-auto shadow-sm"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                            {coordinator.icon}
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-slate-800 mb-2 leading-tight">{coordinator.name}</h3>
                        <p className="text-blue-600 font-medium mb-2 text-xs">{coordinator.position}</p>
                        <p className="text-xs text-slate-600 mb-3">{coordinator.description}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="h-3 w-3 text-blue-600" />
                          <a
                            href={`mailto:${coordinator.email}`}
                            className="text-xs text-slate-600 hover:text-blue-600 transition-colors break-all"
                          >
                            {coordinator.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Trabajo en Equipo</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro equipo directivo y coordinadores trabajan de manera colaborativa para asegurar la calidad
                    educativa y el bienestar de toda la comunidad escolar. Cada área de coordinación aporta su
                    especialidad para el desarrollo integral de nuestros estudiantes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />

            {/* Contact Summary */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Contactos Principales</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-[#039b9e]" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-slate-600">cdeportivos@temuco.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-purple-600" />
                    <div>
                      <p className="font-medium">UTP</p>
                      <p className="text-slate-600">utp@camposdeportivos-temuco.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="font-medium">Convivencia</p>
                      <p className="text-slate-600">convivencia@camposdeportivos-temuco.cl</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
