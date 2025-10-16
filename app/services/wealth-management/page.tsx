import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { DollarSign, CheckCircle2, PieChart, Lock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function WealthManagementPage() {
  const services = [
    "High-Net-Worth Advisory",
    "Asset Preservation Strategies",
    "Offshore & Investment Structuring",
    "Portfolio Management",
    "Estate Planning",
    "Tax Optimization",
    "Succession Planning",
    "Alternative Investments",
  ]

  const approach = [
    {
      icon: PieChart,
      title: "Diversified Strategy",
      description: "Balanced portfolios across multiple asset classes and geographies",
    },
    {
      icon: Lock,
      title: "Asset Protection",
      description: "Secure structures to preserve and grow your wealth",
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Strategic investments aligned with your financial goals",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/services"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
            <span className="text-primary-foreground/60">/</span>
            <span>Investment & Wealth Management</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <DollarSign size={20} />
                <span className="text-sm font-medium">Wealth Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Investment & Wealth Management</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Tailored investment strategies and wealth preservation solutions for high-net-worth individuals and
                institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Preserve and Grow Your Wealth</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our wealth management services provide sophisticated investment strategies and asset protection
                solutions tailored to high-net-worth individuals and families.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {approach.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <item.icon className="text-primary mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Investment & Wealth Management"
                serviceDescription="Schedule a confidential consultation with our wealth management advisors."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
