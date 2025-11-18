import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Globe2 } from "@/components/icons"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "African Focus",
      description: "Dedicated to empowering African businesses with affordable financing solutions for projects that create communal social impact.",
    },
    {
      icon: Eye,
      title: "Transparency & Integrity",
      description: "Building lasting relationships through honest communication, ethical practices, and reliable service delivery.",
    },
    {
      icon: Award,
      title: "Three Decades of Experience",
      description: "Over 30 years of combined management experience in fund management, project management, strategic planning, and investment advisory.",
    },
    {
      icon: Globe2,
      title: "Multi-Sector Expertise",
      description: "Specialized knowledge across Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, ICT, and Greenfield sectors.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">About Afri-Rise</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              The African Fund, For African Companies - Empowering businesses with affordable financing for 
              Private Sector African Projects that create communal social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Afri-Rise Equity Limited is a Fund Management Consultancy firm formed to assist businesses in getting 
                  affordable financing for Private Sector African Projects that have a communal social impact.
                </p>
                <p>
                  With over three decades of combined management experience, Afri-Rise specializes in Business Development 
                  across a myriad of sectors including Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, 
                  ICT, and Greenfield projects.
                </p>
                <p>
                  Afri-Rise is part of Ronami Group of Companies (Ronami Holdings Ltd), established in 2013. Ronami International 
                  collaborates closely with international private companies and organizations, assisting them in adapting their 
                  business models to the local business environment and developing effective business strategies tailored for 
                  the Kenyan and East African market.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/afri-rise/nairobi-business-1.jpg"
                alt="Afri-Rise Headquarters in Nairobi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ronami Group of Companies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Afri-Rise is proud to be part of Ronami International, a consultancy and supply of goods and services 
              company with a strong track record
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Established Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ronami International has fostered collaborations with key Kenyan organizations including Kenya Investment 
                  Authority, Kenya National Chamber of Commerce, and Kenya Private Sector Alliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Global Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Established MOUs and joint ventures with companies from Northern Europe, North and South America, 
                  the Caribbean, and other East African companies and governments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ronami offers Project Management, Market Research, Partner Search, Business Planning, Event Planning, 
                  Training Workshops, Culture Seminars, and Security Advisory Services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Local Market Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep understanding of local business culture and practices, helping international companies successfully 
                  operate in the Kenyan and East African market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="text-[#ef393b] mx-auto mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Strategically located to serve African businesses and international partners
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">Nairobi, Kenya</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  P.O.BOX 47942 NAIROBI, KENYA<br />
                  WU YI PLAZA GALANA ROAD KILIMANI<br />
                  SUITE B 6TH FLOOR ROOM 12
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-foreground">Dubai, UAE</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  DWC BUSINESS CENTER<br />
                  LEVEL 4 BUILDING A2<br />
                  DUBAI SOUTH BUSINESS PARK
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Discover how Afri-Rise can support your African business with affordable financing solutions and expert 
            consultancy services for projects with social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#ef393b] text-white hover:bg-[#d73035]">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-[#ef393b] text-[#ef393b] hover:bg-[#ef393b] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
