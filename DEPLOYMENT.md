# Deployment Guide - Van Dyk Recycling Solutions Website

This guide provides comprehensive instructions for deploying the Van Dyk Recycling Solutions website to various platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- Git repository access
- Platform account (Vercel, Netlify, etc.)

### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Git integration
- Preview deployments

**Steps:**
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `AjithVanDyk/vdrsnewv1`

2. **Configure Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - Add any required environment variables
   - Click "Deploy"

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

**Vercel Configuration File:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

### 2. Netlify

**Steps:**
1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
   - Base Directory: (leave empty)

3. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

**Netlify Configuration File (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Steps:**
1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "GitHub Actions"

2. **Create Workflow**
   - Create `.github/workflows/deploy.yml`
   - Use the provided workflow below

3. **Deploy**
   - Push to main branch
   - GitHub Actions will build and deploy

**GitHub Actions Workflow (`.github/workflows/deploy.yml`):**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. AWS S3 + CloudFront

**Steps:**
1. **Create S3 Bucket**
   - Create bucket with public read access
   - Enable static website hosting

2. **Upload Files**
   - Upload `dist` folder contents
   - Set proper MIME types

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 as origin
   - Configure caching rules

4. **Custom Domain** (optional)
   - Add SSL certificate
   - Configure Route 53

### 5. DigitalOcean App Platform

**Steps:**
1. **Create App**
   - Go to DigitalOcean App Platform
   - Create new app from GitHub

2. **Configure Build**
   - Source: GitHub repository
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Deploy**
   - Review settings
   - Click "Create Resources"

## 🔧 Environment Configuration

### Development
```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Van Dyk Recycling Solutions
VITE_APP_VERSION=1.0.0
```

### Production
```bash
# .env.production
VITE_API_URL=https://api.vandykrecycling.com
VITE_APP_NAME=Van Dyk Recycling Solutions
VITE_APP_VERSION=1.0.0
```

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck
```

### Image Optimization
- Use WebP format with fallbacks
- Implement lazy loading
- Optimize image sizes

### Code Splitting
- Lazy load routes
- Split vendor bundles
- Use dynamic imports

## 🔒 Security Considerations

### Headers Configuration
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
```

### Content Security Policy
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';">
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Routing Issues:**
- Ensure SPA routing is configured
- Check redirect rules
- Verify base path settings

**Performance Issues:**
- Enable gzip compression
- Optimize images
- Use CDN for static assets

### Debug Commands
```bash
# Check build output
npm run build -- --debug

# Analyze bundle
npx vite-bundle-analyzer dist

# Check dependencies
npm audit
```

## 📈 Monitoring

### Analytics Setup
- Google Analytics 4
- Vercel Analytics
- Custom event tracking

### Error Tracking
- Sentry integration
- Console error monitoring
- User feedback collection

## 🔄 CI/CD Pipeline

### Automated Deployment
1. **Push to main** → Build → Deploy to staging
2. **Create PR** → Build → Deploy to preview
3. **Merge to main** → Build → Deploy to production

### Quality Gates
- Lint checks
- Type checking
- Build verification
- Performance tests

## 📞 Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact platform support
- Open GitHub issue

---

**Last Updated:** January 2025  
**Version:** 1.0.0
