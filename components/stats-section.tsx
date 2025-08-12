"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      number: "500+",
      label: "Estudiantes",
      color: "bg-gradient-to-br from-[#039b9e] to-[#028a8e]",
      delay: 0,
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "40+",
      label: "Profesores",
      color: "bg-gradient-to-br from-[#028a8e] to-[#027a7e]",
      delay: 200,
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      number: "25+",
      label: "Años de experiencia",
      color: "bg-gradient-to-br from-[#027a7e] to-[#026a6e]",
      delay: 400,
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      number: "100%",
      label: "Compromiso educativo",
      color: "bg-gradient-to-br from-[#026a6e] to-[#025a5e]",
      delay: 600,
    },
  ]

  return (
    <section id="stats-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #039b9e 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nuestra Trayectoria</h2>
          <p className="text-xl text-slate-600">Números que reflejan nuestro compromiso con la educación</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
