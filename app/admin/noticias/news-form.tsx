"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, ImageIcon, X } from "lucide-react"

interface NewsItem {
  id?: string
  title: string
  content: string
  excerpt: string
  image: string
  category: string
  author: string
  publishedAt: string
  status: "published" | "draft"
}

interface FileItem {
  name: string
  path: string
  type: "file" | "directory"
  size: number
  lastModified: string
  extension?: string
  isImage: boolean
  url: string
}

interface NewsFormProps {
  initialData?: NewsItem
  onSubmit: (data: NewsItem) => Promise<void>
  onCancel: () => void
}

export function NewsForm({ initialData, onSubmit, onCancel }: NewsFormProps) {
  const [formData, setFormData] = useState<NewsItem>({
    title: "",
    content: "",
    excerpt: "",
    image: "",
    category: "estudiantes",
    author: "AdminNicolas",
    publishedAt: new Date().toISOString().split("T")[0],
    status: "published",
    ...initialData,
  })

  const [loading, setLoading] = useState(false)
  const [imageMode, setImageMode] = useState<"none" | "upload" | "gallery" | "url">("none")
  const [galleryFiles, setGalleryFiles] = useState<FileItem[]>([])
  const [currentPath, setCurrentPath] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")

  useEffect(() => {
    if (initialData?.image) {
      if (initialData.image.startsWith("http")) {
        setImageMode("url")
      } else if (initialData.image.startsWith("/gallery/")) {
        setImageMode("gallery")
      } else {
        setImageMode("url")
      }
      setPreviewUrl(initialData.image)
    }
  }, [initialData])

  useEffect(() => {
    if (imageMode === "gallery") {
      fetchGalleryFiles()
    }
  }, [imageMode, currentPath])

  async function fetchGalleryFiles() {
    try {
      const response = await fetch(`/api/admin/gallery?path=${encodeURIComponent(currentPath)}`)
      const data = await response.json()
      setGalleryFiles(data.files?.filter((file: FileItem) => file.isImage) || [])
    } catch (error) {
      console.error("Error fetching gallery files:", error)
    }
  }

  function handleInputChange(field: keyof NewsItem, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      setFormData((prev) => ({ ...prev, image: file.name }))
    }
  }

  function handleGallerySelect(file: FileItem) {
    setPreviewUrl(file.url)
    setFormData((prev) => ({ ...prev, image: file.url }))
  }

  function handleUrlChange(url: string) {
    setPreviewUrl(url)
    setFormData((prev) => ({ ...prev, image: url }))
  }

  function clearImage() {
    setImageMode("none")
    setPreviewUrl("")
    setSelectedFile(null)
    setFormData((prev) => ({ ...prev, image: "" }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      let finalImageUrl = formData.image

      // Si hay un archivo seleccionado, subirlo primero
      if (selectedFile && imageMode === "upload") {
        const uploadFormData = new FormData()
        uploadFormData.append("action", "upload")
        uploadFormData.append("file", selectedFile)
        uploadFormData.append("path", "noticias")

        const uploadResponse = await fetch("/api/admin/gallery", {
          method: "POST",
          body: uploadFormData,
        })

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json()
          finalImageUrl = `/gallery/${uploadData.path}`
        } else {
          throw new Error("Error al subir la imagen")
        }
      }

      await onSubmit({
        ...formData,
        image: finalImageUrl,
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error al guardar la noticia")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Título *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Resumen *</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => handleInputChange("excerpt", e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Categoría</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="estudiantes">Estudiantes</SelectItem>
                  <SelectItem value="apoderados">Apoderados</SelectItem>
                  <SelectItem value="docentes">Docentes</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Estado</Label>
              <Select
                value={formData.status}
                onValueChange={(value: "published" | "draft") => handleInputChange("status", value)}
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
            <Label htmlFor="publishedAt">Fecha de publicación</Label>
            <Input
              id="publishedAt"
              type="date"
              value={formData.publishedAt}
              onChange={(e) => handleInputChange("publishedAt", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Imagen de la noticia</Label>
            <Tabs value={imageMode} onValueChange={(value: any) => setImageMode(value)}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="none">Sin imagen</TabsTrigger>
                <TabsTrigger value="upload">Subir</TabsTrigger>
                <TabsTrigger value="gallery">Galería</TabsTrigger>
                <TabsTrigger value="url">URL</TabsTrigger>
              </TabsList>

              <TabsContent value="none" className="mt-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <ImageIcon className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500">Esta noticia no tendrá imagen</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upload" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-600 mb-2">Selecciona una imagen para subir</p>
                      <Input type="file" accept="image/*" onChange={handleFileSelect} className="max-w-xs mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Seleccionar de la galería</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                      {galleryFiles.map((file) => (
                        <div
                          key={file.path}
                          className={`cursor-pointer border-2 rounded-lg p-1 ${
                            formData.image === file.url ? "border-[#039b9e]" : "border-slate-200"
                          }`}
                          onClick={() => handleGallerySelect(file)}
                        >
                          <img
                            src={file.url || "/placeholder.svg"}
                            alt={file.name}
                            className="w-full h-16 object-cover rounded"
                          />
                          <p className="text-xs text-center mt-1 truncate">{file.name}</p>
                        </div>
                      ))}
                    </div>
                    {galleryFiles.length === 0 && (
                      <p className="text-slate-500 text-center py-4">No hay imágenes en la galería</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="url" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <Label htmlFor="imageUrl">URL de la imagen</Label>
                      <Input
                        id="imageUrl"
                        placeholder="https://ejemplo.com/imagen.jpg"
                        value={formData.image}
                        onChange={(e) => handleUrlChange(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Preview */}
            {previewUrl && (
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm">Vista previa</CardTitle>
                    <Button type="button" variant="ghost" size="sm" onClick={clearImage}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <img
                    src={previewUrl || "/placeholder.svg"}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="content">Contenido *</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => handleInputChange("content", e.target.value)}
          rows={10}
          required
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={loading} className="bg-[#039b9e] hover:bg-[#028a8e]">
          {loading ? "Guardando..." : initialData ? "Actualizar" : "Crear"} Noticia
        </Button>
      </div>
    </form>
  )
}
