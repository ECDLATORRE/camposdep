"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { deleteUserAction } from "./actions"
import { useState } from "react"

interface DeleteUserButtonProps {
  userId: string
}

export function DeleteUserButton({ userId }: DeleteUserButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      return
    }

    setLoading(true)
    await deleteUserAction(userId)
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
