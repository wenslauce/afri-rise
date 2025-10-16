import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { Briefcase, CheckCircle2, Users, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ConsultancyPage() {
  const services = [
    "SME & Corporate Advisory",
    "Compliance & Governance Training",
    "Performance & Operational Structuring",
    "Market Entry Strategy",
    "Business Process Optimization",
    "Financial Restructuring",
    "Strategic Planning",
    "Change Management",
  ]

  const expertise = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned consultants with deep industry knowledge",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Customized strategies aligned with your business goals",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of driving measurable business improvements",
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
            <span>Business Consultancy & Capacity Building</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <Briefcase size={20} />
                <span className="text-sm font-medium">Advisory Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
                Business Consultancy & Capacity Building
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Strategic advisory services to enhance operational efficiency, compliance, and business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Business</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our consultancy services help businesses optimize operations, ensure compliance, and build capacity for
                sustainable growth in competitive markets.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {expertise.map((item, index) => (
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
                serviceName="Business Consultancy & Capacity Building"
                serviceDescription="Schedule a consultation to discuss how we can help optimize your business operations."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
