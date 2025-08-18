import { promises as fs } from "fs"
import path from "path"

export interface FileItem {
  name: string
  path: string
  type: "file" | "directory"
  size: number
  lastModified: Date
  extension?: string
  isImage: boolean
  url: string
}

const GALLERY_PATH = path.join(process.cwd(), "public", "gallery")
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".pdf", ".doc", ".docx", ".txt"]
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]

export async function ensureGalleryDirectory() {
  try {
    await fs.access(GALLERY_PATH)
  } catch {
    await fs.mkdir(GALLERY_PATH, { recursive: true })
  }
}

export async function getDirectoryContents(relativePath = ""): Promise<FileItem[]> {
  await ensureGalleryDirectory()

  const fullPath = path.join(GALLERY_PATH, relativePath)
  const fileItems: FileItem[] = []

  try {
    const items = await fs.readdir(fullPath, { withFileTypes: true })

    for (const item of items) {
      const itemPath = path.join(fullPath, item.name)
      const stats = await fs.stat(itemPath)
      const extension = path.extname(item.name).toLowerCase()

      // Solo incluir archivos permitidos
      if (item.isFile() && !ALLOWED_EXTENSIONS.includes(extension)) {
        continue
      }

      const itemRelativePath = path.join("gallery", relativePath, item.name).replace(/\\/g, "/")

      fileItems.push({
        name: item.name,
        path: itemRelativePath,
        type: item.isDirectory() ? "directory" : "file",
        size: stats.size,
        lastModified: stats.mtime,
        extension: item.isFile() ? extension : undefined,
        isImage: item.isFile() && IMAGE_EXTENSIONS.includes(extension),
        url: `/${itemRelativePath}`,
      })
    }

    // Ordenar: directorios primero, luego archivos por nombre
    return fileItems.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "directory" ? -1 : 1
      }
      return a.name.localeCompare(b.name)
    })
  } catch (error) {
    console.error("Error reading directory:", error)
    return []
  }
}

export async function deleteFile(relativePath: string): Promise<boolean> {
  try {
    const fullPath = path.join(GALLERY_PATH, relativePath)
    const stats = await fs.stat(fullPath)

    if (stats.isDirectory()) {
      await fs.rmdir(fullPath, { recursive: true })
    } else {
      await fs.unlink(fullPath)
    }

    return true
  } catch (error) {
    console.error("Error deleting file:", error)
    return false
  }
}

export async function createDirectory(relativePath: string, name: string): Promise<boolean> {
  try {
    const fullPath = path.join(GALLERY_PATH, relativePath, name)
    await fs.mkdir(fullPath, { recursive: true })
    return true
  } catch (error) {
    console.error("Error creating directory:", error)
    return false
  }
}

export async function saveUploadedFile(file: File, relativePath = ""): Promise<string | null> {
  try {
    await ensureGalleryDirectory()

    const extension = path.extname(file.name).toLowerCase()
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      throw new Error("Tipo de archivo no permitido")
    }

    const fileName = `${Date.now()}-${file.name}`
    const fullPath = path.join(GALLERY_PATH, relativePath, fileName)

    const buffer = Buffer.from(await file.arrayBuffer())
    await fs.writeFile(fullPath, buffer)

    return path.join(relativePath, fileName).replace(/\\/g, "/")
  } catch (error) {
    console.error("Error saving file:", error)
    return null
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export function getFileIcon(extension: string): string {
  const iconMap: Record<string, string> = {
    ".pdf": "📄",
    ".doc": "📝",
    ".docx": "📝",
    ".txt": "📄",
    ".jpg": "🖼️",
    ".jpeg": "🖼️",
    ".png": "🖼️",
    ".gif": "🖼️",
    ".webp": "🖼️",
    ".svg": "🖼️",
  }
  return iconMap[extension.toLowerCase()] || "📄"
}
