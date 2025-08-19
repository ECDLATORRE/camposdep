"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GalleryCarousel() {
  const images = [
    {
      src: "/images/evento-comunidad.png",
      alt: "Evento escolar - Construyendo Comunidad con toda la comunidad educativa",
      title: "Construyendo Comunidad",
      description: "Eventos que fortalecen nuestra comunidad educativa",
    },
    {
      src: "/images/basket.jpg",
      alt: "Equipo de básquetbol de la escuela en el gimnasio",
      title: "Deportes y Competencias",
      description: "Fomentamos el deporte y el trabajo en equipo",
    },
    {
      src: "/images/actividad-fisica.jpg",
      alt: "Estudiantes realizando actividades físicas en el patio",
      title: "Educación Física",
      description: "Actividades deportivas y recreativas para todos",
    },
    {
      src: "/images/techo1.jpg",
      alt: "Construcción del nuevo techo del gimnasio",
      title: "Mejoras en Infraestructura",
      description: "Constantemente mejoramos nuestras instalaciones",
    },
    {
      src: "/images/techo2.jpg",
      alt: "Nuevo techo completado para actividades deportivas",
      title: "Instalaciones Modernas",
      description: "Espacios seguros y modernos para el aprendizaje",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nuestra Galería</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre los momentos más importantes de nuestra comunidad educativa
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg md:text-xl opacity-90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#039b9e] scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
