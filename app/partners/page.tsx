import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Building2, Handshake, Globe2, TrendingUp, ArrowRight } from "lucide-react"

export default function PartnersPage() {
  const partnerCategories = [
    {
      icon: Building2,
      title: "Financial Institutions",
      description: "Strategic partnerships with banks and financial institutions across multiple continents.",
      partners: [
        "International Trade Finance Banks",
        "Regional Development Banks",
        "Private Equity Firms",
        "Investment Funds",
      ],
    },
    {
      icon: Globe2,
      title: "Logistics & Freight",
      description: "Global network of logistics providers ensuring seamless cross-border movement.",
      partners: [
        "International Freight Forwarders",
        "Customs Clearance Specialists",
        "Port & Terminal Operators",
        "Air & Sea Cargo Carriers",
      ],
    },
    {
      icon: Handshake,
      title: "Insurance & Risk",
      description: "Partnerships with leading insurance providers for comprehensive coverage.",
      partners: [
        "Marine Insurance Underwriters",
        "Cargo Insurance Providers",
        "Trade Credit Insurers",
        "Risk Assessment Firms",
      ],
    },
    {
      icon: TrendingUp,
      title: "Commodity Traders",
      description: "Established relationships with major commodity trading houses worldwide.",
      partners: [
        "Agricultural Commodity Traders",
        "Metals & Minerals Brokers",
        "Oil & Gas Trading Companies",
        "Energy Product Suppliers",
      ],
    },
  ]

  const subsidiaries = [
    {
      name: "G1 Trade Finance",
      description: "Specialized in corporate lending and structured trade finance solutions.",
      focus: "Trade Finance & Capital Solutions",
    },
    {
      name: "G1 Commodities",
      description: "Expert brokerage services for agricultural products, metals, and energy.",
      focus: "Commodities Trading & Brokerage",
    },
    {
      name: "G1 Logistics & Security",
      description: "Secure logistics coordination and SKR-secured shipment management.",
      focus: "Logistics & Supply Chain",
    },
    {
      name: "G1 Risk Advisory",
      description: "Comprehensive insurance placement and risk management consulting.",
      focus: "Insurance & Risk Advisory",
    },
    {
      name: "G1 Business Solutions",
      description: "Strategic advisory and capacity building for SMEs and corporations.",
      focus: "Business Consultancy",
    },
    {
      name: "G1 Wealth Management",
      description: "Tailored investment strategies for high-net-worth individuals.",
      focus: "Investment & Wealth Management",
    },
    {
      name: "G1 Energy Solutions",
      description: "Renewable energy projects and solar EPC services.",
      focus: "Renewable Energy & Solar",
    },
  ]

  const regions = [
    {
      region: "East & Central Africa",
      countries: "Kenya, Uganda, Tanzania, Rwanda, Burundi, DRC",
    },
    {
      region: "West Africa",
      countries: "Nigeria, Ghana, Senegal, Côte d'Ivoire",
    },
    {
      region: "Southern Africa",
      countries: "South Africa, Zambia, Zimbabwe, Botswana",
    },
    {
      region: "Middle East",
      countries: "UAE, Saudi Arabia, Qatar, Turkey",
    },
    {
      region: "Asia-Pacific",
      countries: "China, India, Singapore, Malaysia",
    },
    {
      region: "Europe",
      countries: "United Kingdom, Germany, Netherlands",
    },
    {
      region: "Americas",
      countries: "United States, Brazil, Canada",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Partners & Subsidiaries</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              A global network of strategic partnerships enabling seamless cross-border trade facilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">G1 Group Subsidiaries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized divisions delivering focused expertise across all service lines
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((subsidiary, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{subsidiary.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{subsidiary.description}</p>
                  <div className="text-sm font-medium text-primary">{subsidiary.focus}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Strategic Partner Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders across finance, logistics, insurance, and commodities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className="text-primary" size={32} strokeWidth={1.5} />
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="text-primary flex-shrink-0 mt-1" size={16} />
                        <span className="text-muted-foreground">{partner}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Global Partner Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Active partnerships across seven regions spanning five continents
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{region.region}</h3>
                  <p className="text-sm text-muted-foreground">{region.countries}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Partner With G1 Group</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Integrated Service Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access to our complete suite of trade facilitation services under one coordinated framework.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 15 years of successful high-value transactions across multiple continents and industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Compliance & Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full regulatory compliance and industry-leading security protocols for all transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interested in Partnership?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Join our global network of strategic partners and expand your reach in cross-border trade.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Contact Partnership Team <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
