"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface DeleteNewsButtonProps {
  newsId: string
}

export function DeleteNewsButton({ newsId }: DeleteNewsButtonProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    if (!confirm("¿Estás seguro de que quieres eliminar esta noticia?")) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`/api/admin/news/${newsId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        router.refresh()
      } else {
        alert("Error al eliminar la noticia")
      }
    } catch (error) {
      alert("Error al eliminar la noticia")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
      className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  )
}
