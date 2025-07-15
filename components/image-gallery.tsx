import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ImageGallery() {
  const images = [
    {
      src: "/images/wetxipantu-2025.jpg",
      alt: "Celebración Wetxipantu 2025",
      title: "Wetxipantu 2025",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Actividad deportiva en la escuela",
      title: "Día Deportivo",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Estudiantes en el aula",
      title: "Aprendiendo Juntos",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Evento cultural escolar",
      title: "Celebración Cultural",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Grupo de estudiantes sonriendo",
      title: "Amigos en la Escuela",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Ceremonia de graduación",
      title: "Promoción 2024",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="relative w-full h-48">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800">{img.title}</h3>
              <p className="text-sm text-slate-600">{img.alt}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
