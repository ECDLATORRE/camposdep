export interface GalleryImage {
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

// Simulamos almacenamiento en memoria (en producción usaríamos una base de datos)
const galleryImages: GalleryImage[] = [
  {
    id: "1",
    filename: "escuela-exterior.jpg",
    originalName: "escuela-exterior.jpg",
    url: "/images/escuela-exterior.jpg",
    alt: "Vista exterior del edificio escolar",
    category: "infraestructura",
    uploadedAt: new Date().toISOString(),
    uploadedBy: "AdminNicolas",
    size: 1024000,
    mimeType: "image/jpeg",
  },
  {
    id: "2",
    filename: "patio-escuela-estudiantes.jpg",
    originalName: "patio-escuela-estudiantes.jpg",
    url: "/images/patio-escuela-estudiantes.jpg",
    alt: "Estudiantes en el patio de la escuela",
    category: "vida-escolar",
    uploadedAt: new Date().toISOString(),
    uploadedBy: "AdminNicolas",
    size: 856000,
    mimeType: "image/jpeg",
  },
  {
    id: "3",
    filename: "director-layo-gomez.jpg",
    originalName: "director-layo-gomez.jpg",
    url: "/images/director-layo-gomez.jpg",
    alt: "Director Layo Gómez Acuña",
    category: "equipo",
    uploadedAt: new Date().toISOString(),
    uploadedBy: "AdminNicolas",
    size: 742000,
    mimeType: "image/jpeg",
  },
  {
    id: "4",
    filename: "noticia-transporte.png",
    originalName: "noticia-transporte.png",
    url: "/images/noticia-transporte.png",
    alt: "Información sobre transporte escolar",
    category: "noticias",
    uploadedAt: new Date().toISOString(),
    uploadedBy: "AdminNicolas",
    size: 512000,
    mimeType: "image/png",
  },
]

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return galleryImages.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
}

export async function getGalleryImagesByCategory(category: string): Promise<GalleryImage[]> {
  return galleryImages
    .filter((img) => img.category === category)
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
}

export async function addGalleryImage(imageData: Omit<GalleryImage, "id" | "uploadedAt">): Promise<GalleryImage> {
  const newImage: GalleryImage = {
    ...imageData,
    id: Date.now().toString(),
    uploadedAt: new Date().toISOString(),
  }
  galleryImages.push(newImage)
  return newImage
}

export async function deleteGalleryImage(id: string): Promise<boolean> {
  const index = galleryImages.findIndex((img) => img.id === id)
  if (index > -1) {
    galleryImages.splice(index, 1)
    return true
  }
  return false
}

export async function updateGalleryImage(id: string, updates: Partial<GalleryImage>): Promise<GalleryImage | null> {
  const index = galleryImages.findIndex((img) => img.id === id)
  if (index > -1) {
    galleryImages[index] = { ...galleryImages[index], ...updates }
    return galleryImages[index]
  }
  return null
}
