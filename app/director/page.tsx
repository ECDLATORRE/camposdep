import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function DirectorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Director</h1>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Director Photo */}
                  <div className="text-center">
                    <Image
                      src="/images/director-escuela.jpg"
                      width={250}
                      height={300}
                      alt="Profesor Layo Gómez Acuña"
                      className="w-full max-w-xs mx-auto rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-xl font-bold text-slate-800">Profesor Layo Gómez Acuña</h3>
                    <p className="text-[#039b9e] font-medium">DIRECTOR</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Mail className="h-4 w-4 text-[#039b9e]" />
                      <span className="text-sm text-slate-600">cdeportivos@temuco.cl</span>
                    </div>
                  </div>

                  {/* Director Bio */}
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      El profesional fue elegido tras participar del concurso de alta dirección pública que inició en el
                      mes de noviembre y que concluyó los primeros días de mayo.
                    </p>

                    <p>
                      Layo Gómez Acuña, es el nuevo Director de la Escuela Municipal Campos Deportivos, quien a partir
                      de la tercera semana de mayo de 2018 asumió sus labores como líder del establecimiento municipal.
                    </p>

                    <p>
                      Sobre su incorporación, comentó que, "espero convertirme en uno más de todos los integrantes, para
                      que podamos formar una comunidad de aprendizaje, donde todos estén en este importante proceso de
                      aprender a aprender y estar abiertos a las nuevas ideas para ajustarnos a las necesidades de los
                      estudiantes y de la comunidad en general".
                    </p>

                    <p>
                      Gómez Acuña, es profesor General de Educación Básica de la Universidad de Concepción, es Magíster
                      en "Gestión Escolar" de la Universidad Católica de Temuco. Diplomado en "Gestión y Dirección" de
                      la Universidad de Viña del Mar y Temuco. Diplomado en "Liderazgo Educativo" del "Managing and
                      Leading Education Centers" en la Universidad de Oregon, Estados Unidos.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Con respecto a los desafíos en la Escuela Campos Deportivos, comentó que "tengo estructurar un
                    modelo pedagógico que permita que todos los estudiantes aprendan; que permita solucionar una brecha
                    que se produce en nuestro sistema educativo. La idea es poder acortar esa brecha, para que en la
                    escuela se cumplan los principios de equidad, justicia e igualdad para todos".
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
