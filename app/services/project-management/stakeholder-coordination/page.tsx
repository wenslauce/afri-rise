import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Globe, CheckCircle, Users, Mail, Phone, FileText } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stakeholder Coordination | Project Management | Afri-Rise",
  description: "Effective coordination and communication with all project stakeholders for seamless collaboration. Expert project management from Afri-Rise.",
  keywords: ["stakeholder coordination", "stakeholder management", "project communication", "collaboration", "Afri-Rise"],
}

export default function StakeholderCoordinationPage() {
  const benefits = [
    {
      icon: Users,
      title: "Stakeholder Mapping",
      description: "Comprehensive identification and analysis of all project stakeholders and their interests.",
    },
    {
      icon: Mail,
      title: "Communication Planning",
      description: "Strategic communication plans tailored to different stakeholder groups and preferences.",
    },
    {
      icon: Globe,
      title: "Engagement Management",
      description: "Active stakeholder engagement throughout the project lifecycle for buy-in and support.",
    },
    {
      icon: FileText,
      title: "Reporting & Updates",
      description: "Regular progress reports and updates customized for different stakeholder needs.",
    },
  ]

  const features = [
    "Stakeholder identification and analysis",
    "Communication strategy development",
    "Regular stakeholder meetings and updates",
    "Conflict resolution and mediation",
    "Expectation management and alignment",
    "Cultural sensitivity and local adaptation",
    "Multi-language communication support",
    "Stakeholder feedback integration",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Stakeholder Coordination</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Effective coordination and communication with all project stakeholders for seamless collaboration. 
              We ensure all voices are heard and aligned for project success.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Coordinate Stakeholders <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Coordination Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive stakeholder management for successful project outcomes
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/african-business-meeting-3.jpg"
                alt="Stakeholder Coordination"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Coordination Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our stakeholder coordination approach recognizes the diverse cultural and business 
                contexts across Africa, ensuring effective communication and collaboration.
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
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Stakeholder Coordination Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can align your project stakeholders
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Align Your Stakeholders</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert stakeholder coordination that ensures project alignment and success.
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
