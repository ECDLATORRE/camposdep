import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Star } from "lucide-react"

export default function EncuestaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Encuesta de Satisfacción</h1>

                <div className="space-y-8">
                  <div className="bg-[#039b9e]/10 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MessageSquare className="h-8 w-8 text-[#039b9e]" />
                      <h2 className="text-2xl font-bold text-slate-800">Tu Opinión es Importante</h2>
                    </div>
                    <p className="text-slate-700">
                      Ayúdanos a mejorar nuestros servicios educativos compartiendo tu experiencia y sugerencias.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo</label>
                        <Input placeholder="Tu nombre completo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <Input type="email" placeholder="tu@email.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Relación con la Escuela</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu relación con la escuela" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apoderado">Apoderado/a</SelectItem>
                          <SelectItem value="estudiante">Estudiante</SelectItem>
                          <SelectItem value="exalumno">Ex-alumno/a</SelectItem>
                          <SelectItem value="docente">Docente</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-4">
                        Califica tu satisfacción general con la escuela
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            className="p-2 hover:bg-[#039b9e]/10 rounded-lg transition-colors"
                          >
                            <Star className="h-8 w-8 text-gray-300 hover:text-yellow-400" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        ¿Qué aspectos destacas positivamente de la escuela?
                      </label>
                      <Textarea
                        rows={4}
                        placeholder="Comparte los aspectos que más valoras de nuestra institución..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        ¿Qué aspectos crees que podríamos mejorar?
                      </label>
                      <Textarea rows={4} placeholder="Comparte tus sugerencias para mejorar nuestros servicios..." />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        ¿Recomendarías nuestra escuela a otros?
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="definitivamente-si">Definitivamente sí</SelectItem>
                          <SelectItem value="probablemente-si">Probablemente sí</SelectItem>
                          <SelectItem value="no-estoy-seguro">No estoy seguro/a</SelectItem>
                          <SelectItem value="probablemente-no">Probablemente no</SelectItem>
                          <SelectItem value="definitivamente-no">Definitivamente no</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="bg-[#039b9e] hover:bg-[#028a8e] w-full">Enviar Encuesta</Button>
                  </form>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Confidencialidad</h4>
                    <p className="text-slate-700 text-sm">
                      Todas las respuestas son confidenciales y serán utilizadas únicamente para mejorar nuestros
                      servicios educativos. Agradecemos tu tiempo y honestidad al completar esta encuesta.
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
