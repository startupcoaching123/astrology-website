"use client"

import type React from "react"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function SearchParamsWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  // You can use searchParams if needed
  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans var(--font-poppins) ${GeistMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsWrapper>{children}</SearchParamsWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
