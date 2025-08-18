"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, X } from "lucide-react"

interface GalleryUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUpload: () => void
}

export function GalleryUploadModal({ isOpen, onClose, onUpload }: GalleryUploadModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [alt, setAlt] = useState("")
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [dragOver, setDragOver] = useState(false)

  const categories = [
    { value: "infraestructura", label: "Infraestructura" },
    { value: "vida-escolar", label: "Vida Escolar" },
    { value: "equipo", label: "Equipo" },
    { value: "noticias", label: "Noticias" },
    { value: "eventos", label: "Eventos" },
    { value: "deportes", label: "Deportes" },
  ]

  function handleFileSelect(selectedFile: File) {
    if (selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)
      setError("")
    } else {
      setError("Por favor selecciona un archivo de imagen válido")
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file || !alt || !category) {
      setError("Todos los campos son requeridos")
      return
    }

    setLoading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("alt", alt)
      formData.append("category", category)

      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Error al subir la imagen")
        return
      }

      // Reset form
      setFile(null)
      setAlt("")
      setCategory("")
      onUpload()
    } catch (err) {
      setError("Error al subir la imagen")
    } finally {
      setLoading(false)
    }
  }

  function resetForm() {
    setFile(null)
    setAlt("")
    setCategory("")
    setError("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={resetForm}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Subir Nueva Imagen</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* File Upload Area */}
          <div className="space-y-2">
            <Label>Archivo de Imagen *</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragOver
                  ? "border-[#039b9e] bg-[#039b9e]/5"
                  : file
                    ? "border-green-500 bg-green-50"
                    : "border-slate-300 hover:border-slate-400"
              }`}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
            >
              {file ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Upload className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-700">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setFile(null)}
                      className="h-6 w-6 p-0 text-slate-500 hover:text-slate-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB - {file.type}
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 text-slate-400 mx-auto" />
                  <p className="text-sm text-slate-600">Arrastra una imagen aquí o haz clic para seleccionar</p>
                  <p className="text-xs text-slate-500">PNG, JPG, GIF hasta 10MB</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0]
                  if (selectedFile) handleFileSelect(selectedFile)
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Alt Text */}
          <div className="space-y-2">
            <Label htmlFor="alt">Descripción de la imagen *</Label>
            <Textarea
              id="alt"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Describe la imagen para accesibilidad"
              rows={3}
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label>Categoría *</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-[#039b9e] hover:bg-[#028a8e]" disabled={loading}>
              {loading ? "Subiendo..." : "Subir Imagen"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
