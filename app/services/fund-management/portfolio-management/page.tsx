import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, TrendingUp, Target, DollarSign, PieChart } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Management | Fund Management | Afri-Rise",
  description: "Strategic portfolio management and optimization to maximize returns while managing risk effectively. Expert fund management from Afri-Rise.",
  keywords: ["portfolio management", "investment optimization", "risk management", "asset allocation", "Afri-Rise"],
}

export default function PortfolioManagementPage() {
  const services = [
    { icon: Target, title: "Asset Allocation", desc: "Strategic distribution across sectors and asset classes" },
    { icon: DollarSign, title: "Performance Monitoring", desc: "Real-time tracking and analysis of portfolio performance" },
    { icon: Shield, title: "Risk Management", desc: "Comprehensive risk assessment and mitigation strategies" },
    { icon: TrendingUp, title: "Optimization", desc: "Continuous portfolio optimization for maximum returns" },
  ]

  const features = [
    "Diversified portfolio construction",
    "Active risk management",
    "Performance benchmarking",
    "Regular rebalancing",
    "Sector and geographic diversification",
    "ESG integration",
    "Liquidity management",
    "Tax-efficient strategies",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Portfolio Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Strategic portfolio management and optimization to maximize returns while managing risk effectively. 
              Our expert team ensures your investments perform at their best.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive portfolio management for optimal performance
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Portfolio Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our portfolio management approach combines rigorous analysis with deep African market knowledge 
                to deliver superior risk-adjusted returns.
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
                src="/images/afri-rise/investment-advisory-1.jpg"
                alt="Portfolio Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Optimize Your Portfolio</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert portfolio management that delivers results.
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
