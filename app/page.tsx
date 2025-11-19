import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "@/components/icons"
import { AnimatedCounter } from "@/components/animated-counter"
import { TrustCredibilitySection } from "@/components/trust-credibility-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { GlobalReachSection } from "@/components/global-reach-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecurityHighlightsSection } from "@/components/security-highlights-section"

export default function HomePage() {
  const services = [
    {
      image: "/images/afri-rise/fund-management-1.jpg",
      title: "Fund Management",
      description: "Working with thousands of companies around the world to provide expert fund management solutions for African private sector projects.",
      href: "/services/fund-management",
    },
    {
      image: "/images/afri-rise/project-management-africa-1.jpg",
      title: "Project Management",
      description: "Working with thousands of companies around the world to deliver comprehensive project management services for impactful African initiatives.",
      href: "/services/project-management",
    },
    {
      image: "/images/afri-rise/strategic-planning-business-1.jpg",
      title: "Strategic Planning",
      description: "Working with thousands of companies around the world to develop strategic plans that drive sustainable growth and social impact.",
      href: "/services/strategic-planning",
    },
    {
      image: "/images/afri-rise/investment-advisory-1.jpg",
      title: "Investment Advisory",
      description: "Working with thousands of companies around the world to provide expert investment advisory services for African business opportunities.",
      href: "/services/investment-advisory",
    },
  ]

  const stats = [
    { value: "30+", label: "Years Combined Experience" },
    { value: "7", label: "Industry Sectors" },
    { value: "1000+", label: "Companies Served" },
    { value: "2", label: "Office Locations" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/afri-rise/african-business-meeting-1.jpg)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Afri-Rise Equity Limited
            <br />
            The African Fund, For African Companies
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            A Fund Management Consultancy firm formed to assist businesses in getting affordable financing for 
            Private Sector African Projects that have a communal social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to use AnimatedCounter component for animated numbers */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <TrustCredibilitySection />

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                The African Fund, For African Companies
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Afri-Rise Equity Limited is a Fund Management Consultancy firm formed to assist businesses in getting 
                affordable financing for Private Sector African Projects that have a communal social impact.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over three decades of combined management experience, Afri-Rise is part of Ronami Group of Companies, 
                specializing in Business Development across Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, 
                ICT, and Greenfield sectors.
              </p>
              <Button asChild className="bg-[#B3892B] text-white hover:bg-[#9A7324]">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/professional-business-handshake-global-partnership.jpg"
                alt="Global Partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - removed bg-muted to eliminate white background */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive solutions for every aspect of cross-border trade and asset management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="card-hover h-full overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-[#B3892B] font-medium">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="btn-hover-lift bg-[#B3892B] text-white hover:bg-[#9A7324]">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <GlobalReachSection />

      {/* Why G1 Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Why Choose Afri-Rise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">African Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated to assisting African businesses with affordable financing for private sector projects 
                  that create communal social impact across the continent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Ronami Group Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Part of Ronami Group of Companies with established collaborations with Kenya Investment Authority, 
                  Kenya National Chamber of Commerce, and Kenya Private Sector Alliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Three Decades of Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 30 years of combined management experience in fund management, project management, strategic 
                  planning, and investment advisory services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Multi-Sector Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized knowledge across Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, 
                  ICT, and Greenfield project sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <SecurityHighlightsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Ready to Fund Your African Project?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Partner with Afri-Rise for affordable financing solutions and expert consultancy services for your 
            Private Sector African Projects with social impact.
          </p>
          <Button size="lg" asChild className="btn-hover-lift bg-[#B3892B] text-white hover:bg-[#9A7324]">
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
