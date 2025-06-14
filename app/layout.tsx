import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gce-results.netlify.app'),
  title: {
    default: "GCE Results - Cameroon GCE Examination Results Search",
    template: "%s | GCE Results"
  },
  description: "Search and view your Cameroon GCE (General Certificate of Education) examination results. Fast, reliable access to O-Level and A-Level results from all examination centers across Cameroon.",
  keywords: [
    "GCE Results",
    "Cameroon GCE",
    "O-Level Results",
    "A-Level Results", 
    "Ordinary Level",
    "Advanced Level",
    "Cameroon Examination Results",
    "GCE Board Cameroon",
    "Educational Assessment",
    "Student Results",
    "Examination Center",
    "Academic Performance"
  ],
  authors: [{ name: "GCE Results Team" }],
  creator: "GCE Results",
  publisher: "GCE Results",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gce-results.netlify.app',
    siteName: 'GCE Results',
    title: 'GCE Results - Cameroon GCE Examination Results Search',
    description: 'Search and view your Cameroon GCE examination results. Fast, reliable access to O-Level and A-Level results from all examination centers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GCE Results - Cameroon Examination Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCE Results - Cameroon GCE Examination Results Search',
    description: 'Search and view your Cameroon GCE examination results. Fast, reliable access to O-Level and A-Level results.',
    images: ['/og-image.jpg'],
    creator: '@gce_results',
  },
  alternates: {
    canonical: 'https://gce-results.netlify.app',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GCE Results",
    "description": "Search and view your Cameroon GCE examination results. Fast, reliable access to O-Level and A-Level results from all examination centers.",
    "url": "https://gce-results.netlify.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gce-results.netlify.app/results?type={search_type}&value={search_term}"
      },
      "query-input": "required name=search_term"
    },
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "GCE Board Cameroon",
      "description": "General Certificate of Education examination results for Cameroon students",
      "educationalLevel": ["Secondary Education", "O-Level", "A-Level"],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CM",
        "addressRegion": "Cameroon"
      }
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
