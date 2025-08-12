import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import Image from "next/image"

export default function OrganigramaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Organigrama</h1>

                {/* Organigrama Image */}
                <div className="mb-8">
                  <Image
                    src="/images/organigrama-oficial.png"
                    width={800}
                    height={600}
                    alt="Organigrama Oficial Escuela Municipal Campos Deportivos"
                    className="w-full h-auto rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300"
                  />
                </div>

                <div className="space-y-6">
                  <div className="bg-[#039b9e]/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Estructura Organizacional</h3>
                    <p className="text-slate-700 leading-relaxed">
                      El organigrama institucional muestra la estructura organizacional de la Escuela Municipal Campos
                      Deportivos, definiendo las líneas de autoridad, responsabilidad y comunicación entre los
                      diferentes estamentos que conforman nuestra comunidad educativa.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h4 className="font-semibold text-slate-800 mb-3">Nivel Directivo</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Director</li>
                        <li>• Consejo Escolar</li>
                        <li>• Equipo de Gestión</li>
                        <li>• Centro de Padres</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h4 className="font-semibold text-slate-800 mb-3">Nivel Técnico Pedagógico</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Unidad Técnico Pedagógica</li>
                        <li>• Coordinaciones</li>
                        <li>• Profesionales de Apoyo</li>
                        <li>• Docentes</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h4 className="font-semibold text-slate-800 mb-3">Nivel de Apoyo</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Inspectoría General</li>
                        <li>• Secretaría</li>
                        <li>• Asistentes de Educación</li>
                        <li>• Personal de Servicio</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h4 className="font-semibold text-slate-800 mb-3">Comunidad Educativa</h4>
                      <ul className="text-slate-700 text-sm space-y-1">
                        <li>• Estudiantes</li>
                        <li>• Padres y Apoderados</li>
                        <li>• Centro de Estudiantes</li>
                        <li>• Comunidad Local</li>
                      </ul>
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
