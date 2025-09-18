import { Star, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-secondary" />
              <span className="font-montserrat font-black text-xl">Cosmic Insights</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted source for professional astrology reports, cosmic guidance, and spiritual insights.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Daily Horoscope
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Love Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Health Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Career Guidance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Travel Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Calculators</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Love Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Numerology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Compatibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Energy Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>support@cosmicinsights.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Cosmic Insights. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
