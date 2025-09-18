"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Star, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/mystical-astrologer-in-cosmic-setting-with-stars-a.jpg"
                alt="About Jai Kedarnath - Professional Astrology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-16 h-16 p-0"
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-6 text-balance">
                About Jai Kedarnath
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 15 years, Jai Kedarnath has been guiding individuals through life's journey using the
                  ancient wisdom of astrology combined with modern analytical techniques.
                </p>
                <p>
                  Our team of certified astrologers and cosmic researchers work tirelessly to provide you with accurate,
                  personalized readings that help you make informed decisions about love, career, health, and spiritual
                  growth.
                </p>
                <p>
                  We believe that everyone deserves access to cosmic guidance, which is why we've made our reports
                  affordable and our calculators free to use.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="text-center bg-card border-border">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                      <div className="text-2xl font-montserrat font-black text-card-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
