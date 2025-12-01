import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Briefcase, Target, Clock, Users, CheckCircle, Shield, Globe } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Management Services | Finance Advisory & Private Equity Consultancy | Afri-Rise",
  description: "Comprehensive project management consultancy services for impactful African initiatives across multiple sectors. Working with thousands of companies worldwide.",
  keywords: ["project management", "project management consultancy", "African projects", "project delivery", "finance advisory", "consultancy", "Afri-Rise"],
}

export default function ProjectManagementPage() {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Delivery",
      description: "Focused project execution ensuring objectives are met on time and within budget for African business success.",
    },
    {
      icon: Clock,
      title: "Timeline Management",
      description: "Efficient scheduling and milestone tracking to keep projects on track and stakeholders informed.",
    },
    {
      icon: Users,
      title: "Stakeholder Coordination",
      description: "Seamless communication and collaboration across all project stakeholders and team members.",
    },
    {
      icon: Briefcase,
      title: "Resource Optimization",
      description: "Strategic allocation and management of resources to maximize project efficiency and outcomes.",
    },
  ]

  const services = [
    "Project Planning & Execution",
    "Resource Allocation & Optimization",
    "Timeline & Budget Management",
    "Stakeholder Coordination",
    "Risk Mitigation Strategies",
    "Quality Assurance & Delivery",
    "Performance Monitoring & Reporting",
    "Change Management",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Project Management Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive project management consultancy services for impactful African initiatives across multiple sectors. 
              Working with thousands of companies around the world to deliver successful projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
                <Link href="https://app.afri-rise.com" target="_blank" rel="noopener noreferrer">
                  Apply for Funding <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Project Management Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven methodologies for delivering African projects with excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-[#B3892B] mb-4" />
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Project Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized project management solutions for successful African project delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/project-management/project-planning">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Project Planning & Execution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Comprehensive project planning from initiation to delivery, ensuring successful execution of African projects.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/project-management/resource-allocation">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Resource Allocation & Optimization</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Strategic allocation and optimization of human, financial, and material resources for maximum efficiency.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/project-management/timeline-budget">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Timeline & Budget Management</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Expert management of project timelines and budgets to ensure on-time, on-budget delivery.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/project-management/stakeholder-coordination">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Stakeholder Coordination</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Effective coordination and communication with all project stakeholders for seamless collaboration.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/project-management/risk-mitigation">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Risk Mitigation Strategies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Proactive identification and mitigation of project risks to ensure successful outcomes.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/services/project-management/quality-assurance">
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance & Delivery</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Rigorous quality assurance processes to ensure project deliverables meet the highest standards.
                  </p>
                  <div className="flex items-center text-[#B3892B] font-medium text-sm">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Execute Your Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Partner with Afri-Rise for expert project management consultancy services that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
              <Link href="https://app.afri-rise.com" target="_blank" rel="noopener noreferrer">
                Apply for Funding <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
