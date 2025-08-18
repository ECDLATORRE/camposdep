"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import type { NewsItem } from "@/lib/auth"
import { useRouter } from "next/navigation"

interface NewsFormProps {
  news?: NewsItem
}

export function NewsForm({ news }: NewsFormProps) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(news?.category || "")
  const [status, setStatus] = useState(news?.status || "draft")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    formData.set("category", category)
    formData.set("status", status)

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

          <div className="space-y-2">
            <Label htmlFor="image">URL de la Imagen</Label>
            <Input
              id="image"
              name="image"
              type="url"
              defaultValue={news?.image}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <p className="text-sm text-slate-500">Deja vacío para usar imagen por defecto</p>
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
