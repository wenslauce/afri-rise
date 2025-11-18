import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Clock, CheckCircle, DollarSign, TrendingUp, Target, Shield } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeline & Budget Management | Project Management | Afri-Rise",
  description: "Expert management of project timelines and budgets to ensure on-time, on-budget delivery. Professional project management from Afri-Rise.",
  keywords: ["timeline management", "budget management", "project scheduling", "cost control", "Afri-Rise"],
}

export default function TimelineBudgetPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Schedule Management",
      description: "Detailed project scheduling with milestone tracking and timeline optimization.",
    },
    {
      icon: DollarSign,
      title: "Budget Control",
      description: "Comprehensive budget planning, monitoring, and cost control throughout project lifecycle.",
    },
    {
      icon: Target,
      title: "Milestone Tracking",
      description: "Clear milestone definition and progress tracking against project objectives.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification and mitigation of schedule and budget risks.",
    },
  ]

  const features = [
    "Detailed project scheduling and timeline development",
    "Budget planning and cost estimation",
    "Real-time progress tracking and reporting",
    "Milestone management and deliverable tracking",
    "Cost variance analysis and control",
    "Schedule optimization and resource leveling",
    "Change management and impact assessment",
    "Performance dashboards and KPI monitoring",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Timeline & Budget Management</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert management of project timelines and budgets to ensure on-time, on-budget delivery. 
              We keep your African projects on track and within financial parameters.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Manage Timeline <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Management Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive timeline and budget control for project success
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
              <h2 className="text-3xl font-bold mb-6">Management Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our timeline and budget management approach ensures projects are delivered on schedule 
                and within budget, accounting for African market dynamics and challenges.
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
                src="/images/afri-rise/investment-advisory-2.jpg"
                alt="Timeline Budget Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Timeline & Budget Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can keep your project on track and on budget
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Keep Your Project On Track</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise for expert timeline and budget management that ensures project success.
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
