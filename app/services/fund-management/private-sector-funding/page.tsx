import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, CheckCircle, Building2, Zap, Leaf, Users } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Private Sector Project Funding | Fund Management | Afri-Rise",
  description: "Dedicated funding solutions for private sector initiatives across seven key African industry sectors. Expert fund management from Afri-Rise.",
  keywords: ["private sector funding", "African projects", "industry financing", "project funding", "Afri-Rise"],
}

export default function PrivateSectorFundingPage() {
  const sectors = [
    { icon: Building2, name: "Finance", desc: "Banking and financial services projects" },
    { icon: Zap, name: "Energy", desc: "Renewable energy and power generation" },
    { icon: Leaf, name: "Agriculture", desc: "Agribusiness and food security" },
    { icon: Users, name: "Infrastructure", desc: "Commercial infrastructure development" },
    { icon: Building2, name: "ICT", desc: "Technology and digital transformation" },
    { icon: Target, name: "Insurance", desc: "Insurance and risk management" },
    { icon: CheckCircle, name: "Greenfield", desc: "New development projects" },
  ]

  const features = [
    "Sector-specific financing expertise",
    "Funding from $500K to $100M+",
    "Equity and debt financing options",
    "Project development support",
    "Technical assistance included",
    "Local market knowledge",
    "Regulatory compliance guidance",
    "Exit strategy planning",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/fund-management" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Fund Management
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Private Sector Project Funding</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Dedicated funding solutions for private sector initiatives across seven key African industry sectors. 
              We understand the unique challenges and opportunities in each sector.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Funding <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry Sectors We Fund</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized funding across seven key African industry sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">{sector.name}</h3>
                    <p className="text-muted-foreground text-sm">{sector.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/project-management-africa-1.jpg"
                alt="Private Sector Funding"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Funding Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our private sector funding solutions are designed to support ambitious African businesses 
                with the capital and expertise they need to succeed.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ef393b] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Fund Your Private Sector Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise today to discuss your project and explore funding options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Funding <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services/fund-management">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
