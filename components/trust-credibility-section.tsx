import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Handshake, CheckCircle } from "@/components/icons"

export function TrustCredibilitySection() {
  const credentials = [
    {
      icon: Award,
      title: "30+ Years Experience",
      description: "Over three decades of combined management experience in fund management and consultancy",
    },
    {
      icon: Shield,
      title: "Ronami Group Partnership",
      description: "Part of Ronami Group of Companies with established collaborations across East Africa",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Trusted partnerships with Kenya Investment Authority, Kenya National Chamber of Commerce, and Kenya Private Sector Alliance",
    },
    {
      icon: CheckCircle,
      title: "Social Impact Focus",
      description: "Dedicated to financing African projects with communal social impact and sustainable development",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Trusted Across Africa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empowering African businesses with affordable financing and expert consultancy services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon
            return (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-[#B3892B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{credential.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{credential.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
