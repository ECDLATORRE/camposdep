import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail } from "lucide-react"

export default function CuerpoDocentePage() {
  const teachers = [
    {
      name: "CAMILA ALEJANDRA TORRES MANCILLA",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "ctorres.mancilla@camposdeportivos-temuco.cl",
    },
    {
      name: "MADELIN ROSSI ÁLVAREZ URENCIRA",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "malvarez@camposdeportivos-temuco.cl",
    },
    {
      name: "CRISTIAN RODRIGO CATAMALI VALDERRAMA",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "ccatamali@camposdeportivos-temuco.cl",
    },
    {
      name: "JUAN PABLO QUIROGA GALLARDO",
      subject: "PROF. CIENCIAS",
      email: "jquiroga@camposdeportivos-temuco.cl",
    },
    {
      name: "MARÍA JOSÉ NAVARRO BURGEMEISTER",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "mnavarro@camposdeportivos-temuco.cl",
    },
    {
      name: "SANDRA ELIZABETH TORRES BUSTAMANTE",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "storres@camposdeportivos-temuco.cl",
    },
    // Add more teachers as needed...
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

                <div className="grid gap-6">
                  {teachers.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-lg font-bold text-slate-800">{teacher.name}</h3>
                          <p className="text-[#039b9e] font-medium">{teacher.subject}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#039b9e]" />
                          <a
                            href={`mailto:${teacher.email}`}
                            className="text-sm text-slate-600 hover:text-[#039b9e] transition-colors"
                          >
                            {teacher.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro cuerpo docente está conformado por profesionales comprometidos con la excelencia educativa,
                    especializados en diferentes áreas del conocimiento y dedicados a la formación integral de nuestros
                    estudiantes.
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
