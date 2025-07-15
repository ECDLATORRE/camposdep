import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import {
  Download,
  Target,
  BookOpen,
  Users,
  Lightbulb,
  Shield,
  Leaf,
  Activity,
  Heart,
  Calculator,
  Book,
  Microscope,
  Utensils,
  GraduationCap,
  Globe,
} from "lucide-react"

export default function PlanesPage() {
  const plans = [
    {
      title: "PROYECTO PEDAGÓGICO JORNADA ESCOLAR COMPLETA",
      description:
        "Proyecto que organiza y estructura las actividades pedagógicas durante la jornada escolar completa.",
      icon: <Target className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "JEC CAMPOS DEPORTIVOS 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN EXTRAESCOLAR",
      description:
        "Actividades complementarias que enriquecen la formación integral fuera del horario académico regular.",
      icon: <Activity className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN EXTRAESCOLAR 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE ACOGIDA Y ESTUDIANTES MIGRANTES",
      description:
        "Estrategias para facilitar la integración y adaptación de estudiantes migrantes a la comunidad educativa.",
      icon: <Globe className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN-DE-ACOGIDA-Y-ESTUDIANTES-MIGRANTES-2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE APOYO A LA INCLUSIÓN",
      description:
        "Estrategias para promover la inclusión educativa y atender la diversidad de necesidades estudiantiles.",
      icon: <Lightbulb className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE APOYO A LA INCLUSIÓN 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE FORMACIÓN CIUDADANA",
      description:
        "Acciones que fomentan la participación estudiantil en temas de interés público y desarrollo ciudadano.",
      icon: <Users className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE FORMACIÓN CIUDADANA 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE GESTIÓN DE CONVIVENCIA ESCOLAR",
      description: "Acciones y estrategias para promover y desarrollar la convivencia escolar en el establecimiento.",
      icon: <BookOpen className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE GESTIÓN DE CONVIVENCIA ESCOLAR 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE MEDIO AMBIENTE",
      description: "Iniciativas orientadas a promover la conciencia ambiental y el cuidado del medio ambiente.",
      icon: <Leaf className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE MEDIO AMBIENTE 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE MOVIMIENTO Y APRENDIZAJE",
      description:
        "Estrategias que integran la actividad física como herramienta para potenciar el aprendizaje integral.",
      icon: <Activity className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE MOVIMIENTO Y APRENDIZAJE 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE SEGURIDAD CIUDADANA PISE",
      description:
        "Plan Integral de Seguridad Escolar con protocolos para garantizar la seguridad de la comunidad educativa.",
      icon: <Shield className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE SEGUIDAD ESCOLAR PISE 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE SEXUALIDAD",
      description:
        "Programa de educación sexual integral que promueve el desarrollo de una sexualidad responsable y saludable.",
      icon: <Heart className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE SEXUALIDAD 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN FORMACIÓN LOCAL DESARROLLO PROFESIONAL DOCENTE",
      description:
        "Programa de capacitación y desarrollo profesional continuo para el cuerpo docente del establecimiento.",
      icon: <GraduationCap className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN FORMACIÓN DESARROLLO PROFESIONAL DOCENTE 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE ALIMENTACIÓN ESCOLAR",
      description:
        "Programa que asegura una alimentación nutritiva y balanceada para todos los estudiantes del establecimiento.",
      icon: <Utensils className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN DE ALIMENTACIÓN ESCOLAR 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE MATEMÁTICA",
      description:
        "Estrategias pedagógicas para mejorar los aprendizajes en matemáticas y desarrollar el pensamiento lógico.",
      icon: <Calculator className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN MATEMÁTICA ESCUELA CAMPOS DEPORTIVOS 2025",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN LECTOR",
      description:
        "Programa integral para fomentar el hábito de la lectura y desarrollar competencias lectoras en todos los niveles.",
      icon: <Book className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN LECTOR ESCUELA CAMPOS DEPORTIVOS 2025 EDITADO",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PLAN DE CIENCIAS NATURALES",
      description:
        "Estrategias metodológicas para potenciar el aprendizaje de las ciencias y desarrollar pensamiento científico.",
      icon: <Microscope className="h-8 w-8 text-[#039b9e]" />,
      downloadText: "PLAN CIENCIAS NATURALES",
      image: "/placeholder.svg?height=200&width=300",
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Planes</h1>

                <div className="grid gap-6">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="grid md:grid-cols-3 gap-4 items-start">
                        {/* Plan Image */}
                        <div className="md:col-span-1">
                          <img
                            src={plan.image || "/placeholder.svg"}
                            alt={plan.title}
                            className="w-full h-32 object-cover rounded-lg shadow-sm"
                          />
                        </div>

                        {/* Plan Content */}
                        <div className="md:col-span-2 space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">{plan.icon}</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight break-words">
                                {plan.title}
                              </h3>
                              <p className="text-sm text-slate-700 leading-relaxed mb-3 break-words">
                                {plan.description}
                              </p>
                              <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e] text-xs">
                                <Download className="mr-1 h-3 w-3" />
                                <span className="break-words">Descargar: {plan.downloadText}</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Todos nuestros planes institucionales están disponibles para consulta y descarga. Estos documentos
                    reflejan nuestro compromiso con la mejora continua de la calidad educativa y el desarrollo integral
                    de nuestros estudiantes, estableciendo objetivos claros y estrategias específicas para alcanzar las
                    metas propuestas.
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
