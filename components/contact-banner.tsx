import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Tienes preguntas?</h2>
            <p className="text-xl text-slate-300">
              Estamos aquí para ayudarte. Contáctanos y conoce más sobre nuestra propuesta educativa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#039b9e]" />
                <span>+56 45 226 2261</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#039b9e]" />
                <span>cdeportivos@temuco.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#039b9e]" />
                <span>Av. Gabriela Mistral 01055, Temuco</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <Button size="lg" className="bg-[#039b9e] hover:bg-[#028a8e] text-white">
              Contáctanos Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
