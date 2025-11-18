import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "@/components/icons"

export function GlobalReachSection() {
  const regions = [
    {
      name: "East Africa",
      description: "Kenya, Tanzania, Uganda, Rwanda, Burundi - COMESA & EAC markets",
      markets: "Primary focus region",
    },
    {
      name: "West Africa",
      description: "Nigeria, Ghana, Senegal, Côte d'Ivoire - ECOWAS markets",
      markets: "Expanding presence",
    },
    {
      name: "Southern Africa",
      description: "South Africa, Botswana, Zambia, Zimbabwe - SADC markets",
      markets: "Strategic partnerships",
    },
    {
      name: "North Africa",
      description: "Egypt, Morocco, Tunisia - Mediterranean gateway",
      markets: "Growing network",
    },
    {
      name: "Middle East",
      description: "UAE (Dubai office), Saudi Arabia, Qatar - Investment hubs",
      markets: "Regional office",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">African Focus, Global Connections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Serving African businesses with offices in Nairobi and Dubai, backed by Ronami Group's international network
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((region, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">{region.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{region.description}</p>
                <div className="text-xs font-medium text-primary">{region.markets}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
