# Color Scheme Update Plan

**Date**: November 18, 2025  
**New Colors**: Gold & Blue

---

## 🎨 New Color Scheme

### Primary Colors
- **Gold**: `rgba(179, 137, 43, 1)` = `#B3892B`
- **Blue**: `rgba(29, 22, 104, 1)` = `#1D1668`

### Old Colors (To Replace)
- **Old Red**: `#ef393b` → Replace with Gold `#B3892B`
- **Old Red Hover**: `#d73035` → Replace with Darker Gold `#9A7324`
- **Old Navy**: `#373f51` → Replace with Blue `#1D1668`

---

## 📝 Files to Update

### 1. Global CSS (`app/globals.css`)
- Update CSS custom properties
- Update utility classes
- Update brand color variables

### 2. Components
- `components/navigation.tsx` - CTA buttons
- `components/footer.tsx` - Icons
- `components/cookie-banner.tsx` - Links
- `components/back-to-top.tsx` - Button
- `components/security-highlights-section.tsx` - Icons
- `components/trust-credibility-section.tsx` - Icons
- `components/how-it-works-section.tsx` - Icons

### 3. Pages
- All industry pages (7 files) - Icons and checkmarks
- All service pages (24 files) - Icons and checkmarks
- `app/terms/page.tsx` - Icons
- `app/privacy/page.tsx` - Icons

---

## 🔄 Replacement Strategy

### Step 1: Update globals.css
Convert colors to OKLCH format and update CSS variables

### Step 2: Global Find & Replace
- `#ef393b` → `#B3892B` (Gold)
- `#d73035` → `#9A7324` (Darker Gold)
- `#373f51` → `#1D1668` (Blue)
- `#1e3a8a` → `#1D1668` (Blue - used in emails)

### Step 3: Update Tailwind Classes
- `bg-[#ef393b]` → `bg-[#B3892B]`
- `text-[#ef393b]` → `text-[#B3892B]`
- `hover:bg-[#d73035]` → `hover:bg-[#9A7324]`

---

## 🎯 Color Usage

### Gold (#B3892B) - Used For:
- Icons
- Checkmarks
- Accent elements
- CTA buttons
- Links
- Highlights

### Blue (#1D1668) - Used For:
- Primary backgrounds
- Headers
- Navigation
- Footer
- Email templates

---

## ✅ Implementation Steps

1. Update `app/globals.css` with new color variables
2. Find and replace all hex color codes
3. Test visual consistency
4. Update documentation

---

**Status**: Ready to implement
