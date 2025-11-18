import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import Link from "next/link"
import { ArrowRight, Zap, Sun, Globe, Battery, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Energy Sector Solutions | Afri-Rise",
  description: "Fund management and consultancy for renewable energy, power generation, and energy infrastructure projects across Africa.",
  keywords: ["energy", "renewable energy", "solar", "power generation", "African energy", "Afri-Rise"],
}

export default function EnergyPage() {
  const solutions = [
    {
      icon: Sun,
      title: "Renewable Energy Projects",
      description: "Financing and project management for solar, wind, and hydro power projects across Africa.",
    },
    {
      icon: Zap,
      title: "Power Generation",
      description: "Support for power generation facilities and grid infrastructure development.",
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Funding for battery storage and energy distribution solutions.",
    },
    {
      icon: Globe,
      title: "Clean Energy Transition",
      description: "Strategic planning for transitioning to sustainable energy sources.",
    },
  ]

  const services = [
    "Solar Power Project Financing",
    "Wind Energy Development",
    "Hydroelectric Projects",
    "Grid Infrastructure Development",
    "Energy Storage Solutions",
    "Power Distribution Networks",
    "Off-Grid Energy Solutions",
    "Energy Efficiency Projects",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Energy Sector Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy for renewable energy, power generation, and energy 
              infrastructure projects across Africa. Powering sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Energy Sector Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services for African renewable energy and power infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Energy Sector Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From solar farms to grid infrastructure, we provide comprehensive support for African energy development.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ef393b] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/project-management-africa-2.jpg"
                alt="Energy Sector Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Energy Sector Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Afri-Rise can support your energy project
            </p>
          </div>
          <ServiceOnboardingForm
            serviceName="Energy Sector Inquiry"
            serviceDescription="Get expert fund management and consultancy for your energy project in Africa."
          />
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Power Africa's Future?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert fund management and consultancy in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">
                View Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
