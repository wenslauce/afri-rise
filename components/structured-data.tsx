import Script from "next/script"

interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  description?: string
}

export function OrganizationSchema({
  name = "Adams Minerals and Consultancy Limited",
  url = "https://www.adamsmineralsconsultancy.com",
  logo = "https://www.adamsmineralsconsultancy.com/logo.png",
  description = "Specialized minerals trading and strategic consultancy firm headquartered in Entebbe, Uganda, providing expert services across Africa, Middle East, Asia, Europe, and the Americas.",
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
      streetAddress: "Broadway, National Road",
      addressLocality: "Entebbe",
      addressCountry: "UG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+256784850601",
      contactType: "customer service",
      email: "info@adamsmineralsconsultancy.com",
      availableLanguage: ["English"],
      areaServed: ["Worldwide"],
    },
    sameAs: [
      "https://www.linkedin.com/company/adams-minerals-consultancy",
      "https://twitter.com/adamsminerals",
    ],
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50-100",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
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
      name: "Adams Minerals and Consultancy Limited",
      url: "https://www.adamsmineralsconsultancy.com",
    },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: "+256784850601",
      servicePostalAddress: {
        "@type": "PostalAddress",
        streetAddress: "Broadway, National Road",
        addressLocality: "Entebbe",
        addressCountry: "UG",
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
  url = "https://www.adamsmineralsconsultancy.com",
  name = "Adams Minerals and Consultancy",
  description = "Excellence in Minerals Trading and Strategic Consultancy",
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
    publisher: {
      "@type": "Organization",
      name: "Adams Minerals and Consultancy Limited",
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
  image = "https://www.adamsmineralsconsultancy.com/og-image.png",
  author = "Adams Minerals and Consultancy Limited",
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
      name: "Adams Minerals and Consultancy Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://www.adamsmineralsconsultancy.com/logo.png",
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
