import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, AlertCircle, Target, TrendingUp, BarChart } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Risk Assessment & Management | Investment Advisory | Afri-Rise",
  description: "Comprehensive risk assessment and management strategies for African investments. Expert investment advisory from Afri-Rise.",
  keywords: ["risk assessment", "risk management", "investment risk", "African investment", "Afri-Rise"],
}

export default function RiskAssessmentPage() {
  const benefits = [
    {
      icon: AlertCircle,
      title: "Risk Identification",
      description: "Comprehensive identification of investment risks including market, operational, and regulatory risks.",
    },
    {
      icon: BarChart,
      title: "Risk Quantification",
      description: "Quantitative assessment of risk probability, impact, and potential financial consequences.",
    },
    {
      icon: Shield,
      title: "Mitigation Strategies",
      description: "Development of risk mitigation strategies and contingency plans for African investments.",
    },
    {
      icon: TrendingUp,
      title: "Risk Monitoring",
      description: "Ongoing risk monitoring and management throughout the investment lifecycle.",
    },
  ]

  const features = [
    "Comprehensive risk assessment framework",
    "Market and country risk analysis",
    "Operational and execution risk evaluation",
    "Regulatory and compliance risk review",
    "Financial and liquidity risk assessment",
    "Risk mitigation strategy development",
    "Risk monitoring and reporting systems",
    "Contingency planning and response",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/investment-advisory" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Investment Advisory
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Risk Assessment & Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive risk assessment and management strategies for African investments. 
              We help you identify, assess, and manage investment risks effectively.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Assess Risks <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Risk Management Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive risk management for protected investments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Risk Management Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our risk assessment services provide comprehensive analysis and management strategies 
                to protect your African investments.
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/strategic-planning-business-3.jpg"
                alt="Risk Assessment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Risk Assessment Services</h2>
            <p className="text-lg text-muted-foreground">
              Let's assess and manage your investment risks
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                    <input id="name" className="w-full px-3 py-2 border rounded-md" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input id="phone" type="tel" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <input id="company" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium">Risk Assessment Needs *</label>
                  <textarea id="project" rows={5} className="w-full px-3 py-2 border rounded-md" required></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#ef393b] text-white hover:bg-[#d73035]">
                  Request Services <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Protect Your Investments</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for comprehensive risk assessment and management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services/investment-advisory">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
