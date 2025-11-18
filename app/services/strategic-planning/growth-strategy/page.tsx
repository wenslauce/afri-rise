import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, TrendingUp, CheckCircle, Target, BarChart, Users, Lightbulb } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Growth Strategy Formulation | Strategic Planning | Afri-Rise",
  description: "Sustainable growth strategies that drive business success while creating positive social impact. Expert growth strategy from Afri-Rise.",
  keywords: ["growth strategy", "business growth", "sustainable growth", "expansion strategy", "Afri-Rise"],
}

export default function GrowthStrategyPage() {
  const benefits = [
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Identification of sustainable growth opportunities aligned with market dynamics and capabilities.",
    },
    {
      icon: BarChart,
      title: "Revenue Expansion",
      description: "Strategies for revenue growth through market penetration, development, and diversification.",
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Growth strategies that create positive social impact alongside business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Innovation-driven growth through new products, services, and business models.",
    },
  ]

  const features = [
    "Growth opportunity assessment",
    "Market expansion strategies",
    "Product and service diversification",
    "Strategic partnerships and alliances",
    "Innovation and digital transformation",
    "Operational scaling planning",
    "Financial growth modeling",
    "Social impact integration",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Growth Strategy Formulation</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Sustainable growth strategies that drive business success while creating positive social impact. 
              We help you achieve ambitious growth targets in African markets.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Formulate Growth Strategy <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Growth Strategy Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sustainable growth planning for African business success
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
              <h2 className="text-3xl font-bold mb-6">Growth Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our growth strategy approach balances ambitious targets with sustainable practices, 
                ensuring long-term success in African markets.
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
                alt="Growth Strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Growth Strategy Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your business growth objectives
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
                  <label htmlFor="project" className="text-sm font-medium">Growth Objectives *</label>
                  <textarea id="project" rows={5} className="w-full px-3 py-2 border rounded-md" required></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#ef393b] text-white hover:bg-[#d73035]">
                  Request Consultation <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Accelerate Your Growth</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for growth strategies that deliver sustainable business success.
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
