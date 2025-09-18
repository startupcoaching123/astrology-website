import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jai Kedarnath - Professional Astrology Reports & Calculators",
  description:
    "Get personalized astrology reports, daily horoscopes, and use our love calculator. Professional cosmic guidance for your life journey.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
