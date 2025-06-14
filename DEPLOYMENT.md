# 🚀 Deployment Guide

Complete guide for setting up automated deployment from GitHub to Netlify.

## 📋 Prerequisites

- [x] GitHub repository with your code
- [x] Netlify account ([sign up here](https://netlify.com))
- [x] Local Git repository configured

## 🏗️ Step-by-Step Setup

### 1. Prepare Your Repository

Ensure your repository has the required configuration files:

#### `netlify.toml` (Auto-deployment config)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.develop]
  command = "npm run build"
  
[context.branch-deploy]
  command = "npm run build"
```

#### `package.json` (Build scripts)
Ensure you have these scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 2. Create Branch Structure

```bash
# Ensure you're on main branch
git checkout main
git pull origin main

# Create and push develop branch
git checkout -b develop
git push -u origin develop

# Return to main
git checkout main
```

### 3. Connect Repository to Netlify

#### Option A: Through Netlify Dashboard
1. Go to [Netlify](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select your repository: `gce_results_website`
5. Configure build settings:
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Production branch**: `main`

#### Option B: Using Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Follow prompts to connect repository
```

### 4. Configure Deploy Contexts

In your Netlify site dashboard:

1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**
2. Configure the following:

#### Production Deploys
- **Production branch**: `main`
- **URL**: `https://yoursite.netlify.app`

#### Branch Deploys
- Click **"Add branch deploy"**
- **Branch name**: `develop`  
- **URL**: `https://develop--yoursite.netlify.app`

#### Deploy Previews
- Enable **"Deploy previews"** for pull requests
- **URL pattern**: `https://deploy-preview-123--yoursite.netlify.app`

### 5. Test Deployment

#### Test Staging Deployment
```bash
# Switch to develop branch
git checkout develop

# Make a test change
echo "console.log('Staging test');" >> test-staging.js

# Commit and push
git add .
git commit -m "Test staging deployment"
git push origin develop
```

**Expected Result**: Auto-deploys to `develop--yoursite.netlify.app`

#### Test Production Deployment
```bash
# Switch to main branch
git checkout main

# Merge staging changes
git merge develop

# Push to production
git push origin main
```

**Expected Result**: Auto-deploys to `yoursite.netlify.app`

## 🔧 Advanced Configuration

### Environment Variables

In Netlify dashboard: **Site settings** → **Environment variables**

```bash
# Example environment variables
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yoursite.com
DATABASE_URL=your_database_url
```

### Build Hooks

Create build hooks for external triggers:

1. Go to **Site settings** → **Build & deploy** → **Build hooks**
2. Click **"Add build hook"**
3. Name: `Deploy Main` or `Deploy Develop`
4. Branch: Choose target branch
5. Save and copy the webhook URL

### Custom Domains

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `gceresults.com`
4. Follow DNS configuration instructions

### SSL Certificate

Netlify automatically provides SSL certificates for:
- ✅ Netlify domains (`.netlify.app`)
- ✅ Custom domains (automatic Let's Encrypt)

## 🧪 Testing Your Setup

### Environment Verification

Your site should show different indicators:

#### Staging (`develop` branch)
- 🧪 Orange "STAGING ENVIRONMENT" badge
- Orange-highlighted staging section
- Shows deployment timestamp

#### Production (`main` branch)
- 🌐 Green "PRODUCTION ENVIRONMENT" badge  
- Green-highlighted production section
- Shows deployment timestamp

### Deployment Logs

Monitor deployments in Netlify:
1. Go to **Deploys** tab in your site dashboard
2. Click on any deployment to see build logs
3. Check for errors or warnings

## ⚡ Quick Commands Reference

```bash
# Check current branch
git branch

# Switch to staging
git checkout develop
git pull origin develop

# Deploy to staging
git add .
git commit -m "Your changes"
git push origin develop

# Deploy to production
git checkout main
git merge develop
git push origin main

# Create feature branch
git checkout develop
git checkout -b feature/new-feature
git push -u origin feature/new-feature

# Rollback production (if needed)
git checkout main
git reset --hard HEAD~1  # Go back 1 commit
git push --force origin main
```

## 🚨 Troubleshooting

### Build Failures

#### Common Issues:
1. **Missing dependencies**: Check `package.json`
2. **Build command fails**: Verify `npm run build` works locally
3. **Wrong Node version**: Update `netlify.toml` NODE_VERSION

#### Debug Steps:
```bash
# Test build locally
npm run build

# Check build logs in Netlify dashboard
# Look for specific error messages

# Common fixes
npm install          # Install missing dependencies
rm -rf .next         # Clear Next.js cache
npm run build        # Test build again
```

### Deployment Not Triggering

#### Check:
1. **Webhook connected**: GitHub → Settings → Webhooks
2. **Branch protection**: Ensure pushes are allowed
3. **Netlify permissions**: Re-authorize GitHub connection

### Environment Issues

#### Staging vs Production:
- Ensure `develop` branch deploy is enabled
- Check branch names match exactly
- Verify environment indicators are working

## 📞 Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Issues](https://github.com/nfonjeannoel/gce_results_website/issues)

---

## ✅ Deployment Checklist

- [ ] `netlify.toml` configuration file created
- [ ] GitHub repository connected to Netlify
- [ ] `main` branch set as production
- [ ] `develop` branch enabled for staging
- [ ] Deploy previews enabled for PRs
- [ ] Test deployment to staging successful
- [ ] Test deployment to production successful
- [ ] Environment indicators working correctly
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Build hooks configured (optional)

**🎉 Once all items are checked, your auto-deployment pipeline is ready!** 