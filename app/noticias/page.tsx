import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function NoticiasPage() {
  const news = [
    {
      title: "HORARIO 2025",
      image: "/placeholder.svg?height=200&width=300",
      description: "Nuevo horario escolar para el año académico 2025",
    },
    {
      title: "Competencia de Decoración de Salas con motivo de la Fiesta de la Chilenidad y la Interculturalidad",
      image: "/placeholder.svg?height=200&width=300",
      description: "Celebración de nuestras tradiciones y diversidad cultural",
    },
    {
      title: "Bienvenidos a un Nuevo Año Escolar 2025",
      image: "/placeholder.svg?height=200&width=300",
      description: "Inicio del nuevo período académico con grandes expectativas",
    },
    {
      title: "Postulación Beneficio de Transporte Escolar 2025",
      image: "/placeholder.svg?height=200&width=300",
      description: "Información sobre el proceso de postulación al beneficio de transporte",
    },
    {
      title: "Fiesta de la Chilenidad y la Interculturalidad",
      image: "/placeholder.svg?height=200&width=300",
      description: "Celebración de nuestras raíces y diversidad cultural",
    },
    {
      title: "Boletín Escolar Mensual",
      image: "/placeholder.svg?height=200&width=300",
      description: "Información mensual sobre actividades y logros escolares",
    },
    {
      title: "Recomendaciones regreso a clases",
      image: "/placeholder.svg?height=200&width=300",
      description: "Consejos importantes para el retorno a clases presenciales",
    },
    {
      title: "Resultado Postulación Transporte Escolar 2024",
      image: "/placeholder.svg?height=200&width=300",
      description: "Resultados del proceso de postulación al transporte escolar",
    },
    {
      title: "Talleres extra programáticos",
      image: "/placeholder.svg?height=200&width=300",
      description: "Oferta de talleres complementarios para nuestros estudiantes",
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
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Noticias</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {news.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md overflow-hidden">
                      <div className="relative">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-slate-800 mb-2 text-sm leading-tight">{item.title}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                        <Button variant="ghost" className="text-[#039b9e] hover:text-[#028a8e] p-0 mt-2 text-xs">
                          Leer más →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e]">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-[#039b9e] hover:bg-[#028a8e]">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e]">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e]">
                      3
                    </Button>
                    <span className="flex items-center px-2">...</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-[#039b9e] text-[#039b9e]">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
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
