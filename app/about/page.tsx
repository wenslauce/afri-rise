import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Globe2 } from "@/components/icons"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision & Accountability",
      description: "Every transaction handled with meticulous attention to detail and full accountability.",
    },
    {
      icon: Eye,
      title: "Transparency & Trust",
      description: "Building lasting relationships through honest communication and reliable service delivery.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "Continuously improving our services to meet evolving market demands and client needs.",
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Expertise",
      description: "International network combined with deep understanding of regional markets and regulations.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">About G1 Group of Companies</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Your strategic partner in cross-border trade facilitation and risk management, operating across five
              continents.
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
                  G1 Group of Companies (legal: G1 Holdings & Security Limited) is a fully integrated trade facilitation
                  and risk management partner headquartered in Nairobi, Kenya.
                </p>
                <p>
                  We support high-value transactions across Africa, the Middle East, Asia, Europe, and the Americas
                  through a unified service model that combines finance, commodities, logistics, insurance, energy, and
                  advisory into one coordinated framework.
                </p>
                <p>
                  Our mandate is to enable safe, secure, and efficient cross-border movement of assets, capital, and
                  infrastructure. From trade finance and corporate lending to commodity brokerage, freight coordination,
                  SKR-secured logistics, insurance placement, business advisory, investment structuring, and energy
                  project development.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/modern-office-building-corporate-headquarters.jpg"
                alt="G1 Group Headquarters"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlike traditional service providers, G1 operates as a strategic partner rather than a standalone vendor
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Unified Service Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We bridge the gaps between financiers, traders, insurers, logistics providers, energy investors, and
                  regulators, allowing our clients to transact with confidence under a single point of accountability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">End-to-End Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete solutions from deal origination to settlement, ensuring seamless execution across all phases
                  of your transaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">High-Value Specialization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expertise in SKR consignments, Oil & Gas shipments, Structured Commodity Finance, and Armored Movement
                  for high-risk, high-value transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Compliance & Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully aligned with AML, KYC, PSRA, IRA, Mining & Energy Regulations. Every transaction handled under
                  strict discretion and verified documentation.
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
                  <value.icon className="text-primary mx-auto mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Active partnerships and operations across multiple continents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Africa</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Kenya (HQ), East & Central Africa, COMESA, EAC, South Africa, West Africa
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Middle East</h3>
                <p className="text-primary-foreground/80 text-sm">UAE, Saudi Arabia, Qatar, Turkey</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Asia-Pacific</h3>
                <p className="text-primary-foreground/80 text-sm">China, India, Southeast Asia</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Europe</h3>
                <p className="text-primary-foreground/80 text-sm">United Kingdom, European Union</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Americas</h3>
                <p className="text-primary-foreground/80 text-sm">United States, Brazil, Latin America</p>
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
            Discover how G1 Group can facilitate your next high-value transaction with our comprehensive suite of
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
