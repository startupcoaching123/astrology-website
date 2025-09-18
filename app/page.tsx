import { HeroSection } from "@/components/hero-section"
import { MovingReportsSection } from "@/components/moving-reports-section"
import { CalculatorsSection } from "@/components/calculators-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MovingReportsSection />
      <CalculatorsSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
