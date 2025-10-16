import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Truck, CheckCircle2, Shield, MapPin, Package } from "lucide-react"
import Link from "next/link"

export default function LogisticsPage() {
  const services = [
    "Freight & Customs Coordination",
    "Cross-Border Distribution",
    "Shipment Risk Management",
    "SKR-Secured Logistics",
    "Armored Transport Services",
    "Warehousing & Storage",
    "Last-Mile Delivery",
    "Real-time Tracking & Monitoring",
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Armored vehicles and security protocols for high-value shipments",
    },
    {
      icon: MapPin,
      title: "Global Network",
      description: "Established routes across Africa, Middle East, Asia, and beyond",
    },
    {
      icon: Package,
      title: "End-to-End Service",
      description: "From pickup to delivery with full customs clearance support",
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
            <span>Logistics & Supply Chain Support</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Truck size={20} />
                <span className="text-sm font-medium">Logistics Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Logistics & Supply Chain Support</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                End-to-end logistics coordination ensuring secure, efficient movement of high-value goods across
                borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Logistics Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our logistics services are designed for businesses moving high-value commodities and assets across
                international borders, with specialized security and tracking capabilities.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <feature.icon className="text-primary mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                serviceName="Logistics & Supply Chain Support"
                serviceDescription="Tell us about your logistics needs and we'll design a secure, efficient solution for your shipments."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
