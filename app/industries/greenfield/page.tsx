import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import Link from "next/link"
import { ArrowRight, Target, Globe, Shield, TrendingUp, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Greenfield Projects | Afri-Rise",
  description: "Fund management and consultancy for new development projects and greenfield initiatives across Africa.",
}

export default function GreenfieldPage() {
  const solutions = [
    { icon: Target, title: "New Ventures", description: "Financing for brand new business ventures and startup projects." },
    { icon: Globe, title: "Site Development", description: "Support for undeveloped land and greenfield site projects." },
    { icon: Shield, title: "Market Entry", description: "Projects for companies entering new African markets." },
    { icon: TrendingUp, title: "Innovation Projects", description: "Funding for innovative and pioneering business models." },
  ]

  const services = ["New Business Ventures", "Greenfield Site Development", "Market Entry Projects", "Innovation Initiatives", "Pilot Programs", "Expansion Projects", "New Market Development", "Startup Financing"]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Greenfield Projects</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy for new development projects and greenfield initiatives across Africa. Building from the ground up.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Greenfield Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Greenfield Services</h2>
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
              <img src="/images/afri-rise/project-management-africa-3.jpg" alt="Greenfield Projects" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Greenfield Consultation</h2>
          </div>
          <ServiceOnboardingForm
            serviceName="Greenfield Projects Inquiry"
            serviceDescription="Get expert fund management and consultancy for your greenfield project in Africa."
          />
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Greenfield Project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><Link href="/services">View Services</Link></Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
