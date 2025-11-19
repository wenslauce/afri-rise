import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, CheckCircle, BarChart, TrendingUp, Users, Map } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Competitive Analysis | Strategic Planning | Afri-Rise",
  description: "In-depth market analysis and competitive positioning for African business environments. Expert competitive analysis from Afri-Rise.",
  keywords: ["competitive analysis", "market analysis", "competitive intelligence", "positioning", "Afri-Rise"],
}

export default function CompetitiveAnalysisPage() {
  const benefits = [
    {
      icon: Target,
      title: "Competitor Profiling",
      description: "Comprehensive analysis of key competitors including strengths, weaknesses, and strategies.",
    },
    {
      icon: BarChart,
      title: "Market Intelligence",
      description: "Deep market insights including trends, dynamics, and emerging opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Positioning Strategy",
      description: "Strategic positioning recommendations for competitive advantage in African markets.",
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Understanding customer preferences, behaviors, and decision-making factors.",
    },
  ]

  const features = [
    "Competitive landscape mapping",
    "Competitor strategy analysis",
    "Market share and positioning assessment",
    "SWOT analysis and benchmarking",
    "Value proposition differentiation",
    "Pricing and go-to-market strategies",
    "Competitive intelligence gathering",
    "Strategic recommendations development",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/strategic-planning" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Strategic Planning
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Competitive Analysis</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              In-depth market analysis and competitive positioning for African business environments. 
              We help you understand your competitive landscape and develop winning strategies.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Analyze Competition <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Analysis Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive competitive intelligence for strategic advantage
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

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/investment-advisory-3.jpg"
                alt="Competitive Analysis"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Analysis Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our competitive analysis combines rigorous research with African market expertise 
                to provide actionable strategic insights.
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
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Competitive Analysis</h2>
            <p className="text-lg text-muted-foreground">
              Let's analyze your competitive landscape
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
                  <label htmlFor="project" className="text-sm font-medium">Analysis Requirements *</label>
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Gain Competitive Advantage</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for competitive analysis that drives strategic decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services/strategic-planning">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
