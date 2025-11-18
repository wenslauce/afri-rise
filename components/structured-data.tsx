import Script from "next/script"

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
}

export function OrganizationSchema({
  name = "Afri-Rise Equity Limited",
  url = "https://www.afri-rise.com",
  logo = "https://www.afri-rise.com/logo.png",
  description = "A Fund Management Consultancy firm formed to assist businesses in getting affordable financing for Private Sector African Projects that have a communal social impact. Part of Ronami Group of Companies.",
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "WU YI Plaza, Galana Road, Kilimani",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 917-730-2179",
      contactType: "customer service",
      email: "info@afri-rise.com",
      availableLanguage: ["English"],
      areaServed: ["Africa", "Middle East"],
    },
    sameAs: [
      "https://www.linkedin.com/company/afri-rise",
      "https://twitter.com/afririse",
    ],
    foundingDate: "2013",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "20-50",
    },
    areaServed: {
      "@type": "Place",
      name: "Africa",
    },
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  serviceType: string
  description: string
  url: string
  areaServed?: string
}

export function ServiceSchema({
  serviceName,
  serviceType,
  description,
  url,
  areaServed = "Worldwide",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Afri-Rise Equity Limited",
      url: "https://www.afri-rise.com",
    },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: "+1 917-730-2179",
      servicePostalAddress: {
        "@type": "PostalAddress",
        streetAddress: "WU YI Plaza, Galana Road, Kilimani",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
    },
  }

  return (
    <Script
      id={`service-schema-${serviceType.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebsiteSchemaProps {
  url?: string
  name?: string
  description?: string
}

export function WebsiteSchema({
  url = "https://www.afri-rise.com",
  name = "Afri-Rise",
  description = "The African Fund, For African Companies",
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
    publisher: {
      "@type": "Organization",
      name: "Afri-Rise Equity Limited",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  author?: string
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image = "https://www.afri-rise.com/og-image.png",
  author = "Afri-Rise Equity Limited",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Afri-Rise Equity Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://www.afri-rise.com/logo.png",
      },
    },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
