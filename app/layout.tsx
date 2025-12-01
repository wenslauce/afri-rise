import React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { CookieBanner } from "@/components/cookie-banner"
import { BackToTop } from "@/components/back-to-top"
import { Breadcrumb } from "@/components/breadcrumb"
import { OrganizationSchema, WebsiteSchema } from "@/components/structured-data"
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "Afri-Rise Equity Limited | Finance Advisory & Private Equity Consultancy",
  description:
    "Finance Advisory and Private Equity Consultancy firm specializing in Direct Investment Consultancy for Private Sector African Projects with communal social impact. Part of Ronami Group of Companies.",
  generator: "v0.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Afri-Rise Equity Limited | Finance Advisory & Private Equity Consultancy",
    description:
      "Finance Advisory and Private Equity Consultancy firm specializing in Direct Investment Consultancy for Private Sector African Projects with communal social impact.",
    url: "https://afri-rise.com",
    siteName: "Afri-Rise",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afri-Rise - Finance Advisory & Private Equity Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afri-Rise Equity Limited | Finance Advisory & Private Equity Consultancy",
    description:
      "Finance Advisory and Private Equity Consultancy firm specializing in Direct Investment Consultancy for Private Sector African Projects with communal social impact.",
    images: ["/og-image.png"],
  },
  keywords: [
    "finance advisory",
    "private equity consultancy",
    "direct investment consultancy",
    "investment advisory",
    "fund management",
    "project management",
    "strategic planning",
    "African fund",
    "African companies",
    "private sector financing",
    "Afri-Rise",
    "Ronami Group",
    "African business",
    "affordable financing",
    "social impact projects",
    "Kenya investment",
    "Dubai investment",
  ],
  authors: [{ name: "Afri-Rise Equity Limited" }],
  creator: "Afri-Rise Equity Limited",
  publisher: "Afri-Rise Equity Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.afri-rise.com",
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
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
        <link rel="preload" href="/images/afri-rise/african-business-meeting-1.jpg" as="image" />
      </head>
      <body className="font-sans">
        <OrganizationSchema />
        <WebsiteSchema />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <Breadcrumb />
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
