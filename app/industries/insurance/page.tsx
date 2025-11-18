import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import Link from "next/link"
import { ArrowRight, Shield, Target, FileText, Users, CheckCircle } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Sector Solutions | Afri-Rise",
  description: "Fund management and consultancy for insurance services and risk management solutions across Africa.",
  keywords: ["insurance", "risk management", "insurance services", "African insurance", "Afri-Rise"],
}

export default function InsurancePage() {
  const solutions = [
    {
      icon: Shield,
      title: "Insurance Services",
      description: "Financing for insurance companies and innovative insurance product development.",
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for African businesses.",
    },
    {
      icon: FileText,
      title: "Insurance Technology",
      description: "Support for insurtech innovations and digital insurance platforms.",
    },
    {
      icon: Users,
      title: "Microinsurance",
      description: "Funding for microinsurance programs serving underserved communities.",
    },
  ]

  const services = [
    "Insurance Company Financing",
    "Insurtech Development",
    "Microinsurance Programs",
    "Risk Management Solutions",
    "Insurance Product Development",
    "Claims Management Systems",
    "Insurance Distribution Networks",
    "Regulatory Compliance Support",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Insurance Sector Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive fund management and consultancy for insurance services and risk management solutions 
              across Africa. Protecting businesses and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Insurance Sector Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services for African insurance and risk management
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
              <h2 className="text-3xl font-bold mb-6">Insurance Sector Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From traditional insurance to innovative insurtech solutions, we support African insurance development.
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
                alt="Insurance Sector"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Insurance Sector Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Afri-Rise can support your insurance project
            </p>
          </div>
          <ServiceOnboardingForm
            serviceName="Insurance Sector Inquiry"
            serviceDescription="Get expert fund management and consultancy for your insurance project in Africa."
          />
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Strengthen African Insurance?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert fund management and consultancy in the insurance sector.
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
