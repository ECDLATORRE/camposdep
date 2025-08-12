"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ActivityCalendar } from "@/components/activity-calendar"
import { InterestSites } from "@/components/interest-sites"
import { Mail } from "lucide-react"

export default function CuerpoDocentePage() {
  const allTeachers = [
    {
      name: "Verónica Ivette Delgado Iturra",
      subject: "Prof. Educación Física / Lenguaje y Comunicación",
      email: "vdelgadoiturra@camposdeportivos-temuco.cl",
    },
    {
      name: "María Leonor Jacqueline Sepúlveda Bastida",
      subject: "Prof. General Básica / Lenguaje y Comunicación",
      email: "msepulveda@camposdeportivos-temuco.cl",
    },
    {
      name: "Eva Patricia Villa Polanco",
      subject: "Prof. Educación Física / Lenguaje y Comunicación",
      email: "evilla@camposdeportivos-temuco.cl",
    },
    {
      name: "María Elizabeth del Carmen Muñoz Pineda",
      subject: "Prof. Matemática / Educación Parvularia / General Básica",
      email: "mmunoz@camposdeportivos-temuco.cl",
    },
    {
      name: "Hilda Andrea Ortiz Gaete",
      subject: "Prof. Educación Parvularia / General Básica",
      email: "hortiz@camposdeportivos-temuco.cl",
    },
    {
      name: "Claudia del Carmen Rodríguez Venegas",
      subject: "Prof. General Básica",
      email: "crodriguez@camposdeportivos-temuco.cl",
    },
    {
      name: "Mónica Andrea Verdejo Dimter",
      subject: "Prof. General Básica",
      email: "mverdejo@camposdeportivos-temuco.cl",
    },
    {
      name: "Sandra del Pilar Leal Rubilar",
      subject: "Prof. General Básica",
      email: "sleal@camposdeportivos-temuco.cl",
    },
    {
      name: "Ana María de Lourdes Mohor Yamal",
      subject: "Prof. Educación Parvularia",
      email: "amohor@camposdeportivos-temuco.cl",
    },
    {
      name: "Ana Ñanculef",
      subject: "Prof. Lengua Indígena",
      email: "ananculef@camposdeportivos-temuco.cl",
    },
    {
      name: "Claudia Loreto Figueroa Vega",
      subject: "Ed. de Párvulos – Jefa UTP",
      email: "cfigueroa@camposdeportivos-temuco.cl",
    },
    {
      name: "Claudia Zusana Cornejo Falcón",
      subject: "Prof. General Básica",
      email: "ccornejo@camposdeportivos-temuco.cl",
    },
    {
      name: "Loida Ester Villagrán Studer",
      subject: "Prof. Religión",
      email: "lvillagran@camposdeportivos-temuco.cl",
    },
    {
      name: "Gester Ísnelda Quezada Méndez",
      subject: "Prof. Religión",
      email: "gquezada@camposdeportivos-temuco.cl",
    },
    {
      name: "Margaret Maribel Heise Rivas",
      subject: "Coordinadora CRA / Prof. Educación Parvularia",
      email: "mheise@camposdeportivos-temuco.cl",
    },
    {
      name: "Viviana Estela Catrileo Porma",
      subject: "Prof. Religión",
      email: "vcatrileo@camposdeportivos-temuco.cl",
    },
    {
      name: "María Graciela Sandoval Rivera",
      subject: "Prof. Educación Parvularia",
      email: "msandoval@camposdeportivos-temuco.cl",
    },
    {
      name: "Elizabeth Andrea Pailamilla Díaz",
      subject: "Prof. General Básica",
      email: "epailamilla@camposdeportivos-temuco.cl",
    },
    {
      name: "Verenisse Andrea Sagredo Contreras",
      subject: "Prof. Educación Diferencial",
      email: "vsagredo@camposdeportivos-temuco.cl",
    },
    {
      name: "María Cristina Painemal Painemal",
      subject: "Prof. Lengua Indígena",
      email: "mpainemal@camposdeportivos-temuco.cl",
    },
    {
      name: "María José Pérez Linco",
      subject: "Prof. General Básica",
      email: "mperez@camposdeportivos-temuco.cl",
    },
    {
      name: "Soraya del Carmen Aburto Leal",
      subject: "Prof. Artes – Música",
      email: "saburto@camposdeportivos-temuco.cl",
    },
    {
      name: "Gissela Andrea Sánchez Véliz",
      subject: "Prof. Lenguaje y Comunicación",
      email: "gsanchez@camposdeportivos-temuco.cl",
    },
    {
      name: "Karin Andrea Morales Cárdenas",
      subject: "Prof. General Básica",
      email: "kmorales@camposdeportivos-temuco.cl",
    },
    {
      name: "Paola Andrea Henríquez Márquez",
      subject: "Prof. Educación Diferencial",
      email: "phenriquez@camposdeportivos-temuco.cl",
    },
    {
      name: "Malu Paola Vivanco Opazo",
      subject: "Prof. General Básico",
      email: "mvivanco@camposdeportivos-temuco.cl",
    },
    {
      name: "Mariana Belén Ramírez Huircán",
      subject: "Prof. Educación Diferencial / General Básica / Matemática",
      email: "mramirez@camposdeportivos-temuco.cl",
    },
    {
      name: "Alejandra del Pilar Peña Trecamán",
      subject: "Prof. General Básico",
      email: "apena@camposdeportivos-temuco.cl",
    },
    {
      name: "Noelia Alejandra Galindo Saldivia",
      subject: "Prof. Matemática",
      email: "ngalindo@camposdeportivos-temuco.cl",
    },
    {
      name: "Víctor Alfonso Gayoso Lillo",
      subject: "Prof. General Básico – UTP / Matemática",
      email: "vgayoso@camposdeportivos-temuco.cl",
    },
    {
      name: "Deisy Elizabeth Quezada Segura",
      subject: "Prof. Matemática",
      email: "dquezada@camposdeportivos-temuco.cl",
    },
    {
      name: "Mery Liliannette Salinas Hernández",
      subject: "Prof. Matemática",
      email: "msalinas@camposdeportivos-temuco.cl",
    },
    {
      name: "Marcela Andrea Lizama Ñancupil",
      subject: "Prof. General Básico – Inglés",
      email: "mlizama@camposdeportivos-temuco.cl",
    },
    {
      name: "Graciela Noemí Vivanco Pacheco",
      subject: "Prof. General Básico",
      email: "gvivanco@camposdeportivos-temuco.cl",
    },
    {
      name: "Daniel Alejandro Aguilera Villanueva",
      subject: "Prof. Educación Física – Inspector General",
      email: "daguilera@camposdeportivos-temuco.cl",
    },
    {
      name: "Camila Fernanda Mardones Essus",
      subject: "Prof. Educación Diferencial",
      email: "cmardones@camposdeportivos-temuco.cl",
    },
    {
      name: "Valentina Isabel Navarrete Mariqueo",
      subject: "Prof. Educación Diferencial",
      email: "vnavarrete@camposdeportivos-temuco.cl",
    },
    {
      name: "Carolina Belén Labrín Lemonao",
      subject: "Prof. General Básico",
      email: "clabrin@camposdeportivos-temuco.cl",
    },
    {
      name: "Juan Luis Villablanca Méndez",
      subject: "Prof. Educación Física / General Básica – Inspector General",
      email: "jvillablanca@camposdeportivos-temuco.cl",
    },
    {
      name: "David Hernán Navarrete Veloso",
      subject: "Prof. General Básico – Inspector General",
      email: "dnavarrete@camposdeportivos-temuco.cl",
    },
    {
      name: "Iris Waleska Venegas Alvial",
      subject: "Prof. General Básica",
      email: "ivenegas@camposdeportivos-temuco.cl",
    },
    {
      name: "Yoselyn Alejandra Flores Valdebenito",
      subject: "Prof. Lengua Indígena / Lenguaje y Comunicación / Educación Física",
      email: "yflores@camposdeportivos-temuco.cl",
    },
    {
      name: "Juana Mercedes Ñunque Pailliao",
      subject: "Prof. Lenguaje y Comunicación / Educación Física",
      email: "jnunque@camposdeportivos-temuco.cl",
    },
    {
      name: "Jorge Andrés Becker Navarro",
      subject: "Prof. Educación Física",
      email: "jorgebecker@camposdeportivos-temuco.cl",
    },
    {
      name: "María Belén Concha Maldonado",
      subject: "Prof. General Básico",
      email: "mconcha@camposdeportivos-temuco.cl",
    },
    {
      name: "Petre Jacob Espinoza Cortez",
      subject: "Prof. Religión",
      email: "pespinoza@camposdeportivos-temuco.cl",
    },
    {
      name: "Catherine Inés Ñancucheo Chihuaicura",
      subject: "Prof. Inglés",
      email: "cnancucheo@camposdeportivos-temuco.cl",
    },
    {
      name: "Joselyn Patricia González Vega",
      subject: "Prof. Historia, Geografía y Educación Cívica – UTP",
      email: "jgonzalez@camposdeportivos-temuco.cl",
    },
    {
      name: "Alejandro Mauricio Rebolledo López",
      subject: "Prof. Educación Física – Coordinador Extraescolar",
      email: "arebolledo@camposdeportivos-temuco.cl",
    },
    {
      name: "Eric Albert Ortiz Suazo",
      subject: "Prof. Educación Física – Coordinador Convivencia Escolar",
      email: "eric.ortiz@camposdeportivos-temuco.cl",
    },
    {
      name: "Camila Alejandra Torres Mancilla",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "ctorres.mancilla@camposdeportivos-temuco.cl",
    },
    {
      name: "Madelin Rossi Álvarez Liencura",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "malvarez@camposdeportivos-temuco.cl",
    },
    {
      name: "Cristian Rodrigo Retamal Valderrama",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "cretamal@camposdeportivos-temuco.cl",
    },
    {
      name: "Juan Pablo Quiroga Gallardo",
      subject: "PROF. CIENCIAS / EDUCACIÓN DIFERENCIAL",
      email: "jquiroga@camposdeportivos-temuco.cl",
    },
    {
      name: "María José Navarro Burgemeister",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "mnavarro@camposdeportivos-temuco.cl",
    },
    {
      name: "Sandra Elizabeth Torres Bustamante",
      subject: "PROF. EDUC. DIFERENCIAL",
      email: "storres@camposdeportivos-temuco.cl",
    },
    {
      name: "Fernanda Danila Araya Montecinos",
      subject: "PROF. EDUCACIÓN DIFERENCIAL / GENERAL BÁSICA",
      email: "faraya@camposdeportivos-temuco.cl",
    },
    {
      name: "Verónica Belén Parada Menares",
      subject: "PROF. GENERAL BÁSICA",
      email: "vparada@camposdeportivos-temuco.cl",
    },
    {
      name: "Valentina Constanza Rival Acuña",
      subject: "PROF. GENERAL BÁSICA",
      email: "vrival@camposdeportivos-temuco.cl",
    },
    {
      name: "Fabián Eduardo Cisterna Uyarte",
      subject: "PROF. EDUCACIÓN FÍSICA / EDUCACIÓN DIFERENCIAL / HISTORIA",
      email: "fcisterna@camposdeportivos-temuco.cl",
    },
    {
      name: "Teresita del Carmen Huichañir Catalán",
      subject: "PROF. EDUCACIÓN DIFERENCIAL",
      email: "thuichanir@camposdeportivos-temuco.cl",
    },
    {
      name: "Rodrigo Javier San Martín Arias",
      subject: "PROF. HISTORIA",
      email: "rsanmartin@camposdeportivos-temuco.cl",
    },
    {
      name: "Fares Gabriel Silhi Vargas",
      subject: "PROF. EDUCACIÓN FÍSICA",
      email: "fsilhi@camposdeportivos-temuco.cl",
    },
    {
      name: "Milena Andrea Vivanco Hormazábal",
      subject: "PROF. EDUCACIÓN DIFERENCIAL",
      email: "mvivanco2@camposdeportivos-temuco.cl",
    },
    {
      name: "César Daniel Camacho Correa",
      subject: "PROF. GENERAL BÁSICO",
      email: "ccamacho@camposdeportivos-temuco.cl",
    },
    {
      name: "Cristofer Matías Villarroel Miranda",
      subject: "PROF. EDUCACIÓN DIFERENCIAL",
      email: "cvillarroel@camposdeportivos-temuco.cl",
    },
    {
      name: "Pamela del Carmen Tripailaf Lefio",
      subject: "PROF. LENGUA INDÍGENA",
      email: "ptripailaf@camposdeportivos-temuco.cl",
    },
    {
      name: "Claudia Andrea Pfeil Barra",
      subject: "PROF. EDUCACIÓN PARVULARIA",
      email: "cpfeil@camposdeportivos-temuco.cl",
    },
    {
      name: "Bernabé del Tránsito Jara Vidal",
      subject: "PROF. RELIGIÓN",
      email: "bjara@camposdeportivos-temuco.cl",
    },
    {
      name: "Nelly Elizabeth Correa Martínez",
      subject: "PROF. MATEMÁTICA",
      email: "ncorrea@camposdeportivos-temuco.cl",
    },
    {
      name: "Gloria María Garrido Piccioli",
      subject: "PROF. EDUCACIÓN PARVULARIA",
      email: "ggarrido@camposdeportivos-temuco.cl",
    },
    {
      name: "Monica Opazo",
      subject: "PROF. EDUCACIÓN PARVULARIA / LENGUAJE Y COMUNICACIÓN – COORDINADORA INF. EDUCATIVA",
      email: "mopazo@camposdeportivos-temuco.cl",
    },
    {
      name: "Rodrigo Cuevas Mella",
      subject: "PROF. LENGUAJE Y COMUNICACIÓN – COORDINADOR INF. EDUCATIVA",
      email: "rodrigo.cuevas@camposdeportivos-temuco.cl",
    },
    {
      name: "Sadya Ludmila Guerrero Corona",
      subject: "PROF. EDUCACIÓN PARVULARIA",
      email: "Sguerrero@camposdeportivos-temuco.cl",
    },
    {
      name: "Marlenne del Carmen Morales Troncoso",
      subject: "PROF. LENGUAJE Y COMUNICACIÓN – DIRECTOR / EDUCACIÓN FÍSICA – INSPECTORA GENERAL",
      email: "mmorales@camposdeportivos-temuco.cl",
    },
    {
      name: "Layo Gómez Acuña",
      subject: "PROF. GENERAL BÁSICO – DIRECTOR",
      email: "layo.gomez@camposdeportivos.cl",
    },
    {
      name: "Viviana Cecilia Delgado Hermosilla",
      subject: "PROFESORA EDUCACIÓN FÍSICA – INSPECTORA GENERAL",
      email: "vdelgadohermosilla@camposdeportivos-temuco.cl",
    },
  ]

  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
  }

  const teachers = chunkArray(allTeachers, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">Cuerpo Docente</h1>

                <div className="grid gap-6">
                  {teachers.map((teacherGroup, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6">
                      {teacherGroup.map((teacher, teacherIndex) => (
                        <div
                          key={teacherIndex}
                          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow w-full"
                        >
                          {/* Placeholder para imagen del profesor */}
                          <div className="flex justify-center mb-4">
                            <img
                              src="/placeholder.svg?height=120&width=100"
                              alt={teacher.name}
                              className="w-20 h-24 object-cover rounded-lg shadow-sm"
                            />
                          </div>

                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-4 md:mb-0 text-center md:text-left">
                              <h3 className="text-lg font-bold text-slate-800">{teacher.name}</h3>
                              <p className="text-[#039b9e] font-medium">{teacher.subject}</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                              <Mail className="h-4 w-4 text-[#039b9e]" />
                              <a
                                href={`mailto:${teacher.email}`}
                                className="text-sm text-slate-600 hover:text-[#039b9e] transition-colors"
                              >
                                {teacher.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#039b9e]/10 rounded-lg p-6">
                  <p className="text-slate-700 leading-relaxed">
                    Nuestro cuerpo docente está conformado por profesionales comprometidos con la excelencia educativa,
                    especializados en diferentes áreas del conocimiento y dedicados a la formación integral de nuestros
                    estudiantes.
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
