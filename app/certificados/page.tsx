import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Award } from "lucide-react"

export default function CertificadosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Certificados</h1>

                <div className="space-y-8">
                  {/* Certificate Request Form */}
                  <div className="bg-[#039b9e]/10 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Award className="h-8 w-8 text-[#039b9e]" />
                      <h2 className="text-2xl font-bold text-slate-800">Solicitar Certificado</h2>
                    </div>

                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">RUT del Estudiante</label>
                          <Input placeholder="12.345.678-9" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Año de Egreso</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar año" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="2020">2020</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Certificado</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar tipo de certificado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="concentracion">Certificado de Concentración de Notas</SelectItem>
                            <SelectItem value="alumno-regular">Certificado de Alumno Regular</SelectItem>
                            <SelectItem value="conducta">Certificado de Conducta</SelectItem>
                            <SelectItem value="egreso">Certificado de Egreso</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="bg-[#039b9e] hover:bg-[#028a8e] w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Solicitar Certificado
                      </Button>
                    </form>
                  </div>

                  {/* Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800">Información Importante</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-l-4 border-l-[#039b9e]">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <FileText className="h-6 w-6 text-[#039b9e] mt-1" />
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Requisitos</h4>
                              <ul className="text-slate-600 text-sm space-y-1">
                                <li>• RUT del estudiante</li>
                                <li>• Año de egreso o último año cursado</li>
                                <li>• Especificar tipo de certificado requerido</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-l-4 border-l-[#039b9e]">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Award className="h-6 w-6 text-[#039b9e] mt-1" />
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-2">Tiempo de Entrega</h4>
                              <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Certificados simples: 3-5 días hábiles</li>
                                <li>• Certificados con legalización: 7-10 días hábiles</li>
                                <li>• Retiro en secretaría del establecimiento</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Nota Importante</h4>
                    <p className="text-slate-700 text-sm">
                      Los certificados deben ser retirados personalmente por el estudiante (mayor de edad) o por el
                      apoderado (en caso de estudiantes menores de edad). Se requiere presentar cédula de identidad
                      vigente.
                    </p>
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
