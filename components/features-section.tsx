import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-[#039b9e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Propuesta Educativa",
      description:
        "Desde su creación el 14 de Mayo de 1998, ha experimentado un progresivo aumento deportivo y liderazgo.",
      link: "/propuesta-educativa",
      linkText: "Leer más",
      gradient: "from-[#039b9e] to-[#028a8e]",
    },
    {
      icon: <Target className="h-12 w-12 text-[#028a8e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Cuerpo Docente",
      description: "Equipo directivo, docentes y asistentes de educación comprometidos con la excelencia educativa.",
      link: "/cuerpo-docente",
      linkText: "Leer más",
      gradient: "from-[#028a8e] to-[#027a7e]",
    },
    {
      icon: <Eye className="h-12 w-12 text-[#027a7e] group-hover:scale-110 transition-transform duration-300" />,
      title: "Visión y Misión",
      description: "Una escuela acogedora e inclusiva, que desde su excelencia deportiva y liderazgo se proyecta.",
      link: "/vision-mision",
      linkText: "Leer más",
      gradient: "from-[#027a7e] to-[#026a6e]",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#039b9e]/10 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full animate-float-delayed"></div>
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
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 animate-fade-in-up cursor-pointer overflow-hidden relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <CardContent className="p-8 text-center space-y-6 relative z-10">
                <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <Link
                  href={feature.link}
                  className="inline-block text-[#039b9e] hover:text-[#028a8e] font-semibold transition-all duration-300 hover:scale-105 hover:underline"
                >
                  {feature.linkText} →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
