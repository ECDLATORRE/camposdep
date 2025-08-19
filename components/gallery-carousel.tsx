"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/evento-comunidad.png",
    alt: "Evento Comunidad 2025",
    title: "Construyendo Comunidad",
    description: "Gran reunión de toda la comunidad educativa en nuestro patio principal",
  },
  {
    src: "/images/basket.jpg",
    alt: "Equipo de Básquetbol",
    title: "Deportes y Competencias",
    description: "Nuestro destacado equipo de básquetbol representando a la escuela",
  },
  {
    src: "/images/actividad-fisica.jpg",
    alt: "Actividad Física",
    title: "Educación Física",
    description: "Estudiantes disfrutando de actividades deportivas en nuestras instalaciones",
  },
  {
    src: "/images/techo1.jpg",
    alt: "Mejoras en Infraestructura",
    title: "Creciendo Juntos",
    description: "Constantes mejoras en nuestras instalaciones para brindar mejor educación",
  },
  {
    src: "/images/techo2.jpg",
    alt: "Instalaciones Modernas",
    title: "Instalaciones de Calidad",
    description: "Espacios modernos y seguros para el desarrollo integral de nuestros estudiantes",
  },
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nuestra Galería</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre la vida escolar a través de imágenes que capturan momentos especiales de nuestra comunidad
            educativa
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[16/9] relative">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90 max-w-2xl">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-12 w-12"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0 h-12 w-12"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#039b9e] scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
