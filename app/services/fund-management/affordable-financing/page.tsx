import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, DollarSign, CheckCircle, TrendingUp, Shield, Target } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affordable Financing Solutions | Fund Management | Afri-Rise",
  description: "Competitive financing options designed for African private sector projects with flexible terms and affordable rates. Expert fund management from Afri-Rise.",
  keywords: ["affordable financing", "African project funding", "competitive rates", "flexible terms", "Afri-Rise"],
}

export default function AffordableFinancingPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Below-market interest rates designed to make African projects financially viable and sustainable.",
    },
    {
      icon: Target,
      title: "Flexible Terms",
      description: "Customizable repayment schedules and terms tailored to your project's cash flow and timeline.",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies to protect your investment.",
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description: "Ongoing financial advisory and support to ensure project success and scalability.",
    },
  ]

  const features = [
    "Competitive interest rates below market average",
    "Flexible repayment schedules aligned with project cash flows",
    "No hidden fees or surprise charges",
    "Quick approval process (typically 30-45 days)",
    "Funding amounts from $100K to $50M+",
    "Grace periods available for project ramp-up",
    "Multiple currency options (USD, EUR, local currencies)",
    "Ongoing financial advisory included",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Affordable Financing Solutions</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Competitive financing options designed specifically for African private sector projects. 
              We offer flexible terms and affordable rates to make your project financially viable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Financing <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Affordable Financing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Financing solutions designed with African businesses in mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#B3892B] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Financing Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our affordable financing solutions are designed to remove financial barriers and enable 
                African businesses to achieve their growth objectives.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B3892B] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/fund-management-2.jpg"
                alt="Affordable Financing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from application to funding
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Submit Application", desc: "Complete our simple online application with project details" },
              { step: "2", title: "Review & Assessment", desc: "Our team reviews your project and conducts due diligence" },
              { step: "3", title: "Approval & Terms", desc: "Receive approval with customized financing terms" },
              { step: "4", title: "Funding & Support", desc: "Access funds and ongoing advisory support" },
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#B3892B] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Access Affordable Financing?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise today to discuss your project financing needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Financing <ArrowRight className="ml-2" size={20} />
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
