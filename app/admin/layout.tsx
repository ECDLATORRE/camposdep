import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Settings, FileText, Users, Calendar, BarChart3 } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panel de Administración - Escuela Campos Deportivos",
  description: "Panel de administración para gestionar el contenido del sitio web",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menuItems = [
    {
      href: "/admin/noticias",
      icon: <FileText className="h-5 w-5" />,
      label: "Noticias",
    },
    {
      href: "/admin/usuarios",
      icon: <Users className="h-5 w-5" />,
      label: "Usuarios",
    },
    {
      href: "/admin/eventos",
      icon: <Calendar className="h-5 w-5" />,
      label: "Eventos",
    },
    {
      href: "/admin/estadisticas",
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Estadísticas",
    },
  ]

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          {/* Admin Header */}
          <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-xl font-bold text-[#039b9e]">
                    Escuela Campos Deportivos
                  </Link>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-600">Panel de Administración</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-slate-600 hover:text-[#039b9e] transition-colors">
                    Ver sitio web
                  </Link>
                  <Settings className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
          </header>

          <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-sm min-h-screen">
              <nav className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-slate-700 rounded-lg hover:bg-[#039b9e]/10 hover:text-[#039b9e] transition-colors"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
