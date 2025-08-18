"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import { GalleryUploadModal } from "./upload-modal"

interface GalleryImage {
  id: string
  filename: string
  originalName: string
  url: string
  alt: string
  category: string
  uploadedAt: string
  uploadedBy: string
  size: number
  mimeType: string
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [showUploadModal, setShowUploadModal] = useState(false)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    try {
      const response = await fetch("/api/admin/gallery")
      const data = await response.json()
      setImages(data.images || [])
    } catch (error) {
      console.error("Error fetching images:", error)
    } finally {
      setLoading(false)
    }
  }

  async function deleteImage(id: string) {
    if (!confirm("¿Estás seguro de que quieres eliminar esta imagen?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setImages(images.filter((img) => img.id !== id))
      } else {
        alert("Error al eliminar la imagen")
      }
    } catch (error) {
      alert("Error al eliminar la imagen")
    }
  }

  function formatFileSize(bytes: number) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const categoryLabels: Record<string, string> = {
    infraestructura: "Infraestructura",
    "vida-escolar": "Vida Escolar",
    equipo: "Equipo",
    noticias: "Noticias",
    eventos: "Eventos",
    deportes: "Deportes",
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#039b9e] mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando galería...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Gestión de Galería</h1>
              <p className="text-slate-600">Administra las imágenes del sitio web</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/admin">
                <Button variant="outline">Volver al Panel</Button>
              </Link>
              <Button onClick={() => setShowUploadModal(true)} className="bg-[#039b9e] hover:bg-[#028a8e]">
                <Upload className="h-4 w-4 mr-2" />
                Subir Imagen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="text-xs">
                    {categoryLabels[image.category] || image.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2 text-sm line-clamp-2">{image.alt}</h3>
                <div className="text-xs text-slate-500 space-y-1 mb-3">
                  <p>Archivo: {image.originalName}</p>
                  <p>Tamaño: {formatFileSize(image.size)}</p>
                  <p>Subido: {new Date(image.uploadedAt).toLocaleDateString("es-ES")}</p>
                  <p>Por: {image.uploadedBy}</p>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-xs bg-transparent">
                    <Edit className="h-3 w-3 mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteImage(image.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {images.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 mb-4">No hay imágenes en la galería</p>
              <Button onClick={() => setShowUploadModal(true)} className="bg-[#039b9e] hover:bg-[#028a8e]">
                <Plus className="h-4 w-4 mr-2" />
                Subir Primera Imagen
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <GalleryUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onUpload={() => {
          setShowUploadModal(false)
          fetchImages()
        }}
      />
    </div>
  )
}
