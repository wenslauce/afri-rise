import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Shield, FileText, CheckCircle, Search, DollarSign, Layers } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investment Advisory Services | Finance Advisory & Private Equity Consultancy | Afri-Rise",
  description: "Expert finance advisory and investment consultancy services for African business opportunities and sustainable development projects. Working with thousands of companies worldwide.",
  keywords: ["investment advisory", "finance advisory", "private equity consultancy", "African investment", "due diligence", "investment opportunities", "direct investment consultancy", "Afri-Rise"],
}

export default function InvestmentAdvisoryPage() {
  const features = [
    {
      icon: Globe,
      title: "African Opportunities",
      description: "Deep knowledge of African investment opportunities across Finance, Energy, Agriculture, Infrastructure, ICT, and more.",
    },
    {
      icon: FileText,
      title: "Due Diligence",
      description: "Comprehensive due diligence services to assess investment risks and opportunities in African markets.",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Diversification",
      description: "Strategic portfolio management across multiple African sectors for optimal risk-adjusted returns.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment and mitigation strategies for African investment portfolios.",
    },
  ]

  const services = [
    "Investment Opportunity Analysis",
    "Due Diligence Services",
    "Financial Modeling & Valuation",
    "Risk Assessment & Management",
    "Portfolio Diversification",
    "Exit Strategy Planning",
    "Market Research & Analysis",
    "Investment Structuring",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Investment Advisory Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert finance advisory and investment consultancy services for African business opportunities and sustainable
              development projects. Working with thousands of companies around the world to identify and execute successful investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
                <Link href="https://apply.afri-rise.com/" target="_blank" rel="noopener noreferrer">
                  Apply for Funding <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Investment Advisory Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive investment advisory services for African market success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#B3892B] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Investment Advisory Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized investment advisory solutions for African market success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/investment-advisory/opportunity-analysis">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Search className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Investment Opportunity Analysis</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Comprehensive analysis of investment opportunities across African markets and sectors.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/investment-advisory/due-diligence">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <FileText className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Due Diligence Services</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Thorough due diligence to assess investment risks and opportunities in African markets.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/investment-advisory/financial-modeling">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Financial Modeling & Valuation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Expert financial modeling and valuation services for African investment decisions.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/investment-advisory/risk-assessment">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Risk Assessment & Management</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Comprehensive risk assessment and management strategies for African investments.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/investment-advisory/portfolio-diversification">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Layers className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Portfolio Diversification</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Strategic portfolio diversification across African sectors for optimal returns.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Invest in Africa?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert finance advisory and investment consultancy services that unlock African opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
              <Link href="https://apply.afri-rise.com/" target="_blank" rel="noopener noreferrer">
                Apply for Funding <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
