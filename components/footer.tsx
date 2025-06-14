import Link from "next/link"
import { GraduationCap, Shield, AlertTriangle, MessageCircle, GraduationCap as StudentIcon, Hash, School } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Brand */}
          <div className="space-y-4 md:flex-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">GCE Results</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, reliable access to Cameroon GCE examination results. Search your O-Level and A-Level results easily.
            </p>
          </div>

          {/* Quick Links - Middle */}
          <div className="space-y-4 md:flex-1 md:text-center">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/?tab=name" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-center">
                  <StudentIcon className="h-3 w-3" />
                  Search by Student Name
                </Link>
              </li>
              <li>
                <Link href="/?tab=number" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-center">
                  <Hash className="h-3 w-3" />
                  Search by Center Number
                </Link>
              </li>
              <li>
                <Link href="/?tab=school" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-center">
                  <School className="h-3 w-3" />
                  Search by School Name
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal - Right */}
          <div className="space-y-4 md:flex-1 md:text-right">
            <h3 className="text-sm font-semibold">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-end">
                  <AlertTriangle className="h-3 w-3" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-end">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 md:justify-end">
                  <MessageCircle className="h-3 w-3" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              © 2025 GCE Results. All rights reserved. 
              <span className="ml-2">
                Results sourced from official GCE Board databases.
              </span>
            </p>
            <div className="flex items-center gap-4">
              <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 