import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowRight, Building2, MapPin, Truck, Home, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Infrastructure Sector Solutions | Afri-Rise",
  description: "Fund management and consultancy for commercial infrastructure development across Africa.",
}

export default function InfrastructurePage() {
  const solutions = [
    { icon: Building2, title: "Commercial Buildings", description: "Financing for office complexes, retail centers, and commercial real estate." },
    { icon: MapPin, title: "Urban Development", description: "Support for urban infrastructure and smart city projects." },
    { icon: Truck, title: "Transport Infrastructure", description: "Roads, bridges, ports, and logistics infrastructure development." },
    { icon: Home, title: "Housing Projects", description: "Affordable housing and residential development financing." },
  ]

  const services = ["Commercial Real Estate", "Urban Infrastructure", "Transport Networks", "Housing Development", "Industrial Parks", "Logistics Hubs", "Smart City Projects", "Public Infrastructure"]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Infrastructure Sector Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy for commercial infrastructure development across Africa. Building the foundation for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Infrastructure Solutions</h2>
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
              <h2 className="text-3xl font-bold mb-6">Infrastructure Services</h2>
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
              <img src="/images/afri-rise/african-infrastructure-2.jpg" alt="Infrastructure Sector" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Infrastructure Consultation</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2"><Label htmlFor="name">Full Name *</Label><Input id="name" required /></div>
                  <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" required /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2"><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" /></div>
                  <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" /></div>
                </div>
                <div className="space-y-2"><Label htmlFor="project">Project Details *</Label><Textarea id="project" rows={5} required /></div>
                <Button type="submit" size="lg" className="w-full bg-[#ef393b] text-white hover:bg-[#d73035]">
                  Request Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Africa's Infrastructure?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild><Link href="/services">View Services</Link></Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link href="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
