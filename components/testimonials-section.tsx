import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@/components/icons"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Afri-Rise helped us secure affordable financing for our renewable energy project in Kenya. Their understanding of the local market and social impact focus made all the difference.",
      author: "Amina Odhiambo",
      company: "Green Energy Solutions Kenya",
      role: "Founder & CEO",
    },
    {
      quote:
        "The strategic planning and project management support from Afri-Rise transformed our agricultural business. They truly understand African markets and sustainable development.",
      author: "Joseph Mwangi",
      company: "East Africa Agribusiness Ltd",
      role: "Managing Director",
    },
    {
      quote:
        "As part of Ronami Group, Afri-Rise brings decades of experience and strong partnerships. Their investment advisory services helped us expand across three African countries.",
      author: "Fatima Al-Rashid",
      company: "Pan-African Infrastructure Fund",
      role: "Investment Director",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Success Stories from African Businesses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empowering businesses across Africa with affordable financing and expert consultancy
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
