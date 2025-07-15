import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] text-white overflow-hidden">
      <Image
        src="/images/fondo-escuela.jpg"
        alt="Campos Deportivos School"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for text readability */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Escuela Municipal
                <span className="block text-yellow-300">Campos Deportivos</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">Escuela Básica D-508</p>
              <p className="text-lg text-blue-100">Kinder a Octavo año</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-yellow-300">Horarios de atención</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Lunes a Jueves: 8:30 a 17:00 hrs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Viernes: 8:30 a 13:30 hrs</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Conoce Nuestra Propuesta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#039b9e] bg-transparent"
              >
                Ver Noticias
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">ECD</div>
                </div>
                <h3 className="text-xl font-semibold">Educación de Calidad</h3>
                <p className="text-blue-100">Formando líderes del futuro</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">500+</div>
                  <div className="text-sm text-blue-100">Estudiantes</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">25+</div>
                  <div className="text-sm text-blue-100">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
