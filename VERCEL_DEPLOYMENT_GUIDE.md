# 🚀 Vercel Deployment Guide

## Van Dyk Recycling Solutions Website

This guide will help you deploy the Van Dyk Recycling Solutions website to Vercel.

## 📋 Prerequisites

- Vercel account (free tier available)
- GitHub repository access
- Node.js 18+ (for local testing)

## 🚀 Quick Deployment

### Option 1: Deploy from GitHub (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import the repository: `AjithVanDyk/vdrsnewv1`

2. **Configure Project Settings**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Use the `env.example` file as reference

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Configure settings as needed

## ⚙️ Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x (recommended)

## 🔧 Environment Variables

If you need environment variables, add them in the Vercel dashboard:

1. Go to Project Settings → Environment Variables
2. Add variables as needed:
   - `NODE_ENV=production`
   - `VITE_APP_NAME=Van Dyk Recycling Solutions`
   - Any API keys (if required)

## 📊 Performance Optimization

The project is optimized for Vercel with:

- **Code Splitting**: Automatic chunk splitting
- **Image Optimization**: Vercel's built-in image optimization
- **CDN**: Global edge network
- **Compression**: Automatic gzip/brotli compression
- **Caching**: Optimized caching headers

## 🔄 Continuous Deployment

Once connected to GitHub:

- **Automatic Deployments**: Every push to main branch
- **Preview Deployments**: Every pull request
- **Branch Deployments**: Deploy from any branch

## 📈 Monitoring

Vercel provides built-in analytics:

- **Performance Metrics**: Core Web Vitals
- **Traffic Analytics**: Page views and visitors
- **Error Tracking**: Runtime errors
- **Build Logs**: Detailed build information

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (use 18.x)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Routing Issues**
   - Ensure `vercel.json` has proper routing rules
   - Check React Router configuration

3. **Environment Variables**
   - Verify variables are set in Vercel dashboard
   - Check variable names match code usage

### Build Commands

```bash
# Local build test
npm run build

# Type checking
npm run type-check

# Preview build
npm run preview
```

## 🔒 Security

- **No API Keys**: All sensitive data removed
- **Environment Variables**: Use Vercel's secure env vars
- **HTTPS**: Automatic SSL certificates
- **Security Headers**: Configured for production

## 📞 Support

For deployment issues:

1. Check Vercel documentation
2. Review build logs in Vercel dashboard
3. Test locally with `npm run build`
4. Contact Vercel support if needed

## 🎯 Production Checklist

- [ ] Repository connected to Vercel
- [ ] Build command configured
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)
- [ ] Performance monitoring active
- [ ] SSL certificate active
- [ ] CDN enabled

---

**Ready to deploy!** 🚀

Your Van Dyk Recycling Solutions website is now ready for production deployment on Vercel.
