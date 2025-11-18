# Git Migration Guide - Afri-Rise Rebrand
**Date**: November 18, 2025  
**From**: https://github.com/wenslauce/amc  
**To**: https://github.com/wenslauce/afri-rise

---

## Current Status

Your rebranded website is ready to push to the new repository!

### Changes Summary:
- **Modified Files**: 26 core files updated with Afri-Rise branding
- **New Files**: 
  - 7 Industry pages
  - 23 Service sub-pages (Fund Management, Project Management, Strategic Planning, Investment Advisory)
  - 36 Professional images
  - 13 Documentation files

---

## Step-by-Step Migration Process

### Step 1: Stage All Changes
```powershell
git add .
```

### Step 2: Commit Changes
```powershell
git commit -m "Complete Afri-Rise rebrand with all services and sub-pages"
```

### Step 3: Add New Remote (Afri-Rise)
```powershell
git remote add afri-rise https://github.com/wenslauce/afri-rise.git
```

### Step 4: Push to New Repository
```powershell
git push afri-rise main
```

### Optional: Set Afri-Rise as Default Origin
If you want to make the new repo your primary remote:
```powershell
# Remove old origin
git remote remove origin

# Rename afri-rise to origin
git remote rename afri-rise origin

# Verify
git remote -v
```

---

## Alternative: Fresh Start (Recommended)

If you want a clean history for the new brand:

### Step 1: Stage and Commit
```powershell
git add .
git commit -m "Complete Afri-Rise rebrand

- Rebranded from Adams Minerals and Consultancy to Afri-Rise Equity Limited
- Updated all branding, colors, and content
- Created 7 industry pages (Finance, Energy, Agriculture, Infrastructure, ICT, Insurance, Greenfield)
- Built 23 service sub-pages across 4 main services
- Added 36 professional African business images
- Updated SEO, metadata, and structured data
- Enhanced navigation with Services and Industries dropdowns
- Updated footer with Industries section
- All contact forms and CTAs updated"
```

### Step 2: Add New Remote
```powershell
git remote add afri-rise https://github.com/wenslauce/afri-rise.git
```

### Step 3: Push to New Repository
```powershell
# Push main branch
git push afri-rise main

# If you want to push all branches
git push afri-rise --all

# Push tags if any
git push afri-rise --tags
```

---

## What Gets Pushed

### ✅ All Rebranded Content
- Complete Next.js application
- All components and pages
- Public assets (images, sitemap, robots.txt)
- Configuration files
- Documentation

### ✅ New Features
- 7 Industry pages with full content
- 23 Service sub-pages with contact forms
- 36 Professional images
- Enhanced navigation system
- Updated footer with Industries
- All SEO optimizations

### ✅ Documentation
- Specification documents
- Implementation guides
- Status reports
- README files

---

## Post-Push Checklist

After pushing to the new repository:

### 1. Verify Repository
- [ ] Visit https://github.com/wenslauce/afri-rise
- [ ] Check all files are present
- [ ] Verify commit history

### 2. Update Repository Settings
- [ ] Set repository description: "Afri-Rise Equity Limited - African Private Sector Investment Platform"
- [ ] Add topics: `nextjs`, `typescript`, `african-business`, `investment`, `fund-management`
- [ ] Update repository website URL
- [ ] Configure branch protection rules

### 3. Set Up Deployment
- [ ] Connect to Vercel/Netlify
- [ ] Configure environment variables
- [ ] Set up custom domain (if applicable)
- [ ] Test deployment

### 4. Update Documentation
- [ ] Update README.md with Afri-Rise information
- [ ] Add deployment instructions
- [ ] Document environment variables
- [ ] Add contribution guidelines

---

## Environment Variables to Configure

Make sure to set these in your deployment platform:

```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=info@afri-rise.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Pexels API (for future image downloads)
PEXELS_API_KEY=your_pexels_api_key
```

---

## Troubleshooting

### If Push Fails
```powershell
# If repository doesn't exist, create it first on GitHub
# Then try pushing again

# If you get authentication errors
git config --global credential.helper wincred
```

### If You Need to Force Push (Use Carefully!)
```powershell
git push afri-rise main --force
```

### If You Want to Keep Both Remotes
```powershell
# Keep old repo as 'amc'
git remote rename origin amc

# Add new repo as 'origin'
git remote add origin https://github.com/wenslauce/afri-rise.git

# Now you can push to both
git push amc main
git push origin main
```

---

## Quick Commands Reference

```powershell
# Stage all changes
git add .

# Commit with message
git commit -m "Complete Afri-Rise rebrand"

# Add new remote
git remote add afri-rise https://github.com/wenslauce/afri-rise.git

# Push to new repo
git push afri-rise main

# Check status
git status

# View remotes
git remote -v

# View commit history
git log --oneline -10
```

---

## Ready to Push!

Your rebranded Afri-Rise website is ready to go live on the new repository. 

**Run these commands in your terminal:**

```powershell
git add .
git commit -m "Complete Afri-Rise rebrand with all services and sub-pages"
git remote add afri-rise https://github.com/wenslauce/afri-rise.git
git push afri-rise main
```

Good luck with the launch! 🚀
