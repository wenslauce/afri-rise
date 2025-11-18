# Implementation Plan

- [x] 1. Create Pexels image download script



  - Create script at scripts/download-pexels-images.js to download relevant images
  - Configure Pexels API key: 9jaGUuh9gt15nKMgNMdA1ReUPj5mJmMkqnnRBaowq9kq7qjUYhPV9yR1
  - Add search queries for: African business, fund management, investment, project management, strategic planning, finance, energy, agriculture, infrastructure, ICT
  - Save images to public directory with descriptive filenames
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 2. Update core layout and metadata



  - Replace company name in app/layout.tsx from "Adams Minerals and Consultancy" to "Afri-Rise Equity Limited" or "Afri-Rise"
  - Update tagline to "The African Fund, For African Companies"
  - Update Open Graph data, Twitter cards, and SEO metadata
  - Change domain references from adamsmineralsconsultancy.com to afri-rise.com
  - Update company description to reflect fund management consultancy focus
  - _Requirements: 1.1, 1.2_

- [x] 3. Update navigation and header components


  - Replace company name display in components/navigation.tsx with "Afri-Rise"
  - Update logo alt text to "Afri-Rise"
  - _Requirements: 1.1_

- [x] 4. Update footer component and contact information


  - Replace company name in components/footer.tsx with "Afri-Rise"
  - Update tagline to "The African Fund, For African Companies"
  - Update email address to info@afri-rise.com
  - Add phone number: +1 917-730-2179
  - Add office addresses for Nairobi and Dubai
  - Update company description to reflect fund management focus
  - _Requirements: 1.4, 3.1_

- [x] 5. Update main page content


  - Replace company references in app/page.tsx hero section with "Afri-Rise"
  - Update tagline to "The African Fund, For African Companies"
  - Update company description to reflect fund management consultancy mission
  - Emphasize African focus and affordable financing for private sector projects
  - _Requirements: 1.3, 6.2_

- [x] 6. Update about page content


  - Complete rewrite of app/about/page.tsx with Afri-Rise identity
  - Include mission: assist businesses in getting affordable financing for African projects with communal social impact
  - Mention Afri-Rise is part of Ronami Group of Companies (Ronami Holdings Ltd)
  - Highlight over three decades of combined management experience
  - Include Ronami International background and collaborations
  - List key partnerships: Kenya Investment Authority, Kenya National Chamber of Commerce, Kenya Private Sector Alliance
  - _Requirements: 1.3, 6.2, 6.3_

- [x] 7. Update services page and service offerings


  - Replace all service offerings in app/services/page.tsx with four core services
  - Update to: Fund Management, Project Management, Strategic Planning, Investment Advisory
  - Each service description: "Working with thousands of companies around the world"
  - Remove old services: Commodities Trading, Logistics, Trade Finance, Compliance, Consultancy, Insurance, Wealth Management, Crypto Desk
  - _Requirements: 6.1_

- [x] 8. Update individual service detail pages


  - Update or create service detail pages for four core services
  - Fund Management page with relevant content
  - Project Management page with relevant content
  - Strategic Planning page with relevant content
  - Investment Advisory page with relevant content
  - _Requirements: 6.1_

- [x] 9. Update industries/sectors content



  - Update industry focus areas to: Finance, Energy, Insurance, Agriculture, Commercial Infrastructure, ICT, Greenfield
  - Ensure content reflects African private sector project focus
  - _Requirements: 6.4_

- [x] 10. Update contact form API and email templates


  - Replace company branding in app/api/contact/route.ts email templates
  - Update FROM_EMAIL and TO_EMAIL to info@afri-rise.com
  - Update email subject lines and content with "Afri-Rise"
  - _Requirements: 3.2, 4.1_

- [x] 11. Update service quote API and email templates


  - Replace company branding in app/api/service-quote/route.ts
  - Update email templates with "Afri-Rise" branding
  - Update default email addresses to info@afri-rise.com
  - _Requirements: 3.2, 4.1_

- [x] 12. Update standalone email template components


  - Replace company branding in lib/email-templates/contact-form.tsx
  - Replace company branding in lib/email-templates/service-quote.tsx
  - Update email headers and signatures with "Afri-Rise"
  - _Requirements: 3.2, 4.1_

- [x] 13. Update legal and policy pages


  - Replace company name in app/terms/page.tsx with "Afri-Rise Equity Limited"
  - Replace company name in app/privacy/page.tsx with "Afri-Rise Equity Limited"
  - Update contact information: info@afri-rise.com, +1 917-730-2179
  - Update legal entity references and addresses
  - _Requirements: 3.1, 3.3_

- [x] 14. Update news page and newsletter references

  - Replace email address in app/news/page.tsx to info@afri-rise.com
  - Update company references to "Afri-Rise"
  - _Requirements: 3.1_

- [x] 15. Update configuration and environment files

  - Update default email addresses in env.example to info@afri-rise.com
  - Update domain references in RESEND_SETUP.md from adamsmineralsconsultancy.com to afri-rise.com
  - Update any company name references to "Afri-Rise"
  - _Requirements: 4.3, 4.4_

- [x] 16. Update SEO and sitemap files

  - Replace all domain references in public/sitemap.xml from adamsmineralsconsultancy.com to afri-rise.com
  - Update sitemap URL in public/robots.txt to afri-rise.com
  - _Requirements: 1.2_

- [x] 17. Update AI/LLM information file


  - Replace company name in public/llm.txt with "Afri-Rise Equity Limited"
  - Update tagline to "The African Fund, For African Companies"
  - Update website URL to afri-rise.com
  - Update company overview with fund management consultancy focus
  - Include Ronami Group connection and mission statement
  - List four core services and seven industry focus areas
  - _Requirements: 1.3, 6.1, 6.2, 6.3, 6.4_

- [x] 18. Replace logo and branding assets

  - Replace /public/logo.png with Afri-Rise logo (if provided)
  - Update /public/og-image.png for social media sharing (if provided)
  - Create new favicon files if provided
  - _Requirements: 2.1, 2.3_

- [x] 19. Final validation and testing



  - Search entire codebase for any remaining "Adams Minerals" or "adamsmineralsconsultancy" references
  - Test all forms and email functionality with new branding
  - Verify all navigation links and internal references work correctly
  - Verify service pages reflect new four core services
  - Test contact information displays correctly
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ]* 19.1 Create automated tests for brand consistency
  - Write tests to scan for any remaining old brand references
  - Create email template tests to verify new branding
  - _Requirements: 5.1_

- [ ]* 19.2 Performance testing with new assets
  - Test page load times with new images from Pexels
  - Verify Core Web Vitals remain optimal
  - _Requirements: 5.4_
