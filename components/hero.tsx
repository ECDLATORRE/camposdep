import { Button } from "@/components/ui/button"
import { Clock, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] text-white overflow-hidden">
      <Image
        src="/images/escuela-exterior.jpg"
        alt="Escuela Municipal Campos Deportivos - Vista Exterior"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        className="animate-pulse duration-[3000ms]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-teal-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-yellow-400 animate-spin-slow" />
                <span className="text-yellow-400 font-semibold">Educación de Excelencia</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                Escuela Municipal
                <span className="block text-yellow-300 animate-pulse">Campos Deportivos</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 animate-fade-in delay-300">Escuela Básica D-508</p>
              <p className="text-lg text-blue-100 animate-fade-in delay-500">Kinder a Octavo año</p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 space-y-4 animate-slide-in-right delay-700 hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20">
              <h3 className="text-xl font-semibold text-yellow-300">Horarios de atención</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Lunes a Jueves: 8:30 a 17:00 hrs</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-200">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Viernes: 8:30 a 13:30 hrs</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-bounce-subtle"
              >
                Conoce Nuestra Propuesta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#039b9e] bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Ver Noticias
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-500">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 space-y-6 hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:rotate-1 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse hover:animate-spin transition-all duration-300 shadow-lg">
                  <div className="text-2xl font-bold text-white">ECD</div>
                </div>
                <h3 className="text-xl font-semibold">Educación de Calidad</h3>
                <p className="text-blue-100">Formando líderes del futuro</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-white/10">
                  <div className="text-2xl font-bold text-yellow-300 animate-counter">500+</div>
                  <div className="text-sm text-blue-100">Estudiantes</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-white/10">
                  <div className="text-2xl font-bold text-yellow-300 animate-counter">25+</div>
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
