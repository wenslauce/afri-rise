"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()
  
  // Don't show breadcrumb on homepage
  if (pathname === "/") return null

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }]

    let currentPath = ""
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      
      // Format the label
      let label = path
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      
      // Special cases for better labels
      if (path === "commodities-trading") label = "Minerals Trading"
      if (path === "crypto-desk") label = "Crypto Desk"
      if (path === "skr-tracking") label = "SKR Tracking"
      
      breadcrumbs.push({
        label,
        href: currentPath,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-muted/50 border-b border-border"
      itemScope 
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            
            return (
              <li
                key={crumb.href}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    itemProp="item"
                  >
                    <Home size={16} />
                    <span itemProp="name" className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span 
                    className="text-foreground font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
                {!isLast && <ChevronRight size={16} className="text-muted-foreground" />}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
