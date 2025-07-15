"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Facebook, Youtube, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="italic">{"Educación inclusiva, un horizonte de posibilidades"}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+56 45 226 2261</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>cdeportivos@temuco.cl</span>
            </div>
            <div className="flex space-x-2">
              <Facebook className="h-4 w-4 cursor-pointer hover:text-blue-400" />
              <Youtube className="h-4 w-4 cursor-pointer hover:text-red-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#039b9e] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ECD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Escuela Municipal</h1>
                <p className="text-sm text-[#039b9e]">Campos Deportivos</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Inicio
              </Link>

              {/* Establecimiento Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                  <span>Establecimiento</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/quienes-somos">¿Quiénes Somos?</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/organigrama">Organigrama</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/director">Director</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/cuerpo-docente">Cuerpo Docente</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/equipo-directivo">Equipo Directivo</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/asistentes">Asistentes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/proyecto-educativo">Proyecto Educativo</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/reglamentos">Reglamentos</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/planes" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Planes
              </Link>
              <Link href="/noticias" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Noticias
              </Link>
              <Link href="/contacto" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Contacto
              </Link>
              <Link href="/certificados" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Certificados
              </Link>
              <Link href="/encuesta" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Encuesta
              </Link>
              <Link href="/enlaces" className="text-slate-700 hover:text-[#039b9e] font-medium transition-colors">
                Enlaces
              </Link>
              <Button className="bg-[#039b9e] hover:bg-[#028a8e]">Matrícula 2025</Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Inicio
                </Link>
                <div className="space-y-2 pl-4">
                  <div className="font-medium text-slate-800">Establecimiento</div>
                  <Link href="/quienes-somos" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    ¿Quiénes Somos?
                  </Link>
                  <Link href="/organigrama" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Organigrama
                  </Link>
                  <Link href="/director" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Director
                  </Link>
                  <Link href="/cuerpo-docente" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Cuerpo Docente
                  </Link>
                  <Link href="/equipo-directivo" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Equipo Directivo
                  </Link>
                  <Link href="/asistentes" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Asistentes
                  </Link>
                  <Link href="/proyecto-educativo" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Proyecto Educativo
                  </Link>
                  <Link href="/reglamentos" className="block text-slate-600 hover:text-[#039b9e] text-sm">
                    Reglamentos
                  </Link>
                </div>
                <Link href="/planes" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Planes
                </Link>
                <Link href="/noticias" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Noticias
                </Link>
                <Link href="/contacto" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Contacto
                </Link>
                <Link href="/certificados" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Certificados
                </Link>
                <Link href="/encuesta" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Encuesta
                </Link>
                <Link href="/enlaces" className="text-slate-700 hover:text-[#039b9e] font-medium">
                  Enlaces
                </Link>
                <Button className="bg-[#039b9e] hover:bg-[#028a8e] w-fit">Matrícula 2025</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
