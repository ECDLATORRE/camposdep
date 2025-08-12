import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import Image from "next/image"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">¿Quiénes Somos?</h1>

                {/* School Image */}
                <div className="mb-8">
                  <Image
                    src="/images/patio-escuela-estudiantes.jpg"
                    width={800}
                    height={500}
                    alt="Estudiantes en el patio de la Escuela Municipal Campos Deportivos"
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                  <p className="text-sm text-slate-500 mt-2 text-center italic">
                    Estudiantes realizando actividades deportivas en nuestras instalaciones
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    La Escuela Municipal D-508 Campos Deportivos se encuentra ubicada en el sector Poniente de la ciudad
                    de Temuco, IX Región de la Araucanía, en la población del mismo nombre.
                  </p>

                  <p>
                    Desde su creación, el 14 de Mayo de 1998, ha experimentado un progresivo aumento de matrícula debido
                    a la aceptación y valoración de su labor por parte de la comunidad circundante. Es así como su
                    cobertura trasciende su localización geográfica, atendiendo una población escolar cercana a los 390
                    alumnos y alumnas distribuidos en 23 cursos de Transición a Octavo año básico.
                  </p>

                  <div className="bg-[#039b9e]/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Nuestro Compromiso</h3>
                    <p>
                      Sus docentes, están comprometidos y comprometidas con la formación integral de todos los alumnos y
                      alumnas; enfatizando especialmente lo valórico, el bienestar físico y psicológico, para lograr el
                      vuelo académico y personal.
                    </p>
                  </div>

                  <p>
                    La calidad de enseñanza que entrega la Escuela Municipal Campos Deportivos, puede observarse en el
                    gran número de profesionales de nivel universitario que han egresado de sus aulas.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">La Familia como Pilar Fundamental</h3>
                    <p>
                      Uno de los pilares fundamentales para este establecimiento es la familia, la cual es apoyada y
                      acompañada constantemente por un equipo interdisciplinario de profesionales altamente calificados,
                      a través de acciones de carácter orientadoras y sociales en post del crecimiento integral del o la
                      estudiante lo que permite a los padres identificarse con su escuela, la cual entrega un ambiente
                      óptimo para el crecimiento personal y académico de todos.
                    </p>
                  </div>

                  <p>
                    Su compromiso actual es ofrecer una educación que oriente la formación valórica y desarrolle
                    habilidades académicas acorde a los tiempos actuales, contribuyendo así a forjar un mundo más justo,
                    solidario y humano, capacitándolos para responder a los requerimientos del siglo XXI.
                  </p>

                  {/* Statistics */}
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center bg-white rounded-lg p-6 shadow-sm border">
                      <div className="text-3xl font-bold text-[#039b9e] mb-2">390+</div>
                      <div className="text-sm text-slate-600">Estudiantes</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-6 shadow-sm border">
                      <div className="text-3xl font-bold text-[#039b9e] mb-2">23</div>
                      <div className="text-sm text-slate-600">Cursos</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-6 shadow-sm border">
                      <div className="text-3xl font-bold text-[#039b9e] mb-2">25+</div>
                      <div className="text-sm text-slate-600">Años de experiencia</div>
                    </div>
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
