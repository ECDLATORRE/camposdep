import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ImageGallery() {
  const images = [
    {
      src: "/images/patio-escuela-estudiantes.jpg",
      alt: "Estudiantes realizando actividades deportivas en el patio",
      title: "Actividades Deportivas",
      category: "Vida Escolar",
    },
    {
      src: "/images/director-layo-gomez.jpg",
      alt: "Director Layo Gómez Acuña en su oficina",
      title: "Dirección",
      category: "Equipo Directivo",
    },
    {
      src: "/images/organigrama-oficial.png",
      alt: "Organigrama oficial de la escuela",
      title: "Estructura Organizacional",
      category: "Institucional",
    },
    {
      src: "/images/wetxipantu-2025.jpg",
      alt: "Celebración Wetxipantu 2025",
      title: "Wetxipantu 2025",
      category: "Eventos Culturales",
    },
    {
      src: "/images/escuela-exterior.jpg",
      alt: "Vista exterior del edificio escolar",
      title: "Instalaciones",
      category: "Infraestructura",
    },
    {
      src: "/images/noticia-transporte.png",
      alt: "Información sobre transporte escolar",
      title: "Transporte Escolar",
      category: "Servicios",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
          <CardContent className="p-0">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 left-2 bg-[#039b9e] text-white px-2 py-1 rounded text-xs font-medium">
                {img.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800 group-hover:text-[#039b9e] transition-colors duration-300">
                {img.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{img.alt}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
