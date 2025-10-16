import { Card, CardContent } from "@/components/ui/card"
import { ServiceOnboardingForm } from "@/components/service-onboarding-form"
import { TrendingUp, CheckCircle2, Shield, Globe, Clock } from "lucide-react"
import Link from "next/link"

export default function TradeFinancePage() {
  const features = [
    "Corporate Loans for high-value transactions",
    "Structured Trade Finance solutions",
    "Working Capital Solutions",
    "Letter of Credit Facilities",
    "Export/Import Financing",
    "Pre-shipment and Post-shipment Finance",
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade security and compliance for all financial operations",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to international banking networks and trade corridors",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick approval and disbursement for time-sensitive deals",
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
            <span>Trade Finance & Capital Solutions</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
                <TrendingUp size={20} />
                <span className="text-sm font-medium">Financial Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Trade Finance & Capital Solutions</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Comprehensive financing solutions for high-value cross-border transactions, enabling smooth capital flow
                and risk mitigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our trade finance solutions are designed to support businesses engaged in international trade, providing
                the capital and financial instruments needed to facilitate smooth transactions across borders.
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <benefit.icon className="text-primary mb-3" size={32} strokeWidth={1.5} />
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <ServiceOnboardingForm
                serviceName="Trade Finance & Capital Solutions"
                serviceDescription="Fill out the form below and our trade finance specialists will contact you to discuss your capital requirements."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">01</div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">Discuss your financing needs and transaction details</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">02</div>
                <h3 className="font-semibold mb-2">Due Diligence</h3>
                <p className="text-sm text-muted-foreground">KYC verification and risk assessment</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">03</div>
                <h3 className="font-semibold mb-2">Approval & Terms</h3>
                <p className="text-sm text-muted-foreground">Receive financing approval and agreement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">04</div>
                <h3 className="font-semibold mb-2">Disbursement</h3>
                <p className="text-sm text-muted-foreground">Funds released for your transaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
