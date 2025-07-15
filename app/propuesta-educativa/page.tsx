import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { CheckCircle, Users, Target, Lightbulb, Heart } from "lucide-react"

export default function PropuestaEducativaPage() {
  const principles = [
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Universalidad y educación permanente",
      description: "La educación debe estar al alcance de todas las personas a lo largo de toda la vida.",
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Calidad de la educación",
      description:
        "La educación debe propender a asegurar que todos los alumnos y alumnas, independientemente de sus condiciones y circunstancias.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Equidad del sistema educativo",
      description: "El sistema debe propender a asegurar que todos los estudiantes tengan las mismas oportunidades.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "Autonomía",
      description: "El sistema se basa en el respeto y fomento de la autonomía de los establecimientos educativos.",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Diversidad",
      description:
        "El sistema debe promover y respetar la diversidad de procesos y proyectos educativos institucionales.",
    },
  ]

  const skills = [
    "Responsabilidad Personal y Social",
    "Pensamiento crítico",
    "Responsabilidad",
    "Participación",
    "Flexibilidad y adaptabilidad",
    "Transparencia",
    "Integración",
    "Sustentabilidad",
    "Interculturalidad",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Propuesta Educativa</h1>

              {/* Educational Principles */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Principios Educativos</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  El sistema educativo chileno se construye sobre la base de los derechos garantizados en la
                  Constitución, así como en los tratados internacionales ratificados por Chile y que se encuentren
                  vigentes, y, en especial, del derecho a la educación y la libertad de enseñanza.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">Se inspira, además, en los siguientes principios:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {principles.map((principle, index) => (
                    <Card key={index} className="border-l-4 border-l-teal-500">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{principle.icon}</div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-2">{principle.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Habilidades que se trabajan en nuestra escuela
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educational Seals */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Sellos Educativos</h2>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Los Sellos Educativos corresponden a aspectos intrínsecos y distintivos de la formación de los
                    estudiantes por parte de la Escuela Campos Deportivos de Temuco. En este sentido, la institución se
                    destaca por:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>
                        La actividad física y el deporte, como medio para fortalecer capacidades cognitivas, físicas y
                        sociales en los estudiantes.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>El fomento en el respeto al medioambiente y la educación ambiental.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
