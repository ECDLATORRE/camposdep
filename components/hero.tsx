"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, BookOpen } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/escuela-exterior.jpg",
      title: "Educación de Calidad",
      subtitle: "Formando líderes del futuro",
    },
    {
      image: "/images/patio-escuela-estudiantes.jpg",
      title: "Desarrollo Integral",
      subtitle: "Creciendo juntos como comunidad",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-8 mb-8">
          {/* Logo Principal */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-oficial.png"
              alt="Logo Escuela Campos Deportivos"
              width={120}
              height={120}
              className="drop-shadow-2xl"
            />
          </div>

          {/* Logo Lirmi - Circular */}
          <Link
            href="https://lms.lirmi.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full overflow-hidden bg-white p-2 border-2 border-white/20 hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            <Image
              src="/images/lirmi-logo.png"
              alt="Logo Lirmi - Plataforma Educativa"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">{slides[currentSlide].title}</span>
          <span className="block text-[#039b9e] text-3xl md:text-4xl lg:text-5xl mt-2">
            {slides[currentSlide].subtitle}
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200">
          Escuela Campos Deportivos - Comprometidos con la excelencia educativa y el desarrollo integral de nuestros
          estudiantes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-[#039b9e] hover:bg-[#028a8d] text-white px-8 py-4 text-lg">
            <Link href="/quienes-somos">
              Conoce Más <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-[#039b9e] mb-3" />
            <div className="text-3xl font-bold">500+</div>
            <div className="text-slate-300">Estudiantes</div>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 text-[#039b9e] mb-3" />
            <div className="text-3xl font-bold">25+</div>
            <div className="text-slate-300">Años de experiencia</div>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="h-12 w-12 text-[#039b9e] mb-3" />
            <div className="text-3xl font-bold">100%</div>
            <div className="text-slate-300">Compromiso educativo</div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-[#039b9e] scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
