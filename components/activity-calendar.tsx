import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Eye } from "lucide-react"

export function ActivityCalendar() {
  const activities = [
    {
      date: "06",
      month: "MAR",
      title: "Inicio de año escolar",
      color: "bg-red-500",
    },
    {
      date: "05",
      month: "MAR",
      title: "Inicio período de matrículas",
      color: "bg-red-500",
    },
    {
      date: "20",
      month: "MAR",
      title: "Finalización Postulación Beneficio de Transporte Escolar 2025",
      color: "bg-red-500",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-[#039b9e] text-white">
        <CardTitle className="flex items-center justify-between">
          <span>Calendario Actividades</span>
          <Calendar className="h-5 w-5" />
        </CardTitle>
        <div className="flex items-center space-x-2 text-teal-100">
          <Eye className="h-4 w-4" />
          <span className="text-sm">VER TODAS LAS ACTIVIDADES</span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
          >
            <div className={`${activity.color} text-white rounded-lg p-3 text-center min-w-[60px] mr-4`}>
              <div className="text-lg font-bold">{activity.date}</div>
              <div className="text-xs">{activity.month}</div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-800">{activity.title}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
