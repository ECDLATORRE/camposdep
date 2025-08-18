import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function InterestSites() {
  const sites = [
    {
      name: "Postulación Online Aquí",
      color: "bg-[#039b9e]",
      textColor: "text-white",
      url: "#",
    },
    {
      name: "ESTUDIO",
      color: "bg-yellow-400",
      textColor: "text-black",
      url: "#",
    },
    {
      name: "Lirmi",
      color: "bg-gradient-to-r from-yellow-400 via-purple-500 to-cyan-400",
      textColor: "text-white",
      url: "https://lms.lirmi.com/login",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-slate-800">Sitios de Interés</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {sites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target={site.url.startsWith("http") ? "_blank" : "_self"}
            rel={site.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${site.color} ${site.textColor} rounded-lg p-4 cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-between block`}
          >
            <span className="font-medium">{site.name}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        ))}
      </CardContent>
    </Card>
  )
}
