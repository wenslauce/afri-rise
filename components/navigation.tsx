"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "@/components/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Fund Management", href: "/services/fund-management" },
    { name: "Project Management", href: "/services/project-management" },
    { name: "Strategic Planning", href: "/services/strategic-planning" },
    { name: "Investment Advisory", href: "/services/investment-advisory" },
  ]

  const industries = [
    { name: "Finance", href: "/industries/finance" },
    { name: "Energy", href: "/industries/energy" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Agriculture", href: "/industries/agriculture" },
    { name: "Commercial Infrastructure", href: "/industries/infrastructure" },
    { name: "ICT", href: "/industries/ict" },
    { name: "Greenfield Projects", href: "/industries/greenfield" },
  ]

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-background/95 backdrop-blur-md rounded-2xl shadow-lg border border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Afri-Rise"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Industries <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry.name} asChild>
                    <Link href={industry.href} className="cursor-pointer">
                      {industry.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="outline" className="border-[#B3892B] text-[#B3892B] hover:bg-[#B3892B] hover:text-white">
              <Link href="https://app.afri-rise.com" target="_blank" rel="noopener noreferrer">
                Apply Now
              </Link>
            </Button>
            <Button asChild className="btn-hover-lift bg-[#B3892B] text-white hover:bg-[#9A7324]">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background rounded-b-2xl">
          <div className="px-4 py-4 space-y-2">
            <div className="pb-2">
              <Button asChild className="w-full btn-hover-lift border-[#B3892B] text-[#B3892B] hover:bg-[#B3892B] hover:text-white" variant="outline">
                <Link href="https://app.afri-rise.com" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </Link>
              </Button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-2 text-base font-semibold text-foreground">Services</div>
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}

            <div className="px-3 py-2 text-base font-semibold text-foreground mt-4">Industries</div>
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {industry.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full btn-hover-lift bg-[#B3892B] text-white hover:bg-[#9A7324]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
