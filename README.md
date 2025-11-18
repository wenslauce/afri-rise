# 🌍 Afri-Rise Equity Limited

> **Empowering African Private Sector Growth Through Strategic Investment and Advisory Services**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## � Abouut Afri-Rise Equity Limited

Afri-Rise Equity Limited is a premier investment and advisory firm dedicated to **African private sector development**. We specialize in providing affordable financing, strategic planning, project management, and investment advisory services that create **communal social impact** across African markets.

### 🎯 Our Mission
To empower African businesses through strategic investment, expert advisory services, and sustainable project financing that drives economic growth while creating positive social impact in communities across the continent.

### 🌍 Our Focus
- **Private Sector Projects** across 7 key African industries
- **Affordable Financing** with competitive rates and flexible terms
- **Social Impact Investment** with measurable community benefits
- **Global Network** working with thousands of companies worldwide

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/wenslauce/afri-rise.git
cd afri-rise

# Install dependencies
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

---

## 🏗️ Project Structure

```
afri-rise/
├── 📁 app/                           # Next.js App Router
│   ├── 📁 api/                      # API routes
│   │   ├── contact/                 # Contact form endpoint
│   │   └── service-quote/           # Service quote endpoint
│   ├── 📁 services/                 # Service pages (4 main + 23 sub-services)
│   │   ├── fund-management/         # 6 sub-services
│   │   ├── project-management/      # 6 sub-services
│   │   ├── strategic-planning/      # 6 sub-services
│   │   └── investment-advisory/     # 5 sub-services
│   ├── 📁 industries/               # 7 industry pages
│   │   ├── finance/
│   │   ├── energy/
│   │   ├── agriculture/
│   │   ├── infrastructure/
│   │   ├── ict/
│   │   ├── insurance/
│   │   └── greenfield/
│   ├── 📁 about/                    # About page
│   ├── 📁 contact/                  # Contact page
│   └── 📄 layout.tsx                # Root layout
├── 📁 components/                   # Reusable UI components
│   ├── ui/                          # Shadcn UI components
│   ├── navigation.tsx               # Main navigation
│   ├── footer.tsx                   # Footer with Industries
│   └── icons.tsx                    # Custom icon components
├── 📁 lib/                          # Utilities & configurations
│   ├── email-templates/             # Email templates
│   └── utils.ts                     # Utility functions
├── 📁 public/                       # Static assets
│   ├── images/afri-rise/            # 36 professional images
│   ├── sitemap.xml                  # SEO sitemap
│   └── robots.txt                   # Search engine directives
├── 📁 scripts/                      # Automation scripts
│   ├── download-pexels-images.js    # Image download script
│   └── README.md                    # Scripts documentation
└── 📁 .kiro/                        # Development specifications
    └── specs/website-rebranding/    # Rebrand documentation
```

---

## 💼 Core Services

### 💰 **Fund Management**
Expert fund management solutions for African private sector projects with communal social impact.

**Sub-Services:**
- Affordable Financing Solutions
- Private Sector Project Funding
- Social Impact Investment
- Fund Structuring & Administration
- Portfolio Management
- Investor Relations

### 📋 **Project Management**
Comprehensive project management services for impactful African initiatives across multiple sectors.

**Sub-Services:**
- Project Planning & Execution
- Resource Allocation & Optimization
- Timeline & Budget Management
- Stakeholder Coordination
- Risk Mitigation Strategies
- Quality Assurance & Delivery

### 📊 **Strategic Planning**
Strategic plans that drive sustainable growth and create lasting social impact across African markets.

**Sub-Services:**
- Business Strategy Development
- Market Entry Planning
- Growth Strategy Formulation
- Competitive Analysis
- Organizational Development
- Performance Metrics & KPIs

### 💡 **Investment Advisory**
Expert investment advisory services for African business opportunities and sustainable development projects.

**Sub-Services:**
- Investment Opportunity Analysis
- Due Diligence Services
- Financial Modeling & Valuation
- Risk Assessment & Management
- Portfolio Diversification

---

## 🏭 Industry Focus

We serve **7 key African industry sectors**:

1. **Finance** - Financial services and banking solutions
2. **Energy** - Renewable energy and power generation projects
3. **Agriculture** - Agribusiness and food security initiatives
4. **Infrastructure** - Commercial infrastructure development
5. **ICT** - Information and communication technology
6. **Insurance** - Insurance services and risk management
7. **Greenfield** - New development projects

---

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Shadcn UI + Radix UI primitives
- **Icons**: Custom Lucide React icons
- **Animations**: Smooth transitions and hover effects

### **Backend & Services**
- **API**: Next.js API Routes
- **Email**: Resend for transactional emails
- **Forms**: Contact forms and service quote requests
- **Validation**: Zod schema validation

### **SEO & Performance**
- **Metadata**: Dynamic SEO optimization
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Images**: Optimized Next.js Image component
- **Analytics**: Vercel Analytics ready

### **Development Tools**
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript strict mode
- **Version Control**: Git

---

## 📧 Environment Configuration

Create a `.env.local` file with the following variables:

```env
# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@afri-rise.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://afri-rise.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Pexels API (for image downloads)
PEXELS_API_KEY=your_pexels_api_key
```

---

## 🖼️ Image Management

### Professional Image Library
The project includes **36 professional African business images** sourced from Pexels:

**Categories:**
- Business Meetings (3 images)
- Strategic Planning (3 images)
- Project Management (3 images)
- Investment Advisory (3 images)
- Fund Management (3 images)
- Industry-Specific (15 images)
- Location-Specific (6 images)

### Automated Image Downloads
```bash
# Download all professional images
node scripts/download-pexels-images.js
```

All images are properly licensed from [Pexels](https://www.pexels.com) and optimized for web use.

---

## 📱 Features

### ✨ **User Experience**
- 📱 Fully responsive design (mobile-first)
- ⚡ Fast loading with Next.js optimization
- 🎨 Professional UI with Afri-Rise branding (#ef393b red)
- 🔍 Enhanced navigation with Services & Industries dropdowns
- 📧 Contact forms on all service and industry pages
- 🎯 Clear CTAs throughout the site

### 🔧 **Technical Features**
- 🚀 Server-side rendering (SSR)
- 📊 SEO optimized with metadata and structured data
- 📧 Email integration with Resend
- 🔍 XML sitemap for search engines
- 📱 Progressive enhancement
- ♿ Accessibility compliant

### 🛡️ **Security & Compliance**
- 🔒 Secure API endpoints
- 📋 Input validation and sanitization
- 🔐 Environment variable protection
- �️ CORS and security headers

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Environment Variables Setup
Configure these in your Vercel dashboard:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Utilities
node scripts/download-pexels-images.js    # Download professional images
```

---

## 🌍 Global Reach

Afri-Rise operates across African markets with a global network:

- 🌍 **East Africa**: Kenya, Uganda, Tanzania, Rwanda
- 🌍 **West Africa**: Nigeria, Ghana, Senegal
- 🌍 **Southern Africa**: South Africa, Botswana, Zambia
- 🌍 **North Africa**: Egypt, Morocco
- 🌍 **Central Africa**: DRC, Cameroon
- 🌐 **Global Partners**: Working with thousands of companies worldwide

---

## 📞 Contact Information

**Company**: Afri-Rise Equity Limited

**Focus**: African Private Sector Investment & Advisory

**Services**: Fund Management, Project Management, Strategic Planning, Investment Advisory

**Website**: Contact form available on site

---

## 🎨 Brand Guidelines

### Colors
- **Primary Red**: #ef393b
- **Hover Red**: #d73035
- **Text**: Default theme colors
- **Background**: Light/Dark mode support

### Typography
- **Font**: System font stack for optimal performance
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible sizing

### Logo & Assets
- Afri-Rise branding throughout
- Professional African business imagery
- Consistent visual identity

---

## 📈 Project Status

### ✅ Completed Features
- ✅ **Complete Rebrand**: From Adams Minerals to Afri-Rise
- ✅ **4 Main Service Pages**: All implemented with sub-services
- ✅ **23 Sub-Service Pages**: Detailed service offerings
- ✅ **7 Industry Pages**: Complete industry coverage
- ✅ **36 Professional Images**: Pexels integration complete
- ✅ **Enhanced Navigation**: Services & Industries dropdowns
- ✅ **Updated Footer**: Industries section added
- ✅ **Contact Forms**: All pages with forms
- ✅ **SEO Optimization**: Metadata, structured data, sitemap
- ✅ **Mobile Responsive**: Fully responsive design

### 🔄 Ongoing
- Content updates and refinements
- Performance optimization
- Analytics integration
- User feedback implementation

---

## 📚 Documentation

Comprehensive documentation available in the `.kiro/specs/website-rebranding/` directory:

- **Requirements**: Feature requirements and user stories
- **Design**: Design specifications and architecture
- **Tasks**: Implementation task list
- **Status Reports**: 
  - Fund Management Sub-Services Complete
  - Project Management Sub-Services Complete
  - Strategic Planning Sub-Services Complete
  - Investment Advisory Sub-Services Complete
  - Industry Pages Status
  - Image Audit Report

---

## 🤝 Contributing

We welcome contributions to improve the website. Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Ensure accessibility compliance
- Write clear commit messages
- Test across different devices

---

## 📄 License

This project is proprietary software owned by **Afri-Rise Equity Limited**.

All rights reserved. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

---

## 🔗 Links

- **Repository**: [GitHub](https://github.com/wenslauce/afri-rise)
- **Issues**: [Report Issues](https://github.com/wenslauce/afri-rise/issues)
- **Documentation**: [Project Specs](./.kiro/specs/website-rebranding/)
- **Previous Version**: [AMC Repository](https://github.com/wenslauce/amc) (archived)

---

## 🙏 Acknowledgments

- **Pexels**: Professional photography platform
- **Next.js**: React framework
- **Vercel**: Deployment platform
- **Shadcn UI**: Component library
- **Tailwind CSS**: Utility-first CSS framework

---

## 📝 Changelog

### Version 2.0.0 (November 2025)
- 🎉 Complete rebrand to Afri-Rise Equity Limited
- ✨ Added 23 sub-service pages across 4 main services
- 🏭 Added 7 industry-specific pages
- 🖼️ Integrated 36 professional African business images
- 🎨 Updated branding, colors, and visual identity
- 📱 Enhanced navigation with dropdown menus
- 📧 Added contact forms to all service and industry pages
- 🔍 Improved SEO with metadata and structured data
- 📊 Updated footer with Industries section

### Version 1.0.0 (Previous)
- Initial Adams Minerals and Consultancy website

---

<div align="center">

**Built with ❤️ for Afri-Rise Equity Limited**

*Empowering African Private Sector Growth*

🌍 **Africa Rising** 🚀

---

**[Visit Website](#) | [Contact Us](#) | [View Services](#)**

</div>
