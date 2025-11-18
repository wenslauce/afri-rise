# Image Implementation Guide for Afri-Rise Website
**Date**: November 18, 2025
**Total Images Downloaded**: 36 high-quality African-themed images

## 📁 Image Location
All images are stored in: `public/images/afri-rise/`

## 🎯 Recommended Image Placements

### Homepage (`app/page.tsx`)

#### Hero Section
- **Primary**: `african-business-meeting-1.jpg`
  - Alt: "Two professional women engaged in a business discussion indoors with documents"
  - Perfect for: Main hero background
  
- **Secondary**: `nairobi-business-1.jpg`
  - Alt: "Well-dressed man in a suit posing on a busy urban street in Nairobi, Kenya"
  - Perfect for: Alternative hero or about section

#### Services Overview Section
1. **Fund Management**: `fund-management-1.jpg`
   - Alt: "Black piggy bank surrounded by coins, symbolizing savings and finance"
   
2. **Project Management**: `project-management-africa-1.jpg`
   - Alt: "Construction workers on scaffolding in Nairobi, Kenya"
   
3. **Strategic Planning**: `strategic-planning-business-1.jpg`
   - Alt: "Diverse team fist bumping over meeting table, symbolizing teamwork"
   
4. **Investment Advisory**: `investment-advisory-1.jpg`
   - Alt: "Business professionals discussing data charts in modern office"

#### Industries Section
1. **Finance**: `african-finance-1.jpg`
   - Alt: "Businessman working with financial documents at office desk"
   
2. **Energy**: `african-energy-sector-1.jpg` (Note: May need replacement)
   - Alt: "Vibrant performance by female singer in Johannesburg"
   - **Recommendation**: Use `project-management-africa-2.jpg` instead (dam/energy infrastructure)
   
3. **Agriculture**: `african-agriculture-1.jpg`
   - Alt: "Man with goat in natural landscape of Taita-Taveta, Kenya"
   
4. **Infrastructure**: `african-infrastructure-2.jpg`
   - Alt: "Construction worker on rural road in Lafia, Nigeria"
   
5. **ICT**: `african-technology-2.jpg`
   - Alt: "Young woman working on laptop in cozy home setting"
   
6. **Insurance**: `african-finance-2.jpg`
   - Alt: "Elderly hands holding Tanzanian Shilling"
   
7. **Greenfield**: `project-management-africa-3.jpg`
   - Alt: "Team working on construction plans in office"

---

### Service Pages

#### Fund Management (`app/services/fund-management/page.tsx`)
- **Hero**: `fund-management-2.jpg`
- **Content Section**: `fund-management-3.jpg`
- **CTA Section**: `african-business-meeting-2.jpg`

#### Project Management (`app/services/project-management/page.tsx`)
- **Hero**: `project-management-africa-1.jpg`
- **Content Section**: `project-management-africa-2.jpg`
- **CTA Section**: `project-management-africa-3.jpg`

#### Strategic Planning (`app/services/strategic-planning/page.tsx`)
- **Hero**: `strategic-planning-business-1.jpg`
- **Content Section**: `strategic-planning-business-2.jpg`
- **CTA Section**: `strategic-planning-business-3.jpg`

#### Investment Advisory (`app/services/investment-advisory/page.tsx`)
- **Hero**: `investment-advisory-1.jpg`
- **Content Section**: `investment-advisory-2.jpg`
- **CTA Section**: `investment-advisory-3.jpg`

---

### Industry Pages

#### Finance Sector (`app/industries/finance/page.tsx`)
- **Hero**: `african-finance-1.jpg`
- **Content Section**: `african-finance-2.jpg`
- **CTA Section**: `african-finance-3.jpg`

#### Energy Sector (`app/industries/energy/page.tsx`)
- **Hero**: `project-management-africa-2.jpg` (Dam/energy infrastructure)
- **Content Section**: `african-infrastructure-3.jpg` (Excavator/construction)
- **CTA Section**: `african-business-meeting-3.jpg`

#### Agriculture Sector (`app/industries/agriculture/page.tsx`)
- **Hero**: `african-agriculture-1.jpg`
- **Content Section**: `african-agriculture-2.jpg`
- **CTA Section**: `african-agriculture-3.jpg`

#### Infrastructure Sector (`app/industries/infrastructure/page.tsx`)
- **Hero**: `african-infrastructure-1.jpg`
- **Content Section**: `african-infrastructure-2.jpg`
- **CTA Section**: `african-infrastructure-3.jpg`

#### ICT Sector (`app/industries/ict/page.tsx`)
- **Hero**: `african-technology-2.jpg`
- **Content Section**: `african-technology-3.jpg`
- **CTA Section**: `nairobi-business-2.jpg`

#### Insurance Sector (`app/industries/insurance/page.tsx`)
- **Hero**: `african-finance-2.jpg`
- **Content Section**: `investment-advisory-2.jpg`
- **CTA Section**: `investment-advisory-3.jpg`

#### Greenfield Projects (`app/industries/greenfield/page.tsx`)
- **Hero**: `project-management-africa-3.jpg`
- **Content Section**: `african-infrastructure-3.jpg`
- **CTA Section**: `project-management-africa-1.jpg`

---

### About Page (`app/about/page.tsx`)
- **Hero**: `african-business-meeting-1.jpg`
- **Team Section**: `african-business-meeting-2.jpg`
- **Nairobi Office**: `nairobi-business-1.jpg`
- **Dubai Office**: `dubai-business-center-1.jpg`
- **Values Section**: `strategic-planning-business-1.jpg`

---

### Contact Page (`app/contact/page.tsx`)
- **Hero**: `african-business-meeting-3.jpg`
- **Nairobi Office Card**: `nairobi-business-2.jpg`
- **Dubai Office Card**: `dubai-business-center-2.jpg`

---

## 🔧 Implementation Code Examples

### Next.js Image Component (Recommended)
```tsx
import Image from 'next/image'

<Image
  src="/images/afri-rise/african-business-meeting-1.jpg"
  alt="Two professional women engaged in a business discussion indoors with documents"
  width={1920}
  height={1080}
  priority
  className="object-cover"
/>
```

### Background Image (CSS)
```tsx
<div 
  className="hero-section"
  style={{
    backgroundImage: 'url(/images/afri-rise/african-business-meeting-1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Content */}
</div>
```

### Responsive Image with srcSet
```tsx
<img
  src="/images/afri-rise/african-business-meeting-1.jpg"
  alt="Two professional women engaged in a business discussion indoors with documents"
  className="w-full h-auto object-cover"
  loading="lazy"
/>
```

---

## 📝 Attribution Requirements

All images are from Pexels and require attribution. Add this to your footer or credits page:

```html
<section className="py-8 bg-muted">
  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-lg font-semibold mb-4">Photo Credits</h3>
    <p className="text-sm text-muted-foreground">
      Images courtesy of talented photographers on 
      <a href="https://www.pexels.com" target="_blank" rel="noopener" className="underline">
        Pexels
      </a>
    </p>
  </div>
</section>
```

Full photographer credits are available in: `public/images/afri-rise/image-metadata.json`

---

## ⚠️ Image Quality Notes

### Excellent Quality (Use as primary images)
- All `african-business-meeting-*.jpg` (5000+ px width)
- All `fund-management-*.jpg` (4000+ px width)
- All `project-management-africa-*.jpg` (4000+ px width)
- All `nairobi-business-*.jpg` (4000+ px width)
- All `dubai-business-center-*.jpg` (4000+ px width)

### Good Quality (Use as secondary/content images)
- All `african-finance-*.jpg`
- All `african-agriculture-*.jpg`
- All `african-infrastructure-*.jpg`
- All `african-technology-*.jpg`

### Images Needing Replacement
- `african-energy-sector-*.jpg` - These don't match energy sector theme
  - **Recommendation**: Use infrastructure/construction images instead

---

## 🎨 Image Optimization Tips

1. **Use Next.js Image Component** for automatic optimization
2. **Add `priority` prop** to above-the-fold images
3. **Use `loading="lazy"`** for below-the-fold images
4. **Compress images** if needed (already high quality from Pexels)
5. **Use WebP format** for better compression (Next.js handles this automatically)

---

## 📊 Image Usage Summary

| Category | Images Available | Recommended Usage |
|----------|------------------|-------------------|
| Business Meetings | 3 | Hero sections, About page |
| Fund Management | 3 | Service page, Homepage |
| Investment Advisory | 3 | Service page, Industry pages |
| Project Management | 3 | Service page, Industry pages |
| Strategic Planning | 3 | Service page, Homepage |
| African Finance | 3 | Finance industry page |
| African Agriculture | 3 | Agriculture industry page |
| African Infrastructure | 3 | Infrastructure industry page |
| African Technology | 3 | ICT industry page |
| Nairobi Business | 3 | About page, Contact page |
| Dubai Business | 3 | About page, Contact page |

**Total**: 36 images covering all major sections

---

## ✅ Next Steps

1. ✅ Images downloaded successfully
2. 🔄 Replace placeholder images in components
3. 🔄 Update alt text for accessibility
4. 🔄 Add photographer attribution
5. 🔄 Test image loading performance
6. 🔄 Optimize for mobile devices

---

**Status**: Ready for implementation ✅
**Location**: `public/images/afri-rise/`
**Metadata**: `public/images/afri-rise/image-metadata.json`
