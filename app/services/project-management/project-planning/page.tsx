import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, CheckCircle, Clock, Users, FileText, TrendingUp } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Planning & Execution | Project Management | Afri-Rise",
  description: "Comprehensive project planning from initiation to delivery, ensuring successful execution of African projects. Expert project management from Afri-Rise.",
  keywords: ["project planning", "project execution", "African projects", "project management", "Afri-Rise"],
}

export default function ProjectPlanningPage() {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive project planning aligned with business objectives and African market dynamics.",
    },
    {
      icon: Clock,
      title: "Timeline Management",
      description: "Detailed project schedules with realistic timelines and milestone tracking.",
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Effective coordination of project teams across different locations and time zones.",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Continuous monitoring and tracking of project progress against defined KPIs.",
    },
  ]

  const features = [
    "Comprehensive project scope definition",
    "Detailed work breakdown structure (WBS)",
    "Resource planning and allocation",
    "Risk assessment and mitigation planning",
    "Stakeholder analysis and engagement plan",
    "Communication and reporting frameworks",
    "Quality management planning",
    "Project execution monitoring and control",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/project-management" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4">
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Project Management
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Project Planning & Execution</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive project planning from initiation to delivery, ensuring successful execution of African projects. 
              We turn your vision into actionable plans with measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Planning <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Planning & Execution Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic project planning designed for African business success
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

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Planning Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our project planning approach combines international best practices with deep understanding 
                of African business environments and cultural dynamics.
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
                src="/images/afri-rise/project-management-africa-2.jpg"
                alt="Project Planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Planning Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic approach to project planning and execution
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Project Initiation", desc: "Define project scope, objectives, and success criteria" },
              { step: "2", title: "Planning Phase", desc: "Develop comprehensive project plans and resource allocation" },
              { step: "3", title: "Execution", desc: "Implement project plans with continuous monitoring" },
              { step: "4", title: "Delivery", desc: "Complete project delivery and post-implementation review" },
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-[#ef393b] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Project Planning Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help plan and execute your project
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
                <Button type="submit" size="lg" className="w-full bg-[#ef393b] text-white hover:bg-[#d73035]">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Plan Your Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise today for expert project planning and execution services tailored for African markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Planning <ArrowRight className="ml-2" size={20} />
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
