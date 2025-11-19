import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, DollarSign, TrendingUp, Target, Clock } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resource Allocation & Optimization | Project Management | Afri-Rise",
  description: "Strategic allocation and optimization of human, financial, and material resources for maximum efficiency. Expert project management from Afri-Rise.",
  keywords: ["resource allocation", "resource optimization", "project resources", "efficiency", "Afri-Rise"],
}

export default function ResourceAllocationPage() {
  const benefits = [
    {
      icon: Users,
      title: "Human Resources",
      description: "Optimal allocation of skilled personnel based on project requirements and availability.",
    },
    {
      icon: DollarSign,
      title: "Financial Resources",
      description: "Strategic budget allocation and cost optimization across project phases.",
    },
    {
      icon: Target,
      title: "Material Resources",
      description: "Efficient procurement and allocation of materials, equipment, and supplies.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of resource utilization for maximum ROI.",
    },
  ]

  const features = [
    "Resource capacity planning and forecasting",
    "Skills-based resource matching",
    "Budget allocation and tracking",
    "Equipment and material procurement",
    "Resource utilization monitoring",
    "Cost-benefit analysis and optimization",
    "Cross-project resource sharing",
    "Performance metrics and reporting",
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/project-management" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Project Management
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Resource Allocation & Optimization</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Strategic allocation and optimization of human, financial, and material resources for maximum efficiency. 
              We ensure your project resources are utilized optimally for the best outcomes.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Optimize Resources <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resource Management Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resource optimization across all project dimensions
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
                src="/images/afri-rise/strategic-planning-business-2.jpg"
                alt="Resource Allocation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Optimization Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our resource allocation approach maximizes efficiency while minimizing costs, 
                ensuring optimal project outcomes within African business contexts.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Resource Optimization Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can optimize your project resources
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Optimize Your Project Resources</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for strategic resource allocation that maximizes efficiency and project success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/services/project-management">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
