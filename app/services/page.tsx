import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, Globe, Shield, DollarSign, Truck, Briefcase, Zap, Scale, ArrowRight } from "@/components/icons"

export default function ServicesPage() {
  const services = [
    {
      icon: DollarSign,
      title: "Fund Management",
      description:
        "Working with thousands of companies around the world to provide expert fund management solutions for African private sector projects with communal social impact.",
      features: [
        "Affordable Financing Solutions",
        "Private Sector Project Funding",
        "Social Impact Investment",
        "Fund Structuring & Administration",
        "Portfolio Management",
        "Investor Relations",
      ],
      href: "/services/fund-management",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description:
        "Working with thousands of companies around the world to deliver comprehensive project management services for impactful African initiatives across multiple sectors.",
      features: [
        "Project Planning & Execution",
        "Resource Allocation & Optimization",
        "Timeline & Budget Management",
        "Stakeholder Coordination",
        "Risk Mitigation Strategies",
        "Quality Assurance & Delivery",
      ],
      href: "/services/project-management",
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description:
        "Working with thousands of companies around the world to develop strategic plans that drive sustainable growth and create lasting social impact across African markets.",
      features: [
        "Business Strategy Development",
        "Market Entry Planning",
        "Growth Strategy Formulation",
        "Competitive Analysis",
        "Organizational Development",
        "Performance Metrics & KPIs",
      ],
      href: "/services/strategic-planning",
    },
    {
      icon: Globe,
      title: "Investment Advisory",
      description:
        "Working with thousands of companies around the world to provide expert investment advisory services for African business opportunities and sustainable development projects.",
      features: [
        "Investment Opportunity Analysis",
        "Due Diligence Services",
        "Financial Modeling & Valuation",
        "Risk Assessment & Management",
        "Portfolio Diversification",
        "Exit Strategy Planning",
      ],
      href: "/services/investment-advisory",
    },
  ]

  const operationalFlow = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive needs assessment → Market analysis → Strategic planning → Service customization",
    },
    {
      step: "02",
      title: "Due Diligence & Compliance",
      description: "KYC verification → Risk assessment → Regulatory compliance → Documentation review",
    },
    {
      step: "03",
      title: "Service Implementation",
      description: "Solution deployment → Real-time monitoring → Quality assurance → Progress tracking",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery → Documentation → Post-service support → Relationship management",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Our Core Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Four specialized service lines delivering excellence in fund management, project management, strategic planning, 
              and investment advisory for African private sector projects with social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted">
                  <div className="flex items-start gap-4">
                    <service.icon className="text-[#ef393b] flex-shrink-0" width={40} height={40} strokeWidth={1.5} />
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3">Key Services:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:ml-6">
                      <Button asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
                        <Link href={service.href}>
                          Learn More <ArrowRight className="ml-2" width={16} height={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Flow */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring excellence in fund management and consultancy service delivery from consultation to completion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalFlow.map((phase, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industry Focus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving African businesses across seven key industry sectors with specialized expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Finance & Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Financial Services & Banking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Renewable Energy Projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Power Generation & Distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Energy Infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Agriculture & Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Agribusiness & Food Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Agricultural Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Insurance Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Risk Management Solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure & ICT</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Commercial Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>ICT & Telecommunications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Greenfield Projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-[#ef393b] flex-shrink-0 mt-1" width={16} height={16} />
                    <span>Digital Transformation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Discover how Afri-Rise can support your African business with affordable financing solutions and expert 
            consultancy services for projects with social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2" width={20} height={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
