import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, DollarSign, TrendingUp, Users, Target, CheckCircle, Shield } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fund Management Services | Afri-Rise",
  description: "Expert fund management solutions for African private sector projects with communal social impact. Working with thousands of companies worldwide.",
  keywords: ["fund management", "African fund", "private sector financing", "social impact investment", "Afri-Rise"],
}

export default function FundManagementPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Financing",
      description: "Structured financing solutions tailored for African private sector projects with competitive rates and flexible terms.",
    },
    {
      icon: Target,
      title: "Social Impact Focus",
      description: "Every project evaluated for communal social impact and sustainable development potential in African communities.",
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Working with thousands of companies around the world to connect African businesses with international funding sources.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect investments and ensure project success.",
    },
  ]

  const services = [
    "Private Sector Project Financing",
    "Social Impact Investment Structuring",
    "Fund Administration & Management",
    "Portfolio Management & Optimization",
    "Investor Relations & Reporting",
    "Capital Raising & Fundraising",
    "Financial Modeling & Analysis",
    "Due Diligence & Compliance",
  ]

  const industries = [
    { name: "Finance", description: "Financial services and banking solutions" },
    { name: "Energy", description: "Renewable energy and power generation projects" },
    { name: "Agriculture", description: "Agribusiness and food security initiatives" },
    { name: "Infrastructure", description: "Commercial infrastructure development" },
    { name: "ICT", description: "Information and communication technology" },
    { name: "Insurance", description: "Insurance services and risk management" },
    { name: "Greenfield", description: "New development projects" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Fund Management Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert fund management solutions for African private sector projects that create communal social impact. 
              Working with thousands of companies around the world to deliver affordable financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Fund Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fund management expertise focused on African business success
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Fund Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized fund management solutions tailored for African private sector success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/fund-management/affordable-financing">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Affordable Financing Solutions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Competitive financing options designed specifically for African private sector projects with flexible terms and affordable rates.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/fund-management/private-sector-funding">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Private Sector Project Funding</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Dedicated funding solutions for private sector initiatives across seven key African industry sectors.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/fund-management/social-impact-investment">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Social Impact Investment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Investment strategies focused on projects with measurable communal social impact and sustainable development.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/fund-management/fund-structuring">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fund Structuring & Administration</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Expert fund structuring, setup, and ongoing administration services for optimal performance and compliance.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/fund-management/portfolio-management">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Portfolio Management</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Strategic portfolio management and optimization to maximize returns while managing risk effectively.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/fund-management/investor-relations">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Investor Relations</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Professional investor relations services including reporting, communication, and stakeholder management.
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

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized fund management across seven key African industry sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Fund Management Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Afri-Rise can support your project financing needs
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
                  <label htmlFor="project" className="text-sm font-medium">Project Details *</label>
                  <textarea id="project" rows={5} className="w-full px-3 py-2 border rounded-md" required></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#B3892B] text-white hover:bg-[#9A7324]">
                  Request Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Fund Your African Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for affordable financing solutions and expert fund management services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
