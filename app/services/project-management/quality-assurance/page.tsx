import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, Target, Shield, TrendingUp, FileText, Users } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quality Assurance & Delivery | Project Management | Afri-Rise",
  description: "Rigorous quality assurance processes to ensure project deliverables meet the highest standards. Expert quality management from Afri-Rise.",
  keywords: ["quality assurance", "quality management", "project delivery", "quality control", "Afri-Rise"],
}

export default function QualityAssurancePage() {
  const benefits = [
    {
      icon: Target,
      title: "Quality Planning",
      description: "Comprehensive quality planning with clear standards, metrics, and acceptance criteria.",
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Systematic quality control processes throughout project execution and delivery phases.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Independent quality assurance reviews and audits to ensure compliance with standards.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Ongoing quality improvement initiatives based on lessons learned and best practices.",
    },
  ]

  const features = [
    "Quality management planning and standards definition",
    "Quality control checkpoints and reviews",
    "Independent quality assurance audits",
    "Deliverable inspection and testing",
    "Non-conformance management and corrective actions",
    "Quality metrics tracking and reporting",
    "Stakeholder acceptance and sign-off processes",
    "Continuous improvement and lessons learned",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Quality Assurance & Delivery</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Rigorous quality assurance processes to ensure project deliverables meet the highest standards. 
              We guarantee excellence in every aspect of your African project delivery.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Ensure Quality <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quality Management Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive quality management throughout the project lifecycle
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
                src="/images/afri-rise/project-management-africa-3.jpg"
                alt="Quality Assurance"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Features</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our quality assurance approach combines international standards with local African 
                requirements, ensuring deliverables meet both global and regional expectations.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Quality Assurance Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can ensure quality in your project delivery
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Deliver Excellence</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for quality assurance that ensures your project meets the highest standards.
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
