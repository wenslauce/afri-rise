# Cloudflare Turnstile Implementation Plan

**Date**: November 18, 2025  
**Purpose**: Add bot protection to all forms

---

## 🔒 What is Cloudflare Turnstile?

Turnstile is Cloudflare's CAPTCHA alternative that provides:
- Bot protection without annoying puzzles
- Privacy-friendly (no tracking)
- Better user experience
- Free tier available

---

## 📋 Forms to Protect

### 1. Contact Form
- Location: `app/contact/page.tsx`
- API: `/api/contact`

### 2. Service Quote Forms (24 instances)
- Component: `components/service-onboarding-form.tsx`
- API: `/api/service-quote`
- Used on: All service pages and industry pages

---

## 🔧 Implementation Steps

### Step 1: Install Turnstile Package
```bash
npm install @marsidev/react-turnstile
```

### Step 2: Get Turnstile Keys
1. Go to Cloudflare Dashboard
2. Navigate to Turnstile
3. Create a new site
4. Get Site Key and Secret Key

### Step 3: Add Environment Variables
```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

### Step 4: Update Components
- Add Turnstile widget to forms
- Store token on submission
- Send token to API

### Step 5: Update API Routes
- Verify Turnstile token server-side
- Reject submissions with invalid tokens

---

## 📝 Files to Modify

1. `package.json` - Add dependency
2. `.env.example` - Add Turnstile keys
3. `components/service-onboarding-form.tsx` - Add widget
4. `app/contact/page.tsx` - Add widget
5. `app/api/contact/route.ts` - Add verification
6. `app/api/service-quote/route.ts` - Add verification
7. `lib/turnstile.ts` - Create verification utility

---

## 🎯 Benefits

- ✅ Prevents spam submissions
- ✅ Blocks bot attacks
- ✅ No user friction (invisible mode)
- ✅ Privacy-friendly
- ✅ Free for most use cases

---

**Status**: Ready to implement
