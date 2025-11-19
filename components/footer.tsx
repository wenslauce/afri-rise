import Link from "next/link"
import { Mail, Phone, MapPin, Info, Facebook, Twitter, Linkedin, Instagram } from "@/components/icons"

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Company Info Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Afri-Rise</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              The African Fund, For African Companies
            </p>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              A Fund Management Consultancy firm assisting businesses in getting affordable financing for Private Sector African Projects with communal social impact.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/afririse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-[#1877F2] hover:scale-110 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/afririse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-[#1DA1F2] hover:scale-110 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/afririse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/afririse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-primary-foreground/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:scale-110 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Industries Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Link
                  href="/industries/finance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Finance
                </Link>
                <span className="text-primary-foreground/50">•</span>
                <Link
                  href="/industries/energy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Energy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/industries/agriculture"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Agriculture
                </Link>
                <span className="text-primary-foreground/50">•</span>
                <Link
                  href="/industries/ict"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ICT
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/infrastructure"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/insurance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/greenfield"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Greenfield Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/fund-management"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fund Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-planning"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Strategic Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/investment-advisory"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Investment Advisory
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mt-6 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#B3892B]" />
                <span className="text-primary-foreground/80">
                  Nairobi: WU YI Plaza, Galana Road, Kilimani
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#B3892B]" />
                <span className="text-primary-foreground/80">
                  Dubai: DWC Business Center, Level 4, Building A2
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#B3892B]" />
                <span className="text-primary-foreground/80">+1 917-730-2179</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-[#B3892B]" />
                <span className="text-primary-foreground/80">info@afri-rise.com</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors btn-hover-lift"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl mb-8">
          <div className="flex items-start gap-3">
            <Info size={20} className="flex-shrink-0 text-[#B3892B] mt-0.5" />
            <div>
              <h5 className="font-semibold mb-2">About Afri-Rise</h5>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Afri-Rise Equity Limited is a Fund Management Consultancy firm formed to assist businesses in
                getting affordable financing for Private Sector African Projects that have a communal social impact.
                With over three decades of combined management experience, Afri-Rise is part of Ronami Group of Companies
                (Ronami Holdings Ltd), specializing in Fund Management, Project Management, Strategic Planning, and
                Investment Advisory Services across Finance, Energy, Insurance, Agriculture, Commercial Infrastructure,
                ICT, and Greenfield sectors.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Afri-Rise Equity Limited. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/case-studies" className="hover:text-primary-foreground transition-colors">
                Case Studies
              </Link>
              <Link href="/news" className="hover:text-primary-foreground transition-colors">
                News & Insights
              </Link>
              <Link href="/careers" className="hover:text-primary-foreground transition-colors">
                Careers
              </Link>
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
