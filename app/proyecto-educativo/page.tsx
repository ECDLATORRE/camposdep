import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ProyectoEducativoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Proyecto Educativo</h1>

                {/* School Image */}
                <div className="mb-8">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Escuela Campos Deportivos"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    El Proyecto educativo institucional (P.E.I.) de la Escuela Campos Deportivos tiene como propósito
                    establecer los principios fundamentales, valóricos y pedagógicos y curriculares que orientan la
                    labor educativa del establecimiento escolar.
                  </p>

                  <p>
                    Nuestra institución educativa presenta una organización y estructura de acuerdo a los planes y
                    programas establecidos por el Ministerio de Educación, desarrollando una metodología de aprendizaje
                    a nivel integral, generando un impacto positivo en la calidad de vida de sus alumnos/as, familias y
                    comunidad educativa.
                  </p>

                  <p>
                    La educación chilena está en constante cambio, lo que demanda nuevas formas de enseñar y aprender en
                    contexto de igualdad y calidad. Por consiguiente, el actual contexto educativo debe verse como una
                    posibilidad cierta de generar una amplia participación y compromiso de todos los actores educativos.
                    Aprendizaje más que enseñanza, conocimiento contextualizado, aprender a aprender, competencias y
                    habilidades para el Siglo XXI.
                  </p>

                  <p>
                    La gestión educacional a desarrollar tiene su fundamento en lo que declara la nueva Ley General de
                    Educación que estructura y define el tipo de educación que requiere nuestro país, estableciendo con
                    el Marco de la Buena Dirección y Marco para la Buena Enseñanza.
                  </p>

                  <p>
                    Nuestro Proyecto Educativo busca crear un proceso educacional formal, que determine los objetivos,
                    contenidos y metodología de enseñanza, orientando las decisiones técnico pedagógicas del
                    establecimiento. Asimismo, busca la incorporación en la enseñanza y aprendizaje de metodologías
                    innovadoras con apoyo directo de las TICs como herramientas movilizadoras de aprendizajes para el
                    desarrollo de competencias y habilidades para el Siglo XXI dentro de las cuales enfatizamos las del
                    pensamiento crítico y responsabilidad personal y social.
                  </p>

                  {/* Download Section */}
                  <div className="bg-teal-50 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Descargar Documento Completo</h3>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Download className="mr-2 h-4 w-4" />
                      PROYECTO EDUCATIVO CAMPOS DEPORTIVOS 2025
                    </Button>
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
