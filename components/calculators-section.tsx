"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Calculator, Users, Zap } from "lucide-react"

export function CalculatorsSection() {
  const [loveResult, setLoveResult] = useState<number | null>(null)
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")

  const calculateLove = () => {
    if (name1.trim() && name2.trim()) {
      // Simple love calculation based on name compatibility
      const combined = (name1 + name2).toLowerCase().replace(/\s/g, "")
      let sum = 0
      for (let i = 0; i < combined.length; i++) {
        sum += combined.charCodeAt(i)
      }
      const percentage = (sum % 100) + 1
      setLoveResult(percentage > 100 ? percentage - 50 : percentage)
    }
  }

  const calculators = [
    {
      icon: Heart,
      title: "Love Calculator",
      description: "Discover your romantic compatibility percentage",
      isActive: true,
    },
    {
      icon: Calculator,
      title: "Numerology Calculator",
      description: "Calculate your life path number",
      isActive: false,
    },
    {
      icon: Users,
      title: "Friendship Compatibility",
      description: "Check compatibility with friends",
      isActive: false,
    },
    {
      icon: Zap,
      title: "Energy Calculator",
      description: "Find your energy levels by date",
      isActive: false,
    },
  ]

  return (
    <section id="calculators" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-5xl text-foreground mb-4 text-balance">
            Cosmic Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Use our interactive calculators to discover instant Jai Kedarnath about love, compatibility, and your
            spiritual numbers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {calculators.map((calc, index) => {
              const Icon = calc.icon
              return (
                <Card
                  key={calc.title}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    calc.isActive ? "ring-2 ring-secondary bg-secondary/5" : "hover:-translate-y-1"
                  }`}
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="font-montserrat font-bold text-card-foreground">{calc.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{calc.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          {/* Active Calculator */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-montserrat font-bold text-card-foreground flex items-center">
                <Heart className="h-6 w-6 text-secondary mr-2" />
                Love Compatibility Calculator
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter two names to discover your cosmic love compatibility percentage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name1" className="text-card-foreground">
                    First Name
                  </Label>
                  <Input
                    id="name1"
                    placeholder="Enter first name"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name2" className="text-card-foreground">
                    Second Name
                  </Label>
                  <Input
                    id="name2"
                    placeholder="Enter second name"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <Button
                onClick={calculateLove}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={!name1.trim() || !name2.trim()}
              >
                <Heart className="mr-2 h-4 w-4" />
                Calculate Love Compatibility
              </Button>

              {loveResult !== null && (
                <div className="text-center p-6 bg-secondary/10 rounded-lg border border-secondary/20">
                  <div className="text-4xl font-montserrat font-black text-secondary mb-2">{loveResult}%</div>
                  <p className="text-card-foreground font-medium mb-2">
                    {name1} & {name2}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {loveResult >= 80
                      ? "Perfect cosmic match! ✨"
                      : loveResult >= 60
                        ? "Great compatibility! 💫"
                        : loveResult >= 40
                          ? "Good potential together! 🌟"
                          : "Challenging but possible! 💪"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
