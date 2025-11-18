# Design Document - Website Rebranding to Afri-Rise

## Overview

This design document outlines the systematic approach to rebrand the existing Next.js website from "Adams Minerals and Consultancy" to "Afri-Rise Equity Limited" (Afri-Rise). The rebranding will transform the site from a minerals and consultancy focus to a fund management consultancy firm specializing in African private sector projects. The technical architecture and user experience will be maintained while updating all company references, service offerings, and content to reflect Afri-Rise's mission: "The African Fund, For African Companies".

The website is built using Next.js 15 with TypeScript, Tailwind CSS, Radix UI components, and Supabase integration. The rebranding will be implemented through targeted text replacements, content restructuring, asset updates, and configuration changes without altering the core functionality.

## Architecture

### Current Technology Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.1.9
- **UI Components**: Radix UI primitives with custom components
- **Email Service**: Resend API integration
- **Database**: Supabase (for any backend functionality)
- **Analytics**: Vercel Analytics
- **Deployment**: Configured for Vercel deployment

### Rebranding Architecture Approach
The rebranding will follow a systematic replacement strategy across multiple layers:

1. **Content Layer**: Text content, company names, descriptions
2. **Asset Layer**: Images, logos, favicons, Open Graph images
3. **Configuration Layer**: Environment variables, metadata, sitemap
4. **Communication Layer**: Email templates, contact information
5. **SEO Layer**: Meta tags, structured data, robots.txt

## Components and Interfaces

### 1. Brand Identity Components

#### Company Name Mapping
- **From**: "Adams Minerals and Consultancy"
- **To**: "Afri-Rise Equity Limited" (short form: "Afri-Rise")
- **Tagline**: "The African Fund, For African Companies"
- **Parent Company**: Ronami Group of Companies (Ronami Holdings Ltd)

#### Domain and Email Mapping
- **Domain From**: adamsmineralsconsultancy.com
- **Domain To**: afri-rise.com
- **Email From**: info@adamsmineralsconsultancy.com
- **Email To**: info@afri-rise.com
- **Phone**: +1 917-730-2179

#### Office Locations
- **Nairobi Office**: P.O.BOX 47942 NAIROBI, KENYA • WU YI PLAZA GALANA ROAD KILIMANI • SUITE B 6TH FLOOR ROOM 12
- **Dubai Office**: DWC BUSINESS CENTER LEVEL 4 BUILDING A2 DUBAI SOUTH BUSINESS PARK

### 2. Service Offering Transformation

#### Previous Services (Adams Minerals and Consultancy)
- Commodities Trading
- Logistics Solutions
- Trade Finance
- Compliance & Risk Management
- Consultancy Services
- Insurance Solutions
- Wealth Management
- Crypto Desk

#### New Services (Afri-Rise)
1. **Fund Management** - Working with thousands of companies around the world
2. **Project Management** - Working with thousands of companies around the world
3. **Strategic Planning** - Working with thousands of companies around the world
4. **Investment Advisory** - Working with thousands of companies around the world

#### Industry Focus Areas
- Finance
- Energy
- Insurance
- Agriculture
- Commercial Infrastructure
- ICT (Information and Communication Technology)
- Greenfield Projects

### 3. File Categories Requiring Updates

#### React Components
- `app/layout.tsx` - Metadata, titles, Open Graph data, company description
- `components/navigation.tsx` - Logo alt text, company name display
- `components/footer.tsx` - Company name, contact information, office addresses
- `app/page.tsx` - Hero section company description and tagline
- `app/about/page.tsx` - Complete rewrite with Afri-Rise mission, Ronami Group connection
- `app/services/page.tsx` - Replace all service offerings with four core services
- Service detail pages - Update to reflect new service offerings

#### Email Templates
- `lib/email-templates/contact-form.tsx` - Company branding in emails
- `lib/email-templates/service-quote.tsx` - Quote request templates
- `app/api/contact/route.ts` - Contact form email content
- `app/api/service-quote/route.ts` - Service quote email content

#### Configuration Files
- `env.example` - Default email addresses and domain references
- `RESEND_SETUP.md` - Setup documentation with domain references
- `public/sitemap.xml` - All URL references
- `public/robots.txt` - Sitemap URL reference
- `public/llm.txt` - Company information for AI/LLM systems

#### Legal and Policy Pages
- `app/terms/page.tsx` - Terms of service with company details
- `app/privacy/page.tsx` - Privacy policy with contact information
- `app/news/page.tsx` - Newsletter subscription references

#### Image Generation Script
- `scripts/download-pexels-images.js` - Create/update script to download relevant images using Pexels API

### 4. Asset Management Strategy

#### Logo and Branding Assets
- Replace `/public/logo.png` with Afri-Rise logo
- Update `/public/og-image.png` for social media sharing
- Create new favicon files if needed
- Update any branded images in the public directory

#### Content Assets via Pexels API
- Create automated script to download relevant images using Pexels API key: `9jaGUuh9gt15nKMgNMdA1ReUPj5mJmMkqnnRBaowq9kq7qjUYhPV9yR1`
- Target image categories:
  - African business and finance
  - Fund management and investment
  - Project management
  - Strategic planning and consultancy
  - Industry-specific: energy, agriculture, infrastructure, ICT
  - Office and corporate settings in African context
- Ensure all visual assets align with Afri-Rise's African focus
- Maintain existing image optimization and responsive behavior

## Data Models

### 1. Brand Configuration Model
```typescript
interface BrandConfig {
  companyName: string;
  companyShortName: string;
  legalName: string;
  domain: string;
  primaryEmail: string;
  phone: string;
  tagline: string;
  description: string;
  parentCompany: string;
}

// Current Configuration
const currentBrand: BrandConfig = {
  companyName: "Adams Minerals and Consultancy",
  companyShortName: "AMC",
  legalName: "Adams Minerals and Consultancy Limited",
  domain: "adamsmineralsconsultancy.com",
  primaryEmail: "info@adamsmineralsconsultancy.com",
  phone: "",
  tagline: "Excellence in Minerals and Strategic Consultancy",
  description: "Comprehensive minerals trading and strategic consultancy services...",
  parentCompany: ""
}

// Target Configuration
const newBrand: BrandConfig = {
  companyName: "Afri-Rise Equity Limited",
  companyShortName: "Afri-Rise",
  legalName: "Afri-Rise Equity Limited",
  domain: "afri-rise.com",
  primaryEmail: "info@afri-rise.com",
  phone: "+1 917-730-2179",
  tagline: "The African Fund, For African Companies",
  description: "A Fund Management Consultancy firm formed to assist businesses in getting affordable financing for Private Sector African Projects that have a communal social impact.",
  parentCompany: "Ronami Group of Companies (Ronami Holdings Ltd)"
}
```

### 2. Service Model
```typescript
interface Service {
  name: string;
  description: string;
  icon?: string;
}

// New Services
const afriRiseServices: Service[] = [
  {
    name: "Fund Management",
    description: "Working with thousands of companies around the world"
  },
  {
    name: "Project Management",
    description: "Working with thousands of companies around the world"
  },
  {
    name: "Strategic Planning",
    description: "Working with thousands of companies around the world"
  },
  {
    name: "Investment Advisory",
    description: "Working with thousands of companies around the world"
  }
];
```

### 3. Contact Information Model
```typescript
interface ContactInfo {
  phone: string;
  email: string;
  offices: Office[];
}

interface Office {
  location: string;
  address: string;
}

const afriRiseContact: ContactInfo = {
  phone: "+1 917-730-2179",
  email: "info@afri-rise.com",
  offices: [
    {
      location: "Nairobi, Kenya",
      address: "P.O.BOX 47942 NAIROBI, KENYA • WU YI PLAZA GALANA ROAD KILIMANI • SUITE B 6TH FLOOR ROOM 12"
    },
    {
      location: "Dubai, UAE",
      address: "DWC BUSINESS CENTER LEVEL 4 BUILDING A2 DUBAI SOUTH BUSINESS PARK"
    }
  ]
};
```

### 4. Pexels Image Download Script Model
```typescript
interface PexelsImageConfig {
  apiKey: string;
  searchQueries: string[];
  outputDirectory: string;
  imagesPerQuery: number;
}

const pexelsConfig: PexelsImageConfig = {
  apiKey: "9jaGUuh9gt15nKMgNMdA1ReUPj5mJmMkqnnRBaowq9kq7qjUYhPV9yR1",
  searchQueries: [
    "african business meeting",
    "fund management",
    "investment advisory",
    "project management africa",
    "strategic planning",
    "african finance",
    "african energy sector",
    "african agriculture",
    "african infrastructure",
    "african technology"
  ],
  outputDirectory: "public",
  imagesPerQuery: 3
};
```

## Error Handling

### 1. Validation Strategy
- Implement pre-deployment validation to ensure all G1 references are replaced
- Create automated tests to verify email functionality with new addresses
- Validate all internal and external links after domain changes

### 2. Rollback Plan
- Maintain backup of original files before making changes
- Use version control to track all modifications
- Prepare rollback scripts for quick reversion if needed

### 3. Email Service Continuity
- Ensure Resend API configuration works with new domain
- Test email delivery to prevent service disruption
- Update DNS records for email authentication (SPF, DKIM, DMARC)

## Testing Strategy

### 1. Content Verification Testing
- **Automated Text Search**: Scan all files for remaining G1 references
- **Visual Regression Testing**: Compare before/after screenshots
- **Link Validation**: Verify all internal and external links work correctly
- **Email Template Testing**: Send test emails to verify branding updates

### 2. Functional Testing
- **Form Submissions**: Test contact and quote request forms
- **Navigation**: Verify all menu items and links function correctly
- **Responsive Design**: Ensure layout works across all device sizes
- **SEO Elements**: Validate meta tags, structured data, and sitemap

### 3. Integration Testing
- **Email Service**: Test Resend integration with new configuration
- **Analytics**: Verify Vercel Analytics continues to work
- **Third-party Services**: Test any external integrations

### 4. Performance Testing
- **Page Load Times**: Ensure rebranding doesn't impact performance
- **Asset Loading**: Verify new images and assets load efficiently
- **Core Web Vitals**: Maintain existing performance metrics

## Implementation Phases

### Phase 1: Pexels Image Generation Script
- Create automated script to download relevant images from Pexels API
- Configure search queries for African business, fund management, and industry-specific content
- Save images to public directory with descriptive filenames

### Phase 2: Content and Text Updates
- Replace all company name references from Adams Minerals to Afri-Rise
- Update metadata and SEO elements with new tagline
- Modify email templates and API routes
- Update service offerings to four core services
- Rewrite about page with Afri-Rise mission and Ronami Group connection

### Phase 3: Asset and Configuration Updates
- Replace logo and branding assets
- Update configuration files and environment variables
- Modify sitemap and robots.txt
- Update contact information with new phone and office addresses

### Phase 4: Domain and Email Migration
- Update domain references from adamsmineralsconsultancy.com to afri-rise.com
- Configure email service with info@afri-rise.com
- Update DNS and email authentication records

### Phase 5: Testing and Validation
- Comprehensive testing across all functionality
- Content verification and link validation
- Performance and SEO validation
- Verify all service pages reflect new offerings

## Migration Considerations

### 1. SEO Impact Mitigation
- Implement proper redirects if domain changes
- Update Google Search Console and analytics
- Monitor search rankings during transition

### 2. Email Continuity
- Ensure email service remains functional during transition
- Test all automated email workflows
- Update email signatures and templates

### 3. User Experience Preservation
- Maintain existing navigation and user flows
- Preserve all functional features and interactions
- Ensure consistent visual hierarchy and design patterns
- Update service pages to reflect new focus on fund management and consultancy

### 4. Content Strategy
- Emphasize African focus throughout the site
- Highlight connection to Ronami Group of Companies
- Showcase three decades of combined management experience
- Feature industry expertise across seven sectors
- Communicate mission of affordable financing for African projects with social impact

This design provides a comprehensive framework for systematically rebranding the website from a minerals and consultancy focus to a fund management consultancy specializing in African private sector projects, while maintaining technical integrity and user experience.