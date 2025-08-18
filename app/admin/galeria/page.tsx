"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, FolderPlus, Trash2, Download, Eye, Folder, File, ArrowLeft, Search, Grid, List } from "lucide-react"
import Link from "next/link"
import { formatFileSize, getFileIcon } from "@/lib/file-manager"

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

export default function FileManager() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPath, setCurrentPath] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set())
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false)

  useEffect(() => {
    fetchFiles()
  }, [currentPath])

  async function fetchFiles() {
    setLoading(true)
    try {
      const response = await fetch(`/api/admin/gallery?path=${encodeURIComponent(currentPath)}`)
      const data = await response.json()
      setFiles(data.files || [])
    } catch (error) {
      console.error("Error fetching files:", error)
    } finally {
      setLoading(false)
    }
  }

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("action", "upload")
    formData.append("file", file)
    formData.append("path", currentPath)

    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        fetchFiles()
        setShowUploadModal(false)
      } else {
        alert("Error al subir el archivo")
      }
    } catch (error) {
      alert("Error al subir el archivo")
    }
  }

  async function handleCreateFolder(name: string) {
    const formData = new FormData()
    formData.append("action", "create-folder")
    formData.append("name", name)
    formData.append("path", currentPath)

    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        fetchFiles()
        setShowCreateFolderModal(false)
      } else {
        alert("Error al crear la carpeta")
      }
    } catch (error) {
      alert("Error al crear la carpeta")
    }
  }

  async function handleDelete(filePath: string) {
    if (!confirm("¿Estás seguro de que quieres eliminar este archivo?")) {
      return
    }

    try {
      const response = await fetch("/api/admin/gallery/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: filePath }),
      })

      if (response.ok) {
        fetchFiles()
      } else {
        alert("Error al eliminar el archivo")
      }
    } catch (error) {
      alert("Error al eliminar el archivo")
    }
  }

  function navigateToFolder(folderName: string) {
    const newPath = currentPath ? `${currentPath}/${folderName}` : folderName
    setCurrentPath(newPath)
  }

  function navigateUp() {
    const pathParts = currentPath.split("/").filter(Boolean)
    pathParts.pop()
    setCurrentPath(pathParts.join("/"))
  }

  const filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const pathBreadcrumbs = currentPath.split("/").filter(Boolean)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#039b9e] mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando archivos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Administrador de Archivos</h1>
              <p className="text-slate-600">Gestiona todos los archivos de la galería</p>
            </div>
            <div className="flex space-x-2">
              <Link href="/admin">
                <Button variant="outline">Volver al Panel</Button>
              </Link>
              <Button onClick={() => setShowCreateFolderModal(true)} variant="outline">
                <FolderPlus className="h-4 w-4 mr-2" />
                Nueva Carpeta
              </Button>
              <Button onClick={() => setShowUploadModal(true)} className="bg-[#039b9e] hover:bg-[#028a8e]">
                <Upload className="h-4 w-4 mr-2" />
                Subir Archivo
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {currentPath && (
                <Button variant="ghost" size="sm" onClick={navigateUp}>
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Atrás
                </Button>
              )}
              <div className="flex items-center space-x-1 text-sm text-slate-600">
                <span>gallery</span>
                {pathBreadcrumbs.map((part, index) => (
                  <span key={index}>
                    <span className="mx-1">/</span>
                    <span>{part}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Buscar archivos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Grid/List */}
      <div className="container mx-auto px-4 py-8">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {filteredFiles.map((file) => (
              <Card key={file.path} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-3">
                  <div className="text-center">
                    {file.type === "directory" ? (
                      <div onClick={() => navigateToFolder(file.name)} className="flex flex-col items-center">
                        <Folder className="h-12 w-12 text-blue-500 mb-2" />
                        <p className="text-sm font-medium truncate w-full">{file.name}</p>
                      </div>
                    ) : file.isImage ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          className="h-12 w-12 object-cover rounded mb-2"
                        />
                        <p className="text-xs truncate w-full">{file.name}</p>
                        <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="text-2xl mb-2">{getFileIcon(file.extension || "")}</div>
                        <p className="text-xs truncate w-full">{file.name}</p>
                        <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                      </div>
                    )}

                    {file.type === "file" && (
                      <div className="flex justify-center space-x-1 mt-2">
                        {file.isImage && (
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(file.path)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredFiles.map((file) => (
                  <div key={file.path} className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      {file.type === "directory" ? (
                        <Folder className="h-5 w-5 text-blue-500" />
                      ) : file.isImage ? (
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          className="h-8 w-8 object-cover rounded"
                        />
                      ) : (
                        <File className="h-5 w-5 text-slate-500" />
                      )}
                      <div>
                        <p
                          className={`font-medium ${file.type === "directory" ? "cursor-pointer text-blue-600 hover:text-blue-800" : ""}`}
                          onClick={file.type === "directory" ? () => navigateToFolder(file.name) : undefined}
                        >
                          {file.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {file.type === "file" && `${formatFileSize(file.size)} • `}
                          {new Date(file.lastModified).toLocaleDateString("es-ES")}
                        </p>
                      </div>
                    </div>

                    {file.type === "file" && (
                      <div className="flex space-x-2">
                        {file.isImage && (
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(file.path)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {filteredFiles.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Folder className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 mb-4">
                {searchTerm ? "No se encontraron archivos" : "Esta carpeta está vacía"}
              </p>
              <Button onClick={() => setShowUploadModal(true)} className="bg-[#039b9e] hover:bg-[#028a8e]">
                <Upload className="h-4 w-4 mr-2" />
                Subir Primer Archivo
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Subir Archivo</h3>
              <Input
                type="file"
                onChange={handleUpload}
                accept=".jpg,.jpeg,.png,.gif,.webp,.svg,.pdf,.doc,.docx,.txt"
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Create Folder Modal */}
      {showCreateFolderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Crear Nueva Carpeta</h3>
              <Input
                placeholder="Nombre de la carpeta"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const target = e.target as HTMLInputElement
                    if (target.value.trim()) {
                      handleCreateFolder(target.value.trim())
                    }
                  }
                }}
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setShowCreateFolderModal(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    const input = document.querySelector(
                      'input[placeholder="Nombre de la carpeta"]',
                    ) as HTMLInputElement
                    if (input?.value.trim()) {
                      handleCreateFolder(input.value.trim())
                    }
                  }}
                  className="bg-[#039b9e] hover:bg-[#028a8e]"
                >
                  Crear
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
