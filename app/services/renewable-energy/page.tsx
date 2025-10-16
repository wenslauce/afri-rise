import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Sun, CheckCircle2, Leaf, Battery } from "lucide-react"
import Link from "next/link"

export default function RenewableEnergyPage() {
  const services = [
    "Commercial & Industrial Solar EPC",
    "Oil-to-Renewable Transition Advisory",
    "Energy Financing Solutions",
    "Power Purchase Structuring",
    "Energy Efficiency Consulting",
    "Solar Farm Development",
    "Renewable Energy Procurement",
    "Carbon Credit Advisory",
  ]

  const solutions = [
    {
      icon: Sun,
      title: "Solar EPC",
      description: "End-to-end engineering, procurement, and construction services",
    },
    {
      icon: Leaf,
      title: "Transition Advisory",
      description: "Strategic guidance for moving from fossil fuels to renewables",
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Battery systems and energy storage solutions",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/services"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Renewable Energy & Solar Solutions</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Sun size={20} />
                <span className="text-sm font-medium">Energy Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Renewable Energy & Solar Solutions</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Sustainable energy solutions including solar EPC services and transition advisory for forward-thinking
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Power Your Future with Clean Energy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our renewable energy solutions help businesses transition to sustainable power sources, reducing costs
                and environmental impact while ensuring reliable energy supply.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {solutions.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <item.icon className="text-primary mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Renewable Energy & Solar Solutions"
                serviceDescription="Get a free energy assessment and learn how solar can benefit your business."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
