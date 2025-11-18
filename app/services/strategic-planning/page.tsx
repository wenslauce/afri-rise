import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, TrendingUp, Target, Map, BarChart, CheckCircle, Users, Lightbulb } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategic Planning Services | Afri-Rise",
  description: "Develop strategic plans that drive sustainable growth and create lasting social impact across African markets. Working with thousands of companies worldwide.",
  keywords: ["strategic planning", "business strategy", "African markets", "growth strategy", "Afri-Rise"],
}

export default function StrategicPlanningPage() {
  const features = [
    {
      icon: Target,
      title: "Market Entry Planning",
      description: "Strategic guidance for entering and expanding in Kenyan and East African markets with local expertise.",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Sustainable growth strategies that drive business success while creating positive social impact.",
    },
    {
      icon: Map,
      title: "Competitive Analysis",
      description: "In-depth market analysis and competitive positioning for African business environments.",
    },
    {
      icon: BarChart,
      title: "Performance Metrics",
      description: "KPI development and performance tracking to measure success and guide decision-making.",
    },
  ]

  const services = [
    "Business Strategy Development",
    "Market Entry Planning",
    "Growth Strategy Formulation",
    "Competitive Analysis",
    "Organizational Development",
    "Performance Metrics & KPIs",
    "Strategic Roadmap Creation",
    "Implementation Planning",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Strategic Planning Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Develop strategic plans that drive sustainable growth and create lasting social impact across African markets. 
              Working with thousands of companies around the world to build successful strategies.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Strategic Planning Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategic planning tailored for African business success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4" />
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Strategic Planning Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized strategic planning solutions for African business success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/strategic-planning/business-strategy">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Lightbulb className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Business Strategy Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Comprehensive business strategy development aligned with African market opportunities and challenges.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/strategic-planning/market-entry">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Map className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Market Entry Planning</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Strategic guidance for entering and expanding in African markets with local expertise and insights.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/strategic-planning/growth-strategy">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Growth Strategy Formulation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Sustainable growth strategies that drive business success while creating positive social impact.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/strategic-planning/competitive-analysis">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Competitive Analysis</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    In-depth market analysis and competitive positioning for African business environments.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/strategic-planning/organizational-development">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Organizational Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Build strong organizational structures and capabilities for sustainable African business growth.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/strategic-planning/performance-metrics">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <BarChart className="w-12 h-12 text-[#ef393b] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Performance Metrics & KPIs</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    KPI development and performance tracking to measure success and guide strategic decision-making.
                  </p>
                  <div className="flex items-center text-[#ef393b] font-medium text-sm">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Plan Your Growth?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for strategic planning services that drive sustainable African business success.
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
