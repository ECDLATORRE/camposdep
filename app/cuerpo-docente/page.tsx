import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail, Users, Target, BookOpen } from "lucide-react"

export default function CuerpoDocentePage() {
  const equipoDirectivoDocente = [
    {
      name: "LAYO GÓMEZ ACUÑA",
      subject: "DIRECTOR",
      email: "cdeportivos@temuco.cl",
      category: "Dirección",
      icon: <Users className="h-4 w-4 text-[#039b9e]" />,
    },
    {
      name: "CLAUDIA LORETO FIGUEROA VEGA",
      subject: "JEFA UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      category: "Gestión Pedagógica",
      icon: <Target className="h-4 w-4 text-purple-600" />,
    },
    {
      name: "VÍCTOR ALFONSO GAYOSO LILLO",
      subject: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      category: "Gestión Pedagógica",
      icon: <Target className="h-4 w-4 text-purple-600" />,
    },
    {
      name: "JOSELYN PATRICIA GONZÁLEZ VEGA",
      subject: "UNIDAD TÉCNICA PEDAGÓGICA",
      email: "utp@camposdeportivos-temuco.cl",
      category: "Gestión Pedagógica",
      icon: <Target className="h-4 w-4 text-purple-600" />,
    },
  ]

  const coordinadores = [
    {
      name: "RODRIGO GERARDO CUEVAS MELLA",
      subject: "COORDINADOR INFORMÁTICA EDUCATIVA",
      email: "rodrigo.cuevas@camposdeportivos-temuco.cl",
      category: "Tecnología Educativa",
      icon: <BookOpen className="h-4 w-4 text-blue-600" />,
    },
    {
      name: "IGNACIO ANDRÉS VÁSQUEZ FIGUEROA",
      subject: "COORDINADOR CONVIVENCIA ESCOLAR",
      email: "convivencia@camposdeportivos-temuco.cl",
      category: "Convivencia Escolar",
      icon: <Users className="h-4 w-4 text-green-600" />,
    },
    {
      name: "FERNANDA DANILA ARAYA MONTECINOS",
      subject: "COORDINADORA PIE",
      email: "faraya@camposdeportivos-temuco.cl",
      category: "Educación Especial",
      icon: <Users className="h-4 w-4 text-orange-600" />,
    },
    {
      name: "TERESITA DEL CARMEN HUICHAÑIR CATALÁN",
      subject: "COORDINADORA PIE",
      email: "thuichanir@camposdeportivos-temuco.cl",
      category: "Educación Especial",
      icon: <Users className="h-4 w-4 text-orange-600" />,
    },
    {
      name: "ALEJANDRO MAURICIO REBOLLEDO LÓPEZ",
      subject: "COORDINADOR EXTRA ESCOLAR",
      email: "arebolledo@camposdeportivos-temuco.cl",
      category: "Actividades Extraprogramáticas",
      icon: <BookOpen className="h-4 w-4 text-red-600" />,
    },
  ]

  const docentes = [
    {
      name: "CAMILA ALEJANDRA TORRES MANCILLA",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "ctorres.mancilla@camposdeportivos-temuco.cl",
      category: "Educación Especial",
      icon: <BookOpen className="h-4 w-4 text-orange-600" />,
    },
    {
      name: "MADELIN ROSSI ÁLVAREZ URENCIRA",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "malvarez@camposdeportivos-temuco.cl",
      category: "Educación Física",
      icon: <BookOpen className="h-4 w-4 text-green-600" />,
    },
    {
      name: "CRISTIAN RODRIGO CATAMALI VALDERRAMA",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "ccatamali@camposdeportivos-temuco.cl",
      category: "Educación Física",
      icon: <BookOpen className="h-4 w-4 text-green-600" />,
    },
    {
      name: "JUAN PABLO QUIROGA GALLARDO",
      subject: "PROF. CIENCIAS",
      email: "jquiroga@camposdeportivos-temuco.cl",
      category: "Ciencias",
      icon: <BookOpen className="h-4 w-4 text-blue-600" />,
    },
    {
      name: "MARÍA JOSÉ NAVARRO BURGEMEISTER",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "mnavarro@camposdeportivos-temuco.cl",
      category: "Educación Especial",
      icon: <BookOpen className="h-4 w-4 text-orange-600" />,
    },
    {
      name: "SANDRA ELIZABETH TORRES BUSTAMANTE",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "storres@camposdeportivos-temuco.cl",
      category: "Educación Especial",
      icon: <BookOpen className="h-4 w-4 text-orange-600" />,
    },
  ]

  const allStaff = [...equipoDirectivoDocente, ...coordinadores, ...docentes]

  const categories = [
    { name: "Dirección", color: "bg-[#039b9e]", count: allStaff.filter((s) => s.category === "Dirección").length },
    {
      name: "Gestión Pedagógica",
      color: "bg-purple-600",
      count: allStaff.filter((s) => s.category === "Gestión Pedagógica").length,
    },
    {
      name: "Educación Especial",
      color: "bg-orange-600",
      count: allStaff.filter((s) => s.category === "Educación Especial").length,
    },
    {
      name: "Educación Física",
      color: "bg-green-600",
      count: allStaff.filter((s) => s.category === "Educación Física").length,
    },
    { name: "Ciencias", color: "bg-blue-600", count: allStaff.filter((s) => s.category === "Ciencias").length },
    {
      name: "Convivencia Escolar",
      color: "bg-green-600",
      count: allStaff.filter((s) => s.category === "Convivencia Escolar").length,
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Cuerpo Docente</h1>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {categories.map((category, index) => (
                    <div key={index} className="text-center bg-white rounded-lg p-4 shadow-sm border">
                      <div className={`w-8 h-8 ${category.color} rounded-full mx-auto mb-2`}></div>
                      <div className="text-2xl font-bold text-slate-800">{category.count}</div>
                      <div className="text-xs text-slate-600">{category.name}</div>
                    </div>
                  ))}
                </div>

                {/* All Staff */}
                <div className="grid gap-4">
                  {allStaff.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">{teacher.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-slate-800">{teacher.name}</h3>
                          <p className="text-[#039b9e] font-medium text-xs">{teacher.subject}</p>
                          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mt-1">
                            {teacher.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-[#039b9e]" />
                        <a
                          href={`mailto:${teacher.email}`}
                          className="text-xs text-slate-600 hover:text-[#039b9e] transition-colors break-all max-w-xs"
                        >
                          {teacher.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Compromiso Educativo</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro cuerpo docente está conformado por profesionales comprometidos con la excelencia educativa,
                    especializados en diferentes áreas del conocimiento y dedicados a la formación integral de nuestros
                    estudiantes. Trabajamos en equipo para brindar una educación de calidad que prepare a nuestros
                    alumnos para los desafíos del siglo XXI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />

            {/* Quick Stats */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Resumen del Equipo</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Total Profesionales</span>
                    <span className="font-bold text-[#039b9e]">{allStaff.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Áreas Especializadas</span>
                    <span className="font-bold text-[#039b9e]">{categories.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Coordinaciones</span>
                    <span className="font-bold text-[#039b9e]">{coordinadores.length}</span>
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
