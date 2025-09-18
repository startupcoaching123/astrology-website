"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Star, Moon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-secondary/20 twinkle-animation">
          <Star className="h-4 w-4" />
        </div>
        <div className="absolute top-40 right-20 text-secondary/30 twinkle-animation" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-6 w-6" />
        </div>
        <div
          className="absolute bottom-40 left-20 text-secondary/20 twinkle-animation"
          style={{ animationDelay: "2s" }}
        >
          <Moon className="h-5 w-5" />
        </div>
        <div
          className="absolute top-60 left-1/3 text-secondary/15 twinkle-animation"
          style={{ animationDelay: "0.5s" }}
        >
          <Star className="h-3 w-3" />
        </div>
        <div
          className="absolute bottom-60 right-1/3 text-secondary/25 twinkle-animation"
          style={{ animationDelay: "1.5s" }}
        >
          <Sparkles className="h-4 w-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left slide-in-left">
            <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
              Unlock Your
              <span className="text-secondary block">Cosmic Destiny</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Discover personalized astrology reports, daily horoscopes, and cosmic insights that guide your life
              journey. Professional readings crafted by expert astrologers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Your Reading
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                View Sample Reports
              </Button>
            </div>
          </div>

          {/* Right Side - Moving Cards */}
          <div className="relative slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 float-animation">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Star className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-card-foreground mb-2">Daily Horoscope</h3>
                  <p className="text-sm text-muted-foreground">Your cosmic guidance for today</p>
                </div>
                <div
                  className="bg-card border border-border rounded-lg p-4 float-animation"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Moon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-card-foreground mb-2">Relationship Report</h3>
                  <p className="text-sm text-muted-foreground">Cosmic compatibility insights</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div
                  className="bg-card border border-border rounded-lg p-4 float-animation"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-card-foreground mb-2">Health Report</h3>
                  <p className="text-sm text-muted-foreground">Wellness through the stars</p>
                </div>
                <div
                  className="bg-card border border-border rounded-lg p-4 float-animation"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                    <Star className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-card-foreground mb-2">Visa Report</h3>
                  <p className="text-sm text-muted-foreground">Travel timing guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
