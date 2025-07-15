import Link from "next/link"
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#039b9e] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ECD</span>
              </div>
              <div>
                <h3 className="font-bold">Escuela Municipal</h3>
                <p className="text-sm text-[#039b9e]">Campos Deportivos</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">Educación inclusiva, un horizonte de posibilidades</p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-slate-400 hover:text-red-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/quienes-somos" className="text-slate-300 hover:text-white transition-colors">
                ¿Quiénes Somos?
              </Link>
              <Link href="/proyecto-educativo" className="text-slate-300 hover:text-white transition-colors">
                Proyecto Educativo
              </Link>
              <Link href="/noticias" className="text-slate-300 hover:text-white transition-colors">
                Noticias
              </Link>
              <Link href="/contacto" className="text-slate-300 hover:text-white transition-colors">
                Contacto
              </Link>
              <Link href="/galeria" className="text-slate-300 hover:text-white transition-colors">
                Galería
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">Av. Gabriela Mistral 01055</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">+56 45 226 2261</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">cdeportivos@temuco.cl</span>
              </div>
            </div>
          </div>

          {/* DAEM Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">DAEM Temuco</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">Av. Arturo Prat 0130</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">+56 45 297 3000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#039b9e]" />
                <span className="text-slate-300 text-sm">educacion@temuco.cl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            Copyright 2025 DAEM Temuco. Desarrollado por{" "}
            <span className="text-[#039b9e]">Nicolas Latorre (nicolaaaas.lt)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
