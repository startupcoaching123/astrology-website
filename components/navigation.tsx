"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Star } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/astrologo.png"   // path inside /public
              alt="Jai Kedarnath Logo"
              width={250}        // adjust as needed
              height={250}
              priority          // ensures it loads fast (good for navbars)
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#reports" className="text-foreground hover:text-secondary transition-colors">
              Reports
            </a>
            <a href="#calculators" className="text-foreground hover:text-secondary transition-colors">
              Calculators
            </a>
            <a href="#about" className="text-foreground hover:text-secondary transition-colors">
              About
            </a>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              Get Reading
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <a href="#reports" className="block px-3 py-2 text-foreground hover:text-secondary">
                Reports
              </a>
              <a href="#calculators" className="block px-3 py-2 text-foreground hover:text-secondary">
                Calculators
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-secondary">
                About
              </a>
              <Button variant="default" className="w-full mt-2 bg-secondary hover:bg-secondary/90">
                Get Reading
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
