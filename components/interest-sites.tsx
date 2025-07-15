import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function InterestSites() {
  const sites = [
    {
      name: "Postulación Online Aquí",
      color: "bg-[#039b9e]",
      textColor: "text-white",
    },
    {
      name: "ESTUDIO",
      color: "bg-yellow-400",
      textColor: "text-black",
    },
    {
      name: "HySciex",
      color: "bg-blue-600",
      textColor: "text-white",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-slate-800">Sitios de Interés</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {sites.map((site, index) => (
          <div
            key={index}
            className={`${site.color} ${site.textColor} rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-between`}
          >
            <span className="font-medium">{site.name}</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
