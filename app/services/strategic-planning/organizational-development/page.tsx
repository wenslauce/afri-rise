import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, Target, TrendingUp, Lightbulb, BarChart } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organizational Development | Strategic Planning | Afri-Rise",
  description: "Build strong organizational structures and capabilities for sustainable African business growth. Expert organizational development from Afri-Rise.",
  keywords: ["organizational development", "organizational structure", "capability building", "change management", "Afri-Rise"],
}

export default function OrganizationalDevelopmentPage() {
  const benefits = [
    {
      icon: Target,
      title: "Structure Design",
      description: "Optimal organizational structures aligned with strategy and African market requirements.",
    },
    {
      icon: Users,
      title: "Capability Building",
      description: "Development of organizational capabilities and competencies for competitive advantage.",
    },
    {
      icon: Lightbulb,
      title: "Culture Development",
      description: "Building strong organizational culture that drives performance and engagement.",
    },
    {
      icon: TrendingUp,
      title: "Change Management",
      description: "Effective change management for smooth organizational transformation.",
    },
  ]

  const features = [
    "Organizational structure design",
    "Role and responsibility definition",
    "Capability assessment and development",
    "Leadership development programs",
    "Culture and values alignment",
    "Change management planning",
    "Performance management systems",
    "Talent management strategies",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Organizational Development</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Build strong organizational structures and capabilities for sustainable African business growth. 
              We help you develop organizations that thrive in African markets.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Develop Organization <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Development Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building organizational excellence for African business success
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
            <div>
              <h2 className="text-3xl font-bold mb-6">Development Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our organizational development approach builds strong foundations for sustainable 
                growth in African business environments.
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/african-business-meeting-2.jpg"
                alt="Organizational Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Organizational Development Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your organizational development needs
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
                  <label htmlFor="project" className="text-sm font-medium">Development Needs *</label>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Build Organizational Excellence</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for organizational development that drives sustainable success.
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
