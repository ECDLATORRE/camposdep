import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { Download, Calendar, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TransporteEscolar2023Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {/* Back Button */}
                <Link
                  href="/noticias"
                  className="inline-flex items-center text-[#039b9e] hover:text-[#028a8e] mb-6 transition-colors duration-300"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a Noticias
                </Link>

                {/* Article Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#039b9e] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      02 MAR 2023
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
                      Estudiantes
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                    Estudiantes beneficiarios del transporte escolar año 2023
                  </h1>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <Image
                    src="/images/noticia-transporte.png"
                    width={800}
                    height={500}
                    alt="Información transporte escolar 2023"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Article Content */}
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p className="text-lg font-medium text-slate-800">
                    Estimada comunidad educativa, junto con saludarles y esperando se encuentren en perfectas
                    condiciones, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.
                  </p>

                  <p>
                    Cabe destacar que el proceso de postulación se realizó hasta el día{" "}
                    <strong>30 de diciembre de 2022</strong>, por tanto el proceso de postulación se encuentra cerrado.
                  </p>

                  <p>
                    Por otra parte, comentarles que la definición y adjudicación de los cupos, se desarrolló a través de
                    un proceso acucioso de análisis, respecto al puntaje obtenido por cada uno de los estudiantes en su
                    proceso de postulación.
                  </p>

                  {/* Important Information Box */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-2" />
                      Información importante para padres y apoderados beneficiarios
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>
                        Los días <strong>06 y 07 de marzo</strong>, tendrá lugar el reconocimiento de domicilios de la
                        empresa de transporte adjudicada (Surtrans), lo que se realizará por parte de los conductores y
                        asistentes de los furgones de acuerdo al recorrido existente en razón de los estudiantes
                        favorecidos con el servicio.
                      </p>
                      <p>
                        Tener en cuenta que los horarios de los transportes escolares solo dependen de los conductores y
                        asistentes de furgón, y <strong>NO del establecimiento</strong>.
                      </p>
                    </div>
                  </div>

                  <p>
                    Cualquier duda o consulta respecto del proceso y el comienzo del beneficio, por favor realizarla al
                    correo:{" "}
                    <a
                      href="mailto:convivencia@camposdeportivos-temuco.cl"
                      className="text-[#039b9e] hover:text-[#028a8e] font-medium underline"
                    >
                      convivencia@camposdeportivos-temuco.cl
                    </a>
                  </p>

                  {/* Download Section */}
                  <div className="bg-[#039b9e]/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Descargar Documento</h3>
                    <Button className="bg-[#039b9e] hover:bg-[#028a8e]">
                      <Download className="mr-2 h-4 w-4" />
                      Resultados Postulación Beneficio de Transporte Escolar 2023
                    </Button>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t pt-6 mt-8">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-3">Información de Contacto</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#039b9e]" />
                          <span>convivencia@camposdeportivos-temuco.cl</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#039b9e]" />
                          <span>cdeportivos@temuco.cl</span>
                        </div>
                      </div>
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

            {/* Related News */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Noticias Relacionadas</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="font-medium text-slate-800 text-sm mb-1">
                      Finalización Postulación Beneficio de Transporte Escolar 2025
                    </h4>
                    <p className="text-xs text-slate-600">20 MAR 2025</p>
                  </div>
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="font-medium text-slate-800 text-sm mb-1">Inicio de año escolar 2025</h4>
                    <p className="text-xs text-slate-600">06 MAR 2025</p>
                  </div>
                  <div className="border-b pb-3 last:border-b-0">
                    <h4 className="font-medium text-slate-800 text-sm mb-1">Período de matrículas abiertas</h4>
                    <p className="text-xs text-slate-600">05 MAR 2025</p>
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
