# GCE Results Search Platform

> 🎓 **Open Source Platform** for searching Cameroon GCE O-Level and A-Level examination results

A modern, fast, and user-friendly web application that allows students to search for their General Certificate of Education (GCE) examination results from Cameroon. Built with Next.js 15, TypeScript, and Supabase.

## 🌐 Live Demo

**Production**: [https://gceresults.jeangineer.com](https://gceresults.jeangineer.com)

## ✨ Features

- 🔍 **Multiple Search Methods**: Search by student name, center number, or school name
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark/Light Theme**: Automatic system preference detection with manual toggle
- ⚡ **Fast Performance**: Optimized with Next.js 15 App Router and database functions
- 🎨 **Modern UI**: Clean, accessible interface built with shadcn/ui and Tailwind CSS
- 📊 **Comprehensive Results**: Display detailed exam results with grades and statistics
- 🔐 **Secure**: Built-in input validation and secure database queries
- 🌍 **SEO Optimized**: Complete sitemap and meta tags for better discoverability

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

### Backend & Database
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: Built-in Supabase Auth
- **API**: Next.js API Routes with TypeScript

### Development & Deployment
- **Package Manager**: npm/pnpm
- **Deployment**: Netlify with branch-specific deployments
- **Version Control**: Git + GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nfonjeannoel/gce_results_website.git
   cd gce_results_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
gce_results_website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── search/        # Search API endpoint
│   ├── contact/           # Contact page
│   ├── disclaimer/        # Disclaimer page
│   ├── privacy/           # Privacy policy page
│   ├── results/           # Search results page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage with search form
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── theme-toggle.tsx  # Theme switcher
├── lib/                  # Utility functions
│   └── supabase.ts      # Supabase client and types
├── public/               # Static assets
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # Search engine directives
├── styles/              # Additional styles
└── hooks/              # Custom React hooks
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow

1. **Fork the repository**
   ```bash
   git fork https://github.com/nfonjeannoel/gce_results_website.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style and conventions
   - Add tests if applicable
   - Update documentation when necessary

4. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for new features
- `feature/*` - Individual feature development
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing Tailwind CSS patterns
- Use shadcn/ui components when possible
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure responsive design works on all screen sizes

### Areas for Contribution

- 🐛 **Bug Fixes**: Report and fix bugs
- ✨ **Features**: Add new search features or improve existing ones
- 🎨 **UI/UX**: Improve the user interface and experience
- 📱 **Mobile**: Enhance mobile responsiveness
- ♿ **Accessibility**: Improve accessibility features
- 🌍 **Internationalization**: Add multi-language support
- 📊 **Analytics**: Add usage analytics and insights
- 🔒 **Security**: Enhance security measures
- 📖 **Documentation**: Improve documentation and guides

## 🐛 Bug Reports & Feature Requests

Please use the [GitHub Issues](https://github.com/nfonjeannoel/gce_results_website/issues) page to:
- Report bugs with detailed reproduction steps
- Request new features with clear use cases
- Ask questions about the codebase
- Suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Cameroon GCE Board**: For providing the examination data
- **Contributors**: All the developers who have contributed to this project
- **Community**: Students and educators who use and provide feedback on this platform

## 📞 Support & Contact

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and community chat
- **Contact Page**: [https://gceresults.jeangineer.com/contact](https://gceresults.jeangineer.com/contact)

---

**⭐ If this project helps you, please give it a star on GitHub!**

*Built with ❤️ for the Cameroon education community* 