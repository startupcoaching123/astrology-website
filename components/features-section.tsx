import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Users, Star, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your personal information and readings are completely confidential and secure.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your personalized reports delivered instantly to your email inbox.",
  },
  {
    icon: Users,
    title: "Expert Astrologers",
    description: "All reports are crafted by certified astrologers with years of experience.",
  },
  {
    icon: Star,
    title: "Accurate Predictions",
    description: "Our advanced algorithms ensure highly accurate and personalized readings.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your questions and concerns.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "100% money-back guarantee if you're not completely satisfied with your reading.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-4 text-balance">
            Why Choose Jai Kedarnath?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're committed to providing you with the most accurate, insightful, and transformative astrology experience
            possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
