import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Eye } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-[#039b9e]" />,
      title: "Propuesta Educativa",
      description:
        "Desde su creación el 14 de Mayo de 1998, ha experimentado un progresivo aumento deportivo y liderazgo.",
      link: "/propuesta-educativa",
      linkText: "Leer más",
    },
    {
      icon: <Target className="h-12 w-12 text-[#028a8e]" />,
      title: "Cuerpo Docente",
      description: "Equipo directivo, docentes y asistentes de educación comprometidos con la excelencia educativa.",
      link: "/cuerpo-docente",
      linkText: "Leer más",
    },
    {
      icon: <Eye className="h-12 w-12 text-[#027a7e]" />,
      title: "Visión y Misión",
      description: "Una escuela acogedora e inclusiva, que desde su excelencia deportiva y liderazgo se proyecta.",
      link: "/vision-mision",
      linkText: "Leer más",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Nuestra Institución</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conoce los pilares fundamentales que sustentan nuestra propuesta educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#039b9e] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="inline-block text-[#039b9e] hover:text-[#028a8e] font-semibold transition-colors"
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
