import { Card, CardContent } from "@/components/ui/card"
import { Lock, Database, Scale, AlertCircle } from "@/components/icons"

export function SecurityHighlightsSection() {
  const features = [
    {
      icon: Lock,
      title: "Transparent Operations",
      description: "Clear, honest communication and ethical practices in all our fund management and consultancy services",
    },
    {
      icon: Database,
      title: "Multi-Sector Expertise",
      description: "Specialized knowledge across Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, ICT, and Greenfield projects",
    },
    {
      icon: Scale,
      title: "Regulatory Excellence",
      description: "Full compliance with Kenyan and East African business regulations, backed by Ronami Group's established partnerships",
    },
    {
      icon: AlertCircle,
      title: "Social Impact Assessment",
      description: "Every project evaluated for communal social impact and sustainable development potential",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Commitment to Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional integrity, expert guidance, and dedication to African business success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
