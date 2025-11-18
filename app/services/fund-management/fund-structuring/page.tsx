import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, TrendingUp, CheckCircle, FileText, Shield, Users, Target } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fund Structuring & Administration | Fund Management | Afri-Rise",
  description: "Expert fund structuring, setup, and ongoing administration services for optimal performance and compliance. Professional fund management from Afri-Rise.",
  keywords: ["fund structuring", "fund administration", "fund setup", "compliance", "Afri-Rise"],
}

export default function FundStructuringPage() {
  const services = [
    { icon: FileText, title: "Fund Setup", desc: "Complete fund establishment including legal structure and documentation" },
    { icon: Shield, title: "Compliance Management", desc: "Ongoing regulatory compliance and reporting" },
    { icon: Users, title: "Governance", desc: "Board setup, policies, and governance frameworks" },
    { icon: Target, title: "Operations", desc: "Day-to-day fund operations and administration" },
  ]

  const features = [
    "Legal structure optimization",
    "Fund documentation preparation",
    "Regulatory registration and licensing",
    "Accounting and financial reporting",
    "Investor onboarding and KYC",
    "Compliance monitoring",
    "Board and committee support",
    "Performance reporting",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/fund-management" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Fund Management
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Fund Structuring & Administration</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert fund structuring, setup, and ongoing administration services for optimal performance and compliance. 
              We handle the complexity so you can focus on investment strategy.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fund structuring and administration solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/strategic-planning-business-1.jpg"
                alt="Fund Structuring"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From initial fund setup to ongoing administration, we provide end-to-end support 
                for your fund management needs.
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Structure Your Fund?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise for expert fund structuring and administration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" size={20} />
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
