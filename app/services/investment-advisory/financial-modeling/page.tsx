import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, DollarSign, CheckCircle, BarChart, TrendingUp, Target, FileText } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financial Modeling & Valuation | Investment Advisory | Afri-Rise",
  description: "Expert financial modeling and valuation services for African investment decisions. Professional investment advisory from Afri-Rise.",
  keywords: ["financial modeling", "valuation", "investment valuation", "financial analysis", "Afri-Rise"],
}

export default function FinancialModelingPage() {
  const benefits = [
    {
      icon: BarChart,
      title: "Financial Projections",
      description: "Detailed financial projections including revenue, costs, cash flows, and profitability forecasts.",
    },
    {
      icon: DollarSign,
      title: "Valuation Analysis",
      description: "Comprehensive valuation using multiple methodologies including DCF, comparable, and precedent transactions.",
    },
    {
      icon: TrendingUp,
      title: "Scenario Analysis",
      description: "Sensitivity and scenario analysis to understand value drivers and risk factors.",
    },
    {
      icon: Target,
      title: "Investment Returns",
      description: "Calculation of expected returns, IRR, and other key investment metrics.",
    },
  ]

  const features = [
    "Three-statement financial modeling",
    "Discounted cash flow (DCF) analysis",
    "Comparable company analysis",
    "Precedent transaction analysis",
    "Sensitivity and scenario modeling",
    "Investment return calculations",
    "Valuation reports and presentations",
    "Model documentation and assumptions",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Financial Modeling & Valuation</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert financial modeling and valuation services for African investment decisions. 
              We provide rigorous financial analysis to support your investment decisions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Modeling <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Modeling & Valuation Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional financial modeling for informed investment decisions
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/investment-advisory-1.jpg"
                alt="Financial Modeling"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Modeling Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our financial modeling services provide detailed analysis and valuation to support 
                confident investment decisions in African markets.
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

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Financial Modeling Services</h2>
            <p className="text-lg text-muted-foreground">
              Let's build comprehensive financial models for your investment
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
                  <label htmlFor="project" className="text-sm font-medium">Modeling Requirements *</label>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Value Your Investments Accurately</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for professional financial modeling and valuation services.
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
