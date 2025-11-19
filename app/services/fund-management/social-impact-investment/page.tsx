import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, Globe, TrendingUp, Target, Shield } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Impact Investment | Fund Management | Afri-Rise",
  description: "Investment strategies focused on projects with measurable communal social impact and sustainable development. Expert fund management from Afri-Rise.",
  keywords: ["social impact investment", "sustainable development", "community impact", "ESG investing", "Afri-Rise"],
}

export default function SocialImpactInvestmentPage() {
  const impacts = [
    { icon: Users, title: "Community Development", desc: "Projects that create jobs and improve local communities" },
    { icon: Globe, title: "Social Welfare", desc: "Initiatives that enhance healthcare, education, and quality of life" },
    { icon: TrendingUp, title: "Economic Growth", desc: "Sustainable business models that drive local economic development" },
    { icon: Shield, title: "Environmental Protection", desc: "Projects that protect and preserve natural resources" },
  ]

  const criteria = [
    "Measurable social impact metrics",
    "Community engagement and benefit",
    "Environmental sustainability",
    "Job creation potential",
    "Skills development and training",
    "Local supply chain development",
    "Gender equality and inclusion",
    "Long-term sustainability",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Social Impact Investment</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Investment strategies focused on projects with measurable communal social impact and sustainable development. 
              We believe in doing well by doing good.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Discuss Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impact Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating positive change across multiple dimensions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-[#B3892B] mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground text-sm">{impact.desc}</p>
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
              <h2 className="text-3xl font-bold mb-6">Impact Investment Criteria</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We evaluate every project against rigorous social impact criteria to ensure meaningful, 
                measurable benefits for African communities.
              </p>
              <ul className="space-y-3">
                {criteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B3892B] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/african-agriculture-1.jpg"
                alt="Social Impact Investment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Create Lasting Social Impact</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise to fund projects that generate both financial returns and positive social change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
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
