import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Users, TrendingUp, Globe2, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const values = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals across fund management, investment advisory, and strategic planning.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear paths for professional advancement in African finance.",
    },
    {
      icon: Globe2,
      title: "Pan-African Impact",
      description: "Contribute to projects that drive economic development across the African continent.",
    },
    {
      icon: Briefcase,
      title: "Meaningful Work",
      description: "Support African businesses and infrastructure projects that create lasting positive impact.",
    },
  ]

  const openPositions = [
    {
      title: "Investment Analyst",
      department: "Investment Advisory",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description:
        "Conduct financial analysis, due diligence, and market research for potential investments across African private sector projects.",
    },
    {
      title: "Fund Manager",
      department: "Fund Management",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description:
        "Manage investment portfolios, oversee capital deployment, and maintain relationships with investors and portfolio companies.",
    },
    {
      title: "Strategic Planning Consultant",
      department: "Strategic Planning",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description:
        "Develop growth strategies, conduct market analysis, and provide strategic advisory services to African enterprises.",
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Nairobi, Kenya / Remote",
      type: "Full-time",
      description:
        "Oversee project execution, coordinate stakeholders, and ensure successful delivery of infrastructure and development projects.",
    },
    {
      title: "Financial Analyst",
      department: "Investment Advisory",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description:
        "Build financial models, assess investment opportunities, and support portfolio management activities.",
    },
    {
      title: "Business Development Manager",
      department: "Business Development",
      location: "Nairobi, Kenya / Lagos, Nigeria",
      type: "Full-time",
      description:
        "Identify new investment opportunities, develop strategic partnerships, and expand Afri-Rise's market presence across Africa.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Careers at Afri-Rise</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join a dynamic team driving African economic development through strategic investments and expert consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that's transforming African private sector development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <value.icon className="text-primary mx-auto mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Join our team and help shape the future of African investment</p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/contact">
                        Apply Now <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits & Perks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Market-leading salaries with performance-based bonuses and equity participation opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training programs, certifications, and opportunities for continuous learning in finance and investment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive health insurance and wellness programs for you and your family.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pan-African Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Opportunities to work on projects across multiple African countries and build a continental network.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Flexible working arrangements and generous leave policies.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Impact-Driven Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Work on projects that create real economic and social impact across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            We're always looking for talented individuals passionate about African development. Send us your CV and let us know how you can contribute to Afri-Rise.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
