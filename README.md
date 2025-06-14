# GCE Results Website

A Next.js web application for displaying GCE (General Certificate of Education) results with automated deployment pipeline.

## 🚀 Auto-Deployment Setup

This project is configured with automated deployment using **GitHub** + **Netlify** with a multi-environment setup.

### 📋 Branch Strategy

| Branch | Environment | Purpose | Auto-Deploy URL |
|--------|-------------|---------|-----------------|
| `main` | **Production** | Live, stable releases | `yoursite.netlify.app` |
| `develop` | **Staging** | Testing & integration | `develop--yoursite.netlify.app` |
| `feature/*` | **Preview** | Feature development | `feature-name--yoursite.netlify.app` |

### 🏗️ Deployment Configuration

#### Netlify Settings
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[context.develop]
  command = "npm run build"
  
[context.branch-deploy]
  command = "npm run build"
```

#### Build Commands
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18

### 🔄 Deployment Workflow

#### Daily Development (Staging)
```bash
# Switch to develop branch
git checkout develop
git pull origin develop

# Make your changes
# ... edit files ...

# Commit and push to staging
git add .
git commit -m "Add new feature"
git push origin develop
```
**Result**: 🧪 Auto-deploys to `develop--yoursite.netlify.app`

#### Production Release
```bash
# Switch to main branch
git checkout main
git pull origin main

# Merge staging changes
git merge develop

# Push to production
git push origin main
```
**Result**: 🌐 Auto-deploys to `yoursite.netlify.app`

#### Feature Development
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# Develop your feature
# ... make changes ...

# Push feature branch
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
```
**Result**: 🔍 Auto-deploys to `feature-new-feature--yoursite.netlify.app`

### 🧪 Deployment Testing

The project includes test pages that display environment-specific indicators:

#### Staging Environment (`develop` branch)
- **Badge**: 🧪 STAGING ENVIRONMENT (Orange)
- **Status**: Shows "Currently viewing STAGING"
- **Visual**: Orange highlighting for staging section

#### Production Environment (`main` branch)
- **Badge**: 🌐 PRODUCTION ENVIRONMENT (Green)
- **Status**: Shows "Currently viewing PRODUCTION" 
- **Visual**: Green highlighting for production section

### 📁 Project Structure

```
gce_results_website/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage (test page)
├── components/             # React components
│   ├── theme-provider.tsx  # Theme context
│   ├── theme-switcher.tsx  # Theme toggle component
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Additional styles
├── netlify.toml           # Netlify configuration
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)
- **Deployment**: [Netlify](https://netlify.com/)
- **Version Control**: Git + GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/nfonjeannoel/gce_results_website.git
cd gce_results_website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Netlify Setup Instructions

### Initial Setup
1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select `nfonjeannoel/gce_results_website`

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Production branch**: `main`

3. **Enable Branch Deploys**
   - Go to Site settings → Build & deploy → Deploy contexts
   - **Production branch**: `main`
   - **Branch deploys**: Add `develop`
   - **Deploy previews**: Enable for pull requests

### Environment-Specific URLs
- **Production**: `https://yoursite.netlify.app`
- **Staging**: `https://develop--yoursite.netlify.app`
- **Feature Previews**: `https://feature-name--yoursite.netlify.app`

## 📝 Development Guidelines

### Branch Naming
- `main` - Production-ready code only
- `develop` - Integration branch for features
- `feature/description` - Individual features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical production fixes

### Commit Messages
Use clear, descriptive commit messages:
```bash
git commit -m "Add user authentication system"
git commit -m "Fix responsive layout on mobile"
git commit -m "Update deployment configuration"
```

### Code Quality
- Follow TypeScript best practices
- Use Tailwind utility classes for styling
- Leverage shadcn/ui components when possible
- Test on both light and dark themes

## 🌟 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark/Light Theme** - Automatic system preference detection
- ✅ **Modern UI** - Clean, professional interface using shadcn/ui
- ✅ **Auto-Deployment** - Seamless GitHub to Netlify pipeline
- ✅ **Environment Indicators** - Clear staging vs production identification
- ✅ **TypeScript** - Full type safety
- ✅ **Performance Optimized** - Next.js 14 with App Router

## 📞 Support

For issues or questions:
1. Check the [GitHub Issues](https://github.com/nfonjeannoel/gce_results_website/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

## 📄 License

This project is part of the GCE Results system and is proprietary software.

---

**Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui** 