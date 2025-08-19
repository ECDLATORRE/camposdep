"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, LinkIcon, Folder } from "lucide-react"

interface NewsFormProps {
  initialData?: {
    id?: string
    title: string
    content: string
    excerpt: string
    image: string
    category: string
    status: "published" | "draft"
  }
  isEditing?: boolean
}

interface GalleryImage {
  name: string
  path: string
  url: string
}

export function NewsForm({ initialData, isEditing = false }: NewsFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [selectedImageTab, setSelectedImageTab] = useState("url")

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    content: initialData?.content || "",
    excerpt: initialData?.excerpt || "",
    image: initialData?.image || "",
    category: initialData?.category || "estudiantes",
    status: initialData?.status || ("published" as "published" | "draft"),
  })

  // Cargar imágenes de la galería
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        const response = await fetch("/api/admin/gallery")
        if (response.ok) {
          const data = await response.json()
          setGalleryImages(data.files || [])
        }
      } catch (error) {
        console.error("Error loading gallery:", error)
      }
    }
    loadGalleryImages()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Validaciones
      if (!formData.title.trim()) {
        setError("El título es requerido")
        return
      }
      if (!formData.content.trim()) {
        setError("El contenido es requerido")
        return
      }
      if (!formData.excerpt.trim()) {
        setError("El resumen es requerido")
        return
      }

      const url = isEditing ? `/api/admin/news/${initialData?.id}` : "/api/admin/news"
      const method = isEditing ? "PUT" : "POST"

      const formDataToSend = new FormData()
      formDataToSend.append("title", formData.title)
      formDataToSend.append("content", formData.content)
      formDataToSend.append("excerpt", formData.excerpt)
      formDataToSend.append("image", formData.image)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("status", formData.status)

      console.log("Sending news data:", formData)

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      })

      const result = await response.json()
      console.log("Response:", result)

      if (response.ok && result.success) {
        router.push("/admin/noticias")
        router.refresh()
      } else {
        setError(result.error || "Error al guardar la noticia")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Error de conexión al guardar la noticia")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/admin/gallery/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        setFormData((prev) => ({
          ...prev,
          image: result.url,
        }))
        // Recargar galería
        const galleryResponse = await fetch("/api/admin/gallery")
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json()
          setGalleryImages(galleryData.files || [])
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      setError("Error al subir la imagen")
    }
  }

  const selectGalleryImage = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{isEditing ? "Editar Noticia" : "Nueva Noticia"}</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Título de la noticia"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Categoría *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estudiantes">Estudiantes</SelectItem>
                        <SelectItem value="profesores">Profesores</SelectItem>
                        <SelectItem value="apoderados">Apoderados</SelectItem>
                        <SelectItem value="comunidad">Comunidad</SelectItem>
                        <SelectItem value="deportivos">Deportivos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="status">Estado</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => handleSelectChange("status", value as "published" | "draft")}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Publicado</SelectItem>
                        <SelectItem value="draft">Borrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Imagen</Label>
                  <Tabs value={selectedImageTab} onValueChange={setSelectedImageTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="url" className="flex items-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        URL
                      </TabsTrigger>
                      <TabsTrigger value="upload" className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Subir
                      </TabsTrigger>
                      <TabsTrigger value="gallery" className="flex items-center gap-2">
                        <Folder className="w-4 h-4" />
                        Galería
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="url" className="space-y-2">
                      <Input
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://ejemplo.com/imagen.jpg"
                        type="url"
                      />
                    </TabsContent>

                    <TabsContent value="upload" className="space-y-2">
                      <Input type="file" accept="image/*" onChange={handleFileUpload} className="cursor-pointer" />
                      <p className="text-sm text-gray-500">Sube una imagen desde tu computador</p>
                    </TabsContent>

                    <TabsContent value="gallery" className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto border rounded p-2">
                        {galleryImages.length > 0 ? (
                          galleryImages.map((image, index) => (
                            <div
                              key={index}
                              className={`relative cursor-pointer border-2 rounded overflow-hidden ${
                                formData.image === image.url ? "border-blue-500" : "border-gray-200"
                              }`}
                              onClick={() => selectGalleryImage(image.url)}
                            >
                              <img
                                src={image.url || "/placeholder.svg"}
                                alt={image.name}
                                className="w-full h-20 object-cover"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 truncate">
                                {image.name}
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500 col-span-2 text-center py-4">
                            No hay imágenes en la galería
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>

                  {formData.image && (
                    <div className="mt-2">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="excerpt">Resumen *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Breve resumen de la noticia"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="content">Contenido *</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Contenido completo de la noticia"
                  rows={8}
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={isLoading} className="bg-[#039b9e] hover:bg-[#028a8e]">
                  {isLoading ? "Guardando..." : isEditing ? "Actualizar" : "Crear Noticia"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/noticias")}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
