import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import Link from "next/link"
import { ArrowRight, DollarSign, TrendingUp, Building2, Users, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance Sector Solutions | Afri-Rise",
  description: "Comprehensive fund management and consultancy services for financial services and banking in Africa.",
  keywords: ["finance", "banking", "financial services", "African finance", "Afri-Rise"],
}

export default function FinancePage() {
  const solutions = [
    {
      icon: DollarSign,
      title: "Financial Services Funding",
      description: "Affordable financing solutions for banks, microfinance institutions, and fintech companies across Africa.",
    },
    {
      icon: Building2,
      title: "Banking Infrastructure",
      description: "Project management for banking infrastructure development and digital transformation initiatives.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic investment guidance for financial sector opportunities and portfolio optimization.",
    },
    {
      icon: Users,
      title: "Financial Inclusion",
      description: "Support for projects that expand financial access to underserved African communities.",
    },
  ]

  const services = [
    "Financial Institution Financing",
    "Banking Infrastructure Development",
    "Fintech Project Funding",
    "Microfinance Support",
    "Digital Banking Solutions",
    "Payment Systems Development",
    "Financial Inclusion Projects",
    "Regulatory Compliance Advisory",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Finance Sector Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy services for financial services, banking, and fintech 
              companies across Africa. Empowering financial inclusion and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Finance Sector Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services for African financial institutions and fintech innovators
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

      {/* Services List with Image */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Finance Sector Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From traditional banking to innovative fintech solutions, we provide comprehensive support 
                for African financial sector development.
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
                src="/images/afri-rise/african-finance-1.jpg"
                alt="Finance Sector"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Finance Sector Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Afri-Rise can support your financial services project
            </p>
          </div>
          <ServiceOnboardingForm
            serviceName="Finance Sector Inquiry"
            serviceDescription="Get expert fund management and consultancy for your finance sector project in Africa."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform African Finance?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert fund management and consultancy in the finance sector.
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
