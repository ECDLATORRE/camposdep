"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    unidad: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Contacto</h1>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="bg-teal-600 text-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 mt-1" />
                          <div>
                            <p className="font-medium">Dirección:</p>
                            <p className="text-teal-100">Av. Gabriela Mistral 01055</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 mt-1" />
                          <div>
                            <p className="font-medium">Teléfono:</p>
                            <p className="text-teal-100">+56 45 226 2261</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Mail className="h-5 w-5 mt-1" />
                          <div>
                            <p className="font-medium">Email:</p>
                            <p className="text-teal-100">cdeportivos@temuco.cl</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="h-5 w-5 mt-1" />
                          <div>
                            <p className="font-medium">Horarios de atención:</p>
                            <p className="text-teal-100">Lunes a Jueves: 8:30 - 17:00 hrs</p>
                            <p className="text-teal-100">Viernes: 8:30 - 13:30 hrs</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p>Mapa de ubicación</p>
                        <p className="text-sm">Av. Gabriela Mistral 01055, Temuco</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-6">Envíanos un mensaje</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Nombre *</label>
                          <Input
                            value={formData.nombre}
                            onChange={(e) => handleInputChange("nombre", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Apellido *</label>
                          <Input
                            value={formData.apellido}
                            onChange={(e) => handleInputChange("apellido", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                        <Input
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Unidad a contactar:</label>
                        <Select onValueChange={(value) => handleInputChange("unidad", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="direccion">Dirección</SelectItem>
                            <SelectItem value="secretaria">Secretaría</SelectItem>
                            <SelectItem value="pedagogica">Unidad Técnico Pedagógica</SelectItem>
                            <SelectItem value="convivencia">Convivencia Escolar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje *</label>
                        <Textarea
                          rows={4}
                          value={formData.mensaje}
                          onChange={(e) => handleInputChange("mensaje", e.target.value)}
                          required
                        />
                      </div>

                      <p className="text-xs text-slate-500">LOS CAMPOS MARCADOS CON * SON OBLIGATORIOS</p>

                      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                        Enviar
                      </Button>
                    </form>
                  </div>
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
