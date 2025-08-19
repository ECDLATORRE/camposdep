"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/escuela-exterior.jpg"
          alt="Escuela Municipal Campos Deportivos"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
          priority
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-transparent z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Logo and Title Section */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative w-24 h-24 hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo-oficial.png"
                  alt="Logo Escuela Municipal Campos Deportivos"
                  fill
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-2xl"
                />
              </div>

              {/* Lirmi Logo - Circular */}
              <a
                href="https://lms.lirmi.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white p-2 hover:shadow-2xl transition-shadow duration-300 border-2 border-white/20">
                  <Image
                    src="/images/lirmi-logo.png"
                    alt="Lirmi - Plataforma Educativa"
                    fill
                    style={{ objectFit: "contain" }}
                    className="drop-shadow-lg"
                  />
                </div>
              </a>
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Educación de</span>
                <br />
                <span className="text-[#039b9e] drop-shadow-lg">Calidad</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-200 mb-8 font-light">Formando líderes del futuro</p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                En la Escuela Municipal Campos Deportivos, creemos en una educación inclusiva que abra horizontes de
                posibilidades para cada estudiante. Nuestro compromiso es formar ciudadanos íntegros, creativos y
                comprometidos con su comunidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#039b9e] hover:bg-[#028a8e] text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#039b9e]/25"
              >
                Conoce Más
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl bg-transparent"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6 text-center text-white">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-[#039b9e]" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-slate-200">Estudiantes</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6 text-center text-white">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#039b9e]" />
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-sm text-slate-200">Profesores</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6 text-center text-white">
                <Award className="h-12 w-12 mx-auto mb-4 text-[#039b9e]" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm text-slate-200">Años de experiencia</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6 text-center text-white">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-[#039b9e]" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-slate-200">Compromiso educativo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
