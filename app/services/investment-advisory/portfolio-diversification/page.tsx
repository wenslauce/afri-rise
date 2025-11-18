import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Layers, CheckCircle, Target, TrendingUp, BarChart, Shield } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Diversification | Investment Advisory | Afri-Rise",
  description: "Strategic portfolio diversification across African sectors for optimal returns. Expert investment advisory from Afri-Rise.",
  keywords: ["portfolio diversification", "investment portfolio", "asset allocation", "African investment", "Afri-Rise"],
}

export default function PortfolioDiversificationPage() {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Allocation",
      description: "Strategic asset allocation across African sectors, geographies, and investment types.",
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Portfolio diversification to reduce concentration risk and improve risk-adjusted returns.",
    },
    {
      icon: TrendingUp,
      title: "Return Optimization",
      description: "Optimization of portfolio returns through balanced exposure to growth opportunities.",
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Ongoing portfolio monitoring and rebalancing to maintain optimal allocation.",
    },
  ]

  const features = [
    "Portfolio analysis and assessment",
    "Asset allocation strategy development",
    "Sector and geographic diversification",
    "Risk-return optimization",
    "Portfolio construction and implementation",
    "Performance monitoring and reporting",
    "Rebalancing recommendations",
    "Investment policy statement development",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Portfolio Diversification</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Strategic portfolio diversification across African sectors for optimal returns. 
              We help you build balanced portfolios that maximize returns while managing risk.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Diversify Portfolio <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Diversification Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic portfolio diversification for optimal risk-adjusted returns
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
                src="/images/afri-rise/investment-advisory-2.jpg"
                alt="Portfolio Diversification"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Diversification Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our portfolio diversification services help you build balanced African investment 
                portfolios that optimize returns while managing risk.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Portfolio Diversification Services</h2>
            <p className="text-lg text-muted-foreground">
              Let's optimize your investment portfolio
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
                  <label htmlFor="project" className="text-sm font-medium">Portfolio Details *</label>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Build a Balanced Portfolio</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for strategic portfolio diversification that optimizes your African investments.
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
