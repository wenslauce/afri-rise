import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Globe, CheckCircle2, Wheat, Zap, Droplet } from "lucide-react"
import Link from "next/link"

export default function CommoditiesTradingPage() {
  const commodities = [
    {
      icon: Wheat,
      title: "Agricultural Commodities",
      items: ["Tea", "Coffee", "Grains", "Cocoa", "Sugar"],
    },
    {
      icon: Zap,
      title: "Metals & Energy",
      items: ["Gold", "Copper", "Aluminum", "Coal", "Natural Gas"],
    },
    {
      icon: Droplet,
      title: "Oil & Gas",
      items: ["Crude Oil", "Refined Products", "LNG", "Petroleum"],
    },
  ]

  const services = [
    "International Sourcing & Procurement",
    "Offtake Agreements & Long-term Contracts",
    "Spot Trading & Market Making",
    "Quality Assurance & Inspection",
    "Price Risk Management",
    "Logistics Coordination",
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
            <span>Commodities Trading & Brokerage</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Globe size={20} />
                <span className="text-sm font-medium">Trading Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Commodities Trading & Brokerage</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Expert brokerage services across agricultural commodities, metals, energy products, and oil & gas with
                global reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Commodities We Trade</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We facilitate the trading and brokerage of a wide range of commodities, connecting buyers and sellers
                across global markets with secure, efficient transactions.
              </p>

              <div className="space-y-6 mb-8">
                {commodities.map((category, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <category.icon className="text-primary flex-shrink-0" size={32} strokeWidth={1.5} />
                        <div>
                          <h3 className="font-semibold mb-2">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">{category.items.join(", ")}</p>
                        </div>
                      </div>
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
                serviceName="Commodities Trading & Brokerage"
                serviceDescription="Connect with our commodities trading experts to discuss your sourcing, selling, or brokerage needs."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
