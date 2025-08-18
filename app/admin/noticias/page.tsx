"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Search, Filter, Eye, Calendar, User, Tag, Save, X } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  description: string
  content: string
  category: string
  author: string
  date: string
  image: string
  status: "published" | "draft"
  featured: boolean
}

export default function AdminNoticiasPage() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: "1",
      title: "Estudiantes beneficiarios del transporte escolar año 2023",
      description:
        "Estimada comunidad educativa, les compartimos la nómina de estudiantes beneficiarios del transporte escolar año 2023.",
      content: "Contenido completo de la noticia...",
      category: "estudiantes",
      author: "Administrador",
      date: "2023-03-02",
      image: "/images/noticia-transporte.png",
      status: "published",
      featured: true,
    },
    {
      id: "2",
      title: "Inicio de año escolar 2025",
      description: "Información importante para el inicio del nuevo año académico.",
      content: "Contenido completo de la noticia...",
      category: "estudiantes",
      author: "Administrador",
      date: "2025-03-06",
      image: "/placeholder.svg?height=200&width=300",
      status: "published",
      featured: false,
    },
    {
      id: "3",
      title: "Capacitación docente 2025",
      description: "Jornada de actualización pedagógica para el cuerpo docente.",
      content: "Contenido completo de la noticia...",
      category: "profesores",
      author: "Administrador",
      date: "2025-02-15",
      image: "/placeholder.svg?height=200&width=300",
      status: "draft",
      featured: false,
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  const categories = [
    { value: "estudiantes", label: "Estudiantes" },
    { value: "profesores", label: "Profesores" },
    { value: "apoderados", label: "Apoderados" },
    { value: "comunidad", label: "Comunidad Educativa" },
    { value: "deportivos", label: "Deportivos" },
  ]

  const handleCreateNews = () => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      title: "",
      description: "",
      content: "",
      category: "estudiantes",
      author: "Administrador",
      date: new Date().toISOString().split("T")[0],
      image: "/placeholder.svg?height=200&width=300",
      status: "draft",
      featured: false,
    }
    setEditingNews(newNews)
    setIsEditing(true)
  }

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem)
    setIsEditing(true)
  }

  const handleSaveNews = () => {
    if (!editingNews) return

    if (editingNews.id && news.find((n) => n.id === editingNews.id)) {
      // Update existing news
      setNews(news.map((n) => (n.id === editingNews.id ? editingNews : n)))
    } else {
      // Create new news
      setNews([...news, { ...editingNews, id: Date.now().toString() }])
    }

    setIsEditing(false)
    setEditingNews(null)
  }

  const handleDeleteNews = (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta noticia?")) {
      setNews(news.filter((n) => n.id !== id))
    }
  }

  const handleToggleStatus = (id: string) => {
    setNews(news.map((n) => (n.id === id ? { ...n, status: n.status === "published" ? "draft" : "published" } : n)))
  }

  const handleToggleFeatured = (id: string) => {
    setNews(news.map((n) => (n.id === id ? { ...n, featured: !n.featured } : n)))
  }

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || item.category === filterCategory
    const matchesStatus = filterStatus === "all" || item.status === filterStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  if (isEditing && editingNews) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {editingNews.id && news.find((n) => n.id === editingNews.id)
                    ? "Editar Noticia"
                    : "Crear Nueva Noticia"}
                </CardTitle>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setEditingNews(null)
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancelar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Título *</label>
                    <Input
                      value={editingNews.title}
                      onChange={(e) => setEditingNews({ ...editingNews, title: e.target.value })}
                      placeholder="Título de la noticia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Descripción *</label>
                    <Textarea
                      value={editingNews.description}
                      onChange={(e) => setEditingNews({ ...editingNews, description: e.target.value })}
                      placeholder="Descripción breve de la noticia"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Categoría</label>
                      <Select
                        value={editingNews.category}
                        onValueChange={(value) => setEditingNews({ ...editingNews, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
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

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Fecha</label>
                      <Input
                        type="date"
                        value={editingNews.date}
                        onChange={(e) => setEditingNews({ ...editingNews, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">URL de Imagen</label>
                    <Input
                      value={editingNews.image}
                      onChange={(e) => setEditingNews({ ...editingNews, image: e.target.value })}
                      placeholder="URL de la imagen"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingNews.featured}
                        onChange={(e) => setEditingNews({ ...editingNews, featured: e.target.checked })}
                        className="rounded"
                      />
                      <span className="text-sm text-slate-700">Noticia destacada</span>
                    </label>

                    <Select
                      value={editingNews.status}
                      onValueChange={(value: "published" | "draft") =>
                        setEditingNews({ ...editingNews, status: value })
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Borrador</SelectItem>
                        <SelectItem value="published">Publicado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Vista previa de imagen</label>
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <img
                        src={editingNews.image || "/placeholder.svg?height=200&width=300"}
                        alt="Vista previa"
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contenido *</label>
                <Textarea
                  value={editingNews.content}
                  onChange={(e) => setEditingNews({ ...editingNews, content: e.target.value })}
                  placeholder="Contenido completo de la noticia"
                  rows={10}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setEditingNews(null)
                  }}
                >
                  Cancelar
                </Button>
                <Button onClick={handleSaveNews} className="bg-[#039b9e] hover:bg-[#028a8e]">
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Noticia
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-slate-800">Panel de Administración - Noticias</h1>
            <Button onClick={handleCreateNews} className="bg-[#039b9e] hover:bg-[#028a8e]">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Noticia
            </Button>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Buscar noticias..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos los estados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="published">Publicados</SelectItem>
                    <SelectItem value="draft">Borradores</SelectItem>
                  </SelectContent>
                </Select>

                <div className="text-sm text-slate-600 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  {filteredNews.length} de {news.length} noticias
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News List */}
        <div className="grid gap-6">
          {filteredNews.map((newsItem) => (
            <Card key={newsItem.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div className="md:col-span-1">
                    <img
                      src={newsItem.image || "/placeholder.svg"}
                      alt={newsItem.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-800 line-clamp-2">{newsItem.title}</h3>
                      {newsItem.featured && <Badge className="bg-yellow-100 text-yellow-800 ml-2">Destacada</Badge>}
                    </div>

                    <p className="text-slate-600 line-clamp-2">{newsItem.description}</p>

                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(newsItem.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{newsItem.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span className="capitalize">
                          {categories.find((c) => c.value === newsItem.category)?.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex flex-col space-y-3">
                    <Badge
                      className={
                        newsItem.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {newsItem.status === "published" ? "Publicado" : "Borrador"}
                    </Badge>

                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline" onClick={() => handleEditNews(newsItem)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Editar
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleStatus(newsItem.id)}
                        className={newsItem.status === "published" ? "text-orange-600" : "text-green-600"}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {newsItem.status === "published" ? "Ocultar" : "Publicar"}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleFeatured(newsItem.id)}
                        className="text-yellow-600"
                      >
                        {newsItem.featured ? "Quitar destaque" : "Destacar"}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteNews(newsItem.id)}
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-slate-500 text-lg">No se encontraron noticias que coincidan con los filtros.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
