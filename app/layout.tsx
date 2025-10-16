import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "G1 Group of Companies | Securing High-Value Trade Across Borders",
  description:
    "End-to-end protection, movement, and facilitation for high-value assets. From minerals and consignments to insurance, security, and finance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  )
}
