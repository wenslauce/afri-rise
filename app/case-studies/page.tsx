import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Cross-Border Mineral Export Facilitation",
      client: "Major Mining Corporation",
      region: "East Africa to Asia",
      value: "$50M+",
      services: ["Trade Finance", "Logistics", "Insurance", "Secure Transport"],
      challenge:
        "A major mining corporation needed to export high-value mineral consignments from East Africa to Asia with comprehensive security and financing.",
      solution:
        "Afri-Rise provided end-to-end facilitation including structured trade finance, secure logistics coordination, marine insurance coverage, and customs coordination across multiple jurisdictions.",
      results: [
        "100% secure delivery with zero incidents",
        "30% reduction in transaction costs",
        "Completed 15-day faster than industry average",
        "Full regulatory compliance across all territories",
      ],
    },
    {
      title: "Agricultural Commodity Trading & Finance",
      client: "International Coffee Exporter",
      region: "Kenya to Europe & Middle East",
      value: "$25M+",
      services: ["Commodities Brokerage", "Trade Finance", "Logistics"],
      challenge:
        "An established coffee exporter required working capital financing and reliable logistics for seasonal exports to multiple international markets.",
      solution:
        "Afri-Rise structured a revolving trade finance facility, connected the exporter with premium buyers in Europe and Middle East, and coordinated freight and customs clearance.",
      results: [
        "Secured 40% higher prices through premium buyer network",
        "Improved cash flow with flexible financing terms",
        "Expanded to 5 new international markets",
        "Established long-term offtake agreements",
      ],
    },
    {
      title: "Oil & Gas Supply Chain Management",
      client: "Regional Energy Distributor",
      region: "Middle East to East Africa",
      value: "$100M+",
      services: ["Oil & Gas Trading", "Logistics", "Insurance", "Risk Advisory"],
      challenge:
        "A regional energy distributor needed reliable oil & gas supply with comprehensive risk management and logistics coordination.",
      solution:
        "Afri-Rise established direct sourcing relationships with Middle East suppliers, structured insurance coverage, and managed end-to-end logistics including port operations and inland distribution.",
      results: [
        "Reduced supply costs by 18%",
        "Achieved 99.8% on-time delivery rate",
        "Comprehensive insurance coverage for all shipments",
        "Established strategic supplier partnerships",
      ],
    },
    {
      title: "SME Business Expansion & Financing",
      client: "Manufacturing SME",
      region: "Kenya",
      value: "$5M",
      services: ["Corporate Loans", "Business Consultancy", "Capacity Building"],
      challenge:
        "A growing manufacturing SME required capital for expansion and operational restructuring to improve efficiency and competitiveness.",
      solution:
        "Afri-Rise provided corporate financing, conducted operational assessment, implemented performance improvement strategies, and delivered compliance training.",
      results: [
        "Secured $5M expansion capital",
        "Improved operational efficiency by 35%",
        "Achieved full regulatory compliance",
        "Increased revenue by 50% within 18 months",
      ],
    },
    {
      title: "Renewable Energy Project Financing",
      client: "Commercial Solar Developer",
      region: "East Africa",
      value: "$15M",
      services: ["Energy Financing", "Solar EPC", "Investment Structuring"],
      challenge:
        "A solar developer needed project financing and EPC services for a large-scale commercial solar installation.",
      solution:
        "Afri-Rise structured project financing, managed EPC delivery, and negotiated power purchase agreements with off-takers.",
      results: [
        "Successfully financed and delivered 10MW solar project",
        "Secured 20-year power purchase agreement",
        "Project completed on time and within budget",
        "Established framework for future projects",
      ],
    },
    {
      title: "High-Net-Worth Investment Portfolio",
      client: "Private Family Office",
      region: "International",
      value: "$30M+",
      services: ["Wealth Management", "Investment Structuring", "Asset Preservation"],
      challenge:
        "A high-net-worth family required sophisticated investment structuring and asset preservation strategies across multiple jurisdictions.",
      solution:
        "Afri-Rise developed diversified investment portfolio, structured offshore holdings, and implemented comprehensive asset protection strategies.",
      results: [
        "Achieved 12% average annual returns",
        "Optimized tax efficiency across jurisdictions",
        "Established robust asset protection framework",
        "Successful multi-generational wealth transfer planning",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Case Studies & Success Stories</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Real-world examples of how Afri-Rise delivers value across diverse industries and geographies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.region}</span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{study.value}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{study.challenge}</p>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how Afri-Rise can facilitate your next high-value transaction.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
