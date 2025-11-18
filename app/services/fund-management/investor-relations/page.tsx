import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, FileText, Globe, DollarSign, Mail } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investor Relations | Fund Management | Afri-Rise",
  description: "Professional investor relations services including reporting, communication, and stakeholder management. Expert fund management from Afri-Rise.",
  keywords: ["investor relations", "stakeholder management", "investor reporting", "communication", "Afri-Rise"],
}

export default function InvestorRelationsPage() {
  const services = [
    { icon: FileText, title: "Reporting", desc: "Comprehensive financial and performance reporting" },
    { icon: Globe, title: "Communication", desc: "Regular updates and transparent communication" },
    { icon: Users, title: "Stakeholder Management", desc: "Effective management of investor relationships" },
    { icon: DollarSign, title: "Performance Updates", desc: "Detailed portfolio performance analysis" },
  ]

  const features = [
    "Quarterly performance reports",
    "Annual investor meetings",
    "Regular communication updates",
    "Investor portal access",
    "Customized reporting",
    "Regulatory compliance reporting",
    "Crisis communication management",
    "Investor onboarding support",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Investor Relations</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Professional investor relations services including reporting, communication, and stakeholder management. 
              We build and maintain strong relationships with your investors.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Investor Relations Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building trust through transparent communication and professional reporting
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-[#ef393b] mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
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
                src="/images/afri-rise/african-business-meeting-2.jpg"
                alt="Investor Relations"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Provide</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our investor relations services ensure your investors stay informed, engaged, 
                and confident in their investment decisions.
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Strengthen Your Investor Relationships</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Contact Afri-Rise for professional investor relations services that build trust and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2" size={20} />
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
