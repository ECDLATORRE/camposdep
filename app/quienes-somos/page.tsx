import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"

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
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Escuela Municipal Campos Deportivos"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    La Escuela Municipal D-508 Campos Deportivos se encuentra ubicada en el sector Poniente de la ciudad
                    de Temuco, IV Región de la Araucanía, en la población del mismo nombre.
                  </p>

                  <p>
                    Desde su creación, el 14 de Mayo de 1998, ha experimentado un progresivo aumento de matrícula debido
                    a la aceptación y valoración de su labor por parte de la comunidad circundante. Es así como su
                    cobertura trasciende su localización geográfica, atendiendo una población escolar cercana a los 390
                    alumnos y alumnas distribuidos en 23 cursos de Transición a Octavo año básico.
                  </p>

                  <p>
                    Sus docentes, están comprometidos y comprometidas con la formación integral de todos los alumnos y
                    alumnas; enfatizando especialmente lo valórico, el bienestar físico y psicológico, para lograr el
                    vuelo académico y personal.
                  </p>

                  <p>
                    La calidad de enseñanza que entrega la Escuela Municipal Campos Deportivos, puede observarse en el
                    gran número de profesionales de nivel universitario que han egresado de sus aulas.
                  </p>

                  <p>
                    Uno de los pilares fundamentales para este establecimiento es la familia, la cual es apoyada y
                    acompañada constantemente por un equipo interdisciplinario de profesionales altamente calificados, a
                    través de acciones de carácter orientadoras y sociales en post del crecimiento integral del o la
                    estudiante lo que permite a los padres identificarse con su escuela, la cual entrega un ambiente
                    óptimo para el crecimiento personal y académico de todos.
                  </p>

                  <p>
                    Su compromiso actual es ofrecer una educación que oriente la formación valórica y desarrolle
                    habilidades académicas acorde a los tiempos actuales, contribuyendo así a forjar un mundo más justo,
                    solidario y humano, capacitándolos para responder a los requerimientos del siglo XXI.
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
