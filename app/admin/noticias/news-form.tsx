"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Save, Upload, ImageIcon, LinkIcon } from "lucide-react"
import Link from "next/link"
import type { NewsItem } from "@/lib/auth"
import { useRouter } from "next/navigation"

interface NewsFormProps {
  news?: NewsItem
}

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

export function NewsForm({ news }: NewsFormProps) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(news?.category || "")
  const [status, setStatus] = useState(news?.status || "draft")
  const [imageOption, setImageOption] = useState<"none" | "upload" | "gallery" | "url">("none")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState("")
  const [imageUrl, setImageUrl] = useState(news?.image || "")
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchGalleryImages()
    if (news?.image) {
      if (news.image.startsWith("http")) {
        setImageOption("url")
        setImageUrl(news.image)
      } else {
        setImageOption("gallery")
        setSelectedGalleryImage(news.image)
      }
    }
  }, [news])

  async function fetchGalleryImages() {
    try {
      const response = await fetch("/api/admin/gallery")
      const data = await response.json()
      setGalleryImages(data.images || [])
    } catch (error) {
      console.error("Error fetching gallery images:", error)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    formData.set("category", category)
    formData.set("status", status)

    // Handle image based on selected option
    let finalImageUrl = ""
    if (imageOption === "upload" && selectedFile) {
      // In a real app, you would upload the file first
      finalImageUrl = `/uploads/${Date.now()}-${selectedFile.name}`
    } else if (imageOption === "gallery" && selectedGalleryImage) {
      finalImageUrl = selectedGalleryImage
    } else if (imageOption === "url" && imageUrl) {
      finalImageUrl = imageUrl
    }

    formData.set("image", finalImageUrl)

    try {
      const response = await fetch(news ? `/api/admin/news/${news.id}` : "/api/admin/news", {
        method: news ? "PUT" : "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Error al guardar la noticia")
        return
      }

      router.push("/admin/noticias")
      router.refresh()
    } catch (err) {
      setError("Error al guardar la noticia")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/admin/noticias">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Noticias
            </Button>
          </Link>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input id="title" name="title" defaultValue={news?.title} placeholder="Título de la noticia" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría *</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="estudiantes">Estudiantes</SelectItem>
                  <SelectItem value="profesores">Profesores</SelectItem>
                  <SelectItem value="apoderados">Apoderados</SelectItem>
                  <SelectItem value="comunidad">Comunidad Educativa</SelectItem>
                  <SelectItem value="deportivos">Deportivos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumen *</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              defaultValue={news?.excerpt}
              placeholder="Breve descripción de la noticia"
              rows={3}
              required
            />
          </div>

          {/* Image Selection */}
          <div className="space-y-4">
            <Label>Imagen de la noticia</Label>
            <Tabs value={imageOption} onValueChange={(value) => setImageOption(value as any)}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="none">Sin imagen</TabsTrigger>
                <TabsTrigger value="upload">Subir archivo</TabsTrigger>
                <TabsTrigger value="gallery">Galería</TabsTrigger>
                <TabsTrigger value="url">URL externa</TabsTrigger>
              </TabsList>

              <TabsContent value="none" className="mt-4">
                <div className="text-center py-8 text-slate-500">
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Esta noticia no tendrá imagen</p>
                </div>
              </TabsContent>

              <TabsContent value="upload" className="mt-4">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600 mb-2">Selecciona un archivo de imagen</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      className="text-sm"
                    />
                    {selectedFile && (
                      <p className="text-xs text-green-600 mt-2">Archivo seleccionado: {selectedFile.name}</p>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-64 overflow-y-auto">
                  {galleryImages.map((image) => (
                    <div
                      key={image.id}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedGalleryImage === image.url
                          ? "border-[#039b9e] ring-2 ring-[#039b9e]/20"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => setSelectedGalleryImage(image.url)}
                    >
                      <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-20 object-cover" />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                      {selectedGalleryImage === image.url && (
                        <div className="absolute inset-0 bg-[#039b9e]/20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#039b9e] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {galleryImages.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No hay imágenes en la galería</p>
                    <Link href="/admin/galeria">
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Ir a la galería
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="url" className="mt-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <LinkIcon className="h-4 w-4 text-slate-400" />
                    <Input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://ejemplo.com/imagen.jpg"
                    />
                  </div>
                  {imageUrl && (
                    <div className="mt-2">
                      <img
                        src={imageUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="w-32 h-20 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenido *</Label>
            <Textarea
              id="content"
              name="content"
              defaultValue={news?.content}
              placeholder="Contenido completo de la noticia"
              rows={12}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="status">Estado</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Borrador</SelectItem>
                  <SelectItem value="published">Publicado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Link href="/admin/noticias">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" className="bg-[#039b9e] hover:bg-[#028a8e]" disabled={loading}>
              <Save className="h-4 w-4 mr-2" />
              {loading ? "Guardando..." : news ? "Actualizar" : "Crear"} Noticia
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
