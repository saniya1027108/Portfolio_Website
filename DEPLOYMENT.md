# Deployment Guide

This guide provides detailed instructions for deploying your portfolio website to various platforms.

## Table of Contents

- [Deploy to Vercel (Recommended)](#deploy-to-vercel)
- [Deploy to Netlify](#deploy-to-netlify)
- [Deploy to GitHub Pages](#deploy-to-github-pages)
- [Deploy to Your Own Server](#deploy-to-your-own-server)
- [Custom Domain Setup](#custom-domain-setup)

---

## Deploy to Vercel

Vercel is the company behind Next.js and provides the best hosting experience for Next.js applications.

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

3. **Configuration** (usually auto-detected):
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

4. **Environment Variables** (if needed):
   - Add any environment variables in the Vercel dashboard

Your site will be live at `https://your-project.vercel.app`

---

## Deploy to Netlify

### Method 1: Using Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Using Netlify Dashboard

1. **Create `netlify.toml` in your project root**:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Push to GitHub** (same as Vercel instructions above)

3. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

4. **Install Next.js plugin**:
   - In Netlify dashboard, go to Plugins
   - Install "Next.js Runtime"

Your site will be live at `https://your-project.netlify.app`

---

## Deploy to GitHub Pages

**Note**: GitHub Pages is primarily for static sites. For full Next.js features, use Vercel or Netlify.

For static export only:

1. **Update `next.config.mjs`**:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   export default nextConfig;
   ```

2. **Build static site**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add to `package.json`:
     ```json
     "scripts": {
       "deploy": "gh-pages -d out"
     }
     ```
   - Run: `npm run deploy`

---

## Deploy to Your Own Server

### Using PM2 (Process Manager)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

3. **Start the application**:
   ```bash
   pm2 start npm --name "portfolio" -- start
   ```

4. **Setup PM2 to start on system boot**:
   ```bash
   pm2 startup
   pm2 save
   ```

### Using Docker

1. **Create `Dockerfile`**:
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/next.config.mjs ./
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json

   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build Docker image**:
   ```bash
   docker build -t portfolio .
   ```

3. **Run container**:
   ```bash
   docker run -p 3000:3000 portfolio
   ```

### Using Nginx as Reverse Proxy

1. **Build and start your Next.js app** (using PM2 as shown above)

2. **Install Nginx**:
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

3. **Configure Nginx** (`/etc/nginx/sites-available/portfolio`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable site and restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Setup SSL with Let's Encrypt** (optional but recommended):
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Custom Domain Setup

### Vercel

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS records as instructed:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to your Vercel domain

### Netlify

1. Go to your site in Netlify dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

### Your Own Server

Update your domain's DNS records:
- Add an A record pointing to your server's IP address
- Or add a CNAME record if using a subdomain

---

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify images are loading correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify social media links
- [ ] Check SEO meta tags
- [ ] Test site speed (use PageSpeed Insights)
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Configure custom domain (if applicable)
- [ ] Setup SSL certificate
- [ ] Test in multiple browsers
- [ ] Submit sitemap to Google Search Console

---

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18.x or later)
- Clear cache: `rm -rf .next && npm run build`
- Check for TypeScript errors: `npm run build`

### Images Not Loading

- For Next.js Image component, add domains to `next.config.mjs`
- Or use static images in `/public` folder

### Contact Form Not Working

- Setup email service (EmailJS, SendGrid, etc.)
- Or create API route for form submission
- Check environment variables are set correctly

### Slow Performance

- Optimize images (use Next.js Image component)
- Enable caching
- Use CDN for static assets
- Minimize bundle size

---

## Need Help?

If you encounter any issues during deployment:
1. Check the platform's documentation
2. Review build logs for errors
3. Search for similar issues on Stack Overflow
4. Contact support for your hosting platform

---

**Happy Deploying! 🚀**
