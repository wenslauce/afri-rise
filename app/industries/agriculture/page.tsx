import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import Link from "next/link"
import { ArrowRight, Leaf, Truck, Package, Droplet, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agriculture Sector Solutions | Afri-Rise",
  description: "Fund management and consultancy for agribusiness, food security, and agricultural technology across Africa.",
  keywords: ["agriculture", "agribusiness", "food security", "farming", "African agriculture", "Afri-Rise"],
}

export default function AgriculturePage() {
  const solutions = [
    {
      icon: Leaf,
      title: "Agribusiness Development",
      description: "Financing for commercial farming, processing, and agricultural value chains.",
    },
    {
      icon: Truck,
      title: "Agricultural Technology",
      description: "Support for agtech innovations, precision farming, and mechanization.",
    },
    {
      icon: Package,
      title: "Food Security",
      description: "Projects that enhance food production, storage, and distribution systems.",
    },
    {
      icon: Droplet,
      title: "Irrigation & Water",
      description: "Funding for irrigation systems and water management solutions.",
    },
  ]

  const services = [
    "Commercial Farming Financing",
    "Agribusiness Development",
    "Agricultural Technology",
    "Food Processing Facilities",
    "Irrigation Systems",
    "Cold Chain Infrastructure",
    "Agricultural Value Chains",
    "Farmer Cooperative Support",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Agriculture Sector Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy for agribusiness, food security, and agricultural 
              technology across Africa. Feeding the future sustainably.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Agriculture Sector Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services for African agricultural development and food security
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#B3892B] mb-4" />
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
              <h2 className="text-3xl font-bold mb-6">Agriculture Sector Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From smallholder farming to large-scale agribusiness, we support African agricultural transformation.
              </p>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B3892B] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/african-agriculture-1.jpg"
                alt="Agriculture Sector"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Agriculture Sector Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Afri-Rise can support your agricultural project
            </p>
          </div>
          <ServiceOnboardingForm
            serviceName="Agriculture Sector Inquiry"
            serviceDescription="Get expert fund management and consultancy for your agriculture project in Africa."
          />
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform African Agriculture?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert fund management and consultancy in the agriculture sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">View Our Services <ArrowRight className="ml-2" size={20} /></Link>
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
