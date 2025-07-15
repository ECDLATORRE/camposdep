import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { ImageGallery } from "@/components/image-gallery"

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Galería de Fotos</h1>
                <p className="text-slate-700 mb-8 leading-relaxed">
                  Explora nuestra colección de imágenes que capturan la vida escolar, eventos deportivos, actividades
                  culturales y momentos especiales en la Escuela Municipal Campos Deportivos.
                </p>
                <ImageGallery />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ActivityCalendar />
            <InterestSites />
          </div>
        </div>
      </div>
    </div>
  )
}
