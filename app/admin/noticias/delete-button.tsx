"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { deleteNewsAction } from "./actions"
import { useState } from "react"

interface DeleteNewsButtonProps {
  newsId: string
}

export function DeleteNewsButton({ newsId }: DeleteNewsButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm("¿Estás seguro de que quieres eliminar esta noticia?")) {
      return
    }

    setLoading(true)
    await deleteNewsAction(newsId)
    setLoading(false)
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
