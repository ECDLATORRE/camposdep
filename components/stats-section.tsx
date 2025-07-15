import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      number: "500+",
      label: "Estudiantes",
      color: "bg-[#039b9e]",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "40+",
      label: "Profesores",
      color: "bg-[#028a8e]",
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      number: "25+",
      label: "Años de experiencia",
      color: "bg-[#027a7e]",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      number: "100%",
      label: "Compromiso educativo",
      color: "bg-[#026a6e]",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nuestra Trayectoria</h2>
          <p className="text-xl text-slate-600">Números que reflejan nuestro compromiso con la educación</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
