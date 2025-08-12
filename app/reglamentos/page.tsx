import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { Download, FileText, Users, AlertTriangle, BookOpen } from "lucide-react"

export default function ReglamentosPage() {
  const regulations = [
    {
      title: "REGLAMENTO DE EVALUACIÓN, DECRETO 67",
      description:
        'El presente Reglamento interno de Evaluación, Calificación y Promoción Escolar, en adelante indistintamente "el Reglamento", es el instrumento mediante el cual, la Escuela Campos Deportivos, declara los procedimientos para la evaluación periódica de los logros y aprendizajes de las y los estudiantes.',
      icon: <FileText className="h-12 w-12 text-[#039b9e]" />,
      downloadText: "REGLAMENTO EVALUACIÓN 2025",
      downloadLink: "/pdf/reglamento-evaluacion-2025.pdf", // Agregado enlace de descarga
    },
    {
      title: "REGLAMENTO INTERNO Y MANUAL DE CONVIVENCIA ESCOLAR",
      description:
        "La convivencia escolar consiste en algo más que en cumplir las normas de los reglamentos de convivencia; es una experiencia que nos abre al aprendizaje sobre los modos de convivir. Desde esta perspectiva, la Política Nacional de Convivencia Escolar orienta al sistema escolar en marco conceptual y pedagógico que orienta, al interior de los establecimientos educacionales.",
      icon: <Users className="h-12 w-12 text-[#039b9e]" />,
      downloadText: "Reglamento Interno 2025",
      downloadLink: "/pdf/reglamento-interno-2025.pdf", // Agregado enlace de descarga
    },
    {
      title: "PROTOCOLO DE SUSPENSIÓN, CANCELACIÓN DE MATRÍCULA Y EXPULSIÓN",
      description:
        "La ley de inclusión N° 20.845 estableció un procedimiento común aplicable tanto a la medida disciplinaria de expulsión como a la cancelación de matrícula, el que debe ser aplicado cuando se trate de una conducta que afecte gravemente la convivencia escolar.",
      icon: <AlertTriangle className="h-12 w-12 text-[#039b9e]" />,
      downloadText: "PROTOCOLO DE SUSPENSIÓN, CANCELACIÓN DE MATRÍCULA Y EXPULSIÓN 2025",
      downloadLink: "/pdf/protocolo-suspension-cancelacion-expulsion-2025.pdf", // Agregado enlace de descarga
    },
    {
      title: "REGLAMENTO DE ESTUDIANTES EN PRÁCTICA",
      description:
        "El presente reglamento establece las normas y directrices que deben cumplir los estudiantes en práctica inicial, intermedia y final de diversas carreras de educación que realizan su práctica en la Escuela Campos Deportivos de la comuna de Temuco.",
      icon: <BookOpen className="h-12 w-12 text-[#039b9e]" />,
      downloadText: "REGLAMENTO ESTUDIANTES EN PRÁCTICA",
      downloadLink: "/pdf/reglamento-estudiantes-practica.pdf", // Agregado enlace de descarga
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Reglamentos y Protocolos</h1>

                <div className="space-y-8">
                  {regulations.map((regulation, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">{regulation.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-4">{regulation.title}</h3>
                          <p className="text-slate-700 leading-relaxed mb-6">{regulation.description}</p>
                          <Button
                            className="bg-[#039b9e] hover:bg-[#028a8e]"
                            as="a"
                            href={regulation.downloadLink}
                            target="_blank"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Descargar: {regulation.downloadText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Todos los reglamentos y protocolos están disponibles para consulta y descarga. Estos documentos
                    establecen las normas y procedimientos que rigen la vida escolar y garantizan un ambiente educativo
                    seguro y propicio para el aprendizaje.
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
