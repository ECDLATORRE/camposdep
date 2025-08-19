"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/images/evento-comunidad.png",
    title: "Evento Comunidad 2025",
    description: "Gran reunión escolar construyendo comunidad",
  },
  {
    src: "/images/basket.jpg",
    title: "Equipo de Básquetbol",
    description: "Nuestros deportistas representando la escuela",
  },
  {
    src: "/images/actividad-fisica.jpg",
    title: "Actividad Física",
    description: "Educación física y recreación en nuestro patio",
  },
  {
    src: "/images/techo1.jpg",
    title: "Mejoras en Infraestructura",
    description: "Construcción de nuevas instalaciones deportivas",
  },
  {
    src: "/images/techo2.jpg",
    title: "Instalaciones Modernas",
    description: "Espacios techados para actividades deportivas",
  },
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="h-8 w-8 text-[#039b9e]" />
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">Nuestra Galería</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Descubre la vida escolar a través de imágenes que capturan nuestros mejores momentos
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg md:text-xl text-slate-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 text-slate-800" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 text-slate-800" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#039b9e] scale-125 shadow-lg" : "bg-slate-400 hover:bg-slate-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Gallery Link */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#039b9e] hover:bg-[#028a8d] text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <a href="/galeria">Ver Galería Completa</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
