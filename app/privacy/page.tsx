import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for GCE Results search service."
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              asChild
              className="p-2"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">GCE Results</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold tracking-tight font-serif">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              How we protect your privacy and handle your data
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Data Protection & Privacy</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  1. Information We Collect
                </h3>
                <p className="text-muted-foreground mb-3">
                  We are committed to protecting your privacy. The information we collect is minimal and 
                  used solely to provide the search service:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Search Queries:</strong> Temporary processing of search terms (student names, center numbers, school names)</li>
                  <li><strong>Technical Data:</strong> Basic server logs for system maintenance and security</li>
                  <li><strong>Usage Analytics:</strong> Anonymous usage statistics to improve service performance</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  <strong>We do NOT collect:</strong> Personal identification information, contact details, 
                  or any data that could identify individual users beyond their search queries.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  2. How We Use Your Information
                </h3>
                <p className="text-muted-foreground mb-3">
                  The limited information we collect is used exclusively for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Processing search requests and returning examination results</li>
                  <li>Maintaining system security and preventing abuse</li>
                  <li>Improving service performance and user experience</li>
                  <li>Generating anonymous usage statistics</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  3. Data Storage & Retention
                </h3>
                <p className="text-muted-foreground mb-3">
                  We follow strict data minimization principles:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Search Queries:</strong> Not stored permanently; processed in real-time only</li>
                  <li><strong>Server Logs:</strong> Automatically deleted after 30 days</li>
                  <li><strong>Analytics Data:</strong> Aggregated and anonymized; retained for 12 months</li>
                  <li><strong>Examination Results:</strong> Sourced from official databases; not stored on our servers</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  4. Data Sharing & Third Parties
                </h3>
                <p className="text-muted-foreground mb-3">
                  We do not share, sell, or distribute your personal information to third parties. 
                  The only data sharing occurs with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Official Database Providers:</strong> To retrieve examination results (query only)</li>
                  <li><strong>Hosting Services:</strong> Technical infrastructure providers bound by privacy agreements</li>
                  <li><strong>Legal Requirements:</strong> Only if required by law or to protect our rights</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  5. Cookies & Tracking
                </h3>
                <p className="text-muted-foreground mb-3">
                  Our use of cookies is minimal and focused on functionality:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Theme Preferences:</strong> To remember your dark/light mode preference</li>
                  <li><strong>Performance Cookies:</strong> Anonymous analytics to improve service</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  We do not use advertising cookies, social media trackers, or any invasive tracking technologies.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  6. Security Measures
                </h3>
                <p className="text-muted-foreground mb-3">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Secure server infrastructure with regular security updates</li>
                  <li>Access controls and monitoring systems</li>
                  <li>Regular security audits and vulnerability assessments</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  7. Your Rights
                </h3>
                <p className="text-muted-foreground mb-3">
                  You have the following rights regarding your data:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li><strong>Access:</strong> Request information about any data we may have</li>
                  <li><strong>Correction:</strong> Request correction of any inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (where applicable)</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  8. Children's Privacy
                </h3>
                <p className="text-muted-foreground">
                  While many of our users may be minors searching for their examination results, we do not 
                  knowingly collect personal information from children under 13. Parents and guardians should 
                  supervise their children's use of this service. If you believe a child has provided personal 
                  information, please contact us immediately.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  9. International Data Transfers
                </h3>
                <p className="text-muted-foreground">
                  Our services are primarily hosted within secure data centers with appropriate safeguards. 
                  Any international data transfers are conducted in compliance with applicable data protection 
                  laws and with appropriate security measures in place.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  10. Changes to This Policy
                </h3>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time to reflect changes in our services 
                  or legal requirements. Any significant changes will be highlighted on our website. 
                  Continued use of the service after policy updates constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                  11. Contact Information
                </h3>
                <p className="text-muted-foreground">
                  For privacy-related questions, concerns, or to exercise your rights, please contact us at:
                </p>
                <div className="mt-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:nfonjeannoel1@gmail.com" className="text-green-600 hover:underline">
                      nfonjeannoel1@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-1">
                    <strong>Subject Line:</strong> Privacy Policy Inquiry - GCE Results
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  We will respond to your privacy inquiries within 30 days of receipt.
                </p>
              </section>

              <section className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  Commitment to Privacy
                </h3>
                <p className="text-muted-foreground font-medium">
                  We are committed to protecting your privacy and handling your data responsibly. 
                  This service is designed with privacy-by-design principles, collecting only the 
                  minimum data necessary to provide the search functionality.
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Last updated: January 2024
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 