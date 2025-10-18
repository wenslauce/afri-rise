import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { CookieBanner } from "@/components/cookie-banner"
import { BackToTop } from "@/components/back-to-top"
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "G1 Group of Companies | Securing High-Value Trade Across Borders",
  description:
    "End-to-end protection, movement, and facilitation for high-value assets. From minerals and consignments to insurance, security, and finance.",
  generator: "v0.app",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "G1 Group of Companies | Securing High-Value Trade Across Borders",
    description:
      "End-to-end protection, movement, and facilitation for high-value assets. From minerals and consignments to insurance, security, and finance.",
    url: "https://g1groupofcompanies.com",
    siteName: "G1 Group of Companies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "G1 Group of Companies - Securing High-Value Trade Across Borders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G1 Group of Companies | Securing High-Value Trade Across Borders",
    description:
      "End-to-end protection, movement, and facilitation for high-value assets. From minerals and consignments to insurance, security, and finance.",
    images: ["/og-image.png"],
  },
  keywords: [
    "trade finance",
    "commodities trading",
    "logistics",
    "insurance",
    "risk management",
    "cross-border trade",
    "high-value assets",
    "G1 Group",
    "Nairobi Kenya",
    "global trade",
  ],
  authors: [{ name: "G1 Holdings & Security Limited" }],
  creator: "G1 Holdings & Security Limited",
  publisher: "G1 Holdings & Security Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/video/g1loop.mp4" as="video" type="video/mp4" />
      </head>
      <body className="font-sans">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
            <BackToTop />
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
