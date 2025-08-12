"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Users className="h-12 w-12 text-[#039b9e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Propuesta Educativa",
      description:
        "Desde su creación el 14 de Mayo de 1998, ha experimentado un progresivo aumento deportivo y liderazgo.",
      link: "/propuesta-educativa",
      linkText: "Leer más",
      gradient: "from-[#039b9e] to-[#028a8e]",
      color: "#039b9e",
      particles: [
        { x: 20, y: 30, size: 4, delay: 0 },
        { x: 80, y: 20, size: 3, delay: 200 },
        { x: 60, y: 70, size: 2, delay: 400 },
      ],
    },
    {
      icon: <Target className="h-12 w-12 text-[#028a8e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Cuerpo Docente",
      description: "Equipo directivo, docentes y asistentes de educación comprometidos con la excelencia educativa.",
      link: "/cuerpo-docente",
      linkText: "Leer más",
      gradient: "from-[#028a8e] to-[#027a7e]",
      color: "#028a8e",
      particles: [
        { x: 30, y: 25, size: 3, delay: 100 },
        { x: 70, y: 40, size: 4, delay: 300 },
        { x: 50, y: 65, size: 2, delay: 500 },
      ],
    },
    {
      icon: <Eye className="h-12 w-12 text-[#027a7e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Visión y Misión",
      description: "Una escuela acogedora e inclusiva, que desde su excelencia deportiva y liderazgo se proyecta.",
      link: "/vision-mision",
      linkText: "Leer más",
      gradient: "from-[#027a7e] to-[#026a6e]",
      color: "#027a7e",
      particles: [
        { x: 25, y: 35, size: 3, delay: 150 },
        { x: 75, y: 25, size: 2, delay: 350 },
        { x: 55, y: 60, size: 4, delay: 550 },
      ],
    },
  ]

  const handleCardClick = (index: number) => {
    setClickedCard(index)
    setTimeout(() => setClickedCard(null), 600)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#039b9e]/10 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full animate-float-delayed"></div>

        {/* Animated sparkles */}
        <Sparkles className="absolute top-20 left-1/4 h-6 w-6 text-[#039b9e]/20 animate-pulse" />
        <Sparkles className="absolute bottom-32 right-1/3 h-4 w-4 text-blue-500/30 animate-pulse delay-1000" />
        <Sparkles className="absolute top-1/2 right-20 h-5 w-5 text-teal-500/25 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 animate-slide-in-down">
            Nuestra Institución
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in delay-300">
            Conoce los pilares fundamentales que sustentan nuestra propuesta educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {feature.particles.map((particle, pIndex) => (
                    <div
                      key={pIndex}
                      className="absolute rounded-full animate-bounce"
                      style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: feature.color,
                        opacity: 0.6,
                        animationDelay: `${particle.delay}ms`,
                        animationDuration: "2s",
                      }}
                    />
                  ))}
                </div>
              )}

              <Card
                className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 animate-fade-in-up cursor-pointer overflow-hidden relative transform-gpu ${
                  clickedCard === index ? "scale-95" : "hover:scale-105"
                } ${hoveredCard === index ? "shadow-2xl" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleCardClick(index)}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-110`}
                ></div>

                {/* Ripple effect on click */}
                {clickedCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full animate-ping"
                      style={{
                        backgroundColor: feature.color,
                        opacity: 0.3,
                        animation: "ripple 0.6s ease-out",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                )}

                {/* Glowing border effect */}
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  style={{
                    background: `linear-gradient(45deg, ${feature.color}20, transparent, ${feature.color}20)`,
                    filter: "blur(1px)",
                  }}
                />

                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  {/* Icon with enhanced animations */}
                  <div className="flex justify-center transform group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
                    <div className="relative">
                      {feature.icon}
                      {/* Icon glow effect */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-md"
                        style={{ backgroundColor: feature.color }}
                      />
                    </div>
                  </div>

                  {/* Title with typewriter effect on hover */}
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-all duration-500 transform group-hover:scale-105">
                    {feature.title}
                  </h3>

                  {/* Description with slide-up animation */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-all duration-500 transform group-hover:translate-y-[-2px]">
                    {feature.description}
                  </p>

                  {/* Enhanced "Leer más" button */}
                  <Link
                    href={feature.link}
                    className="inline-flex items-center space-x-2 text-[#039b9e] hover:text-[#028a8e] font-semibold transition-all duration-500 hover:scale-110 group-hover:translate-x-2 relative overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(index)
                    }}
                  >
                    {/* Button background effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#039b9e]/10 to-[#028a8e]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />

                    <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                      {feature.linkText}
                    </span>

                    {/* Animated arrow */}
                    <ArrowRight className="h-4 w-4 transform transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125" />

                    {/* Trail effect */}
                    <div className="absolute right-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-[#039b9e] to-transparent group-hover:w-8 transition-all duration-700 transform -translate-y-1/2" />
                  </Link>
                </CardContent>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ borderBottomColor: feature.color + "30" }}
                  />
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-full group-hover:translate-y-0" />
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
