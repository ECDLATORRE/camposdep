import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import Image from "next/image"

export default function OrganigramaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Organigrama</h1>

                {/* Organigrama Image */}
                <div className="mb-8">
                  <Image
                    src="/images/organigrama-escuela.png"
                    width={800}
                    height={600}
                    alt="Organigrama Escuela Campos Deportivos"
                    className="w-full h-auto rounded-lg shadow-md border"
                  />
                </div>

                <div className="bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    El organigrama institucional muestra la estructura organizacional de la Escuela Municipal Campos
                    Deportivos, definiendo las líneas de autoridad, responsibility and comunicación entre los diferentes
                    estamentos que conforman nuestra comunidad educativa.
                  </p>
                </div>
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
