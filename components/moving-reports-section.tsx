"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Plane, Activity, Calendar, CopySlash as Crystal } from "lucide-react"

const reports = [
  {
    icon: Calendar,
    title: "Daily Horoscope",
    description: "Personalized daily cosmic guidance tailored to your zodiac sign and birth chart.",
    price: "$9.99",
    features: ["Daily predictions", "Lucky numbers", "Best times for decisions"],
  },
  {
    icon: Heart,
    title: "Love & Relationship",
    description: "Deep insights into your romantic compatibility and relationship dynamics.",
    price: "$24.99",
    features: ["Compatibility analysis", "Relationship timing", "Communication tips"],
  },
  {
    icon: Activity,
    title: "Health & Wellness",
    description: "Cosmic guidance for your physical and mental well-being journey.",
    price: "$19.99",
    features: ["Health predictions", "Wellness timing", "Energy cycles"],
  },
  {
    icon: Plane,
    title: "Travel & Visa",
    description: "Optimal timing for travel, relocation, and visa applications.",
    price: "$29.99",
    features: ["Travel timing", "Location analysis", "Success predictions"],
  },
  {
    icon: Star,
    title: "Career & Finance",
    description: "Professional guidance for career moves and financial decisions.",
    price: "$34.99",
    features: ["Career timing", "Financial forecasts", "Success strategies"],
  },
  {
    icon: Crystal,
    title: "Spiritual Growth",
    description: "Deepen your spiritual journey with cosmic wisdom and guidance.",
    price: "$22.99",
    features: ["Spiritual insights", "Growth opportunities", "Meditation guidance"],
  },
]

export function MovingReportsSection() {
  return (
    <section id="reports" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-4 text-balance">
            Personalized Cosmic Reports
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our comprehensive collection of astrology reports, each crafted by expert astrologers to provide
            you with accurate cosmic insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => {
            const Icon = report.icon
            return (
              <Card
                key={report.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "slideInRight 0.6s ease-out forwards",
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-card-foreground">{report.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-2xl font-montserrat font-black text-secondary">{report.price}</div>
                    <ul className="space-y-2">
                      {report.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Get Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
