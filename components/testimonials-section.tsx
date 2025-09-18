import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "The love compatibility report was incredibly accurate! It helped me understand my relationship better and we're now happily married.",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The career guidance report came at the perfect time. I followed the cosmic timing advice and landed my dream job!",
    image: "/professional-man-smiling.png",
  },
  {
    name: "Emma Rodriguez",
    location: "London, UK",
    rating: 5,
    text: "I've been using the daily horoscope for months. It's surprisingly accurate and helps me plan my day better.",
    image: "/young-woman-smiling.png",
  },
  {
    name: "David Kumar",
    location: "Mumbai, India",
    rating: 5,
    text: "The visa timing report was spot on! I applied exactly when suggested and got approved without any issues.",
    image: "/indian-man-smiling.png",
  },
  {
    name: "Lisa Thompson",
    location: "Sydney, Australia",
    rating: 5,
    text: "The health report warned me about potential issues and I was able to take preventive measures. Truly grateful!",
    image: "/middle-aged-woman-smiling.png",
  },
  {
    name: "James Wilson",
    location: "Los Angeles, USA",
    rating: 5,
    text: "The love calculator was fun to try, and surprisingly, it predicted our compatibility perfectly. We're still together after 3 years!",
    image: "/young-man-smiling.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied clients who have transformed their lives with our cosmic guidance and accurate
            predictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-bold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
