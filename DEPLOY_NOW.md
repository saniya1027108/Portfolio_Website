# 🚀 Deploy Your Portfolio Website - Quick Guide

Your Git repository is ready! Now let's deploy it to Vercel (recommended) or other platforms.

---

## ✅ Git is Already Set Up!

I've already initialized Git for you and created the first commit. Your code is ready to push!

---

## Option 1: Deploy to Vercel (Recommended - Easiest & Free)

### Why Vercel?
- ✅ Made by the creators of Next.js
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Free custom domain support
- ✅ Excellent performance & CDN
- ✅ Zero configuration needed

### Step-by-Step Instructions:

#### Step 1: Create a GitHub Repository

1. **Go to GitHub**: Visit https://github.com/new

2. **Create a new repository**:
   - Repository name: `portfolio-website` (or any name you prefer)
   - Description: "My professional portfolio website"
   - Choose: **Public** (required for free deployment)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

#### Step 2: Push Your Code to GitHub

Open a new terminal in your project folder and run these commands:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/saniyamulla/portfolio-website.git
git push -u origin main
```

You'll be asked to authenticate - follow GitHub's prompts.

#### Step 3: Deploy to Vercel

1. **Go to Vercel**: Visit https://vercel.com/signup

2. **Sign up/Login**:
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

3. **Import Your Repository**:
   - Click "Add New..." → "Project"
   - Find and select your `portfolio-website` repository
   - Click "Import"

4. **Configure Project** (Vercel auto-detects everything!):
   - Framework Preset: Next.js ✅ (auto-detected)
   - Root Directory: ./ ✅ (default)
   - Build Command: `npm run build` ✅ (auto-filled)
   - Output Directory: `.next` ✅ (auto-filled)
   - **No environment variables needed** ✅

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes while Vercel builds and deploys your site
   - 🎉 You'll get a live URL like: `https://your-portfolio.vercel.app`

#### Step 4: View Your Live Site

Once deployment completes, you'll see:
- ✅ Your live website URL
- ✅ Automatic HTTPS (secure)
- ✅ Fast global CDN
- ✅ Automatic deployments for future updates

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (Same as Vercel above)

Follow Steps 1-2 from the Vercel section above to push your code to GitHub.

### Step 2: Deploy to Netlify

1. **Go to Netlify**: Visit https://app.netlify.com/signup

2. **Sign up/Login**:
   - Click "Continue with GitHub"
   - Authorize Netlify

3. **Import Your Repository**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your `portfolio-website` repository

4. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

5. **Install Next.js Runtime Plugin** (Important!):
   - After deployment, go to "Plugins"
   - Search for "Next.js Runtime"
   - Click "Install"
   - Your site will redeploy automatically

6. **Your site is live!** 🎉
   - URL: `https://your-portfolio.netlify.app`

---

## 🔄 Making Updates to Your Website

After your initial deployment, whenever you make changes:

```bash
# Stage your changes
git add .

# Commit your changes
git commit -m "Update: describe what you changed"

# Push to GitHub
git push
```

**That's it!** Vercel/Netlify will automatically detect the push and redeploy your site (usually takes 1-2 minutes).

---

## 🌐 Add a Custom Domain (Optional)

### On Vercel:
1. Go to your project → "Settings" → "Domains"
2. Add your custom domain (e.g., `saniyamulla.com`)
3. Update your domain's DNS records as instructed
4. Wait 5-10 minutes for DNS propagation

### On Netlify:
1. Go to "Domain settings" → "Add custom domain"
2. Follow the DNS configuration instructions
3. Netlify provides free HTTPS automatically

---

## 📊 Monitor Your Site

### Vercel Dashboard:
- View deployment history
- Check analytics
- See performance metrics
- View build logs

### Netlify Dashboard:
- Monitor deployments
- Check site analytics
- View build logs
- Configure deploy settings

---

## 🐛 Troubleshooting

### Build Fails

**Check the build logs:**
- Vercel: Go to Deployments → Click failed deployment → View logs
- Netlify: Go to Deploys → Click failed deploy → View logs

**Common issues:**
- Missing dependencies: Run `npm install` locally first
- Type errors: Run `npm run build` locally to test
- Environment variables: Check if any are needed

### Images Not Showing

Make sure all images are in the `public/projects/` folder and paths start with `/projects/`

### Site Not Updating

1. Check if your push was successful: `git log`
2. Check deployment status on Vercel/Netlify dashboard
3. Try hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

## 📝 Quick Commands Reference

```bash
# Check Git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# View commit history
git log --oneline

# Check remote repository
git remote -v
```

---

## 🎉 Your Portfolio is Live!

Once deployed, share your portfolio:
- ✅ Add link to your LinkedIn profile
- ✅ Add to your GitHub profile README
- ✅ Include in your resume
- ✅ Share on social media
- ✅ Add to your email signature

---

## 🆘 Need Help?

1. **Vercel Documentation**: https://vercel.com/docs
2. **Netlify Documentation**: https://docs.netlify.com
3. **GitHub Help**: https://docs.github.com

---

## ✨ Pro Tips

1. **Keep it updated**: Regularly add new projects and update your experience
2. **Monitor performance**: Use Vercel/Netlify analytics
3. **Test before pushing**: Always run `npm run build` locally first
4. **Use meaningful commit messages**: Helps track changes
5. **Backup your code**: GitHub serves as your backup

---

**🚀 Ready to Deploy? Follow the steps above and your portfolio will be live in minutes!**
