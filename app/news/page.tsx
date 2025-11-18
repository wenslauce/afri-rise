import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      title: "Afri-Rise Launches $50M Fund for African Infrastructure Projects",
      date: "November 15, 2025",
      category: "Fund Launch",
      excerpt:
        "Afri-Rise Equity Limited announces the launch of its inaugural $50M fund dedicated to financing infrastructure projects across East and West Africa, focusing on sustainable development and economic growth.",
      image: "/news-fund-launch.jpg",
    },
    {
      title: "Strategic Partnership with Leading African Development Bank",
      date: "November 1, 2025",
      category: "Partnerships",
      excerpt:
        "Afri-Rise signs major partnership agreement with prominent African development bank, enhancing capital deployment capabilities and expanding reach across the continent.",
      image: "/news-partnership.jpg",
    },
    {
      title: "Afri-Rise Completes First Major Investment in Kenyan Energy Sector",
      date: "October 20, 2025",
      category: "Investments",
      excerpt:
        "Successfully closed $15M investment in renewable energy project in Kenya, demonstrating commitment to sustainable infrastructure development and clean energy transition.",
      image: "/news-energy-investment.jpg",
    },
    {
      title: "Expansion into West African Markets Announced",
      date: "October 5, 2025",
      category: "Expansion",
      excerpt:
        "Afri-Rise announces strategic expansion into Nigeria, Ghana, and Senegal, establishing regional offices to support growing portfolio of private sector projects.",
      image: "/news-expansion.jpg",
    },
    {
      title: "Afri-Rise Receives Excellence in Fund Management Award",
      date: "September 28, 2025",
      category: "Awards",
      excerpt:
        "Recognized for outstanding contribution to African private sector development at the African Investment Excellence Awards 2025.",
      image: "/news-award.jpg",
    },
    {
      title: "New Agricultural Investment Initiative Launched",
      date: "September 15, 2025",
      category: "Initiatives",
      excerpt:
        "Afri-Rise launches specialized agricultural investment program targeting smallholder farmers and agribusiness enterprises across East Africa.",
      image: "/news-agriculture.jpg",
    },
  ]

  const insights = [
    {
      title: "The Future of Private Sector Investment in Africa",
      date: "November 10, 2025",
      category: "Industry Insights",
      excerpt:
        "Exploring emerging trends in African private sector financing, including impact investing, blended finance structures, and the role of specialized fund managers in driving economic development.",
    },
    {
      title: "Affordable Financing Models for African Enterprises",
      date: "October 25, 2025",
      category: "Financial Innovation",
      excerpt:
        "Analysis of innovative financing structures that make capital more accessible to African businesses, from revenue-based financing to patient capital models.",
    },
    {
      title: "Strategic Planning for Sustainable Growth in African Markets",
      date: "October 10, 2025",
      category: "Strategic Planning",
      excerpt:
        "Best practices for developing and executing growth strategies in African markets, with focus on local partnerships, regulatory navigation, and long-term value creation.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">News & Insights</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Stay updated with the latest developments, investments, and industry insights from Afri-Rise.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Industry Insights</h2>
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{insight.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={14} />
                          <span>{insight.date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{insight.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Subscribe to our newsletter for the latest updates on fund management, investment opportunities, and Afri-Rise
                news.
              </p>
              <p className="text-sm text-primary-foreground/80">
                Contact us at info@afri-rise.com to subscribe to our newsletter.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
